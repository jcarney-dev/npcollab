import type { Metadata } from 'next';
import SupportPageClient from './SupportPageClient';

export const metadata: Metadata = {
  title: 'Support NPCollab',
  description: 'Support NPCollab — the Australian NP platform built by NPs for NPs. Help keep it free and independent.',
  openGraph: {
    title: 'Support NPCollab | NPCollab',
    description: 'Support NPCollab — the Australian NP platform built by NPs for NPs. Help keep it free and independent.',
    url: 'https://npcollab.com/support',
  },
  alternates: {
    canonical: 'https://npcollab.com/support',
  },
};

export default function SupportPage() {
  return <SupportPageClient />;
}
