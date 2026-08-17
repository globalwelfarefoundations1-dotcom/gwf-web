import { cn } from '../../utils/cn.js';
import { Icon } from '../icons/Icons.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { TextLink } from '../ui/TextLink.jsx';

/* Cards on parchment — the three ways to help on the home page, and the
   four kinds of corporate partnership on Get involved. */
export function WaysGrid({ items, className }) {
  return (
    <Reveal
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-[clamp(1.2rem,3vw,2rem)]',
        className
      )}
    >
      {items.map((item) => (
        <article
          key={item.id}
          className="flex flex-col border border-parchment-3 bg-white/55 p-[clamp(1.7rem,3.4vw,2.4rem)] transition-[transform,box-shadow] duration-300 ease-charter hover:-translate-y-1 hover:shadow-[0_22px_40px_-26px_rgba(0,0,0,0.4)] motion-reduce:hover:translate-y-0"
        >
          {item.icon && (
            <span className="mb-[1.1rem] h-[38px] w-[38px] text-gold-ink" aria-hidden="true">
              <Icon name={item.icon} />
            </span>
          )}

          <h3 className="mb-[0.7rem] font-seal text-[0.92rem] font-semibold uppercase tracking-[0.09em]">
            {item.title}
          </h3>

          <p className="flex-1 text-note leading-[1.72] text-ink-text/72">{item.body}</p>

          {item.link && (
            <TextLink to={item.link.to} onPaper className="mt-[1.3rem] self-start">
              {item.link.label}
            </TextLink>
          )}
        </article>
      ))}
    </Reveal>
  );
}
