import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'MSK — Elbow Clinical Module',
  description: 'Australian NP elbow module — lateral and medial epicondylitis, olecranon bursitis, nerve entrapment, and elbow fractures. SOAP notes and quiz.',
  openGraph: {
    title: 'MSK — Elbow Clinical Module | NPCollab',
    description: 'Australian NP elbow module — lateral and medial epicondylitis, olecranon bursitis, nerve entrapment, and elbow fractures. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/musculoskeletal/elbow',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/musculoskeletal/elbow',
  },
};

export default function MskElbowPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Elbow</h1>
        <p>Lateral epicondylitis, medial epicondylitis, olecranon bursitis, and elbow pain presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/elbow" />

      <div className="content-prose">

        <p>Elbow pain is a common presentation in primary care, most frequently due to lateral and medial epicondylitis in working-age adults, but also including acute injuries, entrapment neuropathies, and inflammatory arthropathies. NPs must distinguish lateral from medial epicondylitis, identify nerve entrapment syndromes, and recognise red flags including fractures and septic arthritis. A thorough history of activity and occupation, combined with targeted physical examination, guides accurate diagnosis and effective conservative management.</p>

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Distal biceps tendon rupture</strong> — sudden anterior elbow pain, bruising in the antecubital fossa, Popeye deformity, absent cord on hook test. Surgical repair within 2–3 weeks for optimal outcomes — urgent orthopaedic referral.</li>
            <li><strong>Elbow dislocation</strong> — deformity after trauma with neurovascular compromise. Assess radial pulse and median/ulnar nerve function — call 000 for vascular compromise.</li>
            <li><strong>Open fracture</strong> — bone exposed through wound — call 000.</li>
            <li><strong>Compartment syndrome after trauma</strong> — severe pain, tense forearm, pain on passive finger extension — call 000.</li>
            <li><strong>Septic arthritis</strong> — hot, swollen, severely restricted joint with fever. Emergency joint aspiration and IV antibiotics.</li>
            <li><strong>Medial epicondyle avulsion in a child</strong> — displaced fragment may be incarcerated within the joint. Ulnar nerve injury must be excluded. Urgent paediatric orthopaedic referral.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Elbow Presentations</h2>
          <p>
            Elbow pain accounts for a significant proportion of musculoskeletal presentations in primary care and occupational health settings. As an NP, your role encompasses accurate clinical diagnosis, appropriate investigation, initiation of evidence-based conservative management, and identification of conditions requiring specialist referral. The majority of elbow presentations are tendinopathy or nerve entrapment syndromes managed conservatively; however, fractures, dislocations, and septic arthritis require prompt recognition and intervention.
          </p>
          <p>
            A systematic approach to elbow examination — including palpation of bony landmarks, assessment of nerve territories, and specific provocative tests — is fundamental to accurate diagnosis. Understanding the anatomy of the medial and lateral epicondyle, olecranon, cubital tunnel, and radial tunnel enables confident diagnosis of the most common presentations.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Lateral Epicondylalgia (Tennis Elbow)</h3>
          <p>
            The most common cause of lateral elbow pain, affecting 1–3% of adults. Tendinopathy of the extensor carpi radialis brevis (ECRB) origin at the lateral epicondyle. Presents with lateral elbow pain on gripping, lifting, and wrist extension activities. Cozen&apos;s test (resisted wrist extension, elbow extended) and Mill&apos;s test (passive wrist flexion with elbow extended) are positive. Lateral epicondyle tenderness on palpation is characteristic.
          </p>
          <p>
            The landmark Coombes et al (2013) RCT demonstrated that corticosteroid injection had significantly worse outcomes than placebo at 1 year, with higher recurrence rates. Current management centres on progressive tendon loading — high-load strength training (HSR wrist extensor exercises), ergonomic modification, and NSAIDs short-term. Condition resolves spontaneously in 12–18 months in most cases. Surgical debridement of the ECRB origin achieves 80–90% success in refractory cases after 6–12 months of failed conservative management.
          </p>

          <h3>Medial Epicondylalgia (Golfer&apos;s Elbow)</h3>
          <p>
            Tendinopathy of the flexor-pronator mass origin at the medial epicondyle. Less common than lateral epicondylalgia. Pain on resisted wrist flexion and pronation, medial epicondyle tenderness. Important to assess for concurrent cubital tunnel syndrome (ulnar nerve entrapment) due to the proximity of the ulnar nerve — positive Tinel&apos;s at the cubital tunnel or elbow flexion test indicates coexisting nerve involvement. Management mirrors lateral epicondylalgia: progressive loading of the flexor-pronator mass, activity modification, short-term NSAIDs.
          </p>

          <h3>Cubital Tunnel Syndrome</h3>
          <p>
            Ulnar nerve entrapment at the cubital tunnel (medial elbow) — the second most common peripheral nerve entrapment after carpal tunnel syndrome. Presents with ring and little finger tingling and numbness, intrinsic hand weakness (grip and pinch), and symptoms provoked by prolonged elbow flexion. Elbow flexion test (maximal elbow flexion for 1 minute reproducing symptoms) and Tinel&apos;s sign at the cubital tunnel are key examination findings. Nerve conduction studies confirm the diagnosis, demonstrating reduced conduction velocity across the elbow segment. Management: activity modification, elbow extension splinting at night, avoiding prolonged elbow flexion. Surgical decompression or transposition for refractory cases.
          </p>

          <h3>Olecranon Bursitis</h3>
          <p>
            Fluctuant swelling over the posterior elbow at the olecranon — the bursa lies subcutaneously and is easily palpated. Aseptic (traumatic or idiopathic) bursitis: typically painless, no systemic features, full ROM. Management: elbow padding, NSAIDs, activity modification — avoid aspiration unless diagnostic uncertainty. Septic bursitis: erythema, tenderness, warmth, fever, systemic illness — aspirate and send for culture; treat with flucloxacillin 500mg QID for Staphylococcal infection. Risk factors for septic bursitis include diabetes, immunosuppression, and skin disruption over the bursa.
          </p>

          <h3>Radial Head Fracture</h3>
          <p>
            The most common elbow fracture in adults. Mechanism: fall onto an outstretched hand (FOOSH). Lateral elbow pain, pain on forearm rotation, effusion. X-ray may show a posterior fat pad sign indicating haemarthrosis — an occult radial head fracture should be assumed even if no fracture line is visible. Mason classification: Type I (non-displaced — collar-and-cuff, early mobilisation), Type II (partial articular, &gt;2mm displacement — orthopaedic review), Type III (comminuted — operative management), Type IV (radial head fracture with elbow dislocation — complex surgical management).
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Corticosteroid injection for lateral epicondylalgia provides short-term relief but worsens long-term outcomes — do not offer routinely (Coombes et al 2013).</li>
            <li>A posterior fat pad sign on lateral elbow X-ray indicates haemarthrosis — treat as occult fracture even with no visible fracture line.</li>
            <li>Medial epicondylalgia and cubital tunnel syndrome frequently coexist — always perform Tinel&apos;s at the cubital tunnel and elbow flexion test when assessing medial elbow pain.</li>
            <li>Tenderness 3–4 cm distal to the lateral epicondyle (not at the epicondyle) suggests radial tunnel syndrome — different diagnosis, different management.</li>
            <li>Distal biceps tendon rupture requires urgent surgical referral — delay beyond 2–3 weeks makes reconstruction significantly more difficult due to tendon retraction.</li>
            <li>The hook test is highly accurate for complete distal biceps rupture — no palpable cord under the biceps tendon = positive.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/elbow" />

      <ModuleSponsorSlot moduleSlug="musculoskeletal-elbow" />

    </div>
  );
}
