import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Funding & Revenue Models | NPCollab',
  description: 'Medicare billing, NDIS, and PBS prescribing for independent NP practice in Australia.',
};

export default async function FundingRevenuePage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_funding-revenue')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Funding &amp; Revenue Models</h1>
        <p>Medicare, NDIS, and PBS — the three pillars of NP practice revenue.</p>
      </div>

      <div className="content-prose">

        <h2>Medicare Billing</h2>
        <p>Medicare is the primary revenue stream for most independent NP practices. Understanding what you can bill, when, and how is critical to financial viability.</p>

        <h3>NP MBS Item Groups</h3>
        <div className="table-scroll">
          <table className="np-table">
            <thead><tr><th>MBS Group</th><th>Description</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td><strong>A15</strong></td><td>NP Attendances</td><td>In-person and telehealth consultations</td></tr>
              <tr><td><strong>M33</strong></td><td>NP Surgical Assistance</td><td>Items 93718–93724, effective November 2025</td></tr>
              <tr><td><strong>Mental Health</strong></td><td>Mental Health Treatment Plans</td><td>NPs can create and review MHTPs</td></tr>
              <tr><td><strong>CDM</strong></td><td>Chronic Disease Management</td><td>NPs can contribute to GP Management Plans and TCAs in specific circumstances</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px', margin: '20px 0' }}>
          {[
            { title: 'Bulk Billing', body: 'Accepting the Medicare schedule fee as full payment — no out-of-pocket cost to the patient. Required for pensioners and healthcare card holders in some circumstances. Lower revenue but higher patient access.' },
            { title: 'Private Billing', body: 'Charging above the schedule fee — patient pays the gap between your fee and the Medicare rebate. Higher revenue but requires patient consent and clear communication about gap fees.' },
            { title: 'Assignment of Benefit', body: 'The patient assigns their Medicare benefit directly to you as the provider — you receive the rebate directly from Medicare. Requires a signed assignment of benefit form. Used in bulk billing.' },
            { title: 'Rebates and Gap Cover', body: 'Some private health insurers provide gap cover for NP services. Health fund billing for surgical assistance (Group M33) requires a separate provider agreement with each fund.' },
          ].map((item, i) => (
            <div key={i} style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', background: '#fff' }}>
              <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.body}</div>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: '4px solid #d97706', background: '#fffbeb', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '20px 0' }}>
          <h4 style={{ color: '#92400e', marginTop: 0, marginBottom: '10px', fontFamily: 'var(--font-body)', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>⚠ Common Billing Mistakes to Avoid</h4>
          <ul style={{ marginBottom: 0, paddingLeft: '18px', color: '#92400e' }}>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}>Billing for services outside your endorsement scope</li>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}>Billing telehealth items without meeting patient-provider relationship requirements</li>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}>Not retaining adequate clinical documentation to support the billed item</li>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}>Billing higher-complexity items for consultations that don&rsquo;t meet time or content thresholds</li>
            <li style={{ fontSize: '0.93rem' }}>Not obtaining signed assignment of benefit forms for bulk-billed consultations</li>
          </ul>
        </div>

        <h3>Telehealth Billing Rules</h3>
        <div className="highlight-box">
          <h4 style={{ marginTop: 0 }}>📡 Telehealth Eligibility Criteria</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>The patient must have an established clinical relationship — seen the NP or a practitioner at the same practice within the previous 12 months (for most items)</li>
            <li>Video consultation required for most telehealth items (phone-only items have more limited availability)</li>
            <li>30/20 rule: for certain telehealth items, the patient must be located at least 30km from the NP&rsquo;s regular practice, or the NP must be located more than 20km from a metropolitan area</li>
            <li>Always check the specific telehealth eligibility criteria on MBS Online before billing</li>
          </ul>
        </div>

        <h2>NDIS Billing</h2>
        <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff', margin: '16px 0' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>The National Disability Insurance Scheme (NDIS) is an increasingly important revenue stream for NPs, particularly in primary care, mental health, and community settings.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div><strong style={{ fontSize: '13px', color: 'var(--navy)' }}>Becoming an NDIS Provider</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Register at ndis.gov.au/providers. Registration is required for funded participants — unregistered providers can only see self-managed or plan-managed participants.</span></div>
            <div><strong style={{ fontSize: '13px', color: 'var(--navy)' }}>NDIS Price Guide — NP Service Categories</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Improved Health and Wellbeing; Daily Activities supports; Therapy supports (depending on endorsement). The NDIS Price Arrangement document sets maximum prices.</span></div>
            <div><strong style={{ fontSize: '13px', color: 'var(--navy)' }}>Claiming Process</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Claims are submitted through the NDIS Provider Portal (myplace). Invoice the participant&rsquo;s plan manager or the NDIA directly depending on how the participant&rsquo;s plan is managed.</span></div>
          </div>
        </div>

        <h2>PBS Prescribing</h2>
        <p>NPs are authorised prescribers under the Pharmaceutical Benefits Scheme (PBS). Key PBS regulations for NPs:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
          {[
            { label: 'Authority Rx',   title: 'PBS Authority Prescriptions',       body: 'Some medications require PBS authority approval before prescribing. NPs can apply for authority online via HPOS or by telephone for streamlined authority items.' },
            { label: 'Rx Writing',     title: 'Prescription Writing Requirements', body: 'PBS prescriptions must include: patient full name and address, date, drug name (generic preferred), strength, quantity, number of repeats, prescriber name, prescriber number, and signature. Specific requirements apply for Schedule 8 medications.' },
            { label: 'Prescriber No.', title: 'Prescriber Number',                 body: 'Your PBS prescriber number (from Services Australia) is required on all PBS prescriptions. This is separate from your Medicare provider number.' },
            { label: 'Restricted',     title: 'Restricted Benefit Items',          body: 'Some PBS items are restricted to specific indications or patient groups. Prescribing outside the restriction constitutes a non-PBS prescription — the patient pays the full cost.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 16px', border: '1px solid var(--border)', borderRadius: '8px', background: '#fff' }}>
              <div style={{ flexShrink: 0, minWidth: '72px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gold-pale)', border: '1px solid var(--gold)', borderRadius: '5px', fontSize: '11px', fontWeight: 700, color: 'var(--navy)', padding: '0 6px' }}>{item.label}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/business-structures" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Business Structures</Link>
          <Link href="/business/starting-your-own-practice/provider-essentials" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Provider Essentials →</Link>
        </div>

      </div>
    </>
  );
}
