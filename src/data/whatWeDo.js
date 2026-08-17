/* Copy for the What we do page. The pillar detail itself lives in
   data/pillars.js — this file holds only the page furniture. */

export const workHead = {
  crumb: 'What we do',
  title: 'Fourteen goals, carried by five pillars.',
  lead: 'Our object clause is broad by design — it has to cover everything a welfare organisation may need to do over decades. Our work is narrow by choice. Here is how the two meet.',
};

export const registerIntro = {
  eyebrow: 'Adopted goals',
  title: 'The fourteen goals, and where each one lives.',
  standfirst:
    'Every goal the foundation adopted at incorporation, mapped to the pillar that carries it.',
};

export const firstYearIntro = {
  eyebrow: 'First year',
  title: 'What we are doing now.',
  standfirst:
    'We would rather show you a short, true list than a long, aspirational one. This page will grow as programmes start — with dates, districts and numbers attached.',
};

export const firstYear = [
  {
    id: 'districts',
    eyebrow: 'Underway',
    title: 'Choosing where to work',
    body: 'Identifying the first districts and the local partners already operating there, so our first programme adds to existing work rather than competing with it.',
  },
  {
    id: 'registrations',
    eyebrow: 'Underway',
    title: 'Completing registrations',
    body: '12A, 80G and CSR-1 registrations, so that donors receive the tax treatment they are entitled to and companies can route CSR funds to us.',
  },
  {
    id: 'pilots',
    eyebrow: 'Next',
    title: 'First education and health pilots',
    body: 'A small, measured start in one district each — enough to learn from, small enough to correct.',
  },
  {
    id: 'volunteers',
    eyebrow: 'Open',
    title: 'Building the volunteer base',
    body: 'Teachers, health professionals, trainers and people who can spare a weekend. If that is you, we are ready now.',
  },
];

export const workCta = {
  eyebrow: 'Support a pillar',
  title: 'Choose the work you want to pay for.',
  body: 'Contributions can be directed to a single pillar — education, health, livelihood, protection or relief — and are reported against it.',
  actions: [
    { label: 'Donate', to: '/get-involved#donate', variant: 'gold' },
    { label: 'Corporate & CSR', to: '/get-involved#partner', variant: 'outline' },
  ],
};
