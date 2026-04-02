import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Maxillofacial and Dental🦷' };

export default function MaxillofacialandDentalPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>Dental emergencies, facial pain, and oral infections Maxillofacial and Dental🦷</h1>
        <p></p>
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
