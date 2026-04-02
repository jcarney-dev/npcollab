import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Starting Your Own Business',
};

export default function BusinessPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Business</div>
      <h1>Starting Your Own NP Business</h1>
      <p>A guide to setting up and running your own NP practice in Australia — coming soon.</p>
    </div>

    <div className="content-prose">

      <div className="highlight-box">
        <h4>🚧 Full Content Coming Soon</h4>
        <p>This page is being developed and will include a comprehensive guide to starting your own NP practice in Australia. In the meantime, here is a brief overview of what will be covered.</p>
      </div>

      <h2>What This Section Will Cover</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🏗️</div><h4>Setting Up</h4></div>
          <ul>
            <li>Business structures — sole trader vs company vs partnership</li>
            <li>ABN registration and GST considerations</li>
            <li>Choosing a practice location</li>
            <li>Equipment and fit-out essentials</li>
            <li>Medicare provider number for private practice</li>
            <li>Business bank accounts and accounting software</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">⚖️</div><h4>Legal and Compliance</h4></div>
          <ul>
            <li>Professional indemnity insurance for private practice</li>
            <li>Public liability insurance</li>
            <li>Privacy policy and consent forms</li>
            <li>Poisons licences for private premises</li>
            <li>Collaborative arrangement documentation</li>
            <li>AHPRA obligations when working independently</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">💰</div><h4>Finance and Billing</h4></div>
          <ul>
            <li>Setting your fees — bulk bill vs private billing</li>
            <li>Medicare billing from private premises</li>
            <li>PBS prescribing from private practice</li>
            <li>Bookkeeping and tax obligations</li>
            <li>Start-up costs and break-even analysis</li>
            <li>Business loans and grants for health businesses</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📣</div><h4>Building Your Practice</h4></div>
          <ul>
            <li>Finding your first patients</li>
            <li>GP and specialist referral relationships</li>
            <li>Marketing — what you can and cannot say as a health professional</li>
            <li>Website and online presence</li>
            <li>Telehealth from private practice</li>
            <li>Scaling — when and how to hire</li>
          </ul>
        </div>
      </div>

      <div className="info-box">
        <p>📬 <strong>Want to contribute to this page?</strong> If you are an NP who has started your own practice and would like to share your experience, visit the <Link href="/about/">About page</Link> to find out how to contribute to NPCollab.</p>
      </div>

    </div>
      </>
    
  );
}
