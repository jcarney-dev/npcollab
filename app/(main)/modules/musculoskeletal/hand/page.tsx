import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MSK — Hand and Wrist Clinical Module',
  description: 'Australian NP hand module — scaphoid fractures, carpal tunnel syndrome, trigger finger, and hand injuries. SOAP notes and quiz.',
  openGraph: {
    title: 'MSK — Hand and Wrist Clinical Module | NPCollab',
    description: 'Australian NP hand module — scaphoid fractures, carpal tunnel syndrome, trigger finger, and hand injuries. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/musculoskeletal/hand',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/musculoskeletal/hand',
  },
};

export default function MskhandPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Musculoskeletal Module</div>
        <h1>🦴 Hand</h1>
        <p>Musculoskeletal assessment and management — Hand region</p>
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
