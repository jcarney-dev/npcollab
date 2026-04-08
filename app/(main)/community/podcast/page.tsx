import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Podcast' };

export default function PodcastPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>🎙️ Podcast</h1>
        <p>Conversations with Australian Nurse Practitioners</p>
      </div>
      <div className="highlight-box" style={{textAlign:'center',padding:'48px 32px'}}>
        <h4>Coming Soon</h4>
        <p style={{color:'rgba(255,255,255,0.75)',maxWidth:'480px',margin:'0 auto'}}>
          The NPCollab Podcast is currently in development. It will feature conversations with experienced Nurse Practitioners, TNPs, and NP students from across Australia. Check back soon.
        </p>
      </div>
    </>
  );
}
