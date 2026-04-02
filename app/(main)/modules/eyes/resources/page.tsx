import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Ophthalmology Resources',
};

export default function EyesResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>👁️ Ophthalmology</h1>
        <p>Red eye differentials, visual assessment, acute angle-closure glaucoma, and referral pathways</p>
      </div>
      <ModuleTabs moduleId="eyes" />
      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — Ophthalmology</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian and international resources for NP ophthalmic practice</p>
      <div className="resources-list">
        <a href="https://www.ranzco.edu" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏥</div>
          <div className="r-body"><div className="r-title">RANZCO — Royal Australian and NZ College of Ophthalmologists</div><div className="r-desc">Clinical guidelines, referral pathways, and patient resources</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Eye</div><div className="r-desc">Australian prescribing guidelines for ophthalmic conditions</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.mims.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📦</div>
          <div className="r-body"><div className="r-title">MIMS Australia — Ophthalmic Prescribing</div><div className="r-desc">Medicines information, dosing, and prescribing authority reference</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.aao.org/eye-health" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🌐</div>
          <div className="r-body"><div className="r-title">American Academy of Ophthalmology — Eye Health</div><div className="r-desc">Patient education materials and clinical summaries</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
    </>
  );
}
