import { db } from '@/lib/db';
import { errorLogs } from '@/lib/schema';

export async function logError(route: string, err: unknown): Promise<void> {
  console.error(route, err);
  try {
    const message = err instanceof Error ? err.message : String(err);
    const stack   = err instanceof Error ? err.stack   : undefined;
    await db.insert(errorLogs).values({ route, message, stack });
  } catch {
    // Never let logging break the caller
  }
}
