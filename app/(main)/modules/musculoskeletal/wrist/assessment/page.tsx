import ModuleTabs from '@/components/ModuleTabs';

export default function MskWristAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module — Assessment</span>
          <h1>MSK — Wrist &amp; Hand: Assessment</h1>
          <p className="page-subtitle">Structured history, systematic examination, and targeted investigations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/wrist" />

      <div className="content-body">

        <section className="content-section">
          <h2>History</h2>

          <h3>Mechanism and Onset</h3>
          <ul>
            <li><strong>Mechanism</strong> — FOOSH (scaphoid, Colles), crush, pinch, hyperextension (mallet, volar plate), twisting (TFCC), repetitive use (carpal tunnel, De Quervain&apos;s, trigger finger)</li>
            <li><strong>Dominant hand</strong> — functional and occupational impact</li>
            <li><strong>Occupation and hobbies</strong> — repetitive use, power tools, racquet sports, manual trades, keyboard work</li>
          </ul>

          <h3>Pain and Symptoms</h3>
          <ul>
            <li><strong>Location</strong> — radial (scaphoid, De Quervain&apos;s, first CMC OA), ulnar (TFCC, UCL thumb), volar (carpal tunnel, flexor tenosynovitis), dorsal (extensor tendon, fracture, ganglion)</li>
            <li><strong>Symptoms</strong> — pain, swelling, locking or triggering (trigger finger, Dupuytren&apos;s), clicking (TFCC, ganglion), numbness/tingling (median nerve — CTS, ulnar nerve — cubital or Guyon&apos;s), weakness, deformity</li>
            <li><strong>Nocturnal symptoms</strong> — waking with hand tingling and shaking for relief = carpal tunnel syndrome</li>
            <li><strong>Duration and progression</strong> — acute fracture vs insidious tendinopathy or nerve entrapment</li>
            <li><strong>Previous hand injuries or surgery</strong></li>
          </ul>

          <h3>Relevant Medical History</h3>
          <ul>
            <li>Diabetes — carpal tunnel, trigger finger, Dupuytren&apos;s, increased infection risk</li>
            <li>Rheumatoid arthritis — tenosynovitis, MCP/PIP joint involvement, boutonnière and swan-neck deformities</li>
            <li>Osteoporosis — fragility fracture risk (Colles, cough fracture)</li>
            <li>Pregnancy — carpal tunnel syndrome (usually resolves post-partum)</li>
            <li>Hypothyroidism — carpal tunnel syndrome risk</li>
            <li>Immunosuppression — increased risk of septic flexor tenosynovitis</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Inspection</h3>
          <ul>
            <li>Swelling — diffuse (fracture, haemarthrosis), localised (ganglion, Tietze-equivalent, bursa), fusiform digit (flexor tenosynovitis)</li>
            <li>Deformity — dinner fork (Colles), mallet droop, boutonnière, swan-neck, Dupuytren&apos;s cord</li>
            <li>Muscle wasting — thenar (median nerve/CTS), hypothenar (ulnar nerve)</li>
            <li>Skin changes — bruising, erythema, calluses, nail changes (psoriatic arthritis)</li>
            <li>Position at rest — finger held in flexion (flexor tenosynovitis)</li>
          </ul>

          <h3>Palpation</h3>
          <ul>
            <li><strong>Anatomical snuffbox</strong> — scaphoid fracture (wrist in radial deviation)</li>
            <li><strong>Radial styloid and first dorsal compartment</strong> — De Quervain&apos;s</li>
            <li><strong>A1 pulley (base of each finger, distal palmar crease)</strong> — trigger finger nodule</li>
            <li><strong>Palmar fascia</strong> — Dupuytren&apos;s cords and nodules</li>
            <li><strong>Volar flexor tendon sheath</strong> — flexor tenosynovitis (tenderness along entire sheath)</li>
            <li><strong>Ulnar aspect thumb MCP</strong> — UCL injury (Gamekeeper&apos;s/Skier&apos;s thumb)</li>
            <li><strong>Dorsal wrist 4cm proximal to Lister&apos;s tubercle</strong> — intersection syndrome</li>
            <li><strong>Ulnar wrist</strong> — TFCC (ulnar fovea sign — deep tenderness between FCU and ulnar styloid)</li>
          </ul>

          <h3>Range of Motion</h3>
          <ul>
            <li>Wrist flexion/extension (normal 0–80°/0–70°), radial/ulnar deviation, forearm pronation/supination</li>
            <li>Finger flexion, extension, and lateral motion at MCP, PIP, DIP joints</li>
            <li>Thumb opposition, abduction, and MCP/IP ROM</li>
          </ul>

          <h3>Neurovascular Assessment</h3>
          <ul>
            <li>Two-point discrimination — median (thumb/index/middle) and ulnar (ring/little) territories</li>
            <li>Grip and pinch strength — Jamar dynamometer if available; compare bilaterally</li>
            <li>Capillary refill, colour, temperature</li>
            <li>Allen&apos;s test — radial and ulnar artery patency (occlude both, release one, observe reperfusion)</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Special Tests</h2>

          <h3>Wrist Tests</h3>
          <ul>
            <li><strong>Finkelstein&apos;s test</strong> — thumb tucked in fist, examiner ulnar deviates wrist. Pain at radial styloid = De Quervain&apos;s tenosynovitis.</li>
            <li><strong>Phalen&apos;s test</strong> — sustained wrist flexion 60 seconds. Reproduction of median nerve distribution symptoms = carpal tunnel syndrome (sensitivity 68%, specificity 73%).</li>
            <li><strong>Tinel&apos;s sign at wrist</strong> — percuss over the carpal tunnel. Tingling in median nerve distribution = carpal tunnel.</li>
            <li><strong>TFCC load test</strong> — axial load through the wrist in ulnar deviation with forearm rotation. Pain at ulnar wrist = TFCC pathology.</li>
            <li><strong>Scaphoid axial compression test</strong> — axial compression through the thumb. Pain in anatomical snuffbox = scaphoid fracture.</li>
          </ul>

          <h3>Hand Tests</h3>
          <ul>
            <li><strong>Kanavel&apos;s signs</strong> — sausage digit, semiflexed posture, pain with passive extension, volar sheath tenderness (all four = flexor tenosynovitis emergency).</li>
            <li><strong>Tabletop test (Dupuytren&apos;s)</strong> — inability to place hand flat on a table = significant flexion contracture, referral threshold met.</li>
            <li><strong>UCL stress test (thumb)</strong> — apply radial stress to thumb MCP at 30° flexion and in full extension. Laxity and pain = UCL injury.</li>
            <li><strong>Froment&apos;s sign</strong> — ask patient to grip paper between thumb and index. Thumb IP joint flexion = adductor pollicis weakness = ulnar nerve palsy.</li>
          </ul>

          <div className="info-box">
            <h4>Kanavel&apos;s Four Signs — Flexor Tenosynovitis</h4>
            <p>
              All four signs together are diagnostic of infective flexor tenosynovitis — a surgical emergency. 1) Uniform oedema of the entire finger (fusiform/sausage digit). 2) Finger held in slight flexion at rest. 3) Severe pain with passive extension of the finger. 4) Tenderness along the entire volar flexor tendon sheath from palm to distal phalanx. Do not confuse with the benign trigger finger (tender A1 pulley nodule, no systemic features) or felon (localised distal pulp infection). Emergency surgical referral for IV antibiotics and tendon sheath washout within hours.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>

          <h3>Imaging</h3>
          <ul>
            <li><strong>X-ray wrist (PA, lateral, scaphoid views)</strong> — fractures, dislocations, degenerative changes, bony avulsion. Normal X-ray does NOT exclude scaphoid fracture.</li>
            <li><strong>MRI wrist</strong> — scaphoid fracture (most sensitive), ligament tears (TFCC, UCL), tendon pathology, occult fractures, avascular necrosis.</li>
            <li><strong>CT wrist</strong> — complex fractures, carpal instability, surgical planning, scaphoid non-union assessment.</li>
            <li><strong>Ultrasound</strong> — tendon pathology (De Quervain&apos;s, trigger finger nodule), ganglion confirmation, joint effusion, guided injection (De Quervain&apos;s, carpal tunnel, trigger finger).</li>
          </ul>

          <h3>Nerve Studies</h3>
          <ul>
            <li><strong>Nerve conduction studies (NCS)</strong> — confirm CTS diagnosis and severity (sensory and motor latencies across the wrist), ulnar nerve at Guyon&apos;s canal or cubital tunnel. Guides surgical decision-making.</li>
          </ul>

          <h3>Bloods</h3>
          <ul>
            <li>FBE, CRP, ESR — infection (flexor tenosynovitis, septic arthritis), inflammatory arthritis</li>
            <li>RF, anti-CCP, ANA — rheumatoid or other inflammatory arthritis</li>
            <li>Serum uric acid — gout (note: may be normal during acute attack)</li>
            <li>TSH — hypothyroidism associated with CTS</li>
            <li>Blood glucose/HbA1c — diabetes (trigger finger, CTS, Dupuytren&apos;s risk)</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
