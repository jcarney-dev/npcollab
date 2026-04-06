import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Integumentary (Dermatology)' };

export default function IntegumentaryPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🩹 Integumentary</h1>
        <p>Assessment and management of common dermatological presentations, skin malignancy, and wound care in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="integumentary" />

      <div className="highlight-box">
        <h4>⚠️ Red Flags — Act Urgently</h4>
        <ul>
          <li>Rapidly spreading erythema with systemic toxicity — necrotising fasciitis, call 000</li>
          <li>Widespread blistering rash with mucosal involvement — Stevens-Johnson syndrome / TEN, emergency transfer</li>
          <li>Anaphylaxis with urticaria — adrenaline 0.5mg IM, call 000</li>
          <li>Petechial or purpuric non-blanching rash with fever — meningococcal septicaemia, call 000</li>
          <li>Cellulitis with streaking, bullae, or crepitus — severe infection, urgent IV antibiotics</li>
          <li>Rapidly expanding melanoma or ulcerated lesion — urgent dermatology referral</li>
          <li>Erythroderma (&gt;90% BSA involved) — hospital admission</li>
          <li>Toxic shock syndrome — fever, rash, hypotension, multi-organ involvement</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs can independently manage most common dermatological presentations including eczema, psoriasis, tinea, cellulitis, and wound care. Suspected melanoma, uncertain pigmented lesions, refractory inflammatory conditions, and moderate-severe psoriasis or eczema requiring systemic therapy or biologics require dermatology referral. Dermoscopy training significantly improves diagnostic accuracy for pigmented lesions.
      </div>

      <h2>Common Presentations</h2>

      <h3>Inflammatory Conditions</h3>
      <p>Common inflammatory skin conditions seen in NP practice include eczema (atopic dermatitis), psoriasis, contact dermatitis (allergic and irritant), seborrhoeic dermatitis, rosacea, urticaria, and lichen planus.</p>

      <h3>Infections</h3>
      <p>Bacterial: impetigo (Staph aureus and Group A Strep), cellulitis, and erysipelas. Fungal: tinea in multiple forms (corporis, pedis, cruris, capitis, unguium) and cutaneous candidiasis. Viral: herpes simplex, herpes zoster, molluscum contagiosum, and warts. Parasitic: scabies and pediculosis.</p>

      <h3>Skin Lesions and Malignancy</h3>
      <p>Pre-malignant: actinic keratosis. Malignant: basal cell carcinoma (BCC), squamous cell carcinoma (SCC), and melanoma. Benign: seborrhoeic keratosis, dermatofibroma, and lipoma.</p>

      <h3>Wound Management</h3>
      <p>Common chronic wounds in NP practice include venous leg ulcers, arterial ulcers, diabetic foot ulcers, pressure injuries, and surgical wound complications.</p>

      <h2>Key Conditions</h2>

      <h3>Eczema (Atopic Dermatitis)</h3>
      <p>Chronic relapsing inflammatory skin condition affecting approximately 20% of Australian children and 3% of adults. Characterised by pruritic, erythematous patches typically in flexural areas. Management is stepwise: regular emollients (cornerstone — apply twice daily or more), low-potency topical corticosteroids for mild-moderate flares, moderate-potency for moderate flares on the body. Avoid potent steroids on face, flexures, and genitalia. Identify and avoid triggers — soaps, heat, sweat, certain fabrics, and foods in some children. Wet wrapping for severe flares. Dupilumab (biologics) for refractory moderate-severe eczema — requires specialist initiation.</p>

      <h3>Psoriasis</h3>
      <p>Chronic immune-mediated inflammatory skin condition affecting 2–3% of Australians. Characterised by well-demarcated erythematous plaques with silvery scale, commonly affecting elbows, knees, scalp, and lumbar region. Associated with psoriatic arthritis (up to 30%), metabolic syndrome, cardiovascular disease, and depression. Management: topical corticosteroids, vitamin D analogues (calcipotriol), coal tar. Phototherapy (UVB) for moderate-severe. Systemic agents include methotrexate, acitretin, and cyclosporin. Biologics (TNF inhibitors, IL-17 inhibitors, IL-23 inhibitors) for moderate-severe disease — specialist-initiated. Oral corticosteroids must be avoided in psoriasis as they can trigger severe rebound (pustular psoriasis) on cessation.</p>

      <h3>Cellulitis</h3>
      <p>Bacterial skin infection involving the dermis and subcutaneous tissue. Most commonly caused by Streptococcus pyogenes and Staphylococcus aureus. Presents with erythema, warmth, swelling, and tenderness — mark the border at presentation to monitor progression. Lower limbs are the most common site. Management: outpatient for mild-moderate — cefalexin 500mg QID for 5–7 days (or dicloxacillin). Hospital admission for: systemic toxicity, rapidly spreading infection, bullae, facial cellulitis, immunocompromised patients, or failure of outpatient treatment. IV flucloxacillin or cefazolin for inpatient treatment. Elevate affected limb. Investigate for portal of entry (tinea pedis is common).</p>

      <h3>Tinea</h3>
      <p>Superficial fungal infection caused by dermatophytes. Tinea pedis (athlete&apos;s foot): interdigital maceration and scaling, plantar involvement. Tinea corporis (ringworm): annular erythematous scaly plaque with central clearing. Tinea cruris: inner thigh and groin. Tinea unguium (onychomycosis): thickened, discoloured, brittle nails. Treatment: topical antifungals (clotrimazole, miconazole) for most presentations — apply for 2–4 weeks beyond resolution. Oral terbinafine or itraconazole for tinea unguium and extensive tinea capitis. Confirm tinea unguium with nail clipping before committing to prolonged oral therapy.</p>

      <h3>Skin Cancer in Australia</h3>
      <p>Australia has the highest rates of skin cancer in the world — two in three Australians will be diagnosed with skin cancer by age 70. BCC is the most common skin cancer, locally invasive, and rarely metastasises — classic presentation is a pearly nodule with rolled border and telangiectasia. SCC is the second most common and can metastasise — higher risk on lips, ears, and in immunocompromised patients. Melanoma is the most dangerous — use ABCDE criteria (Asymmetry, Border irregularity, Colour variation, Diameter &gt;6mm, Evolution). Any suspicious pigmented lesion requires urgent dermatology referral or excision biopsy. Do not shave biopsy suspected melanoma — complete excision with 2mm margins is required.</p>

      <h3>Wound Assessment — TIME Framework</h3>
      <p>Assess every wound using the TIME framework: <strong>T</strong> — Tissue (viable vs non-viable: slough, eschar, necrosis), <strong>I</strong> — Infection/Inflammation (signs of infection, biofilm), <strong>M</strong> — Moisture balance (too dry vs macerated), <strong>E</strong> — Edge (wound edge advancing vs stalled, undermining, rolled edges).</p>
      <p>Venous leg ulcers: compression therapy is the cornerstone — four-layer bandaging or compression stockings (40mmHg at ankle). Always confirm ABPI ≥0.8 before applying compression — contraindicated in significant arterial disease. Treat underlying venous insufficiency. Moisturise surrounding skin. Avoid potent topical antibiotics on chronic wounds — antibiotic stewardship applies.</p>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. All clinical content references Australian guidelines including Therapeutic Guidelines (Dermatology), Australasian College of Dermatologists, and Wounds Australia.
      </div>
    </>
  );
}
