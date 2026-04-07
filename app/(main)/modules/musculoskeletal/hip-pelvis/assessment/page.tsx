import ModuleTabs from '@/components/ModuleTabs';

export default function MskHipPelvisAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Hip &amp; Pelvis Assessment</h1>
          <p className="page-subtitle">Structured history, examination, and investigations for hip and pelvis presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/hip-pelvis" />

      <div className="content-body">

        <section className="content-section">
          <h2>History</h2>

          <h3>Hip and Pelvis Pain Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Pain Location</div>
              <p>Groin (anterior) — intra-articular: OA, FAI, labral tear, septic arthritis. Lateral hip over the greater trochanter — GTPS, gluteal tendinopathy. Anterior hip/groin — iliopsoas bursitis/tendinopathy. Buttock — referred lumbar spine, SI joint, piriformis syndrome. Anterolateral thigh without joint involvement — meralgia paraesthetica.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Onset</div>
              <p>Acute onset after fall (hip fracture — call 000), trauma (dislocation), or sudden severe pain in at-risk patient (AVN, septic arthritis). Gradual onset over months to years — OA, FAI, GTPS, tendinopathy. Onset during pregnancy — pelvic girdle pain.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Aggravating Factors</div>
              <p>Sitting (FAI, labral tear — hip flexion). Walking (OA). Lying on hip at night (GTPS). Stairs (GTPS, OA). Putting on shoes and socks (OA — reduced internal rotation). Prolonged standing (GTPS). Hip adduction/crossing legs (GTPS — compressive loading).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Weight Bearing</div>
              <p>Inability to weight bear after fall — hip fracture until proven otherwise. Refusal to weight bear in a febrile child or adult — septic arthritis. Antalgic gait (pain-avoiding) vs Trendelenburg gait (gluteus medius weakness) — assess before the patient lies down.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Radiation</div>
              <p>Anterior thigh and knee — hip OA via L3 distribution. Always examine the hip in patients presenting with medial or anterior knee pain. Buttock and posterior thigh — lumbar referral. Anterolateral thigh (sensory only, no weakness) — meralgia paraesthetica.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Red Flag Symptoms</div>
              <p>Inability to weight bear + fall (fracture). Fever + severe hip pain + refusal to move (septic arthritis). Night pain + weight loss + known malignancy (bone metastasis). Severe acute pain in patient on long-term corticosteroids (AVN). Post-arthroplasty pain with fever (periprosthetic infection).</p>
            </div>
          </div>

          <h3>Relevant History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Medications and Medical History</div>
              <p>Long-term corticosteroids (AVN risk — always consider MRI if hip pain develops). Anticoagulants (bleeding risk). Osteoporosis and prior fractures. Malignancy (pathological fracture, bone metastasis). Rheumatoid arthritis (synovitis, atlanto-axial concerns, medication effects). Diabetes (infection risk, neuropathy). Sickle cell disease (AVN, bone infarcts).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Obstetric and Gynaecological History</div>
              <p>Current pregnancy — pelvic girdle pain is common from first trimester. Prior pregnancies and pelvic girdle pain history. Menstrual history — pelvic pathology (endometriosis, fibroids) can present as hip or pelvic pain. Menopausal status — GTPS is more common post-menopause.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Inspection and Gait</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Gait Assessment</div>
              <p>Antalgic gait — shortened stance phase on the affected side. Trendelenburg gait — lateral trunk lean over the affected hip (gluteus medius weakness). Short leg gait — leg length discrepancy. Assess before examination — the patient&apos;s gait entering the room is often the most informative observation.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Alignment and Leg Length</div>
              <p>Leg length discrepancy — apparent (pelvic tilt, scoliosis) vs true (bone length). True leg length: ASIS to medial malleolus. Pelvic tilt (levelling from ASIS bilaterally). Muscle wasting — gluteals, quadriceps.</p>
            </div>
          </div>

          <h3>Range of Motion</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Hip ROM</div>
              <p>Flexion (normal 120°), extension (20°), abduction (45°), adduction (30°), internal rotation (35°), external rotation (45°). Loss of internal rotation is the earliest and most sensitive sign of hip OA. Capsular pattern: flexion &gt; abduction &gt; internal rotation most limited. Thomas test: assess hip flexor tightness — flatten lumbar spine, assess contralateral hip extension.</p>
            </div>
          </div>

          <h3>Palpation</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Greater Trochanter</div>
              <p>Direct tenderness over the greater trochanter — GTPS/gluteal tendinopathy. Pain with resisted hip abduction (gluteal tendon). Single leg squat provocation — pain = GTPS positive.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Inguinal Region</div>
              <p>Inguinal ligament and ASIS — LFCN tenderness (meralgia paraesthetica). Inguinal lymph nodes. Hernial orifices — inguinal and femoral hernia as differential for groin pain.</p>
            </div>
          </div>

          <h3>Special Tests</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">FADIR Test</div>
              <p>Flex, adduct, and internally rotate the hip in supine. Positive: groin pain reproduced. Highly sensitive for intra-articular pathology — hip OA, FAI, labral tear. A positive FADIR confirms hip origin but does not specify the exact diagnosis — further investigation (X-ray, MRI) required.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">FABER Test (Patrick&apos;s)</div>
              <p>Flex, abduct, and externally rotate — foot on opposite knee (figure-4). Examiner applies gentle downward pressure on the knee. Positive: groin pain (intra-articular hip) or posterior SI joint pain (SI pathology). Also stretches the piriformis — posterior buttock pain suggests piriformis syndrome.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Trendelenburg Test</div>
              <p>Patient stands on one leg. Positive: contralateral pelvis drops — indicates gluteus medius weakness on the stance side. Causes: hip OA, GTPS, hip fracture, superior gluteal nerve palsy. Bilateral Trendelenburg gait suggests bilateral hip or gluteal pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Thomas Test</div>
              <p>Patient supine, flex one hip to flatten the lumbar lordosis. Positive: contralateral hip rises off the table — indicates hip flexor tightness (iliopsoas). Document degree of flexion contracture. Relevant to OA assessment and post-operative rehabilitation planning.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">X-Ray Hip (AP Pelvis + Lateral)</div>
              <p>First-line for all hip pain. AP pelvis (bilateral comparison), lateral hip. OA: superior joint space narrowing, osteophytes, subchondral sclerosis. Fracture — including occult (may require MRI). FAI morphology (cam — aspherical head, pincer — acetabular overcoverage). Paget&apos;s disease.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">MRI Hip</div>
              <p>Soft tissue assessment — labral tear, AVN (gold standard — positive before X-ray changes), occult fracture, GTPS and gluteal tendinopathy, stress fracture. MRI arthrogram (with intra-articular contrast): best for labral tear assessment and chondral damage. Order for: AVN suspicion, labral tear, stress fracture, inconclusive X-ray.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Ultrasound</div>
              <p>GTPS — gluteal tendinopathy and bursitis. Guide for injection (GTPS, hip joint). Effusion detection. Less useful for intra-articular pathology (labral tears, AVN) — MRI preferred.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">CT Hip</div>
              <p>Complex fractures — acetabular fractures, FAI surgical planning. Better bony detail than MRI — used when MRI is contraindicated or for complex morphological assessment.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Blood Tests</div>
              <p>FBE, CRP, ESR: septic arthritis, inflammatory arthritis. Rheumatoid factor, anti-CCP: RA. Uric acid: gout. Blood cultures if septic arthritis suspected (before antibiotics). Bone density (DXA): after fragility fracture or high-risk patients.</p>
            </div>
          </div>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
