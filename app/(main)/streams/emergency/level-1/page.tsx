import Link from 'next/link';

export const metadata = {
  title: 'Level 1 — Emergency Stream | NPCollab',
};

export const LEVEL_1_PROCEDURES = [
  { slug: 'airway-assessment',     name: 'Airway Assessment',                    description: 'Systematic assessment of airway patency and risk stratification.' },
  { slug: 'iv-access',             name: 'IV Access & Cannulation',              description: 'Peripheral intravenous cannulation and securing access.' },
  { slug: 'venepuncture',          name: 'Venepuncture',                         description: 'Safe blood collection technique and sample handling.' },
  { slug: 'ecg-interpretation',    name: 'ECG Interpretation',                   description: 'Systematic 12-lead ECG acquisition and interpretation.' },
  { slug: 'wound-assessment',      name: 'Wound Assessment & Closure',           description: 'Wound classification, irrigation, and simple closure techniques.' },
  { slug: 'urinary-catheterisation', name: 'Urinary Catheterisation',            description: 'Indwelling urinary catheter insertion and management.' },
  { slug: 'nasogastric-tube',      name: 'Nasogastric Tube Insertion',           description: 'NG tube insertion, position confirmation, and care.' },
  { slug: 'oxygen-therapy',        name: 'Oxygen Therapy',                       description: 'Oxygen delivery devices, flow rates, and monitoring.' },
];

export default function Level1Page() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 1</div>
        <h1>Level 1 — Foundation Skills</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Core emergency procedures expected in any emergency setting
        </p>
      </div>
      <div className="content-prose">
        <p>
          Level 1 covers the foundation skills required for safe emergency NP practice.
          For each procedure you can complete a Mini CEX or DOPS assessment and send it to your mentor for sign-off.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '24px' }}>
          {LEVEL_1_PROCEDURES.map((proc) => (
            <Link
              key={proc.slug}
              href={`/streams/emergency/level-1/${proc.slug}`}
              style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', padding: '18px 20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', textDecoration: 'none' }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>{proc.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{proc.description}</div>
              </div>
              <div style={{ flexShrink: 0, fontSize: '13px', color: 'var(--gold)', fontWeight: 600, marginTop: '2px' }}>View →</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
