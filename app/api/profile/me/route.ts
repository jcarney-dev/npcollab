import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!user || !user.active || !user.approved) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // Return safe subset — never expose role/internal fields
  return NextResponse.json({
    id:              user.id,
    name:            user.name,
    email:           user.email,
    state:           user.state,
    npEndorsement:   user.npEndorsement,
    employer:        user.employer,
    specialtyArea:   user.specialtyArea,
    currentRole:     user.currentRole,
    bio:             user.bio,
    profileComplete: user.profileComplete,
    role:            user.role,
  });
}
