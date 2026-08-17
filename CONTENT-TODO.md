# Before this site goes live

Everything below is a **placeholder**. The site is built and works, but these
values are invented stand-ins and must be replaced with the foundation's real
details before it is published.

Nothing on the site claims impact figures, beneficiary numbers, partner logos or
testimonials — those were deliberately left out rather than faked. Add them once
they are real.

The good news after the React conversion: each of these is now a **single edit
in one file**, not a find-and-replace across five HTML pages.

---

## 1. Contact details — `src/data/site.js`

Open `src/data/site.js` and replace the values in the `contact` object. They
feed the utility bar, the footer, the contact page, every form target and the
schema.org record automatically.

| Field | Currently | Replace with |
|---|---|---|
| `contact.phone` | `+91 99406 60835` | ✅ real number, in place |
| `contact.phoneHref` | `+919940660835` | ✅ real number, in place |
| `contact.phoneStructured` | `+91-99406-60835` | ✅ real number, in place |
| `contact.email.general` | `info@gwffoundation.org` | general enquiries address |
| `contact.email.donate` | `donate@gwffoundation.org` | donations address |
| `contact.email.volunteer` | `volunteer@gwffoundation.org` | volunteering address |
| `contact.email.partnerships` | `partnerships@gwffoundation.org` | partnerships address |
| `contact.registeredOffice` | `Address to be published` | the registered office address |
| `site.url` | `https://www.gwffoundation.org` | the real domain |

`site.url` is used for canonical URLs and Open Graph tags. Also update the
domain in `public/sitemap.xml` and `public/robots.txt`, which are static files.

## 2. Registration numbers

The **Legal status** section on About is currently **hidden** — it is not
rendered anywhere on the site while the registrations are in process. The copy
still exists in `src/data/about.js` with step-by-step instructions above the
`legalStatus` export for switching it back on once CIN, PAN, 12A, 80G and CSR-1
are granted. Restoring it also means re-adding the footer link in
`src/data/navigation.js`.

Still visible and still placeholders:

- `src/data/site.js` → `legalFooter`: the `CIN — to be published` line in the
  footer of every page.
- `src/data/site.js` → `bankDetails`: bank name, account number, IFSC, UPI ID.

**Do not** publish an 80G claim before the certificate is granted. The site
says so explicitly in `getInvolved.js` (`donateNotes.taxNote`) and `contact.js`
(`faqs`). Update both together — and the hidden `legalStatus.rows` if you
restore that section.

## 3. Social media links — `src/data/site.js`

`socialLinks` currently points every icon at `#`. Replace each `href` with the
real profile URL, or delete the entry — the footer renders whatever is in the
array, so removing one removes its icon.

## 4. Forms

**This is the intended behaviour, not an oversight.** Every form on the site
composes the message and hands it to the visitor's own email client,
pre-addressed and pre-filled. Nothing passes through a third-party server, and
there is nothing to sign up for or pay for.

The one weakness of that approach: a `mailto:` link does nothing at all on a
machine with no mail app configured (someone using only webmail in a browser,
for instance). To cover that, every form shows the composed link and the plain
address after submitting, so the visitor can click through or copy the address
by hand rather than assuming the form broke.

If the foundation later wants messages to arrive without the visitor pressing
send in their own client, create a `.env` file:

```sh
VITE_FORM_ENDPOINT=https://formspree.io/f/XXXXXXX
```

`src/hooks/useMailtoForm.js` will POST the form as JSON to that URL instead,
and fall back to the mail client if the request fails. Any service that accepts
a JSON POST works — Formspree, Web3Forms, or your own handler.

## 5. Donations

There is no payment gateway. The donate form collects intent and the bank
details are shown alongside. To take payments online you will need a gateway
account (Razorpay, Instamojo, PayU and Cashfree all support Section 8
companies) — that requires the bank account, PAN and registration documents
first.

## 6. Photographs

The design deliberately works without photographs — no stock imagery was used
and no image slots are sitting empty. When you have real photographs from the
field, the natural places to add them are:

- A band under the hero on the home page
- The `focus__aside` column of each pillar block on What we do
- A new "Stories" section, once there are stories

Use photographs of people who have given permission, and name them.

## 7. Sections worth adding later

- **Founder's message** — a signed note with a photograph, on About.
- **Board profiles** — names, roles and short bios under Governance.
- **Annual report and accounts** — a downloads block, once the first year closes.
- **News / activity log** — even short posts prove the organisation is active.
- **Partners** — only once there are real ones.

Each of these is a new entry in the relevant `src/data/*.js` file plus, if the
shape is new, one component in `src/components/sections/`.
