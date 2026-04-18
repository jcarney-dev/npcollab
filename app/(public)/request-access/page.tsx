import type { Metadata } from 'next';
import RequestAccessForm from './RequestAccessForm';

export const metadata: Metadata = {
  title: 'Request Access',
};

export default function RequestAccessPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
  console.log('Turnstile key at build:', turnstileSiteKey ? 'PRESENT' : 'MISSING');
  return <RequestAccessForm turnstileSiteKey={turnstileSiteKey} />;
}
