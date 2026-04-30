import Link from 'next/link';

export const metadata = {
  title: 'Emergency Stream | NPCollab',
};

const LEVELS = [
  {
    level: 1,
    href: '/streams/emergency/level-1',
    title: 'Level 1 — Foundation Skills',
    description: 'Core emergency procedures for the early-stage NP. Essential skills expected in any emergency setting.',
  },
  {
    level: 2,
    href: '/streams/emergency/level-2',
    title: 'Level 2 — Intermediate Procedures',
    description: 'Intermediate procedures requiring supervised practice and competency assessment.',
  },
  {
    level: 3,
    href: '/streams/emergency/level-3',
    title: 'Level 3 — Advanced Procedures',
    description: 'Advanced skills for experienced emergency NPs working at full scope of practice.',
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
          For each procedure you can complete a <strong>Mini CEX</strong> (Mini Clinical Evaluation Exercise) or
          <strong> DOPS</strong> (Directly Observed Procedural Skills) assessment. These forms are saved to your
          portfolio and can be sent to a mentor for review and sign-off.
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '28px' }}>
          {LEVELS.map(({ level, href, title, description }) => (
            <Link
              key={level}
              href={href}
              style={{ display: 'block', padding: '22px 24px', background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px' }}>
                  {level}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', marginBottom: '4px' }}>{title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
