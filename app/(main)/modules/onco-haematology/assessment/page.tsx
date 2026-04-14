import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export default function OncoHaematologyAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩸 Onco-Haematology</h1>
        <p>Oncology and haematology for NP practice — cancer screening, toxicity monitoring, haematological malignancies, and oncological emergencies.</p>
      </div>

      <ModuleTabs moduleId="onco-haematology" />


      <div className="content-prose">
      <h2>Pre-Chemotherapy Assessment</h2>

      <h3>History Questions</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Treatment-Related Symptoms</h4>
          <ul>
            <li>Nausea and vomiting since last cycle — CTCAE grade</li>
            <li>Fatigue — CTCAE grade, impact on daily activities</li>
            <li>Peripheral neuropathy — numbness, tingling, burning, functional limitations</li>
            <li>Mucositis — oral pain, dysphagia, unable to eat/drink</li>
            <li>Diarrhoea or constipation — frequency, consistency, blood</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Infection Risk</h4>
          <ul>
            <li>Fever since last cycle — any temperature ≥38°C</li>
            <li>CVAD site — redness, swelling, discharge, pain</li>
            <li>Respiratory symptoms — cough, sputum, dyspnoea</li>
            <li>Urinary symptoms — dysuria, frequency</li>
            <li>Skin infections — cellulitis, port-site issues</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cardiac and Renal</h4>
          <ul>
            <li>Breathlessness at rest or on exertion — anthracycline/trastuzumab cardiotoxicity</li>
            <li>Leg oedema — cardiac failure</li>
            <li>Fluid intake and urine output</li>
            <li>Weight change (fluid retention or cachexia)</li>
            <li>LVEF result from most recent echocardiogram</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Haematological Symptoms</h4>
          <ul>
            <li>Bruising or bleeding — mucous membranes, skin, epistaxis</li>
            <li>Breathlessness and fatigue — anaemia</li>
            <li>Bone pain — myeloma, metastatic disease, G-CSF use</li>
            <li>Lymphadenopathy — new or enlarging nodes</li>
            <li>B symptoms — fever, night sweats, weight loss</li>
          </ul>
        </div>
      </div>

      <h2>Performance Status Assessment</h2>

      <h3>ECOG Performance Status</h3>
      <div className="info-box">
        <ul>
          <li><strong>ECOG 0</strong> — Fully active, no restriction</li>
          <li><strong>ECOG 1</strong> — Restricted in physically strenuous activity but ambulatory and able to carry out light work</li>
          <li><strong>ECOG 2</strong> — Ambulatory and capable of self-care but unable to carry out any work activities; up and about &gt;50% of waking hours</li>
          <li><strong>ECOG 3</strong> — Capable of only limited self-care; confined to bed or chair &gt;50% of waking hours</li>
          <li><strong>ECOG 4</strong> — Completely disabled; cannot carry on self-care; totally confined to bed or chair</li>
        </ul>
        <p>ECOG 0–1: generally fit for standard chemotherapy. ECOG 2: consider dose reduction or less intensive regimen. ECOG 3–4: generally not candidates for standard chemotherapy — palliative intent only.</p>
      </div>

      <h2>Physical Examination</h2>

      <h3>CVAD Assessment</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>PICC Line</h4>
          <ul>
            <li>Exit site: erythema, induration, discharge, warmth</li>
            <li>Arm: swelling, tenderness, venous cord (thrombosis)</li>
            <li>Flush: resistance or pain on flushing suggests blockage or fibrin sheath</li>
            <li>Blood return: aspirate blood to confirm position</li>
            <li>Dressing integrity and date of last change</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Implanted Port (Port-a-Cath)</h4>
          <ul>
            <li>Skin overlying port: intact, no redness or oedema</li>
            <li>Access site: needle angle, depth, secure — Huber needle only</li>
            <li>Blood return: aspirate prior to any infusion</li>
            <li>Pain on injection (extravasation risk)</li>
            <li>Date of last flush (monthly if not in use)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Tunnelled Line (Hickman/Groshong)</h4>
          <ul>
            <li>Exit site and tunnel: tenderness, erythema, exudate</li>
            <li>Cuff integrity: cuff should be palpable subcutaneously</li>
            <li>Lumen patency: flush resistance</li>
            <li>Cap integrity and change schedule</li>
            <li>Signs of line-associated DVT: ipsilateral arm or neck swelling</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>General Oncology Exam</h4>
          <ul>
            <li>Mucositis: oral cavity, lips, tongue — grade per CTCAE</li>
            <li>Peripheral neuropathy: monofilament testing, vibration sense, grip strength</li>
            <li>Lymphadenopathy: cervical, axillary, inguinal — document size and change</li>
            <li>Skin and nails: hand-foot syndrome (capecitabine), nail changes</li>
            <li>Abdomen: hepatosplenomegaly</li>
          </ul>
        </div>
      </div>

      <h2>CTCAE Toxicity Grading — Key Domains</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Nausea / Vomiting</h4>
          <ul>
            <li>Grade 1 — nausea, no change in intake</li>
            <li>Grade 2 — decreased oral intake, no significant weight loss</li>
            <li>Grade 3 — inadequate oral caloric/fluid intake, IV fluids required</li>
            <li>Grade 4 — life-threatening (rare)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Peripheral Neuropathy</h4>
          <ul>
            <li>Grade 1 — asymptomatic, loss of deep tendon reflexes or paraesthesia</li>
            <li>Grade 2 — moderate symptoms, limiting instrumental ADLs</li>
            <li>Grade 3 — severe, limiting self-care ADLs</li>
            <li>Grade 4 — life-threatening (rare)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Fatigue</h4>
          <ul>
            <li>Grade 1 — mild, not limiting ADLs</li>
            <li>Grade 2 — moderate, limiting instrumental ADLs</li>
            <li>Grade 3 — severe, limiting self-care ADLs</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Diarrhoea</h4>
          <ul>
            <li>Grade 1 — &lt;4 stools/day above baseline</li>
            <li>Grade 2 — 4–6 stools/day; IV fluids &lt;24 hours</li>
            <li>Grade 3 — ≥7 stools/day, hospitalisation required</li>
            <li>Grade 4 — life-threatening</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Pre-Chemotherapy Bloods</h4>
          <ul>
            <li>FBE with differential — neutrophil count (safety threshold), Hb, platelets</li>
            <li>EUC — renal function (cisplatin, carboplatin dose adjustment)</li>
            <li>LFTs — hepatic metabolism of many chemotherapy agents</li>
            <li>Coagulation — DIC monitoring in AML, haematological malignancy</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Tumour Markers</h4>
          <ul>
            <li>CEA — colorectal, breast, lung cancer surveillance</li>
            <li>CA 19-9 — pancreatic and cholangiocarcinoma</li>
            <li>CA 125 — ovarian cancer treatment monitoring</li>
            <li>PSA — prostate cancer monitoring</li>
            <li>AFP and beta-hCG — testicular cancer and hepatocellular carcinoma</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Haematology Investigations</h4>
          <ul>
            <li>SPEP (serum protein electrophoresis) — myeloma, Waldenström monitoring</li>
            <li>Serum free light chains (kappa/lambda ratio) — myeloma</li>
            <li>Blood film — blast cells, morphology abnormalities</li>
            <li>BCR-ABL1 PCR — CML treatment monitoring</li>
            <li>Flow cytometry — leukaemia and lymphoma immunophenotyping</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cardiac Monitoring (Oncology)</h4>
          <ul>
            <li>Echocardiogram / MUGA — baseline before anthracyclines or trastuzumab</li>
            <li>LVEF every 3 months during trastuzumab</li>
            <li>ECG — QTc prolongation (sunitinib, nilotinib, some antiemetics)</li>
            <li>Troponin and BNP — early cardiac injury markers</li>
          </ul>
        </div>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleNav moduleId="onco-haematology" />

    </div>
  );
}
