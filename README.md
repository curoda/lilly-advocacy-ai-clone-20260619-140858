# Advocacy AI Training Series — Clone

A faithful, pixel-accurate clone of the landing page at
**https://events.helloeiko.com/lilly-advocacy-ai** (`#workshops`), rebuilt as a
Next.js 14 (App Router) application.

## What this is

The original is a single, self-contained HTML page (server-rendered, with inline
CSS and inline JavaScript). It was captured with Playwright at desktop (1440px)
and mobile (390px) widths, then reconstructed here with the original markup,
the exact CSS verbatim, the original behavior re-implemented in React, and all
media assets self-hosted.

## Stack

- **Next.js 14** (App Router, TypeScript)
- `app/layout.tsx` — `<head>`, metadata, favicons, Google Analytics (GA4, `G-HE4MQ35NWE`)
- `app/page.tsx` — the page markup (server component)
- `app/SiteScripts.tsx` — client component re-implementing the original inline JS
  (nav scroll shadow, fade-up `IntersectionObserver`, accessible mobile menu, contact form submit)
- `app/globals.css` — the original inline CSS, copied verbatim
- `app/api/contact/route.ts` — the contact-form endpoint
- `public/` — all images / icons / tool logos (self-hosted)
- `capture/home/` — the raw capture spec (rendered HTML, styles, assets, links, meta) for reference

## Fonts

Loaded from Google Fonts exactly as the original (via `@import` in `globals.css`):
**DM Sans**, **DM Serif Display**, and **Material Symbols Outlined**.

## Notes on fidelity / deliberate choices

- **Workshop "Register" links and the "Privacy Policy" link** point to the live
  original domain (`https://events.helloeiko.com/e/…`, `…/privacy`). The original
  uses relative paths to separate registration pages (Luma-powered) that are out
  of scope for this single-page clone; pointing to the live originals preserves
  their exact destination and keeps the buttons functional.

## Manual handling

- **Contact form (`/api/contact`)** — the original delivers messages via
  [Resend](https://resend.com). That backend secret is not part of the captured
  front end. This route reproduces the same contract: it validates the fields and,
  **if** `RESEND_API_KEY` is set (plus optional `CONTACT_TO` / `CONTACT_FROM`),
  sends the email. Without the key it accepts the submission so the UI behaves
  identically, but **no email is delivered**. Set the env vars to enable real delivery.

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
```
<!-- editor smoke test 2026-06-19 vault -->
