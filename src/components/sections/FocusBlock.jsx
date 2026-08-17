import { cn } from '../../utils/cn.js';
import { Icon } from '../icons/Icons.jsx';
import { Label } from '../ui/Label.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { Body, RuleList } from '../ui/Prose.jsx';
import { useOnPaper } from '../ui/Band.jsx';

/* One pillar, in detail: icon, ordinal and title in a narrow aside, the
   argument and the activity list in the wide column. Blocks are separated
   by a hairline; the first has none. */
export function FocusBlock({ pillar, first = false }) {
  const onPaper = useOnPaper();

  return (
    <Reveal
      as="article"
      id={pillar.id}
      className={cn(
        'grid scroll-mt-28 grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-[clamp(1.8rem,5vw,4rem)] py-[clamp(2.2rem,5vw,3.6rem)] max-[800px]:grid-cols-1',
        first
          ? 'border-t-0 pt-0'
          : cn('border-t', onPaper ? 'border-hairline-ink' : 'border-hairline')
      )}
    >
      <div className="flex flex-col gap-4">
        <span
          className={cn('h-[52px] w-[52px]', onPaper ? 'text-gold-ink' : 'text-gold')}
          aria-hidden="true"
        >
          <Icon name={pillar.icon} />
        </span>

        <Label onPaper={onPaper}>{pillar.ordinal}</Label>

        <h2 className="font-voice text-h2 font-light leading-[1.12] tracking-[-0.015em]">
          {pillar.detailName}
        </h2>

        <p
          className={cn(
            'font-mono text-meta tracking-[0.06em]',
            onPaper ? 'text-ink-text/72' : 'text-ivory/45'
          )}
        >
          {pillar.goals}
        </p>
      </div>

      <div>
        <Body>{pillar.detail}</Body>
        <RuleList items={pillar.activities} />
      </div>
    </Reveal>
  );
}
