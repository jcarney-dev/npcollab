import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
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

// ── Type exports ───────────────────────────────────────────────────────────
export type AccessRequest         = typeof accessRequests.$inferSelect;
export type NewAccessRequest      = typeof accessRequests.$inferInsert;
export type User                  = typeof users.$inferSelect;
export type NewUser               = typeof users.$inferInsert;
