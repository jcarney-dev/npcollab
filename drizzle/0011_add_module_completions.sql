-- Migration: add module_completions table for CPD tracking
CREATE TABLE IF NOT EXISTS "module_completions" (
  "id"                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id"               UUID NOT NULL REFERENCES "users_v2"("id"),
  "module_slug"           TEXT NOT NULL,
  "module_name"           TEXT NOT NULL,
  "quiz_score"            INTEGER NOT NULL,
  "passed"                BOOLEAN NOT NULL,
  "completed_at"          TIMESTAMP NOT NULL DEFAULT NOW(),
  "cpd_hours"             NUMERIC(4,2) NOT NULL DEFAULT 1.00,
  "certificate_generated" BOOLEAN NOT NULL DEFAULT FALSE,
  "certificate_url"       TEXT
);

-- Index for fast per-user lookups
CREATE INDEX IF NOT EXISTS "module_completions_user_id_idx"
  ON "module_completions"("user_id");

-- Index for deduplication checks (user + slug)
CREATE INDEX IF NOT EXISTS "module_completions_user_slug_idx"
  ON "module_completions"("user_i