/* Primary navigation and the three footer columns. Paths are React Router
   routes — no .html extensions. */

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'What we do', to: '/what-we-do' },
  { label: 'Get involved', to: '/get-involved' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export const donateCta = { label: 'Donate', to: '/get-involved#donate' };

export const footerNav = [
  {
    id: 'foundation',
    title: 'Foundation',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Our mandate', to: '/about#mandate' },
      { label: 'Governance', to: '/about#governance' },
      /* 'Legal status' is hidden while registrations are in process —
         see the note in src/data/about.js to switch it back on. */
    ],
  },
  {
    id: 'work',
    title: 'Our work',
    links: [
      { label: 'Education', to: '/what-we-do#education' },
      { label: 'Health & nutrition', to: '/what-we-do#health' },
      { label: 'Economic well-being', to: '/what-we-do#economic' },
      { label: 'Child protection', to: '/what-we-do#protection' },
      { label: 'Humanitarian', to: '/what-we-do#humanitarian' },
    ],
  },
  {
    id: 'involved',
    title: 'Get involved',
    links: [
      { label: 'Donate', to: '/get-involved#donate' },
      { label: 'Volunteer', to: '/get-involved#volunteer' },
      { label: 'Corporate & CSR', to: '/get-involved#partner' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];
