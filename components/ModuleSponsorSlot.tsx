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
      <div style={{
        border: '2px solid var(--navy)',
        borderRadius: '8px',
        padding: '20px 24px',
        textAlign: 'center',
        background: 'var(--navy)',
        margin: '32px 0 0',
      }}>
        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Ad Placement</div>
        <div style={{ fontSize: '14px', color: 'var(--gold-light)', fontWeight: 600 }}>[ Ad Placement — Module Sponsor ]</div>
      </div>
    );
  }

  return null;
}
