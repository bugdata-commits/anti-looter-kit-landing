# Anti-Looter Kit Landing Page Plan

## Implementation

Build a single static page served from `public/` with no accounts, checkout, forms, tracking input, or backend. Use semantic HTML in `public/index.html`, a dedicated `public/styles.css` for the responsive visual system, and `public/script.js` for the FAQ accordion, mobile navigation, reveal-on-scroll motion, and small utility behaviors. Serve `/manus-routes.json` as a static route manifest for the root page. Use the supplied affiliate URL for every primary CTA and mark those links with `rel="sponsored nofollow noopener"`.

The page will cover the hero, included kit components, setup flow, practical benefits, digital bonus guides, guarantee, FAQ, final CTA, and a clear affiliate disclosure. Offer details are limited to the reference page: $149 one-time price versus the stated $299 regular price, the listed devices and guides, the stated 60-day Keep-the-Kit money-back guarantee, and the merchant's own fulfillment, terms, and availability. The copy will avoid unsupported certainty, fear-heavy crisis claims, and invented customer reviews.

Project structure:

- `public/index.html`: all page content and inline SVG icon markup.
- `public/styles.css`: palette, responsive layout, card system, device illustration, motion, and accessible states.
- `public/script.js`: FAQ interaction, menu toggle, current year, and intersection-observer reveals.
- `public/manus-routes.json`: route declaration for `/`.
- `app.config.ts`: project logo metadata literal.
- `plan.md` and `TODO.md`: project decisions and outcome tracking.

## Design

### Considered styles

- Signal-house editorial — 0.07: a warm off-white field guide layout with dark ink, amber signal accents, and practical diagrams.
- Tactical neon dashboard — 0.04: a dark, high-contrast interface with bright status colors and dense control-room panels.
- Modern homestead catalog — 0.08: a soft paper-and-olive product catalog with more domestic warmth and slower pacing.

### Chosen direction: Signal-house editorial

**Design Movement:** contemporary editorial field manual, translated into a calm direct-response landing page.

**Core Principles:** make preparedness feel attainable, show rather than sensationalize, keep the offer legible at a glance, and use generous spacing around proof and disclosure.

**Color Philosophy:** deep ink and charcoal establish calm competence; warm parchment keeps the page human and home-oriented; amber is reserved for signal moments and calls to action; sage green marks practical reassurance without looking like a security alarm brand.

**Layout Paradigm:** an offset editorial composition with a narrow reading rail, a large asymmetric hero, and staggered device cards that feel like a labeled kit spread rather than a generic centered grid.

**Signature Elements:** amber “signal” bars, thin measurement rules, and rounded field-note cards with tiny uppercase labels.

**Interaction Philosophy:** movement is quiet and directional. Cards rise into place, buttons respond with a slight lift, and FAQ answers open without visual drama. Nothing flashes or mimics an alarm.

**Animation:** use short ease-out reveals on scroll, a subtle floating signal dot in the hero, and a gentle accordion transition. Respect `prefers-reduced-motion` by disabling transforms and transitions.

**Typography System:** `Space Grotesk` for headlines and display numerals; `DM Sans` for body copy, labels, and buttons. Headlines use tight line-height and occasional uppercase eyebrow labels for an editorial, technical rhythm.

**Brand Essence:** a practical early-warning kit for people who want a little more awareness around home, travel, and property without turning their space into a complicated smart-home project. Personality: grounded, prepared, clear.

**Brand Voice:** direct, useful, and calm. Example lines: “Know what is happening sooner.” and “A small kit for the moments when awareness matters.”

**Wordmark & Logo:** a compact “AL” monogram inside a rounded square, paired with a small amber signal line; use it as a CSS-built mark so the brand reads as a field tool rather than a generic ecommerce logo.

**Signature Brand Color:** signal amber `#F3A83B`, used sparingly for action and orientation.
