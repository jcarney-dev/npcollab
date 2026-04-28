import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { pageViews } from '@/lib/schema';

const MIN_DURATION = 2;

export async function POST(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ ok: false }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session?.userId) return NextResponse.json({ ok: false }, { status: 401 });

  let body: { path?: string; duration?: number; sessionId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { path, duration, sessionId } = body;

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

  // Strip query strings and fragments, keep only the pathname
  let normalizedPath = path;
  try {
    normalizedPath = new URL(path, 'https://x').pathname;
  } catch {
    // path is already a pathname — use as-is
  }

  await db.insert(pageViews).values({
    userId:    session.userId,
    sessionId,
    path:      normalizedPath,
    duration:  Math.round(duration),
  });

  return NextResponse.json({ ok: true });
}
