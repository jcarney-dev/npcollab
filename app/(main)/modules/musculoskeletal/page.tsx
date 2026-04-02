import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Musculoskeletal' };

export default function MusculoskeletalPage() {
  const subPages = [
    { slug: 'back',       label: 'Back',        icon: '🦴' },
    { slug: 'chest',      label: 'Chest Wall',  icon: '🦴' },
    { slug: 'elbow',      label: 'Elbow',       icon: '🦴' },
    { slug: 'foot-ankle', label: 'Foot & Ankle',icon: '🦴' },
    { slug: 'hand',       label: 'Hand',        icon: '🦴' },
    { slug: 'hip-pelvis', label: 'Hip & Pelvis',icon: '🦴' },
    { slug: 'knee',       label: 'Knee',        icon: '🦴' },
    { slug: 'neck',       label: 'Neck',        icon: '🦴' },
    { slug: 'shoulder',   label: 'Shoulder',    icon: '🦴' },
    { slug: 'wrist',      label: 'Wrist',       icon: '🦴' },
  ];

  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 Musculoskeletal</h1>
        <p>Back, neck, shoulder, knee, hip, and limb assessments</p>
      </div>
      <div className="highlight-box" style={{textAlign:'center',padding:'48px 32px',marginBottom:'32px'}}>
        <h4>Coming Soon</h4>
        <p style={{color:'rgba(255,255,255,0.75)',maxWidth:'480px',margin:'0 auto'}}>
          The Musculoskeletal module is in development. Sub-modules for each region are being built below.
        </p>
      </div>
      <div className="modules-grid">
        {subPages.map(p => (
          <div key={p.slug} className="module-card coming-soon">
            <span className="tag-coming">Soon</span>
            <div className="module-icon">{p.icon}</div>
            <h3>{p.label}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
