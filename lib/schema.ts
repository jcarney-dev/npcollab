import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  integer,
  unique,
  numeric,
  serial,
  jsonb,
} from 'drizzle-orm/pg-core';

// access_requests
export const accessRequests = pgTable('access_requests', {
  id:        uuid('id').primaryKey().defaultRandom(),
  name:      text('name').notNull(),
  email:     text('email').notNull(),
  role:      text('role').notNull(),
  reason:    text('reason').notNull(),
  status:    text('status').notNull().default('pending'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// users
export const users = pgTable('users', {
  id:          uuid('id').primaryKey().defaultRandom(),
  name:        text('name').notNull(),
  email:       text('email').notNull(),
  role:        text('role').notNull(),
  accessCode:  text('access_code').notNull().unique(),
  active:      boolean('active').notNull().default(true),
  approvedAt:  timestamp('approved_at').notNull().defaultNow(),
  requestId:   uuid('request_id')
               .notNull()
               .references(() => accessRequests.id),
});

// sponsors
export const sponsors = pgTable('sponsors', {
  id:           uuid('id').primaryKey().defaultRandom(),
  companyName:  text('company_name').notNull(),
  contactName:  text('contact_name').notNull(),
  contactEmail: text('contact_email').notNull(),
  logoUrl:      text('logo_url'),
  websiteUrl:   text('website_url').notNull().default(''),
  placement:    text('placement').notNull().default('sidebar'),
  moduleSlug:   text('module_slug'),
  message:      text('message'),
  active:       boolean('active').notNull().default(false),
  startDate:    timestamp('start_date'),
  endDate:      timestamp('end_date'),
  createdAt:    timestamp('created_at').notNull().defaultNow(),
});

// podcast_subscribers
export const podcastSubscribers = pgTable('podcast_subscribers', {
  id:        uuid('id').primaryKey().defaultRandom(),
  email:     text('email').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// podcast_broadcasts
export const podcastBroadcasts = pgTable('podcast_broadcasts', {
  id:             uuid('id').primaryKey().defaultRandom(),
  subject:        text('subject').notNull(),
  body:           text('body').notNull(),
  recipientCount: integer('recipient_count').notNull().default(0),
  sentAt:         timestamp('sent_at').notNull().defaultNow(),
});

// news_items
export const newsItems = pgTable('news_items', {
  id:          uuid('id').primaryKey().defaultRandom(),
  title:       text('title').notNull(),
  summary:     text('summary').notNull(),
  url:         text('url'),
  type:        text('type').notNull().default('article'),
  sourceName:  text('source_name').notNull().default(''),
  status:      text('status').notNull().default('draft'),
  publishedAt: timestamp('published_at'),
  createdAt:   timestamp('created_at').notNull().defaultNow(),
});

// job_listings
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
  status:          text('status').notNull().default('pending'),
  paymentStatus:   text('payment_status').notNull().default('unpaid'),
  stripeSessionId: text('stripe_session_id'),
  postedAt:        timestamp('posted_at'),
  expiresAt:       timestamp('expires_at'),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
});

// courses
export const courses = pgTable('courses', {
  id:              uuid('id').primaryKey().defaultRandom(),
  courseName:      text('course_name').notNull(),
  providerName:    text('provider_name').notNull(),
  providerEmail:   text('provider_email'),
  courseType:      text('course_type').notNull().default('other'),
  specialty:       text('specialty').notNull().default(''),
  description:     text('description').notNull(),
  dateStart:       timestamp('date_start').notNull(),
  dateEnd:         timestamp('date_end'),
  location:        text('location').notNull(),
  cost:            text('cost'),
  cpdHours:        text('cpd_hours'),
  registrationUrl: text('registration_url').notNull(),
  source:          text('source'),
  status:          text('status').notNull().default('draft'),
  paymentStatus:   text('payment_status').notNull().default('manual'),
  postedAt:        timestamp('posted_at'),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
});

// users_v2
export const usersV2 = pgTable('users_v2', {
  id:              uuid('id').primaryKey().defaultRandom(),
  name:            text('name').notNull(),
  email:           text('email').notNull().unique(),
  state:           text('state').notNull().default(''),
  npEndorsement:   text('np_endorsement').notNull().default(''),
  employer:        text('employer'),
  specialtyArea:   text('specialty_area'),
  currentRole:     text('current_role'),
  bio:             text('bio'),
  role:            text('role').notNull().default('user'),
  active:          boolean('active').notNull().default(true),
  approved:        boolean('approved').notNull().default(false),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
  lastLogin:       timestamp('last_login'),
  profileComplete: boolean('profile_complete').notNull().default(false),
});

// magic_links
export const magicLinks = pgTable('magic_links', {
  id:        uuid('id').primaryKey().defaultRandom(),
  email:     text('email').notNull(),
  token:     text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  used:      boolean('used').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// admin_actions
export const adminActions = pgTable('admin_actions', {
  id:        uuid('id').primaryKey().defaultRandom(),
  action:    text('action').notNull(),
  userId:    uuid('user_id').notNull(),
  token:     text('token').notNull().unique(),
  used:      boolean('used').notNull().default(false),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// site_settings
export const siteSettings = pgTable('site_settings', {
  id:        uuid('id').primaryKey().defaultRandom(),
  key:       text('key').notNull().unique(),
  value:     text('value').notNull().default(''),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// module_contributors
export const moduleContributors = pgTable('module_contributors', {
  id:             uuid('id').primaryKey().defaultRandom(),
  moduleSlug:     text('module_slug').notNull(),
  name:           text('name').notNull(),
  title:          text('title').notNull(),
  credentials:    text('credentials'),
  bio:            text('bio'),
  avatarInitials: text('avatar_initials').notNull(),
  displayOrder:   integer('display_order').notNull().default(0),
  createdAt:      timestamp('created_at').notNull().defaultNow(),
}, (t) => [
  unique('module_contributors_module_slug_name_unique').on(t.moduleSlug, t.name),
]);

// module_completions
export const moduleCompletions = pgTable('module_completions', {
  id:                   uuid('id').primaryKey().defaultRandom(),
  userId:               uuid('user_id').notNull().references(() => usersV2.id),
  moduleSlug:           text('module_slug').notNull(),
  moduleName:           text('module_name').notNull(),
  quizScore:            integer('quiz_score').notNull(),
  passed:               boolean('passed').notNull(),
  completedAt:          timestamp('completed_at').notNull().defaultNow(),
  cpdHours:             numeric('cpd_hours', { precision: 4, scale: 2 }).notNull().default('1.00'),
  certificateGenerated: boolean('certificate_generated').notNull().default(false),
  certificateUrl:       text('certificate_url'),
});

// mentors
export const mentors = pgTable('mentors', {
  id:            serial('id').primaryKey(),
  userId:        uuid('user_id').notNull().references(() => usersV2.id).unique(),
  name:          text('name').notNull(),
  credentials:   text('credentials').notNull().default(''),
  specialtyArea: text('specialty_area').notNull().default(''),
  state:         text('state').notNull().default(''),
  currentRole:   text('current_role').notNull().default(''),
  employer:      text('employer').notNull().default(''),
  bio:           text('bio').notNull().default(''),
  mode:          text('mode').notNull().default(''),
  maxMentees:    integer('max_mentees').notNull().default(3),
  active:        boolean('active').notNull().default(true),
  createdAt:     timestamp('created_at').notNull().defaultNow(),
  updatedAt:     timestamp('updated_at').notNull().defaultNow(),
});

// mentoring_requests
export const mentoringRequests = pgTable('mentoring_requests', {
  id:           serial('id').primaryKey(),
  mentorId:     integer('mentor_id').notNull().references(() => mentors.id),
  menteeUserId: uuid('mentee_user_id').notNull().references(() => usersV2.id),
  menteeName:   text('mentee_name').notNull(),
  menteeEmail:  text('mentee_email').notNull(),
  message:      text('message').notNull(),
  createdAt:    timestamp('created_at').notNull().defaultNow(),
});

// page_views
export const pageViews = pgTable('page_views', {
  id:          uuid('id').primaryKey().defaultRandom(),
  userId:      uuid('user_id').notNull().references(() => usersV2.id),
  sessionId:   text('session_id').notNull(),
  path:        text('path').notNull(),
  referrer:    text('referrer').notNull().default(''),
  duration:    integer('duration').notNull().default(0),
  scrollDepth: integer('scroll_depth').notNull().default(0),
  deviceType:  text('device_type').notNull().default(''),
  browser:     text('browser').notNull().default(''),
  viewedAt:    timestamp('viewed_at').notNull().defaultNow(),
});

// stream_access_grants
export const streamAccessGrants = pgTable('stream_access_grants', {
  id:         uuid('id').primaryKey().defaultRandom(),
  userId:     uuid('user_id').notNull().references(() => usersV2.id),
  streamSlug: text('stream_slug').notNull(),
  grantedBy:  uuid('granted_by').notNull(),
  grantedAt:  timestamp('granted_at').notNull().defaultNow(),
  revokedAt:  timestamp('revoked_at'),
}, (t) => [
  unique('stream_access_grants_user_stream_unique').on(t.userId, t.streamSlug),
]);

// portfolio_entries
export const portfolioEntries = pgTable('portfolio_entries', {
  id:             uuid('id').primaryKey().defaultRandom(),
  userId:         uuid('user_id').notNull().references(() => usersV2.id),
  formType:       text('form_type').notNull(),
  streamSlug:     text('stream_slug').notNull(),
  procedureSlug:  text('procedure_slug').notNull(),
  title:          text('title').notNull(),
  status:         text('status').notNull().default('draft'),
  traineeData:    jsonb('trainee_data').notNull().default({}),
  assessorData:   jsonb('assessor_data').notNull().default({}),
  mentorEmail:    text('mentor_email'),
  mentorName:     text('mentor_name'),
  mentorComments: text('mentor_comments'),
  mentorSignedAt: timestamp('mentor_signed_at'),
  createdAt:      timestamp('created_at').notNull().defaultNow(),
  updatedAt:      timestamp('updated_at').notNull().defaultNow(),
  submittedAt:    timestamp('submitted_at'),
});

// mentor_review_tokens
export const mentorReviewTokens = pgTable('mentor_review_tokens', {
  id:               uuid('id').primaryKey().defaultRandom(),
  portfolioEntryId: uuid('portfolio_entry_id').notNull().references(() => portfolioEntries.id),
  token:            text('token').notNull().unique(),
  mentorEmail:      text('mentor_email').notNull(),
  used:             boolean('used').notNull().default(false),
  expiresAt:        timestamp('expires_at').notNull(),
  createdAt:        timestamp('created_at').notNull().defaultNow(),
});

// procedure_logs
export const procedureLogs = pgTable('procedure_logs', {
  id:              uuid('id').primaryKey().defaultRandom(),
  userId:          uuid('user_id').notNull().references(() => usersV2.id),
  procedureName:   text('procedure_name').notNull(),
  category:        text('category').notNull().default('General'),
  performedAt:     timestamp('performed_at').notNull(),
  setting:         text('setting').notNull().default(''),
  supervisorName:  text('supervisor_name'),
  supervisorEmail: text('supervisor_email'),
  notes:           text('notes'),
  createdAt:       timestamp('created_at').notNull().defaultNow(),
});

// error_logs
export const errorLogs = pgTable('error_logs', {
  id:        serial('id').primaryKey(),
  route:     text('route').notNull(),
  message:   text('message').notNull(),
  stack:     text('stack'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Type exports
export type ProcedureLog    = typeof procedureLogs.$inferSelect;
export type NewProcedureLog = typeof procedureLogs.$inferInsert;
export type ErrorLog    = typeof errorLogs.$inferSelect;
export type NewErrorLog = typeof errorLogs.$inferInsert;

export type AccessRequest        = typeof accessRequests.$inferSelect;
export type NewAccessRequest     = typeof accessRequests.$inferInsert;
export type User                 = typeof users.$inferSelect;
export type NewUser              = typeof users.$inferInsert;
export type Sponsor              = typeof sponsors.$inferSelect;
export type NewSponsor           = typeof sponsors.$inferInsert;
export type PodcastSubscriber    = typeof podcastSubscribers.$inferSelect;
export type NewPodcastSubscriber = typeof podcastSubscribers.$inferInsert;
export type PodcastBroadcast     = typeof podcastBroadcasts.$inferSelect;
export type NewPodcastBroadcast  = typeof podcastBroadcasts.$inferInsert;
export type NewsItem             = typeof newsItems.$inferSelect;
export type NewNewsItem          = typeof newsItems.$inferInsert;
export type JobListing           = typeof jobListings.$inferSelect;
export type NewJobListing        = typeof jobListings.$inferInsert;
export type Course               = typeof courses.$inferSelect;
export type NewCourse            = typeof courses.$inferInsert;
export type UserV2               = typeof usersV2.$inferSelect;
export type NewUserV2            = typeof usersV2.$inferInsert;
export type MagicLink            = typeof magicLinks.$inferSelect;
export type NewMagicLink         = typeof magicLinks.$inferInsert;
export type AdminAction          = typeof adminActions.$inferSelect;
export type NewAdminAction       = typeof adminActions.$inferInsert;
export type SiteSetting          = typeof siteSettings.$inferSelect;
export type NewSiteSetting       = typeof siteSettings.$inferInsert;
export type ModuleContributor    = typeof moduleContributors.$inferSelect;
export type NewModuleContributor = typeof moduleContributors.$inferInsert;
export type ModuleCompletion     = typeof moduleCompletions.$inferSelect;
export type NewModuleCompletion  = typeof moduleCompletions.$inferInsert;
export type Mentor               = typeof mentors.$inferSelect;
export type NewMentor            = typeof mentors.$inferInsert;
export type MentoringRequest     = typeof mentoringRequests.$inferSelect;
export type NewMentoringRequest  = typeof mentoringRequests.$inferInsert;
export type PageView             = typeof pageViews.$inferSelect;
export type NewPageView          = typeof pageViews.$inferInsert;
export type StreamAccessGrant    = typeof streamAccessGrants.$inferSelect;
export type NewStreamAccessGrant = typeof streamAccessGrants.$inferInsert;
export type PortfolioEntry       = typeof portfolioEntries.$inferSelect;
export type NewPortfolioEntry    = typeof portfolioEntries.$inferInsert;
export type MentorReviewToken    = typeof mentorReviewTokens.$inferSelect;
export type NewMentorReviewToken = typeof mentorReviewTokens.$inferInsert;
