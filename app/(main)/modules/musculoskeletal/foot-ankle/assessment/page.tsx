import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export default function MskFootAnkleAssessmentPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Foot &amp; Ankle</h1>
        <p>Foot and ankle pain, sprains, plantar fasciitis, and common foot presentations</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/foot-ankle" />

      <div className="content-prose">

        <section className="content-section">
          <h2>History</h2>

          <h3>Mechanism and Onset</h3>
          <ul>
            <li><strong>Mechanism</strong> — inversion (lateral ankle sprain), FOOSH onto foot, direct crush, twisting (Lisfranc), overuse (stress fracture, tendinopathy)</li>
            <li><strong>Location</strong> — lateral (ATFL sprain), medial (deltoid sprain, posterior tibial tendon), heel (plantar fasciitis), midfoot (Lisfranc, stress fracture), forefoot (Morton&apos;s, MTP pathology), posterior (Achilles)</li>
            <li><strong>Onset</strong> — acute trauma vs gradual onset (overuse, degenerative)</li>
            <li><strong>Ability to weight bear</strong> — immediately after injury and currently (Ottawa Rules criteria)</li>
          </ul>

          <h3>Symptoms</h3>
          <ul>
            <li><strong>Swelling</strong> — location and onset (immediate haemarthrosis vs delayed effusion)</li>
            <li><strong>Morning pain/stiffness</strong> — plantar fasciitis (worst first step), Achilles tendinopathy (morning stiffness improving with warmup)</li>
            <li><strong>Burning/tingling in forefoot</strong> — Morton&apos;s neuroma (worse in tight shoes, relieved by removing shoes)</li>
            <li><strong>Plantar arch bruising</strong> — Lisfranc injury (pathognomonic)</li>
          </ul>

          <h3>Relevant History</h3>
          <ul>
            <li>Footwear — narrow shoes (Morton&apos;s, hallux valgus), unsupportive (plantar fasciitis), new running shoes</li>
            <li>Activity level and recent changes — running (stress fractures, Achilles), sport type, training load increase</li>
            <li>Diabetes — neuropathic foot, infection risk, diabetic foot ulcer</li>
            <li>Osteoporosis — fragility fracture risk</li>
            <li>Vascular disease — PAD in diabetic foot assessment</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Ottawa Ankle and Foot Rules</h2>

          <div className="info-box">
            <h4>Ottawa Ankle Rules — X-ray the Ankle If:</h4>
            <p>
              Bony tenderness at the posterior edge or tip of the lateral malleolus (distal 6cm), OR bony tenderness at the posterior edge or tip of the medial malleolus (distal 6cm), OR inability to weight bear 4 steps both immediately after the injury AND in clinic. Sensitivity &gt;99% for clinically significant fractures. Do NOT X-ray based on swelling and bruising alone.
            </p>
          </div>

          <div className="info-box">
            <h4>Ottawa Foot Rules — X-ray the Foot If:</h4>
            <p>
              Bony tenderness at the base of the 5th metatarsal, OR bony tenderness at the navicular, OR inability to weight bear 4 steps both immediately after the injury AND in clinic. Sensitivity &gt;99% for clinically significant fractures. Document your Ottawa assessment in every ankle and foot injury presentation.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Observation</h3>
          <ul>
            <li>Weight-bearing alignment — pes planus (flat foot), pes cavus (high arch), hindfoot valgus (PTTD) or varus</li>
            <li>Gait assessment — antalgic, foot drop, Trendelenburg</li>
            <li>Swelling distribution — lateral (ATFL), medial (deltoid, PTTD), posterior (Achilles, retrocalcaneal bursa), plantar arch (Lisfranc)</li>
            <li>Bruising — plantar arch bruising is pathognomonic of Lisfranc injury</li>
            <li>Skin — calluses, ulceration (diabetic foot), colour changes (ischaemia)</li>
          </ul>

          <h3>Palpation — Systematic</h3>
          <ul>
            <li><strong>Lateral malleolus posterior tip</strong> — Ottawa ankle fracture point</li>
            <li><strong>Medial malleolus posterior tip</strong> — Ottawa ankle fracture point</li>
            <li><strong>ATFL</strong> — just anterior to lateral malleolus</li>
            <li><strong>CFL</strong> — inferior to lateral malleolus</li>
            <li><strong>Medial malleolus and deltoid ligament</strong></li>
            <li><strong>Base 5th metatarsal</strong> — avulsion fracture point (Ottawa foot rule)</li>
            <li><strong>Navicular</strong> — Ottawa foot rule; stress fracture</li>
            <li><strong>Medial calcaneal tuberosity</strong> — plantar fasciitis</li>
            <li><strong>Achilles tendon</strong> — mid-portion vs insertional tenderness, swelling, palpable gap (rupture)</li>
            <li><strong>Metatarsal heads</strong> — Morton&apos;s neuroma pressure point (3rd–4th interspace most common)</li>
            <li><strong>Midfoot (Lisfranc)</strong> — tenderness at tarsometatarsal joints</li>
          </ul>

          <h3>Special Tests</h3>
          <ul>
            <li><strong>Simmonds-Thompson test (calf squeeze)</strong> — patient prone, knees at 90°, squeeze calf. No ankle plantarflexion = Achilles tendon rupture. Note: preserved plantarflexion does NOT exclude rupture (other flexors compensate).</li>
            <li><strong>Anterior drawer test</strong> — stabilise tibia, translate talus anteriorly. Increased translation and soft endpoint = ATFL rupture.</li>
            <li><strong>Talar tilt test</strong> — inversion stress to the ankle. Increased tilt = CFL injury.</li>
            <li><strong>Windlass test</strong> — passive great toe dorsiflexion. Reproduction of medial heel pain = plantar fasciitis.</li>
            <li><strong>Mulder&apos;s click</strong> — transverse forefoot compression while applying dorsoplantar pressure to the intermetatarsal space. Reproducible click with pain = Morton&apos;s neuroma.</li>
            <li><strong>Single heel raise</strong> — patient rises on tiptoes on affected foot. Inability = posterior tibial tendon dysfunction.</li>
            <li><strong>Midfoot squeeze test</strong> — lateral compression of midfoot. Reproduction of midfoot pain = Lisfranc pathology.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>

          <h3>Imaging</h3>
          <ul>
            <li><strong>X-ray</strong> — applying Ottawa Rules. Weight-bearing views mandatory for Lisfranc assessment (non-weight bearing views can miss widening). Calcaneal X-ray for calcaneal fractures (axial view).</li>
            <li><strong>MRI</strong> — ligament tears (ATFL, deltoid), tendon pathology (Achilles, posterior tibial), Lisfranc ligament injury, stress fractures, osteochondral lesions of the talus. Most sensitive for occult fractures and stress reactions.</li>
            <li><strong>CT</strong> — complex fractures (calcaneal, tarsal), tarsal coalition, surgical planning. CT more sensitive than X-ray for Lisfranc bony injury.</li>
            <li><strong>Ultrasound</strong> — tendon pathology (Achilles, posterior tibial), Morton&apos;s neuroma, plantar fascia thickness measurement, guided injection (Achilles peritenon, plantar fascia, Morton&apos;s).</li>
            <li><strong>Bone scan</strong> — stress fracture when X-ray normal and MRI unavailable. High sensitivity for early stress reactions.</li>
          </ul>

          <h3>Vascular and Neurological Assessment</h3>
          <ul>
            <li><strong>Monofilament testing (10g Semmes-Weinstein)</strong> — peripheral neuropathy in diabetic foot. Test plantar surface 1st, 3rd, and 5th metatarsal heads, heel, and dorsum of foot.</li>
            <li><strong>Ankle-brachial index (ABI)</strong> — vascular assessment in diabetic foot, suspected peripheral arterial disease. ABI &lt;0.9 = PAD; &lt;0.5 = severe ischaemia.</li>
            <li><strong>Doppler ultrasound</strong> — assess pedal pulses and flow when ischaemia suspected.</li>
          </ul>

          <h3>Bloods</h3>
          <ul>
            <li>HbA1c, blood glucose — diabetes assessment, glycaemic control</li>
            <li>FBE, CRP, ESR — infection, inflammatory arthritis</li>
            <li>Serum uric acid — gout (note: may be normal during acute attack)</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/foot-ankle" />

    </div>
  );
}
