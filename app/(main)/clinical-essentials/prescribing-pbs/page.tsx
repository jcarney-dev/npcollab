import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prescribing & the PBS',
};

export default function PrescribingPBSPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Clinical Practice Essentials</div>
      <h1>Prescribing & the PBS</h1>
      <p>Understanding NP prescribing authority, the Pharmaceutical Benefits Scheme, and how to prescribe safely and legally in Australia.</p>
    </div>

    <div className="content-prose">

      <div className="highlight-box">
        <h4>⚠️ Prescribing Disclaimer</h4>
        <p>Prescribing laws vary by state and territory. Your prescribing authority is defined by your scope of practice, your AHPRA endorsement, and applicable Poisons and Therapeutic Goods legislation in your jurisdiction. Always confirm your prescribing rights with your employer and indemnity insurer before prescribing.</p>
      </div>

      <h2>NP Prescribing Authority in Australia</h2>
      <p>Endorsed Nurse Practitioners have legal prescribing authority in all Australian states and territories — but the specifics vary by jurisdiction. Your prescribing is bounded by three things: your scope of practice, your state legislation, and your PBS approval status.</p>

      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">✅</div><h4>What NPs Can Prescribe</h4></div>
          <ul>
            <li><strong>Schedule 4 (Prescription Only)</strong> — within your documented scope of practice</li>
            <li><strong>Schedule 8 (Controlled Drugs)</strong> — within scope, with applicable state permit requirements</li>
            <li><strong>PBS medications</strong> — once approved as a PBS prescriber</li>
            <li><strong>Private (non-PBS) prescriptions</strong> — for any S4/S8 within scope</li>
            <li><strong>Medication authorities</strong> — restricted PBS items via Authority approval</li>
            <li>Specific medications are detailed in your scope document</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📋</div><h4>Scope of Practice and Prescribing</h4></div>
          <ul>
            <li>Your prescribing scope must be explicitly documented</li>
            <li>Prescribing outside your documented scope is illegal</li>
            <li>Your scope should name therapeutic classes, not individual drugs where possible</li>
            <li>Scope is reviewed when changing practice area or employers</li>
            <li>Your CMP should be aware of and support your prescribing scope</li>
            <li>Keep records of all prescribing decisions — especially S8</li>
          </ul>
        </div>
      </div>

      <h2>Becoming a PBS Prescriber</h2>
      <p>To prescribe subsidised PBS medications, you must be approved as a PBS prescriber through Services Australia. This is separate from your AHPRA endorsement and Medicare provider number.</p>

      <ol>
        <li>Obtain your Medicare provider number first</li>
        <li>Apply for PBS prescriber approval through <strong>HPOS</strong> (Services Australia)</li>
        <li>You will receive a PBS prescriber number — this goes on all PBS prescriptions</li>
        <li>Register for the PBS Authority line for restricted benefits — phone 1800 888 333</li>
        <li>Some restricted PBS items require online Authority approval via the PBS Authorities system</li>
      </ol>

      <h2>Types of PBS Prescriptions</h2>

      <div className="assessment-card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><div className="icon-circle">💊</div><h4>PBS Benefit Categories</h4></div>
        <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
          <table className="np-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>NP Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Unrestricted</strong></td>
                <td>Any approved indication — no prior approval needed</td>
                <td style={{ color: 'var(--success)' }}>✅ Full access</td>
              </tr>
              <tr>
                <td><strong>Restricted Benefit</strong></td>
                <td>Must prescribe for listed indication — no approval needed but prescriber must comply</td>
                <td style={{ color: 'var(--success)' }}>✅ Within scope</td>
              </tr>
              <tr>
                <td><strong>Authority Required</strong></td>
                <td>Prior approval needed — phone or online via PBS Authorities</td>
                <td style={{ color: 'var(--success)' }}>✅ Within scope</td>
              </tr>
              <tr>
                <td><strong>Authority (STREAMLINED)</strong></td>
                <td>Authority required but can self-approve by writing authority number on script</td>
                <td style={{ color: 'var(--success)' }}>✅ Within scope</td>
              </tr>
              <tr>
                <td><strong>Private Prescription</strong></td>
                <td>Not PBS subsidised — patient pays full cost</td>
                <td style={{ color: 'var(--success)' }}>✅ Within scope</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Schedule 8 Prescribing</h2>
      <p>Schedule 8 (controlled drug) prescribing carries additional legal obligations that vary significantly between states and territories. Before prescribing any S8 medication, confirm the requirements in your jurisdiction.</p>

      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">⚠️</div><h4>General S8 Requirements</h4></div>
          <ul>
            <li>S8 must be within your documented scope of practice</li>
            <li>Most states require a separate S8 permit or authority for NPs</li>
            <li>Real-time prescription monitoring (RTPM) — mandatory in all states</li>
            <li>Script requirements are more stringent — specific format required</li>
            <li>Records must be kept separately — S8 register in some contexts</li>
            <li>Drugs of dependence require careful documentation of indication and risk assessment</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">🗺️</div><h4>State-by-State Variation</h4></div>
          <ul>
            <li><strong>NSW:</strong> NPs must apply to NSW Health for S8 authority</li>
            <li><strong>VIC:</strong> Drugs, Poisons and Controlled Substances Act — NP-specific provisions</li>
            <li><strong>QLD:</strong> Health (Drugs and Poisons) Regulation — NP prescribing authority</li>
            <li><strong>SA:</strong> Controlled Substances Act — NPs require permit for some S8</li>
            <li><strong>WA:</strong> Medicines and Poisons Act 2014 — NP schedules defined</li>
            <li><strong>TAS, ACT, NT:</strong> Contact state health authority for current requirements</li>
          </ul>
        </div>
      </div>

      <h2>Real-Time Prescription Monitoring (RTPM)</h2>
      <p>All Australian states and territories now have real-time prescription monitoring. NPs who prescribe S8 medications must register with and check the RTPM system before prescribing.</p>
      <ul>
        <li>SafeScript (VIC), ScriptCheckSA (SA), MyHealthRecord integration, and state-specific systems</li>
        <li>Check the patient's RTPM record before prescribing any S8</li>
        <li>Document that you checked RTPM in your clinical notes</li>
        <li>If a concerning pattern is identified — document your response</li>
        <li>Mandatory checking thresholds vary by state — know yours</li>
      </ul>

      <h2>Practical Prescribing Tips</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">💡</div><h4>Writing Valid Prescriptions</h4></div>
          <ul>
            <li>Include: patient name, DOB, address, date, drug name, strength, dose, frequency, quantity, repeats</li>
            <li>Use generic names where possible — better for patient and PBS</li>
            <li>Your name, address, provider number, and prescriber number must appear</li>
            <li>Use approved prescription pads — or electronic prescribing (eRx or MediSecure)</li>
            <li>Electronic prescribing is now standard in most states — consider adopting it</li>
            <li>PBS prescriptions require your PBS prescriber number</li>
          </ul>
        </div>
        <div className="assessment-card">
          <div className="card-header"><div className="icon-circle">📱</div><h4>Electronic Prescribing</h4></div>
          <ul>
            <li>eRx and MediSecure are the two Australian electronic prescribing networks</li>
            <li>Generates a QR token — patient takes to pharmacy</li>
            <li>Reduces errors, increases convenience, reduces drug-seeking behaviour</li>
            <li>Supported by most practice management software</li>
            <li>Active Script List (ASL) — patients can maintain a digital list of current scripts</li>
            <li>Mandatory for PBS prescriptions in some states — check your jurisdiction</li>
          </ul>
        </div>
      </div>

      <h2>Key References</h2>
      <div className="resources-list">
        <a href="https://www.pbs.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">PBS Online — Pharmaceutical Benefits Scheme</div><div className="r-desc">Search PBS items, restrictions, pricing, and Authority requirements</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📗</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines</div><div className="r-desc">Gold-standard Australian prescribing guidance across all clinical areas</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.mims.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📦</div>
          <div className="r-body"><div className="r-title">MIMS Australia</div><div className="r-desc">Comprehensive medicines information, interactions, dosing, and prescribing authority</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nps.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎯</div>
          <div className="r-body"><div className="r-title">NPS MedicineWise</div><div className="r-desc">Evidence-based prescribing decision support and medicines information for practitioners</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>

    </div>
      </>
    
  );
}
