CREATE TABLE IF NOT EXISTS "page_views" (
  "id"         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id"    UUID NOT NULL REFERENCES "users_v2"("id"),
  "session_id" TEXT NOT NULL,
  "path"       TEXT NOT NULL,
  "duration"   INTEGER NOT NULL DEFAULT 0,
  "viewed_at"  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "page_views_user_id_idx"   ON "page_views"("user_id");
CREATE INDEX IF NOT EXISTS "page_views_session_idx"   ON "page_views"("session_id");
CREATE INDEX IF NOT EXISTS "page_views_viewed_at_idx" ON "page_views"("viewed_at");
CREATE INDEX IF NOT EXISTS "page_views_path_idx"      ON "page_views"("path");
