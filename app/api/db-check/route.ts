import { db } from '@/lib/db';
import { accessRequests, users } from '@/lib/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const tables = await db.execute(
      sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name`
    );
    return Response.json({ ok: true, tables: tables.rows });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
