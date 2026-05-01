import Link from 'next/link';

export const metadata = {
  title: 'Level 2 — Emergency Stream | NPCollab',
};

export interface Level2Procedure {
  slug: string;
  name: string;
  description: string;
  credential: string;
}

export const LEVEL_2_PROCEDURES: Level2Procedure[] = [
  {
    slug: 'supraglottic-airway',
    name: 'Supraglottic Airway (LMA / iGel)',
    description: 'Insertion of laryngeal mask airway or iGel without RSI drugs for ventilatory support.',
    credential: 'Local sign-off',
  },
  {
    slug: 'niv-initiation',
    name: 'Non-Invasive Ventilation (BiPAP / CPAP) Initiation',
    description: 'Initiation and management of BiPAP/CPAP for hypercapnic and hypoxic respiratory failure.',
    credential: 'Local sign-off',
  },
  {
    slug: 'needle-decompression',
    name: 'Needle Decompression — Tension Pneumothorax',
    description: 'Emergency needle decompression at 4th–5th ICS mid-axillary line for tension pneumothorax.',
    credential: 'Local credential',
  },
  {
    slug: 'cardioversion',
    name: 'Synchronised Cardioversion',
    description: 'Synchronised DC cardioversion for haemodynamically significant tachyarrhythmias.',
    credential: 'Local credential',
  },
  {
    slug: 'transcutaneous-pacing',
    name: 'Transcutaneous External Pacing',
    description: 'External cardiac pacing for haemodynamically compromised bradycardias.',
    credential: 'Local credential',
  },
  {
    slug: 'uss-guided-iv',
    name: 'Ultrasound-Guided IV Cannulation',
    description: 'POCUS-guided peripheral IV cannulation for difficult vascular access.',
    credential: 'ASUM CCPU or equivalent',
  },
  {
    slug: 'fast-effast',
    name: 'FAST & eFAST Ultrasound',
    description: 'Focused assessment with sonography for trauma; extended eFAST includes pneumothorax and haemothorax.',
    credential: 'ASUM CCPU or equivalent',
  },
  {
    slug: 'lung-ultrasound',
    name: 'Lung Ultrasound',
    description: 'Point-of-care lung ultrasound for pneumothorax, pulmonary oedema, consolidation, and pleural effusion.',
    credential: 'ASUM CCPU or equivalent',
  },
  {
    slug: 'pop-cast-application',
    name: 'Full Circumferential POP Cast Application',
    description: 'Complete plaster of Paris cast application for stable fractures following swelling resolution.',
    credential: '5 observed cases',
  },
  {
    slug: 'colles-reduction',
    name: 'Distal Radius Fracture Reduction (Colles\')',
    description: 'Closed reduction of distal radius fracture under haematoma block or sedation cover.',
    credential: 'Haematoma block + sedation cover',
  },
  {
    slug: 'shoulder-reduction',
    name: 'Anterior Shoulder Dislocation Reduction',
    description: 'Closed reduction of anterior shoulder dislocation with procedural sedation cover.',
    credential: 'Procedural sedation cover',
  },
  {
    slug: 'fascia-iliaca-block',
    name: 'Fascia Iliaca Compartment Block (FICB)',
    description: 'Ultrasound-guided fascia iliaca block for hip fracture analgesia (supported by Gawthorne 2021 Australian RCT).',
    credential: 'ACI NSW FIB Toolkit logbook + USS credential',
  },
  {
    slug: 'sub-dissociative-ketamine',
    name: 'Sub-Dissociative Ketamine Analgesia',
    description: 'Low-dose ketamine 0.1–0.3 mg/kg IV for procedural and multimodal analgesia.',
    credential: 'Local sign-off',
  },
  {
    slug: 'slit-lamp',
    name: 'Slit Lamp Examination',
    description: 'Slit lamp biomicroscopy for anterior segment examination, corneal injuries, and foreign bodies.',
    credential: 'Local sign-off',
  },
  {
    slug: 'corneal-fb-removal',
    name: 'Corneal Foreign Body Removal',
    description: 'Removal of superficial corneal foreign bodies using 25G needle or ophthalmic burr.',
    credential: 'Local sign-off',
  },
];

const CREDENTIAL_COLOURS: Record<string, { bg: string; text: string; border: string }> = {
  'Local sign-off':         { bg: '#F0FDF4', text: '#166534', border: '#BBF7D0' },
  'Local credential':       { bg: '#FFF7ED', text: '#9A3412', border: '#FED7AA' },
  'ASUM CCPU or equivalent':{ bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  '5 observed cases':       { bg: '#FDF4FF', text: '#6B21A8', border: '#E9D5FF' },
  'Haematoma block + sedation cover': { bg: '#FFF7ED', text: '#9A3412', border: '#FED7AA' },
  'Procedural sedation cover':        { bg: '#FFF7ED', text: '#9A3412', border: '#FED7AA' },
  'ACI NSW FIB Toolkit logbook + USS credential': { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
};

function CredentialBadge({ credential }: { credential: string }) {
  const colours = CREDENTIAL_COLOURS[credential] ?? { bg: '#F8FAFC', text: '#4A6080', border: '#DDE3EC' };
  return (
    <span style={{ display: 'inline-block', padding: '3px 10px', background: colours.bg, border: `1px solid ${colours.border}`, borderRadius: '12px', fontSize: '11px', fontWeight: 600, color: colours.text, whiteSpace: 'nowrap' }}>
      {credential}
    </span>
  );
}

export default function Level2Page() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 2</div>
        <h1>Level 2 — Intermediate Procedures</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Procedures requiring supervised practice and local credentialing
        </p>
      </div>
      <div className="content-prose">
        <p>
          Level 2 procedures are performed by Emergency NPs after completing specific local credentialing —
          typically a supervised logbook, observed assessments, and written approval of an expanded Scope of
          Clinical Practice. This reflects <strong>ACEM Policy P67 V4 (August 2025)</strong> which requires NPs
          to work within a medically led team with defined governance for each additional procedure.
        </p>
        <p>
          Credentialing requirements are indicated on each card. POCUS procedures require{' '}
          <strong>ASUM CCPU (Clinician Credentialed in Point-of-care Ultrasound)</strong> or equivalent institutional
          credentialing.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '24px' }}>
          {LEVEL_2_PROCEDURES.map((proc) => (
            <Link
              key={proc.slug}
              href={`/streams/emergency/level-2/${proc.slug}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '18px 20px',
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)' }}>{proc.name}</span>
                  <CredentialBadge credential={proc.credential} />
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {proc.description}
                </div>
              </div>
              <div style={{ flexShrink: 0, fontSize: '13px', color: 'var(--gold)', fontWeight: 600, marginTop: '2px' }}>
                View →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
