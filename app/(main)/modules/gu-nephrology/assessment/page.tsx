import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'GU & Nephrology — Assessment' };

export default function GuNephrologyAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫘 GU &amp; Nephrology</h1>
        <p>Assessment and management of urinary tract, renal, and male genitourinary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gu-nephrology" />


      <div className="content-prose">
      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Urinary Symptoms</h4>
          <ul>
            <li>Lower urinary tract symptoms (LUTS): frequency, urgency, urgency incontinence, nocturia, dysuria, hesitancy, poor stream, incomplete emptying, post-void dribbling</li>
            <li>Haematuria: visible or non-visible, timing (initial, terminal, total), clots, associated pain</li>
            <li>Incontinence: type (stress, urge, mixed), severity (pad use), triggers, impact on quality of life</li>
            <li>Pain: site (loin, flank, suprapubic, perineal, scrotal), character, radiation</li>
            <li>Discharge: urethral, colour, consistency</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Renal History</h4>
          <ul>
            <li>Known CKD — stage, cause, nephrology follow-up</li>
            <li>Diabetes — duration, control, complications</li>
            <li>Hypertension — duration, control, medications</li>
            <li>Medications — nephrotoxic risk: NSAIDs, aminoglycosides, contrast, ACEi/ARB in volume depletion</li>
            <li>Family history — polycystic kidney disease, renal calculi, glomerulonephritis</li>
            <li>Systemic disease — SLE, vasculitis, myeloma</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Male GU History</h4>
          <ul>
            <li>Prostate symptoms — IPSS score</li>
            <li>PSA history and trend</li>
            <li>Erectile dysfunction — onset, medications, cardiovascular risk factors</li>
            <li>Scrotal pain/swelling — sudden vs gradual, associated fever</li>
          </ul>
        </div>
      </div>

      <h2>GU and Renal Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Abdominal and Flank</h4>
          <ul>
            <li>Renal angle tenderness (costovertebral angle) — ballottement for enlarged kidneys</li>
            <li>Suprapubic tenderness and bladder percussion — urinary retention</li>
            <li>Abdominal palpation — renal masses (polycystic kidneys), bladder</li>
            <li>Auscultation — renal artery bruits (renovascular hypertension)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Male Examination</h4>
          <ul>
            <li>External genitalia — phimosis, urethral meatus, lesions</li>
            <li>Testicular exam — size, consistency, tenderness, transillumination (hydrocele)</li>
            <li>Epididymis — tenderness, swelling (epididymo-orchitis)</li>
            <li>Digital rectal examination — prostate size, consistency, tenderness (if indicated and within scope)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Fluid Status</h4>
          <ul>
            <li>Blood pressure including postural (orthostatic) measurements</li>
            <li>JVP elevation — fluid overload (CKD, AKI)</li>
            <li>Peripheral oedema — bilateral pitting suggests fluid overload or nephrotic syndrome</li>
            <li>Mucous membranes, skin turgor — dehydration signs</li>
            <li>Respiratory examination — pulmonary oedema in AKI/CKD</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Urinalysis</h4>
          <ul>
            <li>Urinalysis (dipstick) — protein, blood, leucocytes, nitrites, glucose, pH</li>
            <li>Urine MCS — UTI, haematuria workup</li>
            <li>Urine albumin:creatinine ratio (ACR) — proteinuria quantification in CKD</li>
            <li>Urine protein:creatinine ratio (PCR) — for nephrotic range proteinuria</li>
            <li>Urine cytology — haematuria workup, bladder cancer</li>
            <li>24-hour urine — stone workup, proteinuria quantification</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Blood Tests</h4>
          <ul>
            <li>FBE — anaemia of CKD, infection</li>
            <li>EUC — renal function, electrolytes, urea</li>
            <li>eGFR — calculated from creatinine, age, sex</li>
            <li>Uric acid — gout, uric acid stones</li>
            <li>PSA — prostate assessment (with informed consent; discuss benefits and limitations)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Imaging</h4>
          <ul>
            <li>Renal and bladder ultrasound — hydronephrosis, stones, masses, residual volume</li>
            <li>CTUA (non-contrast CT KUB) — kidney stones, haematuria workup; gold standard for stone detection</li>
            <li>Post-void residual (bladder ultrasound) — urinary retention, BPH assessment</li>
          </ul>
        </div>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Urinary Tract), CARI Guidelines, Kidney Health Australia.
      </div>
      </div>

    </>
  );
}
