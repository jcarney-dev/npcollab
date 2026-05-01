import Link from 'next/link';

export const metadata = {
  title: 'Emergency Stream | NPCollab',
};

const LEVELS = [
  {
    level: 1,
    href: '/streams/emergency/level-1',
    title: 'Level 1 — Foundation Skills',
    description: 'Independent core competencies expected of all endorsed Emergency NPs. 20 procedures with clinical content.',
    color: '#2A7D4F',
  },
  {
    level: 2,
    href: '/streams/emergency/level-2',
    title: 'Level 2 — Intermediate Procedures',
    description: 'Procedures requiring supervised practice and local credentialing, including POCUS, NIV, cardioversion, and regional anaesthesia.',
    color: '#D97706',
  },
  {
    level: 3,
    href: '/streams/emergency/level-3',
    title: 'Level 3 — Advanced Procedures',
    description: 'Procedures under direct medical supervision or referred to the medical team. Understand indications and the NP assisting role.',
    color: '#9A3412',
  },
];

export default function EmergencyPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency</div>
        <h1>Emergency Stream</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          Skills, procedures, and clinical assessments for Emergency Nurse Practitioners
        </p>
      </div>
      <div className="content-prose">
        <p>
          The Emergency stream provides a structured pathway for NPs working in or transitioning to emergency settings.
          Skills and procedures are organised across three levels of complexity, from foundational to advanced.
        </p>
        <p>
          This stream is grounded in the <strong>ACEM Policy P67 V4 (August 2025)</strong> and the{' '}
          <strong>NMBA Nurse Practitioner Standards for Practice (2021)</strong>. The three-tier procedure
          framework aligns with Australian institutional credentialing practice: Level 1 independent core
          competencies, Level 2 skills requiring local credentialing, and Level 3 procedures under direct
          medical supervision.
        </p>
        <p>
          For each procedure you can complete a <strong>Mini CEX</strong> (Mini Clinical Evaluation Exercise) or{' '}
          <strong>DOPS</strong> (Directly Observed Procedural Skills) assessment. These forms are saved to your
          portfolio and can be sent to a mentor for review and sign-off.
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '28px' }}>
          {LEVELS.map(({ level, href, title, description, color }) => (
            <Link
              key={level}
              href={href}
              style={{ display: 'block', padding: '22px 24px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px' }}>
                  {level}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', marginBottom: '4px' }}>{title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{description}</div>
                </div>
              </div>
            </Link>
          ))}

          {/* Knowledge Base card */}
          <Link
            href="/streams/emergency/knowledge"
            style={{ display: 'block', padding: '22px 24px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '16px' }}>
                📚
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', marginBottom: '4px' }}>Knowledge Base</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  System-by-system clinical reference: 18 emergency medicine systems with decision rules, drug doses, red flags, and Australian guideline references.
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
