import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile | NPCollab',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
