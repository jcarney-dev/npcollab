import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq, and, sql } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [user] = await db
      .select({
        id:            usersV2.id,
        name:          usersV2.name,
        state:         usersV2.state,
        npEndorsement: usersV2.npEndorsement,
        employer:      usersV2.employer,
        specialtyArea: usersV2.specialtyArea,
        currentRole:   usersV2.currentRole,
        bio:           usersV2.bio,
      })
      .from(usersV2)
      .where(and(eq(usersV2.active, true), eq(usersV2.approved, true)))
      .orderBy(sql`RANDOM()`)
      .limit(1);

    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
