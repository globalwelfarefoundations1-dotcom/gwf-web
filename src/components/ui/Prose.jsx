import { cn } from '../../utils/cn.js';
import { useOnPaper } from './Band.jsx';

/* Running body copy, set to a comfortable measure. */
export function Prose({ children, className }) {
  return <div className={cn('max-w-[44rem] leading-[1.78]', className)}>{children}</div>;
}

/* Dimmed body paragraph — the standard weight for supporting copy on
   either surface. */
export function Body({ children, className, as: Tag = 'p' }) {
  const onPaper = useOnPaper();
  return (
    <Tag
      className={cn(
        'mb-[1.1em] last:mb-0',
        onPaper ? 'text-ink-text/72' : 'text-ivory/70',
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* A list whose markers are short gold rules rather than bullets.
   The marker colour follows the surface via --marker-color. */
export function RuleList({ items, className }) {
  const onPaper = useOnPaper();

  return (
    <ul
      className={cn(
        'mt-[1.2rem] grid gap-2',
        onPaper
          ? 'text-ink-text/72 [--marker-color:var(--color-gold-ink)]'
          : 'text-ivory/70 [--marker-color:var(--color-gold)]',
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="marker-rule text-note leading-[1.7]">
          {item}
        </li>
      ))}
    </ul>
  );
}

/* A list whose markers are small rotated gold lozenges. */
export function LozengeList({ items, className }) {
  const onPaper = useOnPaper();

  return (
    <ul
      className={cn(
        'mb-[1.2rem] grid',
        onPaper ? '[--marker-color:var(--color-gold-ink)]' : '[--marker-color:var(--color-gold)]',
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="marker-lozenge mb-[0.55rem] leading-[1.7]">
          {item}
        </li>
      ))}
    </ul>
  );
}
