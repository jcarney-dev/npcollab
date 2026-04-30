import Link from 'next/link';
import type { PortfolioEntry } from '@/lib/schema';

const STATUS_STYLES: Record<string, { label: string; bg: string; color: string }> = {
  draft:          { label: 'Draft',          bg: '#F1F5F9', color: '#475569' },
  pending_review: { label: 'Pending Review', bg: '#FEF3C7', color: '#92400E' },
  complete:       { label: 'Complete',       bg: '#DCFCE7', color: '#166534' },
};

interface Props {
  entry: PortfolioEntry;
}

export default function PortfolioEntryRow({ entry }: Props) {
  const st = STATUS_STYLES[entry.status] ?? STATUS_STYLES.draft;
  const formLabel = entry.formType === 'mini-cex' ? 'Mini CEX' : 'DOPS';
  const updatedAt = new Date(entry.updatedAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '14px 16px', background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
        <span style={{ flexShrink: 0, display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, background: 'var(--navy)', color: '#fff' }}>
          {formLabel}
        </span>
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {entry.title}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
        <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, background: st.bg, color: st.color }}>
          {st.label}
        </span>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{updatedAt}</span>
      </div>
    </div>
  );
}
