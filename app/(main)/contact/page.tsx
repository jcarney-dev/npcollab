import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Get in Touch | NPCollab',
  description: 'Contact NPCollab — ask a question, contribute content, or get in touch with the team.',
  openGraph: {
    title: 'Get in Touch | NPCollab',
    description: 'Contact NPCollab — ask a question, contribute content, or get in touch with the team.',
    url: 'https://npcollab.com/contact',
  },
  alternates: {
    canonical: 'https://npcollab.com/contact',
  },
};

export default function ContactPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
  return <ContactPageClient turnstileSiteKey={turnstileSiteKey} />;
}
