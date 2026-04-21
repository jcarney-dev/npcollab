import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NP Scope by Metaspecialty | NPCollab',
  description: 'Minimum procedural competencies for each Australian Nurse Practitioner endorsement area, cross-referenced to NPCollab clinical modules.',
  openGraph: {
    title: 'NP Scope by Metaspecialty | NPCollab',
    description: 'Minimum procedural competencies for each Australian Nurse Practitioner endorsement area, cross-referenced to NPCollab clinical modules.',
    url: 'https://npcollab.com/scope/by-metaspecialty',
  },
  alternates: {
    canonical: 'https://npcollab.com/scope/by-metaspecialty',
  },
};

type Competency = {
  area: string;
  description: string;
  competencies: string[];
  prescribing: string[];
  modules: { label: string; href: string }[];
};

const METASPECIALTIES: Competency[] = [
  {
    area: 'Primary Care / General Practice',
    description: 'The broadest NP endorsement area, covering the full spectrum of undifferentiated primary care presentations across the lifespan.',
    competencies: [
      'Comprehensive physical examination across all body systems',
      'Chronic disease management (diabetes, hypertension, COPD, heart failure)',
      'Preventive health and health promotion activities',
      'Wound assessment and management including suturing',
      'Minor procedures: skin biopsy, cryotherapy, incision and drainage',
      'ECG acquisition and interpretation',
      'Spirometry acquisition and interpretation',
      'Immunisation administration',
      'Point-of-care testing (blood glucose, urinalysis, INR)',
      'Mental health assessment and management of common conditions',
      'Cervical screening (Pap smears)',
      'Antenatal care (low-risk)',
    ],
    prescribing: [
      'Broad formulary across all PBS therapeutic classes relevant to primary care',
      'Schedule 4 and Schedule 8 (with appropriate endorsement and state/territory authority)',
      'Vaccines and immunologicals',
      'Wound care products and dressings',
    ],
    modules: [
      { label: 'Cardiac', href: '/modules/cardiac' },
      { label: 'Respiratory', href: '/modules/respiratory' },
      { label: 'Endocrine', href: '/modules/endocrine' },
      { label: 'Mental Health', href: '/modules/mental-health' },
      { label: 'GI & Hepatobiliary', href: '/modules/gi-hepatobiliary' },
      { label: 'Integumentary', href: '/modules/integumentary' },
    ],
  },
  {
    area: 'Emergency / Acute Care',
    description: 'Acute and emergency NPs operate in emergency departments, urgent care centres, and acute inpatient settings, managing undifferentiated urgent presentations.',
    competencies: [
      'Advanced triage and rapid clinical assessment',
      'Airway management including supraglottic airway insertion',
      'Vascular access: peripheral IV cannulation, intraosseous access',
      'Procedural sedation and analgesia',
      'Wound closure: suturing, stapling, tissue adhesive',
      'Fracture immobilisation and plaster application',
      'Dislocation reduction (shoulder, finger, toe)',
      'Urinary catheterisation',
      'Nasogastric tube insertion',
      '12-lead ECG acquisition and interpretation',
      'Point-of-care ultrasound (POCUS) — selected applications',
      'Thoracentesis and paracentesis (selected practitioners)',
      'Rapid sequence intubation (selected practitioners)',
    ],
    prescribing: [
      'Analgesics including opioids (Schedule 8 authority required)',
      'Antibiotics — broad spectrum for common ED presentations',
      'Antiemetics, antispasmodics, antihypertensives',
      'Antiepileptics for status management',
      'Benzodiazepines for sedation and anxiety',
      'Tetanus prophylaxis and immunoglobulins',
    ],
    modules: [
      { label: 'Cardiac', href: '/modules/cardiac' },
      { label: 'Respiratory', href: '/modules/respiratory' },
      { label: 'Neurology', href: '/modules/neurology' },
      { label: 'Toxicology', href: '/modules/toxicology' },
      { label: 'Surgical', href: '/modules/surgical' },
      { label: 'Musculoskeletal', href: '/modules/musculoskeletal/shoulder' },
    ],
  },
  {
    area: 'Mental Health',
    description: 'Mental health NPs provide advanced psychiatric assessment and treatment across inpatient, community, and consultation-liaison settings.',
    competencies: [
      'Comprehensive psychiatric assessment and MSE',
      'Suicide and self-harm risk assessment',
      'Psychosocial assessment and formulation',
      'Cognitive assessment (MMSE, MoCA, ACE-III)',
      'Administration of depot antipsychotic medications',
      'Psychotherapy delivery (CBT principles, motivational interviewing)',
      'Mental health triage and crisis assessment',
      'Application of mental health legislation (involuntary admission criteria)',
      'Alcohol and drug withdrawal monitoring (CIWA-Ar)',
      'ECT administration (selected practitioners)',
    ],
    prescribing: [
      'Antidepressants (SSRIs, SNRIs, TCAs, MAOIs)',
      'Antipsychotics — oral and depot formulations',
      'Mood stabilisers (lithium, valproate, lamotrigine)',
      'Anxiolytics and hypnotics',
      'Opioid substitution therapy (methadone, buprenorphine — with authority)',
      'Alcohol deterrent medications (naltrexone, acamprosate)',
    ],
    modules: [
      { label: 'Mental Health', href: '/modules/mental-health' },
      { label: 'Drugs & Alcohol', href: '/modules/drugs-alcohol' },
      { label: 'Neurology', href: '/modules/neurology' },
    ],
  },
  {
    area: 'Aged Care',
    description: 'Aged care NPs work in residential aged care facilities and community aged care settings, managing complex multimorbidity in older Australians.',
    competencies: [
      'Comprehensive geriatric assessment',
      'Cognitive screening and dementia diagnosis support',
      'Falls risk assessment and prevention planning',
      'Pressure injury assessment and management',
      'Wound assessment and complex wound care',
      'Continence assessment and management',
      'Nutritional assessment and supplementation',
      'Medication review and deprescribing',
      'Advance care planning facilitation',
      'Palliative and end-of-life care',
      'Subcutaneous medication administration',
    ],
    prescribing: [
      'Analgesics including opioids for palliative/chronic pain (S8 authority)',
      'Antipsychotics and anxiolytics (BPSD management)',
      'Anticoagulants and antiplatelets',
      'Antibiotics for common infections (UTI, LRTI, skin)',
      'Medications for continence, constipation, and nausea',
      'Topical preparations for wound and skin care',
    ],
    modules: [
      { label: 'Aged Care', href: '/modules/aged-care' },
      { label: 'Palliative Care', href: '/modules/palliative-care' },
      { label: 'Mental Health', href: '/modules/mental-health' },
      { label: 'GU & Nephrology', href: '/modules/gu-nephrology' },
      { label: 'Integumentary', href: '/modules/integumentary' },
    ],
  },
  {
    area: 'Paediatrics',
    description: 'Paediatric NPs assess and manage acute and chronic conditions in infants, children, and adolescents across inpatient, outpatient, and community settings.',
    competencies: [
      'Age-appropriate physical examination across all developmental stages',
      'Growth and developmental assessment',
      'Neonatal assessment and newborn examination',
      'Paediatric triage and acute assessment',
      'Paediatric vascular access (IV, intraosseous)',
      'Lumbar puncture (selected practitioners)',
      'Paediatric-specific wound care',
      'Immunisation delivery and schedule management',
      'Child protection assessment and mandatory reporting',
      'Family-centred care and parental education',
    ],
    prescribing: [
      'Weight-based paediatric dosing across all therapeutic classes',
      'Antibiotics for paediatric infections',
      'Analgesics including opioids for acute pain (S8 authority)',
      'Antihistamines, corticosteroids, bronchodilators',
      'Anticonvulsants for seizure management',
      'Vaccines and immunologicals',
    ],
    modules: [
      { label: 'Paediatrics', href: '/modules/paediatrics' },
      { label: 'Respiratory', href: '/modules/respiratory' },
      { label: 'ENT', href: '/modules/ent' },
      { label: 'Mental Health', href: '/modules/mental-health' },
    ],
  },
  {
    area: "Women's Health",
    description: "Women's health NPs provide specialist care across the reproductive lifespan including antenatal, postnatal, gynaecological, and oncology care.",
    competencies: [
      'Comprehensive gynaecological examination and history',
      'Cervical screening (Pap smears and HPV co-testing)',
      'Colposcopy assistance and biopsy (selected practitioners)',
      'Contraceptive counselling, prescription, and IUD insertion',
      'Antenatal care and monitoring (low-risk pregnancies)',
      'Sexually transmitted infection screening and management',
      'Breast examination and referral pathways',
      'Menopausal assessment and HRT initiation',
      'Perineal assessment and postnatal care',
      'Urodynamics interpretation and continence management',
    ],
    prescribing: [
      'Hormonal contraceptives (oral, injectable, implant, IUD)',
      'Hormone replacement therapy',
      'Antibiotics for STIs, UTIs, and obstetric infections',
      'Antenatal vitamins and iron supplementation',
      'Oxytocics and uterotonic medications (selected contexts)',
      'Topical treatments for vulvovaginal conditions',
    ],
    modules: [
      { label: "Women's Health", href: '/modules/womens-health' },
      { label: 'GU & Nephrology', href: '/modules/gu-nephrology' },
      { label: 'Oncology & Haematology', href: '/modules/onco-haematology' },
    ],
  },
  {
    area: 'Perioperative / Surgical',
    description: 'Perioperative NPs work across preoperative assessment, intraoperative support, post-anaesthetic care, and surgical ward management.',
    competencies: [
      'Preoperative assessment and risk stratification',
      'Anaesthetic risk assessment (ASA classification)',
      'Vascular access and central line assistance',
      'Wound assessment, care, and complex closure',
      'Drain and tube management (surgical drains, IDC, NGT)',
      'Postoperative pain assessment and management',
      'Post-anaesthetic monitoring and recovery management',
      'Stoma care and stomal therapy principles',
      'Basic surgical assistant skills (selected practitioners)',
      'Acute pain service management',
    ],
    prescribing: [
      'Perioperative analgesia (multimodal, including S8)',
      'Antiemetics and perioperative medications',
      'Anticoagulants for DVT prophylaxis',
      'Antibiotics for surgical prophylaxis and infection',
      'Wound care products and topical preparations',
    ],
    modules: [
      { label: 'Surgical', href: '/modules/surgical' },
      { label: 'Musculoskeletal', href: '/modules/musculoskeletal/shoulder' },
      { label: 'Cardiovascular', href: '/modules/cardiovascular' },
      { label: 'Respiratory', href: '/modules/respiratory' },
    ],
  },
  {
    area: 'Musculoskeletal',
    description: 'Musculoskeletal NPs specialise in the assessment and management of acute and chronic conditions affecting muscles, bones, joints, and connective tissue.',
    competencies: [
      'Focused musculoskeletal examination across all regions',
      'Functional capacity and disability assessment',
      'Diagnostic imaging interpretation (X-ray, MRI, CT)',
      'Joint aspiration and injection (selected practitioners)',
      'Fracture assessment and immobilisation (plaster and splinting)',
      'Exercise prescription and rehabilitation principles',
      'Orthopaedic pre- and post-operative assessment',
      'Chronic pain assessment and management',
      'Occupational health and return-to-work planning',
    ],
    prescribing: [
      'NSAIDs and analgesics including opioids for chronic pain (S8 with authority)',
      'Disease-modifying antirheumatic drugs (DMARDs) — initiation and monitoring',
      'Corticosteroids (systemic and intra-articular)',
      'Topical analgesics and anti-inflammatories',
      'Bone health medications (calcium, vitamin D, bisphosphonates)',
      'Uricosuric agents for gout management',
    ],
    modules: [
      { label: 'MSK — Shoulder', href: '/modules/musculoskeletal/shoulder' },
      { label: 'MSK — Back', href: '/modules/musculoskeletal/back' },
      { label: 'MSK — Knee', href: '/modules/musculoskeletal/knee' },
      { label: 'MSK — Hip & Pelvis', href: '/modules/musculoskeletal/hip-pelvis' },
      { label: 'MSK — Neck', href: '/modules/musculoskeletal/neck' },
      { label: 'MSK — Wrist & Hand', href: '/modules/musculoskeletal/wrist' },
      { label: 'MSK — Foot & Ankle', href: '/modules/musculoskeletal/foot-ankle' },
    ],
  },
  {
    area: 'Oncology / Haematology',
    description: 'Oncology NPs support patients through cancer diagnosis, treatment, and survivorship care across inpatient, day oncology, and outpatient settings.',
    competencies: [
      'Oncology assessment including performance status scoring (ECOG, Karnofsky)',
      'Chemotherapy administration and monitoring',
      'Neutropenic sepsis recognition and emergency management',
      'Central venous access device management (PICC, ports)',
      'Bone marrow biopsy assistance (selected practitioners)',
      'Cancer-related pain assessment and management',
      'Palliative symptom management',
      'Oncological emergencies: SVC syndrome, spinal cord compression, hypercalcaemia',
      'Survivorship assessment and follow-up care coordination',
    ],
    prescribing: [
      'Antiemetics for chemotherapy-induced nausea and vomiting',
      'Analgesics including opioids for cancer pain (S8 authority)',
      'Growth factors (G-CSF)',
      'Antibiotics for neutropenic sepsis',
      'Corticosteroids — oncological indications',
      'Supportive medications: anticoagulants, antifungals, antidiarrhoeals',
    ],
    modules: [
      { label: 'Oncology & Haematology', href: '/modules/onco-haematology' },
      { label: 'Palliative Care', href: '/modules/palliative-care' },
      { label: 'General Medical', href: '/modules/general-medical' },
    ],
  },
  {
    area: 'Neonatal',
    description: 'Neonatal NPs work in neonatal intensive care and special care nursery settings, managing preterm and term neonates with complex medical needs.',
    competencies: [
      'Newborn resuscitation (NRP trained)',
      'Neonatal assessment and examination',
      'Endotracheal intubation (neonatal)',
      'Umbilical catheter insertion (arterial and venous)',
      'Peripheral IV and intraosseous access in neonates',
      'Chest drain insertion (selected practitioners)',
      'Surfactant administration',
      'Phototherapy management',
      'Heel prick sampling and interpretation',
      'Exchange transfusion assistance',
      'Neonatal pain assessment and management',
    ],
    prescribing: [
      'Neonatal analgesics and sedation',
      'Antibiotics for neonatal sepsis',
      'Caffeine citrate for apnoea of prematurity',
      'Surfactant therapy',
      'Vitamin K and prophylactic medications',
      'Total parenteral nutrition (TPN) ordering and monitoring',
    ],
    modules: [
      { label: 'Paediatrics', href: '/modules/paediatrics' },
      { label: 'Respiratory', href: '/modules/respiratory' },
    ],
  },
];

export default function ScopeByMetaspecialtyPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Scope of Practice</div>
        <h1>NP Scope by Metaspecialty</h1>
        <p>Minimum procedural competencies per NP endorsement area, cross-referenced to NPCollab clinical modules.</p>
      </div>

      <div className="content-prose">

        <div className="info-box" style={{ marginBottom: '32px' }}>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            This reference lists the minimum competencies typically expected across each Australian NP metaspecialty endorsement area.
            These are <strong>indicative, not exhaustive</strong> — your actual scope will be defined by your education, experience,
            clinical context, and collaborative arrangement. Always document and negotiate your specific scope with your collaborating
            medical practitioner and facility.
          </p>
        </div>

        <div className="highlight-box" style={{ marginBottom: '32px' }}>
          <h4>How to Use This Reference</h4>
          <ul>
            <li>Use this as a <strong>starting point</strong> for developing your scope of practice document</li>
            <li>Each competency area must be supported by documented evidence of education and experience</li>
            <li>Prescribing authority requires a collaborative arrangement with a medical practitioner</li>
            <li>Schedule 8 prescribing requires state/territory authority in addition to NP endorsement</li>
            <li>Use the <strong>Scope Generator</strong> (see sub-menu) to build a printable PDF scope document</li>
          </ul>
        </div>

        {METASPECIALTIES.map((specialty) => (
          <div key={specialty.area} style={{ marginBottom: '48px' }}>
            <h2 style={{ borderBottom: '2px solid var(--gold-light)', paddingBottom: '8px' }}>
              {specialty.area}
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px', marginBottom: '20px' }}>
              {specialty.description}
            </p>

            <div className="assessment-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              <div className="assessment-card">
                <div className="card-header">
                  <div className="icon-circle">🩺</div>
                  <h4>Procedural Competencies</h4>
                </div>
                <ul>
                  {specialty.competencies.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="assessment-card">
                <div className="card-header">
                  <div className="icon-circle">💊</div>
                  <h4>Prescribing Scope</h4>
                </div>
                <ul>
                  {specialty.prescribing.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="assessment-card">
                <div className="card-header">
                  <div className="icon-circle">📚</div>
                  <h4>NPCollab Modules</h4>
                </div>
                <ul>
                  {specialty.modules.map((m) => (
                    <li key={m.href}>
                      <Link href={m.href} style={{ color: 'var(--navy)', fontWeight: 500 }}>
                        {m.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="highlight-box">
          <h4>Build Your Own Scope Document</h4>
          <p style={{ margin: '8px 0 16px' }}>
            Use the NPCollab Scope of Practice Generator to create a customised, printable PDF scope of practice document
            tailored to your state, practice setting, and clinical area.
          </p>
          <Link
            href="/scope/generator"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 20px',
              borderRadius: '7px',
              background: 'var(--navy)',
              color: 'var(--gold)',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Open Scope Generator →
          </Link>
        </div>

        <div className="info-box" style={{ marginTop: '32px' }}>
          <p style={{ margin: 0 }}>
            ⚠️ <strong>Disclaimer:</strong> Competency lists are indicative only and reflect common expectations as of 2025.
            Scope of practice must be negotiated within your specific clinical context, is governed by your collaborative
            arrangement, and must comply with NMBA Standards for Practice, state/territory legislation, and your employer's
            credentialing requirements.
          </p>
        </div>

      </div>
    </>
  );
}
