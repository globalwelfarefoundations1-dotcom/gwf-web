import { useState } from 'react';
import { Field, FieldRow, FormNote, FormStatus } from '../ui/Field.jsx';
import { Button, ButtonRow } from '../ui/Button.jsx';
import { Label } from '../ui/Label.jsx';
import { cn } from '../../utils/cn.js';
import { useMailtoForm } from '../../hooks/useMailtoForm.js';
import { contact } from '../../data/site.js';
import { donationAmounts, donationFields, donateNotes } from '../../data/getInvolved.js';

const rupees = new Intl.NumberFormat('en-IN');

/* Preset amounts. Choosing one fills the amount field; typing an amount
   that matches a preset lights it up again. The two stay in step in both
   directions, which is what the original picker did. */
function AmountPicker({ value, onSelect }) {
  return (
    <div className="flex flex-col gap-[0.45rem]">
      <Label onPaper className="mb-[0.2rem]">
        Amount
      </Label>
      <div className="flex flex-wrap gap-[0.7rem]">
        {donationAmounts.map((amount) => {
          const active = String(amount) === String(value);
          return (
            <button
              key={amount}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(String(amount))}
              className={cn(
                'rounded-doc border px-[1.15rem] py-3 font-mono text-note tracking-[0.05em] transition-all duration-200 ease-charter',
                active
                  ? 'border-gold-ink bg-gold-ink text-parchment'
                  : 'border-parchment-3 bg-white/55 text-ink-text hover:border-gold-ink'
              )}
            >
              ₹ {rupees.format(amount)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DonationForm() {
  const [amount, setAmount] = useState('');
  const { status, sending, handleSubmit } = useMailtoForm({
    mailto: contact.email.donate,
    subject: 'Donation enquiry from the website',
  });

  const [[amountField, purposeField], ...remainingRows] = donationFields;

  return (
    <form onSubmit={handleSubmit} className="grid gap-[1.2rem]">
      <AmountPicker value={amount} onSelect={setAmount} />

      <FieldRow>
        <Field
          field={{
            ...amountField,
            value: amount,
            onChange: (event) => setAmount(event.target.value),
          }}
        />
        <Field field={purposeField} />
      </FieldRow>

      {remainingRows.map((row, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <FieldRow key={index}>
          {row.map((field) => (
            <Field key={field.id} field={field} />
          ))}
        </FieldRow>
      ))}

      <ButtonRow>
        <Button type="submit" variant="gold" disabled={sending}>
          {sending ? 'Sending…' : 'Send donation details'}
        </Button>
      </ButtonRow>

      <FormStatus status={status} />

      <FormNote>{donateNotes.formNote}</FormNote>
    </form>
  );
}
