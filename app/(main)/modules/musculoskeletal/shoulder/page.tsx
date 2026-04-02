import type { Metadata } from 'next';
import Link from 'next/link';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'MSK — Shoulder | Clinical Modules',
  description: 'Shoulder pain assessment, rotator cuff disease, impingement, AC joint injuries, and instability for Australian Nurse Practitioners',
};

export default function MskShoulderPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Musculoskeletal Module</div>
        <h1>🦴 Shoulder</h1>
        <p>Rotator cuff disease, impingement, AC joint injuries, frozen shoulder, and instability</p>
      </div>
      <ModuleTabs moduleId="musculoskeletal/shoulder" />

      <div className="content-prose">
        <h2>Clinical Overview</h2>
        <p>Shoulder pain is one of the most common musculoskeletal presentations in primary care, accounting for approximately 16% of all MSK consultations. The shoulder complex has the greatest range of motion of any joint — this mobility comes at the cost of inherent instability, making it susceptible to a wide range of pathology. Accurate diagnosis guides appropriate management and avoids unnecessary imaging and referral.</p>

        <div className="highlight-box">
          <h4>⚠️ Red Flags — Do Not Miss</h4>
          <ul>
            <li>Acute traumatic dislocation — deformity, neurovascular compromise, inability to move</li>
            <li>Acute complete rotator cuff tear — sudden loss of abduction after injury, often felt as a 'pop'</li>
            <li>Septic arthritis — fever, erythema, warmth, extreme pain, systemically unwell</li>
            <li>Fracture — after significant trauma or fragility (osteoporosis, cancer)</li>
            <li>Bony metastases — constant night pain in patient with known malignancy, no mechanical pattern</li>
            <li>Cervical radiculopathy — pain radiating beyond elbow, neurological deficit, C5/C6/C7/C8</li>
            <li>Referred pain from MI or ectopic pregnancy — no mechanical component, diaphragmatic irritation</li>
            <li>Axillary artery injury post-dislocation — diminished radial pulse, expanding haematoma</li>
          </ul>
        </div>

        <h2>Anatomy and Differential Diagnosis</h2>
        <p>The shoulder comprises three bones (humerus, clavicle, scapula) and four joints (glenohumeral, acromioclavicular, sternoclavicular, scapulothoracic). Understanding anatomy guides clinical examination and differential diagnosis.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔴</div><h4>Subacromial Pathology (Most Common)</h4></div>
            <ul>
              <li>Rotator cuff tendinopathy — degenerative, gradual onset, impingement arc</li>
              <li>Subacromial bursitis — often co-exists with tendinopathy</li>
              <li>Partial or full thickness rotator cuff tear — acute or chronic</li>
              <li>Calcific tendinopathy — calcium hydroxyapatite deposits, acute or chronic</li>
              <li>Biceps tendinopathy — long head of biceps, anterior shoulder pain</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔵</div><h4>Glenohumeral Joint Pathology</h4></div>
            <ul>
              <li>Adhesive capsulitis (frozen shoulder) — progressive stiffness in all planes</li>
              <li>Glenohumeral OA — typically age &gt;60, grinding, reduced ROM in older pattern</li>
              <li>Glenohumeral instability — young patients, post-dislocation, hypermobility</li>
              <li>Labral tears (SLAP lesions) — overhead athletes, clicking, instability</li>
              <li>Septic arthritis — fever, acute onset, systemically unwell</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🟡</div><h4>AC Joint Pathology</h4></div>
            <ul>
              <li>AC joint sprain — direct trauma, point tenderness at AC joint</li>
              <li>AC joint separation — grades I–VI, step deformity in higher grades</li>
              <li>AC joint OA — older patients, point tenderness, pain with cross-arm adduction</li>
              <li>Distal clavicle osteolysis — weightlifters, repetitive microtrauma</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🟢</div><h4>Other / Referred Pain</h4></div>
            <ul>
              <li>Cervical radiculopathy — C5 (deltoid), C6 (lateral arm), symptoms distal to elbow</li>
              <li>Brachial neuritis (Parsonage-Turner syndrome) — acute severe pain then weakness</li>
              <li>Thoracic outlet syndrome — arm pain, paraesthesia, vascular signs</li>
              <li>Referred from liver, gallbladder — right shoulder tip pain</li>
              <li>Referred from diaphragm or cardiac — left shoulder pain, no mechanical pattern</li>
            </ul>
          </div>
        </div>

        <h2>Rotator Cuff Disease</h2>
        <p>The rotator cuff comprises four muscles: supraspinatus, infraspinatus, teres minor (external rotation and stabilisation), and subscapularis (internal rotation). Supraspinatus is the most commonly injured. Pathology ranges from tendinopathy to partial tears to full thickness tears.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💪</div><h4>Rotator Cuff Tendinopathy</h4></div>
            <ul>
              <li>Most common shoulder presentation in primary care</li>
              <li>Gradual onset, anterolateral shoulder pain, worse with overhead activity</li>
              <li>Painful arc: pain between 60–120° of abduction</li>
              <li>Night pain is common — lying on affected shoulder</li>
              <li>Risk factors: age &gt;40, overhead work or sport, shoulder instability</li>
              <li>Management: activity modification, physiotherapy (rotator cuff strengthening), NSAIDs</li>
              <li>Subacromial corticosteroid injection if not improving after 4–6 weeks</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔨</div><h4>Rotator Cuff Tear</h4></div>
            <ul>
              <li>Partial tear: similar to tendinopathy but may have more weakness</li>
              <li>Full thickness: acute onset after injury or fall on outstretched arm</li>
              <li>Massive tear: inability to initiate abduction, positive drop arm test</li>
              <li>Investigations: ultrasound (first line) or MRI for tear characterisation</li>
              <li>Conservative: physiotherapy effective for many partial and small full-thickness tears</li>
              <li>Surgical: large acute tears in young active patients — orthopaedic referral</li>
              <li>Elderly patients with chronic tears often managed conservatively</li>
            </ul>
          </div>
        </div>

        <h2>Adhesive Capsulitis (Frozen Shoulder)</h2>
        <p>Adhesive capsulitis is a fibro-inflammatory condition causing progressive global restriction of glenohumeral movement. It is most common in women aged 40–60 and is strongly associated with diabetes (10–20% prevalence in T2DM).</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">❄️</div><h4>Stages</h4></div>
            <ul>
              <li>Stage 1 (Painful / Freezing): 2–9 months — increasing pain and stiffness</li>
              <li>Stage 2 (Frozen): 4–12 months — pain less severe, profound stiffness</li>
              <li>Stage 3 (Thawing): 5–26 months — gradual spontaneous recovery</li>
              <li>Total duration: 18 months to 3+ years</li>
              <li>External rotation loss is the hallmark finding — most restricted in all planes</li>
              <li>Pattern: passive ER &gt; passive Abduction &gt; passive IR</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💉</div><h4>Management</h4></div>
            <ul>
              <li>Analgesia: NSAIDs, paracetamol, consider short-term opioids in severe pain phase</li>
              <li>Intra-articular corticosteroid injection: most effective in stage 1 — reduces pain and duration</li>
              <li>Physiotherapy: gentle ROM, pendulum exercises — avoid aggressive stretching in painful phase</li>
              <li>Hydrodilatation: image-guided joint distension — effective for refractory cases</li>
              <li>Manipulation under anaesthesia or capsular release: surgical option if prolonged</li>
              <li>Screen for and optimise diabetes — strongly associated</li>
            </ul>
          </div>
        </div>

        <h2>Glenohumeral Instability</h2>
        <p>Shoulder instability ranges from subluxation to dislocation. Anterior instability (95%) is most common, often following a traumatic event, though atraumatic and multidirectional instability also occurs.</p>

        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">⚡</div><h4>Acute Dislocation Management</h4></div>
            <ul>
              <li>Confirm with X-ray (AP and axillary) before reduction to exclude fracture</li>
              <li>Neurovascular assessment: axillary nerve (lateral deltoid sensation), radial pulse</li>
              <li>Analgesia and procedural sedation prior to reduction</li>
              <li>Reduction techniques: Cunningham, FARES, Stimson, Milch — NP scope varies by jurisdiction</li>
              <li>Post-reduction X-ray to confirm reduction</li>
              <li>Immobilise in external rotation or sling — refer to ED or orthopaedics if unable to reduce</li>
              <li>First dislocation in young patient: high re-dislocation rate — orthopaedic referral recommended</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔄</div><h4>Recurrent Instability</h4></div>
            <ul>
              <li>Young patients (&lt;25): recurrence rate after first dislocation is 70–95%</li>
              <li>Bankart lesion: labral tear — most common structural injury</li>
              <li>Hill-Sachs lesion: humeral head compression fracture</li>
              <li>Physiotherapy: rotator cuff strengthening, scapular stabilisation</li>
              <li>Surgical stabilisation: Bankart repair for recurrent anterior instability — orthopaedic referral</li>
              <li>Avoid overhead and contact sport until reviewed by orthopaedics</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <p>👉 Continue to the <Link href="/modules/musculoskeletal/shoulder/assessment">Assessment tab</Link> for systematic shoulder history, examination, and special tests.</p>
        </div>
      </div>
    </>
  );
}
