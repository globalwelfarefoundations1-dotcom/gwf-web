/* Copy and form schemas for the Get involved page.

   Forms are described as data: an array of "rows", each row an array of
   field descriptors. <MailtoForm> renders them, so adding a field is a
   one-line change here rather than a change to JSX. */

export const involvedHead = {
  crumb: 'Get involved',
  title: 'Money, time, or a door opened. All three count.',
  lead: 'A foundation in its first year needs supporters who are willing to back an intention rather than a track record. In return, you get to see exactly how the first rupee and the first hour were spent.',
};

/* ---------- Donate ---------- */

export const donateIntro = {
  eyebrow: 'Donate',
  title: 'Give to a pillar, and we will report against it.',
  standfirst:
    'Choose an amount and the work it should go to. Every contribution is receipted, recorded against the object it was given for, and included in our annual accounts.',
};

export const donationAmounts = [1000, 2500, 5000, 10000, 25000];

export const donationPurposes = [
  'Wherever it is needed most',
  'Education',
  'Health & nutrition',
  'Economic well-being',
  'Child protection',
  'Humanitarian relief',
];

export const donationFields = [
  [
    {
      id: 'donation-amount',
      name: 'Amount (INR)',
      label: 'Amount in rupees',
      type: 'number',
      min: 100,
      step: 100,
      placeholder: 'Enter an amount',
      required: true,
    },
    {
      id: 'donation-purpose',
      name: 'Purpose',
      label: 'Direct it to',
      type: 'select',
      options: donationPurposes,
    },
  ],
  [
    {
      id: 'donor-name',
      name: 'Name',
      label: 'Your name',
      type: 'text',
      autoComplete: 'name',
      required: true,
    },
    {
      id: 'donor-email',
      name: 'Email',
      label: 'Email',
      type: 'email',
      autoComplete: 'email',
      required: true,
    },
  ],
  [
    { id: 'donor-phone', name: 'Phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    {
      id: 'donor-pan',
      name: 'PAN',
      label: 'PAN',
      labelAside: '(for the receipt)',
      type: 'text',
      maxLength: 10,
    },
  ],
  [
    {
      id: 'donor-note',
      name: 'Note',
      label: 'Anything we should know',
      type: 'textarea',
      rows: 3,
    },
  ],
];

export const donateNotes = {
  formNote:
    'Online payment is not live yet. Sending this form puts us in touch with you and we will confirm the transfer details and issue a receipt. Bank and UPI details are alongside.',
  documentLabel: 'Direct transfer',
  receiptNote: 'Receipts issued for every contribution',
  taxNote:
    'our 80G registration is still in process. Until it is granted we will not claim that donations are deductible. When it is granted, the certificate number will appear on this page and on your receipt.',
  foreignNote:
    'we are not registered under FCRA and cannot accept donations from foreign sources.',
};

/* ---------- Volunteer ---------- */

export const volunteerIntro = {
  eyebrow: 'Volunteer',
  title: 'We need weekend hands and specialist skills, in roughly equal measure.',
  standfirst:
    'Tell us what you can actually commit to. A reliable two hours a month is worth more to us than an enthusiastic promise of every weekend.',
};

export const volunteerRoles = [
  {
    id: 'field',
    eyebrow: 'In the field',
    title: 'Teaching, camps and surveys',
    body: 'Remedial classes, health camp support, household surveys, relief distribution. Local to the districts we work in.',
  },
  {
    id: 'professional',
    eyebrow: 'From anywhere',
    title: 'Professional skills',
    body: 'Accounting, legal, medical advice, design, writing, translation, photography, data and web work. Most of it can be done remotely.',
  },
  {
    id: 'outreach',
    eyebrow: 'Ongoing',
    title: 'Fundraising and outreach',
    body: 'Introducing us to companies, schools and community groups, and helping run drives.',
  },
];

export const volunteerFields = [
  [
    {
      id: 'vol-name',
      name: 'Name',
      label: 'Your name',
      type: 'text',
      autoComplete: 'name',
      required: true,
    },
    {
      id: 'vol-email',
      name: 'Email',
      label: 'Email',
      type: 'email',
      autoComplete: 'email',
      required: true,
    },
  ],
  [
    { id: 'vol-phone', name: 'Phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
    {
      id: 'vol-city',
      name: 'City',
      label: 'City or district',
      type: 'text',
      autoComplete: 'address-level2',
    },
  ],
  [
    {
      id: 'vol-skill',
      name: 'Skills',
      label: 'What you can offer',
      type: 'select',
      options: [
        'Teaching or tutoring',
        'Medical or health',
        'Accounting or legal',
        'Design, writing or media',
        'Technology and data',
        'Field work and events',
        'Fundraising and outreach',
        'Something else',
      ],
    },
    {
      id: 'vol-time',
      name: 'Availability',
      label: 'Time you can commit',
      type: 'select',
      options: ['A few hours a month', 'A few hours a week', 'Weekends', 'Full time'],
    },
  ],
  [
    {
      id: 'vol-note',
      name: 'About',
      label: 'Tell us a little about yourself',
      type: 'textarea',
      rows: 4,
    },
  ],
];

export const volunteerFormNote =
  'We reply to every application, including the ones we cannot take up straight away.';

/* ---------- Partner ---------- */

export const partnerIntro = {
  eyebrow: 'Corporate & institutional',
  title: 'Fund a programme end to end.',
  standfirst:
    'Companies, trusts, foundations and institutions can support a defined piece of work with a defined outcome, reported against your own objectives and timelines.',
};

export const partnerOptions = [
  {
    id: 'csr',
    title: 'CSR programmes',
    body: 'Our object clause covers most Schedule VII activities. CSR-1 registration with the Ministry of Corporate Affairs is in process; we will confirm status before any commitment is made.',
  },
  {
    id: 'employee',
    title: 'Employee engagement',
    body: 'Bring your teams into the field — teaching days, health camps, skill mentoring, relief packing. We handle logistics and safeguarding.',
  },
  {
    id: 'inkind',
    title: 'In-kind support',
    body: 'Books, computers, medical equipment, transport, printing, warehousing, professional services. Often more useful than cash, and always acknowledged.',
  },
  {
    id: 'grants',
    title: 'Institutional grants',
    body: 'Trusts and grant-making bodies: we will provide the full governance, audit and reporting pack, and accept restricted funding with separate accounting.',
  },
];

export const partnerFields = [
  [
    {
      id: 'p-org',
      name: 'Organisation',
      label: 'Organisation',
      type: 'text',
      autoComplete: 'organization',
      required: true,
    },
    {
      id: 'p-name',
      name: 'Name',
      label: 'Contact person',
      type: 'text',
      autoComplete: 'name',
      required: true,
    },
  ],
  [
    {
      id: 'p-email',
      name: 'Email',
      label: 'Email',
      type: 'email',
      autoComplete: 'email',
      required: true,
    },
    { id: 'p-phone', name: 'Phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  ],
  [
    {
      id: 'p-interest',
      name: 'Proposal',
      label: 'What you have in mind',
      type: 'textarea',
      rows: 4,
      placeholder: 'The cause, scale or geography you are interested in',
    },
  ],
];

export const involvedCta = {
  eyebrow: 'Not sure where you fit?',
  title: 'Write to us in plain words. We will find the right place.',
  body: 'Introductions, advice, a venue, a contact at a school or a company — all of it helps a foundation that is starting out.',
  actions: [{ label: 'Contact us', to: '/contact', variant: 'gold' }],
};
