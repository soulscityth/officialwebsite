# SoulScity Official Website

Marketing site for **SoulScity Learning Co., Ltd.** (บริษัท โซล-ไซ-ตี้ เลิร์นนิ่ง จำกัด) — a Thai
learning-design company running camps, workshops, and facilitation programmes for schools,
universities, and companies. Five pages, all in Thai: `/` `/about` `/services` `/work` `/contact`.

## Deploy chain

```
local → git push → github.com/soulscityth/officialwebsite (main) → Vercel auto-deploy → soulscity.co.th
```

**Live domain is `soulscity.co.th`** (registered through THNIC, nameservers delegated to Vercel DNS).
`www.soulscity.co.th` is configured as a 308 redirect to the apex, so the apex is the single canonical
host. `soulscity.vercel.app` still resolves and is kept as a fallback — do not remove it.

There is no `vercel.json` or `.vercel/` — normal for zero-config Next.js. The GitHub link lives on
Vercel's side, so deploy settings and environment variables are changed at vercel.com, not in code.
`siteConfig.url` (`lib/site.js:2`) is the single source of the canonical URL — it feeds `metadataBase`,
the sitemap and robots.txt. Nothing else hardcodes the domain.

### Previewing before production

The `preview` branch exists so changes can be reviewed on a real device without touching production:

```
commit to `preview` → push → Vercel builds a Preview deployment
→ https://officialwebsite-git-preview-soul-scity.vercel.app   (stable alias, always newest)
→ merge into `main` only when approved
```

**Vercel skips a build when the SHA was already deployed.** Branching off `main` with no new commits
produces no preview at all. There must be a commit production has not seen.

**Two machines share this repo** (a Mac and a Windows PC). Always `git pull` before starting work.

**Claude commits straight to `preview`.** No intermediate working branch — the chain above is the
workflow, and a third branch only adds an empty merge.

**Remote sessions cannot read the deployed site.** Claude Code on the web runs behind an egress
proxy that denies `soulscity.co.th`, `www`, and the Vercel preview alias (403 on CONNECT). Local
work is unaffected — install, dev server, real browser, screenshots and `next build` all verified
working. But the "poll until the new content appears" rule below cannot be run from there, so
confirming a deploy actually landed is the user's step, on a machine that can reach the site.

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

`lib/data.js` — `domains`, `signatureCamp`, `formatTypes`, `serviceJourney`, `expertiseGroups`, `process`, `values`,
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

**Learner count.** The `5,000+` learners stat deliberately excludes the Samut Prakan anti-drug
stage play (10,000+ in `portfolio`). That is the owners' decision — do not "correct" the stat by
summing participants.

**Partners.** `{ name, logo }`, logo pointing into `public/partners/`. All 21 are transparent PNGs
fitted within 512px. Most were originally opaque crops out of documents; they were fixed by
flood-filling the background from the edges (so white *inside* a logo survives), then trimming.
Five are official files: WWF and Mitr Phol from Wikipedia, LSEd from lsed.tu.ac.th, Giftwise and
Triam Udom Suksa Pattanakarn Nonthaburi supplied by the client.

`thammasat_secondary.png` is the one remaining weak file — a white-boxed screenshot. Their official
SVG is on satit.tu.ac.th if it is ever worth converting.

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
| `TeamCard.js` | Server. About team card: photo panel covers the card's full height. Expertise tags drop into a strip under the photo only below 380px (see Owner decisions) |
| `ServiceJourney.js` | Server. Home "Our Services": Workshop → Signature Camp → Facilitation from `serviceJourney`. Markers in a row above the cards on `lg`; below that they move beside each stacked card on a dashed vertical line |

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

Every `h1`/`h2` is balanced by a base rule in `app/globals.css`; stat labels, the home English
tagline and the services format-card descriptions carry `text-balance` too. The home hero paragraph
stays `text-pretty` — balancing it measured worse. The one widow left is the About `h1` at ~768px
("…เปลี่ยนแปลง / ชีวิตได้"): its `<br />` fixes the line split, so balance cannot move it.
Balancing picks new break points, so a phrase it splits badly goes into `MANUAL` in KeepWords.

**Measure, don't eyeball.** Line-break work is done by measuring real line-box widths in the browser
with the Range API, not by guessing. The scripts in `scripts/audit/` do this (see Checking a change).

**Words split in the middle.** Browsers break Thai with ICU's dictionary, which stores many ordinary
words as parts, so without help they print "ผู้ / เรียน", "ไว้ / วางใจ", "เวิร์ / กช็อป". A site-wide
audit found 125 such breaks. The fix:

