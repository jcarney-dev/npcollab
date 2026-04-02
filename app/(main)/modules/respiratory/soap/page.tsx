import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = {
  title: 'Respiratory - SOAP Note',
};

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      { label: 'Presenting Complaint', content: '71-year-old male with known COPD (GOLD 3) presents with a 4-day history of worsening dyspnoea and increased sputum production.' },
      { label: 'History of Presenting Complaint', content: 'Progressive worsening of dyspnoea over 4 days — now breathless at rest and unable to complete sentences. Sputum changed from white to yellow-green, increased volume. Dry cough worsening. Began 3 days after a cold. No haemoptysis. No chest pain. No fever at home. Unable to use his nebuliser as effectively. Reliever use increased to every 2 hours.' },
      { label: 'COPD Background', content: [
        'Diagnosed COPD 2019 — GOLD Stage 3 on last spirometry (FEV₁ 42% predicted)',
        'Current medications: tiotropium 18mcg daily, budesonide-formoterol 200/6 2 puffs BD, salbutamol MDI PRN',
        'Two exacerbations last year — one requiring hospitalisation',
        'Ex-smoker: 45 pack-year history, ceased 6 years ago',
        'No home oxygen currently prescribed',
        'Pulmonary rehabilitation completed 18 months ago',
        'Vaccinations: influenza this year, pneumococcal (PNEUMOVAX) 3 years ago, COVID up to date'
      ]},
      { label: "Patient's Concerns", content: '"I do not want to go to hospital again." Lives alone. Daughter lives 20 minutes away and has been contacted.' }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      { label: 'Vital Signs', content: 'BP 138/84 mmHg | HR 104 bpm | RR 26 breaths/min | Temp 37.8°C | SpO2 88% on room air → 92% on 2L O2 via nasal prongs' },
      { label: 'General Appearance', content: 'Unwell. Seated upright. Using accessory muscles. Speaks in short phrases. Pursed-lip breathing. Mild peripheral cyanosis noted.' },
      { label: 'Respiratory Examination', content: [
        'Trachea: central',
        'Chest: barrel-shaped, reduced expansion bilaterally',
        'Percussion: bilaterally hyper-resonant',
        'Breath sounds: globally reduced air entry, prolonged expiratory phase, bilateral expiratory wheeze',
        'No bronchial breathing, no crackles',
        'No pleural rub'
      ]},
      { label: 'Cardiovascular Examination', content: 'Heart sounds dual, no murmurs. JVP mildly elevated at 3cm above sternal angle. Mild pitting oedema both ankles.' },
      { label: 'Investigations', content: [
        'SpO2: 88% RA, 92% on 2L O2',
        'PEFR: 155 L/min (estimated predicted 420 L/min — 37% predicted)',
        'CXR ordered: hyperinflated lung fields, flattened diaphragms, no consolidation, no pneumothorax, no effusion',
        'Sputum sample collected for MC&S',
        'FBE, EUC, CRP sent — results pending'
      ]}
    ]
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      { label: 'Primary Diagnosis', content: 'Acute exacerbation of COPD (AECOPD) — moderate to severe, likely infective trigger (J44.1)' },
      { label: 'Severity Assessment', content: [
        'SpO2 88% on air with RR 26 and accessory muscle use = moderate-severe exacerbation',
        'Infective exacerbation: purulent sputum change, viral prodrome, low-grade fever',
        'Concerning features: SpO2 not reaching 94% target on 2L O2, JVP elevated, ankle oedema — possible cor pulmonale'
      ]},
      { label: 'Differential Diagnoses Considered', content: [
        'Pneumonia — CXR no consolidation, makes this less likely; sputum sent',
        'Pulmonary embolism — no pleuritic chest pain, no leg swelling asymmetry, Wells score low; remains a consideration given COPD and immobility',
        'Decompensated right heart failure — JVP elevated and ankle oedema; may represent cor pulmonale in context of AECOPD rather than primary cardiac event',
        'Pneumothorax — excluded on CXR'
      ]}
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      { label: 'Immediate Management', content: [
        'Controlled oxygen — target SpO2 88–92% in known COPD (avoid over-oxygenation and hypercapnic drive suppression)',
        'Salbutamol 5mg + ipratropium 0.5mg nebulised — repeat every 20–30 min x3 if needed',
        'Prednisolone 40mg oral daily for 5 days',
        'Amoxicillin-clavulanate 875/125mg BD for 5 days (purulent sputum, moderate-severe exacerbation) — confirmed NKDA'
      ]},
      { label: 'Escalation Decision', content: 'Given SpO2 not reaching target on 2L O2, elevated JVP, moderate-severe exacerbation in a patient who lives alone with previous hospitalisation — decision made to transfer to ED for further assessment, IV therapy if required, and monitoring. 000 called. Daughter notified.' },
      { label: 'Handover to Paramedics', content: [
        'ISBAR completed',
        'GOLD 3 COPD, moderate-severe AECOPD with hypoxia',
        'SpO2 88% RA — controlled O2 at 2L via NP, titrate to 88–92%',
        'Medications given: salbutamol/ipratropium nebs, prednisolone 40mg',
        'CXR: no consolidation or pneumothorax',
        'Sputum sent, bloods sent',
        'Penicillin safe — Augmentin prescribed, first dose given'
      ]},
      { label: 'Follow-Up Plan', content: [
        'Arrange review within 1 week post-discharge',
        'Review COPD management — consider LAMA + LABA + ICS triple therapy given frequent exacerbations',
        'Refer for repeat pulmonary rehabilitation',
        'Assess home oxygen need at follow-up (resting SpO2 on stable day)',
        'Review pneumococcal vaccination status — due for PREVENAR 20 booster',
        'Social work referral — lives alone, recurrent admissions'
      ]}
    ]
  }
];

export default function RespiratorySOAPPage() {
  return (
      <>
        <div className="page-header">
          <div className="label">Clinical Module</div>
          <h1>🫁 Respiratory - SOAP Note</h1>
          <p>Asthma, COPD, pneumonia, pulmonary embolism, and spirometry interpretation</p>
        </div>
        <ModuleTabs moduleId="respiratory" />

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Acute COPD Exacerbation</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: 71-year-old male GOLD 3 COPD presenting with moderate-severe infective exacerbation. Click each section to expand.</p>
      </div>
      <SoapNote title="Acute COPD Exacerbation — GOLD 3" sections={sections} />
      <div className="info-box" style={{ marginTop: '24px' }}>
        <p>⚠️ <strong>Oxygen target in COPD:</strong> Always target SpO2 88–92% in known COPD — excessive oxygen can suppress hypoxic drive and worsen hypercapnia. Document the target on transfer paperwork.</p>
      </div>
          </>

  );
}