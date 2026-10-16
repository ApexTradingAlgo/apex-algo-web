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

// Add key to revoked set
export async function revokeKeyInRedis(key) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  const res = await redisCommand(['SADD', 'apex:revoked_keys', key]);
  return !res.error;
}

// Remove key from revoked set (restore access)
export async function unrevokeKeyInRedis(key) {
  if (!REDIS_URL || !REDIS_TOKEN) return false;
  const res = await redisCommand(['SREM', 'apex:revoked_keys', key]);
  return !res.error;
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
