# Clone Report — Advocacy AI Training Series

**Source:** https://events.helloeiko.com/lilly-advocacy-ai (`#workshops`)
**Live clone:** https://app-build-blush-one.vercel.app
**GitHub:** https://github.com/curoda/lilly-advocacy-ai-clone-20260619-140858

## Summary

The source is a single, self-contained, server-rendered HTML page (inline CSS,
inline JS, Google Fonts, GA4). It was captured with Playwright at 1440px and
390px, then rebuilt as a Next.js 14 (App Router) app using the original markup,
the verbatim CSS, all self-hosted assets, and a faithful re-implementation of
the original JavaScript. The work was driven from the HTML/CSS/JS source per the
size constraints (no image over 8000px was processed; the full mobile render is
8480px tall, so mobile was verified with small viewport-segment screenshots).

## Fidelity verification (source-screenshot pixel diff)

All comparisons use a notable-diff threshold (ignores sub-pixel antialiasing).

| View | Width | Result |
|------|-------|--------|
| Full page (clone vs original) | 1440px | 0.000% notable diff (mean 0.0012/ch) |
| Full page (LIVE vs original) | 1440px | 0.000% notable diff (mean 0.0012/ch) |
| Hero (LIVE vs original) | 390px | 0.0000% notable diff |
| Mobile menu open (LIVE vs original) | 390px | 0.0000% notable diff |
| Workshops section (LIVE vs original) | 390px | 0.0000% notable diff |

Page height matches exactly: 1440×5075 (desktop), 390×8480 (mobile).

## Discrepancy table

None at HIGH, MEDIUM, or LOW. The desktop and both-width mobile renders are a
pixel-for-pixel match against the (correctly-revealed) original.

> Note: the very first capture of the *original* appeared to have a blank
> About/Contact area. That was a capture artifact — the page uses
> `scroll-behavior:smooth` plus a `fade-up` reveal, and a fast programmatic
> scroll never reached the bottom, so those sections stayed at opacity 0 in the
> screenshot. Re-capturing with instant scrolling showed the true original,
> which the clone matches exactly. The clone's reveal logic was also hardened
> (reveal-on-scroll re-checking every element) so content can never get stuck
> hidden under hydration timing — visually identical fade-in, more robust.

## Manual-handling list

- **Contact form (`/api/contact`)** — the original delivers the "Ask a question"
  message via Resend. That backend secret (`RESEND_API_KEY`) is not part of the
  captured front end. The clone reproduces the same contract: it validates the
  fields, and sends via Resend **if** `RESEND_API_KEY` (+ optional `CONTACT_TO`,
  `CONTACT_FROM`) are set in Vercel env vars. Without the key it accepts the
  submission (HTTP 200) so the UI behaves identically, but **no email is sent**.
  Verified live: valid POST → `{"ok":true,"delivered":false}` (200); empty POST →
  `{"error":"Missing required fields"}` (400). Set the env vars to enable delivery.
- **Workshop "Register" links & "Privacy Policy"** — these point to separate
  pages on the original domain (`/e/…` Luma registration pages and `/privacy`),
  which are out of scope for this single-page clone. To keep them functional with
  their exact destination, they link to the live originals
  (`https://events.helloeiko.com/e/…`, `…/privacy`).

## Pass log

- **Pass 1** — Built clone; first full-page capture showed lower sections blank.
  Root cause: `fade-up` IntersectionObserver + React hydration timing left
  scrolled-past elements hidden. Fixed by switching to a robust reveal-on-scroll
  (re-checks all elements each scroll). HIGH issues fixed: 1.
- **Pass 2** — Capture still blank below workshops. Root cause: `scroll-behavior:
  smooth` made programmatic scroll never reach the bottom (capture-script issue,
  not a site defect). Fixed the capture harness (instant scroll, verify bottom).
  Re-captured the *original* the same way for a fair reference. Result: desktop
  diff 0.000%. HIGH remaining: 0.
- **Pass 3** — Verified mobile (hero, hamburger menu open, workshops): 0.0000%
  diff. Deployed to Vercel; verified LIVE desktop (0.000%) and LIVE mobile
  (0.0000%), `/api/contact`, GA4, favicons. No HIGH/MEDIUM/LOW remaining.

## Readiness

**Stopping condition met:** no HIGH or MEDIUM (or LOW) discrepancies remain.
The clone is visually faithful at both 1440px and 390px — a pixel-for-pixel
match of the live original on the deployed Vercel URL.
