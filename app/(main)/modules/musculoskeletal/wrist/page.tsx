import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function MskWristPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Wrist &amp; Hand</h1>
        <p>Wrist and hand pain, fractures, tendinopathy, and nerve entrapment syndromes</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/wrist" />

      <div className="content-prose">

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Flexor tenosynovitis (Kanavel&apos;s signs)</strong> — sausage digit, finger held in flexion, pain with passive extension, volar sheath tenderness. Emergency surgical referral within hours — irreversible tendon damage without washout.</li>
            <li><strong>Scaphoid fracture with anatomical snuffbox tenderness</strong> — treat as fracture even with normal X-ray. Immobilise and arrange MRI or repeat X-ray in 10–14 days.</li>
            <li><strong>High-pressure injection injury</strong> — grease gun, paint gun. Tiny entry wound belies severe internal damage. Emergency surgical debridement regardless of initial appearance.</li>
            <li><strong>Acute compartment syndrome of the hand</strong> — severe pain, paraesthesia, tense swelling, pallor — emergency transfer.</li>
            <li><strong>Open fracture or dislocation</strong> — contaminated wound or neurovascular compromise — call 000.</li>
            <li><strong>Rapidly spreading hand cellulitis or suspected septic joint</strong> — emergency IV antibiotics and surgical review.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Wrist &amp; Hand Presentations</h2>
          <p>
            Hand and wrist conditions are among the most common musculoskeletal presentations in primary care, emergency, and occupational health settings. The hand is a complex anatomical structure — accurate diagnosis and timely management prevent long-term functional disability. NPs must be able to distinguish urgent from non-urgent conditions, apply appropriate initial management, and refer appropriately. The consequences of a missed scaphoid fracture, unrecognised flexor tenosynovitis, or delayed high-pressure injection injury are severe and preventable.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Scaphoid Fracture</h3>
          <p>
            The most commonly missed fracture in the wrist. Falls on an outstretched hand (FOOSH) is the classic mechanism — the scaphoid is the most commonly fractured carpal bone. Anatomical snuffbox tenderness (the depression between the extensor pollicis longus and extensor pollicis brevis tendons, palpated with the wrist in radial deviation) has sensitivity &gt;90% for scaphoid fracture. Plain X-ray has a 20–30% false negative rate in the first 10–14 days. Management: if clinical suspicion exists — immobilise in a scaphoid cast (thumb spica) and arrange MRI or repeat X-ray at 10–14 days. MRI is the most sensitive imaging modality. Missing a scaphoid fracture risks avascular necrosis of the proximal pole and non-union — leading to SNAC wrist.
          </p>

          <h3>Colles Fracture</h3>
          <p>
            Most common wrist fracture in adults over 50. Extra-articular distal radius fracture with dorsal displacement — &ldquo;dinner fork&rdquo; deformity on lateral X-ray. Mechanism: FOOSH with wrist in dorsiflexion, most common in osteoporotic women after a fall. Management: closed reduction under haematoma block or procedural sedation, below-elbow plaster. Orthopaedic referral if intra-articular, failed reduction, neurovascular compromise, or young patient. Always assess and treat underlying osteoporosis after a fragility wrist fracture.
          </p>

          <h3>Carpal Tunnel Syndrome</h3>
          <p>
            Most common peripheral nerve entrapment. Median nerve compression beneath the flexor retinaculum at the wrist. Presentation: pain and paraesthesia in the thumb, index, middle, and radial half of ring finger. Nocturnal symptoms are characteristic — waking at night, shaking the hand for relief. Thenar wasting indicates severe, prolonged compression. Phalen&apos;s test (sustained wrist flexion 60 seconds) and Tinel&apos;s sign at the wrist confirm the diagnosis. NCS confirm severity. Management: wrist splint in neutral position at night, activity modification, corticosteroid injection (effective short-term), surgical carpal tunnel decompression for refractory cases or thenar wasting.
          </p>

          <h3>De Quervain&apos;s Tenosynovitis</h3>
          <p>
            Stenosing tenosynovitis of the first dorsal compartment — abductor pollicis longus (APL) and extensor pollicis brevis (EPB) tendons. Radial-sided wrist pain over the radial styloid, worse with thumb use. Common in new mothers, after increased repetitive thumb use, and in middle-aged women. Finkelstein&apos;s test: patient makes a fist with thumb tucked inside, examiner ulnar deviates the wrist — positive if this reproduces the patient&apos;s radial wrist pain. Management: thumb spica splint, NSAIDs, corticosteroid injection into the first dorsal compartment (highly effective — 70–80% resolution), surgical release for refractory cases.
          </p>

          <h3>Trigger Finger (Stenosing Flexor Tenosynovitis)</h3>
          <p>
            Nodular thickening of the flexor tendon catches on the A1 pulley at the base of the finger (distal palmar crease), causing the finger to catch or lock in flexion. Ring finger most common. Associated with diabetes, repetitive gripping, and rheumatoid arthritis. Tender nodule palpable at the A1 pulley. Management: corticosteroid injection into the tendon sheath at the A1 pulley (70–80% resolution), night extension splinting, surgical A1 pulley release for refractory or recurrent cases.
          </p>

          <h3>Flexor Tenosynovitis — Kanavel&apos;s Signs (EMERGENCY)</h3>
          <p>
            Bacterial infection of the closed flexor tendon sheath — spreads rapidly causing irreversible tendon damage and hand deformity within hours if untreated. Kanavel&apos;s four cardinal signs: 1) Uniform oedema of the entire finger (sausage digit), 2) Finger held in slight flexion at rest, 3) Severe pain with passive extension of the finger, 4) Tenderness along the entire volar flexor tendon sheath. Emergency surgical referral — IV antibiotics and urgent surgical tendon sheath washout. Do not confuse with trigger finger (benign) or felon (fingertip pulp abscess).
          </p>

          <h3>Dupuytren&apos;s Contracture</h3>
          <p>
            Fibromatosis of the palmar fascia — progressive nodules and cords causing flexion contracture of fingers. Ring and little fingers most commonly affected. Usually painless. Associated with: diabetes, alcohol excess, liver disease, phenytoin, smoking, northern European ancestry. Referral threshold: MCP joint contracture ≥30°, any PIP joint contracture, or functional impairment (tabletop test). Treatment options: needle fasciotomy, collagenase clostridium histolyticum injection (Xiaflex), open surgical fasciectomy.
          </p>

          <h3>Mallet Finger</h3>
          <p>
            Avulsion of the terminal extensor tendon at its insertion on the dorsal base of the distal phalanx. Mechanism: forced flexion of an extended DIP joint (ball sports). Cannot actively extend the DIP joint — finger droops. Management: continuous DIP extension splinting for 6–8 weeks (24 hours per day — splint must never be removed or the 6 weeks restart). PIP joint left free to move. Bony avulsion involving &gt;30% articular surface or subluxation — orthopaedic referral.
          </p>

          <h3>Gamekeeper&apos;s / Skier&apos;s Thumb</h3>
          <p>
            Ulnar collateral ligament (UCL) rupture of the thumb MCP joint. Mechanism: forced radial deviation or hyperabduction of the thumb. Stener lesion: complete UCL rupture with the torn ligament folded above the adductor aponeurosis — cannot heal without surgery. Incomplete tears (&lt;30° laxity): thumb spica cast 4–6 weeks. Complete tears or Stener lesion: surgical repair. MRI confirms Stener lesion.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Anatomical snuffbox tenderness = scaphoid fracture until proven otherwise — never reassure on a normal initial X-ray.</li>
            <li>Kanavel&apos;s four signs = flexor tenosynovitis — emergency referral within hours. Do not confuse with trigger finger.</li>
            <li>High-pressure injection injuries look trivial — they are not. Emergency surgical debridement regardless of wound size.</li>
            <li>Mallet finger splint must never be removed — even momentarily. The 6 weeks restart from zero.</li>
            <li>Stener lesion in thumb UCL rupture = surgical repair — cannot heal conservatively.</li>
            <li>Colles fracture in an elderly woman = fragility fracture. Initiate osteoporosis assessment and treatment before discharge.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/wrist" />

      <ModuleSponsorSlot moduleSlug="musculoskeletal-wrist" />

    </div>
  );
}
