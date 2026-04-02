import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Onco-Haematology' };

export default function OncoHaematologyPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩸 Onco-Haematology</h1>
        <p>Cancer screening, haematology, and oncology follow-up</p>
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
