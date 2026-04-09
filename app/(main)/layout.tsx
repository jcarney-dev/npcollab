import AppShell from '@/components/AppShell';
import { getActiveSponsor, isAdPreviewMode } from '@/lib/sponsors';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  // Fetch sidebar sponsor server-side — null if none active
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
