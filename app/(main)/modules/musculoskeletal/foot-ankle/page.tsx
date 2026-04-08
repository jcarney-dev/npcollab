import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function MskFootAnklePage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Foot &amp; Ankle</h1>
        <p>Foot and ankle pain, sprains, plantar fasciitis, and common foot presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/foot-ankle" />

      <div className="content-prose">

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Lisfranc injury</strong> — midfoot pain post-trauma, plantar bruising, inability to weight bear — urgent orthopaedic referral. Missed injury leads to chronic midfoot arthritis.</li>
            <li><strong>Acute compartment syndrome</strong> — severe pain, paraesthesia, tense compartment of foot or leg — emergency transfer.</li>
            <li><strong>Open fracture or dislocation</strong> — call 000.</li>
            <li><strong>Calcaneal fracture from fall from height</strong> — associated spinal injury must be excluded.</li>
            <li><strong>Suspected septic joint</strong> — hot, swollen ankle or foot joint with fever — emergency joint aspiration and IV antibiotics.</li>
            <li><strong>Acute arterial insufficiency</strong> — sudden cold, pale foot with absent pulses — call 000.</li>
            <li><strong>Necrotising fasciitis of the foot</strong> — rapidly spreading erythema, crepitus, systemic toxicity — call 000.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Foot &amp; Ankle Presentations</h2>
          <p>
            Foot and ankle conditions are extremely common in Australian primary care, emergency, and sports medicine settings. Accurate clinical assessment — particularly appropriate application of the Ottawa Rules — avoids unnecessary imaging while ensuring fractures are not missed. Early, accurate diagnosis and appropriate rehabilitation prevents chronic instability, arthritis, and long-term functional limitation. The NP role encompasses triage and risk stratification, evidence-based conservative management, appropriate imaging decisions, and timely specialist referral.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Ankle Sprain</h3>
          <p>
            Most common musculoskeletal injury presenting to emergency departments. Lateral ankle sprain from an inversion mechanism is most common — the anterior talofibular ligament (ATFL) is injured first, then the calcaneofibular ligament (CFL), then the posterior talofibular ligament (PTFL) in more severe sprains. Medial (deltoid ligament) sprains are less common and more often associated with fracture. Ottawa Ankle Rules guide X-ray decision — applied in all ankle injuries to avoid unnecessary imaging. Functional rehabilitation with early mobilisation and physiotherapy is superior to prolonged immobilisation. Proprioceptive training is essential to reduce re-injury risk — lateral ankle sprain recurs in up to 70% without rehabilitation.
          </p>

          <h3>Plantar Fasciitis</h3>
          <p>
            Most common cause of heel pain in adults — affects approximately 10% of the population at some point. Degenerative condition (fasciosis) at the calcaneal insertion of the plantar fascia. Classic presentation: severe first-step pain in the morning that improves after walking (the fascia warms up), returning after prolonged rest. Pain at the medial calcaneal tuberosity (plantar fascia origin). Calcaneal spur on X-ray is present in 50% of asymptomatic adults — it is incidental and does NOT require treatment. Management: plantar fascia stretching, calf stretching, supportive footwear, load modification. Most resolve within 12 months.
          </p>

          <h3>Achilles Tendinopathy</h3>
          <p>
            Degenerative condition (tendinosis) of the Achilles tendon — not inflammatory. Two forms: mid-portion (2–7cm above insertion) and insertional. Very common in runners and middle-aged adults. Morning stiffness, activity-related pain, tender swelling of the tendon. Eccentric and heavy slow resistance calf exercises are the most evidence-based treatment (Alfredsson protocol). Corticosteroid injection is contraindicated — significant Achilles tendon rupture risk.
          </p>

          <h3>Achilles Tendon Rupture</h3>
          <p>
            Sudden forceful plantarflexion — typically during recreational sport (push-off in racquet sports, jumping). Felt as a &ldquo;pop&rdquo; or a kick to the back of the leg. The patient may be able to walk (plantarflexion preserved through other flexors — do not be falsely reassured). Simmonds-Thompson (calf squeeze) test: patient prone, knees flexed 90°, squeeze the calf — no ankle plantarflexion = rupture. Urgent orthopaedic referral — both operative and non-operative (functional rehabilitation in equinus boot) achieve similar outcomes in most patients.
          </p>

          <h3>Lisfranc Injury</h3>
          <p>
            Tarsometatarsal joint complex injury — frequently missed and underdiagnosed. Mechanism: axial load on plantarflexed foot (standing on tiptoes and falling), direct crush, twisting. Midfoot pain and swelling, inability to weight bear, bruising on the plantar aspect of the arch (pathognomonic). X-ray weight-bearing views: widening &gt;2mm between base of 1st and 2nd metatarsals. Missed Lisfranc injury leads to progressive midfoot arthritis and chronic disability. Urgent orthopaedic referral — surgical fixation required for unstable injuries.
          </p>

          <h3>Morton&apos;s Neuroma</h3>
          <p>
            Perineural fibrosis of the common digital nerve — most common between 3rd and 4th metatarsal heads. Burning pain and paraesthesia in the forefoot, worse in tight shoes, relieved by removing shoes and massaging. Mulder&apos;s click: squeeze the forefoot transversely while applying dorsoplantar pressure — reproducible click with pain. Ultrasound confirms diagnosis. Management: wide-toed footwear, metatarsal pad, corticosteroid injection (50–70% effective), surgical excision for refractory cases.
          </p>

          <h3>Posterior Tibial Tendon Dysfunction</h3>
          <p>
            Degenerative condition of the posterior tibial tendon — most common cause of adult acquired flatfoot. Presents insidiously: medial ankle pain, progressive flatfoot deformity, &ldquo;too many toes&rdquo; sign (more than 2 toes visible lateral to the heel on posterior view). Single heel raise test: unable to perform on the affected side. Management: medial arch orthotic, physiotherapy (tibialis posterior strengthening), AFO for moderate dysfunction. Surgical reconstruction for advanced cases.
          </p>

          <h3>Hallux Valgus</h3>
          <p>
            Lateral deviation of the great toe at the MTP joint — bunion. Pain over the medial eminence, second toe overriding, shoe fitting difficulty. Management: wide-toed accommodative footwear, orthotics, splinting (does not correct deformity). Surgical correction (osteotomy) for significant pain and deformity not responding to conservative management.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Apply the Ottawa Ankle and Foot Rules consistently — sensitivity &gt;99% for fracture. Document your Ottawa assessment.</li>
            <li>Plantar arch bruising after midfoot trauma = Lisfranc until proven otherwise — do not weight bear.</li>
            <li>Calcaneal spur on X-ray = incidental finding. Does not cause plantar fasciitis and does not require treatment.</li>
            <li>Corticosteroid injection is absolutely contraindicated for Achilles tendinopathy — rupture risk is significant.</li>
            <li>Simmonds-Thompson test: no plantarflexion = Achilles rupture. Preserved plantarflexion does NOT exclude rupture.</li>
            <li>Navicular and Jones fractures are HIGH-RISK stress fractures — non-weight bearing and orthopaedic referral required.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleSponsorSlot moduleSlug="musculoskeletal-foot-ankle" />

    </div>
  );
}
