import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Operations & Governance | NPCollab',
  description: 'Insurance, clinical records systems, clinical governance, and legal requirements for independent NP practice.',
};

export default async function OperationsGovernancePage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_operations-governance')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Operations &amp; Governance</h1>
        <p>Insurance, clinical records, governance frameworks, and legal agreements.</p>
      </div>

      <div className="content-prose">

        <h2>Insurance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '16px 0' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 10px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🛡 Professional Indemnity Insurance</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>Non-negotiable for independent NP practice. Cost: approximately $2,000–$5,000+ per year depending on scope. Tax-deductible.</p>
            <div style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '8px' }}><strong>Providers:</strong> MDA National, Avant, MIPS, MIGA</div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Key checklist</div>
            {['Covers your specific endorsement scope', 'Covers telehealth', 'Covers prescribing including Schedule 8', 'Claims-made vs occurrence-based structure', 'Retroactive/tail cover if you close the practice', 'Coverage across multiple settings'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '7px', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '3px' }}>
                <span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 10px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🏢 Public Liability Insurance</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>Covers injury to third parties or damage to property occurring at your practice. Required by most commercial leases.</p>
            <div style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><strong>Typical cover:</strong> $10–$20 million</div>
            <div style={{ fontSize: '13px', color: 'var(--text)' }}><strong>Estimated cost:</strong> $500–$1,500/year</div>
          </div>
        </div>

        <h2>Client Management Systems (CMS)</h2>
        <p>Choose a clinical records system before seeing your first patient. Ensure your chosen system supports Medicare billing, My Health Record integration, electronic prescribing (eRx), and AHPRA-compliant clinical documentation.</p>
        <div className="table-scroll">
          <table className="np-table">
            <thead><tr><th>Software</th><th>Best For</th><th>Key Features</th></tr></thead>
            <tbody>
              <tr><td><strong>Best Practice</strong></td><td>Primary care NPs</td><td>Most widely used in Australian primary care, excellent Medicare billing integration</td></tr>
              <tr><td><strong>MedicalDirector</strong></td><td>General NP practice</td><td>Widely used, strong billing integration</td></tr>
              <tr><td><strong>Genie</strong></td><td>Specialist / private practice</td><td>Popular in specialist and private practice settings</td></tr>
              <tr><td><strong>Helix (formerly Zedmed)</strong></td><td>New practices</td><td>Cloud-based, good for practices starting fresh</td></tr>
              <tr><td><strong>Nookal</strong></td><td>Allied health / private models</td><td>Popular for allied health and private practice models</td></tr>
              <tr><td><strong>HotDoc / HealthEngine</strong></td><td>Online bookings</td><td>Booking platforms that integrate with most CMS options</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Clinical Governance</h2>
        <p>Strong clinical governance protects your patients, your registration, and your practice. It is not optional.</p>
        <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff', margin: '16px 0' }}>
          <h4 style={{ margin: '0 0 14px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>📋 Policies &amp; Procedures Checklist</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
            {['Clinical scope of practice and referral pathways', 'Medication management and Schedule 8 prescribing', 'Medical emergencies and after-hours management', 'Informed consent process', 'Patient complaints and feedback', 'Privacy and confidentiality', 'Mandatory reporting obligations'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '8px 10px', background: 'var(--off-white)', borderRadius: '6px', fontSize: '13px', color: 'var(--text)' }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, fontWeight: 700 }}>□</span><span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="info-box">
          <p><strong>Standards to align with:</strong> NMBA Nurse Practitioner Standards for Practice; RACGP Standards for General Practice (adapted for NP context); ACSQHC safety and quality standards; Relevant specialty college standards.</p>
          <p style={{ marginBottom: 0 }}>Conduct regular clinical audits and document findings. This also provides excellent CPD evidence.</p>
        </div>

        <h2>MOUs, IP &amp; Property</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px', margin: '16px 0' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', background: '#fff' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>Memoranda of Understanding (MOUs)</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Formal agreements with hospitals, GP practices, telehealth platforms, or collaborating practitioners. Should cover: scope, responsibilities, governance, indemnity, confidentiality, and termination. Obtain legal review before signing.</div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', background: '#fff' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>IP &amp; Trademarking</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Register your business name with ASIC (~$44/year). Trademark via IP Australia (~$250–$330/class). Copyright in your clinical protocols and materials is automatic — use copyright notices.</div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', background: '#fff' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>Property &amp; Commercial Lease</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Obtain independent legal advice before signing any lease. Key terms: lease term and renewal options, rent review mechanisms (CPI vs fixed), fit-out allowance, make-good obligations, and break clauses.</div>
          </div>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/provider-essentials" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Provider Essentials</Link>
          <Link href="/business/starting-your-own-practice/contracts-tendering" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Contracts &amp; Tendering →</Link>
        </div>

      </div>
    </>
  );
}
