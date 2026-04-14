import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// ── Constants ─────────────────────────────────────────────────────────────────

const SESSION_COOKIE = 'npcollab_session';

// Routes that are fully public — no session required
const PUBLIC_PREFIXES = [
  '/login',
  '/request-access',
  '/auth/verify',
  '/about',
  '/support',
  '/advertise',
  '/employers',
  '/community/courses/submit',
  '/api/auth/',
  '/api/admin/users/approve',
  '/api/admin/users/reject',
  '/api/jobs/import',
  '/api/jobs/stripe-webhook',
  '/_next/',
  '/favicon',
];

// Routes that require a valid session
const PROTECTED_PREFIXES = [
  '/modules/',
  '/scope',
  '/assessment',
  '/clinical-essentials/',
  '/health-tech/',
  '/research/',
  '/business',
  '/community/',
  '/dashboard',
  '/profile/',
];

// Admin-only routes
const ADMIN_PREFIXES = ['/admin'];

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSecret(): Uint8Array {
  const secret = process.env.ACCESS_COOKIE_SECRET;
  if (!secret) throw new Error('ACCESS_COOKIE_SECRET not set');
  return new TextEncoder().encode(secret);
}

interface SessionPayload {
  userId: string;
  email: string;
  role: string;
}

async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

function isPublic(pathname: string): boolean {
  if (pathname === '/') return true;
  return PUBLIC_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

function requiresSession(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

function requiresAdmin(pathname: string): boolean {
  return ADMIN_PREFIXES.some(prefix => pathname.startsWith(prefix));
}

// ── Middleware ────────────────────────────────────────────────────────────────

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow public routes through
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;

  // ── Admin routes ──────────────────────────────────────────────────────────
  if (requiresAdmin(pathname)) {
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const session = await verifySession(token);
    if (!session) {
      const res = NextResponse.redirect(new URL('/login', req.url));
      res.cookies.delete(SESSION_COOKIE);
      return res;
    }

    if (session.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
  }

  // ── Protected routes ──────────────────────────────────────────────────────
  if (requiresSession(pathname)) {
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const session = await verifySession(token);
    if (!session) {
      const res = NextResponse.redirect(new URL('/login', req.url));
      res.cookies.delete(SESSION_COOKIE);
      return res;
    }

    // Session is valid at the JWT level — active/approved checks happen in the page
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimisation)
     * - favicon.ico
     * - public folder files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
