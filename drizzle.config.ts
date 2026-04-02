import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect:  'postgresql',
  schema:   './lib/schema.ts',
  out:      './drizzle',
  // Use 'pg' driver for drizzle-kit push/generate (requires TCP, not WebSocket)
  // The app runtime uses @neondatabase/serverless (see lib/db.ts)
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
