# Anti-Looter Kit Landing Page Plan

## Implementation

Build a single static, responsive landing page for the Anti-Looter Kit affiliate offer. The page has no accounts, checkout, forms, or data collection. All primary CTAs use `https://www.antilooter-kit.com/main#aff=bugdata24` with sponsored/no-follow attributes. The root page, styles, script, route manifest, and supplied hero reference image are mirrored in both the project `public/` directory and the GitHub Pages root so the managed Preview and public GitHub Pages URL remain compatible.

The content is intentionally simplified: campaign-style hero, compact feature strip, six-card included-tools section, three-step setup section, current offer card, practical trust section, final CTA, and affiliate disclosure. Claims stay within the reference offer: the named devices and guides, the stated $149 one-time price versus $299 regular price, and the stated 60-day guarantee. The merchant controls current pricing, availability, shipping, refund eligibility, and support.

## Design

The supplied reference image establishes the visual direction: dark navy campaign interface, electric blue and cyan accents, bright yellow CTA actions, bold condensed-feeling headlines, simple top navigation, strong hero image, icon-led feature strip, and a compact conversion path. The supplied image is reused as the hero visual source and is cropped to show the prepared safety scene without duplicating the image’s embedded copy.

Core principles are clarity, confidence, action, and restraint. The layout uses a bold two-column hero, high-contrast CTA hierarchy, compact sections, and repeated shield/check/arrow motifs. Typography pairs Outfit for large campaign headlines with Inter for readable body copy. Navy communicates security and seriousness, blue communicates capability, and yellow is reserved for action and readiness cues. Motion is limited to gentle reveal transitions and button lift; reduced-motion preferences are respected.


## Conversion layer

The top banner includes a daily page-refresh countdown to create a clear reason to review the live offer now. It is labeled as a page-only timer and explicitly states that the merchant controls live pricing and terms; it does not claim false inventory or a merchant-set deadline.


## Direct-response refinement

The secondary hero action now links directly to the affiliate offer instead of scrolling to a page section. The hero uses the supplied artwork as a full-bleed background with a dark readability overlay, the first screen carries more of the narrative, and a mobile-only sticky offer CTA reduces scroll friction. Curiosity copy stays grounded in the actual offer and does not use fabricated scarcity.


## Performance pass

The supplied hero image is served as a 1440px-wide WebP at approximately 128 KB instead of a 2.3 MB PNG. The hero is preloaded as a high-priority image, the existing script remains deferred and lightweight, and root/public assets stay synchronized for both Preview and GitHub Pages.
