import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  integer,
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
