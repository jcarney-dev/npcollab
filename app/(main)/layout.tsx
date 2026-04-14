import AppShell from '@/components/AppShell';
import { getActiveSponsor, isAdPreviewMode } from '@/lib/sponsors';
import { getSession } from '@/lib/session';
import { db } from '@/lib/db';
import { usersV2 } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import type { UserV2 } from '@/lib/schema';

// Force dynamic so ad_preview_mode and session are read from DB on every request
export const dynamic = 'force-dynamic';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  let sidebarSponsor = null;
  let adPreview = false;
  let sessionUser: UserV2 | null = null;

  try {
    const [sponsor, preview, session] = await Promise.all([
      getActiveSponsor('sidebar'),
      isAdPreviewMode(),
      getSession(),
    ]);

    sidebarSponsor = sponsor;
    adPreview = preview;

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
    >
      {children}
    </AppShell>
  );
}
