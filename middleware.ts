import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessCookie, COOKIE_NAME } from '@/lib/auth';

/**
 * Routes that require a valid access cookie.
 * Everything else (/, /request-access, /enter-access, /about, /support) is public.
 */
const PROTECTED_PREFIXES = [
  '/modules',
  '/scope',
  '/assessment',
  '/clinical-essentials',
  '/health-tech',
  '/research',
  '/business',
];

/**
 * Admin routes — protected by a separate admin cookie.
 */
const ADMIN_PREFIX = '/admin';

function isProtected(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

function isAdmin(pathname: string): boolean {
  return pathname.startsWith(ADMIN_PREFIX);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Admin routes
  if (isAdmin(pathname) && pathname !== '/admin/login') {
    const adminCookie = req.cookies.get('npcollab_admin');
    if (!adminCookie?.value || adminCookie.value !== process.env.ADMIN_PASSWORD) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/admin/login';
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Protected content routes
  if (isProtected(pathname)) {
    const accessCookie = req.cookies.get(COOKIE_NAME);

    if (!accessCookie?.value) {
      return redirectToEnterAccess(req);
    }

    const userId = await verifyAccessCookie(accessCookie.value);
    if (!userId) {
      return redirectToEnterAccess(req);
    }

    // Valid — pass through
    return NextResponse.next();
  }

  return NextResponse.next();
}

function redirectToEnterAccess(req: NextRequest): NextResponse {
  const url = req.nextUrl.clone();
  url.pathname = '/enter-access';
  url.searchParams.set('from', req.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/modules/:path*',
    '/scope/:path*',
    '/assessment/:path*',
    '/clinical-essentials/:path*',
    '/health-tech/:path*',
    '/research/:path*',
    '/business/:path*',
    '/admin/:path*',
  ],
};
