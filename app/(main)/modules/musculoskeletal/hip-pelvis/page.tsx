import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function MskHipPelvisPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Hip &amp; Pelvis</h1>
        <p>Hip and pelvis pain, osteoarthritis, trochanteric bursitis, and hip fracture</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/hip-pelvis" />

      <div className="content-prose">

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Acute hip fracture</strong> — elderly patient, fall, unable to weight bear, shortened externally rotated leg. Call 000. Do not attempt to weight bear. Surgical fixation within 24–48 hours.</li>
            <li><strong>Septic arthritis of the hip</strong> — fever, severe hip pain, refusal to weight bear. Emergency transfer for aspiration and IV antibiotics.</li>
            <li><strong>Avascular necrosis (AVN)</strong> — acute severe hip pain in at-risk patient (long-term corticosteroids, alcohol, sickle cell disease). Urgent MRI — treatment before collapse is critical.</li>
            <li><strong>Hip dislocation</strong> — after trauma or arthroplasty. Emergency transfer for reduction within 6 hours to reduce AVN risk.</li>
            <li><strong>Pathological fracture</strong> — lytic lesion with hip pain in known malignancy. Do not weight bear. Urgent orthopaedic and oncology referral.</li>
            <li><strong>Pelvic fracture after high-energy trauma</strong> — haemodynamic instability, pelvic instability — call 000.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Hip and Pelvis Presentations</h2>
          <p>
            Hip pain is among the most common musculoskeletal presentations in primary care, with dramatically different causes across age groups. Accurate diagnosis requires understanding the pain distribution — groin pain suggests intra-articular pathology, lateral hip pain suggests periarticular (GTPS), and posterior buttock pain often reflects lumbar spine or sacroiliac joint referral. As an NP, you will manage hip OA, GTPS, and FAI in younger patients, while also identifying and managing urgent conditions including hip fracture, AVN, and septic arthritis.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Hip Osteoarthritis</h3>
          <p>
            The most common cause of hip pain in adults over 50. Groin-predominant pain radiating to the anterior thigh and knee — hip pain commonly refers to the knee via the L3 distribution, so always examine the hip when assessing anterior knee pain. Activity-related pain, morning stiffness less than 30 minutes (distinguishes from inflammatory arthritis), and reduced internal rotation and flexion are early findings. FADIR test (Flexion, ADduction, Internal Rotation) reproduces groin pain. X-ray shows superior joint space narrowing, osteophytes, and subchondral sclerosis. Management: exercise (land and water-based), weight loss, NSAIDs, physiotherapy, GLA:D program. Total hip replacement (THR) for severe refractory OA — excellent long-term outcomes.
          </p>

          <h3>Greater Trochanteric Pain Syndrome (GTPS)</h3>
          <p>
            Previously called trochanteric bursitis — now recognised as primarily gluteal tendinopathy of the gluteus medius and minimus tendons. Lateral hip pain over the greater trochanter, worse with stairs, lying on the affected side, and prolonged standing. Predominantly affects middle-aged women. Compressive loading — crossing legs, hip adduction, prolonged side-lying — aggravates the tendon. Avoid these positions. Management: education, load modification, progressive gluteal strengthening program (avoid hip adduction exercises initially), physiotherapy. Corticosteroid injection provides short-term relief but is not superior long-term. Shockwave therapy for refractory cases.
          </p>

          <h3>Femoroacetabular Impingement (FAI)</h3>
          <p>
            Abnormal contact between the femoral head and acetabulum during hip flexion and rotation — cam type (aspherical femoral head), pincer type (overcoverage of the acetabulum), or mixed. Affects young active adults. Deep groin and anterior hip pain, worse with prolonged sitting, hip flexion activities, and pivoting. FADIR test positive. MRI arthrogram is the investigation of choice for labral tear assessment — anterior superior labral tears are most common. Management: physiotherapy (activity modification, core and hip strengthening, movement control) is first-line for 3–6 months. Hip arthroscopy for labral repair and cam/pincer correction when conservative management fails in appropriately selected patients.
          </p>

          <h3>Hip Fracture</h3>
          <p>
            A significant cause of morbidity and mortality in elderly patients. Fall is the usual precipitant — low-energy in osteoporotic bone. Classic signs: shortened, externally rotated leg, inability to weight bear, groin pain. X-ray confirms in most cases — MRI if X-ray negative but clinical suspicion high (occult fracture). Intracapsular fractures (neck of femur) risk AVN — managed with hemiarthroplasty or THR in displaced cases. Extracapsular fractures (intertrochanteric, subtrochanteric) — blood supply intact, managed with dynamic hip screw or intramedullary nail. Orthogeriatric co-management, DVT prophylaxis, and early mobilisation reduce mortality.
          </p>

          <h3>Avascular Necrosis (AVN) of the Femoral Head</h3>
          <p>
            Disruption of the blood supply to the femoral head leading to bony necrosis and eventual femoral head collapse. Risk factors: long-term corticosteroids (most common), alcohol excess, sickle cell disease, trauma (hip dislocation), radiation. MRI is the gold standard — X-ray is often normal in early disease. Subchondral crescent sign indicates pre-collapse stage. Early diagnosis is critical — core decompression (before collapse) may prevent femoral head collapse. Once collapse occurs, THR is required. NPs managing patients on long-term corticosteroids should have a low threshold for MRI if hip pain develops.
          </p>

          <h3>Meralgia Paraesthetica</h3>
          <p>
            Entrapment neuropathy of the lateral femoral cutaneous nerve (LFCN) at the inguinal ligament near the ASIS. Burning, tingling, and numbness over the anterolateral thigh — no hip joint involvement, no motor weakness. Common in obesity, pregnancy, and with tight clothing or prolonged hip flexion. Tenderness at the ASIS. LFCN is a pure sensory nerve — weakness excludes this diagnosis. Management: address precipitating factors (weight loss, loose clothing), reassurance (self-limiting in most). Corticosteroid injection at the ASIS for refractory cases.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Hip OA refers to the anterior thigh and knee (L3 distribution) — always examine the hip in patients with anterior knee or thigh pain.</li>
            <li>FADIR test is most sensitive for intra-articular hip pathology (OA, FAI, labral tear) — FABER assesses SI joint and hip simultaneously.</li>
            <li>Early AVN can be missed on plain X-ray — MRI is the investigation of choice in high-risk patients with hip pain.</li>
            <li>Post-THR posterior dislocation: shortened internally rotated limb — emergency transfer. Anterior dislocation is less common but produces external rotation and extension.</li>
            <li>Hip dislocation after MVA: reduce within 6 hours to reduce AVN risk — always check sciatic nerve before and after reduction (foot drop common in posterior dislocation).</li>
            <li>Meralgia paraesthetica is a pure sensory syndrome — any motor weakness excludes this diagnosis and requires MRI lumbar spine for L2-L3 radiculopathy.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleSponsorSlot moduleSlug="musculoskeletal-hip-pelvis" />

    </div>
  );
}
