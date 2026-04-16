import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/session';

export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const rows = await db.select().from(siteSettings);
    const map: Record<string, string> = {};
    for (const row of rows) {
      map[row.key] = row.value;
    }
    return Response.json(map);
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[settings GET]', msg);
    return Response.json({ error: 'Database error', detail: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  try {
    const body = await req.json();
    const { key, value } = body;

    if (!key?.trim()) {
      return Response.json({ error: 'Key is required.' }, { status: 400 });
    }

    const existing = await db.select().from(siteSettings).where(eq(siteSettings.key, key));

    if (existing.length > 0) {
      const [updated] = await db
        .update(siteSettings)
        .set({ value: value ?? '', updatedAt: new Date() })
        .where(eq(siteSettings.key, key))
        .returning();
      return Response.json(updated);
    } else {
      const [created] = await db
        .insert(siteSettings)
        .values({ key, value: value ?? '' })
        .returning();
      return Response.json(created);
    }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('[settings POST]', msg);
    return Response.json({ error: 'Database error', detail: msg }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  return POST(req);
}
