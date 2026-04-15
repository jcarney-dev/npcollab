'use client';

export default function SupportPage() {
  const shareText = 'NPCollab is a free clinical education resource for Australian Nurse Practitioners. Check it out at npcollab.com';
  const shareUrl = 'https://npcollab.com';
  const shareSubject = 'Free NP education resource — NPCollab';

  function copyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Link copied to clipboard.');
    });
  }

  return (
    <>
      <div className="page-header">
        <div className="label">Site</div>
        <h1>Support NPCollab</h1>
        <p>NPCollab is free to access and will always remain so. Help us keep it running.</p>
      </div>
      <div className="content-prose">
        <p>Building and maintaining NPCollab takes time, clinical expertise, and a small amount of money for hosting. If this resource has helped your practice, there are a few ways you can help.</p>
        <div className="highlight-box">
          <h4>Running Costs</h4>
          <ul>
            <li>Domain registration (npcollab.com.au) — approximately $20 AUD per year</li>
            <li>Hosting (Vercel) — approximately $0–$240 AUD per year depending on traffic</li>
            <li>Database (Neon) — approximately $0–$120 AUD per year</li>
            <li>Email (Resend) — approximately $0–$120 AUD per year</li>
            <li>Analytics — $0–$108 AUD per year</li>
            <li>Content development — Voluntary NP contributors</li>
          </ul>
        </div>

        <div className="funding-grid">
          <div className="funding-card featured">
            <span className="f-icon">☕</span>
            <h4>Buy Me a Coffee</h4>
            <p>A one-off small contribution to say thanks. Completely optional.</p>
            <a href="https://buymeacoffee.com/npcollab" target="_blank" rel="noopener" className="btn-support">Support on Buy Me a Coffee</a>
          </div>
          <div className="funding-card">
            <span className="f-icon">🤝</span>
            <h4>Contribute Content</h4>
            <p>Are you an NP with expertise to share? We welcome clinical contributors for new modules, quiz questions, and SOAP note examples.</p>
            <a href="mailto:jason.carney@npcollab.com.au" className="btn-primary" style={{ fontSize: '0.82rem', padding: '9px 18px' }}>Get in Touch</a>
          </div>
        </div>

        <h2>Spread the Word</h2>
        <p>The best thing you can do for NPCollab is share it with NP students and colleagues. Every share helps more NPs find free, quality clinical education.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px', marginBottom: '24px' }}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '9px 18px', textDecoration: 'none' }}
          >
            Share on Facebook
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '9px 18px', textDecoration: 'none' }}
          >
            Share on LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '9px 18px', textDecoration: 'none' }}
          >
            Share on X
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(shareSubject)}&body=${encodeURIComponent(shareText)}`}
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '9px 18px', textDecoration: 'none' }}
          >
            Share via Email
          </a>
          <button
            onClick={copyLink}
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '9px 18px', cursor: 'pointer' }}
          >
            Copy Link
          </button>
        </div>

        <div className="info-box">
          <p>💡 <strong>Transparency:</strong> All contributions go toward site infrastructure only. NPCollab is not a business and does not generate income for its contributors.</p>
          <p style={{ marginTop: '10px', marginBottom: 0 }}>NPCollab is free to access. To help cover running costs, NPCollab may display occasional tasteful advertising from relevant healthcare companies and sponsors. All advertising is clearly labelled and editorially independent from clinical content.</p>
        </div>
      </div>
    </>
  );
}
