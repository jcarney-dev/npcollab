import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Radiology & Pathology',
};

export default function RadiologyPathologyPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Clinical Practice Essentials</div>
      <h1>Radiology & Pathology MBS Items</h1>
      <p>Understanding NP requesting rights, key MBS item numbers for investigations, and how to order diagnostics effectively.</p>
    </div>

    <div className="content-prose">

      <div className="highlight-box">
        <h4>NP Requesting Rights</h4>
        <p>Endorsed Nurse Practitioners can request Medicare-rebatable pathology and diagnostic imaging within their scope of practice. The patient receives the Medicare rebate on tests you request — just as they would if a GP ordered them. Always verify current item numbers at <a href="https://www.mbsonline.gov.au" target="_blank" rel="noopener">MBS Online</a>.</p>
      </div>

      <h2>Pathology — Key Item Numbers</h2>
      <p>Pathology is grouped into categories. Below are the most commonly used items in NP primary care practice. Note that pathology rebates go to the patient (or are bulk-billed by the lab) — you do not bill for pathology, you request it.</p>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🩸</div><h4>Haematology (Group 1)</h4></div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem', marginTop: '8px' }}>
            <thead>
              <tr style={{ background: 'var(--navy)', color: 'white' }}>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Test</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>65070</td><td style={{ padding: '8px 12px' }}>Full blood examination (FBE)</td><td style={{ padding: '8px 12px' }}>Anaemia, infection, thrombocytopenia, general screen</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>65060</td><td style={{ padding: '8px 12px' }}>Haemoglobin</td><td style={{ padding: '8px 12px' }}>Anaemia screening</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>65120</td><td style={{ padding: '8px 12px' }}>ESR</td><td style={{ padding: '8px 12px' }}>Inflammation, temporal arteritis, chronic infection</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>65199</td><td style={{ padding: '8px 12px' }}>INR / Prothrombin time</td><td style={{ padding: '8px 12px' }}>Warfarin monitoring, coagulopathy</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🧪</div><h4>Chemical Pathology (Group 2) — Commonly Used</h4></div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem', marginTop: '8px' }}>
            <thead>
              <tr style={{ background: 'var(--navy)', color: 'white' }}>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Test</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66500</td><td style={{ padding: '8px 12px' }}>Blood glucose</td><td style={{ padding: '8px 12px' }}>Diabetes screening and monitoring</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66551</td><td style={{ padding: '8px 12px' }}>HbA1c</td><td style={{ padding: '8px 12px' }}>Diabetes diagnosis and monitoring</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66503</td><td style={{ padding: '8px 12px' }}>Urea, electrolytes, creatinine (UEC/EUC)</td><td style={{ padding: '8px 12px' }}>Renal function, electrolytes, medication monitoring</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66512</td><td style={{ padding: '8px 12px' }}>Liver function tests (LFTs)</td><td style={{ padding: '8px 12px' }}>Liver disease, medication monitoring</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66536</td><td style={{ padding: '8px 12px' }}>Lipids (total cholesterol, HDL, LDL, TG)</td><td style={{ padding: '8px 12px' }}>Cardiovascular risk assessment</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66716</td><td style={{ padding: '8px 12px' }}>TSH</td><td style={{ padding: '8px 12px' }}>Thyroid disease screening and monitoring</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66722</td><td style={{ padding: '8px 12px' }}>Free T4</td><td style={{ padding: '8px 12px' }}>Thyroid disease (add to TSH if abnormal)</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66608</td><td style={{ padding: '8px 12px' }}>CRP</td><td style={{ padding: '8px 12px' }}>Infection, inflammation</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66655</td><td style={{ padding: '8px 12px' }}>Ferritin</td><td style={{ padding: '8px 12px' }}>Iron deficiency, iron overload</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66833</td><td style={{ padding: '8px 12px' }}>Vitamin D (25-OH)</td><td style={{ padding: '8px 12px' }}>Deficiency — note: requires clinical indication</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66596</td><td style={{ padding: '8px 12px' }}>PSA</td><td style={{ padding: '8px 12px' }}>Prostate cancer screening (with consent)</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66774</td><td style={{ padding: '8px 12px' }}>High sensitivity troponin</td><td style={{ padding: '8px 12px' }}>ACS rule-in/rule-out</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66755</td><td style={{ padding: '8px 12px' }}>BNP/NT-proBNP</td><td style={{ padding: '8px 12px' }}>Heart failure diagnosis and monitoring</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>66758</td><td style={{ padding: '8px 12px' }}>D-dimer</td><td style={{ padding: '8px 12px' }}>Low probability PE or DVT (Wells ≤4)</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>⚠️ Item numbers are indicative. Verify at mbsonline.gov.au. Some items have clinical indication requirements.</p>
      </div>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🦠</div><h4>Microbiology (Group 4)</h4></div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem', marginTop: '8px' }}>
            <thead>
              <tr style={{ background: 'var(--navy)', color: 'white' }}>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Test</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69303</td><td style={{ padding: '8px 12px' }}>Urine MCS</td><td style={{ padding: '8px 12px' }}>UTI, pyelonephritis</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69300</td><td style={{ padding: '8px 12px' }}>Throat swab MCS</td><td style={{ padding: '8px 12px' }}>Group A Strep, bacterial tonsillitis</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69318</td><td style={{ padding: '8px 12px' }}>Wound swab MCS</td><td style={{ padding: '8px 12px' }}>Infected wounds, cellulitis</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69312</td><td style={{ padding: '8px 12px' }}>Sputum MCS</td><td style={{ padding: '8px 12px' }}>Pneumonia, COPD exacerbation</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69357</td><td style={{ padding: '8px 12px' }}>Blood cultures</td><td style={{ padding: '8px 12px' }}>Sepsis, bacteraemia</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69384</td><td style={{ padding: '8px 12px' }}>COVID-19 PCR</td><td style={{ padding: '8px 12px' }}>COVID diagnosis</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>69375</td><td style={{ padding: '8px 12px' }}>STI screen (chlamydia/gonorrhoea PCR)</td><td style={{ padding: '8px 12px' }}>Sexual health screening</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Diagnostic Imaging — Key Item Numbers</h2>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🔬</div><h4>Plain X-Ray (Diagnostic Radiology)</h4></div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem', marginTop: '8px' }}>
            <thead>
              <tr style={{ background: 'var(--navy)', color: 'white' }}>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Study</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57504</td><td style={{ padding: '8px 12px' }}>Chest X-ray (1–2 views)</td><td style={{ padding: '8px 12px' }}>Respiratory infection, heart failure, pleural effusion, malignancy</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57530</td><td style={{ padding: '8px 12px' }}>Abdominal X-ray</td><td style={{ padding: '8px 12px' }}>Obstruction, perforation, constipation, kidney stones</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57706</td><td style={{ padding: '8px 12px' }}>Hand / wrist X-ray</td><td style={{ padding: '8px 12px' }}>Fracture, dislocation, arthritis</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57718</td><td style={{ padding: '8px 12px' }}>Ankle / foot X-ray</td><td style={{ padding: '8px 12px' }}>Fracture assessment, Ottawa rules positive</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57712</td><td style={{ padding: '8px 12px' }}>Knee X-ray</td><td style={{ padding: '8px 12px' }}>Fracture, effusion, OA assessment</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57700</td><td style={{ padding: '8px 12px' }}>Shoulder X-ray</td><td style={{ padding: '8px 12px' }}>Dislocation, fracture, AC joint</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57720</td><td style={{ padding: '8px 12px' }}>Lumbar spine X-ray</td><td style={{ padding: '8px 12px' }}>Back pain with red flags</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57554</td><td style={{ padding: '8px 12px' }}>Cervical spine X-ray</td><td style={{ padding: '8px 12px' }}>Neck trauma, red flag neck pain</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">📡</div><h4>Ultrasound and CT — Commonly Requested</h4></div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.87rem', marginTop: '8px' }}>
            <thead>
              <tr style={{ background: 'var(--navy)', color: 'white' }}>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Study</th>
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>55054</td><td style={{ padding: '8px 12px' }}>Abdominal ultrasound</td><td style={{ padding: '8px 12px' }}>RUQ pain, gallstones, liver/renal pathology</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>55068</td><td style={{ padding: '8px 12px' }}>Renal + bladder ultrasound</td><td style={{ padding: '8px 12px' }}>Renal stones, hydronephrosis, bladder pathology</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>55084</td><td style={{ padding: '8px 12px' }}>Pelvic ultrasound (transabdominal)</td><td style={{ padding: '8px 12px' }}>Uterine, ovarian, and pelvic pathology</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>55036</td><td style={{ padding: '8px 12px' }}>Thyroid ultrasound</td><td style={{ padding: '8px 12px' }}>Thyroid nodule, goitre</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>55820</td><td style={{ padding: '8px 12px' }}>DVT ultrasound (lower limb venous)</td><td style={{ padding: '8px 12px' }}>Suspected DVT</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57350</td><td style={{ padding: '8px 12px' }}>CT head</td><td style={{ padding: '8px 12px' }}>Head injury, new headache, stroke</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57360</td><td style={{ padding: '8px 12px' }}>CT chest</td><td style={{ padding: '8px 12px' }}>Pulmonary nodule follow-up, ILD, malignancy</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)', background: '#f9f9f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57362</td><td style={{ padding: '8px 12px' }}>CTPA (CT pulmonary angiogram)</td><td style={{ padding: '8px 12px' }}>Suspected pulmonary embolism</td></tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>57365</td><td style={{ padding: '8px 12px' }}>CT abdomen and pelvis</td><td style={{ padding: '8px 12px' }}>Abdominal pain, suspected appendicitis, renal colic</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>⚠️ Many imaging items have clinical indication requirements. Always document the clinical reason on your request. Verify at mbsonline.gov.au.</p>
      </div>

      <h2>Tips for Requesting Investigations</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">✍️</div><h4>Writing Good Requests</h4></div>
          <ul>
            <li>Always document the clinical indication — required for many items and aids the reporting radiologist or pathologist</li>
            <li>Include relevant clinical history — medications, symptoms, previous results</li>
            <li>Mark urgency clearly — routine vs urgent vs STAT</li>
            <li>Your provider number must appear on all requests</li>
            <li>Electronic ordering via your practice software ensures provider number is automatically included</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">⚠️</div><h4>Common Pitfalls</h4></div>
          <ul>
            <li>Vitamin D — requires documented clinical indication, not a routine screen for all patients</li>
            <li>Some imaging items require specialist referral — know which ones</li>
            <li>MRI items often have more restrictive eligibility than CT — check before ordering</li>
            <li>Requesting outside your scope is a billing and legal issue</li>
            <li>Unused requests — always follow up results and document action taken</li>
          </ul>
        </div>
      </div>

      <div className="resources-list" style={{ marginTop: '24px' }}>
        <a href="https://www.mbsonline.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">MBS Online — Full Pathology and Imaging Schedule</div><div className="r-desc">Authoritative and current item numbers, fees, and eligibility requirements</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.ranzcr.com" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🔬</div>
          <div className="r-body"><div className="r-title">RANZCR — Referral Guidelines for Diagnostic Imaging</div><div className="r-desc">Evidence-based guidance on appropriate imaging requests by clinical presentation</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>

    </div>
      </>
    
  );
}
