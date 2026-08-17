import { cn } from '../../utils/cn.js';

/* Two-column layout used wherever a block of copy sits beside a document,
   a form or a register. `formFirst` reverses the weighting when the wide
   column holds a form rather than a document. Stacks below 860px. */
export function Charter({ children, formFirst = false, className }) {
  return (
    <div
      className={cn(
        'grid items-start gap-[clamp(2rem,5vw,4.5rem)] max-[860px]:grid-cols-1',
        formFirst
          ? 'grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]'
          : 'grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]',
        className
      )}
    >
      {children}
    </div>
  );
}
