-- Migration 0004: Add job_listings and site_settings tables

CREATE TABLE IF NOT EXISTS "job_listings" (
  "id"               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "employer_name"    TEXT NOT NULL,
  "contact_email"    TEXT NOT NULL,
  "job_title"        TEXT NOT NULL,
  "location"         TEXT NOT NULL,
  "employment_type"  TEXT NOT NULL DEFAULT 'full-time',
  "specialty"        TEXT NOT NULL DEFAULT '',
  "description"      TEXT NOT NULL,
  "salary_range"     TEXT,
  "application_url"  TEXT NOT NULL,
  "status"           TEXT NOT NULL DEFAULT 'pending',
  "payment_status"   TEXT NOT NULL DEFAULT 'unpaid',
  "stripe_session_id" TEXT,
  "expires_at"       TIMESTAMP,
  "created_at"       TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "site_settings" (
  "id"         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "key"        TEXT NOT NULL UNIQUE,
  "value"      TEXT NOT NULL DEFAULT '',
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);
