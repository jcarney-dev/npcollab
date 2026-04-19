import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const { id: idStr } = await params;
  const id = parseInt(idStr, 10);
  if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID.' }, { status: 400 });

  const body = await req.json();
  const { active } = body;

  if (typeof active !== 'boolean') {
    return NextResponse.json({ error: 'active must be a boolean.' }, { status: 400 });
  }

  const [updated] = await db
    .update(mentors)
    .set({ active, updatedAt: new Date() })
    .where(eq(mentors.id, id))
    .returning();

  if (!updated) return NextResponse.json({ error: 'Mentor not found.' }, { status: 404 });

  return NextResponse.json(updated);
}
