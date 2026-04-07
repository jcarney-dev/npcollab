import ModuleTabs from '@/components/ModuleTabs';

export default function MskNeckAssessmentPage() {
  return (
    <div>
      <div className="page-header">
        <span className="page-header-icon">🦴</span>
        <div>
          <span className="label">Clinical Module</span>
          <h1>MSK — Neck Assessment</h1>
          <p className="page-subtitle">Structured history, examination, and investigations for neck pain presentations</p>
        </div>
      </div>

      <ModuleTabs moduleId="musculoskeletal/neck" />

      <div className="content-body">

        <section className="content-section">
          <h2>History</h2>

          <h3>Pain Assessment</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Site &amp; Radiation</div>
              <p>Localised neck vs radiation to arm (radiculopathy). Unilateral vs bilateral arm symptoms (bilateral = myelopathy until proven otherwise). Occipital radiation (C1-C2 involvement, atlanto-axial pathology). Scapular radiation (referred pain from lower cervical levels).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Onset &amp; Context</div>
              <p>Trauma — mechanism, velocity (MVA), axial loading (diving, fall). Insidious onset (degenerative). Waking with neck pain and tilt (acute wry neck). Progressive onset with arm and hand symptoms in older adults (spondylosis/myelopathy).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Character of Pain</div>
              <p>Aching mechanical neck pain (spondylosis). Sharp, shooting, burning arm pain (radiculopathy). Bilateral hand numbness and weakness (myelopathy). Constant severe pain with fever (infection). Thunderclap onset (subarachnoid haemorrhage — emergency).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Aggravating &amp; Relieving Factors</div>
              <p>Worse with neck extension + ipsilateral rotation (Spurling&apos;s pattern — foraminal stenosis). Arm pain relieved by abducting arm above head (shoulder abduction relief sign — radiculopathy). Worse with sustained postures (spondylosis). Better with rest and analgesia (mechanical).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Neurological Symptoms</div>
              <p>Arm pain, paraesthesia, weakness — which fingers affected (dermatomal pattern). Bilateral hand symptoms — dropping objects, difficulty with buttons, writing (myelopathy). Gait disturbance, balance problems. Bladder or bowel dysfunction. Electric shock sensation with neck flexion (Lhermitte&apos;s sign).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Associated Symptoms</div>
              <p>Dysphagia, odynophagia, voice change (deep space infection, osteophytic dysphagia). Headache pattern — cervicogenic vs thunderclap. Fever, weight loss, night sweats (malignancy, infection). Dizziness with head movement (cervicogenic vertigo, vertebrobasilar insufficiency).</p>
            </div>
          </div>

          <h3>Red Flag Screening</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Myelopathy</div>
              <p>Bilateral hand clumsiness, bilateral arm or leg weakness, gait disturbance, bladder urgency or retention. UMN signs on examination. Rapidly progressive — urgent MRI and neurosurgical referral.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Vascular</div>
              <p>Thunderclap headache (SAH). Sudden onset vertigo + diplopia + dysarthria + dysphagia + ataxia (vertebrobasilar stroke — posterior circulation). Pulsatile neck pain with new headache (carotid or vertebral artery dissection).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Infection</div>
              <p>Fever + neck stiffness + photophobia (meningitis). Fever + dysphagia + drooling + muffled voice (deep space neck infection). Post-procedure neck pain + fever (discitis). IV drug use. Immunosuppression.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Trauma</div>
              <p>Mechanism with high energy or axial loading. Midline bony tenderness. Neurological deficit after injury. Rheumatoid arthritis + any trauma. Apply Canadian C-Spine Rule or NEXUS to guide imaging decision.</p>
            </div>
          </div>

          <h3>Relevant Medical History</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Rheumatoid Arthritis</div>
              <p>Atlanto-axial instability risk. Any new neck pain or neurological symptoms in RA requires urgent MRI. Prior cervical spine assessment for RA. Anaesthetic history and cervical spine status for surgical planning.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Malignancy</div>
              <p>History of cancer (particularly breast, lung, prostate, kidney, thyroid — common to metastasise to spine). Night pain, unexplained weight loss, pain unresponsive to analgesics. Previous spinal radiation.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Occupation &amp; Posture</div>
              <p>Prolonged computer use, head-down work, manual work with overhead tasks. Ergonomic assessment and workplace modifications. Work absence and compensation issues.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Examination</h2>

          <h3>Observation</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Posture</div>
              <p>Forward head posture (common in spondylosis and tension-type neck pain). Neck tilt and rotation (acute wry neck, atlanto-axial pathology). Assess shoulder symmetry and scapular positioning.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Range of Motion</div>
              <p>Active cervical range in all planes: flexion, extension, lateral flexion, rotation. Identify which movements reproduce or worsen symptoms. Normal rotation approximately 70–90° bilaterally. Restricted extension + lateral rotation suggests foraminal stenosis.</p>
            </div>
          </div>

          <h3>Palpation</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Bony Tenderness</div>
              <p>Midline spinous process tenderness — fracture, infection, malignancy. C2 spinous process — atlanto-axial pathology. Facet joint tenderness (bilateral — spondylosis). Occipital tenderness (cervicogenic headache, C1-C2 involvement).</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Soft Tissue</div>
              <p>Paravertebral muscle spasm and tenderness. Upper trapezius and levator scapulae — common tension and myofascial pain areas. Supraclavicular fossa — lymphadenopathy, Pancoast tumour tenderness. Sternocleidomastoid tenderness.</p>
            </div>
          </div>

          <h3>Neurological Examination</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Motor Testing</div>
              <p>C5: shoulder abduction (deltoid). C6: wrist extension. C7: elbow extension (triceps). C8: finger flexion. T1: finger abduction (intrinsics). Grade 0–5/5. Compare bilaterally. Document asymmetry — look for subtle weakness.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Sensory Testing</div>
              <p>C5: lateral arm. C6: thumb and index finger. C7: middle finger. C8: ring and little fingers. T1: inner forearm. Use light touch and pinprick. Bilateral assessment — bilateral deficits suggest myelopathy.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Upper Limb Reflexes</div>
              <p>Biceps (C5-C6): reduced in C5-C6 radiculopathy. Brachioradialis (C6): reduced in C6 radiculopathy. Triceps (C7): reduced in C7 radiculopathy. Hyperreflexia indicates UMN pathology — myelopathy. Inverted supinator reflex: C6 lesion with brisk finger flexion response.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">UMN Signs</div>
              <p>Hoffman&apos;s sign: flick middle finger nail — thumb flexion = positive UMN. Babinski&apos;s sign: extensor plantar response — UMN pathology. Lower limb hyperreflexia. Clonus (ankle). Any positive UMN sign in the context of neck pain = urgent MRI required.</p>
            </div>
          </div>

          <h3>Special Tests</h3>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Spurling&apos;s Test</div>
              <p>Axial compression with extension and ipsilateral lateral rotation/flexion. Positive: reproduction of ipsilateral arm pain in a dermatomal distribution. High specificity (~90%) for cervical radiculopathy. Do not perform if instability suspected.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Distraction Test</div>
              <p>Manual distraction (gentle lifting) of the head. Positive: relief of arm pain or paraesthesia — foraminal compression relieved. Opposite mechanism to Spurling&apos;s. Positive distraction + positive Spurling&apos;s strongly support cervical radiculopathy from foraminal stenosis.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Lhermitte&apos;s Sign</div>
              <p>Ask patient to flex the neck — positive if electric shock sensation radiates down the spine into the limbs. Indicates posterior column or cervical cord pathology. Seen in myelopathy and demyelinating disease (MS). Always take seriously — order MRI urgently.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Shoulder Abduction Relief Sign</div>
              <p>Patient abducts affected arm and places hand on head. Positive: relief of arm and neck pain. Suggests foraminal stenosis — reduces tension on the nerve root. Supports diagnosis of cervical radiculopathy.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Investigations</h2>
          <div className="assessment-grid">
            <div className="assessment-card">
              <div className="assessment-card-title">Plain X-Ray (Cervical Spine)</div>
              <p>AP, lateral ± oblique. Assesses bony alignment, disc space height, osteophytes, fracture. Dynamic (flexion/extension) views for instability in RA or post-trauma. Limited soft tissue resolution — cannot diagnose disc herniation or cord compression.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">MRI Cervical Spine</div>
              <p>Investigation of choice for: radiculopathy with neurological deficit, myelopathy, suspected infection or malignancy, post-trauma with neurological symptoms. Visualises disc herniation, cord compression, cord signal change (T2 hyperintensity in myelopathy). No ionising radiation.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">CT Cervical Spine</div>
              <p>Superior bony detail — fracture characterisation, foraminal stenosis anatomy, post-surgical assessment. First-line for acute trauma (faster than MRI). Higher radiation than X-ray. CT angiography if vertebral artery dissection suspected.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Nerve Conduction Studies &amp; EMG</div>
              <p>Helpful to differentiate cervical radiculopathy from peripheral nerve entrapment (carpal tunnel, cubital tunnel). EMG can confirm denervation in the appropriate myotome. Not usually first-line — ordered when clinical picture is unclear.</p>
            </div>
            <div className="assessment-card">
              <div className="assessment-card-title">Blood Tests</div>
              <p>FBE, CRP, ESR: infection, inflammatory arthritis. Rheumatoid factor, anti-CCP: RA. ANA: connective tissue disease. Calcium, protein electrophoresis, PSA: malignancy screen. Blood cultures if infective spondylitis suspected.</p>
            </div>
          </div>

          <h3>Post-Trauma Imaging — Canadian C-Spine Rule</h3>
          <div className="info-box">
            <p><strong>High-risk factors (imaging mandatory):</strong> Age ≥65, dangerous mechanism (fall &gt;1m, axial load, high-speed MVA, diving, motorised recreational vehicle), paraesthesia in extremities.</p>
            <p><strong>Low-risk factors (if no high-risk, assess ability to rotate):</strong> Simple rear-end MVA, sitting position in ED, ambulatory at any time since injury, delayed onset neck pain, absence of midline C-spine tenderness.</p>
            <p><strong>Imaging not required if:</strong> No high-risk factor AND at least one low-risk factor AND patient can actively rotate neck 45° to both sides.</p>
            <p>If imaging required: CT cervical spine is the preferred modality for acute trauma.</p>
          </div>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
