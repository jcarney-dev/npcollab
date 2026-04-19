import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, SESSION_COOKIE_NAME } from '@/lib/session';
import { db } from '@/lib/db';
import { mentors, usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';

const VALID_MODES = ['Video', 'Phone', 'In-person'];

export async function POST(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  const session = await verifySessionToken(token);
  if (!session) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });

  // Confirm user exists and is active/approved
  const [user] = await db
    .select()
    .from(usersV2)
    .where(eq(usersV2.id, session.userId))
    .limit(1);

  if (!user || !user.active || !user.approved) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const body = await req.json();
  const { name, credentials, specialtyArea, state, currentRole, employer, bio, mode, maxMentees, active } = body;

  // Validate required fields
  if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  if (!specialtyArea?.trim()) return NextResponse.json({ error: 'Specialty area is required.' }, { status: 400 });
  if (!state?.trim()) return NextResponse.json({ error: 'State is required.' }, { status: 400 });
  if (!bio?.trim()) return NextResponse.json({ error: 'Bio is required.' }, { status: 400 });
  if (bio.length > 500) return NextResponse.json({ error: 'Bio must be 500 characters or fewer.' }, { status: 400 });
  if (!mode || (Array.isArray(mode) && mode.length === 0)) {
    return NextResponse.json({ error: 'At least one mentoring mode is required.' }, { status: 400 });
  }
  const modeArr: string[] = Array.isArray(mode) ? mode : [mode];
  for (const m of modeArr) {
    if (!VALID_MODES.includes(m)) {
      return NextResponse.json({ error: `Invalid mentoring mode: ${m}` }, { status: 400 });
    }
  }
  const maxM = Number(maxMentees);
  if (!maxM || maxM < 1 || maxM > 5) {
    return NextResponse.json({ error: 'Max mentees must be between 1 and 5.' }, { status: 400 });
  }

  const modeStr = modeArr.join(', ');
  const now = new Date();

  // Upsert — update if mentor record already exists for this user
  const [existing] = await db
    .select({ id: mentors.id })
    .from(mentors)
    .where(eq(mentors.userId, user.id))
    .limit(1);

  let mentorId: number;

  if (existing) {
    const [updated] = await db
      .update(mentors)
      .set({
        name:          name.trim(),
        credentials:   credentials?.trim() || '',
        specialtyArea: specialtyArea.trim(),
        state:         state.trim(),
        currentRole:   currentRole?.trim() || '',
        employer:      employer?.trim() || '',
        bio:           bio.trim(),
        mode:          modeStr,
        maxMentees:    maxM,
        active:        active !== false,
        updatedAt:     now,
      })
      .where(eq(mentors.userId, user.id))
      .returning({ id: mentors.id });
    mentorId = updated.id;
  } else {
    const [created] = await db
      .insert(mentors)
      .values({
        userId:        user.id,
        name:          name.trim(),
        credentials:   credentials?.trim() || '',
        specialtyArea: specialtyArea.trim(),
        state:         state.trim(),
        currentRole:   currentRole?.trim() || '',
        employer:      employer?.trim() || '',
        bio:           bio.trim(),
        mode:          modeStr,
        maxMentees:    maxM,
        active:        active !== false,
      })
      .returning({ id: mentors.id });
    mentorId = created.id;
  }

  return NextResponse.json({ ok: true, mentorId });
}
