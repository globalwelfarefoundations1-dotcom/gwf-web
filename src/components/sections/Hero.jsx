import { Shell } from '../ui/Shell.jsx';
import { Label } from '../ui/Label.jsx';
import { Button, ButtonRow } from '../ui/Button.jsx';
import { Seal } from './Seal.jsx';
import { hero } from '../../data/home.js';

/* Home page opening: the statement on the left, the turning seal on the
   right. Below 900px the seal moves above the copy. */
export function Hero() {
  return (
    <section className="guilloche-strong relative overflow-hidden bg-[radial-gradient(120%_90%_at_78%_22%,#0f3a27_0%,transparent_58%),linear-gradient(180deg,#071e14_0%,var(--color-ink)_100%)] pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(3.5rem,7vw,6.5rem)]">
      <Shell className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center gap-[clamp(2.5rem,6vw,5rem)] max-[900px]:grid-cols-1">
        <div className="max-[900px]:order-2">
          <Label>{hero.eyebrow}</Label>

          <h1 className="mb-[1.4rem] mt-[1.1rem] font-voice text-display font-light leading-[1.02] tracking-[-0.02em]">
            {hero.titleLine1}
            <br />
            <em className="italic text-gold-light">{hero.titleEmphasis}</em>
          </h1>

          <p className="mb-8 max-w-[33rem] font-voice text-lead font-light leading-[1.6] text-ivory/70">
            {hero.lead}
          </p>

          <ButtonRow>
            <Button to="/what-we-do" variant="gold" withArrow>
              See what we do
            </Button>
            <Button to="/get-involved" variant="outline">
              Partner with us
            </Button>
          </ButtonRow>

          <p className="mt-[2.4rem] max-w-[32rem] border-t border-hairline pt-[1.2rem] font-mono text-meta leading-[1.8] tracking-[0.04em] text-ivory/45">
            {hero.legal}
          </p>
        </div>

        <div className="max-[900px]:order-1">
          <Seal />
        </div>
      </Shell>
    </section>
  );
}
