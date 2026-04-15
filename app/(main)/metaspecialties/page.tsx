import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NP Metaspecialties',
  description: 'Overview of all Nurse Practitioner practice areas in Australia — from primary care to mental health, aged care, emergency, and beyond.',
  openGraph: {
    title: 'NP Metaspecialties | NPCollab',
    description: 'Overview of all Nurse Practitioner practice areas in Australia — from primary care to mental health, aged care, emergency, and beyond.',
    url: 'https://npcollab.com/metaspecialties',
  },
  alternates: {
    canonical: 'https://npcollab.com/metaspecialties',
  },
};

export default function MetaspecialtiesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Getting Started</div>
        <h1>NP Metaspecialties in Australia</h1>
        <p>Understanding the different practice areas available to Australian Nurse Practitioners — and what each one really looks like day to day.</p>
      </div>

      <div className="content-prose">

        <h2>What is a Metaspecialty?</h2>
        <p>In Australia, AHPRA and the NMBA do not endorse NPs to a rigid specialty — instead, your endorsement is contextualised to your <strong>area of practice</strong>, which is defined by your population, clinical context, and demonstrated competencies. The term "metaspecialty" is used informally to describe the broad practice domains within which NPs work.</p>

        <p>This matters because your scope of practice, prescribing authority, and day-to-day clinical work will look very different depending on which metaspecialty you practise in. Understanding these domains early helps you make informed decisions about where you want to work, what Masters program pathway suits you, and what clinical experience you need to accumulate.</p>

        <div className="info-box">
          <p>💡 <strong>Remember:</strong> Your NP endorsement is not titled to a metaspecialty — it is defined by your documented scope of practice. Two NPs both endorsed in "primary care" may have very different scopes depending on their population and practice context.</p>
        </div>

        <h2>Primary Care / General Practice</h2>
        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">🏥</div><h4>What It Looks Like</h4></div>
          <p>Primary care NPs work in general practice clinics, Aboriginal Community Controlled Health Organisations (ACCHOs), community health centres, and rural and remote health services. Day-to-day work typically involves managing a full appointment book with acute and chronic presentations — from respiratory infections and skin conditions to diabetes management, mental health, and complex chronic disease.</p>
          <p>In general practice, NPs often work with a high degree of clinical autonomy, particularly in rural and remote settings where medical workforce gaps create both greater need and greater opportunity for NP-led care.</p>
          <div style={{marginTop:'16px'}}>
            <h4>Typical Scope Includes</h4>
            <ul>
              <li>Acute and chronic disease management across all age groups</li>
              <li>Prescribing Schedule 4 and 8 medications within scope</li>
              <li>MBS billing — NPs can bill independently under Medicare</li>
              <li>Ordering and interpreting pathology and diagnostic imaging</li>
              <li>Referral to specialist and allied health services</li>
              <li>Preventive care, health screening, and immunisation</li>
              <li>Wound management and minor procedures</li>
            </ul>
          </div>
          <div className="info-box" style={{marginTop:'16px'}}>
            <p>🌏 <strong>Rural and remote:</strong> NPs in remote areas often extend further into emergency management, obstetric care, and telehealth coordination. The Royal Flying Doctor Service and Indigenous health services are significant employers of rural NPs.</p>
          </div>
        </div>

        <h2>Emergency and Acute Care</h2>
        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">🚨</div><h4>What It Looks Like</h4></div>
          <p>Emergency NPs work in hospital emergency departments, urgent care centres, and retrieval services. The role typically focuses on a defined scope — often a fast-track or sub-acute stream — where NPs assess, investigate, diagnose, and manage presentations independently or in collaboration with emergency physicians.</p>
          <p>This is a high-intensity, fast-paced environment that suits NPs who thrive with clinical complexity, time pressure, and autonomous decision-making. Many emergency NPs develop subspecialty skills in areas like paediatric emergency, wound care, or fracture management.</p>
          <div style={{marginTop:'16px'}}>
            <h4>Typical Scope Includes</h4>
            <ul>
              <li>Triage and independent management of low to moderate acuity presentations</li>
              <li>Procedural skills — suturing, splinting, IV access, point-of-care ultrasound</li>
              <li>Requesting and interpreting ECGs, CXR, bloods, and imaging</li>
              <li>Prescribing analgesics including opioids within scope</li>
              <li>Discharge planning and referral pathways</li>
              <li>Paediatric assessment and management (if within scope)</li>
            </ul>
          </div>
        </div>

        <h2>Mental Health</h2>
        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">🧠</div><h4>What It Looks Like</h4></div>
          <p>Mental health NPs work across community mental health teams, inpatient psychiatric units, consultation liaison services, headspace centres, and private practice. The role combines advanced psychiatric assessment, psychopharmacology, psychotherapy, and care coordination.</p>
          <p>Mental health NPs often carry a caseload of patients with complex, long-term mental health conditions and play a central role in keeping people connected to care and out of hospital. It is a deeply relational specialty that rewards NPs who are skilled communicators and comfortable with ambiguity and complexity.</p>
          <div style={{marginTop:'16px'}}>
            <h4>Typical Scope Includes</h4>
            <ul>
              <li>Comprehensive psychiatric assessment and mental state examination</li>
              <li>Prescribing psychotropic medications — antidepressants, antipsychotics, mood stabilisers</li>
              <li>Clozapine monitoring and management</li>
              <li>Risk assessment — suicide, self-harm, aggression, vulnerability</li>
              <li>Brief psychological interventions and psychoeducation</li>
              <li>Community treatment order coordination</li>
              <li>Liaison with GPs, psychiatrists, and community support services</li>
            </ul>
          </div>
          <div className="info-box" style={{marginTop:'16px'}}>
            <p>💡 <strong>Growing area:</strong> With Australia's mental health workforce shortage, mental health NPs are increasingly working in private practice settings with significant clinical autonomy and strong Medicare billing opportunities.</p>
          </div>
        </div>

        <h2>Aged Care and Palliative Care</h2>
        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">🤝</div><h4>What It Looks Like</h4></div>
          <p>Aged care and palliative care NPs work in residential aged care facilities (RACFs), hospital palliative care units, community palliative care teams, and geriatric assessment services. The role often involves managing complex multimorbidity, polypharmacy, frailty, and end-of-life care planning.</p>
          <p>This metaspecialty requires exceptional communication skills, comfort with ethical complexity, and the ability to build trust with patients, families, and care teams over time. NPs in aged care often become the primary point of continuity for residents who would otherwise have limited access to medical review.</p>
          <div style={{marginTop:'16px'}}>
            <h4>Typical Scope Includes</h4>
            <ul>
              <li>Comprehensive geriatric assessment — cognition, frailty, function, falls risk</li>
              <li>Medication review and deprescribing</li>
              <li>Advance care planning facilitation</li>
              <li>Palliative symptom management — pain, dyspnoea, nausea, agitation</li>
              <li>Subcutaneous infusions and syringe driver management</li>
              <li>Prescribing opioids and sedatives within palliative scope</li>
              <li>Voluntary Assisted Dying (VAD) coordination where applicable</li>
              <li>Family communication and bereavement support</li>
            </ul>
          </div>
        </div>

        <h2>Chronic and Complex Care</h2>
        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">🔄</div><h4>What It Looks Like</h4></div>
          <p>Chronic and complex care NPs work across hospital outpatient clinics, specialist services, community health settings, and chronic disease management programs. Common contexts include diabetes, renal disease, cardiac disease, respiratory conditions, and wound management.</p>
          <p>This metaspecialty is built around longitudinal relationships with patients who have ongoing, often progressive conditions. NPs in this space become highly skilled in managing a specific clinical population in depth — optimising therapy, preventing complications, and coordinating care across multiple providers.</p>
          <div style={{marginTop:'16px'}}>
            <h4>Typical Scope Includes</h4>
            <ul>
              <li>Specialist outpatient clinic management (e.g. renal, diabetic foot, cardiac failure)</li>
              <li>Titration of complex pharmacotherapy — insulin, diuretics, immunosuppressants</li>
              <li>Ordering and interpreting specialist investigations</li>
              <li>Coordination across primary, secondary, and tertiary care</li>
              <li>Patient self-management education and chronic disease plans</li>
              <li>Hospital-in-the-home and early discharge support</li>
            </ul>
          </div>
        </div>

        <h2>Child and Family Health</h2>
        <div className="assessment-card" style={{marginBottom:'24px'}}>
          <div className="card-header"><div className="icon-circle">👶</div><h4>What It Looks Like</h4></div>
          <p>Child and family health NPs work in community child health services, paediatric outpatient clinics, neonatal units, and school health settings. The role involves assessing development, managing acute and chronic paediatric conditions, and supporting families during the early years.</p>
          <p>This is a specialty that requires a dual focus — you are assessing and caring for the child while also supporting and educating the parent or carer. It demands strong developmental knowledge, family-centred practice, and an understanding of child protection frameworks.</p>
          <div style={{marginTop:'16px'}}>
            <h4>Typical Scope Includes</h4>
            <ul>
              <li>Developmental surveillance and assessment — milestones, growth, behaviour</li>
              <li>Management of common paediatric presentations — otitis media, eczema, asthma, URTI</li>
              <li>Immunisation delivery and catch-up scheduling</li>
              <li>Breastfeeding and infant nutrition support</li>
              <li>Antenatal and postnatal care in some contexts</li>
              <li>Child protection assessment and mandatory reporting</li>
              <li>Referral to paediatrics, speech pathology, OT, and early intervention services</li>
            </ul>
          </div>
        </div>

        <h2>Which Metaspecialty is Right for You?</h2>
        <p>There is no single right answer — and many NPs change or expand their practice area over their career. Some things worth reflecting on as you consider your pathway:</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💭</div><h4>Questions to Ask Yourself</h4></div>
            <ul>
              <li>What patient population do I find most rewarding to care for?</li>
              <li>Do I prefer acute episodic care or ongoing longitudinal relationships?</li>
              <li>Am I drawn to procedural skills or pharmacological management?</li>
              <li>Where is my existing clinical experience strongest?</li>
              <li>What does my local job market look like — where are NPs being employed?</li>
              <li>What does my ideal working environment look like in 5 years?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📝</div><h4>Practical Considerations</h4></div>
            <ul>
              <li>Your Masters program will shape your supervised practice hours — choose a program that aligns with your intended area</li>
              <li>Your collaborating medical practitioner must practise in a related area to your scope</li>
              <li>Some metaspecialties (e.g. mental health, remote) have stronger workforce demand and more NP-specific roles</li>
              <li>MBS billing is available across all NP practice areas — but item numbers vary by context</li>
            </ul>
          </div>
        </div>

        <div className="highlight-box">
          <h4>Ready for the next step?</h4>
          <p>Once you have a sense of which metaspecialty interests you, head to <Link href="/starting-role">Starting Your Role →</Link> for practical guidance on entering the NP workforce.</p>
        </div>

      </div>
    </>
  );
}
