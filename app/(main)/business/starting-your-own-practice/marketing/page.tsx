import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import UnderReviewPage from '@/components/UnderReviewPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Marketing & Digital Presence | NPCollab',
  description: 'AHPRA-compliant marketing, digital presence, and privacy obligations for NP practices.',
};

export default async function MarketingPage() {
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, 'module_lock_marketing')).limit(1);
  if (row?.value === 'true') return <UnderReviewPage />;

  return (
    <>
      <div className="page-header">
        <div className="label">Business</div>
        <h1>Marketing &amp; Digital Presence</h1>
        <p>Building your practice profile within AHPRA advertising guidelines.</p>
      </div>

      <div className="content-prose">

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

        <h2>Marketing Channels</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '16px 0' }}>
          {[
            { icon: '🔍', title: 'Google Business Profile',       body: 'Free and essential — patients search for practitioners on Google. Set up and keep updated.' },
            { icon: '🌐', title: 'Practice Website',              body: 'Essential. Include: practice name, location, contact details, qualifications, AHPRA number, scope of practice, booking system, and Privacy Policy.' },
            { icon: '📅', title: 'HealthEngine and HotDoc',       body: 'Online appointment booking platforms — integrate with most CMS options.' },
            { icon: '💼', title: 'LinkedIn',                      body: 'For professional networking and referrer relationships — often more valuable than direct patient marketing.' },
            { icon: '📘', title: 'Facebook / Instagram',          body: 'Community-based patient awareness and health education content. Always follow AHPRA advertising guidelines — no testimonials.' },
            { icon: '📬', title: 'GP and Specialist Letter Drops', body: 'Introducing your services to local GPs and specialists. Referrer relationships are often the most valuable marketing activity for NPs.' },
            { icon: '🎙', title: 'Speaking at Education Events',   body: 'Speaking at local health professional education events builds referrer relationships and professional credibility.' },
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

        <h2>AI, Privacy &amp; Cybersecurity</h2>
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

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/business/starting-your-own-practice/contracts-tendering" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>← Contracts &amp; Tendering</Link>
          <Link href="/business/starting-your-own-practice/equipment" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none' }}>Continue to Equipment →</Link>
        </div>

      </div>
    </>
  );
}
