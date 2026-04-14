import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ── */}
      <div style={{ padding: '48px 0 40px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--navy)', marginBottom: '14px', lineHeight: 1.2 }}>
          About NPCollab
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
          A free clinical education platform built by an Australian Nurse Practitioner, for Nurse Practitioners.
        </p>
      </div>

      <div className="content-prose" style={{ paddingTop: 0 }}>

        {/* ── SECTION 2: Mission ── */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ marginBottom: '12px' }}>Our Mission</h2>
          <p style={{ margin: 0, maxWidth: '640px' }}>
            NPCollab exists to provide free, accessible, and Australia-specific clinical education for Nurse Practitioners, Transitional NPs, and NP students. All content references Australian guidelines — Therapeutic Guidelines, NMBA, AHPRA, and relevant specialty colleges.
          </p>
        </div>

        {/* ── SECTION 3: Founder ── */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ marginBottom: '20px' }}>Founder</h2>
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
            background: 'var(--white)',
            border: '1px solid var(--navy)',
            borderRadius: '12px',
            padding: '24px 26px',
            maxWidth: '680px',
          }}>
            {/* Avatar */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--navy)',
              color: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              fontWeight: 700,
              flexShrink: 0,
              letterSpacing: '0.03em',
              fontFamily: 'var(--font-body)',
            }}
              aria-hidden="true"
            >
              JC
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--navy)',
                marginBottom: '3px',
              }}>
                Jason Carney
              </div>
              <div style={{
                fontSize: '0.82rem',
                color: 'var(--gold)',
                fontWeight: 600,
                marginBottom: '12px',
                letterSpacing: '0.01em',
              }}>
                Founder, Developer &amp; Content Creator
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text)' }}>
                Jason Carney is an Australian Nurse Practitioner based in Newcastle, NSW. With a background spanning orthopaedic and perioperative surgery, telehealth, and urgent care, Jason created NPCollab to address the lack of free, accessible, and Australia-specific clinical education resources for Nurse Practitioners. Jason built NPCollab independently — designing, developing, and writing all clinical content — with the goal of supporting the growing NP workforce across Australia.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 4: Contributors ── */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ marginBottom: '12px' }}>Contributors</h2>
          <p style={{ marginBottom: '20px', maxWidth: '580px' }}>
            NPCollab welcomes clinical content contributions from practising NPs and healthcare educators. Contributors are acknowledged on the modules they help create.
          </p>
          <a
            href="mailto:jason.carney@gmail.com"
            className="btn-outline-gold"
          >
            Get in Touch
          </a>
        </div>

        {/* ── SECTION 5: Advertising disclosure ── */}
        <div style={{
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--navy-light)',
          borderRadius: '8px',
          padding: '14px 18px',
          background: 'var(--off-white)',
          maxWidth: '620px',
        }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            NPCollab may display occasional advertising from relevant healthcare companies to help cover running costs. All advertising is clearly labelled and completely independent from clinical content. NPCollab does not accept advertising that conflicts with evidence-based clinical practice.
          </p>
        </div>

      </div>
    </>
  );
}
