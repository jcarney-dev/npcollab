import { db } from './db';
import { sponsors, siteSettings } from './schema';
import { and, eq, or, isNull, lte, gte } from 'drizzle-orm';
import type { Sponsor } from './schema';

/** Returns a site setting value by key, or null if not set. */
export async function getSiteSetting(key: string): Promise<string | null> {
  try {
    const rows = await db.select().from(siteSettings).where(eq(siteSettings.key, key)).limit(1);
    return rows[0]?.value ?? null;
  } catch {
    return null;
  }
}

/** Returns true if ad placement preview mode is enabled. */
export async function isAdPreviewMode(): Promise<boolean> {
  const val = await getSiteSetting('ad_preview_mode');
  return val === 'true';
}

/** Returns the active sponsor for a given placement, respecting date window. */
export async function getActiveSponsor(placement: 'sidebar' | 'homepage'): Promise<Sponsor | null> {
  const now = new Date();
  const rows = await db
    .select()
    .from(sponsors)
    .where(
      and(
        eq(sponsors.active, true),
        eq(sponsors.placement, placement),
        or(isNull(sponsors.startDate), lte(sponsors.startDate, now)),
        or(isNull(sponsors.endDate),   gte(sponsors.endDate, now)),
      )
    )
    .limit(1);
  return rows[0] ?? null;
}

/** Returns the active module sponsor for a specific module slug. */
export async function getModuleSponsor(moduleSlug: string): Promise<Sponsor | null> {
  const now = new Date();
  const rows = await db
    .select()
    .from(sponsors)
    .where(
      and(
        eq(sponsors.active, true),
        eq(sponsors.placement, 'module'),
        eq(sponsors.moduleSlug, moduleSlug),
        or(isNull(sponsors.startDate), lte(sponsors.startDate, now)),
        or(isNull(sponsors.endDate),   gte(sponsors.endDate, now)),
      )
    )
    .limit(1);
  return rows[0] ?? null;
}
