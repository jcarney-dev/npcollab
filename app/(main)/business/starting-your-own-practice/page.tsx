import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Starting Your Own NP Practice',
  description: 'A practical guide to establishing an independent Nurse Practitioner practice in Australia — business structure, Medicare billing, insurance, governance, and marketing.',
  openGraph: {
    title: 'Starting Your Own NP Practice | NPCollab',
    description: 'A practical guide to establishing an independent Nurse Practitioner practice in Australia.',
    url: 'https://npcollab.com/business/starting-your-own-practice',
  },
  alternates: {
    canonical: 'https://npcollab.com/business/starting-your-own-practice',
  },
};

const MODULES = [
  {
    href:  '/business/starting-your-own-practice/business-structures',
    icon:  '🏗️',
    title: 'Business Structures & Registration',
    desc:  'Sole trader, company, partnership, and trust compared — plus ABN, ASIC, and GST registration steps.',
  },
  {
    href:  '/business/starting-your-own-practice/funding-revenue',
    icon:  '💰',
    title: 'Funding & Revenue Models',
    desc:  'Medicare billing (MBS A15, M33), bulk billing vs private billing, NDIS, and PBS prescribing.',
  },
  {
    href:  '/business/starting-your-own-practice/provider-essentials',
    icon:  '🏥',
    title: 'Provider & Prescriber Essentials',
    desc:  'Medicare provider number, PBS prescriber number, PRODA, HPOS, My Health Record, and healthcare identifiers.',
  },
  {
    href:  '/business/starting-your-own-practice/operations-governance',
    icon:  '⚖️',
    title: 'Operations & Governance',
    desc:  'Professional indemnity insurance, clinical records systems, governance frameworks, MOUs, and commercial leases.',
  },
  {
    href:  '/business/starting-your-own-practice/contracts-tendering',
    icon:  '📄',
    title: 'Contracts & Tendering',
    desc:  'Contractor agreements, AusTender, state procurement portals, NDIS tenders, and PHN commissioning.',
  },
  {
    href:  '/business/starting-your-own-practice/marketing',
    icon:  '📣',
    title: 'Marketing & Digital Presence',
    desc:  'AHPRA-compliant marketing, Google Business Profile, website essentials, referrer relationships, and privacy obligations.',
  },
  {
    href:  '/business/starting-your-own-practice/equipment',
    icon:  '🩺',
    title: 'Equipment & Hardware',
    desc:  'Clinical equipment checklist, office hardware, point-of-care testing, and cold chain requirements.',
  },
  {
    href:  '/business/starting-your-own-practice/financial-planning',
    icon:  '📊',
    title: 'Financial Planning',
    desc:  'Start-up cost budget, income modelling, tax obligations, and a full resources directory.',
  },
];

export default async function StartingYourOwnPracticePage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_starting-your-own-practice')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Starting Your Own Practice</h1>
        <p>A practical guide to establishing an independent NP practice in Australia — from business structure to billing, marketing, and governance.</p>
      </div>

      <div className="content-prose">

        <p>
          Starting an independent Nurse Practitioner practice is one of the most professionally rewarding steps an NP can take. This guide covers everything you need to know — select a module below to get started.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '28px 0' }}>
          {MODULES.map((mod, i) => (
            <Link
              key={mod.href}
              href={mod.href}
              style={{
                display: 'block',
                padding: '22px 20px',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: '#fff',
                textDecoration: 'none',
                position: 'relative',
                transition: 'box-shadow 0.15s, border-color 0.15s',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{mod.icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '4px', padding: '1px 6px' }}>{i + 1}</span>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>{mod.title}</div>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{mod.desc}</div>
            </Link>
          ))}
        </div>

        <div className="highlight-box">
          <p style={{ marginBottom: 0 }}>
            <strong>Educational purposes only.</strong> This guide provides general information for NPs considering independent practice. It does not constitute legal, financial, or tax advice. Always consult a qualified accountant, lawyer, and your professional indemnity insurer before establishing an independent practice.
          </p>
        </div>

      </div>
    </>
  );
}
