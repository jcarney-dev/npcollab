import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, verifySessionToken } from '@/lib/session';
import { db } from '@/lib/db';
import { streamAccessGrants, usersV2 } from '@/lib/schema';
import { and, eq, isNull } from 'drizzle-orm';

const SESSION_COOKIE = 'npcollab_session';

async function getAdminUserId(req: NextRequest): Promise<string | null> {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const session = await verifySessionToken(token);
  return session?.userId ?? null;
}

export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { userId, streamSlug } = await req.json();
  if (!userId || !streamSlug) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const [user] = await db.select().from(usersV2).where(eq(usersV2.id, userId)).limit(1);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const adminId = await getAdminUserId(req);

  const [existing] = await db
    .select()
    .from(streamAccessGrants)
    .where(and(eq(streamAccessGrants.userId, userId), eq(streamAccessGrants.streamSlug, streamSlug)))
    .limit(1);

  if (existing) {
    await db
      .update(streamAccessGrants)
      .set({ revokedAt: null, grantedAt: new Date(), grantedBy: adminId ?? userId })
      .where(eq(streamAccessGrants.id, existing.id));
  } else {
    await db.insert(streamAccessGrants).values({
      userId,
      streamSlug,
      grantedBy: adminId ?? userId,
    });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const grants = await db
    .select({
      id:         streamAccessGrants.id,
      userId:     streamAccessGrants.userId,
      streamSlug: streamAccessGrants.streamSlug,
      grantedAt:  streamAccessGrants.grantedAt,
      revokedAt:  streamAccessGrants.revokedAt,
      userName:   usersV2.name,
      userEmail:  usersV2.email,
    })
    .from(streamAccessGrants)
    .leftJoin(usersV2, eq(streamAccessGrants.userId, usersV2.id))
    .where(isNull(streamAccessGrants.revokedAt));

  return NextResponse.json({ grants });
}
