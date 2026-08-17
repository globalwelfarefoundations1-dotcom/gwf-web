import { cn } from '../../utils/cn.js';

/* The measure the whole site is set to: 1180px, with fluid side gutters.

   Pass `maxWidth` to narrow a particular shell (the inner-page header is
   set to 46rem). It replaces the default rather than competing with it,
   so there is never a question of which class wins. */
export function Shell({ children, className, as: Tag = 'div', maxWidth = 'max-w-shell' }) {
  return (
    <Tag className={cn('relative z-[1] mx-auto w-full px-gutter', maxWidth, className)}>
      {children}
    </Tag>
  );
}
