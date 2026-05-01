export type ProcedureCategory =
  | 'Emergency & Acute'
  | 'Assessment & Examination'
  | 'Diagnostics & Procedures'
  | "Women's Health"
  | 'Mental Health'
  | 'General';

export interface PredefinedProcedure {
  name: string;
  category: ProcedureCategory;
}

export const PREDEFINED_PROCEDURES: PredefinedProcedure[] = [
  // Emergency & Acute
  { name: 'Airway Assessment',               category: 'Emergency & Acute' },
  { name: 'IV Access & Cannulation',         category: 'Emergency & Acute' },
  { name: 'Venepuncture',                    category: 'Emergency & Acute' },
  { name: 'ECG Interpretation (12-Lead)',    category: 'Emergency & Acute' },
  { name: 'Wound Assessment & Closure',      category: 'Emergency & Acute' },
  { name: 'Urinary Catheterisation',         category: 'Emergency & Acute' },
  { name: 'Nasogastric Tube Insertion',      category: 'Emergency & Acute' },
  { name: 'Oxygen Therapy',                  category: 'Emergency & Acute' },
  { name: 'Arterial Blood Gas Sampling',     category: 'Emergency & Acute' },
  { name: 'Point of Care Ultrasound',        category: 'Emergency & Acute' },
  { name: 'Defibrillation / Cardioversion',  category: 'Emergency & Acute' },
  { name: 'Chest Drain Insertion',           category: 'Emergency & Acute' },
  { name: 'Intraosseous Access',             category: 'Emergency & Acute' },
  // Assessment & Examination
  { name: 'Full Physical Examination',       category: 'Assessment & Examination' },
  { name: 'Neurological Assessment',         category: 'Assessment & Examination' },
  { name: 'Cardiovascular Assessment',       category: 'Assessment & Examination' },
  { name: 'Respiratory Assessment',          category: 'Assessment & Examination' },
  { name: 'Abdominal Assessment',            category: 'Assessment & Examination' },
  { name: 'Musculoskeletal Assessment',      category: 'Assessment & Examination' },
  { name: 'Ear / Nose / Throat Exam',        category: 'Assessment & Examination' },
  { name: 'Ophthalmologic Examination',      category: 'Assessment & Examination' },
  // Diagnostics & Procedures
  { name: 'Blood Cultures',                  category: 'Diagnostics & Procedures' },
  { name: 'Blood Glucose Testing',           category: 'Diagnostics & Procedures' },
  { name: 'Urinalysis',                      category: 'Diagnostics & Procedures' },
  { name: 'Wound Swab',                      category: 'Diagnostics & Procedures' },
  { name: 'Skin Biopsy',                     category: 'Diagnostics & Procedures' },
  { name: 'Suturing',                        category: 'Diagnostics & Procedures' },
  { name: 'Spirometry',                      category: 'Diagnostics & Procedures' },
  { name: 'Peak Flow Measurement',           category: 'Diagnostics & Procedures' },
  { name: 'Chest X-Ray Interpretation',      category: 'Diagnostics & Procedures' },
  { name: 'Lumbar Puncture',                 category: 'Diagnostics & Procedures' },
  { name: 'Joint Aspiration',                category: 'Diagnostics & Procedures' },
  // Women's Health
  { name: 'Cervical Screening',              category: "Women's Health" },
  { name: 'Breast Examination',              category: "Women's Health" },
  { name: 'Pelvic Examination',              category: "Women's Health" },
  { name: 'Antenatal Assessment',            category: "Women's Health" },
  // Mental Health
  { name: 'Mental State Examination',        category: 'Mental Health' },
  { name: 'Risk Assessment',                 category: 'Mental Health' },
  { name: 'Cognitive Assessment (MMSE/ACE)', category: 'Mental Health' },
  // General
  { name: 'Medication Reconciliation',       category: 'General' },
  { name: 'Immunisation / Vaccination',      category: 'General' },
  { name: 'Wound Dressing Change',           category: 'General' },
  { name: 'Ear Irrigation',                  category: 'General' },
];

export const PROCEDURE_CATEGORIES: ProcedureCategory[] = [
  'Emergency & Acute',
  'Assessment & Examination',
  'Diagnostics & Procedures',
  "Women's Health",
  'Mental Health',
  'General',
];

export const CLINICAL_SETTINGS = [
  'Emergency Department',
  'Hospital Ward',
  'ICU / HDU',
  'Primary Care',
  'Community / Home',
  'Aged Care Facility',
  'Other',
] as const;
