/**
 * Cookie signing for npcollab_access.
 * Format: <userId>.<hmac-sha256-hex>
 * Secret: ACCESS_COOKIE_SECRET env var (32+ chars)
 */

const COOKIE_NAME = 'npcollab_access';

function getSecret(): string {
  const secret = process.env.ACCESS_COOKIE_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('ACCESS_COOKIE_SECRET must be set and at least 32 characters');
  }
  return secret;
}

async function hmac(secret: string, data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function signAccessCookie(userId: string): Promise<string> {
  const secret = getSecret();
  const sig = await hmac(secret, userId);
  return `${userId}.${sig}`;
}

export async function verifyAccessCookie(value: string): Promise<string | null> {
  try {
    const secret = getSecret();
    const lastDot = value.lastIndexOf('.');
    if (lastDot === -1) return null;

    const userId = value.slice(0, lastDot);
    const providedSig = value.slice(lastDot + 1);
    const expectedSig = await hmac(secret, userId);

    // Constant-time compare
    if (providedSig.length !== expectedSig.length) return null;
    let diff = 0;
    for (let i = 0; i < providedSig.length; i++) {
      diff |= providedSig.charCodeAt(i) ^ expectedSig.charCodeAt(i);
    }
    if (diff !== 0) return null;

    return userId;
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
