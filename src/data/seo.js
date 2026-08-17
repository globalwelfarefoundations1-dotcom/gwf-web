import { site } from './site.js';

/* Per-route <head> metadata. Consumed by the useSeo hook, which writes
   title, description, canonical, Open Graph and Twitter tags on navigation.
   Keys match the route path. */

export const seo = {
  '/': {
    title: 'Global Welfare Foundation — education, health, livelihood and dignity',
    description:
      'Global Welfare Foundation (GWF) is a not-for-profit company registered under Section 8 of the Companies Act, 2013, working on education, health and nutrition, economic well-being, child protection and humanitarian response across India.',
    ogTitle: 'Global Welfare Foundation',
    ogDescription:
      'A not-for-profit company working on education, health, livelihood and dignity — with the communities public services reach last.',
    path: '/',
  },
  '/about': {
    title: 'About us — Global Welfare Foundation',
    description:
      'Global Welfare Foundation is a Section 8 not-for-profit company. Read our mandate, vision, values and governance.',
    ogTitle: 'About us — Global Welfare Foundation',
    ogDescription:
      'A not-for-profit company formed to promote education, welfare, health and livelihood, without profit motive.',
    path: '/about',
  },
  '/what-we-do': {
    title: 'What we do — Global Welfare Foundation',
    description:
      'Education, health and nutrition, economic well-being, child protection and humanitarian response — the five pillars through which Global Welfare Foundation delivers its fourteen adopted goals.',
    ogTitle: 'What we do — Global Welfare Foundation',
    ogDescription: 'Five pillars, fourteen adopted goals, and the programmes that carry them.',
    path: '/what-we-do',
  },
  '/get-involved': {
    title: 'Get involved — donate, volunteer or partner with Global Welfare Foundation',
    description:
      'Support Global Welfare Foundation by donating, volunteering your time and skills, or partnering with us as a company, trust or institution.',
    ogTitle: 'Get involved — Global Welfare Foundation',
    ogDescription:
      'Donate, volunteer, or partner with us. The first supporters shape what this foundation becomes.',
    path: '/get-involved',
  },
  '/contact': {
    title: 'Contact — Global Welfare Foundation',
    description:
      'Contact Global Welfare Foundation about donations, volunteering, partnerships or anything else. A real person reads every message.',
    ogTitle: 'Contact — Global Welfare Foundation',
    ogDescription: 'Write to us about donations, volunteering, partnerships or governance.',
    path: '/contact',
  },
  notFound: {
    title: 'Page not found — Global Welfare Foundation',
    description: 'The page you are looking for is not here.',
    noindex: true,
  },
};

/* schema.org NGO record, injected once on the home page. */
export const organisationSchema = (contact) => ({
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: site.name,
  alternateName: 'GWF Foundation',
  url: `${site.url}/`,
  logo: `${site.url}/assets/img/logo.png`,
  description:
    'A not-for-profit company incorporated under Section 8 of the Companies Act, 2013, working on education, social welfare, healthcare, skill development, environmental protection, women empowerment, child welfare, rural development and livelihood generation.',
  foundingDate: site.foundingYear,
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'general enquiries',
    email: contact.email.general,
    telephone: contact.phoneStructured,
  },
});
