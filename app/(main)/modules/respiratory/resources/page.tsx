import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Respiratory - Resources',
};

export default function RespiratoryResourcesPage() {
  return (
      <>
        <div className="page-header">
          <div className="label">Clinical Module</div>
          <h1>🫁 Respiratory - Resources</h1>
          <p>Asthma, COPD, pneumonia, pulmonary embolism, and spirometry interpretation</p>
        </div>
        <ModuleTabs moduleId="respiratory" />

      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — Respiratory</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian resources for NP respiratory practice</p>
      <div className="resources-list">
        <a href="https://www.nationalasthma.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🫁</div>
          <div className="r-body"><div className="r-title">National Asthma Council Australia</div><div className="r-desc">Australian Asthma Handbook — comprehensive clinical guidance, action plans, and patient resources</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://copdx.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💨</div>
          <div className="r-body"><div className="r-title">COPD-X Plan — Lung Foundation Australia</div><div className="r-desc">Australian and New Zealand COPD management guidelines</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Respiratory</div><div className="r-desc">Australian antibiotic and management guidance for pneumonia, COPD, and asthma</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.thoracic.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🏥</div>
          <div className="r-body"><div className="r-title">Thoracic Society of Australia and New Zealand (TSANZ)</div><div className="r-desc">Clinical guidelines, position statements, and specialist referral information</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://lungfoundation.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎗️</div>
          <div className="r-body"><div className="r-title">Lung Foundation Australia</div><div className="r-desc">Patient education, pulmonary rehabilitation resources, and lung health information</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nps.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎯</div>
          <div className="r-body"><div className="r-title">NPS MedicineWise — Respiratory</div><div className="r-desc">Evidence-based inhaler prescribing, antibiotic stewardship, and medicines information</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.smartasthma.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">Asthma Written Action Plans — NAC</div><div className="r-desc">Downloadable personalised asthma action plan templates for patients</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/smoking-cessation" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🚭</div>
          <div className="r-body"><div className="r-title">RACGP — Supporting Smoking Cessation Guidelines</div><div className="r-desc">Evidence-based smoking cessation guidance including pharmacotherapy for NPs</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
          </>

  );
}