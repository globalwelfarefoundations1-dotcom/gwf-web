import { useEffect } from 'react';
import { site } from '../data/site.js';

/* Writes document title, description, canonical, Open Graph and Twitter
   tags on every route change, and optionally injects a JSON-LD block.

   This is deliberately dependency-free — the site has five pages and does
   not need a head-management library. */

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

export function useSeo(meta, jsonLd = null) {
  useEffect(() => {
    if (!meta) return undefined;

    const canonical = meta.path ? `${site.url}${meta.path === '/' ? '/' : meta.path}` : site.url;
    const image = `${site.url}/assets/img/og-image.png`;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: site.name });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.ogTitle || meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.ogDescription || meta.description,
    });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    const robots = document.head.querySelector('meta[name="robots"]');
    if (meta.noindex) {
      upsertMeta('meta[name="robots"]', { name: 'robots', content: 'noindex' });
    } else if (robots) {
      robots.remove();
    }

    let script;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) script.remove();
    };
  }, [meta, jsonLd]);
}
