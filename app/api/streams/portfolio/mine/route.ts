import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { portfolioEntries } from '@/lib/schema';
import { desc, eq } from 'drizzle-orm';

export async function GET(_req: NextRequest) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const entries = await db
    .select()
    .from(portfolioEntries)
    .where(eq(portfolioEntries.userId, session.userId))
    .orderBy(desc(portfolioEntries.updatedAt));

  return NextResponse.json({ entries });
}
