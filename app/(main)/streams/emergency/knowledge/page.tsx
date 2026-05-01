import { KNOWLEDGE_SYSTEMS } from '@/lib/emergency-knowledge';

export const metadata = {
  title: 'Emergency Knowledge Base | NPCollab',
};

const CATEGORY_ORDER = ['Core', 'Special'] as const;

export default function KnowledgeBasePage() {
  const grouped = CATEGORY_ORDER.map(cat => ({
    category: cat,
    systems: KNOWLEDGE_SYSTEMS.filter(s => s.category === cat),
  }));

  return (
    <>
      <div className="page-header">
        <div className="label">Streams / Emergency / Knowledge Base</div>
        <h1>Emergency Knowledge Base</h1>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
          System-by-system clinical reference for Emergency Nurse Practitioners
        </p>
      </div>
      <div className="content-prose">
        <p>
          This knowledge base synthesises the minimum clinical knowledge expected of endorsed Emergency NPs,
          drawn from the <strong>NMBA NP Standards for Practice (2021)</strong>, ACEM P67 V4, ACNP ENP Clinical
          Practice Standards (2025), and Australian clinical guidelines (eTG Complete, Stroke Foundation, ANZCOR).
          Each section covers key decision rules, drug doses, and red flags for the 18 core emergency clinical systems.
        </p>

        {grouped.map(({ category, systems }) => (
          <div key={category} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--navy)', borderBottom: '2px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>
              {category} Systems
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {systems.map((system) => (
                <details
                  key={system.id}
                  style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}
                >
                  <summary style={{ padding: '16px 20px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', color: 'var(--navy)', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', userSelect: 'none' }}>
                    <span>{system.name}</span>
                    <span style={{ fontSize: '18px', color: 'var(--gold)', lineHeight: 1 }}>+</span>
                  </summary>
                  <div style={{ padding: '0 20px 20px', borderTop: '1px solid var(--border)' }}>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '16px' }}>
                      {system.summary}
                    </p>

                    {system.keyDecisionRules.length > 0 && (
                      <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                          Decision Rules & Scores
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {system.keyDecisionRules.map((rule, i) => (
                            <span
                              key={i}
                              style={{ display: 'inline-block', padding: '3px 10px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', fontSize: '12px', color: '#1E40AF', fontWeight: 500 }}
                            >
                              {rule}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {system.keyDrugs.length > 0 && (
                      <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                          Key Drugs & Doses
                        </div>
                        <div style={{ display: 'grid', gap: '6px' }}>
                          {system.keyDrugs.map((drug, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '8px', padding: '8px 12px', background: '#F8FAFC', borderRadius: '6px', fontSize: '13px' }}>
                              <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{drug.name}</span>
                              <span style={{ color: 'var(--text-muted)' }}>{drug.dose}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {system.redFlags.length > 0 && (
                      <div style={{ marginTop: '16px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#9A3412', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                          Red Flags
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {system.redFlags.map((flag, i) => (
                            <li key={i} style={{ fontSize: '13px', color: '#7C2D12', lineHeight: 1.5 }}>{flag}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {system.references.length > 0 && (
                      <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                          Key References
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {system.references.map((ref, i) => (
                            <span
                              key={i}
                              style={{ fontSize: '12px', color: 'var(--text-muted)', background: '#F1F5F9', padding: '2px 8px', borderRadius: '4px' }}
                            >
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
