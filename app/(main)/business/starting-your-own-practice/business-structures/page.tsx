import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Business Structures & Registration | NPCollab',
  description: 'Choosing the right business structure for your NP practice — sole trader, company, partnership, and trust compared.',
};

export default async function BusinessStructuresPage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_business-structures')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Business Structures &amp; Registration</h1>
        <p>Choosing the right structure and registrations before you open your doors.</p>
      </div>

      <div className="content-prose">

        <h2>Choosing Your Business Structure</h2>
        <p>Choosing the right business structure from the start saves significant time, money, and complexity later. Each structure has different tax, liability, and administrative implications.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '20px 0' }}>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Sole Trader</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>The simplest structure. You operate under your own ABN. All income is taxed at your personal income tax rate. Suitable for NPs starting out, telehealth-only models, or low-revenue practices.</p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Simple to set up, low cost, minimal reporting'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span></div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Unlimited personal liability', 'Higher tax at higher income', 'Less flexibility'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span></div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Partnership</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>Two or more people operating a business together. Each partner shares profits, losses, and liabilities. Requires a formal partnership agreement.</p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Shared costs and responsibilities', 'Combined expertise'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span></div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Joint and several liability', 'Disputes can be costly', 'Dissolves if a partner leaves'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span></div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Company (Pty Ltd)</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>A separate legal entity. The company pays corporate tax (25&ndash;30%) rather than personal income tax. More complex and expensive to set up but provides asset protection and tax flexibility.</p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Asset protection', 'Tax flexibility', 'Professional credibility', 'Easier to scale'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span></div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Higher setup costs ($1,000–$3,000+)', 'Annual ASIC fees', 'More complex accounting'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span></div>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Trust (Discretionary / Family Trust)</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>A trustee holds assets and distributes income to beneficiaries. Highly effective for tax efficiency and asset protection &mdash; widely used by healthcare professionals.</p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Significant tax efficiency', 'Asset protection', 'Income splitting flexibility'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span></div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Complex to set up', 'Requires specialist accounting advice'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}><span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span></div>
              ))}
            </div>
          </div>

        </div>

        <div className="info-box">
          <p><strong>Recommendation:</strong> Speak to an accountant with healthcare experience before choosing. Cost upfront ($500&ndash;$1,500) saves significantly over time.</p>
        </div>

        <h2>Key Registration Steps</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0' }}>
          {[
            { label: 'ABN',  title: 'Australian Business Number (ABN)', body: 'Register at abr.gov.au — free. Required before invoicing, registering for GST, or opening a business bank account.', href: 'https://www.abr.gov.au' },
            { label: 'ATO',  title: 'ATO Online Services for Business', body: 'Manage tax obligations, lodge BAS, manage PAYG, and access business registration services. Link your myGovID to access ATO business systems.', href: 'https://www.ato.gov.au/businesses-and-organisations' },
            { label: 'ABR',  title: 'Australian Business Register (ABR)', body: 'Manages ABN registrations, GST registration, and business details. Keep your ABR details current — Medicare and other government agencies verify your ABN against ABR records.', href: 'https://www.abr.gov.au' },
            { label: 'ASIC', title: 'ASIC — Australian Securities and Investments Commission', body: 'If operating as a company or registering a business name: register at asic.gov.au. Annual ASIC fees apply for company registration (~$310/year). Business name registration: ~$44/year.', href: 'https://www.asic.gov.au' },
            { label: 'GST',  title: 'GST Registration', body: 'Healthcare services delivered by registered health professionals are generally GST-exempt. Confirm with your accountant. If annual turnover exceeds $75,000 — registration is mandatory.', href: null },
            { label: 'Bank', title: 'Business Bank Account', body: 'Separate business and personal finances from day one. Essential for clean accounting, BAS lodgement, and tax purposes.', href: null },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 16px', border: '1px solid var(--border)', borderRadius: '8px', background: '#fff' }}>
              <div style={{ flexShrink: 0, width: '48px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gold-pale)', border: '1px solid var(--gold)', borderRadius: '5px', fontSize: '11px', fontWeight: 700, color: 'var(--navy)' }}>{item.label}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>
                  {item.href ? <a href={item.href} target="_blank" rel="noopener" style={{ color: 'var(--navy)', textDecoration: 'underline', textDecorationColor: 'var(--gold)' }}>{item.title}</a> : item.title}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Back to Starting Your Own Practice</Link>
          <Link href="/business/starting-your-own-practice/funding-revenue" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Funding &amp; Revenue →</Link>
        </div>

      </div>
    </>
  );
}
