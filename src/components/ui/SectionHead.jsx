import { cn } from '../../utils/cn.js';
import { Label } from './Label.jsx';
import { Reveal } from './Reveal.jsx';
import { useOnPaper } from './Band.jsx';

/* Eyebrow, title, optional standfirst — the opening of nearly every
   section. Picks its own colours from the band it is sitting on. */
export function SectionHead({ eyebrow, title, standfirst, centred = false, className, children }) {
  const onPaper = useOnPaper();

  return (
    <Reveal
      className={cn(
        'mb-[clamp(2.2rem,4vw,3.4rem)] max-w-[44rem]',
        centred && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <Label onPaper={onPaper} className="mb-[0.9rem]">
          {eyebrow}
        </Label>
      )}

      {title && (
        <h2 className="mb-[0.9rem] font-voice text-h2 font-light leading-[1.3] tracking-[-0.01em]">
          {title}
        </h2>
      )}

      {standfirst && (
        <p
          className={cn(
            'max-w-[40rem]',
            centred && 'mx-auto',
            onPaper ? 'text-ink-text/72' : 'text-ivory/70'
          )}
        >
          {standfirst}
        </p>
      )}

      {children}
    </Reveal>
  );
}
