import type { Metadata } from 'next';
import RequestAccessForm from './RequestAccessForm';

export const metadata: Metadata = {
  title: 'Request Access',
};

export default function RequestAccessPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  return <RequestAccessForm turnstileSiteKey={turnstileSiteKey} />;
}
