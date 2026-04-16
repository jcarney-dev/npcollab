import { NextRequest, NextResponse } from 'next/server';
import { createSessionToken, sessionCookieOptions } from '@/lib/session';

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  // Issue a proper session JWT with role=admin
  const token = await createSessionToken({
    userId: 'admin',
    email: process.env.ADMIN_EMAIL || 'admin@npcollab.com',
    role: 'admin',
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(sessionCookieOptions(token));

  // Also set legacy cookie so old routes still work during any transition period
  res.cookies.set({
    name: 'npcollab_admin',
    value: password,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 8,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return res;
}
