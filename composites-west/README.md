# Composites West — compositeswest.com rebuild

Modern rebuild of the Composites West website (previously WordPress/Divi + WooCommerce)
on **Astro 5 + Tailwind CSS 4**. Fully static output — fast, secure, and cheap to host.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # static build to ./dist
npm run preview    # serve the production build locally
```

## What's inside

- **Same URL structure as the old site** (`/about/`, `/our-products/`, `/all-products/`,
  `/product/<slug>/`, `/hex-3r-products/`, `/specifications/`, `/selection/`,
  `/general-installation-instructions/`, `/fibranchor-installation-instructions/`,
  `/research/`, `/contact/`) — no redirects needed, existing link equity preserved.
- **Product catalog** in [src/data/products.ts](src/data/products.ts) — edit this one
  file to add/update products (specs, copy, filters all derive from it).
- **SEO**: per-page titles/meta descriptions, canonical URLs, Open Graph/Twitter cards,
  JSON-LD structured data (Organization, Product, BreadcrumbList, FAQPage, HowTo,
  ItemList), `sitemap-index.xml` (auto-generated at build), `robots.txt`.
- **AI search (ChatGPT/Claude/Perplexity) optimization**: `public/llms.txt` company
  summary, AI crawlers explicitly allowed in `robots.txt`, semantic HTML + FAQ content.
- **Performance**: static HTML, self-hosted variable fonts (Inter + Space Grotesk),
  responsive AVIF/WebP images generated at build time, minimal JS (mobile menu,
  product filters, scroll reveals only).
- **Quote flow**: every product page has "Request a quote" which deep-links to
  `/contact/?product=<name>` and prefills the message.

## Before launch (TODO)

1. **Contact form backend** — the form in
   [src/pages/contact.astro](src/pages/contact.astro) currently falls back to a
   prefilled `mailto:`. Point it at Formspree, Basin, Netlify Forms, or similar
   (see the `TODO for launch` comment in that file).
2. **Hex-3R data-sheet PDFs** — currently linked from the old host
   (`compositeswest.com.dream.website`). Download them into `public/datasheets/` and
   update `PDF_BASE` in [src/pages/specifications.astro](src/pages/specifications.astro)
   before decommissioning WordPress.
3. **Deploy** — any static host works (Netlify, Vercel, Cloudflare Pages).
   Build command `npm run build`, output directory `dist`.
   Then point the `compositeswest.com` DNS at the new host.
4. Optional: real e-commerce checkout later (Stripe/Snipcart) — product data is already
   structured for it.

## Content source

All copy was migrated from the live site (crawled Aug 2025); product descriptions were
lightly expanded for SEO. Original images were pulled from the WordPress uploads dir
into `src/assets/`.
