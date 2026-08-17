import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

/* Reveals an element once, the first time it enters the viewport.

   Returns [ref, isVisible]. Falls back to "already visible" when the
   visitor prefers reduced motion or IntersectionObserver is missing, so
   content is never hidden by a failed enhancement. */
export function useScrollReveal({ rootMargin = '0px 0px -8% 0px', threshold = 0.08 } = {}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return undefined;

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, rootMargin, threshold]);

  return [ref, visible];
}
