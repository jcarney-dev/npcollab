import AppShell from '@/components/AppShell';
import PageTracker from '@/components/PageTracker';
import { getActiveSponsor, isAdPreviewMode } from '@/lib/sponsors';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2, siteSettings } from '@/lib/schema';
import { eq, like } from 'drizzle-orm';
import type { UserV2 } from '@/lib/schema';

// Force dynamic so ad_preview_mode, session and lock states are read from DB on every request
export const dynamic = 'force-dynamic';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  let sidebarSponsor = null;
  let adPreview = false;
  let sessionUser: UserV2 | null = null;
  let lockedSettings: Record<string, string> = {};

  try {
    const [sponsor, preview, session, lockRows] = await Promise.all([
      getActiveSponsor('sidebar'),
      isAdPreviewMode(),
      getSession(),
      db.select().from(siteSettings).where(like(siteSettings.key, 'module_lock_%')),
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
    >
      {children}
      {sessionUser && <PageTracker userId={sessionUser.id} />}
    </AppShell>
  );
}
