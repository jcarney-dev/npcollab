import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function OncoHaematologyPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩸 Onco-Haematology</h1>
        <p>Oncology and haematology for NP practice — cancer screening, toxicity monitoring, haematological malignancies, and oncological emergencies.</p>
      </div>

      <ModuleTabs moduleId="onco-haematology" />


      <div className="content-prose">
      <div className="highlight-box">
        <h2>🚨 Red Flags — Act Urgently</h2>
        <ul>
          <li><strong>Febrile neutropenia</strong> — fever ≥38°C + neutrophils &lt;0.5 × 10⁹/L — IV antibiotics within 60 minutes, call oncology</li>
          <li><strong>Malignant spinal cord compression</strong> — back pain + leg weakness + bladder/bowel dysfunction — dexamethasone 16mg immediately, urgent MRI spine</li>
          <li><strong>Superior vena cava (SVC) obstruction</strong> — facial/neck oedema, arm swelling, stridor, breathlessness — urgent oncology/interventional radiology</li>
          <li><strong>Tumour lysis syndrome</strong> — hyperkalaemia, hyperphosphataemia, hyperuricaemia, acute kidney injury after chemotherapy</li>
          <li><strong>Massive haemorrhage with thrombocytopenia</strong> — platelets &lt;10 or active bleeding — urgent transfusion</li>
          <li><strong>Hyperviscosity syndrome</strong> — confusion, visual changes, bleeding — in myeloma or Waldenström</li>
          <li><strong>Acute leukaemia presentation</strong> — pancytopenia, blasts on film, fever — urgent haematology</li>
          <li><strong>Bone pain in myeloma</strong> — pathological fracture risk — urgent imaging</li>
        </ul>
      </div>

      <h2>The NP Role in Oncology and Haematology</h2>
      <p>
        NPs in oncology and haematology settings perform pre-chemotherapy assessments, CTCAE toxicity monitoring, supportive care management, and survivorship care. NPs play a key role in cancer screening, early detection, and coordinating care across primary, secondary, and tertiary settings.
      </p>

      <h2>Australian Cancer Screening</h2>
      <div className="info-box">
        <ul>
          <li><strong>Bowel Cancer</strong> — iFOBT (faecal immunochemical test) every 2 years from age 45 via NBCSP (National Bowel Cancer Screening Program)</li>
          <li><strong>Breast Cancer</strong> — BreastScreen Australia: 2-yearly mammogram for women aged 50–74 (50–74 targeted, 40–49 and 75+ eligible)</li>
          <li><strong>Cervical Cancer</strong> — 5-yearly HPV test from age 25–74; self-collection available for eligible women</li>
          <li><strong>Prostate Cancer</strong> — PSA with informed consent from age 50 (or 40–45 with family history or African ancestry) — shared decision-making, no universal screening program</li>
          <li><strong>Skin Cancer</strong> — no formal national program; opportunistic skin checks recommended, especially for high-risk patients</li>
        </ul>
      </div>

      <h2>Febrile Neutropenia</h2>
      <p>
        Definition: fever ≥38°C AND neutrophils &lt;0.5 × 10⁹/L (or &lt;1.0 × 10⁹/L predicted to fall further). This is an oncological emergency — mortality without prompt treatment is high.
      </p>
      <p>
        MASCC risk score: ≥21 = low risk, &lt;21 = high risk. Management: blood cultures × 2 (peripheral and central line), empirical IV broad-spectrum antibiotics within 60 minutes — piperacillin-tazobactam 4.5g IV 8-hourly. If penicillin allergic: ceftazidime 2g IV 8-hourly. Add vancomycin if CVAD infection suspected, haemodynamically unstable, or known MRSA. Refer to eviQ (eviq.org.au) for current Australian FN protocols.
      </p>

      <h2>Haematological Malignancies</h2>

      <h3>Multiple Myeloma</h3>
      <p>
        CRAB criteria: hyperCalcaemia, Renal impairment, Anaemia, Bone lesions. Diagnosis: SPEP (monoclonal protein), serum free light chains, bone marrow biopsy. Skeletal survey (low-dose whole-body CT). Treatment: bortezomib + lenalidomide + dexamethasone (VRd) first-line; autologous stem cell transplant for eligible patients. Bisphosphonates (zoledronate) for bone disease.
      </p>

      <h3>Hodgkin Lymphoma (HL)</h3>
      <p>
        Bimodal age distribution (young adults and older adults). B symptoms: fever, drenching night sweats, weight loss &gt;10% — worse prognosis. Reed-Sternberg cells on biopsy (owl-eye appearance). First-line: ABVD chemotherapy. Late effects: bleomycin pulmonary toxicity, doxorubicin cardiomyopathy, secondary malignancies (breast cancer with chest RT), hypothyroidism (neck RT).
      </p>

      <h3>Non-Hodgkin Lymphoma (NHL)</h3>
      <p>
        Follicular lymphoma (indolent, incurable but manageable — watch and wait for asymptomatic low-burden disease). DLBCL (aggressive — R-CHOP is curative in ~60%). Treatment guided by histological subtype, stage, and performance status.
      </p>

      <h3>Leukaemia</h3>
      <ul>
        <li><strong>AML / ALL</strong> — urgent haematology referral; pancytopenia, blast cells, infection risk</li>
        <li><strong>CML</strong> — Philadelphia chromosome (BCR-ABL1 fusion); imatinib (TKI) first-line; monitor with BCR-ABL1 PCR</li>
        <li><strong>CLL</strong> — watch and wait for early-stage asymptomatic disease; BTK inhibitors or venetoclax when treatment required</li>
      </ul>

      <h2>Chemotherapy Toxicity — CTCAE Monitoring</h2>
      <p>
        The Common Terminology Criteria for Adverse Events (CTCAE) grades toxicity 1–5: Grade 1 (mild), Grade 2 (moderate — dose reduction often considered), Grade 3 (severe — dose reduction or cessation), Grade 4 (life-threatening — treatment cessation), Grade 5 (death). NP role includes CTCAE grading at each pre-chemotherapy assessment and escalation to oncologist for Grade 3+ toxicity.
      </p>

      <h3>Key Toxicities to Monitor</h3>
      <div className="info-box">
        <ul>
          <li><strong>Chemotherapy-induced peripheral neuropathy (CIPN)</strong> — taxanes, platinum agents, bortezomib. CTCAE grading; dose reduction for Grade 3+</li>
          <li><strong>Cardiotoxicity</strong> — anthracyclines (Type I — irreversible), trastuzumab (Type II — reversible). LVEF monitoring with ECHO</li>
          <li><strong>Hepatotoxicity</strong> — LFTs before each cycle. Hold for Grade 3+ elevation</li>
          <li><strong>Renal toxicity</strong> — cisplatin. EUC and GFR before each cycle. Aggressive hydration protocol</li>
          <li><strong>CINV</strong> — antiemetic protocol based on emetogenic risk (highly emetogenic: ondansetron + dex + aprepitant triple therapy)</li>
        </ul>
      </div>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleSponsorSlot moduleSlug="onco-haematology" />

    </div>
  );
}
