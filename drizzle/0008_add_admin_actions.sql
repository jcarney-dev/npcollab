-- Migration: 0008_add_admin_actions
-- One-time approval/rejection tokens embedded in admin notification emails

CREATE TABLE IF NOT EXISTS "admin_actions" (
  "id"         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "action"     text NOT NULL,
  "user_id"    uuid NOT NULL,
  "token"      text NOT NULL UNIQUE,
  "used"       boolean NOT NULL DEFAULT false,
  "expires_at" timestamp NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "admin_actions_token_idx" ON "admin_actions" ("token");
CREATE INDEX IF NOT EXISTS "admin_actions_user_id_idx" ON "admin_actions" ("user_id");
