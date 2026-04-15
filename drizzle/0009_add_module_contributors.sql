-- Migration: 0009_add_module_contributors
-- Stores contributors (authors) for clinical module overview pages

CREATE TABLE IF NOT EXISTS "module_contributors" (
  "id"                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "module_slug"       text NOT NULL,
  "name"              text NOT NULL,
  "title"             text NOT NULL,
  "credentials"       text,
  "bio"               text,
  "avatar_initials"   text NOT NULL,
  "display_order"     integer NOT NULL DEFAULT 0,
  "created_at"        timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "module_contributors_module_slug_idx" ON "module_contributors" ("module_slug");
