import ModuleTabs from '@/components/ModuleTabs';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export default function MskNeckPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Neck</h1>
        <p>Cervical spine pain, radiculopathy, whiplash, and serious cervical pathology</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/neck" />

      <div className="content-prose">

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Neck pain + trauma + neurological deficit</strong> — suspect cervical spinal cord injury. Immobilise, call 000, emergency transfer. Do not remove collar without imaging clearance.</li>
            <li><strong>Progressive myelopathy</strong> — bilateral hand clumsiness, gait disturbance, bladder dysfunction, UMN signs. Urgent MRI and neurosurgical referral.</li>
            <li><strong>Neck pain + fever + dysphagia</strong> — suspect retropharyngeal or deep space neck infection. Airway at risk — immediate hospital referral, CT neck, IV antibiotics.</li>
            <li><strong>Meningism</strong> — neck stiffness + fever + photophobia + headache. Suspect bacterial meningitis — immediate hospital transfer.</li>
            <li><strong>Thunderclap headache with neck stiffness</strong> — suspect subarachnoid haemorrhage. Immediate CT head ± LP.</li>
            <li><strong>Atlanto-axial subluxation</strong> — rheumatoid arthritis patient with new neck pain and neurological signs. Urgent MRI — life-threatening cord compression risk.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Neck Pain</h2>
          <p>
            Neck pain is extremely common in primary care, with the majority being mechanical or degenerative in origin. As an NP, your role is to identify the small proportion requiring urgent intervention — particularly myelopathy and serious pathology — while managing the majority effectively with conservative approaches. Cervical radiculopathy and spondylosis are the most frequent diagnoses requiring NP assessment and management.
          </p>
          <p>
            Thorough neurological examination of the upper limbs (motor, sensory, reflexes) and recognition of upper motor neurone signs are fundamental skills. Understanding dermatomal and myotomal patterns for C5 to T1 allows accurate clinical localisation of the level of nerve root or cord involvement.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Cervical Spondylosis</h3>
          <p>
            Age-related degenerative changes of the cervical spine — disc degeneration, osteophyte formation, and facet joint arthropathy. Most common in adults over 40. May be asymptomatic. Symptoms include neck pain, stiffness, and cervicogenic headache. MRI or X-ray findings often don&apos;t correlate with symptoms. Management is conservative: analgesia (NSAIDs, paracetamol), physiotherapy, postural correction, and activity modification. Spondylosis becomes clinically significant when it causes radiculopathy or myelopathy.
          </p>

          <h3>Cervical Radiculopathy</h3>
          <p>
            Nerve root compression from disc herniation or foraminal stenosis causing radicular arm pain, paraesthesia, and potentially weakness in a dermatomal/myotomal distribution. C5-C6 and C6-C7 are the most commonly affected levels. Spurling&apos;s test (axial compression + extension + ipsilateral rotation) reproduces arm pain and is highly specific. Distraction test (manual head lifting) relieves arm pain, supporting foraminal compression. Conservative management (physiotherapy, analgesia) is appropriate for most patients — 6–12 weeks before surgical referral if no significant neurological deficit. MRI is indicated for neurological deficit or failure to improve.
          </p>

          <div className="info-box">
            <h4>Cervical Neurological Level Localisation</h4>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.9rem'}}>
              <thead>
                <tr style={{background:'rgba(201,168,76,0.1)'}}>
                  <th style={{padding:'8px', textAlign:'left', borderBottom:'2px solid var(--gold)'}}>Level</th>
                  <th style={{padding:'8px', textAlign:'left', borderBottom:'2px solid var(--gold)'}}>Motor</th>
                  <th style={{padding:'8px', textAlign:'left', borderBottom:'2px solid var(--gold)'}}>Sensory</th>
                  <th style={{padding:'8px', textAlign:'left', borderBottom:'2px solid var(--gold)'}}>Reflex</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>C5</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Shoulder abduction</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Lateral arm</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Biceps ↓</td>
                </tr>
                <tr>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>C6</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Wrist extension</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Thumb and index finger</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Brachioradialis ↓</td>
                </tr>
                <tr>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>C7</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Elbow extension</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Middle finger</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Triceps ↓</td>
                </tr>
                <tr>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>C8</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Finger flexion</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>Ring and little fingers</td>
                  <td style={{padding:'8px', borderBottom:'1px solid var(--border)'}}>None</td>
                </tr>
                <tr>
                  <td style={{padding:'8px'}}>T1</td>
                  <td style={{padding:'8px'}}>Hand intrinsics</td>
                  <td style={{padding:'8px'}}>Inner forearm</td>
                  <td style={{padding:'8px'}}>None</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Cervical Myelopathy</h3>
          <p>
            Spinal cord compression causing UMN dysfunction — the most common cause of spinal cord dysfunction in adults over 55. Presents with bilateral hand clumsiness (difficulty with fine motor tasks — buttons, keys, writing), wide-based or spastic gait, and bladder urgency or dysfunction. UMN signs on examination: hyperreflexia, Babinski&apos;s sign (extensor plantar), Hoffman&apos;s sign, and Lhermitte&apos;s sign (electric shock sensation with neck flexion). Urgency is determined by the rate of progression — rapidly progressive myelopathy requires urgent surgical decompression. MRI shows cord compression and may show cord signal change (T2 hyperintensity).
          </p>

          <h3>Whiplash-Associated Disorder (WAD)</h3>
          <p>
            Soft tissue neck injury typically from rear-end MVA. Classified: Grade I (neck pain, no musculoskeletal signs), Grade II (neck pain with musculoskeletal signs), Grade III (neurological deficit), Grade IV (fracture or dislocation). Use Canadian C-Spine Rule or NEXUS to determine imaging need after trauma. Early active mobilisation is key — avoid prolonged collar use. Grade I-II typically resolve within 3 months with appropriate management. Persistent WAD (beyond 3 months) warrants comprehensive biopsychosocial assessment and multidisciplinary management.
          </p>

          <h3>Acute Wry Neck (Acute Torticollis)</h3>
          <p>
            Sudden onset unilateral neck pain and muscle spasm causing head tilting toward the affected side, often on waking or after a minor movement. Neurologically intact. Common in young adults. Managed with analgesia (NSAIDs, paracetamol), heat, gentle mobilisation, and physiotherapy. Typically resolves within 1–2 weeks. Imaging is not required in the absence of red flags. Short-term diazepam may be useful as a muscle relaxant in severe cases.
          </p>

          <h3>Atlanto-Axial Subluxation in Rheumatoid Arthritis</h3>
          <p>
            Erosion of the transverse atlantal ligament and odontoid peg by rheumatoid pannus can cause atlanto-axial instability and subluxation. Risk of cervical spinal cord compression — potentially fatal. Any RA patient with new onset neck pain, occipital headache, and neurological symptoms requires urgent MRI. Inform anaesthetics if surgery is planned — intubation carries specific risks. Neurosurgical referral for consideration of surgical stabilisation.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Bilateral symptoms (bilateral arm tingling, bilateral hand weakness, gait disturbance) always suggest myelopathy rather than radiculopathy — urgent MRI is required.</li>
            <li>Hoffman&apos;s sign and Babinski&apos;s sign in the context of neck pain indicate UMN involvement — order MRI same day.</li>
            <li>Lhermitte&apos;s sign (electric shock on neck flexion) indicates posterior column or cord involvement — never a normal finding.</li>
            <li>Cervical radiculopathy most commonly affects C6 and C7 — remember the corresponding motor (wrist extension / elbow extension) and reflex (brachioradialis / triceps) for each.</li>
            <li>The Canadian C-Spine Rule is a validated decision tool for determining imaging need after neck trauma — apply it consistently.</li>
            <li>Any RA patient with new neck pain and neurological symptoms needs urgent MRI — atlanto-axial subluxation is a life-threatening emergency.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleSponsorSlot moduleSlug="musculoskeletal-neck" />

    </div>
  );
}
