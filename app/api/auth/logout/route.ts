import { NextResponse } from 'next/server';
import { SESSION_COOKIE_NAME } from '@/lib/session';

export async function POST() {
  const res = NextResponse.json({ success: true });

  const cookieBase = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 0,
    path: '/',
  };

  // Clear all auth cookies
  res.cookies.set({ name: SESSION_COOKIE_NAME, value: '', ...cookieBase });
  res.cookies.set({ name: 'npcollab_admin',   value: '', ...cookieBase });
  res.cookies.set({ name: 'npcollab_access',  value: '', ...cookieBase });

  return res;
}
