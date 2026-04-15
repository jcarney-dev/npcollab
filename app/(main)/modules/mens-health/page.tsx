import type { Metadata } from 'next';
import Link from 'next/link';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'Men\'s Health Clinical Module',
  description: 'Australian NP men\'s health module — prostate disease, erectile dysfunction, testosterone, mental health in men, and preventive care. SOAP notes and quiz.',
  openGraph: {
    title: 'Men\'s Health Clinical Module | NPCollab',
    description: 'Australian NP men\'s health module — prostate disease, erectile dysfunction, testosterone, mental health in men, and preventive care. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/mens-health',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/mens-health',
  },
};

export default function MensHealthOverviewPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔵 Men&apos;s Health</h1>
        <p>Erectile dysfunction, testosterone deficiency, BPH, prostate cancer screening, male mental health, and cardiovascular risk</p>
      </div>
      <ModuleTabs moduleId="mens-health" />

      <div className="content-prose">
        <p>Men&apos;s health encompasses a broad range of conditions that disproportionately affect male patients — many of whom are less likely to present for healthcare. Nurse Practitioners play a central role in proactive men&apos;s health, including cardiovascular risk reduction, sexual health, prostate health, and mental health screening. Australian men have a life expectancy approximately 4 years shorter than women, driven largely by preventable conditions.</p>

        <div className="highlight-box">
          <h4>⚠️ Red Flags — Urgent Assessment Required</h4>
          <ul>
            <li>Acute urinary retention — painful inability to void, distended bladder, requires urgent catheterisation</li>
            <li>Testicular torsion — sudden severe testicular pain, high riding testis, absent cremasteric reflex — surgical emergency</li>
            <li>Priapism — prolonged painful erection &gt;4 hours (ischaemic) — urological emergency, risk of permanent ED</li>
            <li>Haematospermia with weight loss, night sweats, or bone pain — investigate for malignancy</li>
            <li>Acute epididymo-orchitis with systemic sepsis — parenteral antibiotics and admission</li>
            <li>Fournier&apos;s gangrene — necrotising fasciitis of the perineum, rapidly progressive — immediate surgical referral</li>
          </ul>
        </div>

        <h2>Erectile Dysfunction</h2>
        <p>Erectile dysfunction affects approximately 50% of Australian men aged 40–70. It is predominantly vascular in aetiology and is now recognised as an independent marker of cardiovascular disease — men with ED have a 40% higher risk of major adverse cardiac events.</p>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔵</div><h4>Assessment</h4></div>
            <ul>
              <li>Duration and onset — gradual (organic) vs sudden (psychogenic/medication)</li>
              <li>Morning erections present — suggests psychogenic component</li>
              <li>Sexual history — libido, ejaculation, partner concerns</li>
              <li>Cardiovascular risk factors — HTN, T2DM, dyslipidaemia, smoking</li>
              <li>Medication review — antihypertensives, SSRIs, antipsychotics, finasteride</li>
              <li>Testosterone symptoms — fatigue, mood, reduced libido</li>
              <li>IIEF-5 questionnaire — validated severity scoring</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💊</div><h4>Management</h4></div>
            <ul>
              <li>Investigations: FBE, EUC, LFT, fasting lipids, BGL, HbA1c, testosterone (morning), prolactin</li>
              <li>First-line: PDE5 inhibitors — sildenafil, tadalafil, vardenafil</li>
              <li>Tadalafil 5mg daily — for men with concurrent BPH/LUTS</li>
              <li>Counsel: onset time, nitrate contraindication, avoid with alpha-blockers</li>
              <li>Address modifiable risk factors — weight loss, exercise, smoking cessation</li>
              <li>Refer: urology if PDE5 inhibitor failure, penile fibrosis, post-prostatectomy</li>
              <li>Psychological referral if significant psychogenic component</li>
            </ul>
          </div>
        </div>

        <h2>Testosterone Deficiency (Male Hypogonadism)</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🧬</div><h4>Diagnosis</h4></div>
            <ul>
              <li>Symptoms: low libido, fatigue, depressed mood, reduced muscle mass, ED, poor concentration, hot flushes</li>
              <li>Morning total testosterone — collect 0700–1000h (diurnal variation)</li>
              <li>Deficiency: &lt;8 nmol/L with symptoms</li>
              <li>Borderline: 8–12 nmol/L — repeat testing + assess symptoms</li>
              <li>Always check LH, FSH — distinguish primary from secondary hypogonadism</li>
              <li>Check SHBG — to calculate free testosterone if borderline total T</li>
              <li>Elevated prolactin — consider pituitary adenoma, MRI brain</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💉</div><h4>Testosterone Replacement Therapy</h4></div>
            <ul>
              <li>Options: topical gel (daily), IM injection (4–14 weekly), implant (6-monthly)</li>
              <li>Discuss: infertility (suppresses spermatogenesis), monitor PSA before starting</li>
              <li>Contraindications: prostate cancer, haematocrit &gt;0.54, severe OSA, pregnancy desire</li>
              <li>Monitor: haematocrit, PSA, lipids, testosterone levels, symptom response</li>
              <li>Review after 3 months — discontinue if no symptom benefit</li>
              <li>Endocrinology referral for secondary hypogonadism or pituitary pathology</li>
            </ul>
          </div>
        </div>

        <h2>Benign Prostatic Hyperplasia</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🟡</div><h4>Diagnosis and Scoring</h4></div>
            <ul>
              <li>LUTS: frequency, urgency, nocturia, weak stream, hesitancy, incomplete emptying, post-void dribble</li>
              <li>IPSS score: mild ≤7, moderate 8–19, severe ≥20</li>
              <li>DRE — prostate size, symmetry, consistency (nodule = refer)</li>
              <li>Post-void residual ultrasound (&gt;100mL = significant retention)</li>
              <li>PSA — discuss before ordering (see prostate cancer section)</li>
              <li>EUC — renal impairment from chronic obstruction</li>
              <li>Urinalysis — exclude infection, haematuria</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💊</div><h4>Management</h4></div>
            <ul>
              <li>Lifestyle: reduce evening fluids, avoid caffeine and alcohol, bladder training</li>
              <li>Alpha-1 blockers (tamsulosin 400mcg nocte) — first-line for symptom relief</li>
              <li>5-alpha reductase inhibitors (finasteride 5mg daily) — reduces prostate volume over 6 months</li>
              <li>Combination therapy (alpha-blocker + 5-ARI) — for moderate–severe LUTS with large prostate</li>
              <li>Tadalafil 5mg daily — if concurrent ED</li>
              <li>Urology referral: acute retention, IPSS ≥20, renal impairment, haematuria, failed medical therapy</li>
            </ul>
          </div>
        </div>

        <h2>Prostate Cancer Screening</h2>
        <p>Prostate cancer is the most commonly diagnosed cancer in Australian men. PSA-based screening remains controversial — NPs must provide balanced information to support shared decision-making.</p>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔴</div><h4>Screening Discussion</h4></div>
            <ul>
              <li>RACGP and Urological Society recommend informed consent before PSA testing</li>
              <li>Benefits: early detection, reduced mortality from high-risk disease</li>
              <li>Harms: overdiagnosis, overtreatment, biopsy risks, anxiety</li>
              <li>Discuss with men aged 50–69 (or from 40 with strong family history)</li>
              <li>Aboriginal and Torres Strait Islander men — consider from age 40</li>
              <li>If patient chooses testing — baseline PSA, then 2-yearly if normal</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>PSA Interpretation</h4></div>
            <ul>
              <li>Age-adjusted PSA norms (approximate): 40–49: &lt;2.5, 50–59: &lt;3.5, 60–69: &lt;4.5, 70+: &lt;6.5 ng/mL</li>
              <li>PSA &gt;4 ng/mL — refer urology for consideration of biopsy</li>
              <li>PSA velocity &gt;0.75 ng/mL/year — clinically significant even if within range</li>
              <li>Free:total PSA ratio &lt;0.25 — increases likelihood of malignancy</li>
              <li>PSA elevated by infection, BPH, recent ejaculation, DRE, urinary catheterisation</li>
              <li>Finasteride and dutasteride reduce PSA by ~50% — adjust interpretation</li>
            </ul>
          </div>
        </div>

        <h2>Male Mental Health and Cardiovascular Risk</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🧠</div><h4>Mental Health Screening</h4></div>
            <ul>
              <li>Men account for ~75% of suicide deaths in Australia</li>
              <li>Present atypically — irritability, anger, withdrawal, risk-taking</li>
              <li>PHQ-9 for depression, GAD-7 for anxiety</li>
              <li>AUDIT-C for risky alcohol use — 3-item validated screen</li>
              <li>Ask directly about suicidal ideation — does not increase risk</li>
              <li>Promote Beyondblue, Mensline, HeadsUp, RUOK resources</li>
              <li>Consider testosterone assessment if fatigue and low mood prominent</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">❤️</div><h4>Cardiovascular Risk</h4></div>
            <ul>
              <li>Calculate absolute 5-year CVD risk — AusCVDRisk calculator</li>
              <li>High risk (&gt;15%): statins + antihypertensive + lifestyle</li>
              <li>ED as CVD risk marker — investigate cardiac risk in all men with ED</li>
              <li>Princeton III Consensus — cardiovascular risk assessment before PDE5 inhibitor use</li>
              <li>Metabolic syndrome: waist &gt;94cm, TG &gt;1.7, HDL &lt;1.0, BP &gt;130/85, BGL &gt;5.6</li>
              <li>Lifestyle: Mediterranean diet, 150 min/week moderate exercise, smoking cessation</li>
            </ul>
          </div>
        </div>
      </div>

      <ModuleNav moduleId="mens-health" />

      <ModuleSponsorSlot moduleSlug="mens-health" />
    </>
  );
}
