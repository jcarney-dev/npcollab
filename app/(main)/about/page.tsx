import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About NPCollab',
  description: 'NPCollab was built by Jason Carney, an Australian Nurse Practitioner, as the go-to platform for NPs across Australia.',
  openGraph: {
    title: 'About NPCollab | NPCollab',
    description: 'NPCollab was built by Jason Carney, an Australian Nurse Practitioner, as the go-to platform for NPs across Australia.',
    url: 'https://npcollab.com/about',
  },
  alternates: {
    canonical: 'https://npcollab.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
