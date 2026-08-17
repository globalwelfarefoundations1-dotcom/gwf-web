/* Copy for the About page. */

export const aboutHead = {
  crumb: 'About',
  title: 'A foundation that wrote down its promise before it began.',
  lead: 'Global Welfare Foundation was formed in 2026 as a Section 8 company — the legal form India reserves for organisations that exist for a charitable purpose and nothing else.',
};

export const whoWeAre = {
  eyebrow: 'Who we are',
  title: 'Global, in intent. Local, in practice.',
  paragraphs: [
    'The name is deliberate. Welfare is not charity handed down; it is the ordinary condition of a life that works — a child in school, a mother who survives childbirth, a household that earns rather than waits, a village that is not washed away twice.',
    'We are a young organisation. We do not have decades of reports to show you. What we have is a clear mandate, a small group of people prepared to do unglamorous work, and an intention to be honest about both what we achieve and what we do not.',
  ],
  /* The "Formed — 2026, under Section 8 of the Companies Act, 2013" row was
     removed at the foundation's request. To restore it, add this back as the
     second entry:
       { key: 'Formed', value: '2026, under Section 8 of the Companies Act, 2013' }, */
  facts: [
    {
      key: 'The seal',
      value:
        'A globe held in two open hands, with three figures at its centre and laurel on either side — the world carried, not owned.',
    },
    {
      key: 'Profit',
      value: 'None distributable. Income is applied solely to the objects of the company.',
    },
    {
      key: 'Reach',
      value: 'India, beginning with the districts where our first partners already work',
    },
  ],
};

export const mandateSection = {
  eyebrow: 'Our mandate',
  title: 'The object clause, in full.',
  standfirst:
    'This is the operative clause of our Memorandum of Association. It is the outer boundary of everything the foundation may lawfully do — and the whole of what it intends to do.',
  documentLabel: 'Memorandum of Association · Object clause',
  source: ['Global Welfare Foundation', 'Section 8 · Companies Act, 2013'],
};

export const positioning = [
  {
    id: 'vision',
    eyebrow: 'Vision',
    title: 'A life that works, wherever it is lived',
    body: "A country where a child's postcode does not decide whether she finishes school, survives illness, or earns a living.",
  },
  {
    id: 'mission',
    eyebrow: 'Mission',
    title: 'Close the last gap, not the easy one',
    body: 'To take education, health, protection and livelihood to the households that existing services reach last — working with them, through local institutions, and staying long enough to matter.',
  },
  {
    id: 'method',
    eyebrow: 'Method',
    title: 'Add to what exists',
    body: 'Schools, health centres and panchayats are already in place. We supply the missing part rather than build a second system beside them.',
  },
];

export const commitmentsIntro = {
  eyebrow: 'What we hold to',
  title: 'Four commitments we will be judged on.',
};

export const commitments = [
  {
    id: 'dignity',
    title: 'Dignity first',
    body: 'Nobody is photographed at their worst moment to raise money. People we work with are participants, named and consulted, not case studies.',
  },
  {
    id: 'money',
    title: 'Money follows the object',
    body: "A contribution given for a child's education pays for that child's education. Restricted funds are tracked separately and reported separately.",
  },
  {
    id: 'honesty',
    title: 'Say what did not work',
    body: 'Programmes fail. We would rather publish a corrected approach than a flattering number.',
  },
  {
    id: 'local',
    title: 'Local before national',
    body: 'Depth in a few districts beats a thin presence in many. We would rather finish something small.',
  },
];

export const governance = {
  eyebrow: 'Governance',
  title: 'Who decides, and how.',
  standfirst:
    'A Section 8 company is governed by its Board of Directors and answerable to the Registrar of Companies. Our board members serve without remuneration for their role as directors.',
  rows: [
    {
      key: 'Board',
      value:
        'Directors are named in our filings with the Ministry of Corporate Affairs. Board profiles will be published on this page.',
    },
    {
      key: 'Meetings',
      value:
        'The board meets at least quarterly, and approves every programme, budget and partnership above the delegated limit.',
    },
    {
      key: 'Accounts',
      value:
        'Books are audited annually by an independent chartered accountant, and filed with the Registrar of Companies.',
    },
    {
      key: 'Reporting',
      value:
        'Our annual report and audited accounts will be published on this website once the first financial year closes.',
    },
    {
      key: 'Conflicts',
      value:
        'Directors declare interests in any transaction, and take no part in decisions where they hold one.',
    },
  ],
};

/* ---------------------------------------------------------------------
   HIDDEN — not currently rendered.

   The "Legal status" section is deliberately not shown on the site while
   the registrations are still in process. The copy is kept here so it can
   be switched back on in one step once CIN, PAN, 12A, 80G and CSR-1 are
   granted.

   To restore it:
     1. In src/pages/About.jsx, import `legalStatus` and re-add the band:
          <Rule />
          <Band tone="seal" id="legal">
            <SectionHead eyebrow={legalStatus.eyebrow} title={legalStatus.title}
                         standfirst={legalStatus.standfirst} />
            <Reveal><DefList rows={legalStatus.rows} className="max-w-[52rem]" /></Reveal>
          </Band>
     2. In src/data/navigation.js, re-add the footer link:
          { label: 'Legal status', to: '/about#legal' },
   --------------------------------------------------------------------- */
export const legalStatus = {
  eyebrow: 'Legal status',
  title: 'Everything a donor should be able to check.',
  standfirst:
    'If any figure below is missing, it is because the registration is still in process. We publish nothing before it is granted.',
  rows: [
    { key: 'Legal name', value: 'Global Welfare Foundation' },
    {
      key: 'Constitution',
      value: 'Company limited by guarantee, licensed under Section 8 of the Companies Act, 2013',
    },
    { key: 'CIN', value: 'To be published' },
    { key: 'PAN', value: 'To be published' },
    {
      key: '12A registration',
      value: 'Application in progress — number will be published here once granted',
    },
    {
      key: '80G registration',
      value:
        'Application in progress. Until 80G is granted, donations are not eligible for deduction, and we will say so at the point of giving.',
    },
    {
      key: 'CSR-1',
      value:
        'Registration with the Ministry of Corporate Affairs in progress, required before we can receive CSR funds',
    },
    { key: 'Registered office', value: 'Address to be published' },
  ],
};

export const aboutCta = {
  eyebrow: 'Work with us',
  title: 'The first partners shape what this becomes.',
  body: 'If our mandate matches something you already care about, we would like to hear from you.',
  actions: [
    { label: 'Get involved', to: '/get-involved', variant: 'gold' },
    { label: 'Contact us', to: '/contact', variant: 'outline' },
  ],
};
