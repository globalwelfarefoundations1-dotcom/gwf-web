/* =====================================================================
   Single source of truth for every organisation-level string.

   Everything in this file is a PLACEHOLDER until the foundation's real
   details are granted. Change a value here and it changes everywhere on
   the site — header, footer, contact page, forms and structured data.
   See CONTENT-TODO.md.
   ===================================================================== */

export const site = {
  name: 'Global Welfare Foundation',
  shortName: 'GWF',
  tagline: 'Not-for-profit · Global',
  foundingYear: '2026',
  url: 'https://www.gwffoundation.org',
  legalNote: 'Registered under Section 8 of the Companies Act, 2013',
  description:
    'Global Welfare Foundation is a not-for-profit company incorporated under Section 8 of the Companies Act, 2013, working across education, health, livelihood, protection and humanitarian relief.',
};

export const contact = {
  /* Display form and dialable form of the same number.
     Change these three together — they feed the utility bar, the contact
     page and the schema.org record. */
  phone: '+91 99406 60835',
  phoneHref: '+919940660835',
  phoneStructured: '+91-99406-60835',
  hours: 'Monday to Saturday, 10:00 – 18:00 IST',
  registeredOffice: 'Address to be published',
  email: {
    general: 'info@gwffoundation.org',
    donate: 'donate@gwffoundation.org',
    volunteer: 'volunteer@gwffoundation.org',
    partnerships: 'partnerships@gwffoundation.org',
  },
};

/* Footer icons. Replace href with the real profile, or delete the entry. */
export const socialLinks = [
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
];

export const legalFooter = 'CIN — to be published · Section 8, Companies Act 2013';

/* The operative clause of the Memorandum of Association. Rendered in two
   places, with a slightly longer tail on the About page. */
export const objectClause = {
  lead: 'To promote ',
  emphasis:
    'education, social welfare, healthcare, skill development, environmental protection, women empowerment, child welfare, rural development, livelihood generation, relief to the poor, advancement of science and research, promotion of arts, culture and sports',
  tail: ', and to undertake charitable activities for the benefit of the public without any profit motive.',
  tailFull:
    ', and to undertake charitable activities for the benefit of the public without any profit motive, in accordance with Section 8 of the Companies Act, 2013.',
};

/* Bank details shown alongside the donation form. */
export const bankDetails = [
  { key: 'Account name', value: 'Global Welfare Foundation' },
  { key: 'Bank', value: 'To be published' },
  { key: 'Account number', value: 'To be published' },
  { key: 'IFSC', value: 'To be published' },
  { key: 'UPI ID', value: 'To be published' },
];
