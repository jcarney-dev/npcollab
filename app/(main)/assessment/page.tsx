import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Patient Assessment' };

export default function AssessmentPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Foundation</div>
        <h1>Patient Assessment Framework</h1>
        <p>A structured approach to comprehensive history-taking and clinical examination for Nurse Practitioners</p>
      </div>
      <div className="content-prose">
        <h2>The NP Assessment Approach</h2>
        <p>As a Nurse Practitioner, your assessment must go beyond the immediate presenting complaint. You are providing advanced practice care — your assessment should be systematic, holistic, and explicitly document your clinical reasoning throughout.</p>
        <div className="highlight-box">
          <h4>OLDCARTS — Symptom History Framework</h4>
          <p>Use this mnemonic for every presenting symptom:</p>
          <ul>
            <li><strong>O</strong>nset — When did it start? Sudden or gradual?</li>
            <li><strong>L</strong>ocation — Where exactly? Does it radiate?</li>
            <li><strong>D</strong>uration — How long does it last? Constant or intermittent?</li>
            <li><strong>C</strong>haracter — What does it feel like? Sharp, dull, burning, pressure?</li>
            <li><strong>A</strong>ssociated symptoms — What else accompanies it?</li>
            <li><strong>R</strong>elieving and aggravating factors — What makes it better or worse?</li>
            <li><strong>T</strong>reatments tried — What has the patient already tried?</li>
            <li><strong>S</strong>everity — Pain or impact scale 0–10</li>
          </ul>
        </div>
        <h2>Comprehensive History Components</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📝</div><h4>Presenting Complaint</h4></div>
            <ul>
              <li>Chief complaint in patient's own words</li>
              <li>Full OLDCARTS exploration</li>
              <li>Impact on ADLs and function</li>
              <li>Patient's health beliefs and concerns</li>
              <li>What does the patient want from today?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💊</div><h4>Medical History</h4></div>
            <ul>
              <li>Current medical conditions</li>
              <li>Previous surgeries and hospitalisations</li>
              <li>Current medications including OTC and herbal</li>
              <li>Allergies and adverse drug reactions</li>
              <li>Immunisation history</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👨‍👩‍👧</div><h4>Family History</h4></div>
            <ul>
              <li>First-degree relatives significant conditions</li>
              <li>Hereditary conditions relevant to complaint</li>
              <li>Cardiac, cancer, metabolic disease history</li>
              <li>Cause of death of parents and siblings</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🌿</div><h4>Social History</h4></div>
            <ul>
              <li>Smoking pack-year history</li>
              <li>Alcohol standard drinks per week</li>
              <li>Illicit or recreational substances</li>
              <li>Occupation and occupational exposures</li>
              <li>Living situation and social supports</li>
              <li>Country of origin and cultural considerations</li>
            </ul>
          </div>
        </div>
        <h2>Physical Examination Principles</h2>
        <p>Follow the standard sequence: <strong>Inspect → Palpate → Percuss → Auscultate</strong> (modified per system). Always begin with general inspection.</p>
        <ul>
          <li>Document positive and relevant negative findings</li>
          <li>Use anatomical landmarks and standardised terminology</li>
          <li>Compare bilateral structures where applicable</li>
          <li>Record vital signs in full on every encounter</li>
        </ul>
        <h2>Clinical Reasoning Framework</h2>
        <ol>
          <li><strong>Problem list:</strong> All active problems</li>
          <li><strong>Differential diagnosis:</strong> Most to least likely — minimum 3</li>
          <li><strong>Investigations:</strong> What diagnostics and why?</li>
          <li><strong>Management plan:</strong> Pharmacological, non-pharmacological, referral</li>
          <li><strong>Safety netting:</strong> Red flags to return for</li>
          <li><strong>Follow-up:</strong> When and who?</li>
        </ol>
        <div className="info-box">
          <p>💡 <strong>Medicolegally:</strong> If it is not documented, it was not done. Your notes are both a clinical tool and a legal document.</p>
        </div>
      </div>
    </>
  );
}
