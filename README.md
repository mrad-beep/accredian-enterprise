# Accredian Enterprise — Partial Clone

A partial, original recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built for the **Full Stack Developer Intern** assignment.

This is **not** a copy-paste of the live site. It's an original visual identity and original copy, built around the same domain (B2B corporate upskilling with academic partners) and the same general page sections (hero, trust bar, programs, process, outcomes/analytics, testimonials, lead form, footer).

> **Live demo:** _add your Vercel URL here after deploying_
> **Repo:** _add your GitHub URL here after pushing_

---

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Next.js Route Handlers** (`app/api/leads/route.ts`) as a mock API for the lead capture form — no external backend required
- Functional components + hooks only (`useState`), no class components

## Design approach

Rather than reuse Accredian's literal colors/copy, the clone leans into what the *business itself* is about — academic accreditation for enterprise teams — and turns that into the visual language:

- **Palette:** warm paper background (`#FAF8F4`), near-black ink (`#0E1424`), and a brass/gold accent (`#B08D57`) that reads like a university seal rather than a generic SaaS gradient.
- **Type:** a serif display face (system serif stack, italic for emphasis) paired with a clean sans body face and a monospace utility face for labels/stats — evoking a transcript or letterhead.
- **Signature element:** the "cohort transcript" card in the hero and the ledger-style "How it works" list (`Diagnose → Design → Deploy → Document`) — both borrow the visual grammar of an academic transcript/syllabus instead of generic numbered steps, which fits a company whose whole pitch is academic rigor.

## Project structure

```
app/
  layout.tsx        Root layout, metadata, global font stacks
  page.tsx           Composes all landing page sections
  globals.css        Tailwind entry + a few global tokens
  api/leads/route.ts Mock API route (POST to capture a lead, GET to list them)
components/
  Navbar.tsx         Sticky nav with mobile menu
  Hero.tsx           Hero + stats bar
  PartnerStrip.tsx   Academic-partner trust bar
  Programs.tsx       Reusable ProgramCard grid
  HowItWorks.tsx     Ledger-style process section
  Outcomes.tsx       Analytics / reporting section with progress bars
  Testimonials.tsx   Client quote cards
  Contact.tsx         Wraps LeadForm with section copy
  LeadForm.tsx       Client component; POSTs to /api/leads
  Footer.tsx         Footer with link columns
```

Every section is its own component so the page (`app/page.tsx`) reads as a simple composition, and pieces like `ProgramCard` are written to be reused for any similar data-driven grid.

## Setup instructions

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build (used before deploying)
npm run build
npm start
```

No environment variables are required — the lead form posts to an in-memory mock API route included in the project.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Deploy — Vercel builds `app/` and serves `/api/leads` as a serverless function automatically.

## AI usage disclosure

I used Claude during development. Specifically:

- **Where AI helped:**
  - Researching the general structure/purpose of the reference site (sections a corporate-training landing page typically has: hero, trust bar, program grid, process, analytics/outcomes, testimonials, lead form, footer) without copying its exact text or design.
  - Scaffolding the Next.js App Router project (config files, folder structure, Tailwind setup).
  - Drafting the first pass of each component (JSX structure, Tailwind classes, the mock `/api/leads` route handler).
  - Proposing an original design direction (palette, type pairing, the "transcript/ledger" motif) instead of copying Accredian's actual look.

- **What I modified/reviewed manually:**
  - _(Fill this in with what you actually changed once you've reviewed the code — e.g. adjusted copy, tuned spacing/colors, added/removed sections, changed the program list to match programs you want to highlight, tested on your own devices, fixed any issues found while customizing it.)_

Be honest and specific here — the assignment is explicitly evaluating how you used AI, not whether you used it.

## Improvements with more time

- Replace the in-memory mock store in `/api/leads` with a real database (e.g. Postgres via Vercel Postgres, or Supabase) and add email notifications on submission.
- Add real scroll-reveal micro-animations (respecting `prefers-reduced-motion`, already stubbed in `globals.css`).
- Add an `/api/programs` route and fetch program data at build time (`fetch` + `generateStaticParams`) instead of hard-coding it in `Programs.tsx`, so content is editable without a redeploy.
- Add basic analytics (e.g. Vercel Analytics) and form-spam protection (honeypot field or rate limiting) on the lead endpoint.
- Add unit tests for the API route and component-level tests (React Testing Library) for the lead form's validation states.
- Accessibility pass with a screen reader and an automated audit (axe/Lighthouse) beyond the manual keyboard-focus check already in place.

## Disclaimer

This project is an educational recreation built for a hiring assignment. It is not affiliated with, endorsed by, or a copy of Accredian. Testimonials are illustrative and not attributed to real, named companies.
