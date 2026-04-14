import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export default function MskElbowAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Elbow</h1>
        <p>Lateral epicondylitis, medial epicondylitis, olecranon bursitis, and elbow pain presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/elbow" />

      <div className="content-prose">

        <section className="content-section">
          <h2>History</h2>

          <h3>Pain Assessment</h3>
          <ul>
            <li><strong>Location</strong> — lateral epicondyle (epicondylalgia, radial head), medial epicondyle (medial epicondylalgia, cubital tunnel), posterior (olecranon bursitis, triceps tendinopathy), anterior (distal biceps, brachialis), diffuse (fracture, arthritis, referred pain)</li>
            <li><strong>Onset and mechanism</strong> — acute (trauma, FOOSH, dislocation, tendon rupture) versus insidious (tendinopathy, nerve entrapment); gradual onset with overuse activities</li>
            <li><strong>Aggravating activities</strong> — gripping, wrist extension (lateral epicondylalgia), lifting with pronation (medial epicondylalgia), prolonged elbow flexion such as typing or phone use (cubital tunnel), direct pressure on the olecranon (olecranon bursitis), forearm rotation (radial head fracture)</li>
            <li><strong>Neurological symptoms</strong> — ring and little finger tingling or numbness (ulnar nerve/cubital tunnel), thumb, index, and middle finger tingling (median nerve/carpal tunnel, often coexists), weakness in grip or pinch (intrinsic hand muscles)</li>
            <li><strong>Swelling</strong> — intra-articular (fracture, septic arthritis, haemarthrosis) versus posterior olecranon (bursa)</li>
          </ul>

          <h3>Relevant History</h3>
          <ul>
            <li><strong>Occupation and sport</strong> — manual trades, keyboard workers, racquet sports (lateral epicondylalgia); throwing athletes (medial epicondylalgia, UCL stress); contact sports (elbow dislocation)</li>
            <li><strong>Prior treatment</strong> — corticosteroid injections (note Coombes 2013: worse long-term outcomes for lateral epicondylalgia), physiotherapy, surgery</li>
            <li><strong>Systemic conditions</strong> — diabetes (increased risk of septic bursitis), rheumatoid arthritis (olecranon nodules, joint involvement), gout or pseudogout (acute monoarthritis), immunosuppression (septic bursitis risk)</li>
            <li><strong>Red flag features</strong> — fever, weight loss, night pain (septic arthritis, malignancy), history of malignancy, anticoagulant use, sudden pop or snap (tendon rupture)</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Inspection</h3>
          <ul>
            <li>Carrying angle (normal 5–15° valgus) — increased valgus may indicate prior lateral condyle fracture malunion</li>
            <li>Swelling — posterior olecranon (bursa vs intra-articular), antecubital fossa (haemarthrosis, distal biceps rupture)</li>
            <li>Bruising — antecubital fossa bruising suggests distal biceps tendon rupture; lateral elbow bruising after FOOSH suggests radial head fracture</li>
            <li>Muscle bulk — biceps, wrist extensors (lateral epicondylalgia), intrinsic hand muscles (cubital tunnel — check for hypothenar wasting)</li>
            <li>Skin — erythema and swelling over olecranon (septic bursitis), skin breakdown over bony prominences</li>
          </ul>

          <h3>Palpation</h3>
          <ul>
            <li><strong>Lateral epicondyle</strong> — tenderness at or just distal to the epicondyle (extensor carpi radialis brevis origin in lateral epicondylalgia)</li>
            <li><strong>Medial epicondyle</strong> — tenderness at medial epicondyle (medial epicondylalgia); note relationship to ulnar nerve groove posteriorly</li>
            <li><strong>Radial head</strong> — pain on palpation with forearm rotation in radial head fracture</li>
            <li><strong>Olecranon bursa</strong> — posterior fluctuant mass; assess for warmth, erythema, and tenderness (septic vs aseptic)</li>
            <li><strong>Cubital tunnel</strong> — ulnar nerve at the medial epicondyle groove — tenderness and Tinel&apos;s</li>
            <li><strong>Distal biceps tendon</strong> — palpate in antecubital fossa; absent cord suggests rupture</li>
            <li><strong>Point 3–4 cm distal to lateral epicondyle</strong> — tenderness here, not at the epicondyle, suggests radial tunnel syndrome</li>
          </ul>

          <h3>Range of Motion</h3>
          <ul>
            <li>Flexion/extension (normal 0–145°) — limited extension in haemarthrosis, fracture, OA, contracture</li>
            <li>Pronation/supination (normal 80–85° each) — painful rotation suggests radial head fracture or radiocapitellar arthritis</li>
            <li>Wrist flexion and extension — for tendinopathy assessment and neurological assessment</li>
          </ul>

          <h3>Neurological Assessment</h3>
          <ul>
            <li>Sensation in ulnar nerve territory — little finger and ring finger (medial aspect)</li>
            <li>Intrinsic hand muscle strength — first dorsal interosseous (index finger abduction), hypothenar muscles (abductor digiti minimi)</li>
            <li>Froment&apos;s sign — adductor pollicis weakness; patient flexes IP joint of thumb when pinching paper (ulnar nerve palsy)</li>
            <li>Grip strength with dynamometer — compare bilateral (reduced in lateral epicondylalgia and cubital tunnel syndrome)</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Special Tests</h2>

          <h3>Lateral Elbow Tests</h3>
          <ul>
            <li><strong>Cozen&apos;s test</strong> — patient makes a fist and extends wrist against examiner resistance (elbow extended, forearm pronated). Pain reproduced at lateral epicondyle = positive. High sensitivity for lateral epicondylalgia.</li>
            <li><strong>Mill&apos;s test</strong> — examiner passively flexes patient&apos;s wrist with elbow extended, stretching the extensor origin. Pain at lateral epicondyle = positive. Stretches ECRB.</li>
            <li><strong>Maudsley&apos;s test</strong> — resisted extension of the middle finger with elbow extended. Pain at lateral epicondyle = positive (loads ECRB).</li>
          </ul>

          <h3>Medial Elbow Tests</h3>
          <ul>
            <li><strong>Medial epicondyle test</strong> — resisted wrist flexion and forearm pronation. Pain at medial epicondyle = positive (loads flexor-pronator origin).</li>
            <li><strong>Valgus stress test</strong> — examiner applies valgus force to elbow at 20–30° flexion. Pain or gapping at medial side = positive UCL injury.</li>
          </ul>

          <h3>Cubital Tunnel (Ulnar Nerve) Tests</h3>
          <ul>
            <li><strong>Elbow flexion test</strong> — patient maximally flexes elbow and holds for 1 minute. Reproduction of ring/little finger tingling = positive cubital tunnel syndrome (sensitivity ~75%).</li>
            <li><strong>Tinel&apos;s sign at cubital tunnel</strong> — percuss over the ulnar nerve in the cubital tunnel groove. Tingling or electric shock into ring and little fingers = positive.</li>
          </ul>

          <h3>Distal Biceps Tests</h3>
          <ul>
            <li><strong>Hook test</strong> — elbow at 90°, forearm supinated. Examiner hooks index finger under the lateral edge of the biceps tendon from the antecubital fossa. Absence of a palpable cord = positive, indicating complete distal biceps tendon rupture. Sensitivity and specificity approaching 100% for complete rupture.</li>
            <li><strong>Biceps squeeze test</strong> — squeeze the biceps muscle belly with elbow at 60–80°. Normal: forearm supinates. No supination = distal biceps rupture.</li>
          </ul>

          <div className="info-box">
            <h4>Posterior Fat Pad Sign</h4>
            <p>
              On a true lateral elbow X-ray, a posterior fat pad sign (displaced posterior fat pad visible as a dark triangle behind the distal humerus) indicates an intra-articular effusion — haemarthrosis. Even in the absence of a visible fracture line, a posterior fat pad sign should be treated as an occult fracture (most commonly radial head or capitellum). Manage with a collar-and-cuff sling, analgesia, and orthopaedic review or repeat imaging at 10–14 days.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>

          <h3>Imaging</h3>
          <ul>
            <li><strong>X-ray elbow (AP and lateral)</strong> — first-line for acute trauma. Assess for fracture lines, fat pad signs, joint space narrowing (OA), loose bodies, and calcification (calcific tendinopathy). Lateral condyle and radial head fractures may be subtle — look for posterior fat pad sign.</li>
            <li><strong>Ultrasound elbow</strong> — dynamic assessment of tendon integrity, assessment for olecranon bursal fluid, and guidance for aspiration or injection. Can detect partial and complete tendon tears (ECRB, distal biceps).</li>
            <li><strong>MRI elbow</strong> — gold standard for soft tissue assessment. Indicated for suspected distal biceps tear, UCL injury, occult fracture, nerve entrapment, and tendinopathy not responding to initial management.</li>
            <li><strong>CT elbow</strong> — complex fractures (radial head Mason III/IV, distal humerus, olecranon), pre-operative planning, assessment of occult fractures when X-ray inconclusive.</li>
          </ul>

          <h3>Nerve Studies</h3>
          <ul>
            <li><strong>Nerve conduction studies (NCS) and EMG</strong> — gold standard for confirming cubital tunnel syndrome. NCS demonstrates reduced conduction velocity across the elbow segment of the ulnar nerve. EMG of intrinsic hand muscles (first dorsal interosseous, hypothenar muscles) identifies denervation. Also assesses for concurrent median neuropathy (carpal tunnel syndrome).</li>
          </ul>

          <h3>Joint Aspiration</h3>
          <ul>
            <li><strong>Olecranon bursa aspiration</strong> — for diagnostic uncertainty between septic and aseptic bursitis. Send synovial fluid for Gram stain, culture, sensitivity, white cell count, and crystal microscopy.</li>
            <li><strong>Elbow joint aspiration</strong> — for acute monoarthritis with fever (exclude septic arthritis). Send for Gram stain, culture, crystal analysis. Do not commence antibiotics before aspiration where possible.</li>
          </ul>

          <h3>Bloods</h3>
          <ul>
            <li>FBE, CRP, ESR — systemic inflammation in septic arthritis or bursitis</li>
            <li>Serum uric acid — elevated in gout (note: may be normal during acute attack — not diagnostic)</li>
            <li>Blood cultures — if septic arthritis or septic bursitis suspected with systemic features</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/elbow" />

    </div>
  );
}
