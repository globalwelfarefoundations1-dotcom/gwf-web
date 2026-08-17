import { Shell } from '../components/ui/Shell.jsx';
import { Label } from '../components/ui/Label.jsx';
import { Button, ButtonRow } from '../components/ui/Button.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { seo } from '../data/seo.js';
import { site } from '../data/site.js';
import { notFound } from '../data/notFound.js';

export default function NotFound() {
  useSeo(seo.notFound);

  return (
    <section className="guilloche-strong relative grid min-h-[70vh] place-items-center overflow-hidden bg-[radial-gradient(120%_90%_at_78%_22%,#0f3a27_0%,transparent_58%),linear-gradient(180deg,#071e14_0%,var(--color-ink)_100%)] py-band">
      <Shell maxWidth="max-w-[40rem]" className="text-center">
        <img
          src="/assets/img/logo.png"
          alt={site.name}
          width="110"
          height="110"
          className="mx-auto mb-8 h-[110px] w-[110px]"
        />

        <Label>{notFound.eyebrow}</Label>

        <h1 className="mb-[1.2rem] mt-4 font-voice text-h1 font-light leading-[1.12]">
          {notFound.title}
        </h1>

        <p className="mb-8 text-ivory/70">{notFound.body}</p>

        <ButtonRow className="justify-center">
          {notFound.actions.map((action) => (
            <Button key={action.label} to={action.to} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </ButtonRow>
      </Shell>
    </section>
  );
}
