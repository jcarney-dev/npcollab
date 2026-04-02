import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: "Women's Health — Resources" };

export default function WomensHealthResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Women&apos;s Health</div>
        <h1>🌸 Resources</h1>
        <p>Curated Australian clinical guidelines, tools, and consumer resources for women&apos;s health practice.</p>
      </div>

      <ModuleTabs moduleId="womens-health" />

      <h2>Clinical Guidelines</h2>
      <div className="resource-list">
        <a href="https://ranzcog.edu.au/training/resources/guidelines-and-statements" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">RANZCOG Clinical Guidelines</div>
          <div className="resource-desc">Royal Australian and New Zealand College of Obstetricians and Gynaecologists guidelines covering heavy menstrual bleeding, endometriosis, contraception, menopause, preconception care, and more. Freely available — regularly updated.</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Therapeutic Guidelines: Reproductive Health</div>
          <div className="resource-desc">Evidence-based guidance for contraception, STI management, menstrual disorders, and menopause in the Australian context. Subscription via most health services.</div>
        </a>
        <a href="https://jeanhailes.org.au/health-a-z" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Jean Hailes for Women's Health</div>
          <div className="resource-desc">Australia's leading women's health organisation. Evidence-based resources on menopause, PCOS, endometriosis, contraception, period health, and bone health. Both consumer and clinician content. Freely available.</div>
        </a>
        <a href="https://www.safetyandquality.gov.au/our-work/clinical-care-standards/heavy-menstrual-bleeding-clinical-care-standard" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Heavy Menstrual Bleeding Clinical Care Standard — ACSQHC</div>
          <div className="resource-desc">Australian national standard for HMB management. Covers assessment, investigation, medical and surgical management, and consumer involvement. Quality indicators for NPs and health services.</div>
        </a>
      </div>

      <h2>Cervical Screening</h2>
      <div className="resource-list">
        <a href="https://www.health.gov.au/topics/cervical-screening" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">National Cervical Screening Programme — Department of Health</div>
          <div className="resource-desc">Official NCSP resources including the 2022–2028 HPV cervical screening pathway, provider fact sheets, laboratory guidance, and patient resources. Essential for NPs collecting cervical screening samples and managing results.</div>
        </a>
        <a href="https://www.cancerscreening.gov.au/cervical" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">National Cancer Screening Register</div>
          <div className="resource-desc">Register for cervical and bowel cancer screening. NPs can access patient screening records via NCSR portal. Supports recall and follow-up for cervical screening participants.</div>
        </a>
        <a href="https://www.cancer.org.au/cancer-information/causes-and-prevention/cervical-cancer-hpv" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Cancer Council Australia — HPV and Cervical Screening</div>
          <div className="resource-desc">Patient-facing and clinician information on HPV, the HPV vaccine, and cervical screening. Includes FAQs, multilingual resources, and the cervical screening pathway summary.</div>
        </a>
        <a href="https://www.nhmrc.gov.au/guidelines-publications/cp150" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NHMRC — Guidelines for Management of Screen-Detected Abnormalities in Cervical Screening</div>
          <div className="resource-desc">Australian clinical guidelines for managing abnormal CST results — HPV detection, colposcopy referral pathways, and post-treatment follow-up. Critical reference for NPs managing cervical screening abnormalities.</div>
        </a>
      </div>

      <h2>Menopause</h2>
      <div className="resource-list">
        <a href="https://www.menopause.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Australasian Menopause Society</div>
          <div className="resource-desc">Australia's peak menopause body. Evidence-based consumer information sheets, clinician resources on MHT prescribing, and a menopause specialist finder. Regularly updated to reflect current evidence. Essential for NPs managing menopausal patients.</div>
        </a>
        <a href="https://jeanhailes.org.au/health-a-z/menopause" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Jean Hailes — Menopause Resources</div>
          <div className="resource-desc">Comprehensive menopause consumer resources including a menopause symptom checker, MHT decision aid, and information on perimenopause, surgical menopause, and premature ovarian insufficiency.</div>
        </a>
        <a href="https://www.nps.org.au/menopause" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">NPS MedicineWise — Menopause and MHT</div>
          <div className="resource-desc">Evidence-based information on menopause management and MHT prescribing. Includes comparison of MHT products, risk-benefit information, and consumer decision aids.</div>
        </a>
      </div>

      <h2>Contraception</h2>
      <div className="resource-list">
        <a href="https://www.fpnsw.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Family Planning NSW — Clinical Resources</div>
          <div className="resource-desc">Comprehensive contraception prescribing guidance, clinical training for NPs, WHO Medical Eligibility Criteria tool, and consumer-facing information in multiple languages. IUD insertion training available through FP NSW.</div>
        </a>
        <a href="https://www.who.int/publications/i/item/9789241549158" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">WHO Medical Eligibility Criteria for Contraceptive Use (MEC)</div>
          <div className="resource-desc">Gold-standard global reference for contraceptive safety in specific medical conditions. Categorises contraindications as MEC 1 (no restriction), 2, 3, and 4 (absolute contraindication). Available as free app and PDF. Essential for safe contraceptive prescribing.</div>
        </a>
        <a href="https://www.thewheelapp.com" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">The Wheel — Contraceptive Prescribing App</div>
          <div className="resource-desc">Free app based on WHO MEC criteria for contraceptive method selection in patients with complex medical histories. Useful clinical decision support tool for NPs prescribing contraception.</div>
        </a>
      </div>

      <h2>Breast Health</h2>
      <div className="resource-list">
        <a href="https://www.breastscreen.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">BreastScreen Australia</div>
          <div className="resource-desc">Free mammographic screening programme for women 50–74 (40–49 and 75+ may self-refer). Screening locations, eligibility, and how to refer. NPs should proactively encourage eligible patients to participate.</div>
        </a>
        <a href="https://www.bcna.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Breast Cancer Network Australia (BCNA)</div>
          <div className="resource-desc">Australia's peak consumer breast cancer organisation. Resources for women diagnosed with breast cancer, treatment decision aids, My Journey online tool, and clinical resources for health professionals.</div>
        </a>
        <a href="https://www.cancer.org.au/cancer-information/types-of-cancer/breast-cancer/genetic-testing" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">Cancer Council — Familial Breast Cancer and Genetic Testing</div>
          <div className="resource-desc">Information on BRCA1/2 testing, familial cancer clinics in each state, and hereditary breast and ovarian cancer risk. NPs should refer women with strong family histories to familial cancer clinics.</div>
        </a>
      </div>

      <h2>Sexual Health and DV</h2>
      <div className="resource-list">
        <a href="https://www.1800respect.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">1800RESPECT (1800 737 732)</div>
          <div className="resource-desc">National sexual assault, domestic and family violence counselling service. 24/7 phone and online chat. NPs should provide this number to all patients where domestic violence is a concern, and include in safety planning.</div>
        </a>
        <a href="https://www.ashm.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="resource-title">ASHM — Australasian Society for HIV, Viral Hepatitis and Sexual Health Medicine</div>
          <div className="resource-desc">Clinical guidelines and education for STI and BBV management in Australia. Includes PrEP prescribing guidelines, STI screening recommendations, and treatment protocols. Essential for NPs in sexual health settings.</div>
        </a>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Resources current as of 2025 — verify currency before clinical use.
      </div>
    </>
  );
}
