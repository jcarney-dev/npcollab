import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://npcollab.com';
const SITE_NAME = 'NPCollab';
const DEFAULT_DESCRIPTION =
  'NPCollab is the Australian platform for Nurse Practitioners, Transitional NPs, and NP candidates. Clinical modules, CPD resources, job board, courses, and community — built by NPs, for NPs.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME} — The Australian NP Platform`,
    default: `${SITE_NAME} — The Australian Nurse Practitioner Platform`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Australian nurse practitioner education',
    'nurse practitioner resources Australia',
    'transitional nurse practitioner',
    'nurse practitioner candidate Australia',
    'NP clinical modules Australia',
    'Australian NP CPD',
    'AHPRA nurse practitioner',
    'NP endorsement Australia',
    'nurse practitioner scope of practice',
  ],
  authors: [{ name: 'Jason Carney', url: SITE_URL }],
  creator: 'Jason Carney',
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — The Australian Nurse Practitioner Platform`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NPCollab — The Australian NP Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — The Australian Nurse Practitioner Platform`,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
