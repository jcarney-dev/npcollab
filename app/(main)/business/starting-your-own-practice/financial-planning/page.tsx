import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Financial Planning | NPCollab',
  description: 'Start-up costs, income modelling, and tax obligations for independent NP practice.',
};

export default async function FinancialPlanningPage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_financial-planning')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Financial Planning</h1>
        <p>Start-up budgeting, income modelling, and tax obligations for independent NP practice.</p>
      </div>

      <div className="content-prose">

        <h2>Start-Up Cost Budget</h2>
        <div className="table-scroll">
          <table className="np-table">
            <thead><tr><th>Item</th><th>Estimated Cost</th></tr></thead>
            <tbody>
              <tr><td>Business registration and setup</td><td>$500 – $3,000</td></tr>
              <tr><td>Accountant (initial setup)</td><td>$1,000 – $2,500</td></tr>
              <tr><td>Legal advice (contracts, lease)</td><td>$1,000 – $3,000</td></tr>
              <tr><td>Clinical records software</td><td>$50 – $300/month</td></tr>
              <tr><td>Professional indemnity insurance</td><td>$2,000 – $5,000/year</td></tr>
              <tr><td>Public liability insurance</td><td>$500 – $1,500/year</td></tr>
              <tr><td>Premises (room rental, fit-out contribution)</td><td>Highly variable</td></tr>
              <tr><td>Clinical equipment</td><td>$5,000 – $50,000+</td></tr>
              <tr><td>Office hardware</td><td>$2,000 – $5,000</td></tr>
              <tr><td>Website and branding</td><td>$2,000 – $8,000</td></tr>
              <tr><td>AHPRA registration</td><td>~$400/year</td></tr>
              <tr><td>Working capital reserve (6 months)</td><td>Highly variable</td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <p><strong>Income modelling:</strong> Model your expected income conservatively before starting. Consider: patients per day, bulk bill vs private mix, average MBS item value, and fixed monthly overheads. Most independent NP practices take 6&ndash;12 months to reach financial sustainability. A 6-month operating expense reserve is strongly recommended.</p>
          <p style={{ marginBottom: 0 }}><strong>Tax obligations as a self-employed NP:</strong> Quarterly PAYG instalments; GST returns if registered; superannuation contributions (minimum 11% recommended); income tax. Work with your accountant on timing of deductions.</p>
        </div>

        <h2>Useful Resources</h2>
        <div className="resources-list">
          {[
            { href: 'https://www.acnp.org.au',                                         icon: '🏥', title: 'Australian College of Nurse Practitioners (ACNP)',  desc: 'Peak NP body — advocacy, resources, and professional support for independent NP practice' },
            { href: 'https://www.mbsonline.gov.au',                                    icon: '💰', title: 'MBS Online',                                        desc: 'Current MBS item numbers, fees, and eligibility criteria for NP billing' },
            { href: 'https://www.servicesaustralia.gov.au',                            icon: '📋', title: 'Services Australia — Medicare for NPs',             desc: 'Medicare and PBS provider number applications, HPOS access, billing guidance' },
            { href: 'https://proda.humanservices.gov.au',                              icon: '🔐', title: 'PRODA — Provider Digital Access',                   desc: 'Authentication portal for government health systems including HPOS and myplace' },
            { href: 'https://www.abr.gov.au',                                          icon: '🏛', title: 'Australian Business Register',                      desc: 'ABN registration and GST registration' },
            { href: 'https://www.asic.gov.au',                                         icon: '⚖',  title: 'ASIC — Business Registration',                     desc: 'Company registration, business name registration, and compliance' },
            { href: 'https://www.ato.gov.au/businesses-and-organisations',             icon: '🧾', title: 'ATO Online Services for Business',                  desc: 'Tax obligations, PAYG, BAS, and business registration for self-employed NPs' },
            { href: 'https://www.ahpra.gov.au/resources/advertising-hub',             icon: '📢', title: 'AHPRA Advertising Guidelines',                      desc: 'Mandatory reading before any practice marketing or advertising activity' },
            { href: 'https://www.oaic.gov.au/privacy/australian-privacy-principles',  icon: '🔒', title: 'Australian Privacy Act and APP',                    desc: 'Privacy obligations for healthcare providers including data breach notification' },
            { href: 'https://www.ipaustralia.gov.au',                                  icon: '™',  title: 'IP Australia — Trademarks',                         desc: 'Trademark registration for practice branding protection' },
            { href: 'https://www.austender.gov.au',                                    icon: '📝', title: 'AusTender',                                          desc: 'Commonwealth Government tender opportunities including health services' },
            { href: 'https://www.ndis.gov.au/providers',                               icon: '♿', title: 'NDIS Provider Registration',                        desc: 'NDIS provider registration, price guide, and claiming information' },
          ].map((r, i) => (
            <a key={i} href={r.href} target="_blank" rel="noopener" className="resource-link">
              <div className="r-icon">{r.icon}</div>
              <div className="r-body"><div className="r-title">{r.title}</div><div className="r-desc">{r.desc}</div></div>
              <div className="r-ext">↗</div>
            </a>
          ))}
        </div>

        <div className="highlight-box" style={{ marginTop: '32px' }}>
          <p style={{ marginBottom: 0 }}>
            <strong>Educational purposes only.</strong> This guide provides general information for NPs considering independent practice. It does not constitute legal, financial, or tax advice. Always consult a qualified accountant, lawyer, and your professional indemnity insurer before establishing an independent practice.
          </p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/equipment" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Equipment &amp; Hardware</Link>
          <Link href="/business/starting-your-own-practice" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>Back to overview ↑</Link>
        </div>

      </div>
    </>
  );
}
