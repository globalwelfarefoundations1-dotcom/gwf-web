import { contact } from './site.js';

/* Copy and form schema for the Contact page. Addresses are pulled from
   data/site.js so there is only ever one copy of them. */

export const contactHead = {
  crumb: 'Contact',
  title: 'Write to us.',
  lead: 'Whether it is a donation, an offer of help, a proposal, or a question about how we are set up — a real person reads every message and replies.',
};

export const contactIntro = {
  eyebrow: 'Reach us',
  title: 'Directly, if you prefer.',
};

/* `mailto` marks a value that should render as a mailto: link,
   `tel` as a tel: link. */
export const contactRows = [
  { key: 'Registered office', value: contact.registeredOffice },
  { key: 'General', value: contact.email.general, mailto: true },
  { key: 'Donations', value: contact.email.donate, mailto: true },
  { key: 'Volunteering', value: contact.email.volunteer, mailto: true },
  { key: 'Partnerships', value: contact.email.partnerships, mailto: true },
  { key: 'Phone', value: contact.phone, tel: contact.phoneHref },
  { key: 'Hours', value: contact.hours },
];

export const grievanceNote = {
  before: 'For grievances or anything you would rather raise privately, write to ',
  after: ' marked for the attention of the board.',
};

export const contactFields = [
  [
    {
      id: 'c-name',
      name: 'Name',
      label: 'Your name',
      type: 'text',
      autoComplete: 'name',
      required: true,
    },
    {
      id: 'c-email',
      name: 'Email',
      label: 'Email',
      type: 'email',
      autoComplete: 'email',
      required: true,
    },
  ],
  [
    { id: 'c-phone', name: 'Phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    {
      id: 'c-subject',
      name: 'Subject',
      label: 'This is about',
      type: 'select',
      options: [
        'General enquiry',
        'Donation',
        'Volunteering',
        'Corporate or CSR partnership',
        'Media',
        'Grievance',
      ],
    },
  ],
  [
    {
      id: 'c-message',
      name: 'Message',
      label: 'Message',
      type: 'textarea',
      rows: 6,
      required: true,
    },
  ],
];

export const contactFormNote = 'We aim to reply within three working days.';

export const faqIntro = {
  eyebrow: 'Before you write',
  title: 'Three things people usually ask.',
};

export const faqs = [
  {
    id: 'tax',
    title: 'Are donations tax deductible?',
    body: 'Not yet. Our 80G registration is in process. We will not claim deductibility until the certificate is granted, and it will be printed on your receipt when it is.',
  },
  {
    id: 'csr',
    title: 'Can you accept CSR funds?',
    body: 'CSR-1 registration with the Ministry of Corporate Affairs is in process. We will confirm the position in writing before any company commits funds.',
  },
  {
    id: 'fcra',
    title: 'Can you accept foreign donations?',
    body: 'No. We are not registered under the Foreign Contribution (Regulation) Act and cannot receive contributions from foreign sources.',
  },
];
