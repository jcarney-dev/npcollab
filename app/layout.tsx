import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s — NPCollab',
    default: 'NPCollab — Australian Nurse Practitioner Resources',
  },
  description: 'NPCollab - A free collaborative clinical learning resource for Australian Nurse Practitioners and NP students.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5cfaccab-92d7-4059-8a82-f9d71f0dc77e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
