import { verifyToken } from './admin-auth.js';
import { 
  revokeKeyInRedis, 
  unrevokeKeyInRedis, 
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

  // GET: Fetch buyers from Redis
  if (req.method === 'GET') {
    const buyers = await getStoredBuyersFromRedis();
    return res.status(200).json({
      success: true,
      buyers: buyers || []
    });
  }

  // POST: Actions (toggle_revoke, sync_all, delete)
  if (req.method === 'POST') {
    const body = req.body || {};
    const { action, key, status, buyers } = body;

    if (action === 'toggle_revoke') {
      if (!key) {
        return res.status(400).json({ success: false, message: 'Missing key parameter' });
      }

      if (status === 'revoked') {
        await revokeKeyInRedis(key);
      } else {
        await unrevokeKeyInRedis(key);
      }

      // If full buyers list is passed, also persist it
      if (Array.isArray(buyers)) {
        await saveBuyersToRedis(buyers);
      }

      return res.status(200).json({
        success: true,
        message: status === 'revoked' ? `Key ${key} revoked successfully in Redis` : `Key ${key} restored successfully in Redis`,
        status: status
      });
    }

    if (action === 'sync') {
      if (Array.isArray(buyers)) {
        await saveBuyersToRedis(buyers);
        // Also ensure all revoked keys in list are in Redis set
        for (const b of buyers) {
          if (b.status === 'revoked' && b.key) {
            await revokeKeyInRedis(b.key);
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
