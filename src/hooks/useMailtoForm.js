import { useCallback, useRef, useState } from 'react';

/* Form handling with no third-party service.

   Submitting composes the message and hands it to the visitor's own email
   client, pre-addressed and pre-filled. Nothing is stored or sent through
   anyone else's server, and no enquiry is silently lost.

   Because a browser may block or ignore a `mailto:` navigation (common in
   webmail-only setups), the composed link is also returned so the form can
   show it as a fallback the visitor can click, along with the address to
   copy by hand.

   If you later sign up for a form service, set VITE_FORM_ENDPOINT and this
   hook will POST as JSON instead, falling back to the mail client if the
   request fails. See CONTENT-TODO.md. */

const DEFAULT_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

function composeMailto({ mailto, subject, entries }) {
  const body = entries
    .filter(([, value]) => String(value).trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  return (
    `mailto:${mailto}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}

export function useMailtoForm({ mailto, subject = 'Website enquiry', endpoint = DEFAULT_ENDPOINT }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // { type, message, href?, address? }
  const [sending, setSending] = useState(false);

  const openMailClient = useCallback(
    (entries, message) => {
      const href = composeMailto({ mailto, subject, entries });

      window.location.href = href;

      setStatus({
        type: 'info',
        message:
          message ??
          'Your email app should now be opening with these details filled in — press send there and it reaches us.',
        href,
        address: mailto,
      });
    },
    [mailto, subject]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const entries = Array.from(new FormData(form).entries());

      if (!endpoint) {
        openMailClient(entries);
        return;
      }

      setSending(true);
      setStatus(null);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...Object.fromEntries(entries), _subject: subject }),
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        form.reset();
        setStatus({ type: 'info', message: 'Thank you — your message has reached us.' });
      } catch {
        /* Never lose an enquiry: fall back to the mail client. */
        openMailClient(
          entries,
          'We could not send that directly. Your email app is opening with the details instead.'
        );
      } finally {
        setSending(false);
      }
    },
    [endpoint, openMailClient, subject]
  );

  return { formRef, status, sending, handleSubmit };
}
