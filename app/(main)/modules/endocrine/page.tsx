import type { Metadata } from 'next';
import Link from 'next/link';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'Endocrine | Clinical Modules',
  description: 'Diabetes, thyroid disease, adrenal disorders, and metabolic conditions for Australian Nurse Practitioners',
};

export default function EndocrinePage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔬 Endocrine</h1>
        <p>Diabetes, thyroid disease, adrenal disorders, and metabolic conditions</p>
      </div>
      <ModuleTabs moduleId="endocrine" />

      <div className="content-prose">
        <h2>Clinical Overview</h2>
        <p>Endocrine presentations are among the most common in NP practice. Diabetes mellitus, thyroid disease, and metabolic syndrome collectively affect millions of Australians. NPs play a central role in initiation and titration of pharmacotherapy, education, monitoring, and complication prevention — often as the primary long-term manager of these chronic conditions.</p>

        <div className="highlight-box">
          <h4>⚠️ Red Flags — Urgent / Emergency</h4>
          <ul>
            <li>DKA — polyuria, polydipsia, vomiting, Kussmaul breathing, BSL &gt;11, ketones, acidosis</li>
            <li>HHS — profound hyperglycaemia (&gt;33 mmol/L), hyperosmolarity, altered consciousness, no ketosis</li>
            <li>Severe hypoglycaemia — BSL &lt;3.0, altered conscious state, unable to self-treat</li>
            <li>Thyroid storm — hyperthermia, tachycardia, altered consciousness after thyroid trigger</li>
            <li>Myxoedema coma — profound hypothyroidism, hypothermia, respiratory depression, coma</li>
            <li>Addisonian crisis — hypotension, vomiting, hyponatraemia, hyperkalaemia after adrenal stress</li>
            <li>Phaeochromocytoma crisis — hypertensive emergency, headache, diaphoresis, palpitations</li>
          </ul>
        </div>

        <h2>Diabetes Mellitus — Type 2</h2>
        <p>Type 2 diabetes affects over 1.3 million Australians with a further 500,000 undiagnosed. NPs are frequently the primary managers, leading pharmacotherapy decisions, lifestyle counselling, and complication screening per RACGP and Diabetes Australia guidelines.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>Diagnosis (RACGP/WHO Criteria)</h4></div>
            <ul>
              <li>Fasting plasma glucose ≥7.0 mmol/L (x2, or once with symptoms)</li>
              <li>Random plasma glucose ≥11.1 mmol/L with symptoms</li>
              <li>2-hour OGTT glucose ≥11.1 mmol/L</li>
              <li>HbA1c ≥48 mmol/mol (≥6.5%) — confirmed with repeat</li>
              <li>Pre-diabetes: HbA1c 39–47 mmol/mol or FPG 6.1–6.9 mmol/L</li>
              <li>Impaired glucose tolerance: 2h OGTT 7.8–11.0 mmol/L</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🎯</div><h4>Glycaemic Targets (RACGP 2020)</h4></div>
            <ul>
              <li>HbA1c &lt;53 mmol/mol (&lt;7%) for most adults</li>
              <li>HbA1c &lt;48 mmol/mol (&lt;6.5%) if achievable without hypoglycaemia</li>
              <li>HbA1c &lt;64 mmol/mol (&lt;8%) for elderly, frail, or limited life expectancy</li>
              <li>Fasting BSL 4–7 mmol/L</li>
              <li>2-hour post-prandial BSL &lt;10 mmol/L</li>
              <li>Individualise targets — consider comorbidities, hypoglycaemia risk, and patient preference</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💊</div><h4>Pharmacotherapy — Stepwise</h4></div>
            <ul>
              <li>Step 1: Metformin — first line; dose-adjust for eGFR, cease if eGFR &lt;30</li>
              <li>Step 2 add-on: SGLT2 inhibitor — especially with CVD, HF, or CKD</li>
              <li>Step 2 add-on: GLP-1 RA — especially with obesity or high CVD risk</li>
              <li>Step 2 add-on: DPP-4 inhibitor — weight neutral, low hypoglycaemia risk</li>
              <li>Step 2 add-on: Sulfonylurea (gliclazide MR) — low cost, hypoglycaemia risk</li>
              <li>Step 3: Basal insulin — start glargine or degludec at 10 units nocte</li>
              <li>Combination therapy often required to achieve target HbA1c</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔭</div><h4>Complication Screening (Annual)</h4></div>
            <ul>
              <li>HbA1c — 3–6 monthly depending on control</li>
              <li>Fasting lipids — LDL target &lt;1.8 mmol/L if high CVD risk</li>
              <li>Blood pressure — target &lt;130/80 mmHg</li>
              <li>eGFR and urine ACR — nephropathy screening</li>
              <li>Foot examination — neuropathy, vascular, skin, deformity</li>
              <li>Retinal screening — 2-yearly if stable, annually if changes present</li>
              <li>Depression and diabetes distress screening</li>
            </ul>
          </div>
        </div>

        <h2>Type 1 Diabetes</h2>
        <p>T1DM requires insulin from diagnosis. NPs may co-manage patients alongside an endocrinologist. The NDSS subsidises continuous glucose monitoring (CGM) for all Australians with T1DM.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⚡</div><h4>DKA Recognition and Action</h4></div>
            <ul>
              <li>BSL &gt;11 mmol/L (may be lower with SGLT2i — euglycaemic DKA)</li>
              <li>Blood ketones &gt;3.0 mmol/L, or urine ketones ++/+++</li>
              <li>Arterial pH &lt;7.3, bicarbonate &lt;18 mmol/L</li>
              <li>Symptoms: nausea, vomiting, abdominal pain, Kussmaul breathing</li>
              <li>Precipitants: infection, missed insulin, new T1DM diagnosis</li>
              <li>Action: CALL 000 — requires IV fluids, insulin infusion, electrolyte monitoring</li>
              <li>Do NOT manage DKA in primary care</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📱</div><h4>Insulin and Technology</h4></div>
            <ul>
              <li>Basal-bolus: long-acting (glargine/degludec) + rapid-acting (aspart/lispro) with meals</li>
              <li>Insulin pump (CSII) — continuous subcutaneous infusion, specialist managed</li>
              <li>Hybrid closed-loop systems — increasing availability in Australia</li>
              <li>CGM: FreeStyle Libre (flash) or Dexcom (real-time) — NDSS subsidised for T1DM</li>
              <li>Time in Range target: &gt;70% of readings 3.9–10.0 mmol/L</li>
              <li>Hypoglycaemia target: &lt;4% of readings below 3.9 mmol/L</li>
            </ul>
          </div>
        </div>

        <h2>Thyroid Disease</h2>
        <p>Thyroid disorders are common in Australian primary care. Hypothyroidism affects approximately 5% of women over 60. Accurate diagnosis is essential before initiating treatment.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⬇️</div><h4>Hypothyroidism</h4></div>
            <ul>
              <li>Causes: Hashimoto's thyroiditis (most common), post-thyroidectomy, radioiodine, medications (amiodarone, lithium)</li>
              <li>Symptoms: fatigue, cold intolerance, weight gain, constipation, bradycardia, depression, dry skin, hair loss</li>
              <li>Diagnosis: elevated TSH + low free T4; TPO antibodies confirm Hashimoto's</li>
              <li>Subclinical: elevated TSH, normal T4 — treat if TSH &gt;10 or symptomatic</li>
              <li>Treatment: levothyroxine — titrate to TSH 0.4–4.0 mIU/L</li>
              <li>Recheck TFTs 6–8 weeks after each dose change</li>
              <li>Pregnancy: TSH target &lt;2.5 mIU/L — urgent endocrinology referral</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⬆️</div><h4>Hyperthyroidism</h4></div>
            <ul>
              <li>Causes: Graves' disease, toxic multinodular goitre, toxic adenoma, thyroiditis</li>
              <li>Symptoms: heat intolerance, weight loss, palpitations, tremor, diarrhoea, anxiety</li>
              <li>Graves' specific: exophthalmos, pretibial myxoedema, thyroid bruit</li>
              <li>Diagnosis: suppressed TSH + elevated free T4 and/or T3</li>
              <li>Confirm: TRAb antibodies (Graves'); thyroid scintigraphy to distinguish causes</li>
              <li>Refer to endocrinology — options: carbimazole, radioiodine, thyroidectomy</li>
              <li>Beta-blocker (propranolol) for symptom control while awaiting specialist</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔻</div><h4>Addison's Disease</h4></div>
            <ul>
              <li>Causes: autoimmune adrenalitis (most common in Australia), TB, malignancy</li>
              <li>Symptoms: fatigue, postural hypotension, nausea, hyperpigmentation, weight loss, salt craving</li>
              <li>Biochemistry: hyponatraemia, hyperkalaemia, low morning cortisol, elevated ACTH</li>
              <li>Diagnosis: short Synacthen test — cortisol &lt;500 nmol/L at 30 min</li>
              <li>Treatment: hydrocortisone + fludrocortisone (primary AI only)</li>
              <li>Sick day rules: double/triple hydrocortisone dose during illness or stress</li>
              <li>Medical alert bracelet — essential</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔺</div><h4>Cushing's Syndrome</h4></div>
            <ul>
              <li>Most common cause: exogenous glucocorticoid use (iatrogenic)</li>
              <li>Endogenous: pituitary ACTH adenoma (Cushing's disease), adrenal adenoma, ectopic ACTH</li>
              <li>Features: central obesity, buffalo hump, moon face, purple striae &gt;1cm, proximal myopathy</li>
              <li>Associated: HTN, hyperglycaemia, osteoporosis, recurrent infections</li>
              <li>Screening: 24h urinary free cortisol; overnight 1mg dexamethasone suppression test</li>
              <li>Refer to endocrinology for workup and management</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <p>👉 Continue to the <Link href="/modules/endocrine/assessment">Assessment tab</Link> for targeted endocrine history, examination, and investigation steps.</p>
        </div>
      </div>
    
      <ModuleSponsorSlot moduleSlug="endocrine" />
    </>
  );
}
