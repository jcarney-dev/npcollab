CREATE TABLE IF NOT EXISTS "sponsors" (
  "id"            uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "company_name"  text NOT NULL,
  "contact_name"  text NOT NULL,
  "contact_email" text NOT NULL,
  "logo_url"      text,
  "website_url"   text NOT NULL DEFAULT '',
  "placement"     text NOT NULL DEFAULT 'sidebar',
  "module_slug"   text,
  "message"       text,
  "active"        boolean NOT NULL DEFAULT false,
  "start_date"    timestamp,
  "end_date"      timestamp,
  "created_at"    timestamp NOT NULL DEFAULT now()
);
