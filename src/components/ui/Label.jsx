import { cn } from '../../utils/cn.js';

/* Small mono eyebrow. Used for section labels and legal metadata; gold on
   dark bands, darker gold on parchment. */
export function Label({ children, onPaper = false, as: Tag = 'span', className }) {
  return (
    <Tag
      className={cn(
        'inline-block font-mono text-meta font-medium uppercase tracking-[0.18em]',
        onPaper ? 'text-gold-ink' : 'text-gold',
        className
      )}
    >
      {children}
    </Tag>
  );
}
