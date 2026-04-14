import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('npcollab_admin');
  return !!(cookie?.value && cookie.value === process.env.ADMIN_PASSWORD);
}

// PATCH /api/admin/users/update — update a user_v2 record
export async function PATCH(req: NextRequest) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: Record<string, string | boolean | null>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const { id, name, state, npEndorsement, employer, specialtyArea, currentRole, role } = body as Record<string, string | null>;

  if (!id) return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
  if (!name?.trim() || name.trim().length < 2) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
  if (!state?.trim()) return NextResponse.json({ error: 'State is required.' }, { status: 400 });
  if (!npEndorsement?.trim()) return NextResponse.json({ error: 'NP endorsement is required.' }, { status: 400 });

  // Only allow valid roles
  const allowedRoles = ['user', 'admin'];
  const newRole = role && allowedRoles.includes(role) ? role : undefined;

  const [updated] = await db
    .update(usersV2)
    .set({
      name:          name.trim(),
      state:         state.trim(),
      npEndorsement: npEndorsement.trim(),
      employer:      employer?.trim() || null,
      specialtyArea: specialtyArea?.trim() || null,
      currentRole:   currentRole?.trim() || null,
      ...(newRole !== undefined ? { role: newRole } : {}),
    })
    .where(eq(usersV2.id, id))
    .returning();

  if (!updated) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ ok: true, user: updated });
}
