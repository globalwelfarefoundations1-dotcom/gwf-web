import { cn } from '../../utils/cn.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

/* Fades and lifts its children into place the first time they scroll into
   view. Progressive enhancement only: if the observer never fires, or the
   visitor prefers reduced motion, the content is simply visible. */
export function Reveal({ children, as: Tag = 'div', className, ...props }) {
  const [ref, visible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-charter motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[18px] opacity-0',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
