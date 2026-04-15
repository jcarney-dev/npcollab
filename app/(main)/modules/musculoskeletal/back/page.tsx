import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'MSK — Back Pain Clinical Module',
  description: 'Australian NP back pain module — low back pain, lumbar radiculopathy, cauda equina, spinal stenosis, and serious spinal pathology. SOAP notes and quiz.',
  openGraph: {
    title: 'MSK — Back Pain Clinical Module | NPCollab',
    description: 'Australian NP back pain module — low back pain, lumbar radiculopathy, cauda equina, spinal stenosis, and serious spinal pathology. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/musculoskeletal/back',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/musculoskeletal/back',
  },
};

export default function MskBackPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Back</h1>
        <p>Low back pain, lumbar radiculopathy, spinal stenosis, and serious spinal pathology</p>
      </div>

      <ModuleTabs moduleId="musculoskeletal/back" />

      <div className="content-prose">

        <p>Back pain is the most common musculoskeletal presentation in Australian primary care and one of the leading causes of disability worldwide. The vast majority of acute low back pain episodes are non-specific and self-limiting — however, NPs must systematically screen for serious pathology including cauda equina syndrome, vertebral fracture, malignancy, and infection before initiating conservative management. A structured approach to red flag screening, neurological examination, and judicious use of imaging underpins safe and effective NP management of back pain.</p>

        <div className="highlight-box">
          <h3>🚨 Red Flags — Act Immediately</h3>
          <ul>
            <li><strong>Cauda equina syndrome</strong> — bilateral leg weakness, saddle anaesthesia (perineal/perianal numbness), urinary retention or incontinence, faecal incontinence. Surgical emergency — immediate MRI and neurosurgical referral.</li>
            <li><strong>Back pain with fever</strong> — suspect discitis or vertebral osteomyelitis, especially following recent infection or IV drug use. Urgent MRI and blood cultures.</li>
            <li><strong>Metastatic spinal cord compression</strong> — known malignancy, night pain, progressive pain, new neurological deficit. Urgent MRI whole spine, steroids, oncology/neurosurgery referral.</li>
            <li><strong>Progressive neurological deficit</strong> — foot drop, progressive leg weakness, or expanding sensory loss. Urgent MRI, consider neurosurgical referral.</li>
            <li><strong>Ankylosing spondylitis + trauma</strong> — minor trauma can cause unstable fractures in fused spine. Urgent CT entire spine.</li>
            <li><strong>Back pain + unexplained weight loss</strong> — suspect malignancy. Thorough investigation required.</li>
          </ul>
        </div>

        <section className="content-section">
          <h2>NP Role in Low Back Pain</h2>
          <p>
            Low back pain is one of the most common presentations in primary care. As an NP, your role encompasses accurate diagnosis, appropriate investigation, effective conservative management, and timely identification and referral of serious pathology. The majority of low back pain is non-specific and managed conservatively with a biopsychosocial approach — however, vigilance for red flags and neurological compromise is essential at every consultation.
          </p>
          <p>
            NPs can initiate and coordinate the full spectrum of low back pain care: analgesia prescribing, imaging ordering, physiotherapy referral, psychosocial assessment, and specialist referral when indicated. Understanding neurological examination and dermatomal/myotomal patterns is fundamental to identifying nerve root compromise and cauda equina syndrome.
          </p>
        </section>

        <section className="content-section">
          <h2>Key Conditions</h2>

          <h3>Non-Specific Low Back Pain (NSLBP)</h3>
          <p>
            Accounts for approximately 90% of all low back pain. No identifiable specific pathology. Mechanical factors, deconditioning, and psychosocial factors all contribute. Management is biopsychosocial: stay active, avoid bed rest, analgesia (NSAIDs ± paracetamol), physiotherapy, education, and addressing yellow flags. Imaging is not required unless red flags or neurological deficit are present. Reassurance about good prognosis is important — most acute episodes resolve within 4–6 weeks.
          </p>

          <h3>Lumbar Disc Herniation with Radiculopathy</h3>
          <p>
            Nucleus pulposus herniation compresses adjacent nerve root causing radicular pain, paraesthesia, and potentially weakness in a dermatomal/myotomal distribution. L4-L5 and L5-S1 are the most commonly affected levels, accounting for the majority of lumbar disc herniations. The straight leg raise (SLR) test is the most sensitive clinical test — positive when radicular pain radiates below the knee at &lt;70° of elevation. Approximately 90% resolve with conservative management (analgesia, physiotherapy, activity modification) within 6–12 weeks. Indications for urgent referral: cauda equina syndrome, progressive neurological deficit (particularly foot drop), or failure to improve after 6 weeks.
          </p>

          <div className="info-box">
            <h4>Neurological Level Localisation</h4>
            <div className="table-scroll" style={{ marginBottom: 0, marginTop: '8px', border: 'none' }}>
              <table className="np-table">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Motor</th>
                    <th>Sensory</th>
                    <th>Reflex</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>L3–L4</td>
                    <td>Knee extension</td>
                    <td>Inner calf / medial lower leg</td>
                    <td>Knee jerk ↓</td>
                  </tr>
                  <tr>
                    <td>L4–L5</td>
                    <td>Ankle dorsiflexion (foot drop)</td>
                    <td>Dorsum of foot / first web space</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>L5–S1</td>
                    <td>Plantar flexion</td>
                    <td>Sole of foot / outer foot</td>
                    <td>Ankle jerk ↓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>Lumbar Spinal Stenosis</h3>
          <p>
            Narrowing of the lumbar spinal canal causing neurogenic claudication — bilateral leg pain, heaviness, and paraesthesia provoked by walking and relieved by lumbar flexion (bending forward, sitting, leaning on a shopping trolley). Distinguished from vascular claudication by positional relief with flexion and normal ankle-brachial index. Predominantly affects older adults. Conservative management (physiotherapy, analgesia, education) is first-line. Surgery (decompressive laminectomy) is considered when conservative management fails and symptoms significantly impair quality of life.
          </p>

          <h3>Osteoporotic Vertebral Compression Fracture</h3>
          <p>
            Sudden onset midline back pain following minimal or no trauma in an older patient, particularly postmenopausal women or patients on long-term corticosteroids. Point tenderness over the affected vertebra. X-ray may show vertebral height loss — MRI is more sensitive and can differentiate acute from chronic fracture. Manage with adequate analgesia, calcium and vitamin D, anti-resorptive therapy (zoledronic acid IV, denosumab, or oral bisphosphonates), and falls prevention. Vertebroplasty or kyphoplasty may be considered in selected cases.
          </p>

          <h3>Ankylosing Spondylitis (Axial Spondyloarthritis)</h3>
          <p>
            Inflammatory arthritis predominantly affecting the sacroiliac joints and spine. Classic presentation: young adult (typically male, onset &lt;45 years), insidious onset inflammatory back pain (worse with rest, better with movement, morning stiffness &gt;1 hour, improves with NSAIDs). HLA-B27 positive in ~90%. MRI of sacroiliac joints is the most sensitive investigation — shows bone marrow oedema in early disease. NSAIDs are highly effective and are first-line. TNF inhibitors or IL-17 inhibitors for refractory cases. Risk of spinal fracture with minor trauma — educate patients and image urgently after any significant trauma.
          </p>

          <h3>Discitis / Vertebral Osteomyelitis</h3>
          <p>
            Infection of the intervertebral disc and/or adjacent vertebral body. Presents with severe back pain, fever, elevated inflammatory markers (CRP, ESR, WCC). Risk factors: IV drug use, immunosuppression, recent spinal procedure, haematogenous spread from distant infection. MRI spine with contrast is investigation of choice. Blood cultures before antibiotics — Staphylococcus aureus is the most common pathogen. Requires prolonged intravenous antibiotics (6–12 weeks) and may require surgical debridement. Refer to spinal surgery and infectious diseases.
          </p>
        </section>

        <section className="content-section">
          <h2>Clinical Pearls</h2>
          <ul>
            <li>Cauda equina syndrome is the most critical diagnosis not to miss — ask about bladder and bowel function and saddle sensation at every consultation for low back pain with leg symptoms.</li>
            <li>The crossed SLR is highly specific for significant disc herniation — a positive result strongly supports the diagnosis.</li>
            <li>Yellow flags (psychosocial factors) predict chronicity more reliably than imaging findings — screen with PHQ-9, fear-avoidance beliefs, and occupational factors.</li>
            <li>Routine imaging does not improve outcomes for acute NSLBP and may increase medicalisation — adhere to guideline-directed imaging criteria.</li>
            <li>NSAIDs are the most effective first-line analgesic for low back pain — use at lowest effective dose for shortest duration.</li>
            <li>Patients with ankylosing spondylitis must be counselled about fracture risk from minor trauma — lower threshold for imaging after any injury.</li>
          </ul>
        </section>

      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
      <ModuleNav moduleId="musculoskeletal/back" />

      <ModuleSponsorSlot moduleSlug="musculoskeletal-back" />

    </div>
  );
}
