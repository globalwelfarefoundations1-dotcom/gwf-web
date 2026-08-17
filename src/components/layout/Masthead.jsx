import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn.js';
import { Shell } from '../ui/Shell.jsx';
import { Button } from '../ui/Button.jsx';
import { VisuallyHidden } from '../ui/VisuallyHidden.jsx';
import { useStickyHeader } from '../../hooks/useStickyHeader.js';
import { site } from '../../data/site.js';
import { primaryNav, donateCta } from '../../data/navigation.js';

/* Sticky masthead. It condenses once the page scrolls, and below 940px the
   navigation collapses behind a toggle that closes on Escape, on a link
   press, and on any route change. */

export function Masthead() {
  const [open, setOpen] = useState(false);
  const stuck = useStickyHeader(40);
  const { pathname, hash } = useLocation();

  /* Any navigation closes the panel */
  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      data-print-hide
      className={cn(
        'sticky top-0 z-[100] border-b border-gold/20 bg-ink/95 backdrop-blur-[10px]',
        'transition-[padding,background-color] duration-300 ease-charter'
      )}
    >
      <Shell
        className={cn(
          'flex items-center justify-between gap-6 transition-[padding] duration-300 ease-charter',
          stuck ? 'py-2' : 'py-[0.85rem]'
        )}
      >
        <Link to="/" className="flex items-center gap-[0.85rem] no-underline">
          <img
            src="/assets/img/logo.png"
            alt=""
            width="50"
            height="50"
            className={cn(
              'flex-none transition-[width,height] duration-300 ease-charter',
              stuck ? 'h-10 w-10' : 'h-[50px] w-[50px] max-[520px]:h-10 max-[520px]:w-10'
            )}
          />
          <span className="flex flex-col gap-[2px]">
            <span className="font-seal text-[0.95rem] font-semibold uppercase leading-[1.1] tracking-[0.08em] text-ivory max-[520px]:text-[0.8rem] max-[520px]:tracking-[0.05em]">
              {site.name}
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.19em] text-gold max-[520px]:hidden">
              {site.tagline}
            </span>
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-doc border border-hairline min-[941px]:hidden"
        >
          <span className="relative block h-[1.5px] w-5">
            <span
              className={cn(
                'absolute inset-0 bg-gold transition-opacity duration-200 ease-charter',
                open && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'absolute inset-0 bg-gold transition-transform duration-[280ms] ease-charter',
                open ? 'rotate-45' : '-translate-y-[6px]'
              )}
            />
            <span
              className={cn(
                'absolute inset-0 bg-gold transition-transform duration-[280ms] ease-charter',
                open ? '-rotate-45' : 'translate-y-[4.5px]'
              )}
            />
          </span>
          <VisuallyHidden>Menu</VisuallyHidden>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={cn(
            /* Mobile: a panel that drops out of the masthead */
            'absolute inset-x-0 top-full flex flex-col items-stretch overflow-hidden border-b border-hairline bg-ink px-gutter',
            'transition-[max-height,padding] duration-[350ms] ease-charter',
            open ? 'max-h-[30rem] pb-[1.4rem] pt-[0.6rem]' : 'max-h-0',
            /* Desktop: an ordinary inline row */
            'min-[941px]:static min-[941px]:max-h-none min-[941px]:flex-row min-[941px]:items-center min-[941px]:gap-[0.35rem]',
            'min-[941px]:overflow-visible min-[941px]:border-0 min-[941px]:bg-transparent min-[941px]:p-0'
          )}
        >
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-doc border-b border-gold/12 py-[0.9rem] text-note font-medium tracking-[0.03em] no-underline',
                  'transition-colors duration-200 ease-charter hover:text-gold-light',
                  'min-[941px]:border-0 min-[941px]:px-[0.8rem] min-[941px]:py-[0.55rem]',
                  isActive ? 'text-gold' : 'text-ivory/70'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button
            to={donateCta.to}
            variant="gold"
            className="mt-4 !rounded-full justify-center min-[941px]:ml-[0.6rem] min-[941px]:mt-0"
          >
            {donateCta.label}
          </Button>
        </nav>
      </Shell>
    </header>
  );
}
