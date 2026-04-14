import type { Metadata } from 'next';
import SoapNote from '@/components/SoapNote';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: "Women's Health — SOAP Note" };

const sections = [
  {
    letter: 'S',
    title: 'Subjective',
    fields: [
      {
        label: 'Presenting Complaint',
        content: '42-year-old woman presents requesting review of her periods. Over the past 12 months her cycles have become increasingly heavy and irregular, with flooding, passage of large clots, and dysmenorrhoea. She is soaking through 6–8 pads per day on the first 2 days. She is exhausted and has been missing work. She was previously on the COCP (Microgynon) but ceased 18 months ago as she and her partner decided their family was complete after two children.'
      },
      {
        label: 'Menstrual History',
        content: 'Menarche age 12. Prior to cessation of COCP: regular 28-day cycles, light flow, no dysmenorrhoea (attributed to COCP). Since ceasing: cycles 21–35 days (variable), 7–9 days of bleeding, heavy flow days 1–3 with flooding and clots described as "golf ball sized." Dysmenorrhoea — cramping pain 7/10 on day 1–2, requiring ibuprofen 400mg TDS (partial relief). Intermenstrual bleeding: none. Post-coital bleeding: none. LMP: 3 weeks ago.'
      },
      {
        label: 'Reproductive and Gynaecological History',
        content: 'G2P2 — two vaginal deliveries, no complications. No previous gynaecological surgery. No history of fibroids, endometriosis, or ovarian cysts (no prior imaging). Last cervical screening test: 2 years ago — HPV not detected. Pap smears previously always normal. Not planning further pregnancies.'
      },
      {
        label: 'Contraception',
        content: 'No current contraception — partner has not had vasectomy. Not currently trying to conceive. Interested in effective contraception now that family is complete.'
      },
      {
        label: 'Menopause Assessment',
        content: 'No vasomotor symptoms. Periods still regular enough that perimenopause is possible at 42 but not expected. No vaginal dryness. Mood and cognition unchanged.'
      },
      {
        label: 'Systemic Review',
        content: 'Fatigue — significant, affecting work and family. No weight loss. No galactorrhoea. No thyroid symptoms (no cold intolerance, constipation, hair loss). No bruising or easy bleeding outside of periods. No family history of bleeding disorders. No personal or family history of VTE.'
      },
      {
        label: 'Medications and Allergies',
        content: 'Ibuprofen 400mg PRN (dysmenorrhoea). Iron tablets — commenced 2 weeks ago by GP. No regular medications. NKDA. Non-smoker. Minimal alcohol (1–2 standard drinks per week).'
      },
      {
        label: 'Social History',
        content: 'Works as a primary school teacher — missing work during heavy days is affecting her professionally. Married. Two children aged 8 and 10. No significant psychosocial stressors.'
      }
    ]
  },
  {
    letter: 'O',
    title: 'Objective',
    fields: [
      {
        label: 'Vital Signs',
        content: 'BP 118/74 mmHg | HR 84 bpm | Weight 71 kg | Height 165 cm | BMI 26.1 kg/m²'
      },
      {
        label: 'General Appearance',
        content: 'Well-appearing woman. Mild conjunctival pallor. No signs of thyroid disease. No hirsutism or acne.'
      },
      {
        label: 'Abdominal Examination',
        content: 'Soft, non-tender. No palpable uterine or adnexal mass. No hepatosplenomegaly. No scars.'
      },
      {
        label: 'Pelvic Examination',
        content: [
          'External genitalia: normal.',
          'Speculum: vaginal walls normal, no discharge, no lesions. Cervix appears normal, no ectropion, no visible lesions, no bleeding on contact. Cervical os closed.',
          'Bimanual: uterus anteverted, slightly bulky (consistent with size of 8-week uterus), mild tenderness on palpation — no cervical motion tenderness. Left adnexa — mild tenderness, no discrete mass palpable. Right adnexa — non-tender, no mass.'
        ]
      },
      {
        label: 'Investigations',
        content: [
          'FBC: Hb 99 g/L (iron deficiency anaemia — low), MCV 72 fL (microcytic), Ferritin 6 μg/L (severely depleted).',
          'TFTs: TSH 2.1 mIU/L — normal.',
          'Urine hCG: negative.',
          'Transvaginal pelvic ultrasound (performed today): Uterus 9.8 × 6.2 × 5.4 cm (mildly enlarged). Myometrium: heterogeneous echotexture with areas of adenomyosis ("venetian blind" pattern, globular uterus, asymmetric thickening). Single submucosal fibroid, 1.8 cm, right anterior wall. Endometrium: 7 mm (day 21 of cycle — appropriate). Ovaries: both normal, no cysts.',
          'Cervical screening test (CST): due — sample collected today; results pending.'
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
          '1. Heavy menstrual bleeding — FIGO PALM-COEIN classification: Adenomyosis (primary, imaging confirmed) + Leiomyoma (submucosal fibroid 1.8 cm — contributing to HMB).',
          '2. Dysmenorrhoea — secondary, consistent with adenomyosis.',
          '3. Iron deficiency anaemia — Hb 99 g/L, Ferritin 6 μg/L; secondary to chronic HMB.',
          '4. No current contraception — family complete, not planning pregnancy; effective contraception required.',
          '5. Cervical screening — sample collected today, results pending. Previously HPV not detected (2 years ago).'
        ]
      }
    ]
  },
  {
    letter: 'P',
    title: 'Plan',
    fields: [
      {
        label: 'Heavy Menstrual Bleeding — Primary Management',
        content: [
          'First-line recommendation: levonorgestrel intrauterine device (LNG-IUD) — Mirena 52mg.',
          'Rationale: most effective medical treatment for HMB (reduces blood loss by 80–90%), also treats dysmenorrhoea, treats adenomyosis symptoms, and provides highly effective contraception — aligns with all her clinical needs.',
          'Counselled re: insertion procedure (brief cramping, mild discomfort), irregular bleeding/spotting in first 3–6 months (very common — important to warn), amenorrhoea in 20–50% by 12 months (a feature, not a side effect in this context), duration of use (8 years).',
          'Referred to NP colleague with IUD credentialing for insertion — appointment within 2 weeks.',
          'Bridge therapy pending insertion: tranexamic acid 1g (2 × 500mg) TDS during menses (days 1–4 of cycle) — reduces menstrual blood loss approximately 40–50%.',
          'Continue ibuprofen 400mg TDS with food during dysmenorrhoea — NSAIDs reduce prostaglandin-mediated cramping and also reduce blood loss.',
          'If Mirena not tolerated or declined: alternatives include combined OCP (continuous use), norethisterone 5mg TDS days 5–26 of cycle, or gynaecology referral for consideration of endometrial ablation.'
        ]
      },
      {
        label: 'Iron Deficiency Anaemia',
        content: [
          'Continue ferrous sulfate 325mg (elemental iron 65mg) BD — take with vitamin C (enhances absorption), between meals where tolerated.',
          'Counsel re: constipation — common side effect; increase dietary fibre and water, MgO or Coloxyl if needed.',
          'Recheck FBC and ferritin in 6–8 weeks.',
          'Target: Hb &gt;120 g/L, Ferritin &gt;50 μg/L before considering ceasing replacement.',
          'Dietary iron counselling: red meat, legumes, leafy green vegetables. Avoid tea/coffee within 1 hour of iron tablets.'
        ]
      },
      {
        label: 'Adenomyosis',
        content: [
          'Imaging confirms adenomyosis as primary structural driver of HMB and dysmenorrhoea.',
          'Mirena LNG-IUD is first-line medical treatment for adenomyosis — direct local progesterone effect on endometrial lining reduces bleeding and pain.',
          'If symptoms persist despite LNG-IUD after 6 months: consider GnRH agonist (Zoladex — specialist initiated), or refer to gynaecology for further management (includes discussion of hysterectomy if desired as definitive treatment — she has completed her family).',
          'Advised that adenomyosis typically resolves with menopause.'
        ]
      },
      {
        label: 'Fibroid (Submucosal, 1.8 cm)',
        content: [
          'Single 1.8 cm submucosal fibroid contributing to HMB.',
          'LNG-IUD is appropriate as first-line management — effective for HMB in the presence of small fibroids (note: submucosal fibroids &gt;3 cm may affect IUD placement and efficacy — specialist review recommended).',
          'Gynaecology referral if: LNG-IUD not effective, fibroid increases in size, or patient wishes to discuss hysteroscopic myomectomy.',
          'Repeat pelvic ultrasound in 12 months to monitor fibroid size.'
        ]
      },
      {
        label: 'Cervical Screening',
        content: [
          'CST collected today — results to be communicated within 14 days.',
          'If HPV not detected: 5-year recall, no further action.',
          'If HPV detected: manage per NCSP pathway — LBC result will guide referral or 12-month repeat.',
          'Patient to be notified of result by phone and follow-up letter.'
        ]
      },
      {
        label: 'Referrals and Follow-Up',
        content: [
          'Urgent: IUD insertion referral — within 2 weeks.',
          'Non-urgent: gynaecology referral letter prepared if LNG-IUD ineffective or declined after trial.',
          'Review in 6–8 weeks: iron indices, symptom response to tranexamic acid, IUD insertion confirmation, CST result review.',
          'Review at 3 months post-IUD insertion: menstrual pattern, dysmenorrhoea, side effects.',
          'Annual review: symptom control, fibroid follow-up ultrasound at 12 months, BreastScreen eligibility (50 in 8 years — discuss at age-appropriate time).'
        ]
      }
    ]
  }
];

export default function WomensHealthSOAPPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👩 Women&apos;s Health</h1>
        <p>Assessment and management of common women&apos;s health presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="womens-health" />


      <div className="content-prose">
      <div className="info-box" style={{marginBottom:'1.5rem'}}>
        <strong>Example case only.</strong> All patient details are fictional. Always document according to your organisation&apos;s standards and apply your own clinical judgement.
      </div>

      <SoapNote
        title="Women's Health Review — Heavy Menstrual Bleeding with Adenomyosis and Iron Deficiency"
        meta="NP Women's Health Clinic · Primary Care · Example only"
        sections={sections}
      />

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: RANZCOG, Jean Hailes, Therapeutic Guidelines, NCSP.
      </div>
      </div>

      <ModuleNav moduleId="womens-health" />

    </>
  );
}
