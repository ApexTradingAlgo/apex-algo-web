import crypto from 'crypto';
import { verifyToken } from './admin-auth.js';

const MASTER_SECRET = process.env.MASTER_SECRET || "ApexAlgo2026_RajKudle_MasterSecretKey#777";

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

  // 1. Verify Authorization Bearer token
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : '';

  const session = verifyToken(token);
  if (!session) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid or expired admin session token.'
    });
  }

  // 2. Extract key parameters from body
  const body = req.body || {};
  const { tier, expDate, account, channel, contact, price } = body;

  if (!tier || !expDate) {
    return res.status(400).json({
      success: false,
      message: 'Missing tier or expDate parameters.'
    });
  }

  const targetAcc = account ? String(account).trim() : 'ANY';

  // 3. Cryptographically sign the key on the secure server
  // Formula: tier:expDate:targetAcc:MASTER_SECRET
  const payload = `${tier}:${expDate}:${targetAcc}:${MASTER_SECRET}`;
  const sig = crypto.createHash('sha256').update(payload, 'utf8').digest('hex').substring(0, 8).toUpperCase();
  const generatedKey = `APEX-${tier}-${expDate}-${targetAcc}-${sig}`;

  return res.status(200).json({
    success: true,
    key: generatedKey,
    tier: tier,
    account: targetAcc,
    expDate: expDate,
    sig: sig,
    createdAt: new Date().toISOString()
  });
}
