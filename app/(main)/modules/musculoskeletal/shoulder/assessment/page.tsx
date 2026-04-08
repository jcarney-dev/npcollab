import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Assessment | MSK Shoulder Module',
  description: 'Shoulder history, examination, and special tests for Australian Nurse Practitioners',
};

export default function MskShoulderAssessmentPage() {
  return (
    <>
            <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🦴 MSK — Shoulder</h1>
        <p>Rotator cuff disease, impingement, AC joint injuries, frozen shoulder, and instability</p>
      </div>
      <ModuleTabs moduleId="musculoskeletal/shoulder" />

      <div className="content-prose">
        <h2>Shoulder History</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">❓</div><h4>Pain History</h4></div>
            <ul>
              <li>Onset — sudden (traumatic) or gradual (degenerative)?</li>
              <li>Mechanism of injury — fall on outstretched arm, direct blow, overhead, repetitive?</li>
              <li>Location — anterior, lateral, posterior, AC joint, trapezius?</li>
              <li>Radiation — to neck (cervical), deltoid, arm, hand (neurological)?</li>
              <li>Character — aching, sharp, burning, stabbing?</li>
              <li>Severity — 0–10; impact on ADLs and sleep?</li>
              <li>Aggravating — overhead, behind back, lifting, lying on it at night?</li>
              <li>Relieving — rest, analgesia, ice, heat?</li>
              <li>Night pain — characteristic of rotator cuff and adhesive capsulitis</li>
              <li>Previous shoulder problems or surgery?</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🏃</div><h4>Functional and Contextual History</h4></div>
            <ul>
              <li>Dominant hand — is the affected shoulder dominant?</li>
              <li>Occupation — overhead work, manual labour, desk work?</li>
              <li>Sport — overhead sports (swimming, tennis, throwing), contact sport?</li>
              <li>Instability — feeling of shoulder slipping, clicking, popping?</li>
              <li>Stiffness — inability to reach behind back, overhead, or across body?</li>
              <li>Weakness — difficulty lifting arm to height, overhead, carrying?</li>
              <li>Paraesthesia or numbness — finger distribution suggests cervical origin</li>
              <li>Constitutional symptoms — fever, weight loss, malignancy history</li>
              <li>Comorbidities — diabetes (frozen shoulder), thyroid disease, hypermobility</li>
              <li>Previous imaging or physiotherapy?</li>
            </ul>
          </div>
        </div>

        <h2>Shoulder Examination</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">👁️</div><h4>Look</h4></div>
            <ul>
              <li>Posture — scapular winging, protracted shoulders, kyphosis</li>
              <li>Muscle wasting — deltoid (axillary nerve), supraspinous or infraspinous fossa (suprascapular nerve or RC tear)</li>
              <li>Deformity — step at AC joint (separation), squared-off appearance (dislocation)</li>
              <li>Bruising, swelling, erythema</li>
              <li>Surgical scars</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🤚</div><h4>Feel</h4></div>
            <ul>
              <li>Warmth — septic arthritis or inflammatory</li>
              <li>AC joint — point tenderness (AC OA, separation, or sprain)</li>
              <li>Bicipital groove — long head of biceps tendon tenderness (anterior)</li>
              <li>Greater tuberosity — supraspinatus insertion tenderness</li>
              <li>Posterior joint line — posterior labrum, GH OA</li>
              <li>Cervical spine — reproducing shoulder symptoms suggests referred pain</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔄</div><h4>Move (Active then Passive ROM)</h4></div>
            <ul>
              <li>Flexion: 0–180° — subacromial pain often limits this</li>
              <li>Abduction: 0–180° — painful arc 60–120° = impingement; global limitation = frozen shoulder</li>
              <li>External rotation: 0–60° — reduced in frozen shoulder (most sensitive sign)</li>
              <li>Internal rotation: hand behind back to which vertebral level</li>
              <li>Cross-arm adduction: pain at AC joint = AC pathology</li>
              <li>If passive ROM normal but active limited — consider neurological or significant RC tear</li>
              <li>Scapular substitution — scapula rises early = glenohumeral stiffness</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">💪</div><h4>Strength Testing</h4></div>
            <ul>
              <li>Abduction (supraspinatus) — resisted at 90° in scapular plane</li>
              <li>External rotation (infraspinatus/teres minor) — resisted with elbow at side</li>
              <li>Internal rotation (subscapularis) — belly press or lift-off test</li>
              <li>Elbow flexion (biceps) — assess long head of biceps</li>
              <li>Deltoid — resisted shoulder abduction in mid-range</li>
              <li>Grading: 0/5 (no contraction) to 5/5 (normal strength against resistance)</li>
            </ul>
          </div>
        </div>

        <h2>Special Tests</h2>
        <div className="assessment-grid">
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🎯</div><h4>Impingement and Rotator Cuff Tests</h4></div>
            <ul>
              <li>Neer's test: passive shoulder flexion to 180° with forearm pronated — pain = impingement (sensitivity 79%)</li>
              <li>Hawkins-Kennedy: elbow and shoulder at 90°, internally rotate — pain = impingement (sensitivity 79%)</li>
              <li>Empty can (Jobe's test): resisted abduction in scapular plane, thumb down — supraspinatus integrity</li>
              <li>External rotation lag sign: passively fully ER, ask to hold — inability to hold = large tear</li>
              <li>Drop arm test: passively abduct to 90°, ask to slowly lower — dropping arm = massive cuff tear</li>
              <li>Lift-off test: hand behind back, ask to lift — inability = subscapularis tear</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔗</div><h4>AC Joint and Biceps Tests</h4></div>
            <ul>
              <li>Cross-arm adduction test: adduct arm across body — pain at AC joint = AC pathology</li>
              <li>AC shear test: compress AC joint — tenderness confirms AC pathology</li>
              <li>Speed's test: resisted elbow flexion with forearm supinated and arm at 90° — bicipital groove pain = biceps pathology</li>
              <li>Yergason's test: resisted supination with elbow at 90° — bicipital groove pain = biceps tendinopathy or SLAP</li>
              <li>O'Brien's (active compression): resisted flexion at 90° with IR vs ER — pain worse with IR = SLAP or AC</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">🔄</div><h4>Instability Tests</h4></div>
            <ul>
              <li>Anterior apprehension test: 90° abduction and ER — apprehension (not just pain) = anterior instability</li>
              <li>Jobe relocation test: apply posterior force to humeral head during apprehension test — relief confirms anterior instability</li>
              <li>Anterior load and shift: translate humeral head anteriorly — compare to contralateral side</li>
              <li>Sulcus sign: inferior traction — sulcus &gt;1cm = inferior laxity or MDI</li>
              <li>Posterior apprehension: 90° flexion with IR and posterior force — apprehension = posterior instability</li>
            </ul>
          </div>
          <div className="assessment-card">
            <div className="card-header"><div className="icon-circle">📊</div><h4>Investigations</h4></div>
            <ul>
              <li>X-ray (AP and axillary): fracture, dislocation, AC separation, calcific tendinopathy, OA</li>
              <li>Ultrasound: first-line for rotator cuff tear, bursitis, biceps pathology — operator dependent</li>
              <li>MRI: labral tears, full characterisation of cuff tear, cartilage, occult fracture</li>
              <li>MRI arthrogram: gold standard for labral pathology (SLAP, Bankart)</li>
              <li>Bloods: FBE, CRP, ESR, uric acid, ANA if inflammatory or infective cause suspected</li>
              <li>Joint aspiration: if septic arthritis suspected — urgent MCS, cell count, crystals</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
