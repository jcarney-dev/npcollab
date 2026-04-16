import { db } from '@/lib/db';
import { newsItems } from '@/lib/schema';
import { desc, eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/session';


// GET all news items
export async function GET(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const rows = await db.select().from(newsItems).orderBy(desc(newsItems.createdAt));
  return Response.json(rows);
}

// POST — create new news item
export async function POST(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const body = await req.json();
  const { title, summary, url, type, sourceName, status, publishedAt } = body;

  if (!title?.trim() || !summary?.trim()) {
    return Response.json({ error: 'Title and summary are required.' }, { status: 400 });
  }

  const [item] = await db.insert(newsItems).values({
    title:       title.trim(),
    summary:     summary.trim(),
    url:         url?.trim() || null,
    type:        type || 'article',
    sourceName:  sourceName?.trim() || '',
    status:      status || 'draft',
    publishedAt: status === 'published' && !publishedAt ? new Date() : publishedAt ? new Date(publishedAt) : null,
  }).returning();

  return Response.json(item);
}

// DELETE — remove a news item
export async function DELETE(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const body = await req.json();
  const { id } = body;

  if (!id) return Response.json({ error: 'ID is required.' }, { status: 400 });

  await db.delete(newsItems).where(eq(newsItems.id, id));

  return Response.json({ ok: true });
}

// PUT — update existing news item
export async function PUT(req: NextRequest) {
  if (!await requireAdmin(req)) return Response.json({ error: 'Unauthorised' }, { status: 401 });

  const body = await req.json();
  const { id, title, summary, url, type, sourceName, status, publishedAt } = body;

  if (!id) return Response.json({ error: 'ID is required.' }, { status: 400 });

  const [item] = await db
    .update(newsItems)
    .set({
      title:       title?.trim(),
      summary:     summary?.trim(),
      url:         url?.trim() || null,
      type:        type,
      sourceName:  sourceName?.trim() || '',
      status:      status,
      publishedAt: status === 'published' && !publishedAt ? new Date() : publishedAt ? new Date(publishedAt) : null,
    })
    .where(eq(newsItems.id, id))
    .returning();

  return Response.json(item);
}
