import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export const metadata: Metadata = { title: 'Palliative Care — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '68-year-old male with stage IV non-small cell lung cancer, on palliative chemotherapy, presenting with worsening pain and breathlessness over the past week.',
      },
      {
        label: 'History of Presenting Complaint',
        content: [
          'Right-sided chest pain, constant, 7/10 at rest, 9/10 on movement and deep breathing — pleuritic quality.',
          'Current analgesia: oxycodone modified release 20mg BD and oxycodone immediate release 5mg PRN — using breakthrough 4–5 times per day with partial relief only.',
          'Dyspnoea at rest and minimal exertion — worsens with pain.',
          'SpO₂ 88–91% at home on 2L O₂ via nasal prongs.',
          'Dry cough, no haemoptysis. Nausea mild, managing oral intake.',
          'Constipation — last bowel motion 4 days ago despite Coloxyl with Senna BD.',
          'Sleeping poorly due to pain.',
        ],
      },
      {
        label: 'Goals of Care',
        content: 'Patient and family aware of prognosis — estimated 2–3 months. Wishes to remain at home. NFR order in place. Advance Care Directive completed — copy in file.',
      },
      {
        label: 'Social History',
        content: 'Lives at home with wife (primary carer). Two adult children involved. Palliative care community nurse visiting twice weekly. Last seen by palliative medicine physician 2 weeks ago.',
      },
    ],
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 118/76 | HR 94 | RR 22 | Temp 37.2°C | SpO₂ 90% on 2L O₂ | Weight 64kg (down 3kg in 4 weeks)',
      },
      {
        label: 'General',
        content: 'Cachexic, pale, visibly uncomfortable at rest. Speaking in short sentences due to dyspnoea.',
      },
      {
        label: 'Respiratory',
        content: [
          'Increased work of breathing. Reduced air entry right base.',
          'Dullness to percussion right base — consistent with pleural effusion.',
          'No wheeze. Accessory muscle use mild.',
        ],
      },
      {
        label: 'Pain and Bowel',
        content: [
          'Wincing on palpation right chest wall. Guarding with deep breathing.',
          'Abdomen distended, tympanic. Bowel sounds reduced. Palpable faecal loading left colon.',
        ],
      },
      {
        label: 'Breakthrough Use',
        content: '5 doses of oxycodone IR 5mg in past 24 hours — total breakthrough = 25mg.',
      },
    ],
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      {
        label: 'Problem List',
        content: [
          '1. Inadequately controlled cancer pain — opioid dose requires titration. Total 24h oxycodone = 40mg MR + 25mg breakthrough = 65mg. Background dose needs increase.',
          '2. Dyspnoea — likely multifactorial: right pleural effusion (new or enlarging), pain splinting, underlying disease. SpO₂ 90% on 2L O₂.',
          '3. Constipation — opioid-induced, inadequately managed.',
          '4. Right pleural effusion — consider drainage if consistent with goals of care. Discuss with patient and family. Refer to palliative medicine physician.',
          '5. Cachexia and weight loss — consistent with disease progression.',
        ],
      },
    ],
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Pain — Opioid Titration',
        content: [
          'Increase oxycodone MR to 30mg BD (from 20mg BD) — 33% increase appropriate for inadequate control.',
          'Increase breakthrough dose to oxycodone IR 10mg PRN 1-hourly (1/6 of new 24h total = 60mg ÷ 6 = 10mg).',
          'If unable to manage orally or >4 breakthroughs per day — convert to CSCI: morphine 30mg/24h (oxycodone 60mg ÷ 1.5 = 40mg morphine equivalent; round to 30mg for CSCI initiation with close review).',
          'Add dexamethasone 8mg oral daily for pleuritic component and appetite.',
        ],
      },
      {
        label: 'Dyspnoea',
        content: [
          'Low-dose morphine 2.5mg subcutaneous PRN for breathlessness (in addition to pain management).',
          'Continue supplemental oxygen — titrate to SpO₂ >92%.',
          'Fan directed at face.',
          'Discuss pleural effusion drainage with patient and family — refer to palliative medicine for decision.',
        ],
      },
      {
        label: 'Constipation',
        content: [
          'Increase Coloxyl with Senna to 2 tablets BD.',
          'Add Movicol 1 sachet daily.',
          'If no result in 48 hours — glycerol suppository or phosphate enema.',
          'Review laxative regimen with each opioid dose increase.',
        ],
      },
      {
        label: 'Referral and Communication',
        content: [
          'Phone palliative medicine physician today — update on deterioration, pleural effusion, opioid titration.',
          'Community palliative care nurse — increase to daily visits this week.',
          'Family meeting arranged for this week — update on prognosis and goals of care.',
          'Ensure anticipatory medications prescribed and dispensed at home: morphine SC, midazolam SC, haloperidol SC, hyoscine butylbromide SC.',
        ],
      },
      {
        label: 'Review',
        content: 'Telephone review in 24 hours to assess pain and dyspnoea response to titration. Home visit by community nurse tomorrow.',
      },
    ],
  },
];

export default function PalliativeCareSoapPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🕊️ Palliative Care</h1>
        <p>Symptom management, advance care planning, and end-of-life care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="palliative-care" />


      <div className="content-prose">
      <SoapNote
        title="Palliative Care Review — Pain and Dyspnoea"
        meta="68-year-old male | Stage IV NSCLC | Opioid titration + anticipatory prescribing | Home-based care"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Opioid dose conversions must be verified individually — refer to Therapeutic Guidelines (Palliative Care) or CareSearch drug information.
      </div>
      </div>

    </>
  );
}
