import AppShell from '@/components/AppShell';
import { getActiveSponsor, isAdPreviewMode } from '@/lib/sponsors';

// Force dynamic so ad_preview_mode is read from DB on every request, not cached at build time
export const dynamic = 'force-dynamic';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  // Fetch sidebar sponsor and ad preview mode server-side on every request
  let sidebarSponsor = null;
  let adPreview = false;
  try {
    [sidebarSponsor, adPreview] = await Promise.all([
      getActiveSponsor('sidebar'),
      isAdPreviewMode(),
    ]);
  } catch {
    // DB unavailable at build time — fail silently
  }

  return <AppShell sidebarSponsor={sidebarSponsor} adPreviewMode={adPreview}>{children}</AppShell>;
}
