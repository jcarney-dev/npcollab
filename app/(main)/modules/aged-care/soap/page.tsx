import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: 'Aged Care — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Concern',
        content: '83-year-old woman residing in a residential aged care facility (RACF) in Newcastle, NSW. Referred by nursing staff following two falls in the past week — neither resulted in injury. Family (daughter) has also raised concerns about increasing confusion over the past month and recent weight loss.'
      },
      {
        label: 'Falls History',
        content: 'First fall: getting up from bed at 0300 to use the bathroom — found on floor by night staff; brief loss of consciousness uncertain. Second fall: turning to sit in chair in dining room; no LOC. No injuries sustained from either fall. Previously fell once in the past 6 months — no injury. Wears non-slip footwear. Zimmer frame in room but not consistently using it. No hip protector in use.'
      },
      {
        label: 'Cognitive Concerns',
        content: 'Daughter reports increased confusion over the past 4–6 weeks — forgetting names of grandchildren (new), repeating questions, appearing more withdrawn. Background of mild-moderate Alzheimer\'s dementia diagnosed 3 years ago (previous MoCA 18/30). Staff note fluctuating alertness over the past 2 weeks — more drowsy during the day. No recent change in behaviour noted prior to 6 weeks ago.'
      },
      {
        label: 'Symptoms Review',
        content: 'Denies pain (limited verbal reporting — uses PAINAD in assessment). No fever reported by staff. No cough. No dysuria or frequency beyond baseline (has urge incontinence). Reduced appetite for 6 weeks — estimated 30–50% of meals consumed. Weight: 48.2 kg today vs 51.4 kg 3 months ago (6.2% loss in 3 months — clinically significant). Bowels: opened 5 days ago — staff report hard stool.'
      },
      {
        label: 'Medications',
        content: [
          'Donepezil 10mg nocte (Alzheimer\'s dementia)',
          'Amlodipine 5mg mane (hypertension)',
          'Perindopril 4mg mane (hypertension)',
          'Metoprolol 25mg BD (previous AF — now in sinus rhythm on Holter 12 months ago)',
          'Atorvastatin 40mg nocte',
          'Esomeprazole 20mg mane',
          'Mirtazapine 7.5mg nocte (depression — commenced 4 months ago)',
          'Paracetamol 500mg BD (osteoarthritis — background analgesia)',
          'Macrogol sachets PRN (constipation)',
          'Temazepam 10mg nocte PRN — dispensed 18 of the past 30 nights (fall risk — review required)'
        ]
      },
      {
        label: 'Allergies',
        content: 'Penicillin — rash (documented).'
      },
      {
        label: 'Background',
        content: 'Hypertension, Alzheimer\'s dementia (moderate), previous AF (cardioverted — sinus rhythm on last Holter), osteoarthritis bilateral knees, osteoporosis (DXA T-score -2.8 femoral neck, 2 years ago — on no bone protection therapy currently). Non-smoker. Ex-drinker (ceased 15 years ago). Enduring Power of Attorney: daughter. Advance Care Directive in place — comfort-focused care, no CPR, no hospital transfer unless for symptom control.'
      }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP (lying): 132/78 mmHg | BP (standing 1 min): 108/64 mmHg — systolic drop of 24 mmHg (orthostatic hypotension confirmed) | HR 68 bpm regular | T 37.8°C | SpO2 97% RA | Weight 48.2 kg | BMI 20.1 kg/m²'
      },
      {
        label: 'General Appearance',
        content: 'Frail elderly woman, appropriately dressed. Alert but mildly drowsy — roused easily. Mild temporal wasting. Dry mucous membranes. Cooperative with examination.'
      },
      {
        label: 'Cognitive Assessment',
        content: [
          '4AT score: 5 (Alertness: mild drowsiness = 1; AMT4: 2/4 = 1; Attention: months of year backwards — unable to complete = 2; Acute change: YES = 4) → 4AT ≥4 — delirium probable.',
          'MoCA not performed today (patient too drowsy for reliable testing).',
          'Baseline MoCA 3 months ago: 18/30.'
        ]
      },
      {
        label: 'Mobility and Balance',
        content: [
          'TUG test: 24 seconds (high fall risk — normal <12 seconds).',
          'Gait: short shuffling steps, reduced arm swing, turns in multiple steps.',
          'Zimmer frame required but patient inconsistently using it.'
        ]
      },
      {
        label: 'Neurological',
        content: 'No focal neurological deficit. Mild bilateral cogwheel rigidity (longstanding, consistent with Parkinson\'s-type changes on previous examination). Plantar responses flexor bilaterally. No nystagmus.'
      },
      {
        label: 'Systemic Examination',
        content: [
          'Cardiovascular: HR regular, no murmurs, no peripheral oedema.',
          'Respiratory: clear to auscultation bilaterally.',
          'Abdomen: soft, distended, palpable faecal loading in left iliac fossa. No tenderness. Bladder not palpable.',
          'Skin: no pressure injuries. No bruising. Skin turgor reduced (unreliable in elderly).',
          'Urine dipstick: leucocytes 2+, nitrites positive, blood trace.'
        ]
      },
      {
        label: 'Investigations',
        content: [
          'FBC: Hb 112 g/L (mild anaemia, normocytic), WCC 11.2 × 10⁹/L (mild leucocytosis), PLT 224.',
          'EUC: Na 128 mmol/L (hyponatraemia — low), K 4.1, Cr 72 μmol/L, eGFR 62.',
          'CRP: 38 mg/L (elevated).',
          'Glucose: 5.4 mmol/L.',
          'Urine MCS: pending — dipstick positive as above.'
        ]
      }
    ]
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      {
        label: 'Problems',
        content: [
          '1. Delirium (4AT 5) — probable precipitants: urinary tract infection (positive dipstick, leucocytosis, CRP elevated), hyponatraemia (Na 128 — likely SIADH secondary to mirtazapine or acute illness), constipation (faecal loading), temazepam overuse (18/30 nights — sedative burden).',
          '2. Urinary tract infection — symptomatic given delirium context (note: known urge incontinence at baseline; dipstick positive; systemic inflammatory response with leucocytosis and elevated CRP).',
          '3. Hyponatraemia (Na 128) — likely contributing to delirium; differential includes mirtazapine (SIADH), SIADH secondary to infection, or perindopril contribution.',
          '4. Orthostatic hypotension — systolic drop 24 mmHg on standing; contributing to falls risk.',
          '5. Recurrent falls (×3 in 6 months) — multifactorial: orthostatic hypotension, temazepam use, Zimmer frame non-compliance, delirium, constipation.',
          '6. Clinically significant weight loss — 6.2% over 3 months; likely multifactorial (reduced appetite, intercurrent illness, depression).',
          '7. Constipation — faecal loading on examination; 5 days since last bowel motion.',
          '8. Medication review required — temazepam PRN overuse (falls risk), mirtazapine (SIADH risk, sedating — fall risk in elderly).'
        ]
      },
      {
        label: 'Advance Care Context',
        content: 'ACD in place — comfort-focused care, no CPR, no hospital transfer unless for symptom control. Management to align with ACD. Family (daughter/EPOA) informed and in agreement with management plan.'
      }
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Delirium — Non-pharmacological Management',
        content: [
          'Communicate diagnosis to nursing staff and family — explain delirium is a medical condition, not permanent worsening of dementia.',
          'Reorientation: clock and calendar in room, familiar photographs, consistent staff where possible.',
          'Sensory aids: ensure hearing aid in and working; glasses worn during waking hours.',
          'Lighting: adequate daytime light; nightlight for nocturnal bathroom visits.',
          'Mobilisation: encourage gentle activity with supervision and Zimmer frame during waking hours.',
          'Maintain adequate oral hydration.',
          'Avoid restraint.',
          'Avoid pharmacological sedation unless severe agitation with safety risk — if required, haloperidol 0.5mg PO (not temazepam).'
        ]
      },
      {
        label: 'UTI — Treatment',
        content: [
          'Given penicillin allergy (rash) and positive dipstick with systemic features (leucocytosis, CRP, delirium) — treat as symptomatic UTI pending MCS.',
          'Prescribe: trimethoprim 300mg nocte for 5 days (or cefalexin 500mg BD — penicillin allergy with rash is low cross-reactivity risk with cephalosporins; consider if trimethoprim resistance likely based on local antibiogram).',
          'Await urine MCS — adjust antibiotic if required based on sensitivities.',
          'Repeat EUC in 48–72 hours (monitor Na on treatment).'
        ]
      },
      {
        label: 'Hyponatraemia (Na 128)',
        content: [
          'Likely mirtazapine-induced SIADH or SIADH secondary to acute illness.',
          'Cease temazepam immediately (PRN — cease authority).',
          'Cease mirtazapine — taper: reduce to 3.75mg for 1 week then cease (watch for withdrawal).',
          'Fluid restriction 1.0–1.2 L/day (discuss with nursing staff).',
          'Repeat EUC in 48 hours — target gradual correction (no faster than 8–10 mmol/L per 24 hours — risk of osmotic demyelination syndrome with rapid correction).',
          'If Na does not improve or worsens: consider hospital referral per family\'s ACD preferences (symptom control only).'
        ]
      },
      {
        label: 'Orthostatic Hypotension and Falls',
        content: [
          'Review antihypertensive medications in context of orthostatic hypotension and falls: consider reducing amlodipine to 2.5mg or ceasing (BP well controlled, now orthostatic hypotension).',
          'Discuss with daughter and medical team re: metoprolol — may be contributing to orthostatic hypotension; review indication (previously AF, now sinus rhythm).',
          'Nursing staff to assist with slow position changes — legs over edge of bed for 2 minutes before standing.',
          'Adequate hydration.',
          'Hip protectors — initiate discussion with family and nursing staff.',
          'Zimmer frame — retraining by physiotherapist; nursing staff to prompt use at every transfer.',
          'Falls risk alert — ensure documented and communicated to all staff.'
        ]
      },
      {
        label: 'Constipation',
        content: [
          'Phosphate enema (Clyssie) tonight — faecal loading on examination.',
          'Macrogol 1 sachet BD for 1 week, then daily maintenance.',
          'Adequate hydration.',
          'Nursing staff to document bowel chart — alert NP if no bowel motion within 3 days.',
          'Review and address opioid use if relevant in future.'
        ]
      },
      {
        label: 'Weight Loss and Nutrition',
        content: [
          'Referral to facility dietitian — 6.2% weight loss over 3 months is clinically significant.',
          'High-calorie supplementary drinks (e.g. Ensure Plus) TDS.',
          'Assess dentition and denture fit — arrange dental review if indicated.',
          'Dysphagia screen — nursing staff to observe next meal and report any coughing, choking.',
          'Fortify foods — butter, cream, cheese added to meals.',
          'Reweigh in 2 weeks.'
        ]
      },
      {
        label: 'Medication Review',
        content: [
          'Cease: temazepam (falls risk, excess sedation, contributing to delirium — STOP criterion).',
          'Cease: mirtazapine (SIADH, sedating, falls risk in elderly — taper as above).',
          'Consider: reduce amlodipine 5mg → 2.5mg (orthostatic hypotension).',
          'Review: metoprolol (indication — was for AF now in sinus rhythm; review with GP/cardiologist).',
          'Continue: donepezil, perindopril (monitor Na), atorvastatin, esomeprazole, paracetamol.',
          'Document rationale for all changes in medication record.',
          'Notify GP and pharmacist of all changes.'
        ]
      },
      {
        label: 'Osteoporosis — Flag for Review',
        content: [
          'DXA T-score -2.8 (femoral neck) 2 years ago — no bone protection therapy in place.',
          'High fracture risk given recurrent falls, frailty, and osteoporosis.',
          'Discuss with family and GP re: initiation of bone protection (zoledronic acid IV infusion annual — preferred in RACF given compliance issues with oral bisphosphonates).',
          'Vitamin D: check 25(OH)D level — prescribe colecalciferol if deficient (common in RACF residents with limited sun exposure).',
          'Calcium: dietary calcium intake assessment via dietitian referral above.'
        ]
      },
      {
        label: 'Advance Care Planning — Review',
        content: [
          'ACD reviewed — consistent with current goals of care.',
          'Discussed acute deterioration with daughter (EPOA) — agreement to manage in facility, no hospital transfer.',
          'GOC documented: comfort-focused, symptom management priority.',
          'Copy of ACD in clinical notes, attached to medication chart, and provided to daughter.',
          'Review ACD at next family meeting in 4 weeks.'
        ]
      },
      {
        label: 'Follow-Up',
        content: [
          'NP review in 48–72 hours: cognition (4AT repeat), Na result, response to antibiotic, bowel outcome.',
          'Repeat EUC at 48 hours.',
          'Family contact within 24 hours to update on findings and plan.',
          'Family meeting in 4 weeks — overall care review, ACP review, medication review outcomes.'
        ]
      }
    ]
  }
];

export default function AgedCareSOAPPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🧓 Aged Care</h1>
        <p>Assessment and management of common aged care presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="aged-care" />


      <div className="content-prose">
      <div className="info-box" style={{marginBottom:'1.5rem'}}>
        <strong>Example case only.</strong> All patient details are fictional. Always document according to your organisation&apos;s standards and apply your own clinical judgement.
      </div>

      <SoapNote
        title="Aged Care Review — Delirium, Recurrent Falls, and Polypharmacy"
        meta="NP Aged Care Clinic · Residential Aged Care · Example only"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Aged Care), Aged Care Quality and Safety Commission Standards.
      </div>
      </div>

      <ModuleNav moduleId="aged-care" />

    </>
  );
}
