import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const adminCookie = req.cookies.get('npcollab_admin');
  return !!(adminCookie?.value && adminCookie.value === process.env.ADMIN_PASSWORD);
}

// GET — return all settings as a key/value map
export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

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

// POST — upsert a setting by key
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

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

// PATCH — alias for POST (upsert)
export async function PATCH(req: NextRequest) {
  return POST(req);
}
