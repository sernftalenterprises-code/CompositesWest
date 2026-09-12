/**
 * Run page setup once per document, and again after every client-side
 * navigation. Module scripts evaluate a single time under Astro's
 * ClientRouter, so anything that grabs DOM has to re-run on
 * `astro:page-load`; the marker lives on <body>, which the router swaps,
 * so a fresh body always re-initialises and the initial load never runs twice.
 *
 * Page-specific scripts pass a `root` selector: once their module has been
 * loaded it stays loaded for the session, so without the guard it would run
 * (and throw) on every page that lacks its DOM.
 *
 *   boot('header', () => { ... })              // site-wide
 *   boot('allProducts', '#filters', () => { }) // only where #filters exists
 */
export function boot(key: string, a: string | (() => void), b?: () => void): void {
  const root = typeof a === 'string' ? a : null;
  const fn = typeof a === 'function' ? a : b!;
  const run = () => {
    const body = document.body;
    if (!body) return;
    if (root && !document.querySelector(root)) return;
    const marker = `boot${key[0].toUpperCase()}${key.slice(1)}`;
    if (body.dataset[marker]) return;
    body.dataset[marker] = '1';
    fn();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();
  document.addEventListener('astro:page-load', run);
}

export const reduceMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const finePointer = (): boolean =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;
