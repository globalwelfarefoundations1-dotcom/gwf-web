import { Link } from 'react-router-dom';
import { Shell } from '../ui/Shell.jsx';

/* Opening block of every inner page: breadcrumb, title, standfirst. */
export function PageHead({ crumb, title, lead }) {
  return (
    <section className="guilloche-strong relative overflow-hidden bg-[radial-gradient(100%_120%_at_85%_10%,#0f3a27_0%,transparent_60%),var(--color-ink)] pb-[clamp(2.6rem,5vw,4.5rem)] pt-[clamp(3rem,6vw,5.5rem)]">
      <Shell maxWidth="max-w-[46rem]">
        <p className="font-mono text-meta uppercase tracking-[0.12em] text-ivory/45">
          <Link to="/" className="text-gold no-underline hover:text-gold-light">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          {crumb}
        </p>

        <h1 className="mb-[1.2rem] mt-4 font-voice text-h1 font-light leading-[1.12] tracking-[-0.02em]">
          {title}
        </h1>

        <p className="max-w-[38rem] font-voice text-lead font-light leading-[1.6] text-ivory/70">
          {lead}
        </p>
      </Shell>
    </section>
  );
}
