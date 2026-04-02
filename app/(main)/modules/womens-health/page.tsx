import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = { title: "Women's Health" };

export default function WomensHealthPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🌸 Women&apos;s Health</h1>
        <p>Assessment and management of common women&apos;s health presentations in the Nurse Practitioner context, including menstrual disorders, contraception, menopause, cervical screening, and breast health.</p>
      </div>

      <ModuleTabs moduleId="womens-health" />

      <div className="highlight-box">
        <h4>⚠️ Red Flags — Immediate Action Required</h4>
        <ul>
          <li>Postmenopausal bleeding — endometrial cancer until proven otherwise; urgent gynaecology referral</li>
          <li>Intermenstrual or post-coital bleeding — exclude cervical malignancy; urgent colposcopy if cervix abnormal on examination</li>
          <li>Acute pelvic pain with fever and vaginal discharge — pelvic inflammatory disease (PID); also exclude ectopic pregnancy</li>
          <li>Ectopic pregnancy — positive hCG + pelvic pain + risk factors (previous ectopic, PID, IUD, tubal surgery); surgical emergency</li>
          <li>Abnormal cervical screening result — high-grade squamous intraepithelial lesion (HSIL) on LBC, or HPV 16/18 detected; refer for colposcopy within 8 weeks</li>
          <li>Breast lump — any discrete lump, skin tethering, nipple inversion, bloody nipple discharge, axillary lymphadenopathy; urgent triple assessment</li>
          <li>Severe hypertension in pregnancy (&gt;160/110 mmHg) — pre-eclampsia; obstetric emergency</li>
          <li>Vulval ulceration or mass — exclude malignancy; refer for biopsy</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1.5rem'}}>
        <strong>NP Scope Note:</strong> NPs can independently assess and manage most women&apos;s health presentations including contraception, cervical screening, menstrual disorders, menopause, and STI management. Gynaecological procedures (IUD insertion, colposcopy, endometrial biopsy) require specific training and credentialing. Obstetric care is within scope for endorsed NPs with midwifery backgrounds; otherwise refer to obstetric services. Sexual health NPs often have extended prescribing authority for PrEP and BBV management.
      </div>

      <h2>Common Presentations</h2>

      <h3>Abnormal Uterine Bleeding</h3>
      <p>Abnormal uterine bleeding (AUB) affects approximately 30% of women during their reproductive years. FIGO classification (PALM-COEIN) distinguishes structural causes (Polyp, Adenomyosis, Leiomyoma, Malignancy) from non-structural causes (Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not otherwise classified).</p>
      <p><strong>Key patterns:</strong> Heavy menstrual bleeding (HMB) — menstrual blood loss &gt;80 mL per cycle or flooding/clots impacting quality of life. Intermenstrual bleeding (IMB) — bleeding between periods. Post-coital bleeding (PCB) — bleeding after intercourse. Irregular cycles — cycle length variation &gt;7–9 days.</p>
      <p><strong>Investigation:</strong> Pregnancy test first. FBC (iron deficiency anaemia — common in HMB), TFTs (hypothyroidism causes AUB), coagulation studies if coagulopathy suspected. Pelvic ultrasound (transvaginal preferred — uterine and ovarian pathology). Cervical screening if overdue. Endometrial biopsy if &gt;45 years, irregular bleeding, failed medical therapy, or risk factors for endometrial cancer (obesity, PCOS, nulliparity, diabetes, tamoxifen use).</p>
      <p><strong>Management of HMB:</strong> First-line: levonorgestrel-releasing IUD (Mirena) — most effective medical treatment, also provides contraception. Alternatives: combined OCP (cyclic or continuous), norethisterone, tranexamic acid (reduces blood loss 40–50% — take during menses only), mefenamic acid (NSAID — reduces blood loss and dysmenorrhoea). Surgical: endometrial ablation, myomectomy, hysterectomy — refer to gynaecology.</p>

      <h3>Contraception</h3>
      <p>NPs can prescribe, advise on, and in some states initiate contraception independently. Comprehensive contraceptive counselling includes efficacy, mechanism, non-contraceptive benefits, side effects, and the patient&apos;s reproductive goals.</p>
      <p><strong>Long-acting reversible contraception (LARC) — most effective:</strong> Levonorgestrel IUD (Mirena 52mg — 8 years; Kyleena 19.5mg — 5 years) — reduces menstrual bleeding; suitable for HMB, dysmenorrhoea. Copper IUD (Multiload, Copper-T) — non-hormonal, most effective emergency contraception if inserted within 5 days; can cause heavier periods. Etonogestrel implant (Implanon NXT) — subdermal, 3 years, 99.9% efficacy; irregular bleeding is main side effect.</p>
      <p><strong>Combined oral contraceptive pill (COCP):</strong> 91% typical use efficacy. Provides regulated cycles, reduces dysmenorrhoea, HMB, acne, PMS. Contraindications (WHO MEC 3/4): migraine with aura, uncontrolled hypertension, VTE history, smoker &gt;35 years, breastfeeding &lt;6 weeks postpartum, active liver disease. Increase thrombotic risk — explain and screen.</p>
      <p><strong>Progestogen-only pill (POP/mini-pill):</strong> Suitable when oestrogen is contraindicated. Desogestrel-containing POP (Cerazette, Slinda) has a 12-hour missed pill window (vs 3-hour for traditional POP). Common side effect: irregular bleeding. Often suitable postpartum and in women over 35 who smoke.</p>
      <p><strong>Emergency contraception:</strong> Levonorgestrel (Postinor, NorLevo) — within 72 hours (effective to 120 hours, less so). Ulipristal acetate (EllaOne) — within 120 hours, more effective in obese women than levonorgestrel. Copper IUD — within 5 days, most effective method, also provides ongoing contraception.</p>

      <h3>Menopause</h3>
      <p>Menopause is defined as 12 months of amenorrhoea without other cause. Average age in Australia is 51–52 years. Perimenopause (menopause transition) begins 4–8 years prior with hormonal fluctuation and symptom development.</p>
      <p><strong>Vasomotor symptoms (VMS):</strong> Hot flushes and night sweats affect 75% of women. Typically peak in the first 2 years post-menopause but can persist for 10+ years. Impact on sleep, mood, and work. First-line: menopausal hormone therapy (MHT).</p>
      <p><strong>Genitourinary syndrome of menopause (GSM):</strong> Vaginal dryness, dyspareunia, vulvovaginal atrophy, urinary urgency/frequency due to urogenital oestrogen deficiency. Affects 50–60% of postmenopausal women. Often undertreated. First-line: topical vaginal oestrogen (cream, pessary, or vaginal tablet — Ovestin, Vagifem/Vagirux). Safe even where systemic MHT is relatively contraindicated.</p>
      <p><strong>Menopausal Hormone Therapy (MHT):</strong> Most effective treatment for VMS and GSM. Current evidence supports safety for most women under 60 or within 10 years of menopause onset (Window of Opportunity). Combined oestrogen + progestogen required for women with an intact uterus (prevent endometrial hyperplasia). Routes: oral, transdermal (patches, gels — lower VTE risk than oral), vaginal. Contraindications: undiagnosed vaginal bleeding, oestrogen-dependent cancer (breast, endometrial), active VTE, active liver disease. Breast cancer risk: slight increase with combined MHT (&lt;1 extra case per 1000 women per year of use for most preparations); benefits often outweigh risks for quality of life. Individualise the decision — discuss benefits and risks with each patient.</p>

      <h3>Cervical Screening</h3>
      <p>The National Cervical Screening Programme (NCSP) in Australia moved from 2-yearly Pap smears to 5-yearly primary HPV testing from December 2017. This follows the HPV vaccination programme (Gardasil 9 — funded on NIP since 2007 for adolescents).</p>
      <p><strong>Current programme:</strong> Primary HPV testing every 5 years for women aged 25–74 (including women with no sexual history with men, transgender men with a cervix). Co-test (HPV + LBC) at initial test and on return after treatment. If HPV detected: LBC performed on same sample — result guides management pathway.</p>
      <p><strong>Results and actions:</strong> HPV not detected — screen again in 5 years. HPV detected, LBC negative — repeat co-test in 12 months. HPV 16/18 detected — refer for colposcopy regardless of LBC result. Other HPV detected + LSIL or HSIL — refer for colposcopy. HSIL on LBC — refer for urgent colposcopy within 8 weeks.</p>
      <p><strong>NP role:</strong> Cervical screening sample collection (if trained and credentialed), result management and patient notification, follow-up of abnormal results, colposcopy referral, patient education and recall management.</p>

      <h3>Breast Health</h3>
      <p>Breast cancer is the most common cancer in Australian women (excluding non-melanoma skin cancer). NPs have a key role in breast symptom assessment, screening promotion, and referral coordination.</p>
      <p><strong>BreastScreen Australia:</strong> Free 2-yearly mammographic screening for women 50–74 years. Women 40–49 and 75+ can self-refer. Indigenous women encouraged from age 40. NPs should proactively promote participation.</p>
      <p><strong>Breast lump assessment — Triple Assessment:</strong> (1) Clinical examination; (2) Imaging (ultrasound &lt;35 years, mammogram ± ultrasound ≥35 years); (3) Tissue sampling (FNA or core biopsy). Any discrete lump, new asymmetry, skin tethering/dimpling, nipple inversion, bloody nipple discharge, or axillary lymphadenopathy requires urgent triple assessment referral. Do not delay for period to pass.</p>
      <p><strong>High-risk women:</strong> BRCA1/2 carriers or strong family history — refer to familial cancer clinic for risk assessment and enhanced surveillance (annual MRI + mammogram).</p>

      <div className="highlight-box" style={{marginTop:'1.5rem'}}>
        <h4>Key Australian Resources</h4>
        <ul>
          <li><strong>National Cervical Screening Programme — NCSP</strong> — health.gov.au — protocols, pathways, referral guidelines</li>
          <li><strong>BreastScreen Australia</strong> — breastscreen.gov.au — screening locations, eligibility, referral</li>
          <li><strong>Jean Hailes for Women&apos;s Health</strong> — jeanhailes.org.au — menopause, PCOS, endometriosis resources</li>
          <li><strong>Menopause Foundation of Australia</strong> — menopause.org.au — MHT guidance, patient education</li>
          <li><strong>RANZCOG</strong> — ranzcog.edu.au — obstetric and gynaecological clinical guidelines</li>
          <li><strong>Family Planning Australia</strong> — fpnsw.org.au — contraception, sexual health, training for clinicians</li>
          <li><strong>1800RESPECT (1800 737 732)</strong> — national sexual assault and domestic violence hotline</li>
          <li><strong>Therapeutic Guidelines: Reproductive Health</strong> — evidence-based guidance for Australian NP practice</li>
        </ul>
      </div>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. Clinical content references Australian guidelines including RANZCOG, NCSP, Jean Hailes, and Therapeutic Guidelines.
      </div>
    </>
  );
}
