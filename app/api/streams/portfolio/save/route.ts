import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { portfolioEntries } from '@/lib/schema';
import { and, eq } from 'drizzle-orm';
import { logError } from '@/lib/logger';

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const { id, formType, streamSlug, procedureSlug, title, traineeData } = body;

    if (!formType || !streamSlug || !procedureSlug || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (id) {
      const [existing] = await db
        .select()
        .from(portfolioEntries)
        .where(and(eq(portfolioEntries.id, id), eq(portfolioEntries.userId, session.userId)))
        .limit(1);

      if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      if (existing.status !== 'draft') {
        return NextResponse.json({ error: 'Cannot edit a submitted entry' }, { status: 400 });
      }

      const [updated] = await db
        .update(portfolioEntries)
        .set({ title, traineeData: traineeData ?? {}, updatedAt: new Date() })
        .where(eq(portfolioEntries.id, id))
        .returning();

      return NextResponse.json({ entry: updated });
    }

    const [created] = await db
      .insert(portfolioEntries)
      .values({
        userId: session.userId,
        formType,
        streamSlug,
        procedureSlug,
        title,
        traineeData: traineeData ?? {},
        assessorData: {},
        status: 'draft',
      })
      .returning();

    return NextResponse.json({ entry: created });
  } catch (err) {
    await logError('[streams/portfolio/save]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
