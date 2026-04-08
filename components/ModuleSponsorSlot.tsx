import { getModuleSponsor } from '@/lib/sponsors';
import { ModuleSponsorCard } from './SponsorCard';

interface Props {
  moduleSlug: string;
}

/** Server component — renders sponsor attribution if an active sponsor exists for this module. */
export default async function ModuleSponsorSlot({ moduleSlug }: Props) {
  let sponsor = null;
  try {
    sponsor = await getModuleSponsor(moduleSlug);
  } catch {
    // Fail silently
  }

  if (!sponsor) return null;

  return <ModuleSponsorCard sponsor={sponsor} />;
}
