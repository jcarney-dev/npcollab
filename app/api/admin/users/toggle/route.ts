import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('npcollab_admin');
  return !!(cookie?.value && cookie.value === process.env.ADMIN_PASSWORD);
}

// POST /api/admin/users/toggle — toggle active or role for a users_v2 record
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: { id?: string; field?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id, field } = body;
  if (!id) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
  if (!field || !['active', 'role'].includes(field)) {
    return NextResponse.json({ error: 'field must be "active" or "role"' }, { status: 400 });
  }

  const [user] = await db.select().from(usersV2).where(eq(usersV2.id, id)).limit(1);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  let updateData: Partial<typeof usersV2.$inferInsert>;
  if (field === 'active') {
    updateData = { active: !user.active };
  } else {
    // Toggle role between 'user' and 'admin'
    updateData = { role: user.role === 'admin' ? 'user' : 'admin' };
  }

  const [updated] = await db
    .update(usersV2)
    .set(updateData)
    .where(eq(usersV2.id, id))
    .returning();

  return NextResponse.json({ ok: true, user: updated });
}
