-- Add courses table for CPD and education listings
CREATE TABLE IF NOT EXISTS courses (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_name      TEXT NOT NULL,
  provider_name    TEXT NOT NULL,
  provider_email   TEXT,
  course_type      TEXT NOT NULL DEFAULT 'other',
  specialty        TEXT NOT NULL DEFAULT '',
  description      TEXT NOT NULL,
  date_start       TIMESTAMP NOT NULL,
  date_end         TIMESTAMP,
  location         TEXT NOT NULL,
  cost             TEXT,
  cpd_hours        TEXT,
  registration_url TEXT NOT NULL,
  source           TEXT,
  status           TEXT NOT NULL DEFAULT 'draft',
  payment_status   TEXT NOT NULL DEFAULT 'manual',
  posted_at        TIMESTAMP,
  created_at       TIMESTAMP NOT NULL DEFAULT NOW()
);
