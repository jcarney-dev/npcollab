import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';
import ModuleSponsorSlot from '@/components/ModuleSponsorSlot';
import ContributorCard from '@/components/ContributorCard';

export const metadata: Metadata = {
  title: 'Maxillofacial and Dental Clinical Module',
  description: 'Australian NP maxillofacial and dental module — dental pain, oral infections, facial trauma, and dental emergencies in primary care. SOAP notes and quiz.',
  openGraph: {
    title: 'Maxillofacial and Dental Clinical Module | NPCollab',
    description: 'Australian NP maxillofacial and dental module — dental pain, oral infections, facial trauma, and dental emergencies in primary care. SOAP notes and quiz.',
    url: 'https://npcollab.com/modules/maxillofacial-dental',
  },
  alternates: {
    canonical: 'https://npcollab.com/modules/maxillofacial-dental',
  },
};

export default function MaxillofacialDentalPage() {
  return (
    <div>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦷 Maxillofacial &amp; Dental</h1>
        <p>Dental emergencies, orofacial infections, oral mucosal conditions, facial trauma, and oral cancer recognition for NP practice.</p>
      </div>

      <ModuleTabs moduleId="maxillofacial-dental" />


      <div className="content-prose">
      <p>Maxillofacial and dental presentations are regularly encountered in Australian urgent care, emergency, and primary care NP settings — particularly in regions with poor access to dental services. NPs must be able to assess and manage dental pain, orofacial infections, oral mucosal conditions, facial trauma, and bleeding complications, as well as recognise early signs of oral malignancy. This module focuses on the NP scope for these presentations and the critical task of identifying which conditions require immediate transfer to emergency or specialist dental care.</p>

      <div className="highlight-box">
        <h2>🚨 Red Flags — Act Urgently</h2>
        <ul>
          <li><strong>Ludwig&apos;s angina</strong> — bilateral submandibular swelling, floor of mouth elevation, trismus, drooling, stridor — airway emergency, call 000</li>
          <li><strong>Dental abscess with spreading cellulitis to neck or floor of mouth</strong> — emergency transfer</li>
          <li><strong>Facial fracture with airway compromise</strong> — emergency transfer</li>
          <li><strong>Orbital cellulitis</strong> — proptosis, restricted eye movement, fever — emergency transfer, IV antibiotics</li>
          <li><strong>Epiglottitis from dental source</strong> — drooling, stridor, toxic appearance — call 000</li>
          <li><strong>Uncontrolled post-extraction haemorrhage</strong> — emergency transfer if local measures fail</li>
          <li><strong>Suspected oropharyngeal malignancy</strong> — non-healing ulcer, pain, dysphagia, neck mass</li>
          <li><strong>Acute necrotising ulcerative gingivitis (ANUG) with systemic toxicity</strong></li>
        </ul>
      </div>

      <h2>The NP Role in Dental and Maxillofacial Care</h2>
      <p>
        While NPs are not dental practitioners, they frequently encounter dental and maxillofacial presentations in primary care, emergency, and remote settings — particularly where dental services are limited or inaccessible. Australian NPs must be able to assess and manage dental pain and infection in primary care, recognise and urgently refer dental emergencies, prescribe appropriate analgesia and antibiotics for dental infections, and recognise early signs of oral malignancy. NPs in remote and rural settings, Aboriginal Community Controlled Health Organisations, and community health centres frequently provide frontline dental primary care in areas of dental workforce shortage.
      </p>

      <h2>Key Conditions</h2>

      <h3>Dental Abscess</h3>
      <p>
        Most common dental emergency. Caused by bacterial infection of the dental pulp (periapical abscess) or periodontal tissues (periodontal abscess). Presents: severe throbbing tooth pain, tender to percussion, swelling, trismus (if spreading). May develop facial cellulitis — erythema, swelling, warmth over cheek or submandibular region. Management in primary care: analgesia (NSAIDs + paracetamol), antibiotics if systemic features or spreading cellulitis (amoxicillin 500mg TDS 5 days, or amoxicillin-clavulanate for spreading cellulitis), urgent dental referral for definitive treatment (I&amp;D or root canal or extraction). Antibiotics alone without drainage are inadequate — definitive dental treatment is always required.
      </p>

      <h3>Pulpitis — Reversible vs Irreversible</h3>
      <div className="info-box">
        <ul>
          <li><strong>Reversible pulpitis</strong> — brief pain (seconds) in response to cold or sweet stimuli, resolves when stimulus removed. Treated with filling and removal of caries. No antibiotics indicated.</li>
          <li><strong>Irreversible pulpitis</strong> — lingering pain (minutes) after stimulus, spontaneous throbbing, worse at night, exquisitely tender to percussion. Requires root canal treatment or extraction. Urgent dental referral.</li>
        </ul>
      </div>

      <h3>Pericoronitis</h3>
      <p>
        Infection around a partially erupted wisdom tooth (third molar). Common in young adults. Presents: pain and swelling posterior mandible, trismus, halitosis, lymphadenopathy. Management: irrigation under the operculum, chlorhexidine mouthwash, antibiotics if severe (amoxicillin + metronidazole or amoxicillin-clavulanate), dental referral for assessment of wisdom tooth extraction.
      </p>

      <h3>Ludwig&apos;s Angina</h3>
      <div className="highlight-box">
        <p>Life-threatening bilateral submandibular cellulitis involving multiple deep neck spaces. Most commonly of dental origin (mandibular molar infection). Presents: bilateral submandibular swelling, floor of mouth elevation (tongue pushed upward), trismus, drooling, fever, rapidly progressing. Airway compromise develops rapidly — call 000 immediately. Management: airway management takes priority (early intubation or surgical airway), IV antibiotics (benzylpenicillin + metronidazole, or amoxicillin-clavulanate), surgical drainage. High mortality without prompt treatment.</p>
      </div>

      <h3>Oral Candidiasis</h3>
      <p>
        Opportunistic fungal infection — Candida albicans. Risk factors: broad-spectrum antibiotics, inhaled corticosteroids, immunosuppression, dentures, dry mouth, diabetes, HIV. Types: pseudomembranous (white plaques easily wiped off, leaving erythematous base), erythematous (red patches, often under dentures), angular cheilitis (cracking at corners of mouth). Treatment: nystatin oral suspension 1mL QID for 14 days (swish and swallow); fluconazole 150mg single dose for severe or refractory cases; treat underlying cause. Rinse mouth after inhaled corticosteroids.
      </p>

      <h3>Oral Squamous Cell Carcinoma</h3>
      <p>
        Most common oral malignancy. Risk factors: tobacco, alcohol, HPV-16 (oropharyngeal), poor oral hygiene, chronic trauma. Sites: lateral tongue (most common), floor of mouth, lower lip. Presentation: non-healing ulcer or red/white patch persisting &gt;2–3 weeks, indurated edges, painless in early stages. Any suspicious oral lesion persisting &gt;2–3 weeks requires urgent biopsy referral. NPs should inspect the oral cavity in all patients and have a low threshold for referral.
      </p>

      <h3>Temporomandibular Joint (TMJ) Dysfunction</h3>
      <p>
        Presents with facial pain (preauricular, temple, masseter), limited or painful jaw opening, joint sounds (clicking, crepitus), and muscle tenderness. Bruxism (nocturnal teeth grinding) is a major contributor. Management: occlusal splint (custom-made by dentist), NSAIDs, heat packs, jaw exercises, stress management (CBT). Most cases resolve conservatively.
      </p>

      <p className="disclaimer">⚠️ Educational purposes only. Always apply your own clinical judgement.</p>
      </div>

      <ModuleNav moduleId="maxillofacial-dental" />

      <ContributorCard moduleSlug="maxillofacial-dental" />
      <ModuleSponsorSlot moduleSlug="maxillofacial-dental" />

    </div>
  );
}
