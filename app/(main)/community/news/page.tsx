import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'News' };

export default function NewsPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>📰 News</h1>
        <p>Updates, policy changes, and announcements relevant to Australian Nurse Practitioners</p>
      </div>
      <div className="highlight-box" style={{textAlign:'center',padding:'48px 32px'}}>
        <h4>Coming Soon</h4>
        <p style={{color:'rgba(255,255,255,0.75)',maxWidth:'480px',margin:'0 auto'}}>
          The NPCollab News section is currently in development. It will curate relevant updates from AHPRA, NMBA, Therapeutic Guidelines, and NP peak bodies. Check back soon.
        </p>
      </div>
    </>
  );
}
