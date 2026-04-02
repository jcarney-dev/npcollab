import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Assessment | Endocrine Module',
  description: 'Endocrine history, examination, and investigations for Australian Nurse Practitioners',
};

export default function EndocrineAssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔬 Endocrine</h1>
        <p>Diabetes, thyroid disease, adrenal disorders, and metabolic conditions</p>
      </div>
      <ModuleTabs moduleId="endocrine" />

      <div className="content-prose">
        <h2>Endocrine History</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🩸</div><h4>Diabetes History</h4></div>
            <ul>
              <li>Type and duration — T1DM, T2DM, gestational, MODY</li>
              <li>Diagnosis — how was it found? Symptoms or incidental?</li>
              <li>Current medications and adherence — including insulin types and doses</li>
              <li>BSL monitoring — frequency, device, recent readings, CGM use</li>
              <li>Last HbA1c and trend</li>
              <li>Hypoglycaemia — frequency, awareness, severity, need for third-party assistance</li>
              <li>Hyperglycaemic episodes — DKA or HHS history</li>
              <li>Complications — neuropathy (tingling, numbness), retinopathy, nephropathy, foot ulcers</li>
              <li>Cardiovascular history — known IHD, stroke, peripheral arterial disease</li>
              <li>Diet, physical activity, alcohol intake, smoking</li>
              <li>Pregnancy intentions — contraception, pre-conception planning</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🦋</div><h4>Thyroid History</h4></div>
            <ul>
              <li>Symptoms of hypothyroidism: fatigue, weight gain, cold intolerance, constipation, low mood, cognitive slowing</li>
              <li>Symptoms of hyperthyroidism: weight loss, heat intolerance, palpitations, tremor, diarrhoea, anxiety, eye symptoms</li>
              <li>Neck swelling or goitre — onset, rate of growth, discomfort</li>
              <li>Dysphagia or voice change — compressive symptoms</li>
              <li>Previous thyroid disease or surgery</li>
              <li>Family history of thyroid or autoimmune disease</li>
              <li>Medications affecting thyroid: amiodarone, lithium, antithyroid drugs</li>
              <li>Radiation exposure history</li>
              <li>Menstrual irregularity (hypothyroidism or hyperthyroidism)</li>
              <li>Fertility concerns</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔻</div><h4>Adrenal / Cortisol History</h4></div>
            <ul>
              <li>Fatigue — severity and duration</li>
              <li>Postural dizziness or syncope (adrenal insufficiency)</li>
              <li>Salt craving (primary adrenal insufficiency)</li>
              <li>Skin changes — hyperpigmentation (Addison's), bruising, striae (Cushing's)</li>
              <li>Weight change — loss (AI) or central gain (Cushing's)</li>
              <li>Proximal muscle weakness</li>
              <li>Long-term glucocorticoid use — dose, duration, indication</li>
              <li>Previous Addisonian crisis or adrenal crisis</li>
              <li>Hypertension — resistant or episodic (phaeochromocytoma)</li>
              <li>Episodes of headache, diaphoresis, palpitations (phaeochromocytoma)</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📋</div><h4>General Endocrine Screen</h4></div>
            <ul>
              <li>Polydipsia and polyuria — diabetes insipidus or mellitus</li>
              <li>Galactorrhoea or amenorrhoea — prolactinoma</li>
              <li>Visual field defects — pituitary tumour compression</li>
              <li>Acromegaly features: large hands/feet, jaw prominence, headache</li>
              <li>Osteoporosis or fragility fractures — hyperparathyroidism, Cushing's</li>
              <li>Kidney stones — hyperparathyroidism, hypercalcaemia</li>
              <li>Family history of MEN (multiple endocrine neoplasia)</li>
              <li>Autoimmune conditions — thyroid disease clusters with T1DM, vitiligo, coeliac</li>
            </ul>
          </div>
        </div>

        <h2>Endocrine Examination</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔍</div><h4>General and Vital Signs</h4></div>
            <ul>
              <li>Weight, height, BMI, waist circumference</li>
              <li>BP — lying and standing (postural drop in adrenal insufficiency)</li>
              <li>HR — bradycardia (hypothyroidism), tachycardia (hyperthyroidism)</li>
              <li>Temperature — hypothermia (myxoedema) or hyperthermia (thyroid storm)</li>
              <li>General appearance — cushingoid, myxoedematous, cachectic, acromegalic</li>
              <li>Skin — dry (hypothyroidism), sweaty/warm (hyperthyroidism), hyperpigmented (Addison's), striae (Cushing's)</li>
              <li>Hair and nails — brittle (hypothyroidism), thinning alopecia</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🦋</div><h4>Thyroid Examination</h4></div>
            <ul>
              <li>Inspection — visible goitre, neck symmetry</li>
              <li>Palpation — size, consistency (smooth vs nodular), tenderness, tracheal deviation</li>
              <li>Percussion — retrosternal extension if suspected</li>
              <li>Auscultation — thyroid bruit (Graves' disease)</li>
              <li>Eyes — exophthalmos, lid lag, lid retraction, ophthalmoplegia (Graves')</li>
              <li>Reflexes — slow relaxation (hypothyroidism), brisk (hyperthyroidism)</li>
              <li>Tremor — fine tremor of outstretched hands (hyperthyroidism)</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🦶</div><h4>Diabetic Foot Examination</h4></div>
            <ul>
              <li>Inspection — skin integrity, colour, hair loss, ulcers, deformity (Charcot)</li>
              <li>Peripheral pulses — dorsalis pedis and posterior tibial</li>
              <li>Capillary refill — &gt;2 seconds suggests peripheral arterial disease</li>
              <li>Monofilament testing — 10g monofilament at standard sites for sensation</li>
              <li>Vibration sense — 128Hz tuning fork at first MTP</li>
              <li>Ankle reflexes — reduced or absent in peripheral neuropathy</li>
              <li>Temperature sensation — using tuning fork or temperature discriminator</li>
              <li>Risk stratification: low, moderate, or high risk — determines review frequency</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>Investigations to Order</h4></div>
            <ul>
              <li>HbA1c — glycaemic control over 3 months</li>
              <li>Fasting plasma glucose and fasting lipids</li>
              <li>Urine ACR — albumin-to-creatinine ratio (first morning specimen preferred)</li>
              <li>eGFR — renal function; guides medication dosing</li>
              <li>TSH — first line thyroid screening; reflex free T4 if abnormal</li>
              <li>Free T4 and free T3 — if TSH suppressed</li>
              <li>TPO antibodies — confirm Hashimoto's; TRAb for Graves'</li>
              <li>Morning cortisol — if adrenal insufficiency suspected (&lt;200 nmol/L = suggestive)</li>
              <li>Calcium, phosphate, PTH — hyperparathyroidism, hypercalcaemia</li>
              <li>OGTT — gestational diabetes screening or diagnostic</li>
            </ul>
          </div>
        </div>

        <h2>Hypoglycaemia Management</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⚠️</div><h4>Classification</h4></div>
            <ul>
              <li>Level 1: BSL 3.0–3.9 mmol/L — alert value, action required</li>
              <li>Level 2: BSL &lt;3.0 mmol/L — clinically significant hypoglycaemia</li>
              <li>Level 3: Severe — requires assistance; altered consciousness or seizure</li>
              <li>Hypoglycaemia unawareness — no autonomic warning symptoms</li>
              <li>Common causes: excess insulin, missed meal, exercise, alcohol</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🍬</div><h4>Treatment — Rule of 15</h4></div>
            <ul>
              <li>15g fast-acting carbohydrate: 150–200ml fruit juice, 6 jelly beans, 3–4 glucose tablets</li>
              <li>Recheck BSL after 15 minutes</li>
              <li>If still &lt;4 mmol/L — repeat 15g carbohydrate</li>
              <li>Once resolved — eat a snack with complex carbohydrate if next meal &gt;1 hour</li>
              <li>Severe (unconscious): Glucagon 1mg IM or SC (GlucaGen HypoKit) — by carer</li>
              <li>IV 50% dextrose — if IV access available and unable to swallow</li>
              <li>Call 000 if not responding to treatment or altered consciousness</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
