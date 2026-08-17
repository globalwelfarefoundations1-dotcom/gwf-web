import { cn } from '../../utils/cn.js';
import { Label } from '../ui/Label.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { useOnPaper } from '../ui/Band.jsx';

/* Items introduced by a hairline above them: vision/mission/method, how we
   work, first-year activity, and the contact FAQ all use this shape.

   `columns="two"` forces two-up, which reads better for four items than
   three plus an orphan. */
export function ApproachGrid({ items, columns = 'auto', className }) {
  const onPaper = useOnPaper();

  return (
    <Reveal
      className={cn(
        'grid gap-[clamp(1.6rem,4vw,3rem)]',
        columns === 'two'
          ? 'grid-cols-2 max-[720px]:grid-cols-1'
          : columns === 'one'
            ? 'grid-cols-1'
            : 'grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn('border-t pt-[1.4rem]', onPaper ? 'border-hairline-ink' : 'border-hairline')}
        >
          {item.eyebrow && <Label onPaper={onPaper}>{item.eyebrow}</Label>}

          <h3 className="mb-[0.7rem] mt-[0.8rem] font-voice text-h3 leading-[1.12]">
            {item.title}
          </h3>

          <p
            className={cn(
              'text-note leading-[1.75]',
              onPaper ? 'text-ink-text/72' : 'text-ivory/70'
            )}
          >
            {item.body}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
