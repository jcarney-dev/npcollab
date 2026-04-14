import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function PATCH(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  // Verify user still exists and is active/approved
  const [existing] = await db
    .select({ id: usersV2.id, active: usersV2.active, approved: usersV2.approved })
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!existing || !existing.active || !existing.approved) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: Record<string, string | null>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, state, npEndorsement, employer, specialtyArea, currentRole } = body;

  // Validate required fields
  if (!name?.trim() || name.trim().length < 2) {
    return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
  }
  if (!state?.trim()) {
    return NextResponse.json({ error: 'Please select your state.' }, { status: 400 });
  }
  if (!npEndorsement?.trim()) {
    return NextResponse.json({ error: 'Please select your NP endorsement type.' }, { status: 400 });
  }

  const [updated] = await db
    .update(usersV2)
    .set({
      name:            name.trim(),
      state:           state.trim(),
      npEndorsement:   npEndorsement.trim(),
      employer:        employer?.trim() || null,
      specialtyArea:   specialtyArea?.trim() || null,
      currentRole:     currentRole?.trim() || null,
      profileComplete: true,
    })
    .where(eq(usersV2.id, session.userId))
    .returning();

  return NextResponse.json({
    ok:   true,
    user: {
      id:              updated.id,
      name:            updated.name,
      email:           updated.email,
      state:           updated.state,
      npEndorsement:   updated.npEndorsement,
      employer:        updated.employer,
      specialtyArea:   updated.specialtyArea,
      currentRole:     updated.currentRole,
      profileComplete: updated.profileComplete,
    },
  });
}
