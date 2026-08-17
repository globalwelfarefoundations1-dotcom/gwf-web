import { cn } from '../../utils/cn.js';

/* Form controls. The forms all sit on parchment, so these are styled for
   that surface only — a dark-band input would be a different component. */

const controlClasses =
  'rounded-doc border border-parchment-3 bg-white/70 px-[0.95rem] py-[0.8rem] font-body text-body text-ink-text ' +
  'transition-[border-color,background-color] duration-200 ease-charter ' +
  'focus:border-gold-ink focus:bg-white focus:outline-none';

export function FieldLabel({ htmlFor, children, aside }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-mono text-meta uppercase tracking-[0.12em] text-gold-ink"
    >
      {children}
      {aside && <span className="normal-case tracking-normal"> {aside}</span>}
    </label>
  );
}

/* Renders one descriptor from a form schema in data/. */
export function Field({ field }) {
  const {
    id,
    name,
    label,
    labelAside,
    type = 'text',
    options,
    rows = 4,
    hint,
    ...rest
  } = field;

  return (
    <div className="flex flex-col gap-[0.45rem]">
      <FieldLabel htmlFor={id} aside={labelAside}>
        {label}
      </FieldLabel>

      {type === 'select' ? (
        <select id={id} name={name} className={controlClasses} {...rest}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          className={cn(controlClasses, 'min-h-[8rem] resize-y')}
          {...rest}
        />
      ) : (
        <input id={id} name={name} type={type} className={controlClasses} {...rest} />
      )}

      {hint && <p className="text-meta text-ink-text/72">{hint}</p>}
    </div>
  );
}

/* A row of fields — one column on narrow screens, side by side above 14rem
   per column. */
export function FieldRow({ children }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-[1.2rem]">
      {children}
    </div>
  );
}

/* Status message shown after a submit attempt.

   When the message was handed to the visitor's mail client, this also
   offers the composed link and the plain address — a `mailto:` navigation
   silently does nothing on a machine with no mail app configured, and
   without this the visitor would think the form had failed. */
export function FormStatus({ status }) {
  if (!status) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="border-l-[3px] border-gold-ink bg-gold-ink/[0.08] px-4 py-[0.8rem] font-mono text-note text-ink-text"
    >
      <p className="m-0">{status.message}</p>

      {status.href && (
        <p className="m-0 mt-2 leading-[1.7] text-ink-text/72">
          Nothing happened?{' '}
          <a className="border-b border-current text-gold-ink no-underline" href={status.href}>
            Open your email app
          </a>
          , or write to{' '}
          <a
            className="border-b border-current text-gold-ink no-underline"
            href={`mailto:${status.address}`}
          >
            {status.address}
          </a>
          .
        </p>
      )}
    </div>
  );
}

/* Small print under a form. */
export function FormNote({ children }) {
  return (
    <p className="font-mono text-meta leading-[1.8] tracking-[0.03em] text-ink-text/72">
      {children}
    </p>
  );
}
