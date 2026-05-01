import AppShell from '@/components/AppShell';
import PageTracker from '@/components/PageTracker';
import { getActiveSponsor, isAdPreviewMode } from '@/lib/sponsors';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2, siteSettings, streamAccessGrants } from '@/lib/schema';
import { eq, like, or, and, inArray, isNull } from 'drizzle-orm';
import type { UserV2 } from '@/lib/schema';

// Force dynamic so ad_preview_mode, session and lock states are read from DB on every request
export const dynamic = 'force-dynamic';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  let sidebarSponsor = null;
  let adPreview = false;
  let sessionUser: UserV2 | null = null;
  let lockedSettings: Record<string, string> = {};
  let userGrantedStreams: string[] = [];

  try {
    const [sponsor, preview, session, lockRows] = await Promise.all([
      getActiveSponsor('sidebar'),
      isAdPreviewMode(),
      getSession(),
      db.select().from(siteSettings).where(
        or(like(siteSettings.key, 'module_lock_%'), like(siteSettings.key, 'stream_lock_%'))
      ),
    ]);

    sidebarSponsor = sponsor;
    adPreview = preview;

    for (const row of lockRows) lockedSettings[row.key] = row.value ?? '';

    if (session?.userId) {
      const [user] = await db
        .select()
        .from(usersV2)
        .where(eq(usersV2.id, session.userId))
        .limit(1);

      if (user && user.active && user.approved) {
        sessionUser = user;
      }

      // Check which globally-locked streams this user has been granted access to
      const lockedStreamSlugs = lockRows
        .filter(r => r.key.startsWith('stream_lock_') && r.value === 'true')
        .map(r => r.key.replace('stream_lock_', ''));

      if (lockedStreamSlugs.length > 0) {
        const grants = await db
          .select({ streamSlug: streamAccessGrants.streamSlug })
          .from(streamAccessGrants)
          .where(
            and(
              eq(streamAccessGrants.userId, session.userId),
              inArray(streamAccessGrants.streamSlug, lockedStreamSlugs),
              isNull(streamAccessGrants.revokedAt),
            ),
          );
        userGrantedStreams = grants.map(g => g.streamSlug);
      }
    }
  } catch {
    // DB unavailable at build time — fail silently
  }

  return (
    <AppShell
      sidebarSponsor={sidebarSponsor}
      adPreviewMode={adPreview}
      sessionUser={sessionUser}
      lockedSettings={lockedSettings}
      userGrantedStreams={userGrantedStreams}
    >
      {children}
      {sessionUser && <PageTracker userId={sessionUser.id} />}
    </AppShell>
  );
}
