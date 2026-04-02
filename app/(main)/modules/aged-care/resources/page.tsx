import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: 'Aged Care — Resources' };

export default function AgedCareResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Aged Care</div>
        <h1>🏥 Resources</h1>
        <p>Curated Australian clinical guidelines, tools, and consumer resources for aged care practice.</p>
      </div>

      <ModuleTabs moduleId="aged-care" />

      <h2>Clinical Guidelines</h2>
      <div className="resource-list">
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Therapeutic Guidelines: Aged Care</div>
          <div className="resource-desc">Comprehensive evidence-based guidance for prescribing in older adults — delirium, dementia, pain, falls, continence, palliative care, and more. Subscription via most health services. Essential reference for NPs in aged care.</div>
        </a>
        <a href="https://www.safetyandquality.gov.au/publications-and-resources/resource-library/delirium-clinical-care-standard" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Delirium Clinical Care Standard — ACSQHC</div>
          <div className="resource-desc">Australian Commission on Safety and Quality in Health Care standard for delirium prevention, detection, and management. Includes quality statements, clinical guidance, and consumer resources. Freely available.</div>
        </a>
        <a href="https://www.safetyandquality.gov.au/our-work/clinical-care-standards/cognitive-impairment-acute-care-settings" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Cognitive Impairment in Acute Care Settings — ACSQHC</div>
          <div className="resource-desc">Guidance for assessment and management of delirium and dementia in acute care, including identification tools, care pathways, and staff education resources.</div>
        </a>
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/silver-book" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">RACGP Silver Book — Primary Care of Older Persons</div>
          <div className="resource-desc">Comprehensive guide to primary care for older Australians. Covers functional assessment, falls, cognitive impairment, continence, medication management, and palliative care. Directly applicable to NP practice.</div>
        </a>
      </div>

      <h2>Dementia</h2>
      <div className="resource-list">
        <a href="https://www.dementia.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Dementia Australia (1800 100 500)</div>
          <div className="resource-desc">Australia's peak dementia body. Provides the National Dementia Helpline, consumer resources, education for health professionals, and the Dementia Pathways tool. Resources available in multiple languages.</div>
        </a>
        <a href="https://www.magicapp.org" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Clinical Practice Guidelines — Dementia (NHMRC)</div>
          <div className="resource-desc">Australian clinical practice guidelines for the assessment and management of dementia, developed under NHMRC guidance. Includes recommendations for diagnosis, pharmacological and non-pharmacological management, and carer support.</div>
        </a>
        <a href="https://www.caregiversbcnl.ca/moca" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">MoCA — Montreal Cognitive Assessment</div>
          <div className="resource-desc">Free download of the MoCA tool — validated for mild cognitive impairment screening. Available in multiple languages. Training and certification available online. Score &lt;26/30 suggests cognitive impairment.</div>
        </a>
      </div>

      <h2>Falls Prevention</h2>
      <div className="resource-list">
        <a href="https://www.safetyandquality.gov.au/our-work/clinical-care-standards/falls-prevention-care-standard" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Falls Prevention Care Standard — ACSQHC</div>
          <div className="resource-desc">Australian national standard for falls prevention in health care settings. Covers risk identification, individualised prevention, post-fall management, and family engagement. Freely available.</div>
        </a>
        <a href="https://fallsnetwork.neura.edu.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Falls Prevention Network Australia — NeuRA</div>
          <div className="resource-desc">National network for falls prevention research and practice. Includes the Otago Exercise Programme resources, clinical tools (TUG, Berg Balance Scale), and evidence summaries for community and residential care.</div>
        </a>
        <a href="https://www.cdc.gov/steadi" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">STEADI — Falls Risk Assessment Tool</div>
          <div className="resource-desc">Structured falls risk assessment tool used in Australian clinical settings. Includes 12-item Stay Independent screener, TUG instructions, and 4-Stage Balance Test. Freely downloadable.</div>
        </a>
      </div>

      <h2>Polypharmacy and Deprescribing</h2>
      <div className="resource-list">
        <a href="https://www.nps.org.au/aged-care" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NPS MedicineWise — Aged Care Resources</div>
          <div className="resource-desc">Deprescribing guides, quality use of medicines resources, and the MedicineInsight programme. Includes evidence-based recommendations for polypharmacy management and specific deprescribing pathways (proton pump inhibitors, antihypertensives, antidepressants).</div>
        </a>
        <a href="https://www.medstopper.com" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Medstopper</div>
          <div className="resource-desc">Free online deprescribing decision-support tool. Enter patient medications and it provides a prioritised list for consideration of cessation with evidence summaries and tapering guidance. Useful adjunct to clinical judgement.</div>
        </a>
        <a href="https://stopp.eu" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">STOPP/START Criteria</div>
          <div className="resource-desc">Validated screening tool for potentially inappropriate prescribing in older adults (version 3, 2023). STOPP: medications to stop. START: medications to consider starting. Evidence-based framework for medication review.</div>
        </a>
        <a href="https://www.beerslist.com" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Beers Criteria — American Geriatrics Society</div>
          <div className="resource-desc">List of potentially inappropriate medications in older adults. Widely used internationally including in Australian practice. Freely accessible online — useful quick reference for prescribing decisions in older patients.</div>
        </a>
      </div>

      <h2>Advance Care Planning</h2>
      <div className="resource-list">
        <a href="https://www.advancecareplanning.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Advance Care Planning Australia</div>
          <div className="resource-desc">National ACP programme. State-specific Advance Care Directive forms, conversation starters, professional education, and consumer resources. Includes the ACPA National Framework and state-by-state legal information. Essential for NPs in aged care.</div>
        </a>
        <a href="https://palliativecare.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Palliative Care Australia</div>
          <div className="resource-desc">National peak body for palliative care. Clinical standards, consumer resources, and referral pathways. The National Palliative Care Strategy informs end-of-life care planning in all settings including aged care.</div>
        </a>
        <a href="https://www.safetyandquality.gov.au/our-work/partnering-consumers/advance-care-planning" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">ACSQHC — Advance Care Planning Resources</div>
          <div className="resource-desc">National guidance on advance care planning processes, documentation standards, and implementation in health services. Includes the National Consensus Statement on recognising and responding to deterioration.</div>
        </a>
      </div>

      <h2>Aged Care System</h2>
      <div className="resource-list">
        <a href="https://www.myagedcare.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">My Aged Care</div>
          <div className="resource-desc">Australian Government aged care entry point. Referral for ACAT assessment, home care packages, residential care approval. NPs can refer patients or support families navigating the system. Phone: 1800 200 422.</div>
        </a>
        <a href="https://www.agedcarequality.gov.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Aged Care Quality and Safety Commission</div>
          <div className="resource-desc">Regulates aged care quality standards in Australia. Aged Care Quality Standards (8 standards) must be met by all approved providers. Resources for clinicians on quality use of medicines, restrictive practices, and consumer rights.</div>
        </a>
        <a href="https://www.health.gov.au/topics/aged-care/providing-aged-care-services/medication-management-in-aged-care" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Department of Health — Medication Management in Aged Care</div>
          <div className="resource-desc">NP medication prescribing rights in aged care, quality use of medicines requirements, and pharmacy review (RMMR — Residential Medication Management Review) frameworks.</div>
        </a>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Resources current as of 2025 — verify currency before clinical use.
      </div>
    </>
  );
}
