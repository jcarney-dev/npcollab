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
          <li><strong>Free</strong> — no paywalls, no subscriptions</li>
          <li><strong>Australian-contextualised</strong> — AHPRA-aligned, uses Australian guidelines</li>
          <li><strong>Clinically grounded</strong> — written and reviewed by practising NPs</li>
          <li><strong>Open to contribution</strong> — contact us if you have expertise to share</li>
        </ul>
        <div className="highlight-box">
          <h4>Important Disclaimer</h4>
          <p>All content on NPCollab is for <strong>educational purposes only</strong>. It does not constitute clinical advice. Always apply your own clinical judgement, refer to current Australian guidelines, and consult with colleagues when managing complex presentations.</p>
        </div>

        <h2>Founder</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px', maxWidth: '560px' }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--navy)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 700, flexShrink: 0 }}>
            JC
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '2px' }}>Jason Carney</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '10px' }}>Nurse Practitioner &middot; Founder, Developer &amp; Content Creator</div>
            <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text)' }}>
              Jason is a Nurse Practitioner based in Newcastle, NSW. He created NPCollab to address the lack of free, Australian-specific clinical education resources for NPs and NP students. With a background spanning emergency nursing, advanced practice, and NP endorsement, he builds and maintains NPCollab in his own time — writing clinical content, developing the platform, and ensuring all resources reflect current Australian guidelines and practice standards.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: '36px' }}>Contributors</h2>
        <p>NPCollab welcomes NP contributors who want to help build and improve clinical modules, quiz questions, assessment frameworks, and SOAP note examples. If you have clinical expertise in an area not yet covered — or want to help refine existing content — we would love to hear from you.</p>
        <a
          href="mailto:jason.carney@npcollab.com.au"
          className="btn-primary"
          style={{ display: 'inline-block', marginBottom: '24px', fontSize: '0.88rem' }}
        >
          Get in Touch
        </a>

        <div className="info-box">
          <p>NPCollab is free to access. To help cover running costs, NPCollab may display occasional tasteful advertising from relevant healthcare companies and sponsors. All advertising is clearly labelled and editorially independent from clinical content.</p>
        </div>
      </div>
    </>
  );
}
