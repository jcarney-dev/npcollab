import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'GU & Nephrology' };

export default function GuNephrologyPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫘 GU &amp; Nephrology</h1>
        <p>Assessment and management of urinary tract, renal, and male genitourinary presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="gu-nephrology" />


      <div className="content-prose">
      <div className="highlight-box">
        <h4>⚠️ Red Flags — Act Urgently</h4>
        <ul>
          <li>Anuria (&lt;100mL urine/24h) — acute kidney injury, emergency transfer</li>
          <li>Hyperkalaemia &gt;6.5 mmol/L or ECG changes — emergency transfer</li>
          <li>Haematuria with clot retention and inability to void — emergency catheterisation</li>
          <li>Suspected testicular torsion — sudden severe testicular pain, emergency transfer, time-critical</li>
          <li>Urosepsis — UTI with systemic toxicity, fever, hypotension, tachycardia</li>
          <li>Acute urinary retention — inability to void, suprapubic pain, distended bladder</li>
          <li>Nephrotic syndrome with anasarca — generalised oedema, urgent renal referral</li>
          <li>Rapidly progressive glomerulonephritis — haematuria, proteinuria, rapidly declining eGFR</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs can independently manage uncomplicated UTI, CKD monitoring, BPH symptom management, and basic renal function monitoring. Urosepsis, AKI, testicular torsion, visible haematuria without UTI cause, and CKD with eGFR &lt;30 require urgent escalation or specialist referral. NPs can prescribe DAA therapy for hepatitis C and SGLT2 inhibitors for CKD where PBS criteria are met.
      </div>

      <h2>Key Conditions</h2>

      <h3>Urinary Tract Infection</h3>
      <p>UTI is the most common bacterial infection in women — 50–60% of women will have at least one UTI in their lifetime. Causative organisms: E. coli (80%), Klebsiella, Staphylococcus saprophyticus (young women), Proteus, and Enterococcus.</p>
      <p><strong>Lower UTI (cystitis):</strong> dysuria, frequency, urgency, and suprapubic discomfort — no systemic features. Uncomplicated UTI in non-pregnant women: trimethoprim 300mg nocte for 3 days (or cefalexin). Do not treat asymptomatic bacteriuria except in pregnancy. Send urine MCS for recurrent or complicated UTI.</p>
      <p><strong>Upper UTI (pyelonephritis):</strong> loin pain, fever, rigors, nausea/vomiting, and CVA tenderness. Send urine MCS and blood cultures. Admit if systemic toxicity. Outpatient: cefalexin 500mg QID or trimethoprim-sulfamethoxazole for 10–14 days.</p>
      <p><strong>Recurrent UTI</strong> (≥2 in 6 months or ≥3 in 12 months): investigation required — urine MCS, imaging. Options: post-coital prophylaxis, low-dose antibiotic prophylaxis, or patient-initiated therapy. Vaginal oestrogen for postmenopausal women reduces recurrence significantly.</p>

      <h3>Chronic Kidney Disease</h3>
      <p>CKD affects approximately 1.7 million Australians. Defined as: abnormalities of kidney structure or function present for &gt;3 months. Staged by GFR and albuminuria using the KDIGO classification. Common causes: diabetic nephropathy (most common), hypertensive nephrosclerosis, glomerulonephritis, polycystic kidney disease, and obstructive uropathy.</p>
      <p><strong>Management:</strong> treat the underlying cause, control BP (target &lt;130/80 — ACEi or ARB first-line for proteinuric CKD), SGLT2 inhibitors (dapagliflozin, empagliflozin) have nephroprotective benefit independent of glucose-lowering, dietary protein and sodium modification, anaemia management (erythropoiesis-stimulating agents where indicated), and phosphate management. <strong>Refer to nephrology:</strong> eGFR &lt;30, rapidly declining eGFR (&gt;5 mL/min/year), significant proteinuria (ACR &gt;300), or uncertain diagnosis.</p>

      <h3>Benign Prostatic Hyperplasia</h3>
      <p>Affects 50% of men aged 51–60 and 90% of men over 80. Symptoms are lower urinary tract symptoms (LUTS): hesitancy, poor stream, intermittency, incomplete emptying (obstructive) and urgency, frequency, nocturia (irritative). Assess with IPSS (International Prostate Symptom Score). Exclude prostate cancer (PSA, DRE). Management: lifestyle (fluid management, caffeine reduction, bladder training), alpha-blockers (tamsulosin, prazosin) for symptom relief, 5-alpha reductase inhibitors (finasteride) for large prostate and long-term management, combination therapy. Refer to urology for significant symptoms, urinary retention, or elevated PSA.</p>

      <h3>Kidney Stones</h3>
      <p>Affect approximately 1 in 10 Australians — most are calcium oxalate. Presents with severe colicky flank pain radiating to the groin, haematuria, and nausea. Diagnosis: CTUA (non-contrast CT) is the gold standard. Management: analgesia (NSAIDs first-line — diclofenac), IV fluids, alpha-blockers (tamsulosin) for stones ≤10mm to facilitate passage. Admit if: intractable pain, infection, solitary kidney, bilateral stones, or AKI. Refer to urology for stones &gt;10mm or not passing. Metabolic workup for recurrent stones.</p>

      <h3>Haematuria</h3>
      <p>Visible (macroscopic) or non-visible (microscopic — dipstick or microscopy). Any haematuria in adults &gt;40 requires investigation to exclude malignancy. Causes: UTI, kidney stones, glomerulonephritis, bladder cancer, renal cell carcinoma, BPH, and trauma. <strong>Urgent urology referral</strong> for: visible haematuria without obvious UTI cause, haematuria with clots, and haematuria in a smoker or patient over 40. Standard workup: urine MCS, renal and bladder ultrasound, and cystoscopy.</p>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. All clinical content references Australian guidelines including Therapeutic Guidelines (Urinary Tract), CARI Guidelines, and Kidney Health Australia.
      </div>
      </div>

    </>
  );
}
