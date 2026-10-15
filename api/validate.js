import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const MASTER_SECRET = process.env.MASTER_SECRET || "ApexAlgo2026_RajKudle_MasterSecretKey#777";

// Default revoked list
const DEFAULT_REVOKED = [
  "APEX-6M-20270410-77209123-99AA"
];

// Anti-DDoS Rate Limiting: 60 requests per minute per IP
const ipRequests = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 60;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = ipRequests.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + RATE_LIMIT_WINDOW_MS;
    ipRequests.set(ip, record);
    return true;
  }
  record.count += 1;
  ipRequests.set(ip, record);
  return record.count <= MAX_REQUESTS_PER_WINDOW;
}

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
         req.headers['x-real-ip'] || 
         req.socket?.remoteAddress || 
         'unknown';
}

function getRevokedList() {
  const list = [...DEFAULT_REVOKED];
  
  // 1. Check process.env.REVOKED_KEYS
  if (process.env.REVOKED_KEYS) {
    const envKeys = process.env.REVOKED_KEYS.split(',').map(s => s.trim()).filter(Boolean);
    list.push(...envKeys);
  }

  // 2. Check api/blacklist.json file
  try {
    const blacklistPath = path.join(process.cwd(), 'api', 'blacklist.json');
    if (fs.existsSync(blacklistPath)) {
      const data = JSON.parse(fs.readFileSync(blacklistPath, 'utf8'));
      if (Array.isArray(data.revoked)) {
        list.push(...data.revoked);
      }
    }
  } catch (e) {
    // fallback
  }

  return new Set(list);
}

export default function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, User-Agent');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientIp = getClientIp(req);
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      status: 'rate_limited',
      message: 'Too many requests. Please wait 1 minute.'
    });
  }

  const { key, account } = req.query;

  if (!key) {
    return res.status(400).json({ status: 'invalid', message: 'Missing key parameter' });
  }

  const revokedSet = getRevokedList();

  // 1. Check if key is explicitly revoked
  if (revokedSet.has(key)) {
    return res.status(200).json({
      status: 'revoked',
      message: 'License has been revoked by the administrator.'
    });
  }

  // 2. Parse key format: APEX-{TIER}-{YYYYMMDD}-{ACCOUNT}-{SIG}
  const parts = key.split('-');
  if (parts.length !== 5 || parts[0] !== 'APEX') {
    return res.status(200).json({ status: 'invalid', message: 'Invalid key format.' });
  }

  const [, tier, expDate, targetAcc, sig] = parts;

  // 3. Cryptographic signature check
  // Matches MQL5 CryptEncode payload: tier + ":" + expDate + ":" + targetAcc + ":" + MASTER_SECRET
  const payload = `${tier}:${expDate}:${targetAcc}:${MASTER_SECRET}`;
  const expectedSig = crypto.createHash('sha256').update(payload, 'utf8').digest('hex').substring(0, 8).toUpperCase();

  if (sig.toUpperCase() !== expectedSig) {
    return res.status(200).json({ status: 'invalid', message: 'Invalid or forged license signature.' });
  }

  // 4. Expiration date check
  if (expDate.length !== 8) {
    return res.status(200).json({ status: 'invalid', message: 'Invalid expiration date in key.' });
  }

  const now = new Date();
  const year = parseInt(expDate.substring(0, 4), 10);
  const month = parseInt(expDate.substring(4, 6), 10) - 1;
  const day = parseInt(expDate.substring(6, 8), 10);
  const expiresAt = new Date(Date.UTC(year, month, day, 23, 59, 59));

  if (now > expiresAt) {
    return res.status(200).json({
      status: 'expired',
      message: `License expired on ${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}.`,
      tier,
      expires: expDate
    });
  }

  // 5. Account binding check (if account is not ANY)
  if (targetAcc !== 'ANY' && account && String(account) !== String(targetAcc)) {
    return res.status(200).json({
      status: 'unauthorized_account',
      message: `Key is locked to MT5 account ${targetAcc}. Current account is ${account}.`
    });
  }

  // 6. Authorized & Active!
  return res.status(200).json({
    status: 'active',
    tier,
    account: targetAcc,
    expires: `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    server_time: now.toISOString()
  });
}
