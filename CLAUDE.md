# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start local dev server
npm run build        # Production build (TypeScript checked)
npm run db:generate  # Generate Drizzle migration files from schema changes
npm run db:push      # Push schema directly to Neon (dev/staging only — no migration file)
npm run db:studio    # Open Drizzle Studio to browse the database
npx tsx scripts/seed-admin.ts    # Seed/promote jason.carney@gmail.com to admin role
node scripts/test-connection.mjs # Test Neon DB connectivity
```

Deployment: `bash deploy.sh` merges `dev` → `main` and triggers Vercel auto-deploy. Never push directly to `main`.

## Architecture

### Route Groups

- `app/(main)/` — All authenticated routes. Auth + approval enforced in `app/(main)/layout.tsx` via `getSession()`. Redirects to `/login` if session is missing or user is not `approved && active`.
- `app/(public)/` — Unauthenticated routes: `/login`, `/auth/verify`, `/request-access`, and mentor-review token pages.
- `app/admin/` — Admin-only panel. Protected by `requireAdmin()` in `lib/session.ts`, which checks JWT `role === 'admin'` or legacy `npcollab_admin` cookie.
- `app/api/` — All API routes. Consistent pattern: `try/catch` wrapping DB calls, `logError('[route-name]', err)` in catch blocks, `NextResponse.json({ error }, { status })` responses.

### Auth Flow

Passwordless magic-link. `/api/auth/request-login` generates a 32-hex token (15min TTL) stored in `magic_links`. On `/api/auth/verify`: token validated, JWT HS256 session created (7-day), set as `npcollab_session` httpOnly cookie. Users must be `approved: true && active: true` to receive a login link. `request-login` always returns the same message to prevent email enumeration.

### Database

Neon serverless PostgreSQL. Runtime uses `@neondatabase/serverless` HTTP driver (`lib/db.ts`). `drizzle-kit` CLI uses TCP `pg` driver for migrations. Schema in `lib/schema.ts` — 21 tables. Key tables: `users_v2` (main user table), `magic_links`, `stream_access_grants`, `portfolio_entries`, `mentor_review_tokens`, `page_views`, `site_settings`, `error_logs`.

After any schema change: run `npm run db:push` to sync with Neon.

### Feature Gating

`site_settings` table acts as a key-value feature flag store. `getSiteSetting(key)` is in `lib/sponsors.ts`. Module locks: `module_lock_{slug}`. Stream locks: `stream_lock_{streamSlug}`. Admin toggles these via AdminDashboard → Settings.

### Streams Feature

Clinical learning streams (currently: emergency). Access gated by `canAccessStream(userId, streamSlug)` in `lib/streams.ts`, which checks `stream_access_grants` when the stream is locked. Procedures support Mini-CEX and DOPS assessment forms; submissions stored in `portfolio_entries`. Mentors review via email token links (`mentor_review_tokens`).

### Error Logging

Use `logError(route, err)` from `lib/logger.ts` in all API route catch blocks instead of bare `console.error`. It writes to both the console and the `error_logs` DB table. The last 50 errors are visible in AdminDashboard → Error Logs. The health endpoint is at `/api/health`.

### Email

All emails via Resend (`lib/email.ts`). 5 functions: `sendRequestNotification`, `sendApprovalEmail`, `sendMentoringIntroduction`, `sendContactEmail`, `sendMentorReviewEmail`. From address: `RESEND_FROM_EMAIL` env var.

### Analytics

First-party only. `PageTracker` component (in `app/(main)/layout.tsx`) sends `sendBeacon` payloads to `/api/track/pageview` on visibility change/unload. Tracks: sessionId, path, referrer, scrollDepth, duration, deviceType, browser. Umami analytics script is also injected in root layout.

## Environment Variables

See `.env.example`. Required: `DATABASE_URL`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ACCESS_COOKIE_SECRET`, `NEXT_PUBLIC_SITE_URL`.
