import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

/* Mono, uppercase link with an underline that draws in from the left, and
   an arrow that steps forward on hover. Used to leave a section rather
   than to act on it — that is what <Button> is for. */

export function TextLink({ to, href, children, onPaper = false, className, ...props }) {
  const classes = cn(
    'group/tlink inline-flex items-center gap-[0.45rem] font-mono text-note uppercase tracking-[0.08em] no-underline underline-draw',
    onPaper ? 'text-gold-ink' : 'text-gold',
    className
  );

  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-[250ms] ease-charter group-hover/tlink:translate-x-[3px]"
      >
        &rarr;
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      {content}
    </Link>
  );
}
