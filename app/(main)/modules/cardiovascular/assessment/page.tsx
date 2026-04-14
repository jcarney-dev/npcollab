import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export default function CardiovascularAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫀 Cardiovascular</h1>
        <p>Vascular disease, DVT, cerebrovascular disease, and CVD risk management</p>
      </div>

      <ModuleTabs moduleId="cardiovascular" />


      <div className="content-prose">
      <section>
        <h2>Cardiovascular History</h2>

        <h3>Peripheral Vascular History</h3>
        <ul>
          <li>Claudication: which muscle group, distance before onset, relieved by rest, worsening over time?</li>
          <li>Rest pain: worse at night, relieved by hanging leg down (gravity-assisted flow)?</li>
          <li>Skin changes: hair loss, cool skin, colour changes (pallor, cyanosis, dependent rubor)?</li>
          <li>Wounds or ulcers: site, duration, healing?</li>
          <li>DVT symptoms: unilateral calf swelling, pain, warmth, redness?</li>
          <li>Risk factors: smoking (pack-years), diabetes, hypertension, dyslipidaemia, family history CVD</li>
        </ul>

        <h3>Cerebrovascular History</h3>
        <ul>
          <li>TIA symptoms: sudden onset, nature of deficit (motor, sensory, visual, speech), duration, complete resolution?</li>
          <li>Previous TIA or stroke?</li>
          <li>Carotid bruit on examination?</li>
          <li>Antiplatelet or anticoagulant therapy?</li>
        </ul>

        <h3>CVD Risk Assessment</h3>
        <ul>
          <li>Smoking: current, ex, never — pack-years</li>
          <li>Diabetes: type, duration, control (HbA1c)</li>
          <li>Hypertension: duration, medications, control</li>
          <li>Family history: first-degree relative with CVD &lt;55 years (male) or &lt;65 years (female)</li>
          <li>Personal history: previous MI, PCI, CABG, stroke, PAD</li>
        </ul>
      </section>

      <section>
        <h2>Cardiovascular Examination</h2>

        <h3>Peripheral Vascular Examination</h3>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Inspection</h4>
            <ul>
              <li>Skin colour — pallor, rubor, cyanosis</li>
              <li>Hair loss, nail changes, ulcers, gangrene</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Perfusion</h4>
            <ul>
              <li>Temperature: compare limbs — cool distal extremities in PAD</li>
              <li>Capillary refill time: &gt;2 seconds suggests poor perfusion</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Pulses</h4>
            <ul>
              <li>Femoral, popliteal, posterior tibial, dorsalis pedis — grade 0–3</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Special Tests</h4>
            <ul>
              <li>Buerger&apos;s test: elevate leg 45° for 2 minutes — pallor suggests PAD; lower and observe colour return and venous guttering time</li>
              <li>ABI: ratio of ankle systolic BP to brachial systolic BP. Normal ≥1.0, borderline 0.9–0.99, PAD &lt;0.9, severe PAD &lt;0.5</li>
            </ul>
          </div>
        </div>

        <h3>Venous Assessment</h3>
        <ul>
          <li>Varicose veins: distribution, trunk or perforator pattern</li>
          <li>Chronic venous insufficiency: oedema (pitting), lipodermatosclerosis, haemosiderin staining, atrophie blanche</li>
          <li>DVT: unilateral swelling, calf tenderness, pitting oedema</li>
        </ul>

        <h3>Abdominal Examination for AAA</h3>
        <div className="highlight-box">
          <p>Palpation: pulsatile expansile mass in the epigastric/periumbilical region — if present, arrange urgent ultrasound. <strong>Do NOT repeatedly palpate suspected AAA — risk of rupture.</strong></p>
        </div>

        <h3>Auscultation</h3>
        <ul>
          <li>Carotid bruits — TIA workup</li>
          <li>Renal artery bruits</li>
          <li>Abdominal aortic bruit — may indicate AAA or stenosis</li>
        </ul>
      </section>

      <section>
        <h2>Investigations</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Vascular Studies</h4>
            <ul>
              <li>ABI measurement — PAD diagnosis and monitoring</li>
              <li>Duplex ultrasound — DVT, varicose veins, carotid stenosis, AAA surveillance</li>
              <li>CT angiography — PAD, AAA, carotid disease</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Haematology &amp; Biochemistry</h4>
            <ul>
              <li>D-dimer — low-probability DVT or PE</li>
              <li>Fasting lipids — LDL, HDL, total cholesterol, triglycerides</li>
              <li>Fasting glucose and HbA1c — diabetes risk</li>
              <li>eGFR and urine ACR — CKD as CVD risk factor</li>
              <li>hsCRP — inflammatory CVD risk marker</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Other</h4>
            <ul>
              <li>12-lead ECG — AF increases stroke risk (CHA₂DS₂-VASc)</li>
              <li>Carotid duplex ultrasound — TIA workup, carotid bruit</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement.</p>
      </div>
      </div>

      <ModuleNav moduleId="cardiovascular" />

    </div>
  );
}
