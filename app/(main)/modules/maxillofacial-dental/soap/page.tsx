import ModuleTabs from '@/components/ModuleTabs';
import SoapNote from '@/components/SoapNote';

const soapData = {
  title: 'Maxillofacial &amp; Dental SOAP Note',
  meta: '35M | Dental abscess with facial cellulitis | Poorly controlled T2DM',
  sections: [
    {
      letter: 'S',
      title: 'Subjective',
      fields: [
        {
          label: 'Presenting Complaint',
          content: '35-year-old male presenting with right-sided facial swelling, pain, and difficulty opening his mouth for 4 days. Reports tooth pain in the lower right jaw for the past 2 weeks prior to swelling onset.'
        },
        {
          label: 'History of Presenting Complaint',
          content: [
            'Lower right molar pain began 2 weeks ago — initially sharp with cold, progressed to spontaneous throbbing pain consistent with irreversible pulpitis',
            'Facial swelling developed 4 days ago, initially buccal, now extending to submandibular region',
            'Trismus developing — difficulty eating and talking',
            'Fever to 38.6°C at home, taking paracetamol and ibuprofen with partial relief',
            'No dysphagia, no stridor, no voice change',
            'No prior dental treatment for this tooth — has not seen a dentist in 3 years'
          ]
        },
        {
          label: 'Relevant Medical History',
          content: [
            'Type 2 diabetes mellitus — diagnosed 5 years ago, poorly controlled',
            'HbA1c last checked 6 months ago: 68 mmol/mol',
            'Currently on metformin 1g BD — not taking consistently',
            'No known drug allergies',
            'Non-smoker, 2–3 standard drinks per week'
          ]
        },
        {
          label: 'Medications',
          content: 'Metformin 1g BD (inconsistent adherence)'
        }
      ]
    },
    {
      letter: 'O',
      title: 'Objective',
      fields: [
        {
          label: 'Vital Signs',
          content: [
            'BP: 138/88 mmHg',
            'HR: 102 bpm',
            'Temp: 38.6°C',
            'RR: 18 breaths/min',
            'SpO₂: 98% on room air',
            'BGL (finger prick): 14.6 mmol/L'
          ]
        },
        {
          label: 'General',
          content: 'Unwell appearing, in pain, speaking with difficulty due to trismus. Voice normal — no muffled or hot potato voice.'
        },
        {
          label: 'Extra-Oral',
          content: [
            'Right buccal and submandibular swelling — tender, firm, no fluctuance palpable from external approach',
            'Skin overlying swelling erythematous and warm',
            'Submandibular lymphadenopathy — right, tender, approximately 2cm',
            'Inter-incisal distance: 22mm (normal &gt;40mm) — significant trismus',
            'No floor of mouth elevation — no bilateral involvement',
            'No stridor or respiratory distress'
          ]
        },
        {
          label: 'Intra-Oral',
          content: [
            'Limited examination due to trismus',
            'Lower right second molar: large carious lesion, periapical tenderness on percussion',
            'Overlying buccal gingiva — erythematous, swollen, tender',
            'No fluctuant intra-oral abscess identified — no pointing',
            'Tongue midline, floor of mouth not elevated bilaterally — reassuring'
          ]
        },
        {
          label: 'Investigations',
          content: [
            'FBE: WCC 16.8 × 10⁹/L (neutrophilia), Hb 138 g/L, platelets 312',
            'CRP: 142 mg/L',
            'BGL: 14.6 mmol/L',
            'OPG ordered — periapical lucency at lower right second molar consistent with periapical abscess',
            'CT not yet performed — monitoring for signs of deep space spread'
          ]
        }
      ]
    },
    {
      letter: 'A',
      title: 'Assessment',
      fields: [
        {
          label: 'Primary Diagnosis',
          content: 'Dental abscess (periapical origin, lower right second molar) with buccal and submandibular cellulitis'
        },
        {
          label: 'Contributing Factors',
          content: [
            'Poorly controlled Type 2 diabetes mellitus (HbA1c 68 mmol/mol, BGL 14.6 mmol/L) — significantly impairs immune response and wound healing',
            'Longstanding dental neglect',
            'No current antibiotic therapy'
          ]
        },
        {
          label: 'Risk Stratification',
          content: [
            'High risk: significant cellulitis, trismus, elevated inflammatory markers, poorly controlled diabetes',
            'Airway: currently patent, no stridor or floor of mouth elevation — monitor closely',
            'No features of Ludwig&apos;s angina at this time (no bilateral submandibular involvement, no floor of mouth elevation, no drooling)',
            'Requires urgent dental review and consideration of oral surgery referral'
          ]
        }
      ]
    },
    {
      letter: 'P',
      title: 'Plan',
      fields: [
        {
          label: 'Antibiotics',
          content: [
            'Amoxicillin-clavulanate 875/125mg orally BD for 7 days (covers oral flora including anaerobes)',
            'Patient has no penicillin allergy — if allergic: clindamycin 450mg TDS',
            'Review in 48–72 hours — if not improving or worsening, consider IV antibiotics and surgical review'
          ]
        },
        {
          label: 'Analgesia',
          content: [
            'Ibuprofen 400mg TDS with food (if not contraindicated)',
            'Paracetamol 1g QID (regular, not PRN)',
            'Combination analgesia is more effective than either alone for dental pain'
          ]
        },
        {
          label: 'Urgent Dental Referral',
          content: [
            'Same-day or next available urgent dental appointment',
            'Options: tooth extraction or root canal therapy (patient preference and tooth restorability)',
            'If no access to dentist: consider ED referral for dental/oral surgery review',
            'If abscess becomes fluctuant: incision and drainage by appropriate provider'
          ]
        },
        {
          label: 'Diabetes Management',
          content: [
            'Current HbA1c 68 mmol/mol — requires urgent diabetes review',
            'Discuss metformin adherence and barriers',
            'Consider diabetes educator referral',
            'Reinforce that infection will worsen glycaemic control and poor glycaemic control impairs infection resolution',
            'Recheck HbA1c in 3 months'
          ]
        },
        {
          label: 'Safety Netting',
          content: [
            'Return immediately or call 000 if: bilateral neck swelling, floor of mouth elevation or tongue pushing up, stridor or difficulty breathing, drooling, rapidly worsening swelling',
            'These features indicate Ludwig&apos;s angina — airway emergency',
            'Review in 48–72 hours regardless',
            'Written safety netting advice provided'
          ]
        },
        {
          label: 'Follow-Up',
          content: [
            'Review in 48–72 hours to assess antibiotic response and cellulitis',
            'If worsening or not improving: consider CT neck/face to exclude deep space infection, hospital referral',
            'Long-term: diabetes management, dental hygiene education, regular dental review'
          ]
        }
      ]
    }
  ]
};

export default function MaxillofacialDentalSoapPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦷 Maxillofacial &amp; Dental</h1>
        <p>Dental emergencies, orofacial infections, oral mucosal conditions, facial trauma, and oral cancer recognition for NP practice.</p>
      </div>

      <ModuleTabs moduleId="maxillofacial-dental" />

      <div className="content-prose">
        <SoapNote {...soapData} />
      </div>

      <p className="disclaimer">Educational purposes only. Always apply your own clinical judgement.</p>
    </div>
  );
}
