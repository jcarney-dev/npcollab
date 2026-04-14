import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';
import ModuleNav from '@/components/ModuleNav';

export const metadata: Metadata = { title: "Women's Health — Assessment" };

export default function WomensHealthAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👩 Women&apos;s Health</h1>
        <p>Assessment and management of common women&apos;s health presentations in the Nurse Practitioner context.</p>
      </div>

      <ModuleTabs moduleId="womens-health" />


      <div className="content-prose">
      <h2>History</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>Menstrual History</h4>
          <ul>
            <li>Age at menarche</li>
            <li>Cycle regularity — cycle length (days from first day of one period to first day of next), variation</li>
            <li>Duration of bleeding — days of flow</li>
            <li>Flow volume — pads/tampons per day, flooding/clots (heavy menstrual bleeding)</li>
            <li>Dysmenorrhoea — primary (no pathology) or secondary (consider endometriosis, adenomyosis, fibroids)</li>
            <li>Intermenstrual bleeding — when in cycle, duration, volume</li>
            <li>Post-coital bleeding — timing, frequency</li>
            <li>Last menstrual period (LMP)</li>
            <li>Premenstrual symptoms — mood, bloating, breast tenderness, PMDD severity</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Contraceptive and Reproductive History</h4>
          <ul>
            <li>Current contraceptive method — type, duration of use, satisfaction</li>
            <li>Previous contraceptive methods — reasons for change, side effects</li>
            <li>Reproductive intentions — planning pregnancy now, in future, or completed family</li>
            <li>Gravida and para — number of pregnancies, births, miscarriages, terminations</li>
            <li>Previous complications — gestational diabetes, pre-eclampsia, preterm birth</li>
            <li>Breastfeeding status — affects contraceptive choices and MHT</li>
            <li>History of ectopic pregnancy — increases future ectopic risk</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Menopausal History</h4>
          <ul>
            <li>Age and date of last menstrual period</li>
            <li>Vasomotor symptoms — hot flushes (frequency, severity, duration, triggers), night sweats, sleep disruption</li>
            <li>Genitourinary symptoms — vaginal dryness, dyspareunia, urinary urgency, recurrent UTIs</li>
            <li>Mood — anxiety, depression, irritability, cognitive changes</li>
            <li>Sexual function — libido, arousal, orgasm, pain</li>
            <li>Previous MHT — type, duration, reason for ceasing</li>
            <li>Osteoporosis risk — fracture history, family history, falls</li>
            <li>Cardiovascular risk factors — smoking, BP, cholesterol, diabetes</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Cervical Screening History</h4>
          <ul>
            <li>Date of last cervical screening test (CST)</li>
            <li>Previous results — HPV status, LBC result, any abnormalities</li>
            <li>Previous colposcopy or treatment (LEEP/LLETZ, cryotherapy, cone biopsy)</li>
            <li>HPV vaccination status — number of doses, age vaccinated</li>
            <li>Sexual history — number of partners, gender of partners (screens all people with a cervix)</li>
            <li>History of DES exposure in utero — rare, requires specialist follow-up</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Breast History</h4>
          <ul>
            <li>Breast symptoms — lump, pain, nipple discharge (character: clear, milky, bloody), skin change, nipple inversion</li>
            <li>Duration and change over time — stable vs progressive</li>
            <li>Relation to menstrual cycle — cyclical mastalgia vs non-cyclical</li>
            <li>Previous breast biopsies or imaging — results</li>
            <li>BreastScreen participation — date of last mammogram</li>
            <li>Family history — breast or ovarian cancer, age of diagnosis, first or second degree</li>
            <li>Genetic testing — BRCA1/2 results if known</li>
            <li>Previous breast cancer — treatment received</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Sexual Health History</h4>
          <ul>
            <li>Sexual activity — current, recent</li>
            <li>Gender of sexual partners — determines STI risk profile</li>
            <li>Number of recent partners</li>
            <li>Condom use — consistent vs inconsistent</li>
            <li>STI symptoms — dysuria, discharge, pelvic pain, skin lesions, sore throat (pharyngeal gonorrhoea)</li>
            <li>Previous STIs — chlamydia, gonorrhoea, syphilis, herpes, HPV</li>
            <li>HIV risk — testing history, PrEP use, partner HIV status</li>
            <li>Sexual dysfunction — pain, libido, arousal</li>
            <li>Domestic violence and intimate partner violence — safe to ask (1800RESPECT)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Gynaecological History</h4>
          <ul>
            <li>Previous gynaecological conditions — endometriosis, PCOS, fibroids, ovarian cysts, PID</li>
            <li>Previous surgeries — hysterectomy (type — total vs subtotal, cervix retained?), oophorectomy, laparoscopy</li>
            <li>Pelvic floor symptoms — stress or urge incontinence, prolapse sensation, pelvic heaviness</li>
            <li>Vulval symptoms — itch, pain, burning, skin changes, ulceration</li>
            <li>Vaginal discharge — character, odour, associated symptoms</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Medication and Allergy History</h4>
          <ul>
            <li>Current medications — hormonal contraception, MHT, antidepressants, antiepileptics (interact with OCP), antihypertensives</li>
            <li>Supplements — St John&apos;s Wort (induces CYP3A4 — reduces OCP efficacy), evening primrose, black cohosh</li>
            <li>Allergies — latex (relevant for barrier contraception), medications</li>
            <li>Thrombotic risk assessment — personal or family history of VTE, factor V Leiden, antiphospholipid syndrome</li>
            <li>Smoking — quantity, years (affects OCP safety over 35 years)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Family and Social History</h4>
          <ul>
            <li>Family history — breast cancer (BRCA risk), ovarian cancer, cervical cancer, uterine cancer, colon cancer (Lynch syndrome), VTE</li>
            <li>Social history — relationship status, employment, cultural background (affects discussion of sexual health, contraception, ACP)</li>
            <li>Housing situation — relevant for domestic violence risk</li>
            <li>Country of birth — female genital mutilation/cutting prevalence (FGM/C) — affects examination and obstetric care</li>
            <li>Carer responsibilities — affects treatment choice compliance</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Systems Review</h4>
          <ul>
            <li>Weight changes — gain (PCOS, menopause) or loss</li>
            <li>Acne, hirsutism, alopecia — androgen excess (PCOS, late-onset CAH)</li>
            <li>Galactorrhoea — hyperprolactinaemia</li>
            <li>Thyroid symptoms — hypothyroidism (menorrhagia, anovulation, fertility)</li>
            <li>Mood, anxiety, cognition — perimenopausal changes, PMDD, postnatal depression</li>
            <li>Urinary symptoms — stress incontinence, urgency, recurrent UTIs (menopausal GSM)</li>
          </ul>
        </div>
      </div>

      <h2>Physical Examination</h2>

      <div className="assessment-grid">
        <div className="assessment-card">
          <h4>General Examination</h4>
          <ul>
            <li>Weight, height, BMI, waist circumference — metabolic risk, PCOS</li>
            <li>BP — essential before prescribing COCP or MHT</li>
            <li>Signs of androgen excess — acne, hirsutism (Ferriman-Gallwey score), male-pattern alopecia</li>
            <li>Thyroid — palpation for goitre, clinical signs of thyroid disease</li>
            <li>Signs of anaemia — pallor, tachycardia (heavy menstrual bleeding)</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Breast Examination</h4>
          <ul>
            <li>Inspection — symmetry, skin changes (peau d&apos;orange, dimpling, erythema), nipple inversion or retraction, visible mass</li>
            <li>Palpation (arms by side and raised) — systematic all quadrants, axillary tail, areola, nipple</li>
            <li>Lymph nodes — axillary, supraclavicular, infraclavicular</li>
            <li>Nipple discharge — elicit if appropriate, note character and side</li>
            <li>Document any findings with diagram or description of clock position, distance from nipple, size, mobility, borders</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Abdominal Examination</h4>
          <ul>
            <li>Inspection — distension, scars, visible mass</li>
            <li>Palpation — uterine size (enlarged in fibroids, pregnancy), adnexal mass, tenderness (PID, ectopic)</li>
            <li>Pelvic masses — location, size, mobility, tenderness</li>
            <li>Cervical motion tenderness — specific for PID/pelvic peritonitis if present on bimanual</li>
          </ul>
        </div>
        <div className="assessment-card">
          <h4>Pelvic Examination</h4>
          <ul>
            <li>External genitalia — vulval skin (lichen sclerosus, lichen planus, lesions, ulcers, FGM/C), Bartholin&apos;s glands</li>
            <li>Speculum examination — vaginal walls (atrophic changes, discharge, lesions), cervix (ectropion, lesions, discharge from os, bleeding on contact)</li>
            <li>Cervical screening sample collection — as indicated</li>
            <li>Bimanual examination — uterine size, position, consistency, mobility, adnexal tenderness, adnexal masses</li>
            <li>Pelvic floor — prolapse assessment if indicated (graded with POP-Q or Baden-Walker system)</li>
          </ul>
        </div>
      </div>

      <h2>Investigations</h2>

      <h3>Abnormal Uterine Bleeding</h3>
      <ul>
        <li>Urine or serum hCG — exclude pregnancy first in all women of reproductive age</li>
        <li>FBC — iron deficiency anaemia from chronic heavy bleeding</li>
        <li>TFTs — hypothyroidism causes menorrhagia and anovulatory cycles</li>
        <li>Coagulation studies — if suspecting von Willebrand disease (heavy periods since menarche, family history)</li>
        <li>Transvaginal pelvic ultrasound — uterine pathology (fibroids, polyps, adenomyosis — "venetian blind" pattern), endometrial thickness, ovarian cysts</li>
        <li>Endometrial biopsy (Pipelle) — women &gt;45, risk factors for endometrial cancer, failed medical treatment, or persistent IMB</li>
        <li>Hysteroscopy — gold standard for intrauterine pathology (arranged via gynaecology referral)</li>
      </ul>

      <h3>Menopause</h3>
      <ul>
        <li>FSH — not routinely required in women &gt;45 with typical symptoms; may be useful in women &lt;45 with suspected POI (premature ovarian insufficiency). FSH &gt;30 IU/L in amenorrhoeic woman suggests menopause.</li>
        <li>TFTs — exclude hypothyroidism (can mimic menopause with fatigue, menstrual irregularity)</li>
        <li>Fasting glucose and lipids — cardiovascular risk assessment before MHT</li>
        <li>BMD (DXA) — consider in early menopause, premature ovarian insufficiency, fracture risk factors</li>
        <li>Cervical screening — ensure up to date</li>
        <li>Mammogram — BreastScreen participation up to date before commencing MHT</li>
      </ul>

      <h3>Cervical Screening</h3>
      <ul>
        <li>Cervical screening test (CST) — HPV primary test with reflex LBC; collect per NCSP protocol</li>
        <li>Vaginal self-collection — available for eligible women who decline speculum examination (equivalent sensitivity for HPV detection)</li>
        <li>STI screen at time of CST if indicated — endocervical swab for chlamydia/gonorrhoea, vaginal swab</li>
      </ul>

      <h3>Breast</h3>
      <ul>
        <li>Ultrasound — first-line imaging for women &lt;35 years with a discrete lump or focal symptoms</li>
        <li>Mammogram ± ultrasound — women ≥35 years with a lump or focal breast symptoms</li>
        <li>Core biopsy or FNA — tissue diagnosis (arranged by imaging service or surgeon)</li>
        <li>MRI breast — high-risk surveillance (BRCA carriers), staging in known breast cancer</li>
      </ul>

      <div className="info-box" style={{marginTop:'1rem'}}>
        <strong>Educational purposes only.</strong> Always apply your own clinical judgement. References: RANZCOG, NCSP, Jean Hailes for Women&apos;s Health, Therapeutic Guidelines.
      </div>
      </div>

      <ModuleNav moduleId="womens-health" />

    </>
  );
}
