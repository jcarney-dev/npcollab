import { db } from '@/lib/db';
import { siteSettings, streamAccessGrants } from '@/lib/schema';
import { and, eq, isNull } from 'drizzle-orm';

export async function canAccessStream(userId: string, streamSlug: string): Promise<boolean> {
  const lockKey = `stream_lock_${streamSlug}`;

  const [setting] = await db
    .select()
    .from(siteSettings)
    .where(eq(siteSettings.key, lockKey))
    .limit(1);

  if (!setting || setting.value !== 'true') return true;

  const [grant] = await db
    .select()
    .from(streamAccessGrants)
    .where(
      and(
        eq(streamAccessGrants.userId, userId),
        eq(streamAccessGrants.streamSlug, streamSlug),
        isNull(streamAccessGrants.revokedAt),
      ),
    )
    .limit(1);

  return !!grant;
}
