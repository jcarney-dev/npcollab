import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: "SOAP Note | Men's Health Module",
  description: "Example SOAP note for erectile dysfunction and testosterone deficiency assessment",
};

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      { label: 'Presenting Complaint', content: '54-year-old male presents requesting help with erectile dysfunction of approximately 18 months duration.' },
      { label: 'History of Presenting Complaint', content: 'Progressive difficulty achieving and maintaining erections over the past 18 months. Morning erections have been absent for approximately 6 months. Describes low libido for the same period. Partner is aware and supportive. No ejaculatory dysfunction. IIEF-5 score completed in waiting room: 10/25 (moderate ED).' },
      { label: 'Associated Symptoms', content: [
        'Fatigue — persistent, present most days for 12 months, worsening',
        'Mood low — not formally diagnosed with depression, denies suicidal ideation',
        'Reduced muscle bulk noticed over the last 2 years',
        'Increased central body fat despite no major dietary change',
        'Occasional hot flushes — 2–3 per week',
        'Sleep disrupted — 6 hours per night, denies significant OSA symptoms'
      ]},
      { label: 'Relevant Medical History', content: 'Hypertension (diagnosed 3 years ago, on amlodipine 5mg and perindopril 5mg). No known diabetes. No previous prostate issues. No pelvic trauma or surgery. No previous androgen therapy.' },
      { label: 'Medications', content: 'Amlodipine 5mg daily, perindopril 5mg daily, rosuvastatin 10mg daily. No SSRIs or antipsychotics. No anabolic steroid use. Occasional ibuprofen.' },
      { label: 'Social History', content: 'Non-smoker. Drinks 14–16 standard drinks per week (2 beers most evenings + more on weekends). BMI 29. Sedentary occupation. Not currently exercising.' },
      { label: "Patient Concerns", content: '"I\'m not sure if this is just getting older or if something is wrong. I\'m also worried about whether I might need to check my prostate."' }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      { label: 'Vital Signs', content: 'BP 134/82 mmHg | HR 74 bpm regular | Weight 92kg | Height 178cm | BMI 29 | Waist circumference 101cm' },
      { label: 'General Appearance', content: 'Well-appearing, mildly overweight, no obvious Cushingoid features. No gynaecomastia palpable. Mild reduction in body hair noted.' },
      { label: 'Cardiovascular Examination', content: 'Heart sounds dual, no murmurs. Peripheral pulses present bilaterally. No peripheral oedema.' },
      { label: 'Genital Examination', content: [
        'Penis: normal, no plaques, no phimosis',
        'Testes: bilateral, palpable — left 12mL, right 13mL (mildly reduced volume)',
        'No masses, no epididymal tenderness',
        'Cremasteric reflex present bilaterally',
        'No varicocele detected'
      ]},
      { label: 'Prostate (DRE)', content: 'Prostate: smooth, symmetrical, soft, approximately 25mL. Median sulcus present. No nodules. Non-tender. Consistent with mildly enlarged prostate.' },
      { label: 'Investigations (today)', content: [
        'FBE: Hb 148, MCV 89, WCC 7.2, Plt 224 — normal',
        'EUC: Cr 84, eGFR 88 — normal',
        'Fasting lipids: Total chol 5.2, LDL 3.1, HDL 1.0, TG 2.1 — borderline',
        'HbA1c 5.8% — prediabetes range',
        'Total testosterone (0815h): 7.2 nmol/L — low',
        'LH 6.2 IU/L (normal range 1.7–8.6) — normal (suggests primary hypogonadism)',
        'FSH 8.4 IU/L (normal range 1.5–12.4) — normal',
        'Prolactin 220 mIU/L — normal',
        'SHBG 38 nmol/L — normal',
        'PSA 1.4 ng/mL — within normal range for age',
        'MSU — clear, no infection'
      ]}
    ]
  },
  {
    letter: 'A',
    title: 'Assessment',
    fields: [
      { label: 'Primary Diagnosis', content: 'Testosterone deficiency (primary hypogonadism) — total testosterone 7.2 nmol/L with symptoms of hypogonadism (E29.1)' },
      { label: 'Secondary Diagnosis', content: 'Erectile dysfunction — moderate severity (IIEF-5 10/25), likely multifactorial: hypogonadism, vascular risk factors, alcohol excess, psychological component (N52.9)' },
      { label: 'Contributing Factors', content: [
        'Prediabetes (HbA1c 5.8%) — increases ED and hypogonadism risk',
        'Central obesity (waist 101cm) — metabolic syndrome component',
        'Hypertriglyceridaemia (TG 2.1) — metabolic syndrome component',
        'Hazardous alcohol use (AUDIT-C: 5/12 — positive screen)',
        'Physical inactivity — contributes to testosterone suppression and cardiovascular risk',
        'Mild normocytic relative anaemia — consistent with testosterone deficiency'
      ]},
      { label: 'Prostate Assessment', content: 'PSA 1.4 ng/mL — within normal range. DRE: benign, no features of malignancy. IPSS not formally scored today — mild LUTS reported (nocturia x1, occasional hesitancy). No acute retention or haematuria. Prostate cancer screening discussed and informed consent documented — patient wishes to continue annual PSA monitoring.' }
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      { label: 'Testosterone Replacement Therapy', content: [
        'TRT initiated: Androgel 50mg/5g sachet — apply to shoulders/upper arms daily',
        'Counsel: do not apply to genitals; wash hands; avoid skin contact with women/children until dry',
        'Discuss: infertility risk — patient not seeking further children (confirmed)',
        'Repeat total testosterone in 6–8 weeks (trough, pre-morning application)',
        'Haematocrit to be checked at 3 months (TRT increases RBC production)',
        'PSA recheck at 3 months — TRT can unmask subclinical prostate cancer'
      ]},
      { label: 'Erectile Dysfunction', content: [
        'Tadalafil 5mg daily prescribed — also addresses mild BPH symptoms',
        'Counsel: takes 2–4 weeks for daily dosing to reach effect; avoid with nitrates',
        'Review response at 6-week follow-up',
        'Advise: addressing testosterone deficiency and lifestyle factors may improve response'
      ]},
      { label: 'Lifestyle and Modifiable Risk Factors', content: [
        'Alcohol: AUDIT-C positive — brief intervention delivered. Target &lt;10 standard drinks/week. Consider SMART Recovery or GP Shared Care if unable to reduce',
        'Physical activity: target 150 minutes moderate exercise per week — discuss benefits for testosterone, ED, weight, and mood',
        'Diet: Mediterranean diet recommended. Referral to dietitian (HbA1c 5.8% — prediabetes)',
        'Weight loss: 10% body weight reduction can improve testosterone levels by 1–2 nmol/L',
        'Smoking: non-smoker — reinforce'
      ]},
      { label: 'Mental Health', content: [
        'PHQ-9 administered today: score 8 (mild depression)',
        'Discussed relationship between testosterone deficiency, alcohol use, and mood',
        'Plan: reassess PHQ-9 at 6-week review after TRT commenced',
        'If mood not improved: consider referral to psychology or GP for MHC Plan',
        'Provided Beyondblue and Mensline resources'
      ]},
      { label: 'Follow-up and Safety Netting', content: [
        'Review in 6–8 weeks: testosterone levels, haematocrit, PSA, IIEF-5, PHQ-9, BP',
        'Urgent return: any acute urinary retention, haematuria, testicular pain, priapism',
        'Escalation to endocrinology if testosterone does not normalise on TRT or if secondary hypogonadism suspected',
        'GP letter sent with full assessment and management plan',
        'Prostate Cancer Foundation of Australia patient information provided'
      ]}
    ]
  }
];

export default function MensHealthSoapPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔵 Men&apos;s Health</h1>
        <p>Erectile dysfunction, testosterone deficiency, BPH, prostate cancer screening, male mental health, and cardiovascular risk</p>
      </div>
      <ModuleTabs moduleId="mens-health" />

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Example SOAP Note — Erectile Dysfunction and Testosterone Deficiency</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Sample: 54-year-old male presenting with ED and symptoms of hypogonadism. Click each section to expand.</p>
      </div>
      <SoapNote title="Erectile Dysfunction — Testosterone Deficiency Assessment" sections={sections} />
      <div className="info-box" style={{ marginTop: '24px' }}>
        <p>⚠️ <strong>Disclaimer:</strong> This SOAP note is provided for educational purposes only. Always apply your own clinical judgement and consult current Australian guidelines (Therapeutic Guidelines, Endocrine Society of Australia) when managing testosterone deficiency and erectile dysfunction.</p>
      </div>
    </>
  );
}
