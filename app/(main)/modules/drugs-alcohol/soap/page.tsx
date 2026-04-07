import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

export default function DrugsAlcoholSoapPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-icon">🍺</div>
        <div>
          <h1>Drugs &amp; Alcohol — SOAP Note</h1>
          <p>Example consultation: 42-year-old with severe alcohol use disorder</p>
        </div>
      </div>

      <ModuleTabs moduleId="drugs-alcohol" />

      <SoapNote
        title="42-Year-Old Male — Alcohol Use Disorder Seeking Help"
        meta="AUDIT 36/40 | CIWA-Ar 8 (mild withdrawal) | Previous withdrawal seizure"
        sections={[
          {
            letter: 'S',
            title: 'Subjective',
            fields: [
              {
                label: 'Presenting Complaint',
                content: '42-year-old male presents requesting help to stop drinking.',
              },
              {
                label: 'History',
                content: [
                  'Heavy drinking for approximately 15 years.',
                  'Currently consuming approximately 15 standard drinks daily — starting in the morning to prevent shakiness.',
                  'Attempted to stop twice before — experienced severe shaking, sweating, and on one occasion a seizure at day 2 of abstinence (12 months ago).',
                  'Lost his driver\'s licence 6 months ago due to drink driving. Wife has threatened to leave. Two children aged 8 and 11 at home.',
                ],
              },
              {
                label: 'Screening',
                content: 'AUDIT Score: 36/40 (severe AUD)',
              },
              {
                label: 'Mental Health',
                content: 'Low mood, not sleeping well. PHQ-9: 14 (moderate depression). Denies active suicidal ideation currently — has had passive thoughts in the past. No psychosis.',
              },
              {
                label: 'Substances',
                content: 'Alcohol only. Smokes 15 cigarettes per day for 20 years. No illicit drugs.',
              },
              {
                label: 'Patient Goals',
                content: 'Wants to stop completely. Motivated by family situation. Understands he cannot stop abruptly at home given seizure history.',
              },
            ],
          },
          {
            letter: 'O',
            title: 'Objective',
            fields: [
              {
                label: 'Vital Signs',
                content: 'BP 158/96 | HR 96 | Temp 37.1°C',
              },
              {
                label: 'General',
                content: 'Mildly tremulous hands at rest. Mildly diaphoretic. Alert and oriented. CIWA-Ar score: 8 (mild withdrawal — last drink 4 hours ago).',
              },
              {
                label: 'Abdominal',
                content: 'Mild hepatomegaly, non-tender. No ascites. No spider naevi.',
              },
              {
                label: 'Neurological',
                content: 'Mild peripheral tremor. No nystagmus. No ataxia. No asterixis.',
              },
              {
                label: 'Investigations',
                content: [
                  'GGT: 248 (markedly elevated)',
                  'ALT: 68, AST: 95 (elevated, AST:ALT >2:1 consistent with alcoholic liver disease)',
                  'MCV: 102 (macrocytosis consistent with alcohol use)',
                  'EUC: Na 136, K 3.4 (low-normal — replete), Cr normal',
                  'Blood glucose: 5.8',
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
                  '1. Severe alcohol use disorder with physical dependence — seizure history on previous withdrawal — HIGH RISK for complicated withdrawal',
                  '2. Likely alcoholic liver disease — elevated GGT, AST>ALT, macrocytosis',
                  '3. Moderate depression — likely partly alcohol-related but requires independent assessment after withdrawal',
                  '4. Thiamine deficiency risk — alcohol-dependent patient',
                ],
              },
            ],
          },
          {
            letter: 'P',
            title: 'Plan',
            fields: [
              {
                label: 'Withdrawal Management',
                content: [
                  'Given seizure history and severity of dependence — inpatient detoxification strongly recommended. Discussed and agreed.',
                  'Refer to local hospital alcohol and drug service or inpatient detox unit today.',
                  'If inpatient unavailable — community-managed withdrawal with DAILY review and CIWA-Ar monitoring, family support, strict safety netting.',
                ],
              },
              {
                label: 'Thiamine',
                content: [
                  'Thiamine 300mg IV immediately (given in clinic today) — do not wait.',
                  'Arrange thiamine 100mg oral TDS ongoing after initial IV course.',
                  'Education to family regarding Wernicke\'s signs.',
                ],
              },
              {
                label: 'Pharmacotherapy for Withdrawal (detox team)',
                content: [
                  'Symptom-triggered diazepam protocol based on CIWA-Ar score.',
                  'Thiamine supplementation throughout.',
                ],
              },
              {
                label: 'Pharmacotherapy for Maintaining Abstinence (post-detox)',
                content: [
                  'Naltrexone 50mg daily — reduces craving; or acamprosate 666mg TDS — reduces protracted withdrawal. Discuss after medically stable.',
                ],
              },
              {
                label: 'Mental Health',
                content: [
                  'Depression assessment to be repeated at 4 weeks post-detox — much may be alcohol-related.',
                  'Low-dose antidepressant to be considered if depression persists after abstinence established.',
                ],
              },
              {
                label: 'Referral',
                content: [
                  'Alcohol and Drug Service for inpatient detoxification today.',
                  'Alcoholics Anonymous / SMART Recovery — peer support.',
                  'Family counselling — wife involved with consent.',
                ],
              },
              {
                label: 'Safety Planning',
                content: [
                  'Emergency contacts given — 24-hour alcohol helpline 1800 250 015.',
                  'Wife aware of Wernicke\'s warning signs.',
                ],
              },
              {
                label: 'Review',
                content: 'After discharge from detox — within 1 week.',
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
