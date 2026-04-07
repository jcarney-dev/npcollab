import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export default function GeneralMedicalSoapPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-icon">🩺</div>
        <div>
          <h1>General Medical — SOAP Note</h1>
          <p>Example consultation: 72-year-old with fever and confusion</p>
        </div>
      </div>

      <ModuleTabs moduleId="general-medical" />

      <SoapNote
        title="72-Year-Old Male — Urosepsis with Acute Urinary Retention"
        meta="qSOFA 3/3 | Lactate 3.8 | BP 96/58 | Septic shock"
        sections={[
          {
            letter: 'S',
            title: 'Subjective',
            fields: [
              {
                label: 'Presenting Complaint',
                content: '72-year-old male brought in by family with 2 days of fever and increasing confusion.',
              },
              {
                label: 'History',
                content: [
                  'Confused since yesterday — not recognising family members at times, saying strange things.',
                  'Fever at home (38.9°C). Reduced oral intake for 2 days.',
                  'Reduced urine output — family unsure if he has voided today.',
                  'No cough, no diarrhoea, no rash, no recent travel, no known sick contacts.',
                ],
              },
              {
                label: 'Past History',
                content: 'Type 2 diabetes (metformin, glipizide), hypertension (perindopril 10mg), benign prostatic hyperplasia (tamsulosin). Previous UTI 6 months ago requiring hospitalisation.',
              },
              {
                label: 'Medications',
                content: 'Metformin 1g BD, glipizide 5mg BD, perindopril 10mg, tamsulosin 400mcg. NKDA.',
              },
              {
                label: 'Social History',
                content: 'Lives alone. Daughter visits every 2–3 days. Normally independent with ADLs.',
              },
            ],
          },
          {
            letter: 'O',
            title: 'Objective',
            fields: [
              {
                label: 'Vital Signs',
                content: 'BP 96/58 | HR 118 bpm | Temp 39.2°C | RR 24 | SpO₂ 93% on air | Blood glucose 14.2',
              },
              {
                label: 'General',
                content: 'Elderly male, confused (oriented to name only), flushed, diaphoretic. qSOFA score: 3/3 (altered mentation, RR 24, SBP 96).',
              },
              {
                label: 'Cardiovascular',
                content: 'Tachycardic, regular. No murmur. Peripherally cool. CRT 4 seconds. JVP not visible — dry.',
              },
              {
                label: 'Respiratory',
                content: 'Tachypnoeic. Bibasal crackles. No wheeze.',
              },
              {
                label: 'Abdominal',
                content: 'Suprapubic tenderness on palpation. Bladder dull to percussion above umbilicus — urinary retention likely.',
              },
              {
                label: 'Investigations (point of care)',
                content: [
                  'Urinalysis: leucocytes +++, nitrites +++, blood ++, protein +',
                  'Blood glucose: 14.2',
                  'Lactate: 3.8 mmol/L (elevated — tissue hypoperfusion)',
                  'Blood cultures x2 drawn before antibiotics given',
                ],
              },
            ],
          },
          {
            letter: 'A',
            title: 'Assessment',
            fields: [
              {
                label: 'Problems',
                content: [
                  '1. Sepsis — likely urosepsis (qSOFA 3/3, lactate 3.8, source: urinary). Septic shock criteria met (hypotension, appears volume depleted).',
                  '2. Acute urinary retention — suprapubic tenderness, dull bladder — likely precipitated the UTI.',
                  '3. Delirium — secondary to sepsis, hypoglycaemia risk (on glipizide), hypoxia.',
                  '4. Acute kidney injury likely — hypotension + diabetes + dehydration.',
                  '5. Type 2 diabetes — withhold metformin and glipizide in acute illness.',
                ],
              },
            ],
          },
          {
            letter: 'P',
            title: 'Plan',
            fields: [
              {
                label: 'Immediate — Call 000',
                content: [
                  'Oxygen — titrate to SpO₂ >94%',
                  'IV access x2 — 500mL normal saline bolus while awaiting transfer',
                  'Blood cultures x2 drawn (done) — DO NOT delay antibiotics',
                  'Ceftriaxone 1g IV/IM immediately — covers urinary Gram-negatives',
                  'Urethral catheter — decompress retention, monitor urine output (aim >0.5mL/kg/hr)',
                  'Withhold metformin (AKI risk) and glipizide (hypoglycaemia risk in sick patient) — notify ED team',
                  'Monitor BGL — hypoglycaemia risk without glipizide and with reduced intake',
                ],
              },
              {
                label: 'Handover to Ambulance (ISBAR)',
                content: [
                  '72-year-old male, septic shock, likely urosepsis.',
                  'Urinary retention as precipitant.',
                  'qSOFA 3/3, lactate 3.8, BP 96/58.',
                  'Blood cultures drawn, ceftriaxone 1g IV given.',
                  'Catheterised — concentrated urine draining.',
                  'Diabetes — metformin and glipizide withheld.',
                ],
              },
            ],
          },
        ]}
      />

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement.</p>
      </div>
    </div>
  );
}
