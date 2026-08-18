/* Copy for the home page, section by section. */

export const hero = {
  eyebrow: 'Global Welfare Foundation',
  titleLine1: 'Fourteen commitments.',
  titleEmphasis: 'One mandate.',
  lead: 'We work for education, health, livelihood and dignity — alongside the families and communities that public services reach last.',
  legal:
    'Incorporated under Section 8 of the Companies Act, 2013 — a company formed to promote charitable objects, applying its income solely to those objects, without any profit motive.',
  /* Text set around the rotating seal ring */
  inscription: 'EDUCATION · HEALTH · NUTRITION · LIVELIHOOD · PROTECTION · DIGNITY · RELIEF · ',
};

export const mandate = {
  eyebrow: 'Our mandate',
  title: 'The promise came first. The work follows.',
  paragraphs: [

    "Global Welfare Foundation. Before a single programme was designed, its purpose was written into its constitution — the object clause below is the legal instrument that binds everything we do.",

    "A Section 8 company cannot distribute profit. Every rupee it earns or receives goes back into the objects it was formed for. That is not a policy we adopted; it is the condition of our existence.",

  ],
  link: { label: 'Read about the foundation', to: '/about' },
  documentLabel: 'Object clause',
  source: ['Memorandum of Association', 'Section 8 · Companies Act, 2013'],
};

export const pillarsIntro = {
  eyebrow: 'Where we work',
  title: 'Five pillars hold up the mandate.',
  standfirst:
    "Fourteen goals is a wide brief. These five areas are how we organise it — each one a place where a family's circumstances can be changed within a single generation.",
};

export const registerIntro = {
  eyebrow: 'Adopted goals',
  title: 'The fourteen, in the order they were adopted.',
  standfirst:
    'These are the goals the foundation set for itself at incorporation. They are listed here as they were written — a register, not a wish list.',
  link: { label: 'How each goal becomes a programme', to: '/what-we-do' },
};

export const approachIntro = {
  eyebrow: 'How we work',
  title: 'Small, local, and accountable to the people it is for.',
};

export const approach = [
  {
    id: 'listen',
    eyebrow: 'Listen first',
    title: 'The community sets the problem',
    body: 'We start by asking what a village or ward already knows about its own gaps. A programme designed in an office solves the wrong problem well.',
  },
  {
    id: 'partner',
    eyebrow: 'Work through others',
    title: 'Partner rather than duplicate',
    body: 'Schools, health centres, panchayats and local groups are already there. We add what is missing — funds, hands, training, follow-up — instead of building a parallel system.',
  },
  {
    id: 'stay',
    eyebrow: 'Stay after',
    title: 'Follow-up is the programme',
    body: 'A camp, a kit or a training day is the easy half. What changes an outcome is the visit three months later, and the one after that.',
  },
  {
    id: 'account',
    eyebrow: 'Account for it',
    title: 'Open books, plain reporting',
    body: 'Every contribution is recorded, applied to the object it was given for, and reported in language a donor and a beneficiary can both read.',
  },
];

export const waysIntro = {
  eyebrow: 'Get involved',
  title: 'Three ways to be part of this.',
  standfirst: 'The foundation is new. What it becomes depends on who joins it now.',
};

export const ways = [
  {
    id: 'donate',
    icon: 'heart',
    title: 'Donate',
    body: "Fund a child's school year, a health camp, or a family's relief kit. Contributions of any size are applied to the object they were given for.",
    link: { label: 'Make a donation', to: '/get-involved#donate' },
  },
  {
    id: 'volunteer',
    icon: 'volunteer',
    title: 'Volunteer',
    body: 'Teach, run a camp, help with data, design or documentation. We need weekend hands and professional skills in roughly equal measure.',
    link: { label: 'Offer your time', to: '/get-involved#volunteer' },
  },
  {
    id: 'partner',
    icon: 'briefcase',
    title: 'Partner & CSR',
    body: 'Companies, trusts and institutions can fund a programme end to end, or bring employees into the field. We report against your objectives.',
    link: { label: 'Start a conversation', to: '/get-involved#partner' },
  },
];

export const homeCta = {
  eyebrow: 'Begin with us',
  title: 'A foundation is only as good as the people who show up early.',
  body: 'Tell us what you can give — money, time, expertise or a room to work in. We will tell you exactly where it goes.',
  actions: [
    { label: 'Donate', to: '/get-involved#donate', variant: 'gold' },
    { label: 'Contact us', to: '/contact', variant: 'outline' },
  ],
};
