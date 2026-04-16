-- Migration: 0010_dedup_module_contributors
-- Remove duplicate contributor rows (keep the earliest created_at per module_slug + name pair)
-- Then add a unique constraint to prevent future duplicates

DELETE FROM "module_contributors"
WHERE "id" NOT IN (
  SELECT MIN("id"::text)::uuid
  FROM "module_contributors"
  GROUP BY "module_slug", "name"
);

ALTER TABLE "module_contributors"
  ADD CONSTRAINT "module_contributors_module_slug_name_unique"
  UNIQUE ("module_slug", "name");
