import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';

export const metadata: Metadata = {
  title: 'Paediatrics Clinical Module',
  description: 'Australian NP paediatrics module — assessment of the unwell child, common paediatric presentations, developmental concerns, and emergency recognition. SOAP notes and quiz.',
  openGraph: {
    title: 'Paediatrics Clinical Module | NPCollab',
    description: 'Australian NP paediatrics module — assessment of the unwell child, common paediatric presentations, developmental concerns, and emergency recognition. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/paediatrics',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/paediatrics',
  },
};

export default function PaediatricsPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👶 Paediatrics</h1>
        <p>Assessment and management of common paediatric presentations in the Nurse Practitioner context, including acute illness, developmental assessment, and child health surveillance.</p>
      </div>

      <ModuleTabs moduleId="paediatrics" />


      <div className="content-prose">
      <p>Paediatric assessment requires a fundamentally different approach to the adult consultation — accounting for developmental stage, age-specific vital signs, weight-based medication dosing, and the critical role of the parent or carer as the primary historian. Australian NPs across primary care, community health, emergency, and child health settings regularly manage acute childhood illness, developmental concerns, childhood vaccination, and child health surveillance. This module provides a framework for common paediatric presentations with particular attention to the red flags that differentiate well from unwell children.</p>

      <div className="highlight-box">
        <h4>⚠️ Red Flags — Refer Urgently or Call 000</h4>
        <ul>
          <li>Stridor at rest — moderate to severe croup, foreign body, epiglottitis</li>
          <li>SpO₂ &lt;92% in any child</li>
          <li>Purpuric or non-blanching rash with fever — meningococcal septicaemia</li>
          <li>Bilious (green) vomiting in a neonate — surgical emergency until excluded</li>
          <li>Fever in any child under 3 months</li>
          <li>Altered consciousness or inconsolable crying</li>
          <li>Signs of severe dehydration — sunken fontanelle, no urine output, altered consciousness</li>
          <li>Seizure lasting &gt;5 minutes — status epilepticus</li>
          <li>Bulging fontanelle with fever — meningitis</li>
          <li>Absence of social smile by 6 weeks</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs can independently assess and manage most common paediatric presentations including upper respiratory infections, otitis media, gastroenteritis, and minor injuries. Neonates (&lt;28 days), complex or deteriorating children, suspected non-accidental injury, and new presentations of developmental delay require urgent paediatric referral. Always consider weight-based dosing and age-appropriate vital sign parameters.
      </div>

      <h2>Common Presentations by Age Group</h2>

      <h3>Neonates and Young Infants (&lt;3 Months)</h3>
      <p>Fever (&gt;38°C) in any child under 3 months is a medical emergency requiring urgent assessment and likely septic workup (FBE, CRP, blood cultures, urine MCS, LP). The immune system is immature and infection can progress rapidly without localising signs. Common causes: group B streptococcus, E. coli, Listeria, HSV (risk highest in neonates). Admit and treat empirically with IV antibiotics while awaiting results.</p>
      <p><strong>Jaundice:</strong> Physiological jaundice peaks at day 3–5 and resolves by 2 weeks. Jaundice in the first 24 hours is always pathological (haemolytic disease). Jaundice persisting beyond 2 weeks in formula-fed infants or 3 weeks in breastfed infants requires investigation to exclude biliary atresia (pale stools, dark urine).</p>

      <h3>Infants (3–12 Months)</h3>
      <p><strong>Bronchiolitis:</strong> Most common lower respiratory infection in infants, typically RSV. Presents with coryza progressing to wheeze, cough, and respiratory distress. Peak incidence 2–6 months. Management is supportive only — no bronchodilators, corticosteroids, or antibiotics. Supplemental oxygen for SpO₂ &lt;94%. Nasogastric feeding if inadequate oral intake. Admission for moderate-severe disease.</p>
      <p><strong>Gastroenteritis:</strong> Rotavirus is the most common cause prior to vaccination. Oral rehydration solution (ORS) is first-line for mild-moderate dehydration. Continue normal feeds alongside ORS. Avoid fruit juice and sports drinks. Most cases resolve within 5–7 days.</p>

      <h3>Toddlers (1–3 Years)</h3>
      <p><strong>Croup (laryngotracheobronchitis):</strong> Most common cause of acute stridor in toddlers. Parainfluenza virus most common aetiology. Presents with barky cough, hoarse voice, and inspiratory stridor, typically worse at night. Dexamethasone 0.15mg/kg oral is the cornerstone of treatment for all severities. Nebulised adrenaline for moderate-severe croup or stridor at rest. Westley croup score guides severity assessment and management.</p>
      <p><strong>Febrile seizures:</strong> Common in children aged 6 months to 6 years. Simple febrile seizure: generalised, duration &lt;15 minutes, single episode in 24 hours, normal post-ictal recovery. Benign prognosis. Complex febrile seizure: focal onset, duration ≥15 minutes, or recurrence within 24 hours — requires paediatric assessment.</p>

      <h3>School-Age Children (6–12 Years)</h3>
      <p><strong>Asthma:</strong> Most common chronic disease in Australian children. Diagnosis based on history of episodic wheeze, cough (especially nocturnal), and response to bronchodilators. PAEDIATRIC ASTHMA ACTION PLAN is essential — provide written plan to parents and school. Mild-moderate acute asthma: salbutamol 6 puffs via spacer every 20 minutes × 3, then review. Prednisolone 1mg/kg (max 50mg) for moderate-severe exacerbations.</p>
      <p><strong>Upper respiratory infections:</strong> Viral in &gt;90% of cases. Antibiotics not indicated for uncomplicated URI, viral pharyngitis, or acute otitis media in children ≥2 years with mild symptoms. Group A Streptococcal pharyngitis: Centor score ≥4 warrants treatment with penicillin to reduce rheumatic fever risk.</p>

      <h3>Adolescents (13–18 Years)</h3>
      <p><strong>Mental health:</strong> Depression, anxiety, eating disorders, and self-harm are the most common presentations. Use HEADSS framework for psychosocial assessment. PHQ-A (adolescent version) for depression screening. Mandatory reporting obligations apply for children at risk of abuse or neglect.</p>
      <p><strong>Eating disorders:</strong> Anorexia nervosa and bulimia nervosa peak in adolescence. Medical stability assessment is the priority — bradycardia, hypotension, electrolyte abnormalities, and rapid weight loss may require hospital admission before psychological management can commence.</p>

      <h2>Immunisation</h2>
      <p>The Australian National Immunisation Program (NIP) provides free vaccines at defined intervals. All vaccines administered must be recorded in the Australian Immunisation Register (AIR). NPs can administer vaccines and are responsible for completing the AIR entry. Catch-up schedules are available in the Australian Immunisation Handbook for unvaccinated or incompletely vaccinated children. Contraindications (anaphylaxis to previous dose or vaccine component) and precautions must be checked before administration. Observe for 15 minutes post-vaccination (30 minutes if previous hypersensitivity reaction).</p>
      <p><strong>Key NIP schedule milestones:</strong> Birth (hepatitis B), 6–8 weeks (hexavalent, pneumococcal, rotavirus), 4 months (hexavalent, pneumococcal, rotavirus), 6 months (hexavalent, pneumococcal, meningococcal B in some states), 12 months (MMR, meningococcal ACWY, hepatitis A for Aboriginal and Torres Strait Islander children), 18 months (hexavalent booster, MMR booster, varicella), 4 years (diphtheria, tetanus, pertussis, polio booster, MMR, varicella), adolescence (HPV, meningococcal ACWY, dTpa).</p>

      <div className="highlight-box" style={{marginTop:'1.5rem'}}>
        <h4>Key Australian Resources</h4>
        <ul>
          <li><strong>Royal Children&apos;s Hospital Melbourne Clinical Practice Guidelines</strong> — rch.org.au/clinicalguide — comprehensive evidence-based paediatric guidelines</li>
          <li><strong>Therapeutic Guidelines: Paediatrics</strong> — tg.org.au — Australian prescribing guidance for paediatric conditions</li>
          <li><strong>Australian Immunisation Handbook</strong> — immunisationhandbook.health.gov.au — comprehensive vaccination guidance</li>
          <li><strong>Australian Immunisation Register (AIR)</strong> — servicesaustralia.gov.au/air — record and check vaccination status</li>
          <li><strong>Raising Children Network</strong> — raisingchildren.net.au — evidence-based parenting and child health resources</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. All clinical content references Australian guidelines including the Royal Children&apos;s Hospital Melbourne Clinical Practice Guidelines, Therapeutic Guidelines (Paediatrics), and the Australian Immunisation Handbook.
      </div>
      </div>

    
      <ModuleNav moduleId="paediatrics" />

      <ModuleSponsorSlot moduleSlug="paediatrics" />
    </>
  );
}
