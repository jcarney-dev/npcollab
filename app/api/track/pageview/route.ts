import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { pageViews } from '@/lib/schema';

const MIN_DURATION = 2;

function parseUserAgent(ua: string): { deviceType: string; browser: string } {
  const lower = ua.toLowerCase();

  let deviceType = 'desktop';
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) deviceType = 'tablet';
  else if (/mobile|android|iphone|ipod|blackberry|windows phone/i.test(ua)) deviceType = 'mobile';

  let browser = 'Other';
  if (lower.includes('edg/') || lower.includes('edge/'))         browser = 'Edge';
  else if (lower.includes('chrome') && !lower.includes('chromium')) browser = 'Chrome';
  else if (lower.includes('chromium'))                             browser = 'Chromium';
  else if (lower.includes('firefox'))                              browser = 'Firefox';
  else if (lower.includes('safari') && !lower.includes('chrome')) browser = 'Safari';
  else if (lower.includes('opr/') || lower.includes('opera'))     browser = 'Opera';

  return { deviceType, browser };
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ ok: false }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session?.userId) return NextResponse.json({ ok: false }, { status: 401 });

  let body: { path?: string; referrer?: string; duration?: number; sessionId?: string; scrollDepth?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { path, referrer = '', duration, sessionId, scrollDepth = 0 } = body;

  if (!path || typeof path !== 'string' || path.length > 2000) {
    return NextResponse.json({ ok: false, error: 'Invalid path' }, { status: 400 });
  }
  if (typeof duration !== 'number' || duration < 0) {
    return NextResponse.json({ ok: false, error: 'Invalid duration' }, { status: 400 });
  }
  if (!sessionId || typeof sessionId !== 'string' || sessionId.length > 128) {
    return NextResponse.json({ ok: false, error: 'Invalid sessionId' }, { status: 400 });
  }

  if (duration < MIN_DURATION) {
    return NextResponse.json({ ok: false, reason: 'too_short' });
  }

  // Keep only the pathname component
  let normalizedPath = path;
  let normalizedReferrer = referrer;
  try { normalizedPath = new URL(path, 'https://x').pathname; } catch { /* already a pathname */ }
  try { normalizedReferrer = referrer ? new URL(referrer, 'https://x').pathname : ''; } catch { /* already a pathname */ }

  const ua = req.headers.get('user-agent') || '';
  const { deviceType, browser } = parseUserAgent(ua);

  await db.insert(pageViews).values({
    userId:      session.userId,
    sessionId,
    path:        normalizedPath,
    referrer:    normalizedReferrer,
    duration:    Math.round(duration),
    scrollDepth: Math.min(100, Math.max(0, Math.round(scrollDepth))),
    deviceType,
    browser,
  });

  return NextResponse.json({ ok: true });
}
