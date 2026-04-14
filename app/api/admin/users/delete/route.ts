import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2, adminActions } from '@/lib/schema';
import { eq } from 'drizzle-orm';

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('npcollab_admin');
  return !!(cookie?.value && cookie.value === process.env.ADMIN_PASSWORD);
}

// DELETE /api/admin/users/delete — permanently delete a users_v2 record
export async function DELETE(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: { id?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id } = body;
  if (!id) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });

  const [user] = await db.select().from(usersV2).where(eq(usersV2.id, id)).limit(1);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // Delete associated admin actions first, then the user
  await db.delete(adminActions).where(eq(adminActions.userId, id));
  await db.delete(usersV2).where(eq(usersV2.id, id));

  return NextResponse.json({ ok: true });
}
