// Helper for interacting with Upstash Redis via REST API
// Works with KV_REST_API_URL/TOKEN or UPSTASH_REDIS_REST_URL/TOKEN

const REDIS_URL = process.env.KV_REST_API_URL || 
                  process.env.UPSTASH_REDIS_REST_URL ||
                  process.env.STORAGE_REST_API_URL;

const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || 
                    process.env.UPSTASH_REDIS_REST_TOKEN ||
                    process.env.STORAGE_REST_API_TOKEN;

export async function redisCommand(commandArray) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return { error: 'Redis environment variables not configured.' };
  }

  try {
    const res = await fetch(REDIS_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${REDIS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commandArray)
    });

    if (!res.ok) {
      const errText = await res.text();
      return { error: `Redis HTTP ${res.status}: ${errText}` };
    }

    const data = await res.json();
    return { result: data.result };
  } catch (err) {
    return { error: err.message };
  }
}

// Check if a license key is in the revoked set
export async function isKeyRevokedInRedis(key) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  const res = await redisCommand(['SISMEMBER', 'apex:revoked_keys', key]);
  return res.result === 1;
}

// Add key to revoked set with optional custom revocation reason
export async function revokeKeyInRedis(key, reason) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  await redisCommand(['SADD', 'apex:revoked_keys', key]);
  if (reason) {
    await redisCommand(['SET', `apex:revoke_reason:${key}`, reason]);
  }
  return true;
}

// Get specific revocation reason for a key
export async function getRevokeReasonFromRedis(key) {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  const res = await redisCommand(['GET', `apex:revoke_reason:${key}`]);
  return res.result || null;
}

// Remove key from revoked set (restore access)
export async function unrevokeKeyInRedis(key) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  await redisCommand(['SREM', 'apex:revoked_keys', key]);
  await redisCommand(['DEL', `apex:revoke_reason:${key}`]);
  return true;
}

// Set / Get individual message for a specific license key
export async function setIndividualMessageInRedis(key, message) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  if (!message || message.trim() === '') {
    await redisCommand(['DEL', `apex:individual_msg:${key}`]);
    return true;
  }
  const res = await redisCommand(['SET', `apex:individual_msg:${key}`, message]);
  return !res.error;
}

export async function getIndividualMessageFromRedis(key) {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  const res = await redisCommand(['GET', `apex:individual_msg:${key}`]);
  return res.result || null;
}

// Set / Get global broadcast announcement for everyone
export async function setGlobalBroadcastInRedis(message) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  if (!message || message.trim() === '') {
    await redisCommand(['DEL', 'apex:global_broadcast']);
    return true;
  }
  const res = await redisCommand(['SET', 'apex:global_broadcast', message]);
  return !res.error;
}

export async function getGlobalBroadcastFromRedis() {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  const res = await redisCommand(['GET', 'apex:global_broadcast']);
  return res.result || null;
}

// Store / sync buyer records to Redis
export async function getStoredBuyersFromRedis() {
  if (!REDIS_URL || !REDIS_TOKEN) return null;
  const res = await redisCommand(['GET', 'apex:buyers_data']);
  if (res.result) {
    try {
      return JSON.parse(res.result);
    } catch (e) {
      return null;
    }
  }
  return null;
}

export async function saveBuyersToRedis(buyers) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  const res = await redisCommand(['SET', 'apex:buyers_data', JSON.stringify(buyers)]);
  return !res.error;
}
