/* The five pillars.
   `summary` is the short form used on the home page grid.
   `detail` + `activities` are the long form used on What we do.
   `icon` keys into components/icons/Icons.jsx. */

export const pillars = [
  {
    id: 'education',
    icon: 'education',
    ordinal: 'Pillar one',
    name: 'Education',
    detailName: 'Education',
    goals: 'Goals 04, 13, 14',
    summary:
      'Keeping children in school, and bringing back the ones who left. Learning support, materials, and the practical costs that decide whether a child attends.',
    detail:
      'Most children who leave school do not leave because of ability. They leave because of a fee, a distance, an illness at home, or a year of learning lost that nobody helped them recover. Education work is largely the work of removing those specific obstacles, one household at a time.',
    activities: [
      'Learning support and remedial classes for children who have fallen behind their grade level',
      'Books, uniforms, transport and examination costs where these are the reason for absence',
      'Digital and library access in schools that have neither',
      'Bringing children who have dropped out back into the formal system, and keeping them there',
      'Vocational and skills training for young people between school and their first job',
    ],
  },
  {
    id: 'health',
    icon: 'health',
    ordinal: 'Pillar two',
    name: 'Health & nutrition',
    detailName: 'Health & nutrition',
    goals: 'Goals 03, 06',
    summary:
      "Screening camps, referral and follow-up, maternal and child nutrition — care that arrives where clinics are far and a day's wage is the price of getting there.",
    detail:
      'A diagnosis without a referral is a piece of paper. Our health work is built around the follow-up: the appointment that gets kept, the medicine that gets taken, the second visit that confirms a child recovered.',
    activities: [
      'Health and eye-screening camps in villages and urban settlements, with tracked referrals',
      'Maternal and child nutrition support in the first thousand days',
      'Immunisation awareness and accompaniment to government facilities',
      'Menstrual health and hygiene programmes in schools',
      'Blood donation drives and emergency medical assistance for families without cover',
    ],
  },
  {
    id: 'economic',
    icon: 'economic',
    ordinal: 'Pillar three',
    /* Non-breaking hyphen keeps "well-being" from splitting in narrow cells */
    name: 'Economic well‑being',
    detailName: 'Economic well-being',
    goals: 'Goals 01, 02, 05, 09, 14',
    summary:
      "Skill training, self-help groups and livelihood support so that income is earned, not waited for — with women's economic independence as the measure.",
    detail:
      'Relief keeps a household alive; income keeps it standing. Our livelihood work aims at the point where a family stops needing us — skills that are actually hired for, groups that can hold savings, and enterprises small enough to survive a bad year.',
    activities: [
      'Skill training tied to employers who are actually recruiting, with placement follow-up',
      "Self-help groups and women's collectives, including savings and enterprise support",
      'Rural livelihood work — agriculture, allied trades and local micro-enterprise',
      'Financial literacy, documentation, and help claiming existing government entitlements',
      "Women's economic independence treated as the primary outcome, not a side effect",
    ],
  },
  {
    id: 'protection',
    icon: 'protection',
    ordinal: 'Pillar four',
    name: 'Child protection',
    detailName: 'Child protection & rights',
    goals: 'Goals 02, 03, 07',
    summary:
      'Safety from trafficking, labour and early marriage. Working with schools, panchayats and child welfare committees so protection is local and permanent.',
    detail:
      'Protection cannot be delivered by an outsider who visits. It works when the people who are already present — teachers, anganwadi workers, panchayat members, older children — know what to watch for and who to call.',
    activities: [
      'Awareness and reporting systems against child labour, trafficking and early marriage',
      'Training for teachers, community volunteers and local committees on safeguarding',
      'Support for children in vulnerable circumstances to stay in education and in care',
      'Gender equality work with adolescent girls and boys, in and out of school',
      'Assistance in accessing legal rights, identity documents and entitlements',
    ],
  },
  {
    id: 'humanitarian',
    icon: 'humanitarian',
    ordinal: 'Pillar five',
    name: 'Humanitarian response',
    detailName: 'Humanitarian & environment',
    goals: 'Goals 04, 08, 10, 11',
    summary:
      'Relief when floods, cyclones and drought take everything at once — food, water, shelter materials, and the slower work of helping people restart.',
    detail:
      'Floods, cyclones and heatwaves now arrive on a schedule. The first week of a disaster gets attention; the six months afterwards decide whether a family recovers or is permanently poorer. We plan for both.',
    activities: [
      'Immediate relief — food, drinking water, hygiene kits and shelter material',
      'Recovery support after the cameras leave: documents, livelihoods, school return',
      'Community preparedness in districts that flood or lose crops every year',
      'Tree planting, water conservation and waste management with local bodies',
      'Animal welfare and rescue during and after disasters',
    ],
  },
];
