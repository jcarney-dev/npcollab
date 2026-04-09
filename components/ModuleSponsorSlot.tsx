import { getModuleSponsor, isAdPreviewMode } from '@/lib/sponsors';
import { ModuleSponsorCard } from './SponsorCard';

interface Props {
  moduleSlug: string;
}

/** Server component — renders sponsor attribution if an active sponsor exists for this module. */
export default async function ModuleSponsorSlot({ moduleSlug }: Props) {
  let sponsor = null;
  let adPreview = false;
  try {
    [sponsor, adPreview] = await Promise.all([
      getModuleSponsor(moduleSlug),
      isAdPreviewMode(),
    ]);
  } catch {
    // Fail silently
  }

  if (sponsor) return <ModuleSponsorCard sponsor={sponsor} />;

  if (adPreview) {
    return (
      <div style={{ border: '2px dashed var(--gold-light)', borderRadius: '8px', padding: '16px 24px', textAlign: 'center', background: 'var(--gold-pale)', margin: '24px 0' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Ad Placement Preview</div>
        <div style={{ fontSize: '14px', color: 'var(--navy)', fontWeight: 600 }}>[ Sponsor Ad — Module ]</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>728 × 90px</div>
      </div>
    );
  }

  return null;
}
