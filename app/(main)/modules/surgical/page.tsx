import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function SurgicalPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔪 Surgical</h1>
        <p>Perioperative assessment, acute surgical presentations, post-operative complications, and VTE prophylaxis for NP practice.</p>
      </div>

      <ModuleTabs moduleId="surgical" />


      <div className="content-prose">
      <p>Surgical presentations and perioperative care are core competencies for Australian NPs working in acute care, surgical wards, pre-admission clinics, and procedural settings. NPs play a key role in pre-operative assessment, identifying patients at risk of post-operative complications, managing wound care and drains, and recognising the early signs of surgical emergencies. This module covers acute abdominal presentations, post-operative complication recognition, wound assessment, and VTE prophylaxis — with reference to current Australian surgical and anaesthetic guidelines.</p>

      <div className="highlight-box">
        <h2>🚨 Red Flags — Act Urgently — Call 000</h2>
        <ul>
          <li><strong>Acute abdomen with peritonism</strong> — rigid abdomen, guarding, rebound tenderness — surgical emergency</li>
          <li><strong>Signs of bowel obstruction</strong> — absolute constipation (no flatus or stool), distension, vomiting — urgent surgical review</li>
          <li><strong>Perforated viscus</strong> — sudden severe pain, free air on imaging — emergency theatre</li>
          <li><strong>Post-operative haemorrhage</strong> — hypotension, tachycardia, wound bleeding or expanding haematoma post-op</li>
          <li><strong>Anastomotic leak</strong> — fever, tachycardia, abdominal pain Day 5–7 post colorectal surgery — high mortality if missed</li>
          <li><strong>Wound dehiscence</strong> — serosanguinous (salmon-coloured) fluid from wound — fascial breakdown, risk of evisceration</li>
          <li><strong>Necrotising fasciitis</strong> — pain out of proportion, rapid progression, skin necrosis, crepitus, systemic toxicity — emergency debridement</li>
          <li><strong>Post-operative PE</strong> — tachycardia, hypoxia, pleuritic chest pain — CTPA urgently</li>
        </ul>
      </div>

      <h2>The NP Role in Surgical Settings</h2>
      <p>
        NPs in surgical settings perform perioperative risk assessment, post-operative monitoring, wound assessment, VTE prophylaxis management, and early recognition of complications. Key responsibilities include pre-admission screening, post-operative rounds, discharge planning, and managing ongoing surgical problems in community settings.
      </p>

      <h2>Pre-operative Assessment</h2>

      <h3>Revised Cardiac Risk Index (RCRI)</h3>
      <p>The RCRI identifies patients at increased risk of major adverse cardiac events (MACE) perioperatively. Six risk factors:</p>
      <ul>
        <li>High-risk surgery (intraperitoneal, intrathoracic, suprainguinal vascular)</li>
        <li>Ischaemic heart disease (MI history, angina, positive stress test, nitrates)</li>
        <li>Congestive heart failure</li>
        <li>Cerebrovascular disease (TIA or stroke)</li>
        <li>Insulin-dependent diabetes mellitus</li>
        <li>Creatinine &gt;177 µmol/L</li>
      </ul>
      <p>Score interpretation: 0 = 0.4% MACE, 1 = 1%, 2 = 2.4%, ≥3 = 5.4%. Scores ≥2 warrant cardiology review for elective high-risk surgery.</p>

      <h3>Functional Capacity</h3>
      <p>Assess metabolic equivalents (METs): &lt;4 METs (unable to climb one flight of stairs) indicates poor functional reserve and increased risk. Document ability to perform daily activities.</p>

      <h3>STOP-BANG Screening (OSA)</h3>
      <p>Score ≥5 indicates high risk for obstructive sleep apnoea. Inform anaesthetist — may modify anaesthetic technique. Ensure CPAP device brought to hospital. Increased risk of post-operative respiratory depression with opioids and sedatives.</p>

      <h2>Common Acute Surgical Presentations</h2>

      <h3>Appendicitis</h3>
      <div className="info-box">
        <p><strong>Alvarado Score</strong> — ≥7 suggests appendicitis (CT indicated). Classic history: periumbilical pain migrating to right iliac fossa, nausea, fever, rebound tenderness at McBurney&apos;s point (1/3 distance from ASIS to umbilicus). CT abdomen/pelvis: &gt;95% sensitivity and specificity. Management: laparoscopic appendicectomy. Uncomplicated appendicitis may be managed with antibiotics alone in selected patients (discuss with surgeon).</p>
      </div>

      <h3>Inguinal Hernia — Grading</h3>
      <ul>
        <li><strong>Reducible</strong> — contents return to abdomen spontaneously or with manual pressure. Elective surgical repair.</li>
        <li><strong>Irreducible (Incarcerated)</strong> — contents cannot be reduced, blood supply intact. Urgent surgical review.</li>
        <li><strong>Strangulated</strong> — blood supply to herniated contents is compromised. <strong>Surgical emergency</strong> — bowel necrosis will follow. Do NOT attempt manual reduction. Emergency repair.</li>
      </ul>

      <h3>Acute Diverticulitis</h3>
      <p>
        Uncomplicated (no perforation, abscess, or fistula): oral antibiotics amoxicillin-clavulanate 875/125mg BD or cefalexin 500mg QID + metronidazole 400mg TID for 5–7 days. Low-fibre diet, adequate hydration. Colonoscopy at 6–8 weeks to exclude colorectal malignancy. Hinchey classification guides severity — Stages III–IV (free perforation) require emergency surgery.
      </p>

      <h3>VTE Prophylaxis — Caprini Score</h3>
      <p>
        Risk stratification: Low (&lt;2) — early ambulation; Moderate (2–4) — LMWH or mechanical; High (5–8) — LMWH + mechanical compression; Highest (&gt;8) — LMWH + mechanical + extended discharge prophylaxis. Standard: enoxaparin 40mg SC daily. Extended prophylaxis (28 days) for colorectal cancer surgery. Commence 12 hours pre-operatively or 6–12 hours post-operatively.
      </p>

      <h2>Post-operative Complications — The Five Ws</h2>
      <div className="info-box">
        <ul>
          <li><strong>Wind</strong> (Days 1–2) — Atelectasis, pneumonia. Incentive spirometry, early mobilisation, physiotherapy.</li>
          <li><strong>Water</strong> (Days 3–5) — UTI from indwelling catheter. Early catheter removal, urinalysis, MSU.</li>
          <li><strong>Wound</strong> (Days 5–7) — Surgical site infection. Wound inspection, swab, antibiotics. CDC classification guides depth and management.</li>
          <li><strong>Walking</strong> (Days 5–7+) — DVT or PE. Calf pain, leg swelling, tachycardia, hypoxia. Duplex ultrasound, CTPA, therapeutic anticoagulation.</li>
          <li><strong>Wonder drugs</strong> (Any time) — Drug fever, Clostridium difficile colitis from antibiotics. Stool MCS, cease offending drug.</li>
        </ul>
      </div>

      <h3>Surgical Site Infection (SSI) — CDC Classification</h3>
      <ul>
        <li><strong>Superficial Incisional</strong> — skin/subcutaneous above fascia. Wound care, oral antibiotics (cefalexin/dicloxacillin).</li>
        <li><strong>Deep Incisional</strong> — fascial and muscle layers. IV antibiotics, wound exploration, possible surgical debridement.</li>
        <li><strong>Organ/Space SSI</strong> — within body cavity (e.g. intraperitoneal abscess). IV antibiotics + surgical/radiological drainage, often reoperation.</li>
      </ul>

      <h3>Anastomotic Leak</h3>
      <p>
        Peak incidence Day 5–7 post colorectal surgery. Mortality 6–22%. Signs: fever, tachycardia, abdominal peritonism, faeculent drain output. CT: peri-anastomotic fluid, free air. Management: IV broad-spectrum antibiotics, surgical emergency review — CT-guided drainage for contained leak, emergency laparotomy for peritonitis.
      </p>

      <h3>Wound Dehiscence</h3>
      <p>
        Serosanguinous (salmon-coloured) fluid from the wound = pathognomonic sign of fascial dehiscence. Urgent surgical review — risk of evisceration. If bowel evisceration occurs: cover with warm saline-soaked gauze, do NOT push bowel back, call surgical team immediately.
      </p>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleNav moduleId="surgical" />

      <ModuleSponsorSlot moduleSlug="surgical" />

    </div>
  );
}
