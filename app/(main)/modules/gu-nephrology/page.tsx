import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'GU and Nephrology' };

export default function GUandNephrologyPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫘 GU and Nephrology</h1>
        <p>Renal disease, UTI, electrolytes, and CKD</p>
      </div>
      <div className="highlight-box" style={{textAlign:'center',padding:'48px 32px'}}>
        <h4>Coming Soon</h4>
        <p style={{color:'rgba(255,255,255,0.75)',maxWidth:'480px',margin:'0 auto'}}>
          This module is currently in development. Check back soon — we are working through each clinical area systematically to ensure quality content.
        </p>
      </div>
    </>
  );
}
