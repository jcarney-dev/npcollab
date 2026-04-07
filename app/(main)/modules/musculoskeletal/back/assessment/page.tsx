import ModuleTabs from '@/components/ModuleTabs';

export default function MskBackAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Back Assessment</h1>
          <p className="page-subtitle">Structured history, examination, and investigations for low back pain presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/back" />

      <div className="content-body">

        <section className="content-section">
          <h2>History</h2>

          <h3>Pain Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Site &amp; Radiation</div>
              <p>Central vs lateral vs bilateral pain. Radiation below the knee suggests radiculopathy. Buttock and posterior thigh only — may be referred pain from sacroiliac joint or hip. Groin radiation suggests upper lumbar or hip pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Onset &amp; Duration</div>
              <p>Acute onset lifting/twisting (NSLBP or disc herniation). Insidious onset in young adult with morning stiffness (inflammatory spondyloarthropathy). Onset after minor trauma in elderly patient (compression fracture).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Character</div>
              <p>Aching mechanical pain (NSLBP). Sharp, shooting, electric pain down leg (radiculopathy). Bilateral leg heaviness and cramping with walking (neurogenic claudication). Constant severe pain ± fever (infection or malignancy).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Aggravating &amp; Relieving Factors</div>
              <p>Better with rest — inflammatory vs mechanical differentiation. Better with flexion (spinal stenosis). Worse with coughing/sneezing/Valsalva (radiculopathy). Better with exercise and worse with prolonged rest (inflammatory spondyloarthropathy).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Associated Symptoms</div>
              <p>Leg weakness, paraesthesia, numbness — neurological involvement. Bladder/bowel dysfunction or saddle numbness — cauda equina emergency. Fever, weight loss, night sweats — infection or malignancy. Morning stiffness &gt;1 hour — inflammatory.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Psychosocial Screening</div>
              <p>PHQ-9 or PHQ-2 for depression. Fear-avoidance beliefs. Catastrophising. Work status and occupational demands. Compensation or medico-legal involvement. Social support. Prior chronic pain history.</p>
            </div>
          </div>

          <h3>Red Flag Screening</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Cauda Equina</div>
              <p>Bilateral leg weakness. Saddle anaesthesia (perineal/perianal numbness). Urinary retention, incontinence, or loss of urge to void. Faecal incontinence or loss of anal tone. Any suspicion = emergency MRI immediately.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Malignancy</div>
              <p>History of cancer. Unexplained weight loss. Age &gt;50. Persistent pain unrelieved by rest. Night pain that wakes from sleep. Failure to improve after 4–6 weeks of conservative management.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Infection</div>
              <p>Fever or rigors. IV drug use. Immunosuppression. Recent spinal procedure or skin infection. Constant severe pain disproportionate to clinical findings. Elevated inflammatory markers without alternative explanation.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Fracture</div>
              <p>Significant trauma. Osteoporosis risk (post-menopausal, corticosteroid use, low BMI). Minimal trauma in elderly. Midline bony tenderness. Known ankylosing spondylitis + any trauma.</p>
            </div>
          </div>

          <h3>Medical &amp; Occupational History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Medical History</div>
              <p>Prior spinal surgery or procedures. Osteoporosis. Malignancy. Inflammatory arthritis. Diabetes. Cardiovascular disease (relevant for vascular claudication differential). Anticoagulants (epidural haematoma risk).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Occupational History</div>
              <p>Heavy manual work, lifting, vibration exposure. Sedentary work (prolonged sitting). Workplace injury mechanism. Return-to-work barriers. Workers compensation involvement — document carefully.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Observation &amp; Gait</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Gait Analysis</div>
              <p>Antalgic gait (weight shifted to unaffected side). Foot drop (L4-L5 radiculopathy — high stepping gait). Heel walk (L4-L5 — tests dorsiflexion). Toe walk (L5-S1 — tests plantar flexion). Trendelenburg gait (hip abductor weakness).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Spinal Posture</div>
              <p>Lumbar lordosis: loss may suggest muscle spasm or disc herniation. Lateral shift (sciatic scoliosis). Increased kyphosis: compression fracture. Bamboo spine appearance: ankylosing spondylitis. Skin changes overlying spine.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Range of Motion</div>
              <p>Flexion, extension, lateral flexion, rotation. Schober&apos;s test for lumbar flexion in suspected inflammatory spondyloarthropathy (&lt;5cm increase from lumbosacral junction to 10cm above = restricted). Document which movements reproduce symptoms.</p>
            </div>
          </div>

          <h3>Palpation</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Bony Tenderness</div>
              <p>Midline spinous process tenderness — fracture, infection, malignancy. Paravertebral muscle spasm and tenderness. Sacroiliac joint tenderness — inflammatory spondyloarthropathy. Greater trochanter — trochanteric bursitis differential.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Sacroiliac Joints</div>
              <p>Direct palpation over posterior SIJ. Posterior shear test (POSH). FABER/Patrick test — hip flexion, abduction, external rotation — pain in groin or posterior pelvis suggests SIJ or hip pathology.</p>
            </div>
          </div>

          <h3>Neurological Examination</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Motor Testing</div>
              <p>L3-L4: knee extension (quadriceps). L4-L5: ankle dorsiflexion — ask patient to walk on heels. L5-S1: plantar flexion — ask patient to walk on tiptoes. Grade weakness 0–5/5. Document asymmetry.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Sensory Testing</div>
              <p>L3-L4: medial lower leg/inner calf. L4-L5: dorsum of foot and first web space. L5-S1: sole of foot and outer border. Saddle area (S2-S4) — perineum, perianal region, and inner thighs. Use light touch and pinprick.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Reflexes</div>
              <p>Knee jerk (L3-L4). Ankle jerk (L5-S1). Plantar response — extensor response (Babinski) indicates UMN pathology (cervical or thoracic myelopathy, not lumbar). Absence or asymmetry is significant.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Bladder &amp; Bowel</div>
              <p>Post-void residual if cauda equina suspected (bladder scan or catheterisation). Perianal sensation and anal tone if saddle anaesthesia or bowel/bladder dysfunction reported. Any abnormality = cauda equina until proven otherwise.</p>
            </div>
          </div>

          <h3>Special Tests</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Straight Leg Raise (SLR)</div>
              <p>Patient supine. Passively raise extended leg. Positive: radicular pain below the knee at &lt;70° of elevation. Most sensitive test for L4-L5 and L5-S1 disc herniation. Hamstring tightness is not a positive result — must reproduce radicular pain.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Crossed SLR</div>
              <p>Raise the asymptomatic leg — positive if radicular pain is reproduced in the symptomatic leg. Lower sensitivity but higher specificity than standard SLR. A positive crossed SLR strongly supports significant disc herniation.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">FABER Test</div>
              <p>Flex, abduct, and externally rotate the hip (foot on opposite knee — figure-4 position). Positive: pain in the groin (hip joint) or posterior pelvis (SIJ). Differentiates SIJ and hip pathology from lumbar spine origin.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Stork Test (One-Leg Standing Extension)</div>
              <p>Patient stands on one leg and extends the lumbar spine. Positive: ipsilateral low back pain — suggests spondylolysis or spondylolisthesis. Commonly used in young athletes with low back pain.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Plain X-Ray (Lumbar Spine)</div>
              <p>First-line for suspected fracture, spondylolisthesis, or significant structural abnormality. Limited sensitivity for disc pathology and soft tissue. AP, lateral ± oblique views. Standing views for scoliosis assessment.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">MRI Lumbar Spine</div>
              <p>Investigation of choice for: cauda equina syndrome (emergency), radiculopathy with neurological deficit, suspected disc herniation, infection, or malignancy. Best soft tissue resolution. No ionising radiation. Requests: specify clinical indication clearly.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">CT Lumbar Spine</div>
              <p>Better for bony anatomy — fracture characterisation, spondylolysis, post-surgical assessment. Used when MRI is contraindicated (pacemaker, certain implants). Higher radiation dose than X-ray.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">MRI Sacroiliac Joints</div>
              <p>Investigation of choice for early axial spondyloarthritis — detects bone marrow oedema (sacroiliitis) before changes visible on X-ray. Order alongside HLA-B27 when inflammatory spondyloarthropathy is suspected.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Blood Tests</div>
              <p>FBE, CRP, ESR: elevated in infection, malignancy, inflammatory arthritis. HLA-B27: axial spondyloarthritis. Calcium, LFTs, PSA, protein electrophoresis: malignancy screen. Blood cultures: before antibiotics if discitis suspected.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Bone Density (DXA)</div>
              <p>For patients with suspected osteoporotic fracture or those at high risk (postmenopausal women, corticosteroid use, age &gt;70, prior fragility fracture). Guides anti-resorptive therapy decisions.</p>
            </div>
          </div>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
