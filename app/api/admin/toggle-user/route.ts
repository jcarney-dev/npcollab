import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function requireAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('npcollab_admin');
  return !!(cookie?.value && cookie.value === process.env.ADMIN_PASSWORD);
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) {
    return Response.json({ error: 'Unauthorised.' }, { status: 401 });
  }

  const { id } = await req.json();
  if (!id) return Response.json({ error: 'Missing user id.' }, { status: 400 });

  const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  if (!user) return Response.json({ error: 'User not found.' }, { status: 404 });

  const [updated] = await db
    .update(users)
    .set({ active: !user.active })
    .where(eq(users.id, id))
    .returning();

  return Response.json({ ok: true, active: updated.active });
}
