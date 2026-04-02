import type { Metadata } from 'next';
import ModuleTabs from '@/components/ModuleTabs';

export const metadata: Metadata = {
  title: 'Resources | Endocrine Module',
  description: 'Australian clinical resources for endocrine and diabetes NP practice',
};

export default function EndocrineResourcesPage() {
  return (
    <>
      <div className="page-header">
        <div className="label">Clinical Module</div>
        <h1>🔬 Endocrine</h1>
        <p>Diabetes, thyroid disease, adrenal disorders, and metabolic conditions</p>
      </div>
      <ModuleTabs moduleId="endocrine" />

      <h3 style={{ color: 'var(--navy)', marginBottom: '6px', fontFamily: 'var(--font-body)' }}>Clinical Resources — Endocrine</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>Curated Australian resources for NP endocrine practice</p>
      <div className="resources-list">
        <a href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/management-of-type-2-diabetes" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📋</div>
          <div className="r-body"><div className="r-title">RACGP — Management of Type 2 Diabetes</div><div className="r-desc">Comprehensive Australian primary care guidelines for T2DM diagnosis, management, and complication screening</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.diabetesaustralia.com.au/living-with-diabetes/managing-your-diabetes" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🩸</div>
          <div className="r-body"><div className="r-title">Diabetes Australia — Clinical Resources</div><div className="r-desc">Patient and clinician resources for diabetes management, education, and support in Australia</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.tg.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">💊</div>
          <div className="r-body"><div className="r-title">Therapeutic Guidelines — Endocrinology</div><div className="r-desc">Australian prescribing guidance for diabetes, thyroid disease, adrenal conditions, and metabolic disorders</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.ndss.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🆓</div>
          <div className="r-body"><div className="r-title">NDSS — National Diabetes Services Scheme</div><div className="r-desc">Subsidised diabetes products and services in Australia including CGM, insulin pumps, and consumables</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.thyroidaustralia.com.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🦋</div>
          <div className="r-body"><div className="r-title">Thyroid Australia</div><div className="r-desc">Patient and clinician resources for thyroid disease management, treatment options, and support</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.endocrinology.org.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🔬</div>
          <div className="r-body"><div className="r-title">Endocrine Society of Australia</div><div className="r-desc">Guidelines, position statements, and educational resources from Australian endocrinologists</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.nps.org.au/professionals/diabetes" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">🎯</div>
          <div className="r-body"><div className="r-title">NPS MedicineWise — Diabetes</div><div className="r-desc">Evidence-based prescribing support for glucose-lowering medications including SGLT2i and GLP-1 RAs</div></div>
          <div className="r-ext">↗</div>
        </a>
        <a href="https://www.ausdiab.net.au" target="_blank" rel="noopener" className="resource-link">
          <div className="r-icon">📊</div>
          <div className="r-body"><div className="r-title">AusDiab — Australian Diabetes, Obesity and Lifestyle Study</div><div className="r-desc">Landmark Australian epidemiological data on diabetes prevalence and risk factors</div></div>
          <div className="r-ext">↗</div>
        </a>
      </div>
    </>
  );
}
