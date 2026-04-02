# NPCollab

**Australian Nurse Practitioner Resource Hub**
Free, collaborative clinical learning resource for Australian NPs and NP students.

## Live Site
[npcollab.com](https://npcollab.com)

## Tech Stack
- [Astro](https://astro.build) — static site generator
- Vanilla CSS with CSS custom properties
- Plain JavaScript (no framework)
- Content in `.json` and `.astro` files

## Project Structure
```
src/
  pages/
    index.astro              # Home
    scope/index.astro        # Scope of Practice
    assessment/index.astro   # Patient Assessment
    modules/
      eyes/                  # Eyes module (5 pages)
      ent/                   # ENT module (5 pages)
    about/index.astro
    support/index.astro
    analytics/index.astro
  layouts/
    BaseLayout.astro         # Main shell (sidebar, topbar, footer)
    ModuleLayout.astro       # Module tab interface
  components/
    SoapNote.astro           # Reusable SOAP accordion
    Quiz.astro               # Interactive quiz component
  content/
    modules/
      eyes/quiz.json         # Eyes quiz questions — edit here
      ent/quiz.json          # ENT quiz questions — edit here
  styles/
    global.css               # Design system
.github/workflows/
  deploy.yml                 # FTP deploy to cPanel (manual trigger)
```

## Adding a New Clinical Module

1. Create `src/pages/modules/MODULENAME/` with these files:
   - `index.astro` (overview)
   - `assessment/index.astro`
   - `soap/index.astro`
   - `resources/index.astro`
   - `quiz/index.astro`
2. Create `src/content/modules/MODULENAME/quiz.json` with 20 questions
3. Add the module to the nav in `src/layouts/BaseLayout.astro`
4. Add a card to the home page in `src/pages/index.astro`

## Editing Content
All quiz content is in the `.json` files in `src/content/modules/`.
Page content is in the `.astro` files in `src/pages/`.
Edit directly in GitHub using the pencil icon or press `.` to open GitHub Dev.

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:4321/npcollab/
```

## Deployment
See `.github/workflows/deploy.yml`.
Add FTP credentials as GitHub Secrets, then trigger manually or enable auto-deploy on push.

## Disclaimer
All content is for educational purposes only. Always apply your own clinical judgement.
