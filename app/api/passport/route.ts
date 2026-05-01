import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { procedureLogs } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';
import { logError } from '@/lib/logger';

export async function GET() {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const logs = await db
      .select()
      .from(procedureLogs)
      .where(eq(procedureLogs.userId, session.userId))
      .orderBy(desc(procedureLogs.performedAt));
    return NextResponse.json({ logs });
  } catch (err) {
    await logError('[passport GET]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const { procedureName, category, performedAt, setting, supervisorName, supervisorEmail, notes } = body;

    if (!procedureName?.trim()) {
      return NextResponse.json({ error: 'Procedure name is required' }, { status: 400 });
    }
    if (!performedAt) {
      return NextResponse.json({ error: 'Date performed is required' }, { status: 400 });
    }

    const [log] = await db
      .insert(procedureLogs)
      .values({
        userId:          session.userId,
        procedureName:   procedureName.trim(),
        category:        category || 'General',
        performedAt:     new Date(performedAt),
        setting:         setting || '',
        supervisorName:  supervisorName || null,
        supervisorEmail: supervisorEmail || null,
        notes:           notes || null,
      })
      .returning();

    return NextResponse.json({ log });
  } catch (err) {
    await logError('[passport POST]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
