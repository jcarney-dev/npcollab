# NPCollab

**Australian Nurse Practitioner Resource Hub**  
Free, collaborative clinical learning resource for Australian NPs and NP students.

## Live Site
[npcollab.com](https://npcollab.com)

## Tech Stack
- [Next.js 15](https://nextjs.org) (App Router, TypeScript)
- Tailwind CSS + CSS custom properties
- [Neon](https://neon.tech) (Postgres) via [Drizzle ORM](https://orm.drizzle.team)
- [Resend](https://resend.com) for transactional email
- [Vercel](https://vercel.com) for hosting
- HTTP-only cookie auth (access codes + admin password)

## Project Structure
```
app/
  (main)/          # Protected routes (require access cookie)
  (public)/        # Public routes (request-access, enter-access)
  admin/           # Admin panel
  api/             # API routes
components/        # Shared React components
content/modules/   # Quiz JSON files per module
drizzle/           # Database migrations
lib/               # Database, auth, email, schema utilities
public/            # Static assets
```

## Development Workflow
- All development work is done on the `dev` branch
- To deploy to production, run: `bash deploy.sh`
- This merges dev into main and triggers a single Vercel deployment
- Never push directly to main

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

Copy `.env.example` to `.env.local` and fill in your values before starting.

## Database Migrations
Migrations live in `drizzle/`. Run each against your Neon database via the Neon SQL editor or `drizzle-kit push`.

## Disclaimer
All content is for educational purposes only. Always apply your own clinical judgement.
