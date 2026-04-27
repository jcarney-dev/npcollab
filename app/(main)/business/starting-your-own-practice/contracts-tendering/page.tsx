import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Contracts & Tendering | NPCollab',
  description: 'Contractor agreements, government tendering, and PHN commissioning for NP practices.',
};

export default async function ContractsTenderingPage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_contracts-tendering')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Contracts &amp; Tendering</h1>
        <p>Contractor agreements, government tenders, and PHN commissioning opportunities.</p>
      </div>

      <div className="content-prose">

        <h2>Contractor Agreements</h2>
        <p>Many NPs work as contractors to medical practices, telehealth companies, hospitals, or aged care facilities. The ATO has a specific test for contractor vs employee status — ensure your arrangement reflects the true nature of the relationship.</p>

        <div className="info-box">
          <h4 style={{ marginTop: 0 }}>📄 Contractor Agreement — Key Terms to Review</h4>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Scope of services</strong> and practice location</li>
            <li><strong>Fee structure and payment terms</strong> (per session, per patient, percentage of billings)</li>
            <li><strong>Who owns the Medicare billing rights</strong></li>
            <li><strong>Indemnity responsibilities</strong> — confirm with your insurer</li>
            <li><strong>Intellectual property ownership</strong></li>
            <li><strong>Restraint of trade</strong> — be cautious of broad geographic or temporal restraints</li>
            <li><strong>Termination provisions</strong> and notice periods</li>
            <li><strong>Dispute resolution</strong></li>
          </ul>
          <p style={{ marginBottom: 0, marginTop: '10px', fontSize: '13px' }}>Obtain legal review of any contractor agreement before signing.</p>
        </div>

        <h2>Tendering Platforms</h2>
        <p>Government and NGO contracts for NP services are increasingly advertised through formal tender processes.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
          {[
            { label: 'Federal', title: 'AusTender',                    body: 'Commonwealth Government procurement portal — austender.gov.au', href: 'https://www.austender.gov.au' },
            { label: 'State',   title: 'State Government Portals',      body: 'Each state has its own system: NSW Buy.NSW, VIC tenders.vic.gov.au, and equivalents in other states.', href: null },
            { label: 'NDIS',   title: 'NDIS Tenders',                  body: 'Via NDIS Commission and Department of Social Services.', href: null },
            { label: 'PHN',    title: 'Primary Health Network Commissioning', body: 'PHNs commission a range of primary care services including NP services. Check your local PHN\'s commissioning priorities.', href: null },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '12px 16px', border: '1px solid var(--border)', borderRadius: '8px', background: '#fff' }}>
              <div style={{ flexShrink: 0, minWidth: '52px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gold-pale)', border: '1px solid var(--gold)', borderRadius: '5px', fontSize: '11px', fontWeight: 700, color: 'var(--navy)', padding: '0 6px' }}>{item.label}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '2px' }}>
                  {item.href ? <a href={item.href} target="_blank" rel="noopener" style={{ color: 'var(--navy)', textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>{item.title}</a> : item.title}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/operations-governance" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Operations &amp; Governance</Link>
          <Link href="/business/starting-your-own-practice/marketing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Marketing →</Link>
        </div>

      </div>
    </>
  );
}
