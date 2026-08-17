import { Button } from '../ui/Button.jsx';
import { VisuallyHidden } from '../ui/VisuallyHidden.jsx';
import { useMailtoForm } from '../../hooks/useMailtoForm.js';
import { contact } from '../../data/site.js';

/* Footer newsletter signup — the one form that sits on a dark band, so it
   carries its own input styling rather than using <Field>. */
export function SubscribeForm() {
  const { status, sending, handleSubmit } = useMailtoForm({
    mailto: contact.email.general,
    subject: 'Newsletter signup',
  });

  return (
    <form onSubmit={handleSubmit} className="mt-[0.4rem] flex flex-wrap gap-[0.6rem]">
      <VisuallyHidden as="label" htmlFor="sub-email">
        Email address
      </VisuallyHidden>

      <input
        id="sub-email"
        name="Email"
        type="email"
        required
        placeholder="Your email"
        className="flex-[1_1_12rem] rounded-doc border border-hairline bg-white/5 px-[0.9rem] py-[0.7rem] font-body text-note text-ivory placeholder:text-ivory/45 focus:border-gold focus:outline-none"
      />

      <Button type="submit" variant="gold" disabled={sending}>
        {sending ? 'Sending…' : 'Join'}
      </Button>

      {status && (
        <p role="status" aria-live="polite" className="w-full font-mono text-meta leading-[1.7] text-ivory/70">
          {status.message}
          {status.href && (
            <>
              {' '}
              <a className="border-b border-current text-gold no-underline" href={status.href}>
                Open your email app
              </a>
              .
            </>
          )}
        </p>
      )}
    </form>
  );
}
