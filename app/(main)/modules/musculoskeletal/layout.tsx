import UnderReviewPage from '@/components/UnderReviewPage';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_musculoskeletal')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;
  return <>{children}</>;
}
