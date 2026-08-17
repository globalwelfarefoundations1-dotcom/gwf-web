import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn.js';

/* The site's one button. Renders a router <Link>, an <a> for external and
   mailto/tel targets, or a real <button> when there is no destination —
   the styling is identical in all three cases. */

const base =
  'inline-flex items-center gap-[0.6rem] rounded-doc border px-6 py-[0.85rem] ' +
  'font-body text-note font-bold uppercase tracking-[0.09em] no-underline ' +
  'transition-[background-color,color,border-color,transform] duration-[250ms] ease-charter ' +
  'hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:opacity-60';

const variants = {
  gold:
    'border-transparent bg-[linear-gradient(160deg,var(--color-gold-light),var(--color-gold)_45%,var(--color-gold-deep))] ' +
    'text-gold-onblack hover:bg-gold-light hover:bg-none',
  outline: 'border-hairline text-ivory hover:border-gold hover:text-gold-light',
  onpaper:
    'border-gold-ink/40 text-gold-ink hover:border-gold-ink hover:bg-gold-ink/[0.07]',
};

export function Button({
  variant = 'gold',
  to,
  href,
  type = 'button',
  children,
  className,
  withArrow = false,
  ...props
}) {
  const classes = cn(base, variants[variant], className);

  const content = (
    <>
      {children}
      {withArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-[250ms] ease-charter group-hover/btn:translate-x-[3px]"
        >
          &rarr;
        </span>
      )}
    </>
  );

  const withGroup = cn(classes, withArrow && 'group/btn');

  if (to) {
    return (
      <Link to={to} className={withGroup} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={withGroup} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={withGroup} {...props}>
      {content}
    </button>
  );
}

/* Buttons sit in a wrapping row wherever more than one appears together. */
export function ButtonRow({ children, className }) {
  return <div className={cn('flex flex-wrap gap-[0.9rem]', className)}>{children}</div>;
}
