import { Link } from 'react-router-dom';
import { Shell } from '../ui/Shell.jsx';
import { Icon } from '../icons/Icons.jsx';
import { SubscribeForm } from '../forms/SubscribeForm.jsx';
import { site, socialLinks, legalFooter } from '../../data/site.js';
import { footerNav } from '../../data/navigation.js';

const columnHeading =
  'mb-[1.1rem] font-mono text-meta font-medium uppercase tracking-[0.15em] text-gold';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-print-hide
      className="border-t border-gold/20 bg-ink-deep pb-8 pt-[clamp(3rem,6vw,4.5rem)] text-note"
    >
      <Shell>
        <div className="grid grid-cols-[minmax(0,1.25fr)_repeat(auto-fit,minmax(9rem,1fr))] gap-[clamp(2rem,4vw,3rem)] pb-[2.6rem] max-md:grid-cols-1">
          <div className="flex max-w-[22rem] flex-col gap-4">
            <img src="/assets/img/logo.png" alt={site.name} width="62" height="62" className="h-[62px] w-[62px]" />
            <p className="leading-[1.75] text-ivory/45">{site.description}</p>

            <div className="flex gap-[0.6rem]">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ivory/70 transition-colors duration-[250ms] ease-charter hover:border-gold hover:text-gold-light"
                >
                  <span className="h-4 w-4">
                    <Icon name={social.id} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((column) => (
            <nav key={column.id} aria-labelledby={`footer-${column.id}`}>
              <h2 id={`footer-${column.id}`} className={columnHeading}>
                {column.title}
              </h2>
              <ul className="m-0 list-none p-0">
                {column.links.map((link) => (
                  <li key={link.to + link.label} className="mb-[0.55rem]">
                    <Link
                      to={link.to}
                      className="text-ivory/70 no-underline transition-colors hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className={columnHeading}>Newsletter</h2>
            <p className="mb-[0.8rem] text-ivory/45">
              Occasional updates on what we are building. No fundraising spam.
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-[1.6rem] gap-y-[0.6rem] border-t border-hairline-soft pt-[1.6rem] font-mono text-meta tracking-[0.05em] text-ivory/45">
          <span>
            &copy; {year} {site.name}. All rights reserved.
          </span>
          <span>{legalFooter}</span>
        </div>
      </Shell>
    </footer>
  );
}
