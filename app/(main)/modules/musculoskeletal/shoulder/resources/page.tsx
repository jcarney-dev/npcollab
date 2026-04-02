import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Resources | MSK Shoulder Module',
  description: 'Australian clinical resources for shoulder assessment and management',
};

export default function MskShoulderResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Musculoskeletal Module</div>
        <h1>🦴 Shoulder</h1>
        <p>Rotator cuff disease, impingement, AC joint injuries, frozen shoulder, and instability</p>
      </div>
      <ModuleTabs moduleId="musculoskeletal/shoulder" />

      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — Shoulder</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian resources for shoulder assessment and management in NP practice</p>
      <div className="resources-list">
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/musculoskeletal" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">RACGP — Musculoskeletal Guidelines</div><div className="r-desc">Australian primary care guidelines for musculoskeletal assessment and management including shoulder pathology</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Rheumatology</div><div className="r-desc">Australian prescribing guidance for MSK pain, NSAIDs, corticosteroid injections, and analgesia</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.aoa.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🦴</div>
          <div className="r-body"><div className="r-title">Australian Orthopaedic Association</div><div className="r-desc">Orthopaedic guidelines, patient information, and referral criteria for shoulder conditions</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.physiotherapy.asn.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💪</div>
          <div className="r-body"><div className="r-title">Australian Physiotherapy Association</div><div className="r-desc">Find physiotherapists and access resources on exercise-based rehabilitation for shoulder conditions</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.rheumatology.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🔬</div>
          <div className="r-body"><div className="r-title">Australian Rheumatology Association</div><div className="r-desc">Resources on inflammatory shoulder conditions, giant cell arteritis, and polymyalgia rheumatica</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.choosingwisely.org.au/recommendations/aoa02" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎯</div>
          <div className="r-body"><div className="r-title">Choosing Wisely Australia — Shoulder Imaging</div><div className="r-desc">Recommendations on appropriate use of imaging for shoulder pain — avoiding unnecessary MRI and X-ray</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nps.org.au/professionals/pain" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📊</div>
          <div className="r-body"><div className="r-title">NPS MedicineWise — Musculoskeletal Pain</div><div className="r-desc">Evidence-based guidance on analgesic prescribing for MSK conditions including NSAID risk stratification</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
    </>
  );
}
