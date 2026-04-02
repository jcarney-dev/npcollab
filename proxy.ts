import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessCookie, COOKIE_NAME } from '@/lib/auth';

/**
 * Public routes — everything else requires a valid access cookie.
 */
const PUBLIC_PATHS = new Set([
  '/',
  '/request-access',
  '/enter-access',
  '/about',
  '/support',
  '/analytics',
  '/admin/login',
]);

function isPublic(pathname: string): boolean {
  if (PUBLIC_PATHS.has(pathname)) return true;
  // Allow Next.js internals and API routes that don't need protection
  if (pathname.startsWith('/_next/')) return true;
  if (pathname.startsWith('/favicon')) return true;
  // Admin API routes and public API routes are handled separately
  if (pathname.startsWith('/api/')) return true;
  return false;
}

function isAdminRoute(pathname: string): boolean {
  return pathname.startsWith('/admin') && pathname !== '/admin/login';
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public paths early
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // Admin routes — protected by admin password cookie
  if (isAdminRoute(pathname)) {
    const adminCookie = req.cookies.get('npcollab_admin');
    if (!adminCookie?.value || adminCookie.value !== process.env.ADMIN_PASSWORD) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/admin/login';
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // All other routes require a valid access cookie
  const accessCookie = req.cookies.get(COOKIE_NAME);

  if (!accessCookie?.value) {
    return redirectToEnterAccess(req);
  }

  const userId = await verifyAccessCookie(accessCookie.value);
  if (!userId) {
    // Cookie present but invalid — clear it and redirect
    const response = redirectToEnterAccess(req);
    response.cookies.delete(COOKIE_NAME);
    return response;
  }

  return NextResponse.next();
}

function redirectToEnterAccess(req: NextRequest): NextResponse {
  const url = req.nextUrl.clone();
  const from = req.nextUrl.pathname;
  url.pathname = '/enter-access';
  url.searchParams.set('from', from);
  return NextResponse.redirect(url);
}

export const config = {
  // Match everything except static files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
