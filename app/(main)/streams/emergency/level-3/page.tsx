import Link from 'next/link';

export const metadata = {
  title: 'Level 3 — Emergency Stream | NPCollab',
};

export interface Level3Procedure {
  slug: string;
  name: string;
  description: string;
}

export const LEVEL_3_PROCEDURES: Level3Procedure[] = [
  {
    slug: 'endotracheal-intubation',
    name: 'Endotracheal Intubation / RSI',
    description: 'Orotracheal intubation via rapid sequence induction — FACEM/anaesthetist domain; NP may assist with drugs, MILS, cricoid pressure, and monitoring.',
  },
  {
    slug: 'cricothyroidotomy',
    name: 'Surgical / Needle Cricothyroidotomy',
    description: 'Surgical or needle cricothyroidotomy for cannot-intubate-cannot-oxygenate scenarios.',
  },
  {
    slug: 'chest-drain',
    name: 'Chest Drain Insertion (Seldinger / Surgical)',
    description: 'Intercostal catheter insertion for pneumothorax, haemothorax, or pleural effusion.',
  },
  {
    slug: 'central-venous-catheter',
    name: 'Central Venous Catheter Insertion',
    description: 'Internal jugular, subclavian, or femoral CVC insertion under ultrasound guidance.',
  },
  {
    slug: 'arterial-line',
    name: 'Arterial Line Insertion',
    description: 'Indwelling radial or femoral arterial line for continuous BP monitoring and serial ABGs.',
  },
  {
    slug: 'transvenous-pacing',
    name: 'Transvenous Cardiac Pacing',
    description: 'Temporary transvenous pacemaker insertion for high-degree AV block or refractory bradycardia.',
  },
  {
    slug: 'pericardiocentesis',
    name: 'Pericardiocentesis',
    description: 'Emergency needle aspiration of pericardial effusion causing cardiac tamponade.',
  },
  {
    slug: 'resuscitative-thoracotomy',
    name: 'Resuscitative Thoracotomy',
    description: 'Emergency clamshell thoracotomy for traumatic cardiac arrest — strictly FACEM/surgeon domain.',
  },
  {
    slug: 'large-joint-reduction',
    name: 'Large Joint Dislocation Reduction (Hip / Knee)',
    description: 'Closed reduction of hip or knee dislocation under deep procedural sedation or general anaesthesia.',
  },
  {
    slug: 'lateral-canthotomy',
    name: 'Lateral Canthotomy',
    description: 'Emergency lateral canthotomy and cantholysis for orbital compartment syndrome with threatened vision.',
  },
  {
    slug: 'posterior-nasal-pack',
    name: 'Posterior Nasal Packing',
    description: 'Posterior nasal pack (Foley catheter or dual-balloon) for posterior epistaxis — requires admission.',
  },
  {
    slug: 'peritonsillar-abscess-id',
    name: 'Peritonsillar Abscess I&D',
    description: 'Incision and drainage or needle aspiration of peritonsillar abscess.',
  },
  {
    slug: 'biers-block',
    name: 'Bier\'s Block (IV Regional Anaesthesia)',
    description: 'Intravenous regional anaesthesia for forearm procedures — tourniquet failure risk; ACEM expects FACEM/anaesthetist as sole proceduralist.',
  },
];

export default function Level3Page() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Level 3</div>
        <h1>Level 3 — Advanced Procedures</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Advanced skills performed under direct medical supervision or referred to the treating team
        </p>
      </div>
      <div className="content-prose">
        <div style={{ padding: '16px 18px', background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '10px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 700, fontSize: '14px', color: '#9A3412', marginBottom: '6px' }}>Scope note — ACEM P67 V4 (August 2025)</div>
          <p style={{ margin: 0, fontSize: '13px', color: '#7C2D12', lineHeight: 1.6 }}>
            Level 3 procedures are generally <strong>not within standard Australian ED NP scope of practice</strong>.
            They are performed under direct FACEM or specialist supervision, or referred to the medical team.
            NPs may assist or initiate in selected contexts but do not lead these procedures. Some sites with
            specific advanced credentialing may include selected Level 3 skills in an individual NP&apos;s
            Scope of Clinical Practice — this is the exception, not the norm.
          </p>
        </div>

        <p>
          Familiarity with Level 3 procedures is valuable for NPs who assist during resuscitations and advanced
          interventions. Each page provides an overview of the procedure, indications, and the NP assisting role.
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '24px' }}>
          {LEVEL_3_PROCEDURES.map((proc) => (
            <Link
              key={proc.slug}
              href={`/streams/emergency/level-3/${proc.slug}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '18px 20px',
                background: '#fff',
                border: '1px solid var(--border)',
                borderLeft: '4px solid #FED7AA',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', marginBottom: '3px' }}>
                  {proc.name}
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
