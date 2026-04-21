import type { Metadata } from 'next';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Starting Your Own NP Practice',
  description: 'A practical guide to establishing an independent Nurse Practitioner practice in Australia — business structure, Medicare billing, insurance, governance, and marketing.',
  openGraph: {
    title: 'Starting Your Own NP Practice | NPCollab',
    description: 'A practical guide to establishing an independent Nurse Practitioner practice in Australia — business structure, Medicare billing, insurance, governance, and marketing.',
    url: 'https://npcollab.com/business/starting-your-own-practice',
  },
  alternates: {
    canonical: 'https://npcollab.com/business/starting-your-own-practice',
  },
};

export default async function StartingYourOwnPracticePage() {
  const [row] = await db
    .select()
    .from(siteSettings)
    .where(eq(siteSettings.key, 'module_lock_starting-your-own-practice'))
    .limit(1);

  if (row?.value === 'true') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>Coming Soon</h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.6 }}>
          This section is currently being updated and will be available shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Starting Your Own Practice</h1>
        <p>A practical guide to establishing an independent NP practice in Australia — from business structure to billing, marketing, and governance.</p>
        <div style={{ height: '1px', background: 'var(--border)', margin: '20px 0 0' }} />
      </div>

      <div className="content-prose">

        {/* ── INTRO ── */}
        <p>
          Starting an independent Nurse Practitioner practice is one of the most professionally rewarding steps an NP can take. Australia&rsquo;s regulatory and billing landscape for NPs has evolved significantly, creating genuine pathways for independent practice that did not exist a decade ago. This guide covers everything you need to know &mdash; from choosing the right business structure and navigating Medicare billing, to clinical governance, marketing, and the day-to-day realities of running your own NP practice.
        </p>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 1 — BUSINESS STRUCTURES & REGISTRATION                */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>1. Business Structures &amp; Registration</h2>
        <h3>Choosing Your Business Structure</h3>
        <p>Choosing the right business structure from the start saves significant time, money, and complexity later. Each structure has different tax, liability, and administrative implications.</p>

        {/* Structure cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '20px 0' }}>

          {/* Sole Trader */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Sole Trader</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
              The simplest structure. You operate under your own ABN. All income is taxed at your personal income tax rate. Suitable for NPs starting out, telehealth-only models, or low-revenue practices.
            </p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Simple to set up, low cost, minimal reporting'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Unlimited personal liability', 'Higher tax at higher income', 'Less flexibility'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Partnership</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
              Two or more people operating a business together. Each partner shares profits, losses, and liabilities. Requires a formal partnership agreement.
            </p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Shared costs and responsibilities', 'Combined expertise'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Joint and several liability', 'Disputes can be costly', 'Dissolves if a partner leaves'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Company (Pty Ltd)</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
              A separate legal entity. The company pays corporate tax (25&ndash;30%) rather than personal income tax. More complex and expensive to set up but provides asset protection and tax flexibility.
            </p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Asset protection', 'Tax flexibility', 'Professional credibility', 'Easier to scale'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Higher setup costs ($1,000–$3,000+)', 'Annual ASIC fees', 'More complex accounting'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>Trust (Discretionary / Family Trust)</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
              A trustee holds assets and distributes income to beneficiaries. Highly effective for tax efficiency and asset protection &mdash; widely used by healthcare professionals.
            </p>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Pros</div>
              {['Significant tax efficiency', 'Asset protection', 'Income splitting flexibility'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span><span>{p}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>Cons</div>
              {['Complex to set up', 'Requires specialist accounting advice'].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  <span style={{ color: '#d97706', flexShrink: 0 }}>⚠</span><span>{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="info-box">
          <p><strong>Recommendation:</strong> Speak to an accountant with healthcare experience before choosing. Cost upfront ($500&ndash;$1,500) saves significantly over time.</p>
        </div>

        <h3>Key Registration Steps</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0' }}>
          {[
            { label: 'ABN', title: 'Australian Business Number (ABN)', body: 'Register at abr.gov.au — free. Required before invoicing, registering for GST, or opening a business bank account.', href: 'https://www.abr.gov.au' },
            { label: 'ATO', title: 'ATO Online Services for Business', body: 'Manage tax obligations, lodge BAS, manage PAYG, and access business registration services. Link your myGovID to access ATO business systems.', href: 'https://www.ato.gov.au/businesses-and-organisations' },
            { label: 'ABR', title: 'Australian Business Register (ABR)', body: 'Manages ABN registrations, GST registration, and business details. Keep your ABR details current — Medicare and other government agencies verify your ABN against ABR records.', href: 'https://www.abr.gov.au' },
            { label: 'ASIC', title: 'ASIC — Australian Securities and Investments Commission', body: 'If operating as a company or registering a business name: register at asic.gov.au. Annual ASIC fees apply for company registration (~$310/year). Business name registration: ~$44/year.', href: 'https://www.asic.gov.au' },
            { label: 'GST', title: 'GST Registration', body: 'Healthcare services delivered by registered health professionals are generally GST-exempt. Confirm with your accountant. If annual turnover exceeds $75,000 — registration is mandatory.', href: null },
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

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 2 — FUNDING & REVENUE MODELS                          */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>2. Funding &amp; Revenue Models</h2>
        <h3>Medicare Billing</h3>
        <p>Medicare is the primary revenue stream for most independent NP practices. Understanding what you can bill, when, and how is critical to financial viability.</p>

        <h4 style={{ color: 'var(--navy)', marginTop: '20px' }}>NP MBS Item Groups</h4>
        <div className="table-scroll">
          <table className="np-table">
            <thead>
              <tr>
                <th>MBS Group</th>
                <th>Description</th>
                <th>Notes</th>
              </tr>
            </thead>
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

        <h4 style={{ color: 'var(--navy)', marginTop: '24px' }}>Telehealth Billing Rules</h4>
        <div className="highlight-box">
          <h4 style={{ marginTop: 0 }}>📡 Telehealth Eligibility Criteria</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>The patient must have an established clinical relationship — seen the NP or a practitioner at the same practice within the previous 12 months (for most items)</li>
            <li>Video consultation required for most telehealth items (phone-only items have more limited availability)</li>
            <li>30/20 rule: for certain telehealth items, the patient must be located at least 30km from the NP&rsquo;s regular practice, or the NP must be located more than 20km from a metropolitan area</li>
            <li>Always check the specific telehealth eligibility criteria on MBS Online before billing</li>
          </ul>
        </div>

        <h3>NDIS Billing</h3>
        <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff', margin: '16px 0' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
            The National Disability Insurance Scheme (NDIS) is an increasingly important revenue stream for NPs, particularly in primary care, mental health, and community settings.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div><strong style={{ fontSize: '13px', color: 'var(--navy)' }}>Becoming an NDIS Provider</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Register at ndis.gov.au/providers. Registration is required for funded participants — unregistered providers can only see self-managed or plan-managed participants.</span></div>
            <div><strong style={{ fontSize: '13px', color: 'var(--navy)' }}>NDIS Price Guide — NP Service Categories</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Improved Health and Wellbeing; Daily Activities supports; Therapy supports (depending on endorsement). The NDIS Price Arrangement document sets maximum prices.</span></div>
            <div><strong style={{ fontSize: '13px', color: 'var(--navy)' }}>Claiming Process</strong><br /><span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Claims are submitted through the NDIS Provider Portal (myplace). Invoice the participant&rsquo;s plan manager or the NDIA directly depending on how the participant&rsquo;s plan is managed.</span></div>
          </div>
        </div>

        <h3>PBS Prescribing</h3>
        <p>NPs are authorised prescribers under the Pharmaceutical Benefits Scheme (PBS). Key PBS regulations for NPs:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
          {[
            { label: 'Authority Rx', title: 'PBS Authority Prescriptions', body: 'Some medications require PBS authority approval before prescribing. NPs can apply for authority online via HPOS or by telephone for streamlined authority items.' },
            { label: 'Rx Writing', title: 'Prescription Writing Requirements', body: 'PBS prescriptions must include: patient full name and address, date, drug name (generic preferred), strength, quantity, number of repeats, prescriber name, prescriber number, and signature. Specific requirements apply for Schedule 8 medications.' },
            { label: 'Prescriber No.', title: 'Prescriber Number', body: 'Your PBS prescriber number (from Services Australia) is required on all PBS prescriptions. This is separate from your Medicare provider number.' },
            { label: 'Restricted', title: 'Restricted Benefit Items', body: 'Some PBS items are restricted to specific indications or patient groups. Prescribing outside the restriction constitutes a non-PBS prescription — the patient pays the full cost.' },
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

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 3 — PROVIDER & PRESCRIBER ESSENTIALS                  */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>3. Provider &amp; Prescriber Essentials</h2>
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

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 4 — BUSINESS OPERATIONS & GOVERNANCE                  */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>4. Business Operations &amp; Governance</h2>

        <h3>Insurance</h3>
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

        <h3>Client Management Systems (CMS)</h3>
        <p>Choose a clinical records system before seeing your first patient. Ensure your chosen system supports Medicare billing, My Health Record integration, electronic prescribing (eRx), and AHPRA-compliant clinical documentation.</p>
        <div className="table-scroll">
          <table className="np-table">
            <thead>
              <tr>
                <th>Software</th>
                <th>Best For</th>
                <th>Key Features</th>
              </tr>
            </thead>
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

        <h3>Clinical Governance</h3>
        <p>Strong clinical governance protects your patients, your registration, and your practice. It is not optional.</p>

        <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', background: '#fff', margin: '16px 0' }}>
          <h4 style={{ margin: '0 0 14px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>📋 Policies &amp; Procedures Checklist</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
            {[
              'Clinical scope of practice and referral pathways',
              'Medication management and Schedule 8 prescribing',
              'Medical emergencies and after-hours management',
              'Informed consent process',
              'Patient complaints and feedback',
              'Privacy and confidentiality',
              'Mandatory reporting obligations',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '8px 10px', background: 'var(--off-white)', borderRadius: '6px', fontSize: '13px', color: 'var(--text)' }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, fontWeight: 700 }}>□</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <p><strong>Standards to align with:</strong> NMBA Nurse Practitioner Standards for Practice; RACGP Standards for General Practice (adapted for NP context); ACSQHC safety and quality standards; Relevant specialty college standards.</p>
          <p style={{ marginBottom: 0 }}>Conduct regular clinical audits and document findings. This also provides excellent CPD evidence.</p>
        </div>

        <h3>MOUs, IP &amp; Property</h3>
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

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 5 — CONTRACTS, TENDERING & COMMISSIONING              */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>5. Contracts, Tendering &amp; Commissioning</h2>

        <h3>Contractor Agreements</h3>
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

        <h3>Tendering Platforms</h3>
        <p>Government and NGO contracts for NP services are increasingly advertised through formal tender processes.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
          {[
            { label: 'Federal', title: 'AusTender', body: 'Commonwealth Government procurement portal — austender.gov.au', href: 'https://www.austender.gov.au' },
            { label: 'State', title: 'State Government Portals', body: 'Each state has its own system: NSW Buy.NSW, VIC tenders.vic.gov.au, and equivalents in other states.', href: null },
            { label: 'NDIS', title: 'NDIS Tenders', body: 'Via NDIS Commission and Department of Social Services.', href: null },
            { label: 'PHN', title: 'Primary Health Network Commissioning', body: 'PHNs commission a range of primary care services including NP services. Check your local PHN\'s commissioning priorities.', href: null },
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

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 6 — MARKETING & DIGITAL PRESENCE                      */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>6. Marketing &amp; Digital Presence</h2>

        <div style={{ borderLeft: '4px solid #d97706', background: '#fffbeb', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '20px 0' }}>
          <h4 style={{ color: '#92400e', marginTop: 0, marginBottom: '10px', fontFamily: 'var(--font-body)', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>⚠ AHPRA Advertising Rules — Mandatory Reading</h4>
          <p style={{ color: '#92400e', fontSize: '0.93rem', marginBottom: '8px' }}>Healthcare advertising in Australia is regulated by AHPRA&rsquo;s advertising guidelines and the Australian Consumer Law. All advertising must be:</p>
          <ul style={{ paddingLeft: '18px', color: '#92400e', marginBottom: '8px' }}>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}>Truthful and not misleading</li>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}>Not claim to cure conditions that cannot be cured</li>
            <li style={{ fontSize: '0.93rem', marginBottom: '4px' }}><strong>Not use testimonials</strong> — patient testimonials are prohibited under AHPRA guidelines</li>
            <li style={{ fontSize: '0.93rem' }}>Not create unrealistic expectations</li>
          </ul>
          <p style={{ marginBottom: 0, color: '#92400e', fontSize: '0.93rem' }}>Read the full AHPRA advertising guidelines at <a href="https://www.ahpra.gov.au/resources/advertising-hub" target="_blank" rel="noopener" style={{ color: '#92400e', fontWeight: 600 }}>ahpra.gov.au/resources/advertising-hub</a> before any marketing activity.</p>
        </div>

        <h3>Marketing Channels</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '16px 0' }}>
          {[
            { icon: '🔍', title: 'Google Business Profile', body: 'Free and essential — patients search for practitioners on Google. Set up and keep updated.' },
            { icon: '🌐', title: 'Practice Website', body: 'Essential. Include: practice name, location, contact details, qualifications, AHPRA number, scope of practice, booking system, and Privacy Policy.' },
            { icon: '📅', title: 'HealthEngine and HotDoc', body: 'Online appointment booking platforms — integrate with most CMS options.' },
            { icon: '💼', title: 'LinkedIn', body: 'For professional networking and referrer relationships — often more valuable than direct patient marketing.' },
            { icon: '📘', title: 'Facebook / Instagram', body: 'Community-based patient awareness and health education content. Always follow AHPRA advertising guidelines — no testimonials.' },
            { icon: '📬', title: 'GP and Specialist Letter Drops', body: 'Introducing your services to local GPs and specialists. Referrer relationships are often the most valuable marketing activity for NPs.' },
            { icon: '🎙', title: 'Speaking at Education Events', body: 'Speaking at local health professional education events builds referrer relationships and professional credibility.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: '8px', background: '#fff' }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '2px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <h3>AI, Privacy &amp; Cybersecurity</h3>
        <div className="info-box">
          <h4 style={{ marginTop: 0 }}>🔒 Privacy and Data Security Obligations</h4>
          <p>Under the Australian Privacy Act and APP (Australian Privacy Principles):</p>
          <ul>
            <li>You must have a current Privacy Policy accessible to patients</li>
            <li>Patient health information is sensitive information under the Act — highest level of protection required</li>
            <li>Any third-party tools (AI scribes, CMS, booking systems) must have adequate data security — patient data must not be stored on offshore servers without explicit patient consent</li>
            <li>Conduct a Privacy Impact Assessment (PIA) before adopting new digital tools</li>
          </ul>
          <p style={{ marginBottom: 0 }}><strong>Cybersecurity essentials:</strong> Multi-factor authentication for all clinical systems; encrypt patient data at rest and in transit; have a data breach response plan; notify the OAIC within 30 days of a notifiable data breach; secure your practice Wi-Fi.</p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 7 — EQUIPMENT & HARDWARE                              */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>7. Equipment &amp; Hardware</h2>
        <p>Equipment requirements vary significantly by specialty endorsement. Develop an equipment list based on your specific scope before purchasing.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', margin: '16px 0' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 12px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🩺 Primary Care — Core Clinical</h4>
            <ul style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, paddingLeft: '18px' }}>
              <li>Examination table</li>
              <li>Sphygmomanometer (validated device)</li>
              <li>Stethoscope (clinical grade)</li>
              <li>Otoscope and ophthalmoscope</li>
              <li>Pulse oximeter</li>
              <li>Thermometer (tympanic or temporal)</li>
              <li>Peak flow meters and spirometer</li>
              <li>12-lead ECG machine</li>
              <li>Weight scales and height measure</li>
              <li>Glucometer and lancets</li>
              <li>Urinalysis equipment</li>
              <li>Wound care supplies</li>
              <li>Sharps disposal containers</li>
              <li>Resuscitation equipment (AED, bag-mask, O₂, emergency medications)</li>
            </ul>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 12px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🖥 Office &amp; Administrative Hardware</h4>
            <ul style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, paddingLeft: '18px' }}>
              <li>Dedicated clinical workstation (desktop or laptop)</li>
              <li>Second monitor — for documentation alongside consultation</li>
              <li>Laser printer for clinical documents</li>
              <li>Lockable filing for paper records</li>
              <li>Medical-grade Wi-Fi router (separate practice and patient networks)</li>
              <li>UPS (uninterruptible power supply)</li>
              <li>Webcam and headset for telehealth</li>
              <li>EFTPOS terminal for gap and private billing</li>
            </ul>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '18px', background: '#fff' }}>
            <h4 style={{ margin: '0 0 12px', color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>🔬 Point-of-Care Testing</h4>
            <ul style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px', paddingLeft: '18px' }}>
              <li>iSTAT or similar portable blood analyser</li>
              <li>Urine dipstick analyser</li>
              <li>Rapid strep A test</li>
              <li>Rapid influenza/COVID antigen tests</li>
              <li>HbA1c analyser (high-volume diabetes)</li>
              <li>Lipid panel analyser</li>
            </ul>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', padding: '8px 10px', background: 'var(--off-white)', borderRadius: '6px', lineHeight: 1.5 }}>All POCT equipment must comply with NPAAC standards for point-of-care testing.</div>
          </div>
        </div>

        <div className="info-box">
          <h4 style={{ marginTop: 0 }}>❄ Cold Chain Requirements</h4>
          <p style={{ marginBottom: 0 }}>If administering vaccines or storing temperature-sensitive medications: medical-grade refrigerator (not domestic), data logger for temperature monitoring, cold chain management policy, and incident reporting process. National Immunisation Program (NIP) cold chain requirements apply to all NIP vaccines.</p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* SECTION 8 — FINANCIAL PLANNING (Start-up Budget Table)        */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>8. Financial Planning</h2>
        <h3>Start-Up Cost Budget</h3>

        <div className="table-scroll">
          <table className="np-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Estimated Cost</th>
              </tr>
            </thead>
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

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* USEFUL RESOURCES                                               */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <h2>Useful Resources</h2>
        <div className="resources-list">
          <a href="https://www.acnp.org.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">🏥</div>
            <div className="r-body"><div className="r-title">Australian College of Nurse Practitioners (ACNP)</div><div className="r-desc">Peak NP body — advocacy, resources, and professional support for independent NP practice</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.mbsonline.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">💰</div>
            <div className="r-body"><div className="r-title">MBS Online</div><div className="r-desc">Current MBS item numbers, fees, and eligibility criteria for NP billing</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">📋</div>
            <div className="r-body"><div className="r-title">Services Australia — Medicare for NPs</div><div className="r-desc">Medicare and PBS provider number applications, HPOS access, billing guidance</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://proda.humanservices.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">🔐</div>
            <div className="r-body"><div className="r-title">PRODA — Provider Digital Access</div><div className="r-desc">Authentication portal for government health systems including HPOS and myplace</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.abr.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">🏛</div>
            <div className="r-body"><div className="r-title">Australian Business Register</div><div className="r-desc">ABN registration and GST registration</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.asic.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">⚖</div>
            <div className="r-body"><div className="r-title">ASIC — Business Registration</div><div className="r-desc">Company registration, business name registration, and compliance</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.ato.gov.au/businesses-and-organisations" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">🧾</div>
            <div className="r-body"><div className="r-title">ATO Online Services for Business</div><div className="r-desc">Tax obligations, PAYG, BAS, and business registration for self-employed NPs</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.ahpra.gov.au/resources/advertising-hub" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">📢</div>
            <div className="r-body"><div className="r-title">AHPRA Advertising Guidelines</div><div className="r-desc">Mandatory reading before any practice marketing or advertising activity</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.oaic.gov.au/privacy/australian-privacy-principles" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">🔒</div>
            <div className="r-body"><div className="r-title">Australian Privacy Act and APP</div><div className="r-desc">Privacy obligations for healthcare providers including data breach notification</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.ipaustralia.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">™</div>
            <div className="r-body"><div className="r-title">IP Australia — Trademarks</div><div className="r-desc">Trademark registration for practice branding protection</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.austender.gov.au" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">📝</div>
            <div className="r-body"><div className="r-title">AusTender</div><div className="r-desc">Commonwealth Government tender opportunities including health services</div></div>
            <div className="r-ext">↗</div>
          </a>
          <a href="https://www.ndis.gov.au/providers" target="_blank" rel="noopener" className="resource-link">
            <div className="r-icon">♿</div>
            <div className="r-body"><div className="r-title">NDIS Provider Registration</div><div className="r-desc">NDIS provider registration, price guide, and claiming information</div></div>
            <div className="r-ext">↗</div>
          </a>
        </div>

        <div className="highlight-box" style={{ marginTop: '32px' }}>
          <p style={{ marginBottom: 0 }}>
            <strong>Educational purposes only.</strong> This guide provides general information for NPs considering independent practice. It does not constitute legal, financial, or tax advice. Always consult a qualified accountant, lawyer, and your professional indemnity insurer before establishing an independent practice.
          </p>
        </div>

      </div>
    </>
  );
}
