import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export default function GeneralMedicalAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩺 General Medical</h1>
        <p>Undifferentiated and multisystem presentations in NP practice</p>
      </div>

      <ModuleTabs moduleId="general-medical" />


      <div className="content-prose">
      <section>
        <h2>General Medical History</h2>

        <h3>Fever Assessment</h3>
        <ul>
          <li>Duration and pattern of fever</li>
          <li>Associated symptoms: rigors, sweats, myalgia, headache</li>
          <li>Source symptoms: cough, dysuria, abdominal pain, rash, wound</li>
          <li>Sick contacts, travel history (recent international travel — malaria, dengue)</li>
          <li>Immunosuppression: steroids, biologics, chemotherapy, HIV, diabetes, splenectomy</li>
          <li>Medications: drug fever</li>
          <li>Occupational or animal exposures</li>
          <li>Vaccination history</li>
        </ul>

        <h3>Systemic Review — Key Questions</h3>
        <ul>
          <li>Unexplained weight loss: &gt;5% in 6 months — malignancy, infection, endocrine</li>
          <li>Fatigue: duration, onset, associated features</li>
          <li>Night sweats: lymphoma, TB, menopause</li>
          <li>Lymphadenopathy: location, duration, tenderness</li>
          <li>Bruising or bleeding: haematological disorder</li>
        </ul>

        <h3>Rheumatological History</h3>
        <ul>
          <li>Joint pain: which joints, symmetrical or asymmetrical, inflammatory (morning stiffness) vs mechanical (worse with use)</li>
          <li>Swelling, warmth, redness — monoarthritis vs polyarthritis</li>
          <li>Skin changes: psoriasis, rash, nodules</li>
          <li>Eye symptoms: iritis, dry eyes</li>
          <li>Systemic: oral ulcers, hair loss, Raynaud&apos;s</li>
        </ul>
      </section>

      <section>
        <h2>General Medical Examination</h2>

        <h3>Systematic Approach</h3>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>General</h4>
            <ul>
              <li>Appearance, nutritional status</li>
              <li>Pallor, jaundice, cyanosis</li>
              <li>Lymphadenopathy — cervical, axillary, inguinal</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Vital Signs</h4>
            <ul>
              <li>Temperature, HR, BP, RR, SpO₂</li>
              <li>qSOFA: RR ≥22, altered mentation, SBP ≤100</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Skin</h4>
            <ul>
              <li>Rash characterisation</li>
              <li>Bruising, purpura, petechiae</li>
              <li>Splinter haemorrhages (endocarditis)</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Cardiovascular</h4>
            <ul>
              <li>Murmurs — endocarditis</li>
              <li>Peripheral oedema</li>
              <li>Haemodynamic status: capillary refill, mottling</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Abdomen</h4>
            <ul>
              <li>Organomegaly, ascites, tenderness</li>
              <li>Identify source of sepsis</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Joints &amp; Neurological</h4>
            <ul>
              <li>Swelling, warmth, range of motion</li>
              <li>Focal deficits, meningism (Kernig&apos;s, Brudzinski&apos;s)</li>
            </ul>
          </div>
        </div>

        <h3>Sepsis Assessment</h3>
        <div className="highlight-box">
          <ul>
            <li>Source identification: look for focus of infection</li>
            <li>End-organ damage: confusion (brain), oliguria (kidney), hypoxia (lung), jaundice (liver)</li>
            <li>Haemodynamic status: BP, HR, capillary refill, mottling</li>
            <li>qSOFA: RR ≥22, altered mentation, SBP ≤100 — 2 of 3 = high risk</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Investigations in General Medicine</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Core Bloods</h4>
            <ul>
              <li>FBE: anaemia type (MCV), WCC (infection, haematological), platelets</li>
              <li>EUC: renal function, electrolytes</li>
              <li>LFTs: liver disease, haematological</li>
              <li>CRP, ESR: inflammation, infection</li>
              <li>Blood glucose and HbA1c</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Infection Workup</h4>
            <ul>
              <li>Blood cultures x2 sets (before antibiotics) — sepsis workup</li>
              <li>Urinalysis and urine MCS</li>
              <li>Lactate: sepsis severity</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Specific Tests</h4>
            <ul>
              <li>Iron studies: serum iron, TIBC, ferritin, transferrin saturation</li>
              <li>Vitamin B12 and folate</li>
              <li>TFTs: thyroid function</li>
              <li>ANA, ANCA, RF, anti-CCP, complement — rheumatological workup</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Imaging</h4>
            <ul>
              <li>CXR: infection, malignancy, heart failure</li>
              <li>ECG: cardiac complications, arrhythmia</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement.</p>
      </div>
      </div>

      <ModuleNav moduleId="general-medical" />

    </div>
  );
}
