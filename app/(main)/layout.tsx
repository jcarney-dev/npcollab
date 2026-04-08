import AppShell from '@/components/AppShell';
import { getActiveSponsor } from '@/lib/sponsors';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  // Fetch sidebar sponsor server-side — null if none active
  let sidebarSponsor = null;
  try {
    sidebarSponsor = await getActiveSponsor('sidebar');
  } catch {
    // DB unavailable at build time — fail silently
  }

  return <AppShell sidebarSponsor={sidebarSponsor}>{children}</AppShell>;
}
