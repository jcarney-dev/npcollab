import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Job Board' };

export default function JobBoardPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Community</div>
        <h1>💼 Job Board</h1>
        <p>NP and TNP positions across Australia</p>
      </div>
      <div className="highlight-box" style={{textAlign:'center',padding:'48px 32px'}}>
        <h4>Coming Soon</h4>
        <p style={{color:'rgba(255,255,255,0.75)',maxWidth:'480px',margin:'0 auto'}}>
          The NPCollab Job Board is currently in development. It will list Nurse Practitioner and Transitional Nurse Practitioner positions from across Australia. Check back soon.
        </p>
      </div>
    </>
  );
}
