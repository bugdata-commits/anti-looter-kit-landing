# ValueNest Affiliate Site Plan

## Site structure

The root page (`/`) is the ValueNest catalog, not an individual product landing page. It introduces ValueNest and prominently lists the current offers: ForexBee’s Supply & Demand TradingView indicator at `/forex`, and the Anti-Looter Kit at `/anti-looter-kit.html`. Each card links to its own offer overview. New affiliate products can be added as additional cards and product pages without making the homepage exclusive to one merchant.

## Shared brand

Use the supplied ValueNest.life Affiliate Marketing artwork as the site-wide logo in the catalog, ForexBee offer page, and Anti-Looter Kit overview. The logo is cropped only to remove excess background around the full wordmark and nest/arrow emblem, optimized as WebP, and mirrored in the root and `public/` asset folders. ValueNest's core palette is charcoal, warm cream, and champagne gold; product offer pages may use supporting colors suited to their own imagery.

## Product information and trust

The catalog uses concise, neutral product descriptions and routes shoppers to an offer overview before the merchant checkout. Offer pages explain seller-listed details and make clear that prices, availability, delivery, refunds, billing, and customer support are controlled by the merchant. Affiliate links are disclosed; links to sellers are marked sponsored/no-follow. Forex content includes a trading-risk warning and does not promise returns.

Do not add a scarcity countdown without a real offer expiry date/time and timezone. Do not publish testimonials without genuine source copy and permission. Until those are provided, omit both elements rather than inventing urgency or customer experiences.

## Visual direction

The ValueNest homepage uses the supplied gold logo with a charcoal-black and champagne palette. The ForexBee page retains its own dark navy layout and user-supplied bull/market hero image, with gold and electric-blue accents; the original Anti-Looter Kit page preserves its existing product-specific artwork and layout while using the shared ValueNest logo.

## Technical delivery

Keep the project as static GitHub Pages-compatible HTML/CSS with no account, checkout, or data collection features. Maintain the existing custom domain `www.valuenest.life`, preserve product URLs, and mirror the root page/assets/styles and route manifest into `public/` where applicable. The short extensionless Forex offer URL remains `/forex`.
