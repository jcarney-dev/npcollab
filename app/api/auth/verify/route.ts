import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, magicLinks } from '@/lib/schema';
import { eq, and, gt } from 'drizzle-orm';
import { createSessionToken, sessionCookieOptions } from '@/lib/session';

export async function POST(req: NextRequest) {
  let body: { token?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'invalid_request' }, { status: 400 });
  }

  const token = body.token?.trim();
  if (!token) {
    return NextResponse.json({ success: false, error: 'missing_token' }, { status: 400 });
  }

  try {
    // Find the magic link — must exist, not used, not expired
    const now = new Date();
    const [link] = await db
      .select()
      .from(magicLinks)
      .where(and(
        eq(magicLinks.token, token),
        eq(magicLinks.used, false),
        gt(magicLinks.expiresAt, now),
      ))
      .limit(1);

    if (!link) {
      return NextResponse.json({ success: false, error: 'expired' }, { status: 401 });
    }

    // Find the associated user — must be approved and active
    const [user] = await db
      .select()
      .from(usersV2)
      .where(and(
        eq(usersV2.email, link.email),
        eq(usersV2.approved, true),
        eq(usersV2.active, true),
      ))
      .limit(1);

    if (!user) {
      return NextResponse.json({ success: false, error: 'expired' }, { status: 401 });
    }

    // Mark token as used and update last_login in parallel
    await Promise.all([
      db.update(magicLinks)
        .set({ used: true })
        .where(eq(magicLinks.id, link.id)),
      db.update(usersV2)
        .set({ lastLogin: now })
        .where(eq(usersV2.id, user.id)),
    ]);

    // Create JWT session token
    const sessionToken = await createSessionToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Build response with session cookie
    const cookieOpts = sessionCookieOptions(sessionToken);
    const res = NextResponse.json({ success: true, redirect: '/dashboard' });
    res.cookies.set(cookieOpts);
    return res;
  } catch (err) {
    console.error('[auth/verify]', err);
    return NextResponse.json({ success: false, error: 'server_error' }, { status: 500 });
  }
}
