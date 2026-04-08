CREATE TABLE IF NOT EXISTS podcast_broadcasts (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject          TEXT NOT NULL,
  body             TEXT NOT NULL,
  recipient_count  INTEGER NOT NULL DEFAULT 0,
  sent_at          TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS news_items (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title        TEXT NOT NULL,
  summary      TEXT NOT NULL,
  url          TEXT,
  type         TEXT NOT NULL DEFAULT 'article',
  source_name  TEXT NOT NULL DEFAULT '',
  status       TEXT NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP,
  created_at   TIMESTAMP NOT NULL DEFAULT NOW()
);
