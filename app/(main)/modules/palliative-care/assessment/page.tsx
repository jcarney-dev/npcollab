import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Palliative Care — Assessment' };

export default function PalliativeCareAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Palliative Care</div>
        <h1>🕊️ Assessment</h1>
        <p>Structured palliative care assessment including symptom tools, medication review, goals of care, and carer assessment.</p>
      </div>

      <ModuleTabs moduleId="palliative-care" />

      <h2>Symptom Assessment Tools</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Validated Tools</h4>
          <ul>
            <li><strong>ESAS-r</strong> (Edmonton Symptom Assessment System revised) — 9 common symptoms rated 0–10: pain, tiredness, drowsiness, nausea, anxiety, depression, shortness of breath, appetite, wellbeing</li>
            <li><strong>NRS</strong> (Numeric Rating Scale) — pain 0–10; quick and widely applicable</li>
            <li><strong>Abbey Pain Scale</strong> — pain in cognitively impaired patients who cannot self-report; observational</li>
            <li><strong>PPS</strong> (Palliative Performance Scale) — functional status 0–100%</li>
            <li><strong>AKPS</strong> (Australia-modified Karnofsky Performance Scale) — functional status in oncology</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Pain Assessment — PQRSTU</h4>
          <ul>
            <li><strong>P</strong> — Precipitating and relieving factors</li>
            <li><strong>Q</strong> — Quality (aching, burning, stabbing, throbbing)</li>
            <li><strong>R</strong> — Radiation and region</li>
            <li><strong>S</strong> — Severity (0–10 NRS), impact on function and sleep</li>
            <li><strong>T</strong> — Timing (constant, intermittent, breakthrough frequency)</li>
            <li><strong>U</strong> — Understanding (what does the patient think is causing it?)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Medication Review</h4>
          <ul>
            <li>Current analgesics — dose, frequency, route, and efficacy</li>
            <li>Breakthrough use in past 24 hours — frequency indicates need for dose increase if &gt;3–4 doses</li>
            <li>Side effects — constipation, nausea, sedation, confusion</li>
            <li>Route — can the patient still swallow? If not, plan subcutaneous conversion</li>
            <li>Syringe driver running? — check rate, medications, site, and compatibility</li>
            <li>Medications to discontinue — statins, antihypertensives, vitamins, preventive medications</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Goals of Care Assessment</h4>
          <ul>
            <li>What does the patient understand about their illness?</li>
            <li>What are their hopes and fears?</li>
            <li>What is most important to them in the time they have?</li>
            <li>Where do they want to be cared for and where do they want to die?</li>
            <li>Have they completed an Advance Care Directive?</li>
            <li>Who is their substitute decision maker?</li>
            <li>Are there any cultural, spiritual, or religious considerations?</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Carer and Family Assessment</h4>
          <ul>
            <li>Who are the primary carers?</li>
            <li>What is the carer burden and capacity?</li>
            <li>Are there children in the household?</li>
            <li>Financial and practical support needs</li>
            <li>Psychological wellbeing of carers</li>
            <li>Bereavement risk</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Dying Phase Recognition</h4>
          <ul>
            <li>Profound weakness — bed-bound, unable to perform self-care</li>
            <li>Reduced or absent oral intake</li>
            <li>Reduced consciousness and increased sleep</li>
            <li>Peripheral mottling — beginning at knees and feet</li>
            <li>Cooling of extremities</li>
            <li>Cheyne-Stokes breathing (periodic with apnoeic pauses)</li>
            <li>Reduced or no urine output</li>
          </ul>
        </div>
      </div>

      <h2>Palliative Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>General</h4>
          <ul>
            <li>Conscious state — GCS or AVPU, orientation</li>
            <li>Comfort — distressed or settled?</li>
            <li>Pallor, jaundice, cachexia</li>
            <li>Mottling — early (knees), spreading (trunk) indicates dying phase</li>
            <li>Skin integrity — pressure areas, oedema</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Symptom-Focused Examination</h4>
          <ul>
            <li>Pain — observe for facial grimacing, guarding, vocalisation in non-verbal patients</li>
            <li>Respiratory — RR, work of breathing, secretions, Cheyne-Stokes pattern</li>
            <li>Oral — mucous membranes, candidiasis, dry mouth</li>
            <li>Abdomen — bowel sounds, distension, bladder palpation (urinary retention)</li>
            <li>Limbs — oedema, DVT, skin breakdown</li>
          </ul>
        </div>
      </div>

      <h2>Investigations in Palliative Care</h2>

      <p>Investigations should be guided by goals of care and whether results will change management. Avoid burdensome investigations that do not benefit the patient. In the last days of life, routine blood tests, observations, and monitoring are generally discontinued unless they guide comfort-focused management.</p>

      <p>Appropriate investigations when consistent with goals of care may include:</p>
      <ul>
        <li><strong>Calcium</strong> — hypercalcaemia of malignancy is a treatable cause of confusion (corrected calcium &gt;2.6 mmol/L)</li>
        <li><strong>Renal function</strong> — uraemia contributing to symptoms or opioid neurotoxicity</li>
        <li><strong>FBE</strong> — anaemia causing dyspnoea (transfusion decision)</li>
        <li><strong>Urine MCS</strong> — UTI causing delirium, where treatment is consistent with goals</li>
        <li><strong>CXR</strong> — pleural effusion (drainage decision), infection</li>
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: CareSearch Palliative Care Knowledge Network, Therapeutic Guidelines (Palliative Care), Palliative Care Australia.
      </div>
    </>
  );
}
