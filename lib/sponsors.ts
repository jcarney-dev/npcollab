import { db } from './db';
import { sponsors } from './schema';
import { and, eq, or, isNull, lte, gte } from 'drizzle-orm';
import type { Sponsor } from './schema';

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
