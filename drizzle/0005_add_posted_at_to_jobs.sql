-- Add posted_at timestamp to job_listings
-- Set for records that are already approved (use created_at as fallback)
ALTER TABLE job_listings ADD COLUMN IF NOT EXISTS posted_at TIMESTAMP;

-- Backfill: set posted_at = created_at for all existing approved listings
UPDATE job_listings SET posted_at = created_at WHERE status = 'approved' AND posted_at IS NULL;
