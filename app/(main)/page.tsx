import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Home' };

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="label">🩺 Australian Nurse Practitioner Hub</div>
        <h1>Clinical knowledge,<br /><em>built by NPs</em><br />for NPs.</h1>
        <p>NPCollab is a free, collaborative learning resource for Australian Nurse Practitioners and NP students — covering scope of practice, assessment frameworks, SOAP notes, and clinical modules.</p>
        <div className="hero-cta">
          <Link href="/intro" className="btn-primary">Get Started →</Link>
          <Link href="/modules/cardiac" className="btn-outline">Browse Clinical Modules</Link>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card"><div className="num">4<span>+</span></div><div className="stat-label">Live Modules</div></div>
        <div className="stat-card"><div className="num">80<span>+</span></div><div className="stat-label">Quiz Questions</div></div>
        <div className="stat-card"><div className="num">4</div><div className="stat-label">Example SOAP Notes</div></div>
        <div className="stat-card"><div className="num">100<span>%</span></div><div className="stat-label">Free, No Ads</div></div>
      </div>

      <div className="label" style={{marginBottom:'14px'}}>Getting Started</div>
      <div className="modules-grid" style={{marginBottom:'40px'}}>
        <Link href="/intro" className="module-card">
          <div className="module-icon">👋</div>
          <h3>Introduction</h3>
          <p>What NPCollab is, who it is for, and how to get the most out of it.</p>
        </Link>
        <Link href="/metaspecialties" className="module-card">
          <div className="module-icon">🗺️</div>
          <h3>Metaspecialties</h3>
          <p>Overview of all NP practice areas in Australia — from primary care to mental health, aged care, and emergency.</p>
        </Link>
        <Link href="/starting-role" className="module-card">
          <div className="module-icon">🚀</div>
          <h3>Starting Your Role</h3>
          <p>TNP vs NP explained, the endorsement pathway, finding a mentor, job tips, and first steps in your role.</p>
        </Link>
        <Link href="/scope" className="module-card">
          <div className="module-icon">🛡️</div>
          <h3>Scope of Practice</h3>
          <p>Understand the regulatory framework, NMBA standards, and how to build and document your NP scope.</p>
        </Link>
        <Link href="/assessment" className="module-card">
          <div className="module-icon">📋</div>
          <h3>Patient Assessment</h3>
          <p>OLDCARTS framework, comprehensive history taking, physical examination, and clinical reasoning.</p>
        </Link>
      </div>

      <div className="label" style={{marginBottom:'14px'}}>Clinical Modules</div>

      <div className="modules-grid" style={{marginBottom:'12px'}}>
        <Link href="/modules/cardiac" className="module-card">
          <div className="module-icon">❤️</div>
          <h3>Cardiac</h3>
          <p>Chest pain, ACS, heart failure, arrhythmias, hypertension, and ECG basics.</p>
          <div className="module-meta"><span>📋 Assessment</span><span>📝 SOAP Note</span><span>❓ 20 Qs</span></div>
        </Link>
        <Link href="/modules/ent" className="module-card">
          <div className="module-icon">👂</div>
          <h3>ENT</h3>
          <p>Ear, nose, and throat presentations — otitis, pharyngitis, hearing loss, and epistaxis.</p>
          <div className="module-meta"><span>📋 Assessment</span><span>📝 SOAP Note</span><span>❓ 20 Qs</span></div>
        </Link>
        <Link href="/modules/eyes" className="module-card">
          <div className="module-icon">👁️</div>
          <h3>Ophthalmology</h3>
          <p>Red eye differentials, visual assessment, acute angle-closure glaucoma, and referral pathways.</p>
          <div className="module-meta"><span>📋 Assessment</span><span>📝 SOAP Note</span><span>❓ 20 Qs</span></div>
        </Link>
        <Link href="/modules/respiratory" className="module-card">
          <div className="module-icon">🫁</div>
          <h3>Respiratory</h3>
          <p>Asthma, COPD, pneumonia, PE, and spirometry interpretation.</p>
          <div className="module-meta"><span>📋 Assessment</span><span>📝 SOAP Note</span><span>❓ 20 Qs</span></div>
        </Link>
      </div>

      <div className="label" style={{marginBottom:'14px',marginTop:'32px'}}>Coming Soon</div>
      <div className="modules-grid">
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🧓</div><h3>Aged Care</h3><p>Frailty, polypharmacy, dementia, and end-of-life care.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🫀</div><h3>Cardiovascular</h3><p>Lipid management, peripheral vascular, and cardiac follow-up.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🧪</div><h3>Drugs &amp; Alcohol</h3><p>Substance use assessment, withdrawal, and harm reduction.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🔬</div><h3>Endocrine</h3><p>Diabetes, thyroid, adrenal, and metabolic disorders.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🩺</div><h3>General Medical</h3><p>Broad acute and chronic medical presentations.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🫃</div><h3>GI &amp; Hepatobiliary</h3><p>GI presentations, liver disease, and IBD.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🫘</div><h3>GU &amp; Nephrology</h3><p>Renal disease, UTI, electrolytes, and CKD.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🩹</div><h3>Integumentary</h3><p>Skin conditions, wounds, and dermatological assessment.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🦷</div><h3>Maxillofacial &amp; Dental</h3><p>Dental emergencies, facial pain, and oral infections.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">👨</div><h3>Men&apos;s Health</h3><p>Prostate, testosterone, sexual health, and men&apos;s preventive care.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🧠</div><h3>Mental Health</h3><p>Psychiatric assessment, psychopharmacology, and risk assessment.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🦴</div><h3>Musculoskeletal</h3><p>Back, neck, shoulder, knee, hip, and limb assessments.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🧬</div><h3>Neurology</h3><p>Headache, seizure, stroke, and neuropathy.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🩸</div><h3>Onco-Haematology</h3><p>Cancer screening, haematology, and oncology follow-up.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">👶</div><h3>Paediatrics</h3><p>Childhood illness, development, and child health.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🕊️</div><h3>Palliative Care</h3><p>Symptom management, advance care planning, and end-of-life.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">🔪</div><h3>Surgical</h3><p>Pre/post-op assessment, wound care, and surgical complications.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">⚗️</div><h3>Toxicology</h3><p>Overdose, toxidromes, and poisoning management.</p></div>
        <div className="module-card coming-soon"><span className="tag-coming">Soon</span><div className="module-icon">👩</div><h3>Women&apos;s Health</h3><p>Reproductive health, menopause, and women&apos;s preventive care.</p></div>
      </div>

      <div className="info-box" style={{marginTop:'32px'}}>
        <p>📚 <strong>New to NP practice?</strong> Start with the <Link href="/intro">Introduction</Link> and <Link href="/metaspecialties">Metaspecialties</Link> pages, then work through <Link href="/scope">Scope of Practice</Link> before diving into clinical modules.</p>
      </div>
    </>
  );
}
