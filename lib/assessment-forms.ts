export interface MiniCEXTraineeData {
  patientAgeRange: string;
  patientSex:      string;
  clinicalSetting: string;
  clinicalProblem: string;
  complexity:      '1' | '2' | '3' | '4' | '5';
  focusArea:       string;
}

export interface MiniCEXAssessorData {
  historyTaking:            number | null;
  physicalExam:             number | null;
  communication:            number | null;
  clinicalJudgement:        number | null;
  professionalism:          number | null;
  organisationEfficiency:   number | null;
  overallClinicalCompetence: number | null;
  observedActionPlan:       string;
  observationTime:          string;
  feedbackTime:             string;
}

export interface DOPSTraineeData {
  procedureName:    string;
  clinicalSetting:  string;
  performedBefore:  '0' | '1-4' | '5-9' | '10+';
  difficultyLevel:  'average' | 'above-average' | 'difficult';
}

export interface DOPSAssessorData {
  understandingIndications:  number | null;
  informedConsent:           number | null;
  preProceduralPrep:         number | null;
  technicalAbility:          number | null;
  asepticTechnique:          number | null;
  seeksHelp:                 number | null;
  postProceduralMgmt:        number | null;
  communicationSkills:       number | null;
  patientConsideration:      number | null;
  overallPerformance:        number | null;
  assessorComments:          string;
  agreedActionPlan:          string;
}

export const RATING_LABELS: Record<number, string> = {
  1: 'Below expectations',
  2: 'Borderline',
  3: 'Meets expectations',
  4: 'Above expectations',
  5: 'Excellent',
  6: 'Superior',
};

export const MINI_CEX_ASSESSOR_FIELDS: { key: keyof MiniCEXAssessorData; label: string }[] = [
  { key: 'historyTaking',             label: 'History Taking' },
  { key: 'physicalExam',              label: 'Physical Examination' },
  { key: 'communication',             label: 'Communication Skills' },
  { key: 'clinicalJudgement',         label: 'Clinical Judgement' },
  { key: 'professionalism',           label: 'Professionalism' },
  { key: 'organisationEfficiency',    label: 'Organisation & Efficiency' },
  { key: 'overallClinicalCompetence', label: 'Overall Clinical Competence' },
];

export const DOPS_ASSESSOR_FIELDS: { key: keyof DOPSAssessorData; label: string }[] = [
  { key: 'understandingIndications', label: 'Understanding of Indications & Contraindications' },
  { key: 'informedConsent',          label: 'Obtaining Informed Consent' },
  { key: 'preProceduralPrep',        label: 'Pre-procedural Preparation' },
  { key: 'technicalAbility',         label: 'Technical Ability' },
  { key: 'asepticTechnique',         label: 'Aseptic Technique' },
  { key: 'seeksHelp',                label: 'Seeks Help Where Appropriate' },
  { key: 'postProceduralMgmt',       label: 'Post-procedural Management' },
  { key: 'communicationSkills',      label: 'Communication Skills' },
  { key: 'patientConsideration',     label: 'Consideration for Patient/Staff' },
  { key: 'overallPerformance',       label: 'Overall Performance' },
];

export function emptyMiniCEXTrainee(): MiniCEXTraineeData {
  return { patientAgeRange: '', patientSex: '', clinicalSetting: '', clinicalProblem: '', complexity: '3', focusArea: '' };
}

export function emptyMiniCEXAssessor(): MiniCEXAssessorData {
  return {
    historyTaking: null, physicalExam: null, communication: null,
    clinicalJudgement: null, professionalism: null, organisationEfficiency: null,
    overallClinicalCompetence: null, observedActionPlan: '', observationTime: '', feedbackTime: '',
  };
}

export function emptyDOPSTrainee(): DOPSTraineeData {
  return { procedureName: '', clinicalSetting: '', performedBefore: '0', difficultyLevel: 'average' };
}

export function emptyDOPSAssessor(): DOPSAssessorData {
  return {
    understandingIndications: null, informedConsent: null, preProceduralPrep: null,
    technicalAbility: null, asepticTechnique: null, seeksHelp: null,
    postProceduralMgmt: null, communicationSkills: null, patientConsideration: null,
    overallPerformance: null, assessorComments: '', agreedActionPlan: '',
  };
}
