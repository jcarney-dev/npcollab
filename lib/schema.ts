import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  integer,
  unique,
  numeric,
} from 'drizzle-orm/pg-core';

// ── access_requests ────────────────────────────────────────────────────────
// Stores incoming access requests from prospective users (step 1 of the flow)
export const accessRequests = pgTable('access_requests', {
  id:        uuid('id').primaryKey().defaultRandom(),
  name:      text('name').notNull(),
  email:     text('email').notNull(),
  role:      text('role').notNull(),      // 'Endorsed NP' | 'TNP' | 'NP Student' | 'RN considering NP' | 'Other'
  reason:    text('reason').notNull(),
  status:    text('status').notNull().default('pending'), // 'pending' | 'approved' | 'denied'
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ── users ──────────────────────────────────────────────────────────────────
// Created when Jason approves an access request; holds the unique access code
export const users = pgTable('users', {
  id:          uuid('id').primaryKey().defaultRandom(),
  name:        text('name').notNull(),
  email:       text('email').notNull(),
  role:        text('role').notNull(),
  accessCode:  text('access_code').notNull().unique(), // format: NPC-YYYY-XXXX
  active:      boolean('active').notNull().default(true),
  approvedAt:  timestamp('approved_at').notNull().defaultNow(),
  requestId:   uuid('request_id')
               .notNull()
               .references(() => accessRequests.id),
});

// ── sponsors ───────────────────────────────────────────────────────────────
// Stores sponsor enquiries and active sponsors
export const sponsors = pgTable('sponsors', {
  id:           uuid('id').primaryKey().defaultRandom(),
  companyName:  text('company_name').notNull(),
  contactName:  text('contact_name').notNull(),
  contactEmail: text('contact_email').notNull(),
  logoUrl:      text('logo_url'),
  websiteUrl:   text('website_url').notNull().default(''),
  placement:    text('placement').notNull().default('sidebar'), // 'sidebar' | 'module' | 'homepage'
  moduleSlug:   text('module_slug'),                             // set when placement = 'module'
  message:      text('message'),                                 // original enquiry message
  active:       boolean('active').notNull().default(false),
  startDate:    timestamp('start_date'),
  endDate:      timestamp('end_date'),
  createdAt:    timestamp('created_at').notNull().defaultNow(),
});

// ── podcast_subscribers ────────────────────────────────────────────────────
// Stores email addresses of users who want to be notified when the podcast launches
export const podcastSubscribers = pgTable('podcast_subscribers', {
  id:        uuid('id').primaryKey().defaultRandom(),
  email:     text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ── podcast_broadcasts ─────────────────────────────────────────────────────
// Log of broadcast emails sent to all podcast subscribers
export const podcastBroadcasts = pgTable('podcast_broadcasts', {
  id:             uuid('id').primaryKey().defaultRandom(),
  subject:        text('subject').notNull(),
  body:           text('body').notNull(),
  recipientCount: integer('recipient_count').notNull().default(0),
  sentAt:         timestamp('sent_at').notNull().defaultNow(),
});

// ── news_items ─────────────────────────────────────────────────────────────
// Admin-managed news items for the Community > News section
export const newsItems = pgTable('news_items', {
  id:          uuid('id').primaryKey().defaultRandom(),
  title:       text('title').notNull(),
  summary:     text('summary').notNull(),
  url:         text('url'),                              // external link (optional)
  type:        text('type').notNull().default('article'), // 'article' | 'external' | 'announcement'
  sourceName:  text('source_name').notNull().default(''),
  status:      text('status').notNull().default('draft'), // 'draft' | 'published' | 'rejected'
  publishedAt: timestamp('published_at'),
  createdAt:   timestamp('created_at').notNull().defaultNow(),
});

// ── job_listings ───────────────────────────────────────────────────────────
// Job postings submitted by employers (Stripe-paid or manual/imported)
export const jobListings = pgTable('job_listings', {
  id:              uuid('id').primaryKey().defaultRandom(),
  employerName:    text('employer_name').notNull(),
  contactEmail:    text('contact_email').notNull(),
  jobTitle:        text('job_title').notNull(),
  location:        text('location').notNull(),
  employmentType:  text('employment_type').notNull().default('full-time'),
  specialty:       text('specialty').notNull().default(''),
  description:     text('description').notNull(),
  salaryRange:     text('salary_range'),
  applicationUrl:  text('application_url').notNull(),
  status:          text('status').notNull().default('pending'),        // 'pending' | 'pending_approval' | 'approved' | 'rejected' | 'draft'
  paymentStatus:   text('payment_status').notNull().default('unpaid'), // 'unpaid' | 'paid' | 'manual' | 'imported'
  stripeSessionId: text('stripe_session_id'),
  postedAt:        timestamp('posted_at'),
  expiresAt:       timestamp('expires_at'),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
});

// ── courses ────────────────────────────────────────────────────────────────
// CPD and education course listings
export const courses = pgTable('courses', {
  id:              uuid('id').primaryKey().defaultRandom(),
  courseName:      text('course_name').notNull(),
  providerName:    text('provider_name').notNull(),
  providerEmail:   text('provider_email'),
  courseType:      text('course_type').notNull().default('other'), // 'conference'|'workshop'|'online'|'webinar'|'simulation'|'other'
  specialty:       text('specialty').notNull().default(''),
  description:     text('description').notNull(),
  dateStart:       timestamp('date_start').notNull(),
  dateEnd:         timestamp('date_end'),
  location:        text('location').notNull(),
  cost:            text('cost'),
  cpdHours:        text('cpd_hours'),
  registrationUrl: text('registration_url').notNull(),
  source:          text('source'),
  status:          text('status').notNull().default('draft'),       // 'draft'|'approved'|'expired'
  paymentStatus:   text('payment_status').notNull().default('manual'), // 'manual'|'imported'|'paid'
  postedAt:        timestamp('posted_at'),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
});

// ── users_v2 ───────────────────────────────────────────────────────────────
// New user table for magic-link auth system (replaces access-code flow)
export const usersV2 = pgTable('users_v2', {
  id:              uuid('id').primaryKey().defaultRandom(),
  name:            text('name').notNull(),
  email:           text('email').notNull().unique(),
  state:           text('state').notNull().default(''),
  npEndorsement:   text('np_endorsement').notNull().default(''),
  employer:        text('employer'),
  specialtyArea:   text('specialty_area'),
  currentRole:     text('current_role'),
  role:            text('role').notNull().default('user'),      // 'user' | 'admin'
  active:          boolean('active').notNull().default(true),
  approved:        boolean('approved').notNull().default(false),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
  lastLogin:       timestamp('last_login'),
  profileComplete: boolean('profile_complete').notNull().default(false),
});

// ── magic_links ────────────────────────────────────────────────────────────
// One-time login tokens sent via email
export const magicLinks = pgTable('magic_links', {
  id:        uuid('id').primaryKey().defaultRandom(),
  email:     text('email').notNull(),
  token:     text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  used:      boolean('used').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ── admin_actions ──────────────────────────────────────────────────────────
// One-time tokens embedded in admin notification emails (approve/reject links)
export const adminActions = pgTable('admin_actions', {
  id:        uuid('id').primaryKey().defaultRandom(),
  action:    text('action').notNull(),        // 'approve' | 'reject'
  userId:    uuid('user_id').notNull(),        // references users_v2.id
  token:     text('token').notNull().unique(),
  used:      boolean('used').notNull().default(false),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ── site_settings ──────────────────────────────────────────────────────────
// Key/value store for admin-configurable site settings
export const siteSettings = pgTable('site_settings', {
  id:        uuid('id').primaryKey().defaultRandom(),
  key:       text('key').notNull().unique(),
  value:     text('value').notNull().default(''),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// ── module_contributors ────────────────────────────────────────────────────
// Stores contributors (authors) for clinical module overview pages
export const moduleContributors = pgTable('module_contributors', {
  id:              uuid('id').primaryKey().defaultRandom(),
  moduleSlug:      text('module_slug').notNull(),
  name:            text('name').notNull(),
  title:           text('title').notNull(),
  credentials:     text('credentials'),
  bio:             text('bio'),
  avatarInitials:  text('avatar_initials').notNull(),
  displayOrder:    integer('display_order').notNull().default(0),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
}, (t) => [
  unique('module_contributors_module_slug_name_unique').on(t.moduleSlug, t.name),
]);

// ── module_completions ─────────────────────────────────────────────────────
// CPD tracking — one record per quiz attempt where the user passed (>=80%)
export const moduleCompletions = pgTable('module_completions', {
  id:                   uuid('id').primaryKey().defaultRandom(),
  userId:               uuid('user_id').notNull().references(() => usersV2.id),
  moduleSlug:           text('module_slug').notNull(),   // e.g. 'cardiac', 'msk-back'
  moduleName:           text('module_name').notNull(),   // e.g. 'Cardiac', 'MSK — Back'
  quizScore:            integer('quiz_score').notNull(),  // percentage 0–100
  passed:               boolean('passed').notNull(),      // true if score >= 80
  completedAt:          timestamp('completed_at').notNull().defaultNow(),
  cpdHours:             numeric('cpd_hours', { precision: 4, scale: 2 }).notNull().default('1.00'),
  certificateGenerated: boolean('certificate_generated').notNull().default(false),
  certificateUrl:       text('certificate_url'),
});

// ── Type exports ───────────────────────────────────────────────────────────
export type AccessRequest         = typeof accessRequests.$inferSelect;
export type NewAccessRequest      = typeof accessRequests.$inferInsert;
export type User                  = typeof users.$inferSelect;
export type NewUser               = typeof users.$inferInsert;
export type Sponsor               = typeof sponsors.$inferSelect;
export type NewSponsor            = typeof sponsors.$inferInsert;
export type PodcastSubscriber     = typeof podcastSubscribers.$inferSelect;
export type NewPodcastSubscriber  = typeof podcastSubscribers.$inferInsert;
export type PodcastBroadcast      = typeof podcastBroadcasts.$inferSelect;
export type NewPodcastBroadcast   = typeof podcastBroadcasts.$inferInsert;
export type NewsItem              = typeof newsItems.$inferSelect;
export type NewNewsItem           = typeof newsItems.$inferInsert;
export type JobListing            = typeof jobListings.$inferSelect;
export type NewJobListing         = typeof jobListings.$inferInsert;
export type Course                = typeof courses.$inferSelect;
export type NewCourse             = typeof courses.$inferInsert;
export type UserV2                = typeof usersV2.$inferSelect;
export type NewUserV2             = typeof usersV2.$inferInsert;
export type MagicLink             = typeof magicLinks.$inferSelect;
export type NewMagicLink          = typeof magicLinks.$inferInsert;
export type AdminAction           = typeof adminActions.$inferSelect;
export type NewAdminAction        = typeof adminActions.$inferInsert;
export type SiteSetting           = typeof siteSettings.$inferSelect;
export type NewSiteSetting        = typeof siteSettings.$inferInsert;
export type ModuleContributor     = typeof moduleContributors.$inferSelect;
export type NewModuleContributor  = typeof moduleContributors.$inferInsert;
export type ModuleCompletion      = typeof moduleCompletions.$inferSelect;
export type NewModuleCompletion   = typeof moduleCompletions.$inferInsert;
