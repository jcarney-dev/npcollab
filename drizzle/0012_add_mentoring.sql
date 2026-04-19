-- Migration: add mentors and mentoring_requests tables for the Mentoring section

CREATE TABLE IF NOT EXISTS "mentors" (
  "id"             SERIAL PRIMARY KEY,
  "user_id"        UUID NOT NULL UNIQUE REFERENCES "users_v2"("id"),
  "name"           TEXT NOT NULL,
  "credentials"    TEXT NOT NULL DEFAULT '',
  "specialty_area" TEXT NOT NULL DEFAULT '',
  "state"          TEXT NOT NULL DEFAULT '',
  "current_role"   TEXT NOT NULL DEFAULT '',
  "employer"       TEXT NOT NULL DEFAULT '',
  "bio"            TEXT NOT NULL DEFAULT '',
  "mode"           TEXT NOT NULL DEFAULT '',
  "max_mentees"    INTEGER NOT NULL DEFAULT 3,
  "active"         BOOLEAN NOT NULL DEFAULT TRUE,
  "created_at"     TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at"     TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "mentoring_requests" (
  "id"              SERIAL PRIMARY KEY,
  "mentor_id"       INTEGER NOT NULL REFERENCES "mentors"("id"),
  "mentee_user_id"  UUID NOT NULL REFERENCES "users_v2"("id"),
  "mentee_name"     TEXT NOT NULL,
  "mentee_email"    TEXT NOT NULL,
  "message"         TEXT NOT NULL,
  "created_at"      TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Index for fast mentor lookups by user
CREATE INDEX IF NOT EXISTS "mentors_user_id_idx"
  ON "mentors"("user_id");

-- Index for active mentor directory queries
CREATE INDEX IF NOT EXISTS "mentors_active_idx"
  ON "mentors"("active");

-- Index for 30-day duplicate request guard
CREATE INDEX IF NOT EXISTS "mentoring_requests_mentor_mentee_idx"
  ON "mentoring_requests"("mentor_id", "mentee_user_id", "created_at");
