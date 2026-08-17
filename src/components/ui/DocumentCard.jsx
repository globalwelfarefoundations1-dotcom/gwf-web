import { cn } from '../../utils/cn.js';
import { OnPaper } from './Band.jsx';

/* A parchment card with an inset hairline border — the "document" motif.
   Used for the object clause, the bank details and the inner-page forms.
   Declares itself as a paper surface so nested components pick the right
   colours even when the card sits on a dark band. */

export function DocumentCard({ children, className, as: Tag = 'article' }) {
  return (
    <OnPaper>
      <Tag
        className={cn(
          'relative border border-parchment-3 bg-parchment p-[clamp(1.9rem,4vw,3.2rem)] text-ink-text',
          'shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]',
          'before:pointer-events-none before:absolute before:inset-[9px] before:border before:border-gold-ink/25 before:content-[""]',
          className
        )}
      >
        {children}
      </Tag>
    </OnPaper>
  );
}

/* The line of small caps that closes a document card. */
export function DocumentSource({ items, className }) {
  return (
    <p
      className={cn(
        'flex flex-wrap gap-x-4 gap-y-[0.35rem] border-t border-gold-ink/25 pt-[1.1rem]',
        'font-mono text-meta uppercase tracking-[0.1em] text-gold-ink',
        className
      )}
    >
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </p>
  );
}
