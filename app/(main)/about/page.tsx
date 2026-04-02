import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">About</div>
      <h1>About NPCollab</h1>
      <p>A free, collaborative clinical resource built by Australian Nurse Practitioners, for Australian Nurse Practitioners.</p>
    </div>
    <div className="content-prose">
      <h2>Our Mission</h2>
      <p>NPCollab exists to provide free, high-quality, evidence-based clinical learning resources for Australian Nurse Practitioners — whether you are just starting out, completing your Masters, or looking for a quick clinical reference.</p>
      <p>Every resource on NPCollab is:</p>
      <ul>
        <li><strong>Free</strong> — no paywalls, no subscriptions, no advertising</li>
        <li><strong>Australian-contextualised</strong> — AHPRA-aligned, uses Australian guidelines</li>
        <li><strong>Clinically grounded</strong> — written and reviewed by practising NPs</li>
        <li><strong>Open to contribution</strong> — via GitHub for those who want to add or improve content</li>
      </ul>
      <div className="highlight-box">
        <h4>Important Disclaimer</h4>
        <p>All content on NPCollab is for <strong>educational purposes only</strong>. It does not constitute clinical advice. Always apply your own clinical judgement, refer to current Australian guidelines, and consult with colleagues when managing complex presentations.</p>
      </div>
      <h2>Contributors</h2>
      <div className="contributors-grid">
        <div className="contributor-card">
          <div className="contributor-avatar">🩺</div>
          <h4>Founding Contributor</h4>
          <div className="role">Nurse Practitioner</div>
          <p>Creator and lead content developer for NPCollab</p>
        </div>
        <div className="contributor-card">
          <div className="contributor-avatar">➕</div>
          <h4>You?</h4>
          <div className="role">Open Contribution</div>
          <p>We welcome NP contributors. See our GitHub repository to get involved.</p>
        </div>
      </div>
      <h2>How to Contribute</h2>
      <ol>
        <li>Visit the NPCollab GitHub repository</li>
        <li>Open the relevant content file</li>
        <li>Click the pencil edit icon</li>
        <li>Make your changes and submit a pull request</li>
        <li>The maintainer will review and merge approved contributions</li>
      </ol>
    </div>
      </>
    
  );
}
