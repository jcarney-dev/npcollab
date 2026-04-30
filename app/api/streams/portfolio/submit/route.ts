import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { portfolioEntries, mentorReviewTokens, usersV2 } from '@/lib/schema';
import { and, eq } from 'drizzle-orm';
import { randomBytes } from 'crypto';
import { sendMentorReviewEmail } from '@/lib/email';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://npcollab.com.au';

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id, mentorEmail } = await req.json();
  if (!id || !mentorEmail) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });

  const [entry] = await db
    .select()
    .from(portfolioEntries)
    .where(and(eq(portfolioEntries.id, id), eq(portfolioEntries.userId, session.userId)))
    .limit(1);

  if (!entry) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (entry.status !== 'draft') {
    return NextResponse.json({ error: 'Entry already submitted' }, { status: 400 });
  }

  const [user] = await db
    .select({ name: usersV2.name })
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  const token = randomBytes(24).toString('hex');
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  await db.update(portfolioEntries)
    .set({ status: 'pending_review', mentorEmail, submittedAt: new Date(), updatedAt: new Date() })
    .where(eq(portfolioEntries.id, id));

  await db.insert(mentorReviewTokens).values({
    portfolioEntryId: id,
    token,
    mentorEmail,
    expiresAt,
  });

  const reviewUrl = `${SITE_URL}/streams/mentor-review/${token}`;
  await sendMentorReviewEmail({
    mentorEmail,
    userName: user?.name ?? 'A trainee',
    formType: entry.formType as 'mini-cex' | 'dops',
    procedureTitle: entry.title,
    reviewUrl,
  });

  return NextResponse.json({ ok: true });
}
