import ModuleTabs from '@/components/ModuleTabs';

export default function DrugsAlcoholAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-icon">🍺</div>
        <div>
          <h1>Drugs &amp; Alcohol — Assessment</h1>
          <p>Substance use history, examination, and investigations</p>
        </div>
      </div>

      <ModuleTabs moduleId="drugs-alcohol" />

      <section>
        <h2>Substance Use History</h2>

        <h3>Screening Questions</h3>
        <ul>
          <li>Do you drink alcohol, and how much?</li>
          <li>Do you use any recreational drugs or substances?</li>
          <li>Do you use any medications not prescribed to you?</li>
          <li>Have you ever used intravenous drugs?</li>
        </ul>
        <p>Use validated screening tools:</p>
        <ul>
          <li><strong>AUDIT / AUDIT-C</strong> — alcohol</li>
          <li><strong>DAST-10</strong> (Drug Abuse Screening Test) — drugs</li>
          <li><strong>CAGE questionnaire</strong> — alcohol dependence screen</li>
        </ul>

        <h3>For Each Substance Identified</h3>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Use Pattern</h4>
            <ul>
              <li>Type of substance</li>
              <li>Route of use — oral, inhaled, injected, intranasal</li>
              <li>Frequency and quantity</li>
              <li>Age of first use and duration of current use</li>
              <li>Last use</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Dependence &amp; History</h4>
            <ul>
              <li>Any periods of abstinence — what helped?</li>
              <li>Previous treatment attempts</li>
              <li>Withdrawal history — withdrawal symptoms or seizures before?</li>
              <li>Dependence features — craving, tolerance, loss of control, withdrawal</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Harm Assessment</h4>
            <ul>
              <li>Sharing needles or injecting equipment — BBV risk</li>
              <li>Safe sex practices</li>
              <li>Driving under the influence</li>
              <li>Overdose history — when, where, was naloxone used?</li>
              <li>Employment and housing stability</li>
              <li>Child protection concerns — children in the household?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Mental Health Screen</h4>
            <ul>
              <li>Depression — PHQ-9</li>
              <li>Anxiety — GAD-7</li>
              <li>PTSD — comorbidity extremely common in substance use disorders</li>
              <li>Psychosis symptoms</li>
              <li>Suicide and self-harm risk — always ask</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Physical Examination</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>General</h4>
            <ul>
              <li>Nutritional state, hygiene</li>
              <li>Track marks, skin infections, injection sites</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Vital Signs</h4>
            <ul>
              <li>BP, HR (withdrawal features)</li>
              <li>Temperature</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Neurological</h4>
            <ul>
              <li>Tremor, confusion</li>
              <li>Nystagmus, ataxia (Wernicke&apos;s)</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Cardiovascular</h4>
            <ul>
              <li>Murmurs (endocarditis in PWID)</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Abdomen</h4>
            <ul>
              <li>Hepatomegaly, liver tenderness (alcohol)</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Mental State</h4>
            <ul>
              <li>Intoxication, withdrawal, psychosis</li>
              <li>CIWA-Ar score if alcohol withdrawal suspected</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Investigations</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Haematology &amp; Biochemistry</h4>
            <ul>
              <li>FBE — anaemia (alcohol), infection (PWID)</li>
              <li>LFTs — GGT elevated in alcohol use, hepatitis</li>
              <li>EUC — electrolytes in alcohol withdrawal</li>
              <li>Blood glucose — hypoglycaemia in alcohol intoxication</li>
              <li>MCV — macrocytosis consistent with alcohol use</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Blood-Borne Virus Screening</h4>
            <ul>
              <li>Hepatitis B surface antigen and antibody</li>
              <li>Hepatitis C antibody and RNA</li>
              <li>HIV serology</li>
              <li>STI screen if relevant</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Other</h4>
            <ul>
              <li>Urine drug screen — confirms substances present (not quantitative)</li>
              <li>Breathalyser — if available and clinically indicated</li>
              <li>CIWA-Ar score — alcohol withdrawal severity assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement.</p>
      </div>
    </div>
  );
}
