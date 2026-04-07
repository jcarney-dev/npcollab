import ModuleTabs from '@/components/ModuleTabs';

export default function MskKneePage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Knee</h1>
          <p className="page-subtitle">Knee injuries, osteoarthritis, tendinopathy, and common knee presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/knee" />

      <div className="content-body">

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Locked knee with acute haemarthrosis</strong> — inability to extend with immediate swelling after injury. ACL rupture or bucket handle meniscal tear — emergency orthopaedic referral.</li>
            <li><strong>Septic arthritis</strong> — hot, swollen, severely painful joint with fever. Emergency joint aspiration and IV antibiotics. Delayed treatment destroys articular cartilage.</li>
            <li><strong>Acute knee dislocation</strong> — deformity after high-energy trauma. Risk of popliteal artery injury and neurovascular compromise — call 000.</li>
            <li><strong>Open fracture</strong> — bone exposed through wound — call 000.</li>
            <li><strong>Compartment syndrome after trauma</strong> — severe pain, tense compartment, pain on passive stretch — call 000.</li>
            <li><strong>Pathological fracture</strong> — bone pain in known malignancy — urgent imaging and orthopaedic referral.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Knee Presentations</h2>
          <p>
            Knee pain is one of the most common musculoskeletal presentations across all age groups. As an NP, your role encompasses accurate diagnosis, appropriate investigation, effective conservative management, and timely identification and referral of serious pathology. The majority of knee presentations — overuse conditions, degenerative change, and ligament injuries — are managed in the primary care setting with physiotherapy, analgesia, and patient education.
          </p>
          <p>
            Systematic knee examination including special tests for ligament and meniscal integrity is fundamental. Applying the Ottawa Knee Rules guides appropriate imaging, avoiding unnecessary X-rays while identifying fractures that require management.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>ACL Rupture</h3>
          <p>
            The most common significant knee ligament injury. Classic presentation: audible pop, immediate haemarthrosis (within 1–2 hours), instability feeling ("giving way"). Lachman test (most sensitive — performed at 20° flexion) and anterior drawer test confirm the diagnosis. MRI is required to confirm the tear and identify associated injuries — meniscal tears occur in 50–70% of ACL ruptures. Management is activity-level dependent: physiotherapy for functional stability versus surgical reconstruction. Young active patients are generally recommended for reconstruction. Approximately 9–12 months rehabilitation before return to competitive sport.
          </p>

          <h3>Meniscal Tear</h3>
          <p>
            Acute (twisting injury, young patients) or degenerative (older patients, minimal trauma). Joint line tenderness, McMurray test positive (pain or click on rotation and extension), Thessaly test. Mechanical symptoms — locking, clicking, giving way — suggest bucket handle tear requiring surgical referral. MRI confirms the tear. For degenerative meniscal tears in middle-aged and older patients, physiotherapy is equally effective as surgery (FIDELITY trial) — arthroscopy should not be routinely offered.
          </p>

          <h3>Patellofemoral Pain Syndrome (PFPS)</h3>
          <p>
            The most common cause of anterior knee pain in young active patients — predominantly females. Diffuse anterior knee pain, worse with stairs, squatting, and sitting for prolonged periods ("theatre sign"). No specific structural abnormality. Clarke's test often positive. VMO and quadriceps wasting. Management: VMO and hip abductor strengthening, patellar taping (McConnell technique), orthotic insoles for overpronation, activity modification. Excellent prognosis with appropriate rehabilitation — avoid corticosteroid injection.
          </p>

          <h3>Knee Osteoarthritis</h3>
          <p>
            Affects approximately 16% of Australians over 45 years. Medial compartment is most commonly affected. Presents with activity-related pain, morning stiffness less than 30 minutes (distinguishes from inflammatory arthritis), crepitus, reduced ROM, and bony enlargement. Varus deformity is common in medial OA. First-line management: exercise therapy (land-based and aquatic — strongest evidence), weight loss (each 1kg lost reduces knee joint load by 4kg), paracetamol, physiotherapy. The GLA:D Australia program is a validated exercise and education program for knee OA. Total knee replacement for severe refractory cases — 90–95% patient satisfaction.
          </p>

          <h3>Patellar Tendinopathy</h3>
          <p>
            Overuse injury affecting jumping sport athletes (basketball, volleyball). Inferior pole of patella pain — worse with jumping, running, and stairs. Royal London Hospital test (tenderness disappears when quadriceps contracted — distinguishes from fat pad impingement). VISA-P questionnaire monitors severity and recovery. Management: eccentric quadriceps loading — the decline squat protocol is most evidence-based. Reduce provocative activity, NSAIDs short-term. Corticosteroid injection into the tendon is contraindicated due to rupture risk. Shockwave therapy for refractory cases.
          </p>

          <h3>Prepatellar Bursitis</h3>
          <p>
            Fluctuant swelling directly over the patella — not in the joint. Caused by repeated direct pressure (carpet layers, roofers, plumbers). Full pain-free knee ROM distinguishes it from intra-articular pathology. Aseptic: ice, compression, avoid pressure, NSAIDs. Septic bursitis (erythema, warmth, tenderness, fever): aspirate and send for culture — treat with flucloxacillin if Staphylococcus aureus confirmed.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Lachman test at 20° flexion is the most sensitive test for ACL rupture — anterior drawer at 90° is less sensitive due to hamstring resistance.</li>
            <li>Immediate haemarthrosis suggests ligament injury or fracture — delayed effusion (&gt;24 hours) is more typical of meniscal tears.</li>
            <li>Apply the Ottawa Knee Rules before ordering X-rays — 98–100% sensitivity for fracture, significantly reduces unnecessary imaging.</li>
            <li>Degenerative meniscal tears in middle-aged patients with OA: physiotherapy first — arthroscopy is not superior (FIDELITY trial).</li>
            <li>Exercise therapy is the single most effective intervention for knee OA — weight loss and physiotherapy should be offered before considering surgery.</li>
            <li>Never inject corticosteroid directly into a tendon (patellar, quadriceps) — significant risk of rupture.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
