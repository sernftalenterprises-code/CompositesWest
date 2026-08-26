# Stripe checkout

The site sells via **Stripe Payment Links** — no backend, no API keys in the
repo, and the site stays fully static. Each product opts in individually: once
a product in [src/data/products.ts](src/data/products.ts) has a
`stripePaymentLink`, its page shows a **Buy now** button that opens Stripe's
hosted checkout. Products without one keep the existing quote-only flow.

## Enabling checkout for a product

1. In the [Stripe dashboard](https://dashboard.stripe.com), go to
   **Product catalog → Add product**. Use the product's full name from
   `products.ts` and set the per-roll price.
2. Go to **Payment Links → New**, pick the product, and configure:
   - **After payment → Don't show confirmation page → redirect customers to**
     `https://compositeswest.com/thank-you/`
   - Enable **Collect customers' addresses → Shipping address** (rolls ship
     freight — also set up shipping rates under **Settings → Shipping rates**
     if you want Stripe to charge for shipping).
   - Optionally enable **Let customers adjust quantity**.
3. Copy the link (`https://buy.stripe.com/...`) and add it to the product in
   `src/data/products.ts`, along with the matching display price:

   ```ts
   {
     slug: 'hexcel-twill-weave',
     // ...existing fields...
     priceUsd: 425,
     stripePaymentLink: 'https://buy.stripe.com/xxxxxxxxxxxx',
   },
   ```

4. Rebuild and deploy. The product page gets the Buy now button, the price
   shows on its card and page, and the JSON-LD offer picks up the real price.

To test end-to-end before going live, create the payment link in **test mode**
(toggle in the dashboard) and check out with card `4242 4242 4242 4242` —
then swap in the live-mode link before deploying.

## What was added to the site

- `priceUsd` / `stripePaymentLink` optional fields on `Product`
  ([src/data/products.ts](src/data/products.ts))
- Conditional **Buy now** CTA and price display on product pages
  ([src/pages/product/[slug].astro](src/pages/product/[slug].astro)) and
  price on product cards ([src/components/ProductCard.astro](src/components/ProductCard.astro))
- Order confirmation page at `/thank-you/`
  ([src/pages/thank-you.astro](src/pages/thank-you.astro)) — noindexed and
  excluded from the sitemap; set it as the redirect on every payment link
