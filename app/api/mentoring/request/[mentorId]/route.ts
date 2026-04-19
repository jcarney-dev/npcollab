import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors, mentoringRequests, usersV2 } from '@/lib/schema';
import { eq, and, gte } from 'drizzle-orm';
import { sendMentoringIntroduction } from '@/lib/email';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ mentorId: string }> }
) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const { mentorId: mentorIdStr } = await params;
  const mentorId = parseInt(mentorIdStr, 10);
  if (isNaN(mentorId)) return NextResponse.json({ error: 'Invalid mentor ID.' }, { status: 400 });

  // Fetch mentor
  const [mentor] = await db
    .select({
      id:      mentors.id,
      userId:  mentors.userId,
      name:    mentors.name,
      active:  mentors.active,
    })
    .from(mentors)
    .where(eq(mentors.id, mentorId))
    .limit(1);

  if (!mentor) return NextResponse.json({ error: 'Mentor not found.' }, { status: 404 });
  if (!mentor.active) return NextResponse.json({ error: 'This mentor is not currently accepting requests.' }, { status: 400 });

  // Prevent self-request
  if (mentor.userId === session.userId) {
    return NextResponse.json({ error: 'You cannot request yourself as a mentor.' }, { status: 400 });
  }

  // Fetch mentee
  const [mentee] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!mentee || !mentee.active || !mentee.approved) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // Fetch mentor's email
  const [mentorUser] = await db
    .select({ email: usersV2.email })
    .from(usersV2)
    .where(eq(usersV2.id, mentor.userId))
    .limit(1);

  if (!mentorUser) return NextResponse.json({ error: 'Mentor account not found.' }, { status: 404 });

  // 30-day duplicate guard
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const [existing] = await db
    .select({ id: mentoringRequests.id })
    .from(mentoringRequests)
    .where(
      and(
        eq(mentoringRequests.mentorId, mentorId),
        eq(mentoringRequests.menteeUserId, session.userId),
        gte(mentoringRequests.createdAt, thirtyDaysAgo)
      )
    )
    .limit(1);

  if (existing) {
    return NextResponse.json(
      { error: 'You have already sent an introduction request to this mentor in the last 30 days.' },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { message } = body;

  if (!message?.trim()) return NextResponse.json({ error: 'A message is required.' }, { status: 400 });
  if (message.length > 500) return NextResponse.json({ error: 'Message must be 500 characters or fewer.' }, { status: 400 });

  // Insert request record
  await db.insert(mentoringRequests).values({
    mentorId,
    menteeUserId: session.userId,
    menteeName:   mentee.name,
    menteeEmail:  mentee.email,
    message:      message.trim(),
  });

  // Send email (non-blocking)
  try {
    await sendMentoringIntroduction({
      mentorName:        mentor.name,
      mentorEmail:       mentorUser.email,
      menteeName:        mentee.name,
      menteeEmail:       mentee.email,
      menteeRole:        mentee.currentRole || '',
      menteeCredentials: mentee.npEndorsement || '',
      message:           message.trim(),
    });
  } catch (err) {
    console.error('[mentoring] Failed to send introduction email:', err);
  }

  return NextResponse.json({ ok: true });
}
