import { cn } from '../../utils/cn.js';
import { Field, FieldRow, FormNote, FormStatus } from '../ui/Field.jsx';
import { Button, ButtonRow } from '../ui/Button.jsx';
import { useMailtoForm } from '../../hooks/useMailtoForm.js';

/* Renders a form from a schema in data/ and submits it.

   With no endpoint configured it opens the visitor's mail client with the
   answers filled in; set VITE_FORM_ENDPOINT to POST to a real service
   instead. Either way the markup and validation are the same. */

export function MailtoForm({
  fields,
  mailto,
  subject,
  submitLabel,
  submitVariant = 'onpaper',
  note,
  children,
  className,
}) {
  const { status, sending, handleSubmit } = useMailtoForm({ mailto, subject });

  return (
    <form onSubmit={handleSubmit} className={cn('grid gap-[1.2rem]', className)} noValidate={false}>
      {children}

      {fields.map((row, index) => (
        // Schema rows are positional and never reordered
        // eslint-disable-next-line react/no-array-index-key
        <FieldRow key={index}>
          {row.map((field) => (
            <Field key={field.id} field={field} />
          ))}
        </FieldRow>
      ))}

      <ButtonRow>
        <Button type="submit" variant={submitVariant} disabled={sending}>
          {sending ? 'Sending…' : submitLabel}
        </Button>
      </ButtonRow>

      <FormStatus status={status} />

      {note && <FormNote>{note}</FormNote>}
    </form>
  );
}
