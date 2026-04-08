import type { Metadata } from 'next';
import Link from 'next/link';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'Cardiac | Clinical Modules',
  description: 'Chest pain differentials, ACS, heart failure, arrhythmias, hypertension, and ECG basics',
};

export default function CardiacOverviewPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>❤️ Cardiac</h1>
        <p>Chest pain differentials, ACS, heart failure, arrhythmias, hypertension, and ECG basics</p>
      </div>
      <ModuleTabs moduleId="cardiac" />

      <div className="content-prose">
        <h2>Clinical Overview</h2>
        <p>Cardiac presentations range from benign musculoskeletal chest wall pain to immediately life-threatening acute coronary syndromes. As a Nurse Practitioner, your primary role is rapid risk stratification — identifying who needs immediate emergency transfer, who needs same-day cardiology review, and who can be safely managed in primary care.</p>

        <div className="highlight-box">
          <h4>⚠️ Red Flags — Call 000 / Emergency Transfer Immediately</h4>
          <ul>
            <li>Chest pain with haemodynamic instability (hypotension, diaphoresis, pallor)</li>
            <li>ST elevation on ECG — STEMI until proven otherwise</li>
            <li>Suspected aortic dissection (tearing pain radiating to back, unequal BP)</li>
            <li>Acute pulmonary oedema (severe dyspnoea, orthopnoea, frothy sputum)</li>
            <li>Sustained ventricular tachycardia or ventricular fibrillation</li>
            <li>Complete heart block or haemodynamically unstable bradycardia</li>
            <li>Cardiac tamponade (Beck's triad: hypotension, JVD, muffled heart sounds)</li>
            <li>New onset chest pain with troponin rise</li>
          </ul>
        </div>

        <h2>Chest Pain — The Critical Differentials</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🚨</div><h4>Must Not Miss</h4></div>
            <ul>
              <li>STEMI — ST elevation, new LBBB</li>
              <li>NSTEMI — troponin rise, no ST elevation</li>
              <li>Unstable angina — ACS without troponin rise</li>
              <li>Aortic dissection — tearing, radiates to back</li>
              <li>Pulmonary embolism — pleuritic, dyspnoea, risk factors</li>
              <li>Tension pneumothorax — deviated trachea, absent breath sounds</li>
              <li>Cardiac tamponade — Beck's triad</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🩺</div><h4>Common Benign Causes</h4></div>
            <ul>
              <li>Musculoskeletal chest wall pain (most common)</li>
              <li>Costochondritis — reproducible on palpation</li>
              <li>GORD and oesophageal spasm</li>
              <li>Anxiety and panic disorder</li>
              <li>Pleuritis — sharp, positional, pleuritic</li>
              <li>Herpes zoster (pre-rash phase)</li>
              <li>Stable angina — predictable, relieved by GTN</li>
            </ul>
          </div>
        </div>

        <h2>Acute Coronary Syndromes</h2>
        <p>ACS encompasses STEMI, NSTEMI, and unstable angina — all representing myocardial ischaemia from atherosclerotic plaque rupture or erosion with or without thrombosis.</p>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">❤️</div><h4>STEMI</h4></div>
            <ul>
              <li>ST elevation ≥1mm in ≥2 contiguous limb leads</li>
              <li>ST elevation ≥2mm in ≥2 contiguous precordial leads</li>
              <li>New LBBB with ischaemic symptoms = STEMI equivalent</li>
              <li>Action: Call 000 immediately — time is myocardium</li>
              <li>Give aspirin 300mg, GTN if SBP &gt;90mmHg</li>
              <li>Do NOT delay transfer for further workup</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔶</div><h4>NSTEMI / Unstable Angina</h4></div>
            <ul>
              <li>NSTEMI: ischaemic symptoms + troponin rise, no ST elevation</li>
              <li>Unstable angina: ischaemic symptoms, no troponin rise</li>
              <li>ECG: ST depression, T-wave inversion, or normal</li>
              <li>Serial troponins at 0h and 2–3h (high sensitivity)</li>
              <li>HEART score or TIMI score for risk stratification</li>
              <li>Transfer to ED for cardiology review</li>
            </ul>
          </div>
        </div>

        <h2>Heart Failure</h2>
        <p>Heart failure affects approximately 1–2% of the Australian population and is a leading cause of hospitalisation. NPs play a central role in chronic HF management in primary care.</p>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💧</div><h4>HFrEF vs HFpEF</h4></div>
            <ul>
              <li>HFrEF: EF &lt;40% — systolic dysfunction</li>
              <li>HFmrEF: EF 40–49% — mildly reduced</li>
              <li>HFpEF: EF ≥50% — diastolic dysfunction</li>
              <li>Diagnosis: symptoms + signs + echo confirmation</li>
              <li>BNP or NT-proBNP elevated in decompensation</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💊</div><h4>HFrEF Pharmacotherapy</h4></div>
            <ul>
              <li>ACEi or ARB (or ARNI — sacubitril/valsartan)</li>
              <li>Beta-blocker (carvedilol, metoprolol, bisoprolol)</li>
              <li>MRA (spironolactone or eplerenone)</li>
              <li>SGLT2 inhibitor (empagliflozin, dapagliflozin)</li>
              <li>Loop diuretic (frusemide) for fluid management</li>
              <li>The four pillars — titrate to maximum tolerated dose</li>
            </ul>
          </div>
        </div>

        <h2>Atrial Fibrillation</h2>
        <p>AF is the most common sustained cardiac arrhythmia in Australia, affecting approximately 2% of the population. Key NP decisions involve rate vs rhythm control, anticoagulation, and cardioversion timing.</p>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">〰️</div><h4>Classification</h4></div>
            <ul>
              <li>Paroxysmal — terminates spontaneously within 7 days</li>
              <li>Persistent — sustained beyond 7 days</li>
              <li>Long-standing persistent — beyond 12 months</li>
              <li>Permanent — rate control only, no rhythm control attempted</li>
              <li>First detected — first documented episode</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🩸</div><h4>Anticoagulation — CHA₂DS₂-VASc</h4></div>
            <ul>
              <li>C — Congestive heart failure (+1)</li>
              <li>H — Hypertension (+1)</li>
              <li>A₂ — Age ≥75 (+2)</li>
              <li>D — Diabetes (+1)</li>
              <li>S₂ — Stroke/TIA/thromboembolism (+2)</li>
              <li>V — Vascular disease (+1)</li>
              <li>A — Age 65–74 (+1)</li>
              <li>Sc — Sex category female (+1)</li>
              <li>Score ≥2 in males, ≥3 in females → DOAC recommended</li>
            </ul>
          </div>
        </div>

        <h2>Hypertension</h2>
        <p>Hypertension is the most modifiable cardiovascular risk factor and one of the most common conditions managed by NPs in primary care. Australian targets align with the 2023 Heart Foundation Guidelines.</p>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>Classification (Heart Foundation 2023)</h4></div>
            <ul>
              <li>Normal: &lt;120/80 mmHg</li>
              <li>High normal: 120–129 / &lt;80 mmHg</li>
              <li>Grade 1: 130–139 / 80–89 mmHg</li>
              <li>Grade 2: 140–159 / 90–99 mmHg</li>
              <li>Grade 3: ≥160 / ≥100 mmHg</li>
              <li>Hypertensive urgency: ≥180/110, no end-organ damage</li>
              <li>Hypertensive emergency: elevated BP + end-organ damage</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💊</div><h4>First-Line Antihypertensives</h4></div>
            <ul>
              <li>ACEi or ARB — first line, especially with diabetes or CKD</li>
              <li>CCB (amlodipine) — effective across all age groups</li>
              <li>Thiazide diuretic (indapamide) — especially elderly</li>
              <li>Combination therapy often required to reach target</li>
              <li>Target: &lt;130/80 mmHg in most patients</li>
              <li>Beta-blockers — not first line unless HF or post-MI</li>
            </ul>
          </div>
        </div>

        <h2>ECG Interpretation — Basics</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📈</div><h4>Systematic Approach</h4></div>
            <ul>
              <li>Rate — 300 / number of large squares between R waves</li>
              <li>Rhythm — regular or irregular? P before every QRS?</li>
              <li>Axis — normal, left or right deviation</li>
              <li>P wave — present, morphology, relation to QRS</li>
              <li>PR interval — normal 120–200ms (3–5 small squares)</li>
              <li>QRS — normal &lt;120ms; broad = BBB or ventricular origin</li>
              <li>ST segment — elevation or depression from isoelectric line</li>
              <li>T wave — upright in most leads; inversion may indicate ischaemia</li>
              <li>QTc — prolonged if &gt;440ms male, &gt;460ms female</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⚡</div><h4>Pattern Recognition</h4></div>
            <ul>
              <li>AF — irregularly irregular, no P waves</li>
              <li>STEMI — convex ST elevation, reciprocal changes</li>
              <li>LBBB — broad QRS, dominant S in V1, broad R in V6</li>
              <li>RBBB — broad QRS, RSR' in V1, slurred S in V6</li>
              <li>LVH — Sokolov-Lyon: S in V1 + R in V5/V6 &gt;35mm</li>
              <li>Complete heart block — P and QRS independent rates</li>
              <li>PE — S1Q3T3 pattern, sinus tachycardia most common</li>
              <li>Hyperkalaemia — peaked T waves, widened QRS, sine wave</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <p>👉 Continue to the <Link href="/modules/cardiac/assessment/">Assessment tab</Link> for targeted cardiac history and examination steps.</p>
        </div>
      </div>
    
      <ModuleSponsorSlot moduleSlug="cardiac" />
    </>
  );
}
