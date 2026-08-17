import { cn } from '../../utils/cn.js';
import { Icon } from '../icons/Icons.jsx';
import { Reveal } from '../ui/Reveal.jsx';

/* Grid of pillar cells. Each cell carries its own hairline as a ring, so
   an empty grid track stays invisible and the 1px gap reads as a rule.

   `five` lays the set out three across with the fifth widened to close the
   row — the arrangement the five pillars were designed for. */

export function PillarCard({ pillar, showIcon = true, className }) {
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-[0.9rem] bg-ink-soft p-[clamp(1.6rem,3vw,2.3rem)]',
        'ring-1 ring-hairline transition-colors duration-300 ease-charter hover:bg-seal',
        className
      )}
    >
      {showIcon && pillar.icon && (
        <span className="h-[42px] w-[42px] text-gold" aria-hidden="true">
          <Icon name={pillar.icon} />
        </span>
      )}

      <h3 className="font-seal text-[0.95rem] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-ivory">
        {pillar.name ?? pillar.title}
      </h3>

      <p className="text-note leading-[1.7] text-ivory/70">{pillar.summary ?? pillar.body}</p>
    </article>
  );
}

export function PillarGrid({ items, five = false, showIcon = true, className }) {
  return (
    <Reveal
      className={cn(
        'grid gap-px',
        five
          ? 'grid-cols-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1'
          : 'grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]',
        className
      )}
    >
      {items.map((item, index) => (
        <PillarCard
          key={item.id}
          pillar={item}
          showIcon={showIcon}
          className={cn(
            five && index === items.length - 1 && 'col-span-2 max-[620px]:col-span-1'
          )}
        />
      ))}
    </Reveal>
  );
}
