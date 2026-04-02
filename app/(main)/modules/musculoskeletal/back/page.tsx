import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'MSK — Back' };

export default function MskbackPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Musculoskeletal Module</div>
        <h1>🦴 Back</h1>
        <p>Musculoskeletal assessment and management — Back region</p>
      </div>
      <div className="highlight-box" style={{textAlign:'center',padding:'48px 32px'}}>
        <h4>Coming Soon</h4>
        <p style={{color:'rgba(255,255,255,0.75)',maxWidth:'480px',margin:'0 auto'}}>
          This sub-module is currently in development. Check back soon.
        </p>
      </div>
    </>
  );
}
