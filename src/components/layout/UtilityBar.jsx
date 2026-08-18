import { Shell } from '../ui/Shell.jsx';
import { site, contact } from '../../data/site.js';

/* Thin strip above the masthead: the legal note on the left, the two
   direct contact routes on the right. */
export function UtilityBar() {
  return (
    <div
      data-print-hide
      className="border-b border-hairline-soft bg-ink-deep font-mono text-meta tracking-[0.06em] text-ivory/70"
    >
      <Shell className="flex flex-wrap items-center justify-between gap-x-[1.6rem] gap-y-[0.4rem] py-2">
        <span className="text-ivory/45">{site.legalNote}</span>
        <span className="flex flex-wrap gap-x-[1.4rem] gap-y-[0.4rem]">
          <a className="no-underline hover:text-gold-light" href={`tel:${contact.phoneHref}`}>
            {contact.phone}
          </a>
          {/* <a
            className="no-underline hover:text-gold-light"
            href={`mailto:${contact.email.general}`}
          >
            {contact.email.general}
          </a> */}
        </span>
      </Shell>
    </div>
  );
}
