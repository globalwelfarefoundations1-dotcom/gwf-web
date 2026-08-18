/* Every icon in the site, in one registry.

   Line icons are drawn on a 48-unit grid and inherit `currentColor`, so
   colour is set by the surrounding band. Brand marks are filled 24-unit
   glyphs. Look one up with <Icon name="education" /> — nothing here needs
   an icon-font or an external package. */

const lineProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const cardProps = { ...lineProps, strokeWidth: 1.5 };

const brandProps = { viewBox: '0 0 24 24', fill: 'currentColor' };

/* ---------- Pillar icons ---------- */

const Education = (props) => (
  <svg {...lineProps} {...props}>
    <path d="M24 15.5 6 10l18-5.5L42 10Z" />
    <path d="M24 15.5V27" />
    <path d="M13 13.8v9.9c0 3.5 4.9 6.3 11 6.3s11-2.8 11-6.3v-9.9" />
    <path d="M39.5 12v10.5" />
    <path d="M37.5 34h4l-2-9Z" />
  </svg>
);

const Health = (props) => (
  <svg {...lineProps} {...props}>
    <path d="M24 40S8 30.5 8 19.8A9 9 0 0 1 24 14a9 9 0 0 1 16 5.8C40 30.5 24 40 24 40Z" />
    <path d="M11 24.5h7l3-5.5 4 11 3-5.5h8" />
  </svg>
);

const Economic = (props) => (
  <svg {...lineProps} {...props}>
    <path d="M8 40c3-7 9-10 16-10s13 3 16 10" />
    <path d="M24 30c0-6 3-10 9-11-1 6-4 10-9 11Z" />
    <path d="M24 30c0-6-3-10-9-11 1 6 4 10 9 11Z" />
    <path d="M24 30V17" />
    <circle cx="24" cy="11" r="4.5" />
  </svg>
);

const Protection = (props) => (
  <svg {...lineProps} {...props}>
    <path d="M24 5 9 10.5v12c0 10 6.4 17.6 15 20.5 8.6-2.9 15-10.5 15-20.5v-12Z" />
    <circle cx="24" cy="20" r="3.6" />
    <path d="M17.5 32.5c1.1-3.6 3.5-5.4 6.5-5.4s5.4 1.8 6.5 5.4" />
  </svg>
);

const Humanitarian = (props) => (
  <svg {...lineProps} {...props}>
    <path d="M24 9a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z" />
    <path d="M13 20h22M24 9c3.5 4 3.5 18 0 22M24 9c-3.5 4-3.5 18 0 22" />
    <path d="M6 42c2.5-5.5 7-8.5 12-8.5" />
    <path d="M42 42c-2.5-5.5-7-8.5-12-8.5" />
  </svg>
);

/* ---------- "Ways to help" card icons ---------- */

const Heart = (props) => (
  <svg {...cardProps} {...props}>
    <path d="M24 39S9 30.5 9 20.8A8.4 8.4 0 0 1 24 15.5a8.4 8.4 0 0 1 15 5.3C39 30.5 24 39 24 39Z" />
  </svg>
);

const Volunteer = (props) => (
  <svg {...cardProps} {...props}>
    <circle cx="18" cy="15" r="6" />
    <path d="M6 39c0-6.6 5.4-11 12-11s12 4.4 12 11" />
    <path d="M33 17h9M37.5 12.5v9" />
  </svg>
);

const Briefcase = (props) => (
  <svg {...cardProps} {...props}>
    <path d="M8 21h32v18H8z" />
    <path d="M18 21v-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5" />
    <path d="M8 28h32M24 26v4" />
  </svg>
);

/* ---------- Social marks ---------- */

const Facebook = (props) => (
  <svg {...brandProps} {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.29-.04-1.27-.12-2.4-.12-2.38 0-4 1.45-4 4.11V9.9H7.6V13h2.7v8z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedIn = (props) => (
  <svg {...brandProps} {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zM9.5 9h3.8v1.65h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z" />
  </svg>
);

const YouTube = (props) => (
  <svg {...brandProps} {...props}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8M10 15.1V8.9l5.2 3.1z" />
  </svg>
);

export const icons = {
  education: Education,
  health: Health,
  economic: Economic,
  protection: Protection,
  humanitarian: Humanitarian,
  heart: Heart,
  volunteer: Volunteer,
  briefcase: Briefcase,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  youtube: YouTube,
};

export function Icon({ name, className = '', ...props }) {
  const Glyph = icons[name];
  if (!Glyph) return null;
  return <Glyph className={`h-full w-full ${className}`} aria-hidden="true" focusable="false" {...props} />;
}


// projects icons
// Small stroke-style icon set, kept as plain SVGs so no icon package is required.
const base = "stroke-current fill-none stroke-[1.8]";
const svgProps = { strokeLinecap: "round", strokeLinejoin: "round" };

export function SearchIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function XIcon({ className = "w-[15px] h-[15px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-[15px] h-[15px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-[13px] h-[13px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function PlayIcon({ className = "w-[15px] h-[15px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function VideoIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function FolderIcon({ className = "w-11 h-11" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function PersonIcon({ className = "w-[15px] h-[15px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <path d="M3 21h18" />
      <path d="M6 21V7l6-4 6 4v14" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

export function ServiceIcon({ className = "w-[15px] h-[15px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-[15px] h-[15px]" }) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...svgProps}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}