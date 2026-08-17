import { useEffect, useState } from 'react';

/* True once the page has scrolled past `offset` — the masthead uses it to
   condense its padding and shrink the seal. */
export function useStickyHeader(offset = 40) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return stuck;
}
