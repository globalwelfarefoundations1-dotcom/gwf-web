import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Router replacement for the browser's native anchor behaviour.

   On a plain navigation the page returns to the top; when the URL carries
   a hash (/what-we-do#health) the matching section is scrolled into view,
   allowing for the sticky masthead.

   The target may not exist on the first frame — route chunks are loaded
   lazily — so this retries for a short window before giving up rather
   than scrolling to the wrong place. */
export function useHashScroll(offset = 96, timeout = 2000) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return undefined;
    }

    let frame;
    const startedAt = performance.now();

    const attempt = () => {
      const target = document.querySelector(hash);

      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }

      if (performance.now() - startedAt < timeout) {
        frame = requestAnimationFrame(attempt);
      }
    };

    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, offset, timeout]);
}
