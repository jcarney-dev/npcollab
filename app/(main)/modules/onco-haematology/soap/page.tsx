import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'Febrile Neutropenia — DLBCL on R-CHOP',
  meta: '58-year-old female — DLBCL, R-CHOP Cycle 3 Day 10, Penicillin Allergy',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: 'Temperature 38.6°C at home, unwell for several hours — Day 10 of R-CHOP Cycle 3 for DLBCL.'
        },
        {
          label: 'History',
          content: [
            'Known DLBCL (Diffuse Large B-Cell Lymphoma), Stage III-B. Currently on R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisolone) Cycle 3, Day 10. Previous cycles uncomplicated, no prior febrile neutropenia.',
            'Patient reports fever 38.6°C (self-measured) at home 3 hours ago. Associated rigors, generalised malaise, and myalgia. No productive cough or dyspnoea. No dysuria or urinary symptoms. No diarrhoea. Mild soreness at PICC line exit site noted by patient — no pus or discharge visible.',
            'No known recent sick contacts. Has been strict with hand hygiene. Prednisolone (Day 1–5 only) completed Day 5 of this cycle. Last G-CSF dose not administered this cycle (not prescribed this regimen).'
          ]
        },
        {
          label: 'Past History',
          content: 'DLBCL diagnosed 3 months ago. Hypertension (amlodipine 5mg daily). No cardiac history.'
        },
        {
          label: 'Allergies',
          content: '⚠️ PENICILLIN ALLERGY — anaphylaxis (documented). No cephalosporin allergy documented.'
        },
        {
          label: 'Medications',
          content: 'Amlodipine 5mg daily, Ondansetron 8mg TDS PRN (Day 1–5), Omeprazole 20mg daily, Trimethoprim-sulfamethoxazole (cotrimoxazole) 160/800mg three times weekly (PCP prophylaxis). Rituximab maintenance infusion scheduled in 3 weeks.'
        }
      ]
    },
    {
      letter: 'O',
      title: 'Objective',
      fields: [
        {
          label: 'Vital Signs',
          content: 'BP 108/66 | HR 112 | Temp 38.9°C | RR 20 | SpO2 96% on room air | GCS 15'
        },
        {
          label: 'Examination',
          content: [
            'General: Alert, unwell-looking, flushed, rigoring intermittently. No oral mucositis. No lymphadenopathy. Abdomen soft, mild splenomegaly (known) — no peritonism.',
            'Respiratory: Mild tachypnoea. Air entry equal bilaterally. No crackles or wheeze.',
            'PICC Line: Right arm PICC exit site — 1cm area of mild erythema at exit site, no induration, no pus or discharge. No arm swelling or cord. Blood return confirmed.'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'FBE: WCC 0.6 × 10⁹/L, Neutrophils 0.2 × 10⁹/L, Hb 96 g/L, Platelets 68 × 10⁹/L',
            'CRP: 142 mg/L',
            'EUC: Na 134, K 4.1, Creatinine 88 µmol/L, eGFR 62 mL/min',
            'LFTs: ALT 48 (mildly elevated — rituximab/doxorubicin effect), ALP 78, Bili 12 — all within acceptable range',
            'Coagulation: INR 1.2, APTT 32',
            'Blood cultures × 2 drawn — one peripheral, one from PICC line — prior to antibiotics',
            'CXR: No consolidation, no effusion'
          ]
        },
        {
          label: 'MASCC Score',
          content: 'MASCC risk score calculated: Burden of illness — moderate (2), no hypotension (5), no COPD (4), solid tumour/no fungal infection (4), no dehydration (3), outpatient status (3), age <60 — no (0). Total score: 21 — LOW RISK. However, given PICC site concern, thrombocytopenia, and penicillin allergy, admit for IV therapy.'
        }
      ]
    },
    {
      letter: 'A',
      title: 'Assessment',
      fields: [
        {
          label: 'Problem List',
          content: [
            '1. Febrile neutropenia — neutrophils 0.2 × 10⁹/L, temperature 38.9°C. MASCC low risk (21) but admitting given allergy profile, PICC site concern, and degree of immunosuppression.',
            '2. Possible PICC-related infection — mild exit site erythema; source not yet confirmed. Blood cultures drawn from PICC and peripheral — awaiting results.',
            '3. Thrombocytopenia — platelets 68 × 10⁹/L — monitor, no transfusion required at this threshold unless active bleeding.',
            '4. Penicillin allergy (anaphylaxis) — piperacillin-tazobactam and amoxicillin-clavulanate CONTRAINDICATED. Use ceftazidime as per allergy protocol.'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Antibiotics (Penicillin Allergy — Anaphylaxis)',
          content: [
            'Ceftazidime 2g IV 8-hourly (third-generation cephalosporin — safe in penicillin anaphylaxis per Australian allergy guidelines; cross-reactivity &lt;1%).',
            'Add vancomycin 25mg/kg IV 12-hourly (adjusted for renal function) — given PICC site erythema and potential PICC-related bloodstream infection. Vancomycin levels to be checked 1 hour before third dose.',
            'Review antibiotics at 48 hours with blood culture results and clinical response.',
            'Allergy clearly documented at top of medication chart and verbal handover to all team members.'
          ]
        },
        {
          label: 'Supportive Care',
          content: [
            'IV fluid resuscitation: 500mL 0.9% NaCl over 1 hour — mild hypotension, then maintenance at 125mL/hr.',
            'Paracetamol 1g IV 6-hourly for fever and discomfort.',
            'Anti-emetic: ondansetron 4mg IV PRN — hold oral medications while acutely unwell.',
            'Monitor urine output — catheter if output inadequate.',
            'DVT prophylaxis: enoxaparin 40mg SC daily (hold if platelets &lt;50).'
          ]
        },
        {
          label: 'PICC Line Management',
          content: [
            'Do not remove PICC until blood culture results available — if PICC cultures positive and peripheral negative, consistent with line-related bloodstream infection; consider line removal depending on organism.',
            'Daily PICC site inspection — document any progression of erythema.',
            'Wound swab of PICC exit site if discharge develops.'
          ]
        },
        {
          label: 'Monitoring and Review',
          content: [
            'Repeat FBE daily — monitor neutrophil recovery.',
            'Blood cultures × 2 at 48 hours if not improving or spiking again.',
            'Oncology team review daily.',
            'Notify treating oncologist of this admission — next R-CHOP cycle will require review and consideration of G-CSF prophylaxis.',
            'Document allergy in all systems — flag for pharmacy reconciliation.'
          ]
        }
      ]
    }
  ]
};

export default function OncoHaematologySoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🩸</span>
        <div>
          <span className="label">Clinical Module — SOAP Note</span>
          <h1>Onco-Haematology SOAP Note</h1>
          <p>Example clinical note: febrile neutropenia in DLBCL with penicillin allergy.</p>
        </div>
      </div>

      <ModuleTabs moduleId="onco-haematology" />

      <SoapNote
        title={soapData.title}
        meta={soapData.meta}
        sections={soapData.sections}
      />

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
