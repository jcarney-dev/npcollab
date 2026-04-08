import ModuleTabs from '@/components/ModuleTabs';

export default function CardiovascularPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫀 Cardiovascular</h1>
        <p>Vascular disease, DVT, cerebrovascular disease, and CVD risk management</p>
      </div>

      <ModuleTabs moduleId="cardiovascular" />


      <div className="content-prose">
      <div className="highlight-box" style={{ marginBottom: '2rem' }}>
        <strong>Red Flags — Act Urgently</strong>
        <ul>
          <li>Acute limb ischaemia — 6 Ps: Pain, Pallor, Pulselessness, Paraesthesia, Paralysis, Perishing cold — call 000</li>
          <li>Ruptured abdominal aortic aneurysm — severe tearing back/abdominal pain, hypotension, pulsatile mass — call 000</li>
          <li>Acute aortic dissection — tearing chest pain radiating to back, unequal BP in arms — call 000</li>
          <li>Critical limb ischaemia — rest pain, non-healing ulcer, gangrene — urgent vascular surgery</li>
          <li>Deep vein thrombosis with phlegmasia (limb blue/white, severely swollen) — emergency transfer</li>
          <li>Hypertensive emergency with end-organ damage — encephalopathy, papilloedema, AKI — emergency transfer</li>
          <li>TIA with high ABCD2 score — urgent same-day neurology assessment</li>
        </ul>
      </div>

      <div className="info-box" style={{ marginBottom: '2rem' }}>
        <strong>Cardiovascular vs Cardiac — Understanding the Distinction</strong>
        <p>The Cardiac module covers acute coronary syndromes, arrhythmias, heart failure, and ECG interpretation. This Cardiovascular module covers the broader vascular system — peripheral arterial disease, venous disease, cerebrovascular disease, aortic disease, and cardiovascular risk management.</p>
      </div>

      <section>
        <h2>Common Presentations</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Peripheral Arterial Disease</h4>
            <ul>
              <li>Intermittent claudication — cramping leg pain on walking, relieved by rest</li>
              <li>Critical limb ischaemia — rest pain, tissue loss, gangrene</li>
              <li>Acute limb ischaemia — sudden onset, emergency</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Venous Disease</h4>
            <ul>
              <li>Deep vein thrombosis (DVT)</li>
              <li>Chronic venous insufficiency</li>
              <li>Varicose veins</li>
              <li>Post-thrombotic syndrome</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Cerebrovascular Disease</h4>
            <ul>
              <li>Transient ischaemic attack (TIA)</li>
              <li>Ischaemic stroke</li>
              <li>Carotid artery disease</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Aortic &amp; Risk</h4>
            <ul>
              <li>Abdominal aortic aneurysm (AAA)</li>
              <li>Dyslipidaemia</li>
              <li>Metabolic syndrome</li>
              <li>Primary and secondary CVD prevention</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Key Conditions</h2>

        <h3>Peripheral Arterial Disease (PAD)</h3>
        <p>PAD affects approximately 15% of Australians over 70. Caused by atherosclerosis reducing blood flow to the limbs — lower limbs most affected. Risk factors mirror those for coronary artery disease: smoking, diabetes, hypertension, dyslipidaemia.</p>
        <p><strong>Intermittent claudication:</strong> reproducible cramping pain in calf (most common), thigh, or buttock on walking a consistent distance, relieved by rest within minutes. ABI (ankle-brachial index) &lt;0.9 is diagnostic. Management: exercise therapy (supervised walking program), smoking cessation, antiplatelet therapy (aspirin or clopidogrel), statin therapy, BP and diabetes control. Refer to vascular surgery if: ABI &lt;0.5, rest pain, tissue loss, or significantly limiting symptoms.</p>
        <p><strong>Critical limb ischaemia:</strong> rest pain (worse lying flat, relieved by hanging leg down), non-healing ulcers, or gangrene. Urgent vascular surgery referral — limb threatening.</p>

        <h3>Deep Vein Thrombosis</h3>
        <p>DVT most commonly affects the lower limb deep veins. Wells Score assesses pre-test probability. Score ≤1: low probability — D-dimer; if negative, DVT excluded. Score ≥2: high probability — compression ultrasound directly.</p>
        <p>Treatment: direct oral anticoagulants (DOACs) are first-line — rivaroxaban or apixaban (no bridging required). Duration: provoked DVT 3 months; unprovoked DVT minimum 3–6 months, consider indefinite. Compression stockings for comfort and to reduce post-thrombotic syndrome.</p>

        <h3>TIA and Stroke Prevention</h3>
        <p>TIA: sudden onset focal neurological deficit lasting &lt;24 hours (most resolve &lt;1 hour) without infarction on imaging. Medical emergency despite symptom resolution — 10% risk of stroke in 2 days. Use ABCD2 score: Age ≥60 (+1), BP ≥140/90 (+1), Clinical features (unilateral weakness +2, speech disturbance only +1), Duration ≥60 min (+2), 10–59 min (+1), Diabetes (+1). Score ≥4: urgent assessment within 24 hours. Management: aspirin 300mg immediately, urgent carotid imaging, consider dual antiplatelet therapy short-term, risk factor management.</p>

        <h3>Abdominal Aortic Aneurysm</h3>
        <p>AAA defined as aortic diameter ≥3cm. Prevalence 4–8% in men over 65. Most are asymptomatic — discovered incidentally or on screening. Risk of rupture increases significantly at ≥5.5cm. Australian guidelines: one-off ultrasound screening for men aged 65 — ongoing surveillance based on size. Refer to vascular surgery: diameter ≥5.5cm in men (≥5cm in women), rapid expansion (&gt;1cm/year or &gt;0.5cm/6 months), or symptomatic AAA.</p>

        <h3>Dyslipidaemia and CVD Risk</h3>
        <p>Australian CVD risk is calculated using the Australian Cardiovascular Disease Risk Calculator (based on the Framingham equation) — available at <strong>cvdcheck.org.au</strong>. Stratify as low (&lt;10%), intermediate (10–15%), or high (&gt;15%) 5-year risk. High-risk patients include: established CVD, diabetes with end-organ damage, CKD, familial hypercholesterolaemia, very high individual risk factors.</p>
        <p>Statin therapy: first-line lipid-lowering for high-risk patients regardless of baseline LDL. Target LDL: &lt;2.0 mmol/L for high risk, &lt;1.8 mmol/L for very high risk (secondary prevention). Ezetimibe add-on if statin alone insufficient. PCSK9 inhibitors for familial hypercholesterolaemia or very high-risk patients not achieving target.</p>
      </section>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement. Refer to Australian Heart Foundation and Therapeutic Guidelines for current evidence.</p>
      </div>
      </div>

    </div>
  );
}
