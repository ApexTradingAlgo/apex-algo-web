import crypto from 'crypto';

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASSWORD || "apex2026";
const SESSION_SECRET = process.env.SESSION_SECRET || "ApexAlgo2026_RajKudle_AdminSessionSecret#999";

// Rate limiting in-memory store for failed attempts
const failedAttempts = new Map();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

function getClientIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
         req.headers['x-real-ip'] || 
         req.socket?.remoteAddress || 
         'unknown';
}

function isRateLimited(ip) {
  const record = failedAttempts.get(ip);
  if (!record) return false;
  if (Date.now() - record.lastAttempt > LOCKOUT_MS) {
    failedAttempts.delete(ip);
    return false;
  }
  return record.count >= MAX_FAILED_ATTEMPTS;
}

function recordFailedAttempt(ip) {
  const record = failedAttempts.get(ip) || { count: 0, lastAttempt: Date.now() };
  record.count += 1;
  record.lastAttempt = Date.now();
  failedAttempts.set(ip, record);
}

function resetFailedAttempts(ip) {
  failedAttempts.delete(ip);
}

export function createToken(payload) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", SESSION_SECRET).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${sig}`;
}

export function verifyToken(token) {
  try {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, body, sig] = parts;

    const expectedSig = crypto.createHmac("sha256", SESSION_SECRET).update(`${header}.${body}`).digest("base64url");
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) {
      return null; // Expired
    }
    return payload;
  } catch (e) {
    return null;
  }
}

function timingSafeMatch(a, b) {
  const bufA = Buffer.from(String(a || ''));
  const bufB = Buffer.from(String(b || ''));
  if (bufA.length !== bufB.length) {
    // Fake comparison to mitigate timing leaks
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export default function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const clientIp = getClientIp(req);

  // Check rate limit on login
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Too many failed login attempts. Portal locked for 15 minutes for your security.'
    });
  }

  const body = req.body || {};
  const { action, username, password, token } = body;

  // Session verification action
  if (action === 'verify') {
    const verified = verifyToken(token);
    if (verified) {
      return res.status(200).json({ success: true, user: verified.user, expiresAt: verified.exp });
    } else {
      return res.status(401).json({ success: false, message: 'Session expired or invalid.' });
    }
  }

  // Login action
  const isUserValid = timingSafeMatch(username?.trim(), ADMIN_USER);
  const isPassValid = timingSafeMatch(password?.trim(), ADMIN_PASS);

  if (isUserValid && isPassValid) {
    resetFailedAttempts(clientIp);
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    const sessionToken = createToken({
      user: ADMIN_USER,
      iat: Date.now(),
      exp: expiresAt
    });

    return res.status(200).json({
      success: true,
      token: sessionToken,
      expiresAt: expiresAt
    });
  } else {
    recordFailedAttempt(clientIp);
    const currentRecord = failedAttempts.get(clientIp);
    const remaining = MAX_FAILED_ATTEMPTS - (currentRecord ? currentRecord.count : 1);
    return res.status(401).json({
      success: false,
      message: remaining > 0 
        ? `Invalid Admin ID or Password. (${remaining} attempt${remaining === 1 ? '' : 's'} remaining)`
        : 'Too many failed login attempts. Portal locked for 15 minutes.'
    });
  }
}
