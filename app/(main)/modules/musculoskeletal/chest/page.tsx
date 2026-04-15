import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function MskChestPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Chest Wall</h1>
        <p>Chest wall pain, costochondritis, rib fractures, and musculoskeletal causes of chest pain</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/chest" />

      <div className="content-prose">

        <p>Musculoskeletal chest wall pain is common and frequently misdiagnosed, but it remains a diagnosis of exclusion — life-threatening cardiac and pulmonary causes must be systematically excluded before attributing chest pain to an MSK source. In Australian NP practice, the most common MSK chest wall diagnoses include costochondritis, Tietze syndrome, rib fractures, and intercostal muscle strains, often following cough, trauma, or physical exertion. A structured approach beginning with ECG, vital signs, and targeted history guides safe differentiation of MSK from non-MSK chest pain.</p>

        <div className="highlight-box">
          <h3>🚨 Red Flags — Always Exclude Before Diagnosing MSK Chest Pain</h3>
          <ul>
            <li><strong>Acute coronary syndrome</strong> — ECG and troponin mandatory for any exertional component or cardiac risk factors.</li>
            <li><strong>Aortic dissection</strong> — tearing pain radiating to the back, unequal BP in both arms — emergency transfer.</li>
            <li><strong>Pulmonary embolism</strong> — pleuritic chest pain, dyspnoea, tachycardia, risk factors — CTPA.</li>
            <li><strong>Tension pneumothorax</strong> — dyspnoea, absent breath sounds, tracheal deviation, haemodynamic instability — immediate needle decompression.</li>
            <li><strong>Oesophageal rupture (Boerhaave syndrome)</strong> — severe chest pain after vomiting, surgical emphysema — emergency transfer.</li>
            <li><strong>Rib fracture with haemothorax or pneumothorax</strong> — respiratory compromise — emergency transfer.</li>
            <li><strong>Flail chest</strong> — paradoxical chest wall movement with multiple rib fractures — life-threatening emergency — call 000.</li>
            <li><strong>Sternal fracture</strong> — significant trauma mechanism — urgent imaging.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Chest Wall Pain</h2>
          <p>
            Chest wall pain is extremely common and is frequently misattributed to cardiac causes, generating significant patient anxiety and unnecessary investigation. However, chest wall pain can also represent serious pathology — cardiac, pulmonary, and vascular causes must always be systematically excluded before a musculoskeletal diagnosis is made. NPs have a critical role in distinguishing MSK chest wall pain from life-threatening causes and in providing accurate reassurance once serious pathology is excluded.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Costochondritis</h3>
          <p>
            Inflammation of the costal cartilages — the most common cause of anterior chest wall pain in primary care. Affects the 2nd to 5th costochondral junctions most commonly. Presents with localised anterior chest pain, reproduced exactly by palpation of the affected costochondral junction. May be unilateral or bilateral. No visible swelling (distinguishes from Tietze syndrome). Onset may follow viral upper respiratory tract infection, repetitive physical activity, or trauma. Management: NSAIDs (ibuprofen 400mg TDS) for 2–4 weeks, heat, activity modification. Local corticosteroid injection for refractory cases. Reassurance is essential — many patients fear cardiac disease.
          </p>

          <h3>Tietze Syndrome</h3>
          <p>
            Similar to costochondritis but distinguished by visible and palpable swelling at the affected costochondral junction. Usually affects a single junction — 2nd or 3rd most common. Less common than costochondritis. Management: NSAIDs, heat, corticosteroid injection. Self-limiting.
          </p>

          <h3>Rib Fractures</h3>
          <p>
            Rib fractures occur from direct trauma (sport, assault, falls, motor vehicle accidents) or from insufficiency mechanisms (osteoporosis, prolonged coughing). The 4th–9th ribs are most commonly fractured. Clinical features: acute onset localised chest pain, point tenderness on rib palpation, pain sharply worsened by deep inspiration, coughing, or movement, splinted breathing. Complications: pneumothorax (1–2%), haemothorax, pulmonary contusion, pneumonia (the most common serious complication — from splinting and atelectasis). Flail chest (≥3 contiguous ribs fractured in ≥2 places) is a life-threatening emergency.
          </p>
          <p>
            Management: adequate analgesia is the cornerstone — it enables deep breathing and coughing, preventing atelectasis and pneumonia. NSAIDs + paracetamol ± opioids. Incentive spirometry and physiotherapy are critical. Chest binding is contraindicated — reduces tidal volume and worsens atelectasis. Intercostal nerve blocks or thoracic epidural for multiple rib fractures provide superior analgesia. Indications for hospital admission: elderly patients, ≥3 rib fractures, bilateral fractures, underlying COPD or respiratory disease, SpO2 declining, uncontrolled pain, suspected complications.
          </p>

          <h3>Cough Fractures</h3>
          <p>
            Spontaneous rib fractures from forceful coughing — common in patients with chronic cough (COPD, whooping cough), osteoporosis, or those on long-term corticosteroids. The 5th–9th ribs are most vulnerable. Often not visible on plain X-ray initially — CT or bone scan more sensitive. Management as for traumatic rib fractures. Treat the underlying cause of the cough.
          </p>

          <h3>Intercostal Muscle Strain</h3>
          <p>
            Injury to the intercostal muscles from forceful twisting, overhead activity, or direct impact. Localised rib cage pain, worse with rotation and deep breathing. Tenderness over the intercostal space (not the rib itself — distinguishes from rib fracture). No crepitus. Normal breathing mechanics. Management: RICE, NSAIDs, activity modification, physiotherapy. Usually resolves within 3–4 weeks.
          </p>

          <h3>Herpes Zoster (Shingles) — Chest Wall</h3>
          <p>
            Reactivation of varicella-zoster virus in thoracic dermatomes — presents as severe dermatomal chest wall pain (often burning or electric) before (prodromal phase), during, and after the vesicular rash. NPs must recognise pre-rash zoster (prodromal pain without rash) to avoid misdiagnosis as cardiac or pleural pain. The rash does not cross the midline. Management: valaciclovir 1g TDS for 7 days (most effective if commenced within 72 hours of rash). Analgesia: NSAIDs + paracetamol, gabapentin or pregabalin for neuropathic component. Post-herpetic neuralgia (PHN): persistent pain &gt;3 months after rash — managed with gabapentin, pregabalin, amitriptyline, topical lidocaine or capsaicin. Shingrix vaccination: recommended for adults ≥50, two doses 2–6 months apart.
          </p>

          <h3>Slipping Rib Syndrome</h3>
          <p>
            Hypermobility and slipping of the lower rib cartilages (8th–10th ribs) — the anterior cartilaginous tips slip under the rib above, causing sharp pain. Hooking manoeuvre: examiner hooks fingers under the lower rib margin and pulls anteriorly — reproduces the patient&apos;s pain and may reproduce the clicking sensation. Often misdiagnosed and a cause of chronic undiagnosed chest or upper abdominal pain. Management: reassurance, activity modification, physiotherapy, intercostal nerve block. Surgical stabilisation for refractory cases.
          </p>

          <h3>Fibromyalgia and Chest Wall Tenderness</h3>
          <p>
            Fibromyalgia commonly causes chest wall tenderness — often multiple tender points across the chest wall without localised costochondral involvement. Associated features: widespread pain, fatigue, sleep disturbance, cognitive difficulties, anxiety, depression. Management: multidisciplinary — exercise (aerobic), CBT, sleep management, low-dose amitriptyline or duloxetine. Avoid prolonged opioid use.
          </p>

          <h3>Pectoral Muscle Injury</h3>
          <p>
            Pectoralis major rupture: forceful eccentric contraction (bench press, fall). Sudden pain and weakness, ecchymosis, palpable defect at the anterior axillary fold. Ultrasound or MRI confirms. Surgical repair recommended for complete rupture in active patients. Pectoral strain: less severe — RICE, NSAIDs, physiotherapy.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Exact reproduction of chest pain by palpation of a specific point = most specific feature of MSK chest pain. Always exclude cardiac causes first.</li>
            <li>Herpes zoster prodromal phase causes dermatomal chest pain 1–5 days before the rash — do not miss it. Start valaciclovir early.</li>
            <li>Chest binding is absolutely contraindicated in rib fractures — it causes atelectasis and pneumonia.</li>
            <li>Adequate analgesia is the single most important rib fracture intervention — it determines respiratory outcomes.</li>
            <li>Calcaneal spur on X-ray = incidental. The hooking manoeuvre diagnoses slipping rib syndrome — be aware of this underdiagnosed condition.</li>
            <li>Long-term corticosteroid use requires bone protection from the start — spontaneous rib fractures from minor mechanisms indicate severe corticosteroid-induced osteoporosis.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/chest" />

      <ModuleSponsorSlot moduleSlug="musculoskeletal-chest" />

    </div>
  );
}
