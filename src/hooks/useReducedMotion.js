import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/* True when the visitor has asked the system to reduce motion. Every
   animation in the site checks this before it runs. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = (event) => setReduced(event.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
