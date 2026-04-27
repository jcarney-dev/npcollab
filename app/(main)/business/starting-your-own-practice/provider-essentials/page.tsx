import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Provider & Prescriber Essentials | NPCollab',
  description: 'Medicare provider numbers, PBS prescriber numbers, PRODA, HPOS, and healthcare identifiers for NPs.',
};

export default async function ProviderEssentialsPage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_provider-essentials')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Provider &amp; Prescriber Essentials</h1>
        <p>The registrations and digital credentials you need before you can bill or prescribe.</p>
      </div>

      <div className="content-prose">

        <p>Before you can bill or prescribe, you need a series of registrations and digital access credentials. Set these up in order &mdash; each depends on the previous.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '20px 0' }}>
          {[
            {
              icon: '🏥', title: 'Medicare Provider Number',
              what: 'Required to bill Medicare. Location-specific — you need a separate provider number for each physical practice location.',
              how: 'Apply through Services Australia (servicesaustralia.gov.au). Processing: 2–6 weeks. Requirements: current AHPRA NP endorsement, ABN, practice location details.',
            },
            {
              icon: '💊', title: 'PBS Prescriber Number',
              what: 'Required on all PBS prescriptions. Separate from your Medicare provider number.',
              how: 'Apply through Services Australia at the same time as your Medicare provider number application.',
            },
            {
              icon: '🔐', title: 'PRODA — Provider Digital Access',
              what: 'Authentication system for accessing Australian Government health portals including HPOS and myplace (NDIS).',
              how: 'Create your PRODA account at proda.humanservices.gov.au before applying for provider numbers — required for online access.',
            },
            {
              icon: '💻', title: 'HPOS — Health Professional Online Services',
              what: 'Manage Medicare provider details, apply for PBS authority prescriptions online, access Medicare billing history, manage Veterans\' Affairs provider details.',
              how: 'Accessed via PRODA. Requires PRODA account and verified identity.',
            },
            {
              icon: '📋', title: 'My Health Record (MHR)',
              what: 'Australia\'s national digital health record system. NPs can view and upload shared health summaries, event summaries, specialist letters, and pathology reports.',
              how: 'Register as a healthcare provider organisation at myhealthrecord.gov.au. Individual provider access via HPOS.',
            },
            {
              icon: '🔢', title: 'Healthcare Identifiers',
              what: 'IHI (patient unique identifier), HPI-I (your individual provider ID, issued with AHPRA registration), HPI-O (your practice organisation ID — required for MHR and eRx).',
              how: 'IHIs accessed via HPOS or your clinical software. HPI-O applied for via the HI Service through HPOS.',
            },
          ].map((card, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '22px' }}>{card.icon}</span>
                <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>{card.title}</h4>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '3px' }}>What it does</div>
                <div style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.6 }}>{card.what}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gold)', marginBottom: '3px' }}>How to access</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{card.how}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/funding-revenue" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Funding &amp; Revenue</Link>
          <Link href="/business/starting-your-own-practice/operations-governance" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Operations &amp; Governance →</Link>
        </div>

      </div>
    </>
  );
}
