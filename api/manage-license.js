import { verifyToken } from './admin-auth.js';
import { 
  revokeKeyInRedis, 
  unrevokeKeyInRedis, 
  setIndividualMessageInRedis,
  getIndividualMessageFromRedis,
  setGlobalBroadcastInRedis,
  getGlobalBroadcastFromRedis,
  getStoredBuyersFromRedis, 
  saveBuyersToRedis 
} from './redis.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
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

  // GET: Fetch buyers & global broadcast from Redis
  if (req.method === 'GET') {
    const buyers = await getStoredBuyersFromRedis();
    const broadcast = await getGlobalBroadcastFromRedis();
    return res.status(200).json({
      success: true,
      buyers: buyers || [],
      broadcast: broadcast || ''
    });
  }

  // POST: Actions
  if (req.method === 'POST') {
    const body = req.body || {};
    const { action, key, status, reason, message, buyers } = body;

    // A. Toggle Revoke with optional custom reason
    if (action === 'toggle_revoke') {
      if (!key) {
        return res.status(400).json({ success: false, message: 'Missing key parameter' });
      }

      if (status === 'revoked') {
        await revokeKeyInRedis(key, reason);
      } else {
        await unrevokeKeyInRedis(key);
      }

      if (Array.isArray(buyers)) {
        await saveBuyersToRedis(buyers);
      }

      return res.status(200).json({
        success: true,
        message: status === 'revoked' ? `Key revoked with reason: "${reason || 'Default'}"` : `Access restored for ${key}`,
        status: status
      });
    }

    // B. Send or clear individual message
    if (action === 'send_individual_message') {
      if (!key) {
        return res.status(400).json({ success: false, message: 'Missing key parameter' });
      }
      await setIndividualMessageInRedis(key, message);
      return res.status(200).json({
        success: true,
        message: message ? `Message sent to buyer with key ${key}` : `Message cleared for ${key}`
      });
    }

    // C. Send or clear global broadcast announcement to everyone
    if (action === 'set_global_broadcast') {
      await setGlobalBroadcastInRedis(message);
      return res.status(200).json({
        success: true,
        message: message ? `Global broadcast active for all buyers!` : `Global broadcast cleared.`
      });
    }

    // D. Full sync of buyers sheet
    if (action === 'sync') {
      if (Array.isArray(buyers)) {
        await saveBuyersToRedis(buyers);
        for (const b of buyers) {
          if (b.status === 'revoked' && b.key) {
            await revokeKeyInRedis(b.key, b.revokeReason || null);
          } else if (b.status === 'active' && b.key) {
            await unrevokeKeyInRedis(b.key);
          }
        }
        return res.status(200).json({ success: true, message: 'Synced buyers to Redis' });
      }
      return res.status(400).json({ success: false, message: 'Invalid buyers array' });
    }

    return res.status(400).json({ success: false, message: 'Unknown action' });
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
