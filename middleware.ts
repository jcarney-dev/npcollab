import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessCookie, COOKIE_NAME } from '@/lib/auth';
import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── Admin routes ──────────────────────────────────────────────────────────
  if (pathname.startsWith('/admin')) {
    // /admin/login is always public
    if (pathname === '/admin/login') return NextResponse.next();

    const adminCookie = req.cookies.get('npcollab_admin');
    if (!adminCookie?.value || adminCookie.value !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    return NextResponse.next();
  }

  // ── Protected content routes ──────────────────────────────────────────────
  const accessCookie = req.cookies.get(COOKIE_NAME);

  // No cookie at all → redirect immediately
  if (!accessCookie?.value) {
    return redirectToEnterAccess(req);
  }

  // Verify HMAC signature → get user ID
  const userId = await verifyAccessCookie(accessCookie.value);
  if (!userId) {
    const res = redirectToEnterAccess(req);
    res.cookies.delete(COOKIE_NAME);
    return res;
  }

  // Check the user still exists and is active in the database
  const [user] = await db
    .select({ id: users.id, active: users.active })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (!user || !user.active) {
    const res = redirectToEnterAccess(req);
    res.cookies.delete(COOKIE_NAME);
    return res;
  }

  return NextResponse.next();
}

function redirectToEnterAccess(req: NextRequest): NextResponse {
  const url = new URL('/enter-access', req.url);
  url.searchParams.set('from', req.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/modules/:path*',
    '/scope',
    '/assessment',
    '/clinical-essentials/:path*',
    '/health-tech/:path*',
    '/research/:path*',
    '/business',
    '/admin/:path*',
  ],
};
