# Global Welfare Foundation — website

The GWF site as a modular React application: Vite, React 19, React Router 7
and Tailwind CSS v4. Functional components throughout, no class components,
no CSS files beyond a single token sheet.

This is a conversion of the original static HTML site. The design is
unchanged — same palette, type, spacing and behaviour — but the five
repeated copies of the header and footer are now one component each, and
every piece of copy lives in a data file rather than in markup.

## Running it

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Node 20 or newer.

## How it is put together

```
src/
├── main.jsx                  mounts the router
├── App.jsx                   routes; pages after the home page are lazy-loaded
├── styles/index.css          the entire design system — tokens + 5 custom utilities
│
├── data/                     ALL COPY LIVES HERE. No text in components.
│   ├── site.js               name, contacts, legal strings, object clause, bank details
│   ├── navigation.js         primary nav and the three footer columns
│   ├── pillars.js            the five pillars, short and long form
│   ├── goals.js              the fourteen adopted goals
│   ├── seo.js                per-route <head> metadata and the schema.org record
│   ├── home.js  about.js  whatWeDo.js  getInvolved.js  contact.js  notFound.js
│
├── hooks/
│   ├── useScrollReveal.js    IntersectionObserver reveal, reduced-motion aware
│   ├── useStickyHeader.js    condenses the masthead past 40px of scroll
│   ├── useMailtoForm.js      form submission (mailto fallback, or a real endpoint)
│   ├── useSeo.js             writes title / description / canonical / OG / JSON-LD
│   ├── useHashScroll.js      /page#section anchors, allowing for the sticky header
│   └── useReducedMotion.js
│
├── components/
│   ├── ui/                   Band, Shell, Button, TextLink, Label, SectionHead,
│   │                         Rule, Reveal, DefList, DocumentCard, Field, Prose
│   ├── layout/               SkipLink, UtilityBar, Masthead, Footer, Layout
│   ├── sections/             Hero, Seal, Charter, ObjectClause, PillarGrid,
│   │                         GoalRegister, ApproachGrid, WaysGrid, FocusBlock,
│   │                         PageHead, CtaBand
│   ├── forms/                MailtoForm, DonationForm, SubscribeForm
│   └── icons/Icons.jsx       every icon, as inline SVG
│
└── pages/                    Home, About, WhatWeDo, GetInvolved, Contact, NotFound
```

### Two ideas worth knowing

**Bands publish their surface.** The design alternates dark "seal" bands with
light "document" bands, and a dozen components need to know which they are on.
`<Band tone="paper">` puts that in context; children call `useOnPaper()` and
pick their own colours. Nothing has to be told twice, and a `<DocumentCard>`
correctly reports itself as parchment even when it sits on a dark band.

**Forms are schemas.** A form is an array of rows of field descriptors in
`data/`. `<MailtoForm>` renders them. Adding a field to the volunteer form is
one line in `data/getInvolved.js` — no JSX changes.

## Styling

Tailwind v4, configured in CSS. There is no `tailwind.config.js`; the theme
lives in the `@theme` block at the top of `src/styles/index.css`:

| Token | Utility | Value |
|---|---|---|
| `--color-ink` | `bg-ink` | `#061a11` |
| `--color-gold` | `text-gold` | `#c6a03e` |
| `--color-parchment` | `bg-parchment` | `#f1ebdc` |
| `--color-hairline` | `border-hairline` | `rgba(198,160,62,0.28)` |
| `--font-seal` | `font-seal` | Cinzel — inscriptional caps |
| `--font-voice` | `font-voice` | Newsreader — statements |
| `--font-body` | `font-body` | Karla — body and UI |
| `--font-mono` | `font-mono` | IBM Plex Mono — labels, legal data |
| `--text-h2` | `text-h2` | `clamp(1.65rem, 1.6vw + 1.3rem, 2.4rem)` |
| `--spacing-band` | `py-band` | `clamp(3.75rem, 8vw, 7rem)` |
| `--container-shell` | `max-w-shell` | `1180px` |

To change the palette, edit those variables. Everything follows from them.

Five things the design repeats are not expressible as stock utilities, so they
are defined as custom Tailwind utilities in the same file: `guilloche` and
`guilloche-strong` (the engraved diagonal ruling on dark bands),
`underline-draw` (the link underline that draws in), and `marker-lozenge` /
`marker-rule` (list markers). Everything else is a plain Tailwind class.

## Routing

Client-side, with clean URLs — `/about`, not `/about.html`. Old links with the
`.html` extension will hit the 404 route; add redirects at your host if you
need them to keep working.

Because routing is client-side, the host must serve `index.html` for unknown
paths. Configuration for that is included:

- **Vercel** — `vercel.json` (rewrites + security headers + cache policy)
- **Netlify / Cloudflare Pages** — `public/_redirects`
- **Apache / nginx** — add the equivalent single-page-app fallback rule

## Accessibility and performance

- Skip link to the main content; visible keyboard focus throughout.
- The mobile menu closes on Escape, on link press, and on navigation, and
  reports its state with `aria-expanded`.
- All motion — reveals, the turning seal, hover lifts — stops for visitors who
  set "reduce motion".
- Colour contrast meets WCAG AA for body text on both the dark and parchment
  bands.
- Pages after the home page are code-split; the home route ships ~70 kB gzipped
  including React.

## Before going live

Read `CONTENT-TODO.md`. Every contact detail, registration number and social
link on the site is a placeholder, and they now all live in `src/data/site.js`
— one file, one edit each.
