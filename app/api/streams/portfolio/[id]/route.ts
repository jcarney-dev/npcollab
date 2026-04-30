import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { portfolioEntries, mentorReviewTokens, usersV2 } from '@/lib/schema';
import { and, eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';
import { sendMentorReviewEmail } from '@/lib/email';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com.au';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const [entry] = await db
    .select()
    .from(portfolioEntries)
    .where(and(eq(portfolioEntries.id, id), eq(portfolioEntries.userId, session.userId)))
    .limit(1);

  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (entry.status !== 'draft') {
    return NextResponse.json({ error: 'Cannot delete a submitted entry' }, { status: 400 });
  }

  await db.delete(portfolioEntries).where(eq(portfolioEntries.id, id));
  return NextResponse.json({ ok: true });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const { action, mentorEmail } = await req.json();

  if (action !== 'resend') return NextResponse.json({ error: 'Unknown action' }, { status: 400 });

  const [entry] = await db
    .select()
    .from(portfolioEntries)
    .where(and(eq(portfolioEntries.id, id), eq(portfolioEntries.userId, session.userId)))
    .limit(1);

  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (entry.status !== 'pending_review') {
    return NextResponse.json({ error: 'Entry is not pending review' }, { status: 400 });
  }

  const emailTo = mentorEmail || entry.mentorEmail;
  if (!emailTo) return NextResponse.json({ error: 'No mentor email' }, { status: 400 });

  const [user] = await db
    .select({ name: usersV2.name })
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  const token = randomBytes(24).toString('hex');
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  await db.insert(mentorReviewTokens).values({
    portfolioEntryId: id,
    token,
    mentorEmail: emailTo,
    expiresAt,
  });

  if (mentorEmail && mentorEmail !== entry.mentorEmail) {
    await db.update(portfolioEntries)
      .set({ mentorEmail, updatedAt: new Date() })
      .where(eq(portfolioEntries.id, id));
  }

  const reviewUrl = `${SITE_URL}/streams/mentor-review/${token}`;
  await sendMentorReviewEmail({
    mentorEmail: emailTo,
    userName: user?.name ?? 'A trainee',
    formType: entry.formType as 'mini-cex' | 'dops',
    procedureTitle: entry.title,
    reviewUrl,
  });

  return NextResponse.json({ ok: true });
}
