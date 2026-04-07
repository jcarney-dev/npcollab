import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'MSK Elbow SOAP Note',
  meta: '42F | Right lateral epicondylalgia | Office administrator',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '42-year-old female office administrator presenting with 4 months of right lateral elbow pain, worsening over the past 6 weeks.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Gradual onset right lateral elbow pain — no specific injury or trauma',
            'Pain worst with gripping, lifting, typing, and using a computer mouse',
            'Significant impact on work — unable to perform sustained keyboard tasks without pain',
            'Pain described as aching at rest, sharp on activities involving gripping with the forearm pronated',
            'Rates pain 6/10 at worst (end of a full work day), 2/10 at rest',
            'Corticosteroid injection 6 weeks ago — approximately 2 weeks of good relief, then pain returned to baseline',
            'No previous right elbow injury',
            'Dominant right hand'
          ]
        },
        {
          label: 'Neurological Symptoms',
          content: [
            'No ring or little finger tingling or numbness',
            'No hand weakness',
            'No nocturnal symptoms'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'Nil significant medical history',
            'No prior upper limb conditions',
            'Non-smoker, occasional alcohol'
          ]
        },
        {
          label: 'Medications',
          content: [
            'Ibuprofen 400mg PRN (using most days)',
            'No regular medications'
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
          content: [
            'BP: 118/74 mmHg',
            'HR: 72 bpm',
            'Temp: afebrile',
            'SpO₂: 98% on room air'
          ]
        },
        {
          label: 'Right Elbow Inspection and Palpation',
          content: [
            'No swelling, erythema, or bruising',
            'Carrying angle normal',
            'Marked tenderness at the lateral epicondyle and ECRB origin — point tenderness 0.5 cm distal to the epicondyle',
            'No tenderness at medial epicondyle',
            'Olecranon — no bursitis',
            'No tenderness at the radial head'
          ]
        },
        {
          label: 'Range of Motion',
          content: [
            'Elbow flexion/extension: full, pain-free',
            'Forearm pronation/supination: full, no pain',
            'Wrist extension: full ROM but painful against resistance'
          ]
        },
        {
          label: 'Special Tests',
          content: [
            'Cozen&apos;s test: positive right — pain reproduced at lateral epicondyle on resisted wrist extension',
            'Mill&apos;s test: positive right — pain at lateral epicondyle on passive wrist flexion with elbow extended',
            'Elbow flexion test: negative bilaterally (no ulnar tingling at 1 minute)',
            'Tinel&apos;s at cubital tunnel: negative bilaterally',
            'Hook test: not performed (no anterior elbow symptoms or bruising)'
          ]
        },
        {
          label: 'Neurological Assessment',
          content: [
            'Sensation: intact over lateral forearm, dorsal hand, and all fingers bilaterally',
            'Intrinsic hand muscle strength: 5/5 bilaterally',
            'Grip strength (Jamar dynamometer): right 26 kg, left 34 kg — right significantly reduced',
            'Froment&apos;s sign: negative bilaterally'
          ]
        }
      ]
    },
    {
      letter: 'A',
      title: 'Assessment',
      fields: [
        {
          label: 'Primary Diagnosis',
          content: 'Right lateral epicondylalgia (extensor carpi radialis brevis tendinopathy) — 4-month history in a keyboard-intensive occupation, positive Cozen&apos;s and Mill&apos;s tests, characteristic point tenderness at ECRB origin, significantly reduced grip strength'
        },
        {
          label: 'Additional Considerations',
          content: [
            'Prior corticosteroid injection 6 weeks ago with minimal lasting benefit — consistent with evidence (Coombes et al 2013: worse long-term outcomes vs placebo)',
            'No cubital tunnel syndrome — elbow flexion test and Tinel&apos;s negative, no neurological symptoms',
            'No radial tunnel syndrome — tenderness at epicondyle, not 3–4 cm distal',
            'Occupational component significant — ergonomic assessment warranted',
            'Natural history: 80–90% resolve with appropriate conservative management at 12–18 months'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Physiotherapy — Progressive Tendon Loading',
          content: [
            'Refer to physiotherapist with experience in tendinopathy management',
            'High-load strength training (HSR) protocol: wrist extensor eccentric and concentric loading exercises — progressed over weeks',
            'Starting exercise: wrist extensor curls with resistance band or dumbbell, 3 × 15 repetitions, load increased fortnightly based on symptom response',
            'Manual therapy and soft tissue techniques as adjunct',
            'Education: pain during exercises is acceptable (up to 4/10) — does not indicate further damage'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Ibuprofen 400mg TDS with food — 2 weeks then reassess',
            'Paracetamol 1g QID regular as baseline analgesia',
            'Topical diclofenac gel — apply to lateral epicondyle TDS if systemic NSAIDs poorly tolerated'
          ]
        },
        {
          label: 'Ergonomic Assessment',
          content: [
            'Workplace ergonomic review — keyboard height, mouse position, chair height',
            'Reduce sustained gripping and forearm pronation activities during the acute phase',
            'Elbow counter-force brace (tennis elbow strap) — worn during provocative activities; reduces ECRB load at origin'
          ]
        },
        {
          label: 'Corticosteroid Injection',
          content: 'No further corticosteroid injection — prior injection provided only 2 weeks relief; repeat injection not indicated (Coombes et al 2013 evidence of worse long-term outcomes with injection)'
        },
        {
          label: 'Education',
          content: [
            'Explained tendinopathy physiology — not an inflammatory tear, a failed healing response',
            'Natural history: 80–90% of lateral epicondylalgia resolves with conservative management at 12–18 months',
            'Progressive loading is the most effective long-term treatment — not rest',
            'Short-term pain reduction with exercise is expected as tendons adapt',
            'Avoid activities that maintain a high-grip, pronated forearm position during the loading programme'
          ]
        },
        {
          label: 'Follow-Up',
          content: '6 weeks — reassess grip strength (target improvement towards 30 kg), review symptom response to physiotherapy loading programme, review work ergonomic changes'
        }
      ]
    }
  ]
};

export default function MskElbowSoapPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Elbow SOAP Note</h1>
          <p className="page-subtitle">Example clinical case: lateral epicondylalgia in an office worker</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/elbow" />

      <div className="content-body">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
