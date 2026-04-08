import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Integumentary — Assessment' };

export default function IntegumentaryAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩹 Integumentary</h1>
        <p>Assessment and management of common dermatological presentations, skin malignancy, and wound care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="integumentary" />


      <div className="content-prose">
      <h2>Dermatological History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Presenting Lesion</h4>
          <ul>
            <li>Duration — how long has it been present? Has it changed?</li>
            <li>Onset — sudden or gradual?</li>
            <li>Distribution — localised or widespread? Symmetrical?</li>
            <li>Symptoms — pruritus, pain, burning, numbness?</li>
            <li>Evolution — spreading, improving, or static?</li>
            <li>Preceding events — new medication, travel, sick contacts, new products</li>
            <li>Previous treatment — what has been tried, what helped?</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Relevant Background</h4>
          <ul>
            <li>Personal history of skin conditions — eczema, psoriasis, skin cancer</li>
            <li>Family history — eczema, psoriasis, melanoma</li>
            <li>Atopy — eczema, allergic rhinitis, asthma</li>
            <li>Medications — including OTC, herbal, recent antibiotics</li>
            <li>Allergies — contact allergens, drug allergies</li>
            <li>Sun exposure history — outdoor occupation, sun protection habits, solarium use</li>
            <li>Immunosuppression — HIV, transplant, corticosteroids, biologics</li>
            <li>Occupational exposures — chemicals, wet work, irritants</li>
            <li>Travel history — tropical infections</li>
          </ul>
        </div>
      </div>

      <h2>Skin Examination</h2>

      <h3>Primary Lesion Types</h3>
      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Primary Lesions</h4>
          <ul>
            <li><strong>Macule</strong> — flat, colour change, &lt;1cm</li>
            <li><strong>Patch</strong> — flat, colour change, &gt;1cm</li>
            <li><strong>Papule</strong> — raised, solid, &lt;1cm</li>
            <li><strong>Plaque</strong> — raised, flat-topped, &gt;1cm</li>
            <li><strong>Nodule</strong> — raised, solid, &gt;1cm, deeper</li>
            <li><strong>Vesicle</strong> — fluid-filled blister, &lt;1cm</li>
            <li><strong>Bulla</strong> — fluid-filled blister, &gt;1cm</li>
            <li><strong>Pustule</strong> — pus-filled lesion</li>
            <li><strong>Wheal</strong> — transient oedematous plaque (urticaria)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Secondary Lesions</h4>
          <ul>
            <li><strong>Scale</strong> — flaking of stratum corneum</li>
            <li><strong>Crust</strong> — dried exudate</li>
            <li><strong>Erosion</strong> — loss of epidermis only</li>
            <li><strong>Ulcer</strong> — loss of epidermis and dermis</li>
            <li><strong>Lichenification</strong> — thickened skin with accentuated markings</li>
            <li><strong>Excoriation</strong> — scratch marks</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>ABCDE — Melanoma Assessment</h4>
          <ul>
            <li><strong>A</strong> — Asymmetry</li>
            <li><strong>B</strong> — Border irregularity</li>
            <li><strong>C</strong> — Colour variation (multiple colours)</li>
            <li><strong>D</strong> — Diameter &gt;6mm</li>
            <li><strong>E</strong> — Evolution — any change in size, shape, colour, or symptoms</li>
          </ul>
          <p style={{fontSize:'0.85rem',marginTop:'0.5rem',color:'var(--text-muted)'}}>Evolution is the most important criterion — any change in a lesion warrants urgent assessment.</p>
        </div>
        <div className="assessment-card">
          <h4>Dermoscopy</h4>
          <ul>
            <li>Significantly improves diagnostic accuracy for pigmented lesions</li>
            <li>NPs with dermoscopy training should use it routinely for pigmented lesion assessment</li>
            <li><strong>Benign patterns:</strong> uniform pigment network, symmetrical</li>
            <li><strong>Malignant patterns:</strong> atypical pigment network, regression structures, blue-white veil, atypical vascular patterns</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Microbiological</h4>
          <ul>
            <li>Skin swab MCS — infected wounds, bullous impetigo, infected eczema</li>
            <li>Skin scraping for microscopy — tinea (KOH preparation), scabies</li>
            <li>Nail clipping — tinea unguium (send for microscopy and culture before starting oral antifungal)</li>
            <li>Wound swab — only if clinical signs of infection; not routine</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Specialist / Referral</h4>
          <ul>
            <li>Patch testing — allergic contact dermatitis (specialist referral required)</li>
            <li>Punch or excision biopsy — uncertain diagnosis, suspected malignancy</li>
            <li>Skin photography — document lesions for monitoring</li>
            <li>FBE, ESR, ANA — suspected autoimmune skin disease</li>
            <li>ABPI (ankle-brachial pressure index) — before compression in leg ulcers</li>
          </ul>
        </div>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: Therapeutic Guidelines (Dermatology), Australasian College of Dermatologists, Wounds Australia.
      </div>
      </div>

    </>
  );
}
