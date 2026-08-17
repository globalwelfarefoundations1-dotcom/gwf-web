import { Shell } from '../ui/Shell.jsx';
import { Label } from '../ui/Label.jsx';
import { Button, ButtonRow } from '../ui/Button.jsx';

/* Closing band, with the seal bled off the right edge at low opacity.
   Every page ends with one. */
export function CtaBand({ eyebrow, title, body, actions = [] }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(90%_130%_at_15%_20%,#10402c_0%,transparent_60%),var(--color-ink-soft)] py-[clamp(3.4rem,7vw,5.5rem)]">
      <img
        src="/assets/img/logo.png"
        alt=""
        aria-hidden="true"
        width="512"
        height="512"
        className="pointer-events-none absolute right-[-6rem] top-1/2 w-[22rem] -translate-y-1/2 opacity-[0.07]"
      />

      <Shell className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-8 max-[780px]:grid-cols-1">
        <div>
          <Label>{eyebrow}</Label>

          <h2 className="mt-[0.9rem] max-w-[26rem] font-voice text-h2 font-light leading-[1.3] tracking-[-0.015em]">
            {title}
          </h2>

          <p className="mt-[0.9rem] max-w-[32rem] text-ivory/70">{body}</p>
        </div>

        <ButtonRow>
          {actions.map((action) => (
            <Button key={action.label} to={action.to} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </ButtonRow>
      </Shell>
    </section>
  );
}
