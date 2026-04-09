import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Employers — NPCollab',
  description: 'Post a job listing and reach Australia\'s nurse practitioner community. $99 for 30 days.',
};

export default function EmployersPage() {
  return (
    <div className="content-prose">
      <div className="hero-block">
        <h1>Reach Australia&rsquo;s Nurse Practitioners</h1>
        <p className="hero-sub">Post a job listing on NPCollab and connect with endorsed NPs, transitional NPs, and NP candidates across Australia.</p>
      </div>

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-value">$99</div>
          <div className="stat-card-label">Per listing</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">30</div>
          <div className="stat-card-label">Days live</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-value">NP-only</div>
          <div className="stat-card-label">Audience</div>
        </div>
      </div>

      <h2>Why advertise on NPCollab?</h2>

      <p>NPCollab is the free educational resource built specifically for Australian Nurse Practitioners. Our audience consists exclusively of endorsed NPs, transitional NPs, NP candidates, and registered nurses working towards endorsement — the exact people you&rsquo;re trying to hire.</p>

      <p>Unlike general job boards, every visitor to NPCollab is engaged with NP-specific clinical content. A job listing here is seen by a highly qualified, highly motivated audience.</p>

      <div className="highlight-box">
        <h3>Who uses NPCollab?</h3>
        <p>Endorsed Nurse Practitioners, Transitional Nurse Practitioners (TNPs), NP students, and RNs actively working towards NP endorsement — all verified through our access request process.</p>
      </div>

      <h2>How it works</h2>

      <p>Submit your job listing through our simple online form. We review each listing within 1 business day and publish approved listings immediately. You&rsquo;ll receive a confirmation email when your listing goes live, and a reminder when it&rsquo;s approaching expiry.</p>

      <div className="info-box">
        <strong>Listing requirements:</strong> All listings must be for genuine Nurse Practitioner or NP-adjacent roles. We reserve the right to reject listings that are not relevant to our audience.
      </div>

      <h2>Pricing</h2>

      <p>A single listing costs <strong>$99 AUD</strong> and runs for <strong>30 days</strong>. Payment is processed securely via Stripe. No subscription, no hidden fees.</p>

      <p>For multiple simultaneous listings or ongoing recruitment partnerships, contact us via the <Link href="/support">Support page</Link>.</p>

      <h2>What to include</h2>

      <p>For best results, include: the full job title, location (suburb and state), employment type (full-time, part-time, casual, locum), clinical specialty, a clear description of responsibilities and requirements, salary range or band if possible, and a direct application URL or contact method.</p>

      <div style={{ marginTop: '40px', padding: '32px', background: 'var(--navy)', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontSize: '22px' }}>Ready to post?</h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', fontSize: '15px' }}>
          $99 AUD · 30 days · Live within 1 business day
        </p>
        <Link href="/community/jobs/post" className="btn-primary">
          Post a Job →
        </Link>
      </div>
    </div>
  );
}
