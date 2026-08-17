import { createContext, useContext } from 'react';
import { cn } from '../../utils/cn.js';
import { Shell } from './Shell.jsx';

/* A horizontal band of the page.

   The design alternates dark "seal" bands with light "document" bands.
   Rather than have every child work out which it is sitting on, the band
   publishes that through context and children read it with useOnPaper(). */

const BandContext = createContext(false);

export const useOnPaper = () => useContext(BandContext);

const tones = {
  seal: { className: 'bg-ink text-ivory guilloche', onPaper: false },
  raised: { className: 'bg-ink-soft text-ivory guilloche', onPaper: false },
  paper: { className: 'bg-parchment text-ink-text', onPaper: true },
  'paper-2': { className: 'bg-parchment-2 text-ink-text', onPaper: true },
};

export function Band({ tone = 'seal', id, children, className, shellClassName, bare = false }) {
  const { className: toneClass, onPaper } = tones[tone] ?? tones.seal;

  return (
    <BandContext.Provider value={onPaper}>
      <section id={id} className={cn('relative py-band', toneClass, className)}>
        {bare ? children : <Shell className={shellClassName}>{children}</Shell>}
      </section>
    </BandContext.Provider>
  );
}

/* Lets a subtree declare its own surface — a parchment document card
   sitting inside a dark band, for instance. */
export function OnPaper({ value = true, children }) {
  return <BandContext.Provider value={value}>{children}</BandContext.Provider>;
}
