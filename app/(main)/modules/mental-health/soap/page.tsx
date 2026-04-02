import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Mental Health — SOAP Note' };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '45-year-old male presents for review of low mood and anxiety, ongoing for approximately 6 months following separation from his partner.'
      },
      {
        label: 'History of Presenting Complaint',
        content: 'Reports persistent low mood, loss of interest in activities previously enjoyed (football, socialising with friends), increased fatigue, poor sleep (early morning wakening most nights), and difficulty concentrating at work. He describes passive suicidal ideation — wishes it would be easier to not be here — but denies active plans or intent. Identifies his two teenage children as a strong reason to live.'
      },
      {
        label: 'Alcohol Use',
        content: 'Alcohol use has increased since separation — currently drinking 5–6 standard drinks on 4–5 nights per week. AUDIT-C score: 8 (hazardous use). Denies other substance use. No history of withdrawal symptoms. Last drink was yesterday evening.'
      },
      {
        label: 'Psychiatric History',
        content: 'No previous psychiatric diagnoses. No previous psychiatric admissions. No previous suicide attempts or deliberate self-harm. No family history of psychiatric illness or suicide.'
      },
      {
        label: 'Medications & Allergies',
        content: 'Nil regular prescribed medications. NKDA.'
      },
      {
        label: 'Social History',
        content: 'Separated 7 months ago — living alone in rented unit. Two children aged 14 and 16, sees them alternate weekends. Employed as a tradesperson — work attendance maintained but performance affected. No financial stress currently. Strong relationship with brother — identifies as primary support person. Non-smoker.'
      },
      {
        label: 'Validated Tools',
        content: [
          'PHQ-9: 16 (moderately severe depression)',
          'GAD-7: 11 (moderate anxiety)',
          'PHQ-9 item 9: score 1 (several days — passive ideation, no plan)'
        ]
      }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 132/84 mmHg | HR 82 bpm | T 36.7°C | BMI 27.4 kg/m²'
      },
      {
        label: 'Mental State Examination',
        content: [
          'Appearance & behaviour: Well-kempt male, appropriate dress. Cooperative. Psychomotor retardation — slow to respond, hunched posture.',
          'Speech: Reduced rate and volume. Latency present. No pressure of speech.',
          'Mood (subjective): "Pretty low, to be honest."',
          'Affect (objective): Dysphoric, restricted range. Congruent with stated mood.',
          'Thought form: Linear and goal-directed. No loosening of associations.',
          'Thought content: Passive SI as above — no plan, no intent. No homicidal ideation. No delusions. Ruminative preoccupation with relationship breakdown.',
          'Perceptions: No hallucinations elicited.',
          'Cognition: Alert and oriented x3. Concentration mildly reduced (WORLD backwards — 4/5 correct).',
          'Insight: Good — recognises he is depressed and that alcohol is worsening symptoms. Willing to engage with treatment.',
          'Judgement: Intact. Capacity to consent: present.'
        ]
      },
      {
        label: 'Investigations',
        content: [
          'TFTs: Normal',
          'B12 and folate: Normal',
          'FBC, EUC, LFTs: Unremarkable',
          'Fasting glucose: 5.1 mmol/L',
          'UDS: Negative (including cannabis, amphetamines, opioids)',
          'Blood alcohol level: Not indicated — last drink >12 hours ago'
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
          '1. Major Depressive Disorder — moderately severe (PHQ-9 16), first episode. Precipitated by significant life stressor (relationship separation). No psychotic features. No bipolar features on screening.',
          '2. Hazardous alcohol use (AUDIT-C 8) — likely contributing to and maintaining depressive and anxiety symptoms. No features of dependence. No significant withdrawal risk at current consumption pattern.',
          '3. Generalised anxiety — moderate (GAD-7 11), comorbid with depression.'
        ]
      },
      {
        label: 'Risk Assessment',
        content: [
          'Acute suicide risk: LOW',
          'Ideation: Passive — wishes to not be here. No active plan or intent.',
          'Protective factors: Two children (identified reason to live), good insight, willing to engage with treatment, supportive brother, employed, no access to firearms.',
          'Risk factors: Male, social isolation, alcohol use, relationship breakdown.',
          'Safety plan co-developed and documented. Agreed to present to ED or call Lifeline if ideation becomes active.'
        ]
      }
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Pharmacotherapy — Depression',
        content: [
          'Commence sertraline 50mg orally daily. Titrate to 100mg after 2 weeks if tolerated.',
          'Counselled re: mechanism, onset of action (4–6 weeks), common side effects (initial GI upset, sexual dysfunction, insomnia — usually transient), and initial anxiety increase in first 1–2 weeks.',
          'Advised not to cease abruptly.',
          'Review at 2 weeks — PHQ-9, side effect check, safety review.'
        ]
      },
      {
        label: 'Psychological Therapy',
        content: [
          'Mental Health Treatment Plan completed today — NP-initiated under Better Access.',
          'Referred to CBT-trained psychologist. Up to 10 Medicare-rebated sessions in calendar year (initial 6, then review for further 4).',
          'Also recommended: MoodGym (free online CBT programme), Beyond Blue online resources.'
        ]
      },
      {
        label: 'Alcohol — Brief Intervention',
        content: [
          'FRAMES brief intervention delivered — feedback on AUDIT-C 8 and relationship between alcohol and worsening depression and sleep.',
          'Alcohol discussed as CNS depressant — actively worsening mood, sleep, and anxiety.',
          'Goal negotiated: reduce to ≤2 standard drinks per occasion, maximum 4 nights per week initially.',
          'Provided Drinkwise Australia resources. Alcohol-specific counselling offered — declined today, will consider.',
          'No withdrawal risk identified. Advised re: warning signs of withdrawal — tremor, sweating, nausea — and to present to ED if these develop.'
        ]
      },
      {
        label: 'Lifestyle',
        content: [
          'Exercise: 30 minutes moderate-intensity activity ≥5 days per week — strong evidence base for MDD.',
          'Sleep hygiene: avoid alcohol within 4 hours of sleep, consistent wake time, limit screen time before bed.',
          'Social engagement: encouraged to maintain contact with brother and to resume social activities when able.'
        ]
      },
      {
        label: 'Safety Plan',
        content: [
          'Warning signs: increasing isolation, worsening sleep, alcohol increase above current level.',
          'Coping strategies: call brother (primary support person), go for a walk, use MoodGym.',
          'Reasons for living: children aged 14 and 16.',
          'Professional contacts: this NP clinic, GP.',
          'Crisis resources: Lifeline 13 11 14 (24/7), Beyond Blue 1300 22 4636, Suicide Call Back Service 1300 659 467.',
          'Emergency: present to nearest ED or call 000.',
          'Means restriction: no firearms in home. Advised to store all medications in a locked location and not to accumulate large supplies.'
        ]
      },
      {
        label: 'Follow-Up',
        content: [
          'Review in 2 weeks — medication tolerance, PHQ-9 repeat, safety check.',
          'Notify GP of MHTP, medication commencement, and clinical findings.',
          '6-week review — PHQ-9 response to sertraline, psychology engagement, alcohol review.',
          'If insufficient response at 6–8 weeks: consider dose increase to 200mg sertraline, augmentation strategies, or psychiatric referral.'
        ]
      }
    ]
  }
];

export default function MentalHealthSOAPPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Mental Health</div>
        <h1>🧠 SOAP Note</h1>
        <p>Example: 45-year-old male with moderately severe depression, hazardous alcohol use, and passive suicidal ideation following relationship breakdown.</p>
      </div>

      <ModuleTabs moduleId="mental-health" />

      <div className="info-box" style={{marginBottom:'1.5rem'}}>
        <strong>Example case only.</strong> This SOAP note is a teaching tool for NP students and practitioners. All patient details are fictional. Always document according to your organisation&apos;s standards and apply your own clinical judgement.
      </div>

      <SoapNote
        title="Mental Health Review — Moderately Severe Depression with Passive Suicidal Ideation"
        meta="NP Mental Health Clinic · Primary Care · Example only"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: DSM-5, Therapeutic Guidelines (Psychotropic), RANZCP clinical practice guidelines.
      </div>
    </>
  );
}
