import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors, usersV2 } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const specialty = searchParams.get('specialty') || '';
  const state     = searchParams.get('state') || '';
  const mode      = searchParams.get('mode') || '';

  // Fetch all active mentors, excluding the requesting user
  const rows = await db
    .select({
      id:            mentors.id,
      userId:        mentors.userId,
      name:          mentors.name,
      credentials:   mentors.credentials,
      specialtyArea: mentors.specialtyArea,
      state:         mentors.state,
      currentRole:   mentors.currentRole,
      employer:      mentors.employer,
      bio:           mentors.bio,
      mode:          mentors.mode,
      maxMentees:    mentors.maxMentees,
      createdAt:     mentors.createdAt,
    })
    .from(mentors)
    .where(eq(mentors.active, true));

  // Exclude current user and apply filters in JS (avoids complex SQL for small sets)
  const filtered = rows.filter(m => {
    if (m.userId === session.userId) return false;
    if (specialty && !m.specialtyArea.toLowerCase().includes(specialty.toLowerCase())) return false;
    if (state && m.state !== state) return false;
    if (mode && !m.mode.toLowerCase().includes(mode.toLowerCase())) return false;
    return true;
  });

  return NextResponse.json(filtered);
}
