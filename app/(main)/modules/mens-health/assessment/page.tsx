import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: "Assessment | Men's Health Module",
  description: "Men's health history, examination, and investigations for Nurse Practitioners",
};

export default function MensHealthAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔵 Men&apos;s Health</h1>
        <p>Erectile dysfunction, testosterone deficiency, BPH, prostate cancer screening, male mental health, and cardiovascular risk</p>
      </div>
      <ModuleTabs moduleId="mens-health" />

      <div className="content-prose">
        <h2>Men&apos;s Health History</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">❓</div><h4>Sexual Health — Key Questions</h4></div>
            <ul>
              <li>Are you having any problems with erections or sexual function?</li>
              <li>How long has this been a concern?</li>
              <li>Are morning erections present?</li>
              <li>Is the problem with achieving or maintaining an erection, or both?</li>
              <li>Has your libido (sex drive) changed?</li>
              <li>Any concerns about ejaculation — premature, delayed, absent, or painful?</li>
              <li>Do you have a current partner? Are there relationship concerns?</li>
              <li>IIEF-5: validated 5-item questionnaire for ED severity</li>
              <li>Has this affected your confidence or mood?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🟡</div><h4>Urinary Symptoms (LUTS) — IPSS</h4></div>
            <ul>
              <li>Over the past month, how often have you had incomplete emptying?</li>
              <li>How often have you had to urinate within 2 hours of finishing?</li>
              <li>How often have you stopped and started several times when urinating?</li>
              <li>How often have you found it difficult to postpone urination?</li>
              <li>How often have you had a weak stream?</li>
              <li>How often have you had to push or strain to begin urination?</li>
              <li>How many times did you typically get up at night to urinate (nocturia)?</li>
              <li>IPSS score: mild ≤7, moderate 8–19, severe ≥20</li>
              <li>Post-void dribbling, haematuria, dysuria?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🧬</div><h4>Testosterone Deficiency Symptoms</h4></div>
            <ul>
              <li>Fatigue, low energy, reduced motivation — persistent or worsening?</li>
              <li>Low mood, irritability, or depressive symptoms?</li>
              <li>Reduced libido — gradual decline?</li>
              <li>Changes in muscle bulk or strength?</li>
              <li>Increased body fat — central distribution?</li>
              <li>Hot flushes or sweats?</li>
              <li>Poor concentration, brain fog?</li>
              <li>Reduced body hair, gynaecomastia?</li>
              <li>Duration of symptoms and impact on daily function</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📋</div><h4>General Men&apos;s Health History</h4></div>
            <ul>
              <li>Cardiovascular risk factors: HTN, T2DM, hyperlipidaemia, smoking, family history</li>
              <li>Mental health: depression screen (PHQ-9), alcohol (AUDIT-C), anxiety (GAD-7)</li>
              <li>Medication review: antihypertensives, SSRIs, antipsychotics, finasteride, steroids</li>
              <li>Recreational drug use: anabolic steroids, stimulants</li>
              <li>STI risk: number of partners, condom use, MSM, HIV testing history</li>
              <li>Fertility concerns: trying to conceive, previous children?</li>
              <li>Family history: prostate cancer, cardiovascular disease, haematological malignancy</li>
              <li>Testicular trauma, orchitis, undescended testis, vasectomy</li>
            </ul>
          </div>
        </div>

        <h2>Physical Examination</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔍</div><h4>General and Cardiovascular</h4></div>
            <ul>
              <li>BMI and waist circumference (metabolic syndrome: &gt;94cm Caucasian, &gt;90cm Asian)</li>
              <li>Blood pressure — bilateral, sitting and standing</li>
              <li>Heart rate and rhythm</li>
              <li>Features of hypogonadism: reduced body hair, gynaecomastia, reduced testicular volume</li>
              <li>Signs of Cushing&apos;s or thyroid disease</li>
              <li>Peripheral vascular examination — assess vascular contribution to ED</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🩺</div><h4>Genital Examination</h4></div>
            <ul>
              <li>Penis: phimosis, Peyronie&apos;s disease (palpable plaques), meatal stenosis</li>
              <li>Testes: size, consistency, tenderness, lumps — normal 15–25mL by orchidometer</li>
              <li>Epididymis: tenderness, thickening, cysts</li>
              <li>Cremasteric reflex — absent in testicular torsion</li>
              <li>Varicocele: examination standing — bag of worms appearance/feel in left scrotum</li>
              <li>Inguinal hernia — examine while standing and coughing</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔬</div><h4>Digital Rectal Examination</h4></div>
            <ul>
              <li>Offer DRE when clinically indicated — urinary symptoms, elevated PSA, &gt;50yo</li>
              <li>Position: left lateral or standing leaning forward</li>
              <li>Prostate: size (estimate in grams), symmetry, consistency (rubbery = normal)</li>
              <li>Hard, irregular, or nodular areas — refer urgently to urology</li>
              <li>Tenderness — suggests prostatitis</li>
              <li>Bogginess — acute bacterial prostatitis, avoid vigorous massage</li>
              <li>Median sulcus: present in normal prostate, may be obliterated in large gland</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>Investigations to Order</h4></div>
            <ul>
              <li>FBE, EUC, LFT, fasting lipids, HbA1c, BGL</li>
              <li>Total testosterone (morning, 0700–1000h) — if deficiency suspected</li>
              <li>LH, FSH, prolactin — mandatory with low testosterone</li>
              <li>SHBG — to calculate free testosterone if borderline total T</li>
              <li>PSA — after informed consent discussion</li>
              <li>MSU — if LUTS or prostatitis suspected</li>
              <li>STI screen: first-pass urine PCR (chlamydia, gonorrhoea) ± pharyngeal/rectal swabs</li>
              <li>Scrotal ultrasound — any testicular lump, varicocele, epididymo-orchitis</li>
              <li>Post-void residual ultrasound — BPH assessment</li>
              <li>Semen analysis — if fertility concern</li>
            </ul>
          </div>
        </div>

        <h2>Validated Assessment Tools</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🎯</div><h4>IIEF-5 (Erectile Function)</h4></div>
            <ul>
              <li>5 questions scored 1–5 each (maximum 25)</li>
              <li>22–25: no ED</li>
              <li>17–21: mild ED</li>
              <li>12–16: mild to moderate ED</li>
              <li>8–11: moderate ED</li>
              <li>5–7: severe ED</li>
              <li>Use for baseline assessment and monitoring treatment response</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📋</div><h4>AUDIT-C (Alcohol)</h4></div>
            <ul>
              <li>Q1: How often do you have a drink containing alcohol?</li>
              <li>Q2: How many standard drinks on a typical day when drinking?</li>
              <li>Q3: How often do you have 6 or more standard drinks on one occasion?</li>
              <li>Score ≥3 in men — positive screen for hazardous drinking</li>
              <li>Follow with brief intervention (5 As) or motivational interviewing</li>
              <li>NHMRC: no more than 10 standard drinks/week, &lt;4 on any one day</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