- `components/KeepWords.js` wraps every listed word in a `whitespace-nowrap` span so it moves to the
  next line whole. All rendered Thai copy goes through it: `<KeepWords>{text}</KeepWords>`, or a
  `<KeepWords>` block around literal JSX text. **Wrap a whole multi-line paragraph as one block** —
  wrapping each source line separately drops the space JSX puts between lines and glues words.
- Its output is one plain `<span>`, so inside a flex parent (buttons, eyebrows, chips, list rows) it
  stays a single item. Never make it return bare fragments.
- Never wrap `<option>` text — options accept strings only.
- The list is `lib/thai-keepwords.json`, generated by `scripts/thai-keepwords.py` (pythainlp segments
  the copy; Node's `Intl.Segmenter`, same ICU data as the browser, keeps the words it would split).
  **Rerun it after adding or rewording Thai copy:** `pip install pythainlp` once, then
  `python3 scripts/thai-keepwords.py`. `MANUAL` in KeepWords holds what it can't generate.
- `node scripts/audit/breaks.js` lays out all five pages at 8 widths and checks every break against
  pythainlp's word boundaries: 125 mid-word breaks before the fix. Its expected output is in the next section.

Known and deliberately left alone: widows inside fixed-width cards (service descriptions, partner
names, team credentials). Those are 320–350px grid columns that cannot be widened, and fixing them
would mean rewriting copy — the user's call, not a silent edit.

## Checking a change

`scripts/audit/` drives a real Chromium against a running build (`npm run build && npm run start`,
never while `npm run dev` is up) and prints numbers, not impressions. Run the ones that fit the change
before reporting it done. Base URL: `AUDIT_URL`, default `http://127.0.0.1:3000`. Output files go to
the OS temp dir (`soulscity-audit/`), never the repo.

| Command | What it answers | Clean result today |
|---|---|---|
| `node scripts/audit/layout.js` | Sideways overflow, h1/h2 with a stranded last word, `[object Object]`, console errors — 5 pages × 8 widths | Only the About h1 at 768px |
| `node scripts/audit/breaks.js` | Thai words split mid-word (needs `pip install pythainlp`) | 2 lines, both fine: "Mid- / Year" and "เชิงปฏิบัติ \| การมีส่วนร่วม" (a real space) |
| `node scripts/audit/lines.js /route "text" [widths]` | Exactly how one heading or paragraph wraps at each width — use after every copy change | — |
| `node scripts/audit/shot.js /route "text" [widths]` | PNG of the section holding that text; phones at 2x, navbar and LINE button hidden | — |

Any new line in `layout.js` or `breaks.js` is a regression until explained. After rewording Thai copy,
run `scripts/thai-keepwords.py` first, then `breaks.js`. Playwright is not a dependency: remote sessions
have it globally; on the Mac or Windows PC run `npm i --no-save playwright && npx playwright install chromium`
once.

## Conventions

- All user-facing copy is **Thai**; keep the tone warm and professional. Code identifiers stay English.
  Deliberate exceptions: skill tags on `/services` (`expertiseGroups`; their group names are Thai), the
  service names (Workshop, Signature Camp, Facilitation) and English eyebrows such as "Our Services".
- Server Components by default. Add `"use client"` only where state or effects are needed.
- Every page exports `metadata`; the title template in `app/layout.js` appends `| SoulScity`.

## Owner decisions — do not "fix"

Choices the owners made knowingly. They look like bugs or inconsistencies; leave them unless asked.

- **Team cards, 380–1023px:** Kanta's and Tanthai's expertise tags stay in the text column, so their
  cards are taller and their photos zoom in ~30% more than the others'. Moving the tags under the photo
  for all widths below `lg` fixed it; the owners chose the 380px breakpoint anyway.
- **Signature Camp duration** reads "3 วัน – ค้างคืน" in `serviceJourney`. Owners' wording.
- **Portfolio `misc` stays "Miscellaneous"** even though the third service is now Facilitation: the
  category also holds a stage play, an exhibition and Excel training.
- **About paragraph 2** ("ด้วยความเชื่อเหล่านี้ …") stays as written; three rewrites were drafted and
  declined for now.
- **Contact page copy** was excluded from the CI tone pass on purpose.

## Parked work

### "Case Study" — project detail pages (parked 2026-09-24, not started)

When the owners say **"Case Study"** or **"งาน case study"**, this is it. It is phase 02 of the growth plan
the owners shared on 2026-09-08 (https://claude.ai/code/artifact/4b0bf341-4631-47d0-b73f-d9563b227965).
Goal: make a few `/work` cards clickable, each opening a full write-up of that project.

**Projects (facts, dates and photos are already in `portfolio`):** SK Design Thinking Experience Camp ·
Rise Up: Young Leaders · ค่ายผู้นำรุ่นใหม่ฯ รุ่นที่ 18 · House of The Saint: Teacher Orientation ·
AC STEM: Turbo Motion Challenge.

**Content the owners must supply, per project** (never invent any of it):
1. โจทย์จากลูกค้า, 2-4 sentences in the teacher's own words
2. what we designed and *why that process*, 1-2 paragraphs
3. short schedule, 2-3 lines per day
4. a caption for each photo
5. outcomes, 3-5 points (learner work, evaluation scores with respondent count, what happened next)
Teacher testimonials are skipped for now; leave a slot. A results summary dropped in the `claude` Drive
folder can be drafted from.

**Code plan:** `slug` + `caseStudy` fields in `lib/data.js` · `app/work/[slug]/page.js` with
`generateStaticParams` and per-page metadata · only cards that have a case study become links (the rest
stay as they are) · case-study URLs in the sitemap · `Event` JSON-LD · an "อยากจัดแบบนี้บ้าง" button to
`/contact` with the activity type preselected. The Signature Camp card's "ดูตัวอย่างค่าย" link
(`serviceJourney`, now `/work`) can then point at a camp case study.

**Open decisions:** photos (use the 3-4 per project already here, or the owners send more; the plan
suggested 4-6) · build **one project first** (suggested: SK Design Thinking Camp) and agree the page
layout before doing the other four.

## Gotchas that have cost real time

- **Never run `next build` while the dev server is running.** It overwrites `.next` and the dev
  server then serves broken CSS — Tailwind utilities silently stop applying. The symptom looks like
  "my classes don't work". Fix: stop dev, `rm -rf .next`, restart. Stop dev before any build.
- **`next/image` lazy-loads.** An off-screen image reporting `naturalWidth === 0` is normal, not
  broken. Scroll it into view before asserting anything about load state.
- **Stale webpack cache.** Editing an import and its usage in separate steps can produce
  "X is not defined" when the code is already correct. Clear `.next` rather than debugging the code.
- **Replacing an image file needs a dev-server restart.** `next/image` holds optimised output in
  memory, so after overwriting a file in `public/` the old one keeps being served — disk is right,
  the page is wrong. Deleting `.next/cache/images` is NOT enough. Restart the dev server, then
  confirm the served dimensions match the file on disk.
- **Killing the dev server often orphans it.** Stopping the `npm` wrapper can leave `next dev`
  alive still holding port 3000. Check the port is actually free (`netstat`) before building or
  restarting — do not trust that the stop succeeded. This has caused broken-CSS previews three times.
- **A production check straight after `git push` reads the old deploy.** Vercel takes ~20-60s.
  Poll until the new content appears rather than reporting from the first response.
- **Every string appears twice in the HTML** — once rendered, once in the inlined RSC flight data.
  Strip tags before counting occurrences, or a doubled count reads as a real one.
- **Screenshots of the home page time out** unless the partner marquee animation is paused first
  (`animationPlayState = "paused"`), because the infinite animation never yields a stable frame.

## Environment

Copy `.env.example` → `.env.local` (it is correctly not in the repo).

- `RESEND_API_KEY` — required for the contact form; get it from resend.com or Vercel →
  Settings → Environment Variables. Without it the site runs fine, only mail sending fails.
- `CONTACT_EMAIL` — optional recipient override; defaults to `siteConfig.email`.

There is currently **no `.env.local` on the Windows machine**, so `/api/contact` returns 500 locally.
That is expected, not a bug — production has the key set in Vercel.

The Resend `from:` is still the shared sandbox `onboarding@resend.dev`. Now that `soulscity.co.th`
is owned and delegated, verifying it in Resend and sending as e.g. `web@soulscity.co.th` is the
outstanding deliverability improvement.

## Working agreement

- **One task per session.** Long sessions re-read their whole history on every reply (this repo's
  week of 22–24 Sep averaged ~400K tokens of context per reply). Everything a new session needs lives
  here and in git: when a task ends, record its decisions in this file before the session closes.
  Keep this file to rules, decisions and parked work; a long plan goes in `docs/` and is linked here.
- **Never push unprompted.** Make the change, verify it, summarise, then stop. The user says when to push.
- **Verify before claiming done** — run the dev server, drive the real browser, measure, screenshot.
  Concrete numbers are valued over assurances.
- **Flag concerns instead of silently complying.** Do not rubber-stamp.
- **No scope creep.** Do what was asked; mention adjacent issues rather than fixing them unasked.
- A short **หมายเหตุ** section at the end of a summary — caveats, what was deliberately not done and
  why — is welcome.
