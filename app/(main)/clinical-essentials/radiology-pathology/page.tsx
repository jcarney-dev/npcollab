import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Radiology and Pathology Ordering',
  description: 'Guide to ordering radiology and pathology as an Australian Nurse Practitioner — MBS eligibility, Medicare requirements, and clinical indications.',
  openGraph: {
    title: 'Radiology and Pathology Ordering | NPCollab',
    description: 'Guide to ordering radiology and pathology as an Australian Nurse Practitioner — MBS eligibility, Medicare requirements, and clinical indications.',
    url: 'https://npcollab.com/clinical-essentials/radiology-pathology',
  },
  alternates: {
    canonical: 'https://npcollab.com/clinical-essentials/radiology-pathology',
  },
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
        <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
          <table className="np-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Test</th>
                <th>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>65070</strong></td><td>Full blood examination (FBE)</td><td>Anaemia, infection, thrombocytopenia, general screen</td></tr>
              <tr><td><strong>65060</strong></td><td>Haemoglobin</td><td>Anaemia screening</td></tr>
              <tr><td><strong>65120</strong></td><td>ESR</td><td>Inflammation, temporal arteritis, chronic infection</td></tr>
              <tr><td><strong>65199</strong></td><td>INR / Prothrombin time</td><td>Warfarin monitoring, coagulopathy</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🧪</div><h4>Chemical Pathology (Group 2) — Commonly Used</h4></div>
        <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
          <table className="np-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Test</th>
                <th>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>66500</strong></td><td>Blood glucose</td><td>Diabetes screening and monitoring</td></tr>
              <tr><td><strong>66551</strong></td><td>HbA1c</td><td>Diabetes diagnosis and monitoring</td></tr>
              <tr><td><strong>66503</strong></td><td>Urea, electrolytes, creatinine (UEC/EUC)</td><td>Renal function, electrolytes, medication monitoring</td></tr>
              <tr><td><strong>66512</strong></td><td>Liver function tests (LFTs)</td><td>Liver disease, medication monitoring</td></tr>
              <tr><td><strong>66536</strong></td><td>Lipids (total cholesterol, HDL, LDL, TG)</td><td>Cardiovascular risk assessment</td></tr>
              <tr><td><strong>66716</strong></td><td>TSH</td><td>Thyroid disease screening and monitoring</td></tr>
              <tr><td><strong>66722</strong></td><td>Free T4</td><td>Thyroid disease (add to TSH if abnormal)</td></tr>
              <tr><td><strong>66608</strong></td><td>CRP</td><td>Infection, inflammation</td></tr>
              <tr><td><strong>66655</strong></td><td>Ferritin</td><td>Iron deficiency, iron overload</td></tr>
              <tr><td><strong>66833</strong></td><td>Vitamin D (25-OH)</td><td>Deficiency — note: requires clinical indication</td></tr>
              <tr><td><strong>66596</strong></td><td>PSA</td><td>Prostate cancer screening (with consent)</td></tr>
              <tr><td><strong>66774</strong></td><td>High sensitivity troponin</td><td>ACS rule-in/rule-out</td></tr>
              <tr><td><strong>66755</strong></td><td>BNP/NT-proBNP</td><td>Heart failure diagnosis and monitoring</td></tr>
              <tr><td><strong>66758</strong></td><td>D-dimer</td><td>Low probability PE or DVT (Wells ≤4)</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>⚠️ Item numbers are indicative. Verify at mbsonline.gov.au. Some items have clinical indication requirements.</p>
      </div>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🦠</div><h4>Microbiology (Group 4)</h4></div>
        <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
          <table className="np-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Test</th>
                <th>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>69303</strong></td><td>Urine MCS</td><td>UTI, pyelonephritis</td></tr>
              <tr><td><strong>69300</strong></td><td>Throat swab MCS</td><td>Group A Strep, bacterial tonsillitis</td></tr>
              <tr><td><strong>69318</strong></td><td>Wound swab MCS</td><td>Infected wounds, cellulitis</td></tr>
              <tr><td><strong>69312</strong></td><td>Sputum MCS</td><td>Pneumonia, COPD exacerbation</td></tr>
              <tr><td><strong>69357</strong></td><td>Blood cultures</td><td>Sepsis, bacteraemia</td></tr>
              <tr><td><strong>69384</strong></td><td>COVID-19 PCR</td><td>COVID diagnosis</td></tr>
              <tr><td><strong>69375</strong></td><td>STI screen (chlamydia/gonorrhoea PCR)</td><td>Sexual health screening</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Diagnostic Imaging — Key Item Numbers</h2>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">🔬</div><h4>Plain X-Ray (Diagnostic Radiology)</h4></div>
        <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
          <table className="np-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Study</th>
                <th>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>57504</strong></td><td>Chest X-ray (1–2 views)</td><td>Respiratory infection, heart failure, pleural effusion, malignancy</td></tr>
              <tr><td><strong>57530</strong></td><td>Abdominal X-ray</td><td>Obstruction, perforation, constipation, kidney stones</td></tr>
              <tr><td><strong>57706</strong></td><td>Hand / wrist X-ray</td><td>Fracture, dislocation, arthritis</td></tr>
              <tr><td><strong>57718</strong></td><td>Ankle / foot X-ray</td><td>Fracture assessment, Ottawa rules positive</td></tr>
              <tr><td><strong>57712</strong></td><td>Knee X-ray</td><td>Fracture, effusion, OA assessment</td></tr>
              <tr><td><strong>57700</strong></td><td>Shoulder X-ray</td><td>Dislocation, fracture, AC joint</td></tr>
              <tr><td><strong>57720</strong></td><td>Lumbar spine X-ray</td><td>Back pain with red flags</td></tr>
              <tr><td><strong>57554</strong></td><td>Cervical spine X-ray</td><td>Neck trauma, red flag neck pain</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">📡</div><h4>Ultrasound and CT — Commonly Requested</h4></div>
        <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
          <table className="np-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Study</th>
                <th>Common Indications</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>55054</strong></td><td>Abdominal ultrasound</td><td>RUQ pain, gallstones, liver/renal pathology</td></tr>
              <tr><td><strong>55068</strong></td><td>Renal + bladder ultrasound</td><td>Renal stones, hydronephrosis, bladder pathology</td></tr>
              <tr><td><strong>55084</strong></td><td>Pelvic ultrasound (transabdominal)</td><td>Uterine, ovarian, and pelvic pathology</td></tr>
              <tr><td><strong>55036</strong></td><td>Thyroid ultrasound</td><td>Thyroid nodule, goitre</td></tr>
              <tr><td><strong>55820</strong></td><td>DVT ultrasound (lower limb venous)</td><td>Suspected DVT</td></tr>
              <tr><td><strong>57350</strong></td><td>CT head</td><td>Head injury, new headache, stroke</td></tr>
              <tr><td><strong>57360</strong></td><td>CT chest</td><td>Pulmonary nodule follow-up, ILD, malignancy</td></tr>
              <tr><td><strong>57362</strong></td><td>CTPA (CT pulmonary angiogram)</td><td>Suspected pulmonary embolism</td></tr>
              <tr><td><strong>57365</strong></td><td>CT abdomen and pelvis</td><td>Abdominal pain, suspected appendicitis, renal colic</td></tr>
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
