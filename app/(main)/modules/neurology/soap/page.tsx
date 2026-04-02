import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Neurology — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '52-year-old female presents for review of episodic headache, occurring 3–4 times per month for the past 8 months, significantly impacting work and quality of life.'
      },
      {
        label: 'History of Presenting Complaint',
        content: 'Headaches are right-sided, throbbing, moderate–severe in intensity (7–8/10). Each episode lasts 12–24 hours. Associated with nausea and photophobia — must lie in a dark room. No vomiting. Phonophobia present. Aggravated by routine physical activity (climbing stairs worsens pain). No aura. No autonomic features (no lacrimation, no nasal congestion).'
      },
      {
        label: 'Previous Episodes',
        content: 'Similar headaches since her 30s but infrequent (1–2 per year). Frequency has markedly increased over the past 8 months. No clear trigger identified — she notes attacks can occur at any time, occasionally waking her from sleep. Stressful period at work over the same timeframe.'
      },
      {
        label: 'Medication Use',
        content: 'Taking ibuprofen 400mg at headache onset — 3–4 times per week during headache periods. Occasional paracetamol in addition. No triptan therapy ever tried. AUDIT-C: 2 (low risk). No regular medications.'
      },
      {
        label: 'Red Flag Review',
        content: 'No thunderclap onset. No fever or meningism. No neurological deficit. No visual disturbance between episodes. No change in headache character. No weight loss. No jaw claudication. Headaches have not progressively worsened in severity (pattern similar each episode). No papilloedema on fundoscopy.'
      },
      {
        label: 'Impact on Function',
        content: 'MIDAS score: 21 (severe disability — Grade IV). Missing work 2–3 days per month. Unable to perform household duties on headache days. No longer attending gym on headache days. Significant distress about frequency and impact.'
      },
      {
        label: 'Past Medical History',
        content: 'Hypertension — on perindopril 5mg daily. No history of stroke, cardiac disease, or depression. Non-smoker. OCP use 20 years ago — ceased. Postmenopausal (52 years old). No family history of migraine documented (will clarify — maternal history uncertain).'
      },
      {
        label: 'Medications & Allergies',
        content: 'Perindopril 5mg daily. Ibuprofen PRN (overusing). Allergies: NKDA.'
      }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 128/78 mmHg | HR 72 bpm | T 36.6°C | BMI 24.1 kg/m²'
      },
      {
        label: 'Neurological Examination',
        content: [
          'GCS: 15 — alert and oriented.',
          'Cranial nerves: II — visual acuity 6/6 bilaterally, visual fields full to confrontation, fundoscopy: discs sharp, no papilloedema, no haemorrhage. III/IV/VI — EOMI, no nystagmus, no ptosis, pupils equal and reactive. VII — face symmetrical. All other cranial nerves grossly intact.',
          'Motor: Normal tone. Power 5/5 in all four limbs. No pronator drift.',
          'Reflexes: 2+ throughout. Plantar responses flexor bilaterally.',
          'Sensory: Intact to light touch and pinprick in all four limbs.',
          'Coordination: Finger-nose-finger intact bilaterally. No dysdiadochokinesia.',
          'Gait: Normal, steady. Romberg negative.'
        ]
      },
      {
        label: 'Meningism',
        content: 'No neck stiffness. Kernig\'s and Brudzinski\'s signs absent. No photophobia at time of examination.'
      },
      {
        label: 'Validated Tools',
        content: [
          'MIDAS: 21 (Grade IV — severe disability)',
          'HIT-6: 66 (substantial impact on function)'
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
          '1. Episodic migraine without aura — high-frequency (3–4/month), Grade IV disability (MIDAS 21). Meeting criteria for preventive therapy.',
          '2. Probable medication overuse headache (MOH) — analgesic use ≥3–4 days per week for headache. NSAIDs ≥15 days/month exceeds the threshold for MOH. Likely contributing to increased headache frequency.',
          '3. Hypertension — well controlled on perindopril.'
        ]
      },
      {
        label: 'Red Flags',
        content: 'No red flags identified. No secondary cause suspected. Consistent with primary headache disorder.'
      }
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Acute Treatment — Migraine',
        content: [
          'Prescribe sumatriptan 50mg orally at headache onset — take early, at first sign of headache (not aura).',
          'Counsel: if insufficient response at 2 hours, may repeat once (max 2 tablets per attack). Do not use more than 2 attack days per week (MOH risk with triptans ≥10 days/month).',
          'Advise to rest in dark, quiet environment. Cold pack to head.',
          'Cease ibuprofen as acute headache treatment — contributing to MOH. Transition to triptan as sole acute agent.',
          'Antiemetic: metoclopramide 10mg at headache onset if nausea significant (also potentiates analgesia).'
        ]
      },
      {
        label: 'Preventive Therapy',
        content: [
          'Indication met: ≥4 attacks per month with significant disability (MIDAS Grade IV).',
          'Chosen agent: topiramate 25mg nightly (titrate by 25mg every 2 weeks to target 50–100mg daily).',
          'Counselled re: side effects — paraesthesia (common, usually transient), cognitive slowing ("Dopamax"), weight loss, kidney stones (increase fluid intake), metabolic acidosis. Teratogenic — contraception required in women of reproductive age. Patient is postmenopausal — contraception not required.',
          'Alternative discussed: propranolol (not preferred as BP already controlled and patient not keen on beta-blocker).',
          'Review at 6–8 weeks after reaching target dose. Reassess MIDAS. Allow 8–12 weeks for full effect assessment.'
        ]
      },
      {
        label: 'Medication Overuse — Withdrawal',
        content: [
          'Explained MOH — overuse of acute medications paradoxically increases headache frequency.',
          'Plan: abrupt cessation of ibuprofen. Headache may temporarily worsen for 2–4 weeks during withdrawal — counselled about this.',
          'During withdrawal: short course of naproxen sodium 500mg BD for 10 days (bridge — NSAID class may be used briefly if switching away from ibuprofen is incomplete; if already using NSAIDs, discuss alternatives with prescriber).',
          'Triptan is the new acute agent only — strict limit of ≤2 treatment days per week.'
        ]
      },
      {
        label: 'Headache Diary',
        content: [
          'Commence headache diary — record: date, duration, severity (0–10), medications taken, menstrual cycle, possible triggers.',
          'App recommendation: Migraine Buddy or paper diary. Bring to next review.',
          'Trigger identification: sleep, hydration, meal skipping, stress, alcohol, bright light, weather.'
        ]
      },
      {
        label: 'Lifestyle',
        content: [
          'Regular sleep schedule — consistent wake time (including weekends).',
          'Adequate hydration — 2L water daily.',
          'Regular meals — avoid meal skipping.',
          'Stress management — CBT-based approaches have evidence for migraine prevention. Referral to psychologist considered.',
          'Regular aerobic exercise — evidence for reduction in migraine frequency (aim ≥3 times per week).'
        ]
      },
      {
        label: 'Investigations',
        content: [
          'No neuroimaging indicated — no red flags, consistent primary headache disorder with long history.',
          'BP monitoring — review in 4 weeks (starting topiramate, monitor BP and metabolic effects).'
        ]
      },
      {
        label: 'Follow-Up',
        content: [
          'Review in 8 weeks — headache diary review, MIDAS reassessment, topiramate tolerability and titration.',
          'If insufficient response to topiramate at therapeutic dose after 3 months: consider switch to propranolol, amitriptyline, or refer for consideration of CGRP monoclonal antibody therapy (PBS criteria: chronic migraine ≥15 days/month, ≥2 failed preventive trials).',
          'Advise to present to ED immediately if: worst-ever headache, sudden onset thunderclap, associated fever and neck stiffness, or new neurological deficit.'
        ]
      }
    ]
  }
];

export default function NeurologySOAPPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Neurology</div>
        <h1>🧬 SOAP Note</h1>
        <p>Example: 52-year-old female with high-frequency episodic migraine and probable medication overuse headache.</p>
      </div>

      <ModuleTabs moduleId="neurology" />

      <div className="info-box" style={{marginBottom:'1.5rem'}}>
        <strong>Example case only.</strong> This SOAP note is a teaching tool for NP students and practitioners. All patient details are fictional. Always document according to your organisation&apos;s standards and apply your own clinical judgement.
      </div>

      <SoapNote
        title="Neurology Review — High-Frequency Migraine with Medication Overuse"
        meta="NP Neurology Clinic · Primary Care · Example only"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Neurology), International Headache Society Classification.
      </div>
    </>
  );
}
