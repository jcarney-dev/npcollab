import ModuleTabs from '@/components/ModuleTabs';

export default function GeneralMedicalPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header-icon">🩺</div>
        <div>
          <h1>General Medical</h1>
          <p>Undifferentiated and multisystem presentations in NP practice</p>
        </div>
      </div>

      <ModuleTabs moduleId="general-medical" />

      <div className="highlight-box" style={{ marginBottom: '2rem' }}>
        <strong>Red Flags — Act Urgently</strong>
        <ul>
          <li>Sepsis — fever/hypothermia, tachycardia, tachypnoea, altered consciousness, hypotension — call 000</li>
          <li>Anaphylaxis — urticaria, angioedema, bronchospasm, hypotension — adrenaline IM, call 000</li>
          <li>Acute adrenal crisis — hypotension, vomiting, altered consciousness in steroid-dependent patient — emergency transfer</li>
          <li>Meningitis — fever, headache, neck stiffness, photophobia, non-blanching rash — call 000</li>
          <li>Hypoglycaemia with altered consciousness — glucose IV or glucagon IM</li>
          <li>Thyroid storm — fever, tachycardia, agitation, vomiting, altered consciousness — emergency transfer</li>
          <li>Hyperosmolar hyperglycaemic state — severe dehydration, altered consciousness, glucose &gt;30 mmol/L — emergency transfer</li>
          <li>Severe hyponatraemia (&lt;125 mmol/L with symptoms) — emergency transfer</li>
        </ul>
      </div>

      <section>
        <h2>What is General Medical?</h2>
        <p>General medical presentations are those that do not fit neatly into a single organ system — or represent the overlap between multiple systems. NPs working in primary care, hospital in the home, general medicine wards, or community settings regularly encounter these presentations. This module covers the common undifferentiated and multisystem presentations that every NP needs to manage confidently.</p>
      </section>

      <section>
        <h2>Common Presentations</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <h4>Infectious Disease</h4>
            <ul>
              <li>Fever — approach to the febrile patient</li>
              <li>Sepsis and septic shock</li>
              <li>Infective endocarditis</li>
              <li>Influenza and viral syndromes</li>
              <li>COVID-19 and post-COVID syndrome</li>
              <li>Tropical infections — dengue, malaria, melioidosis</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Metabolic &amp; Endocrine</h4>
            <ul>
              <li>Hypoglycaemia</li>
              <li>Diabetic ketoacidosis (DKA)</li>
              <li>Hyperosmolar hyperglycaemic state (HHS)</li>
              <li>Adrenal insufficiency</li>
              <li>Thyroid emergencies</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Fluid &amp; Electrolytes</h4>
            <ul>
              <li>Dehydration and volume depletion</li>
              <li>Hyponatraemia</li>
              <li>Hypercalcaemia</li>
            </ul>
          </div>
          <div className="assessment-card">
            <h4>Haematological &amp; Rheumatological</h4>
            <ul>
              <li>Anaemia — iron deficiency, B12/folate, chronic disease</li>
              <li>Gout and pseudogout</li>
              <li>Septic arthritis</li>
              <li>Giant cell arteritis</li>
              <li>Polymyalgia rheumatica</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Key Conditions</h2>

        <h3>Sepsis</h3>
        <p>Sepsis is life-threatening organ dysfunction caused by a dysregulated host response to infection. qSOFA criteria (2 of 3): altered mentation, RR ≥22, SBP ≤100 — bedside screening tool. Septic shock: sepsis + vasopressors required to maintain MAP ≥65.</p>
        <p><strong>Sepsis Six (within 1 hour):</strong></p>
        <ol>
          <li>Blood cultures (before antibiotics)</li>
          <li>Urine output monitoring (catheterise)</li>
          <li>IV fluids (500mL crystalloid bolus, reassess)</li>
          <li>Broad-spectrum IV antibiotics</li>
          <li>Oxygen to maintain SpO₂ &gt;94%</li>
          <li>Lactate measurement</li>
        </ol>
        <p>Common sources: urinary (most common in community), respiratory, abdominal, skin/soft tissue. Call 000 — sepsis is a medical emergency.</p>

        <h3>Approach to Fever</h3>
        <p>Temperature &gt;38°C. Assess: source identification (history, examination, investigations), severity (vital signs, end-organ effects), risk stratification (immunocompromised, elderly, very young, pregnant). Fever without obvious source in adults &gt;65 or immunocompromised — urgent investigation. Drug fever, malignancy, and autoimmune disease are non-infectious causes.</p>

        <h3>Anaemia</h3>
        <p>Defined as Hb &lt;130 g/L men, &lt;120 g/L women. Approach by MCV — microcytic (IDA, thalassaemia, anaemia of chronic disease), normocytic (acute blood loss, haemolysis, renal anaemia), macrocytic (B12/folate deficiency, alcohol, hypothyroidism, liver disease, medications). <strong>Iron deficiency anaemia (IDA):</strong> most common globally. Investigate for cause — do not treat without investigating source in adults (GI malignancy, coeliac, menorrhagia). Oral iron: ferrous sulfate 325mg daily. IV iron for intolerance or malabsorption.</p>

        <h3>Gout</h3>
        <p>Monoarthritis caused by monosodium urate crystal deposition. Classically first MTP joint (podagra) but any joint. Acute attack: severe pain, swelling, erythema, warmth. Acute treatment: NSAIDs first-line (indomethacin, naproxen), colchicine 1mg then 0.5mg 1 hour later, corticosteroids if contraindications. Urate-lowering therapy (allopurinol, febuxostat): start 4–6 weeks after acute attack resolves, target uric acid &lt;0.36 mmol/L, do not start or stop during acute attack.</p>

        <h3>Giant Cell Arteritis</h3>
        <p>Granulomatous vasculitis affecting medium and large vessels — almost exclusively in patients &gt;50 years. Presents: new headache (temporal), jaw claudication, scalp tenderness, visual disturbance (amaurosis fugax — emergency). ESR typically &gt;50 mm/hr. Temporal artery biopsy is gold standard. <strong>Treatment: prednisolone 1mg/kg/day (up to 60mg) immediately — do not wait for biopsy.</strong> Untreated — risk of permanent blindness.</p>

        <h3>Polymyalgia Rheumatica</h3>
        <p>Inflammatory condition in patients &gt;50 causing proximal limb girdle stiffness (shoulder and hip girdle), morning stiffness &gt;45 minutes, elevated ESR/CRP. Associated with GCA in 15–20%. Dramatic response to low-dose prednisolone (15mg daily) — diagnostic and therapeutic. Taper slowly over 12–24 months. Monitor for GCA symptoms throughout treatment.</p>
      </section>

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement. Refer to Therapeutic Guidelines (Antibiotic, Rheumatology, Endocrinology) and RACGP guidelines for current protocols.</p>
      </div>
    </div>
  );
}
