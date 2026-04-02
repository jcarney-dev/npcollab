import type { Metadata } from 'next';
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
      </body>
    </html>
  );
}
