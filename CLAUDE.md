# SoulScity Official Website

Marketing site for **SoulScity Learning Co., Ltd.** (บริษัท โซล-ไซ-ตี้ เลิร์นนิ่ง จำกัด) — a Thai
learning-design company running camps, workshops, and facilitation programmes for schools,
universities, and companies. Five pages, all in Thai: `/` `/about` `/services` `/work` `/contact`.

## Deploy chain

```
local → git push → github.com/soulscityth/officialwebsite (main) → Vercel auto-deploy → soulscity.vercel.app
```

There is no `vercel.json` or `.vercel/` — normal for zero-config Next.js. The GitHub link lives on
Vercel's side, so deploy settings and environment variables are changed at vercel.com, not in code.
`siteConfig.url` feeds the sitemap and OG metadata; a custom domain means updating that value too,
or SEO keeps pointing at `.vercel.app`.

**Two machines share this repo** (a Mac and a Windows PC). Always `git pull` before starting work.

## Stack

Next.js 14 App Router, JavaScript (**no TypeScript**) · React 18 · Tailwind 3 ·
`lucide-react` icons · `resend` for the contact form. Path alias `@/*` → repo root.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Content lives in data files, not in JSX

Almost all copy is centralised — edit these first, not the pages.

`lib/site.js` — `siteConfig`: company names, tagline, description, email, phone contacts,
social handles, service area, nav items, canonical `url`.

`lib/data.js` — `domains`, `signatureCamp`, `formatTypes`, `expertiseTags`, `process`, `values`,
`team`, `stats`, `partners`, `portfolio`.

**Portfolio entries.** `portfolio` is `portfolioRaw` sorted newest-first by `sortDate`:

```js
{
  category: "camp",            // camp | workshop | misc
  images: ["/work/01-1.jpg", "/work/01-2.jpg", "/work/01-3.jpg"],
  sortDate: "2024-06-10",      // ISO, sorting only, never displayed
  levels: ["มัธยม"],
  title: "...",
  date: "10-12 มิ.ย. 2567",    // Thai display string, พ.ศ. years
  duration: "3 วัน",
  participants: "170 คน",
  topics: ["..."],
  partner: "...",
}
```

**Partners.** `{ name, logo }`, logo pointing into `public/partners/`. Logos are normalised on
import: transparent/white padding trimmed, fit within 512px, saved as optimised transparent PNG.

**Team.** An optional `image` field renders a circular photo on the About card; members without one
fall back to a gradient letter avatar. Photos go in `public/team/`, square, e.g. `/team/palm.jpg`.

**Photo naming.** `public/work/NN-M.jpg` — `NN` is the entry number, `M` the image index within that
entry. **Gaps in `M` are intentional**: stray partner-logo images were removed from photo sets in an
earlier commit. Do not renumber to "fix" them.

## Components

| File | Notes |
|---|---|
| `PortfolioCard.js` | Client. Per-card image carousel: prev/next, dot indicators, touch swipe, crossfade via stacked absolute images |
| `PortfolioGrid.js` | Client. Category filter tabs with counts |
| `PartnerMarquee.js` | **Server** component. Two rows scrolling in opposite directions, infinite |
| `Navbar.js` | Client. Sticky, scroll state, mobile menu |
| `ContactForm.js` | Client. Posts to `/api/contact` |
| `Footer.js` | Server |

### PartnerMarquee — do not refactor to `gap`

The track renders the logo list **twice** and animates `translateX(0 → -50%)`, reversed for row two.
For `-50%` to land exactly on the duplicate, spacing must be `mr-4` on each **card**, not a flex
`gap` on the track. With a gap, half the track is one copy plus `gap/2`, so the loop visibly jumps
every cycle. This was hit, fixed, and verified (`trackWidth/2 - copyWidth === 0` for both rows).
Keyframes `marqueeLeft` / `marqueeRight` live in `tailwind.config.js`. Honors `motion-reduce`.

## Design system

`tailwind.config.js` + `app/globals.css`. Reuse the component classes rather than re-deriving
utility stacks: `container-page`, `section`, `btn-primary`, `btn-secondary`, `btn-ghost-light`,
`eyebrow`, `card`, `input-field`.

- Brand palette is teal, `brand-50` → `brand-950`; `brand-600` (#0f6265) is the primary action colour.
- Page heroes share one recipe: `bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950` with a
  `bg-hero-grid` overlay at `opacity-20`.
- Thai display headings use `font-display` (Mitr) with `!leading-snug tracking-wide` — Thai
  ascenders and descenders clip without it.

### Thai line breaking is a priority

Headings and subtitles must not strand a short fragment on the last line. Preferred fixes, in order:

1. `text-balance` for short centred subtitles, `text-pretty` for longer prose
2. Widen the max-width
3. An explicit `<br />` only where a specific break is required (the About `h1`)
4. Shrinking font size only as a last resort — this hurts readability and has been pushed back on

**Measure, don't eyeball.** Line-break work is done by measuring real line-box widths in the browser
with the Range API, not by guessing.

Known and deliberately left alone: widows inside fixed-width cards (service descriptions, partner
names, team credentials). Those are 320–350px grid columns that cannot be widened, and fixing them
would mean rewriting copy — the user's call, not a silent edit.

## Conventions

- All user-facing copy is **Thai**; keep the tone warm and professional. Code identifiers stay English.
- Server Components by default. Add `"use client"` only where state or effects are needed.
- Every page exports `metadata`; the title template in `app/layout.js` appends `| SoulScity`.

## Gotchas that have cost real time

- **Never run `next build` while the dev server is running.** It overwrites `.next` and the dev
  server then serves broken CSS — Tailwind utilities silently stop applying. The symptom looks like
  "my classes don't work". Fix: stop dev, `rm -rf .next`, restart. Stop dev before any build.
- **`next/image` lazy-loads.** An off-screen image reporting `naturalWidth === 0` is normal, not
  broken. Scroll it into view before asserting anything about load state.
- **Stale webpack cache.** Editing an import and its usage in separate steps can produce
  "X is not defined" when the code is already correct. Clear `.next` rather than debugging the code.

## Environment

Copy `.env.example` → `.env.local` (it is correctly not in the repo).

- `RESEND_API_KEY` — required for the contact form; get it from resend.com or Vercel →
  Settings → Environment Variables. Without it the site runs fine, only mail sending fails.
- `CONTACT_EMAIL` — optional recipient override; defaults to `siteConfig.email`.

The Resend `from:` is still the shared sandbox `onboarding@resend.dev`. Moving to a verified
SoulScity domain is the outstanding improvement.

## Working agreement

- **Never push unprompted.** Make the change, verify it, summarise, then stop. The user says when to push.
- **Verify before claiming done** — run the dev server, drive the real browser, measure, screenshot.
  Concrete numbers are valued over assurances.
- **Flag concerns instead of silently complying.** Do not rubber-stamp.
- **No scope creep.** Do what was asked; mention adjacent issues rather than fixing them unasked.
- A short **หมายเหตุ** section at the end of a summary — caveats, what was deliberately not done and
  why — is welcome.
