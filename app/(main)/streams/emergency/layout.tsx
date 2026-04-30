import StreamLockedPage from '@/components/StreamLockedPage';
import { getSession } from '@/lib/session';
import { canAccessStream } from '@/lib/streams';

export const dynamic = 'force-dynamic';

export default async function EmergencyLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session?.userId) return <StreamLockedPage />;

  const allowed = await canAccessStream(session.userId, 'emergency');
  if (!allowed) return <StreamLockedPage />;

  return <>{children}</>;
}
