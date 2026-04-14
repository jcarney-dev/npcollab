import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export default function MskChestAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Chest Wall</h1>
        <p>Chest wall pain, costochondritis, rib fractures, and musculoskeletal causes of chest pain</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/chest" />

      <div className="content-prose">

        <section className="content-section">
          <h2>History</h2>

          <div className="info-box">
            <h4>Mandatory Cardiac and Vascular Exclusion — Ask First</h4>
            <p>
              Before diagnosing MSK chest wall pain, always ask: Is the pain exertional (cardiac)? Does it radiate to the jaw, arm, or back (cardiac or aortic)? Is it tearing or ripping in quality (aortic dissection)? Are there cardiac risk factors — diabetes, hypertension, dyslipidaemia, smoking, family history? Is there dyspnoea, pleuritic character, haemoptysis, or recent surgery or immobility (PE)? Are there palpitations, syncope, or near-syncope (arrhythmia)? Recent trauma (rib fracture, pneumothorax)?
            </p>
          </div>

          <h3>MSK Chest Wall Pain Characteristics</h3>
          <ul>
            <li><strong>Reproducible by palpation</strong> — reproduced by palpation of a specific chest wall point (most important MSK sign)</li>
            <li><strong>Localised</strong> — not diffuse or vague</li>
            <li><strong>Worsened by movement</strong> — trunk rotation, reaching overhead, deep inspiration, coughing</li>
            <li><strong>Positional</strong> — worse with certain positions</li>
            <li><strong>Non-exertional</strong> — cardiac pain is exertional; MSK pain is not</li>
            <li><strong>Associated with physical triggers</strong> — recent activity, coughing, trauma, or viral URTI</li>
          </ul>

          <h3>Relevant History</h3>
          <ul>
            <li>Previous chest wall injuries or conditions</li>
            <li>Osteoporosis — fragility fracture risk (fragility rib fractures from coughing or minor trauma)</li>
            <li>COPD or chronic cough — rib fracture risk</li>
            <li>Malignancy — pathological fracture, pleural involvement</li>
            <li>Prior herpes zoster — post-herpetic neuralgia; recurrence rare</li>
            <li>Long-term corticosteroid use — bone fragility (corticosteroid-induced osteoporosis)</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Systematic Approach</h3>
          <ul>
            <li><strong>Vital signs</strong> — BP (both arms if dissection concern), HR, RR, SpO2, temperature</li>
            <li><strong>General assessment</strong> — respiratory distress, posture, accessory muscle use</li>
            <li><strong>Inspection</strong> — bruising, swelling at costochondral junction (Tietze syndrome), surgical emphysema (crepitus under skin — oesophageal rupture or pneumothorax), paradoxical movement (flail chest), vesicular rash (herpes zoster)</li>
            <li><strong>Auscultation</strong> — breath sounds bilaterally — absent or reduced (pneumothorax, haemothorax, effusion), added sounds</li>
            <li><strong>Percussion</strong> — resonance (normal), hyper-resonance (pneumothorax), dullness (haemothorax, consolidation)</li>
            <li><strong>Palpation</strong> — systematic palpation of all costochondral junctions, ribs, sternum, intercostal spaces, clavicles, anterior chest wall — is the pain exactly reproduced?</li>
            <li><strong>Movement testing</strong> — does deep inspiration, coughing, or trunk rotation reproduce the pain?</li>
          </ul>

          <h3>Special Tests</h3>
          <ul>
            <li><strong>Hooking manoeuvre</strong> — hook fingers under the lower rib margin (8th–10th ribs) and pull anteriorly. Reproduction of the patient&apos;s pain = slipping rib syndrome (positive test is also often accompanied by a click or pop).</li>
            <li><strong>Dermatomal assessment</strong> — examine carefully along the thoracic dermatomes for early vesicles in suspected herpes zoster (prodromal phase — rash may not be visible yet).</li>
            <li><strong>Pectoralis major assessment</strong> — resisted internal rotation and adduction of the shoulder. Weakness, ecchymosis, and palpable defect at the anterior axillary fold = pectoralis major rupture.</li>
            <li><strong>Intercostal space palpation</strong> — tenderness over the intercostal space (not the rib itself) suggests intercostal muscle strain.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>

          <h3>Cardiac Exclusion</h3>
          <ul>
            <li><strong>ECG</strong> — mandatory for any chest pain (exclude ACS, arrhythmia)</li>
            <li><strong>Troponin</strong> — if any exertional component, cardiac risk factors, or diagnostic uncertainty</li>
            <li><strong>D-dimer</strong> — low-probability PE (Wells score ≤4)</li>
          </ul>

          <h3>Imaging</h3>
          <ul>
            <li><strong>CXR</strong> — rib fractures (many missed on CXR — clinical diagnosis is primary), pneumothorax, haemothorax, cardiac size, pulmonary infiltrate</li>
            <li><strong>CT chest</strong> — pneumothorax (if X-ray equivocal), aortic dissection (CT angiogram), complex rib fractures, haemothorax, pulmonary embolism (CTPA)</li>
            <li><strong>Bone scan or CT rib</strong> — confirmed rib fractures not visible on X-ray; stress or cough fractures; CXR misses 30–40% of rib fractures</li>
            <li><strong>MRI or ultrasound</strong> — pectoralis major rupture (confirm complete vs partial), intercostal pathology</li>
            <li><strong>DXA scan</strong> — bone density assessment for fragility or cough rib fractures (exclude or quantify osteoporosis)</li>
          </ul>

          <h3>Bloods</h3>
          <ul>
            <li>FBE, CRP — infection, malignancy</li>
            <li>VZV serology — if herpes zoster suspected before rash appears (prodromal phase)</li>
            <li>Bone density markers (if osteoporosis suspected) — consider ALP, calcium, 25-OH vitamin D</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/chest" />

    </div>
  );
}
