import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { procedureLogs } from '@/lib/schema';
import { and, eq } from 'drizzle-orm';
import { logError } from '@/lib/logger';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession();
  if (!session?.userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id } = await params;

    const [existing] = await db
      .select()
      .from(procedureLogs)
      .where(and(eq(procedureLogs.id, id), eq(procedureLogs.userId, session.userId)))
      .limit(1);

    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    await db.delete(procedureLogs).where(eq(procedureLogs.id, id));

    return NextResponse.json({ ok: true });
  } catch (err) {
    await logError('[passport DELETE]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
