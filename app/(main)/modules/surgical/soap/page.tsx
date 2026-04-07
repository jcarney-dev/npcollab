import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'Post-operative Surgical Site Infection',
  meta: '28-year-old female — POD4 post laparoscopic appendicectomy for perforated appendicitis',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: 'Wound pain and redness at right port site — post-operative day 4 following laparoscopic appendicectomy for perforated appendicitis.'
        },
        {
          label: 'History',
          content: [
            'Day 4 post laparoscopic appendicectomy for perforated appendicitis (Grade 3 — perforated with localised contamination). Commenced on IV piperacillin-tazobactam intraoperatively, converted to oral cefalexin 500mg QID + metronidazole 400mg TID on Day 2.',
            'Patient reports increasing pain, warmth, and redness around the right iliac fossa (camera) port site over the past 24 hours. Small amount of purulent discharge noted on the wound dressing this morning.',
            'Temperature has been mildly elevated today — 38.0°C this morning. No rigors. Tolerating oral fluids and diet. Nausea resolved post-operatively. No abdominal distension. Flatus passed Day 2, bowel motion Day 3.'
          ]
        },
        {
          label: 'Past History',
          content: 'Nil significant. No previous abdominal surgery. NKDA. No regular medications prior to admission.'
        },
        {
          label: 'Current Medications',
          content: 'Cefalexin 500mg QID (Day 2 of oral antibiotics), Metronidazole 400mg TID, Paracetamol 1g QID, Ibuprofen 400mg TDS with food, Enoxaparin 40mg SC daily (VTE prophylaxis — continuing until fully mobile).'
        }
      ]
    },
    {
      letter: 'O',
      title: 'Objective',
      fields: [
        {
          label: 'Vital Signs',
          content: 'BP 118/72 | HR 84 | Temp 38.0°C | RR 16 | SpO2 99% on room air'
        },
        {
          label: 'Abdominal Examination',
          content: 'Abdomen soft. Mild residual generalised tenderness on deep palpation — improved from admission. Three laparoscopic port sites visible: umbilical (12mm), right iliac fossa (5mm), and left iliac fossa (5mm). Umbilical and left port sites: healing well, no erythema or discharge. Right port site (camera port): 3cm × 2cm area of erythema, warmth, and induration around the wound margin. Small amount of cream-coloured purulent discharge on the dressing. Wound edges still approximated — no dehiscence or fascial gap palpable. No crepitus.'
        },
        {
          label: 'Investigations',
          content: [
            'FBE: WCC 13.2 × 10⁹/L (mild elevation), Hb 118 g/L, Platelets 280 × 10⁹/L',
            'CRP: 88 mg/L (elevated — expected post-perforated appendicitis, but not rising)',
            'EUC: normal, Creatinine 68 µmol/L',
            'Wound swab sent to microbiology — MCS pending'
          ]
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
            '1. Superficial incisional surgical site infection (SSI) — right port site. CDC classification: superficial (erythema, purulent discharge, wound edges intact, no fascial involvement). No signs of deep tissue or organ-space infection. No systemic sepsis.',
            '2. Post-perforated appendicitis recovery — Day 4. Mild WCC elevation and CRP consistent with post-operative inflammatory response from perforated appendicitis. Clinically improving.',
            '3. Adequate post-operative analgesia — multimodal regimen, pain well controlled.'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Wound Management',
          content: [
            'Open wound edges to allow drainage — remove sutures/staples from right port site wound, irrigate with normal saline.',
            'Wound packing with non-adherent dressing — change daily until granulating.',
            'Review wound daily — reassess for signs of deep involvement (increasing pain, crepitus, systemic deterioration).',
            'Wound swab — continue awaiting MCS result. Adjust antibiotics if resistant organism identified.'
          ]
        },
        {
          label: 'Antibiotics',
          content: [
            'Extend oral antibiotics for a further 5 days given SSI: cefalexin 500mg QID + metronidazole 400mg TID.',
            'Empirically covers Staphylococcus aureus (most common SSI organism), Gram-negatives, and anaerobes.',
            'Review wound swab MCS when available — if MRSA, change to trimethoprim-sulfamethoxazole or doxycycline per susceptibilities.'
          ]
        },
        {
          label: 'VTE Prophylaxis',
          content: 'Continue enoxaparin 40mg SC daily — perforated appendicitis with intra-abdominal contamination is a high VTE risk. Continue until fully mobile (target Day 5–7 discharge).'
        },
        {
          label: 'Discharge Planning',
          content: [
            'Target discharge Day 5–6 if wound responding and systemically well.',
            'Community nursing referral for wound packing post-discharge.',
            'GP review in 5–7 days for wound check.',
            'Histopathology of appendix specimen — ensure followed up at post-operative visit.',
            'Resume normal activity gradually — avoid heavy lifting for 4 weeks (port site hernia prevention).',
            'Return precautions: increasing redness, fever &gt;38.5°C, severe pain, inability to eat/drink — return to ED.'
          ]
        }
      ]
    }
  ]
};

export default function SurgicalSoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🔪</span>
        <div>
          <span className="label">Clinical Module — SOAP Note</span>
          <h1>Surgical SOAP Note</h1>
          <p>Example clinical note: post-operative surgical site infection following laparoscopic appendicectomy.</p>
        </div>
      </div>

      <ModuleTabs moduleId="surgical" />

      <SoapNote
        title={soapData.title}
        meta={soapData.meta}
        sections={soapData.sections}
      />

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
