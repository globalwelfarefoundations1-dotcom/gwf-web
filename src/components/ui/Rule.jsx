import { cn } from '../../utils/cn.js';

/* Hairline rule with a small gold lozenge at its centre — the joint
   between two bands. */
export function Rule({ onPaper = false, className }) {
  return (
    <div
      role="separator"
      className={cn(
        'relative h-px border-0',
        onPaper ? 'bg-hairline-ink' : 'bg-hairline',
        'after:absolute after:left-1/2 after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:bg-gold after:content-[""]',
        className
      )}
    />
  );
}
