import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

const SESSION_COOKIE = 'npcollab_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

function getSecret(): Uint8Array {
  const secret = process.env.ACCESS_COOKIE_SECRET;
  if (!secret) throw new Error('ACCESS_COOKIE_SECRET env var is not set');
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  userId: string;
  email: string;
  role: string;
  [key: string]: unknown;
}

export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret());
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export function sessionCookieOptions(token: string) {
  return {
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: SESSION_MAX_AGE,
    path: '/',
  };
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;

/**
 * Shared admin auth helper for API route handlers.
 * Checks npcollab_session JWT (role === 'admin') first.
 * Falls back to npcollab_admin cookie for backwards compatibility.
 */
export async function requireAdmin(req: NextRequest): Promise<boolean> {
  // Primary: JWT session cookie
  const sessionToken = req.cookies.get(SESSION_COOKIE)?.value;
  if (sessionToken) {
    const session = await verifySessionToken(sessionToken);
    if (session?.role === 'admin') return true;
  }
  // Fallback: legacy password cookie
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}
