-- Migration: 0007_add_users_v2_and_magic_links
-- New user table for magic-link auth system + one-time login tokens

CREATE TABLE IF NOT EXISTS "users_v2" (
  "id"               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "name"             text NOT NULL,
  "email"            text NOT NULL UNIQUE,
  "state"            text NOT NULL DEFAULT '',
  "np_endorsement"   text NOT NULL DEFAULT '',
  "employer"         text,
  "specialty_area"   text,
  "current_role"     text,
  "role"             text NOT NULL DEFAULT 'user',
  "active"           boolean NOT NULL DEFAULT true,
  "approved"         boolean NOT NULL DEFAULT false,
  "created_at"       timestamp NOT NULL DEFAULT now(),
  "last_login"       timestamp,
  "profile_complete" boolean NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS "magic_links" (
  "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "email"      text NOT NULL,
  "token"      text NOT NULL UNIQUE,
  "expires_at" timestamp NOT NULL,
  "used"       boolean NOT NULL DEFAULT false,
  "created_at" timestamp NOT NULL DEFAULT now()
);

-- Index for fast token lookups
CREATE INDEX IF NOT EXISTS "magic_links_token_idx" ON "magic_links" ("token");

-- Index for cleanup queries (expired/used links)
CREATE INDEX IF NOT EXISTS "magic_links_email_idx" ON "magic_links" ("email");
