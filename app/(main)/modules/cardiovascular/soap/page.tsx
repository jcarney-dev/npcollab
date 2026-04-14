import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import SoapNote from '@/components/SoapNote';

export default function CardiovascularSoapPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🫀 Cardiovascular</h1>
        <p>Vascular disease, DVT, cerebrovascular disease, and CVD risk management</p>
      </div>

      <ModuleTabs moduleId="cardiovascular" />


      <div className="content-prose">
      <SoapNote
        title="65-Year-Old Male — Peripheral Arterial Disease"
        meta="ABI Right 0.72 | Claudication at 200m | High CVD risk — undertreated"
        sections={[
          {
            letter: 'S',
            title: 'Subjective',
            fields: [
              {
                label: 'Presenting Complaint',
                content: '65-year-old male with 6-month history of right calf pain on walking.',
              },
              {
                label: 'History',
                content: [
                  'Cramping right calf pain onset after walking approximately 200 metres, relieved within 5 minutes of rest.',
                  'No rest pain. No ulcers or wounds. Progressively worsening — 12 months ago could walk 500 metres.',
                  'No left leg symptoms. No chest pain. No TIA or stroke symptoms.',
                ],
              },
              {
                label: 'Risk Factors',
                content: [
                  'Ex-smoker (ceased 5 years ago, 30 pack-years).',
                  'Type 2 diabetes (HbA1c 62).',
                  'Hypertension (perindopril 10mg, amlodipine 10mg — BP usually 138–145 systolic at home).',
                  'Fasting LDL 3.2 mmol/L — not on a statin.',
                  'Family history: father died of MI at 62.',
                ],
              },
              {
                label: 'Current Medications',
                content: 'Perindopril 10mg, amlodipine 10mg, metformin 1g BD. No antiplatelet therapy.',
              },
            ],
          },
          {
            letter: 'O',
            title: 'Objective',
            fields: [
              {
                label: 'Vital Signs',
                content: 'BP 148/88 right arm, 144/86 left arm | HR 72 | BMI 28',
              },
              {
                label: 'Peripheral Vascular Examination',
                content: [
                  'Skin: bilateral mild hair loss lower legs; no ulcers, no gangrene',
                  'Temperature: cooler right foot compared to left',
                  'Capillary refill: 2 seconds right foot, <2 seconds left',
                  'Pulses: femoral 2+ bilaterally; popliteal 2+ bilaterally; posterior tibial 1+ right, 2+ left; dorsalis pedis absent right, 2+ left',
                  'Buerger\'s test: right foot pallor at 45° elevation, delayed colour return (15 seconds) and venous guttering on lowering',
                  'ABI: Right 0.72, Left 0.94',
                  'Abdominal aorta: not palpable, no bruit',
                ],
              },
              {
                label: 'Investigations',
                content: [
                  'HbA1c: 62 (above target)',
                  'Fasting LDL: 3.2 mmol/L',
                  'eGFR: 64',
                  'ECG: sinus rhythm, no ischaemic changes',
                ],
              },
            ],
          },
          {
            letter: 'A',
            title: 'Assessment',
            fields: [
              {
                label: 'Problems',
                content: [
                  '1. Peripheral arterial disease right lower limb — moderate severity (ABI 0.72, claudication at 200m). PAD confirmed.',
                  '2. Multiple CVD risk factors: ex-smoker, T2DM, hypertension, dyslipidaemia — HIGH cardiovascular risk. Not on antiplatelet or statin therapy — undertreated.',
                  '3. Suboptimal BP and glycaemic control.',
                ],
              },
            ],
          },
          {
            letter: 'P',
            title: 'Plan',
            fields: [
              {
                label: 'Antiplatelet Therapy',
                content: 'Commence clopidogrel 75mg daily (preferred over aspirin for PAD per current evidence — CAPRIE trial).',
              },
              {
                label: 'Statin Therapy',
                content: [
                  'Commence rosuvastatin 20mg nocte — target LDL <1.8 mmol/L (secondary prevention, established PAD = CVD equivalent).',
                  'Recheck lipids in 6 weeks.',
                ],
              },
              {
                label: 'BP Management',
                content: 'Target <130/80 mmHg. Consider adding low-dose thiazide (indapamide 1.5mg). Review at next appointment.',
              },
              {
                label: 'Glycaemic Control',
                content: [
                  'HbA1c 62 — target <53 (7%). Add SGLT2 inhibitor (empagliflozin 10mg) — cardioprotective and nephroprotective benefit in this patient.',
                  'Reinforce dietary and lifestyle advice.',
                ],
              },
              {
                label: 'Exercise Therapy',
                content: [
                  'Supervised walking program — evidence-based first-line for claudication. Refer to cardiac/vascular rehabilitation.',
                  'Walk to near-maximum pain, rest, repeat — 30–45 minutes 3x/week minimum.',
                ],
              },
              {
                label: 'Referral',
                content: 'Vascular surgery referral — for assessment, duplex imaging, and consideration of revascularisation if exercise program insufficient. ABI 0.72 with symptomatic claudication warrants specialist input.',
              },
              {
                label: 'Follow-Up',
                content: [
                  'Review in 6 weeks — lipid recheck, BP review, medication tolerance.',
                  'Ongoing 6-monthly CVD risk review.',
                ],
              },
            ],
          },
        ]}
      />

      <div className="info-box">
        <p><strong>Educational purposes only.</strong> Always apply your own clinical judgement.</p>
      </div>
      </div>

      <ModuleNav moduleId="cardiovascular" />

    </div>
  );
}
