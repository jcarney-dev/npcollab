import ModuleTabs from '@/components/ModuleTabs';

export default function MskKneeAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Knee</h1>
        <p>Knee injuries, osteoarthritis, tendinopathy, and common knee presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/knee" />

      <div className="content-prose">

        <section className="content-section">
          <h2>History</h2>

          <h3>Knee Pain Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Mechanism</div>
              <p>Twisting injury (ACL, meniscus), direct blow (contusion, fracture), fall onto the knee (patella fracture, prepatellar bursitis), hyperextension (PCL, posterior capsule), valgus force (MCL), varus force (LCL). Overuse or atraumatic onset suggests degenerative or inflammatory cause.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Onset and Duration</div>
              <p>Sudden onset after trauma — fracture, ligament rupture, acute dislocation. Gradual onset over weeks to months — OA, tendinopathy, PFPS, ITBS. Onset after a new or increased activity suggests overuse pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Location</div>
              <p>Anterior — PFPS, patellar tendinopathy, Osgood-Schlatter, fat pad impingement. Medial — meniscal tear, MCL, OA (medial compartment), pes anserine bursitis. Lateral — ITBS, LCL, lateral meniscus. Posterior — Baker's cyst, PCL, popliteal pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Swelling</div>
              <p>Acute haemarthrosis (within 1–2 hours) suggests ligament rupture (ACL) or intra-articular fracture. Delayed effusion (12–24 hours) suggests meniscal tear. Swelling over the patella (not in joint) = prepatellar bursitis. Posterior knee swelling = Baker's cyst.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Mechanical Symptoms</div>
              <p>Locking — inability to fully extend the knee. Suggests bucket handle meniscal tear requiring urgent surgical referral. Clicking or catching — meniscal tear, loose bodies, OCD. Giving way — ligament injury (ACL, PCL), PFPS, severe quadriceps weakness.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Activity and Functional Impact</div>
              <p>Sport and occupation (jumping athlete — patellar tendinopathy; runner — ITBS; kneeling work — prepatellar bursitis). Distance walked before pain (OA — functional limitation). Sleep disturbance from pain (severe OA, inflammatory arthritis, malignancy).</p>
            </div>
          </div>

          <h3>Relevant History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Previous Knee Injuries</div>
              <p>Recurrent instability suggests ACL insufficiency. Previous meniscectomy increases OA risk. Prior surgery and hardware — periprosthetic infection risk if arthroplasty in situ.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Medical History</div>
              <p>Gout or pseudogout — crystal arthropathy. Rheumatoid or inflammatory arthritis. Malignancy — bone metastasis, pathological fracture risk. Immunosuppression — septic arthritis risk. Diabetes — infection susceptibility, OA risk.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Look (Inspection)</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Swelling and Effusion</div>
              <p>Joint effusion — diffuse swelling obscuring medial and lateral gutters. Distinguish from prepatellar bursitis (localised swelling over the patella). Posterior swelling — Baker's cyst. Skin: erythema (septic arthritis, gout, bursitis), bruising (trauma), wounds.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Muscle Wasting and Alignment</div>
              <p>Quadriceps wasting — especially VMO (vastus medialis oblique). Varus deformity (medial OA — bow-legged), valgus deformity (lateral OA or inflammatory arthritis). Patellar alignment and tracking.</p>
            </div>
          </div>

          <h3>Feel (Palpation)</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Joint Line Tenderness</div>
              <p>Medial joint line — medial meniscus, MCL, medial OA. Lateral joint line — lateral meniscus, LCL, ITBS. Joint line tenderness is the most reliable clinical sign for meniscal pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Patellar and Peri-Patellar Tenderness</div>
              <p>Inferior patellar pole — patellar tendinopathy, Osgood-Schlatter (tibial tuberosity). Superior patellar pole — quadriceps tendinopathy. Peripatellar — PFPS. Lateral facet — patellofemoral pathology.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Effusion Tests</div>
              <p>Bulge sign (small effusion) — stroke medial gutter and look for fluid wave back. Ballottement/patellar tap (large effusion) — push patella down and feel for rebound. Temperature — warm joint suggests inflammation or infection.</p>
            </div>
          </div>

          <h3>Move (Range of Motion)</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Active and Passive ROM</div>
              <p>Flexion (normal 130–140°) and extension (0°). Loss of extension suggests haemarthrosis, locking, or bucket handle tear. Measure deficit in degrees. Pain arc — where in the range does pain occur and what does it reproduce.</p>
            </div>
          </div>

          <h3>Special Tests</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Lachman Test (ACL)</div>
              <p>20° knee flexion, stabilise femur, pull tibia anteriorly. Positive: soft endpoint or increased translation compared to the contralateral knee. The most sensitive test for ACL rupture (sensitivity ~85%). Compare both sides.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Anterior and Posterior Drawer</div>
              <p>90° flexion. Anterior drawer: pull tibia forward (ACL — less sensitive than Lachman due to hamstring resistance). Posterior drawer: push tibia posteriorly (PCL — posterior sag sign at 90° is also characteristic of PCL rupture).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Valgus and Varus Stress Tests</div>
              <p>Valgus stress: assess MCL integrity at 0° (complete disruption) and 30° flexion (isolated MCL). Varus stress: LCL at 0° and 30°. Laxity at 0° suggests more complex multi-ligament injury including the posterior capsule.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">McMurray Test (Meniscus)</div>
              <p>Flex knee fully, rotate the tibia (external = medial meniscus, internal = lateral meniscus) then extend — positive: click or pain at the joint line. Most useful when a click is produced. Poor specificity — combine with joint line tenderness.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Thessaly Test (Meniscus)</div>
              <p>Patient stands on one leg at 20° knee flexion and rotates the knee internally and externally. Positive: medial or lateral joint line pain or discomfort. More sensitive and specific than McMurray for meniscal tears in some studies.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Clarke's Test (PFPS)</div>
              <p>Examiner compresses the patella while the patient contracts the quadriceps — positive: anterior knee pain reproduced. Poor specificity — positive in many normals. Use in context of other PFPS findings (VMO wasting, peripatellar tenderness, normal joint lines).</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">X-Ray Knee (AP, Lateral, Skyline)</div>
              <p>First-line for trauma — apply Ottawa Knee Rules. OA: joint space narrowing, osteophytes, subchondral sclerosis. Fracture, loose bodies, calcification (CPPD/chondrocalcinosis). Skyline/Merchant view: patellar tilt, trochlear dysplasia.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">MRI Knee</div>
              <p>Investigation of choice for: ligament and meniscal injuries, chondral damage, bone marrow oedema, suspected ACL rupture, meniscal tear with mechanical symptoms. Best soft tissue resolution. No radiation. Specify clinical question clearly on referral.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Ultrasound</div>
              <p>Soft tissue: tendinopathy (patellar, quadriceps), bursitis (prepatellar, infrapatellar), Baker's cyst, effusion assessment. Good first-line for periarticular soft tissue pathology. Less useful for intra-articular structures (ligaments, menisci — MRI preferred).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Joint Aspiration</div>
              <p>Haemarthrosis: blood ± fat globules indicates intra-articular fracture. Septic arthritis: turbid fluid, WCC &gt;50,000, Gram stain, culture. Crystal arthropathy: send for polarised light microscopy (negatively birefringent needles = gout; positively birefringent rhomboids = CPPD). Aspirate before antibiotics if possible.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Blood Tests</div>
              <p>FBE, CRP, ESR: inflammatory arthritis, septic arthritis. Uric acid: gout (note — may be normal during acute attack). Rheumatoid factor, anti-CCP: rheumatoid arthritis. Blood glucose and HbA1c: diabetes as a risk factor. Blood cultures if septic arthritis suspected.</p>
            </div>
          </div>

          <div className="info-box">
            <h4>Ottawa Knee Rules — When to X-Ray</h4>
            <p>X-ray is indicated if any of the following are present: age 55 years or older, isolated tenderness of the fibular head, isolated tenderness of the patella (no other bony tenderness), inability to flex the knee to 90°, or inability to weight bear (4 steps) both immediately after injury and in the clinic. These rules have 98–100% sensitivity for clinically significant fractures.</p>
          </div>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
