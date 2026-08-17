// Sample data shape mirrors what a real /api/projects endpoint would return.
// Swap this out for a fetch() call once the backend is wired up.
export const CATEGORIES = [
  "Healthcare",
  "Education",
  "Livelihoods",
  "Disaster Relief",
  "Water & Sanitation",
  "Disability Inclusion",
];

export const MOCK_PROJECTS = [
  {
    id: "p1",
    name: "Rural Healthcare Outreach Camp",
    description:
      "Four-week mobile health camp screening and treating villagers across 12 hamlets with no nearby clinic.",
    fullDescription:
      "Working with the District Health Department, our mobile unit ran daily screening camps across twelve hamlets that had no clinic within walking distance. Over four weeks the team screened for anaemia, hypertension and diabetes, dispensed medicines on the spot, and referred complex cases to the district hospital with transport arranged. A follow-up visit six weeks later confirmed adherence and caught two relapses early.",
    category: "Healthcare",
    date: "2026-03-14",
    client: "District Health Department",
    url: "https://example.org/rural-health-camp",
    technologies: ["Health screening", "Medicine distribution", "Referral coordination", "Follow-up visits"],
    status: "published",
    cover: "https://picsum.photos/seed/gwf-health1/1200/750",
    photos: [
      "https://picsum.photos/seed/gwf-health-a/800/800",
      "https://picsum.photos/seed/gwf-health-b/800/800",
      "https://picsum.photos/seed/gwf-health-c/800/800",
      "https://picsum.photos/seed/gwf-health-d/800/800",
    ],
    videos: [],
  },
  {
    id: "p2",
    name: "Girls' Digital Literacy Bridge Program",
    description:
      "An eight-week after-school course teaching 240 girls basic computing, typing and safe internet use.",
    fullDescription:
      "Held across three government schools, this bridge program introduced 240 girls aged 12–16 to computers for the first time. Sessions covered typing, file management, safe internet use and simple spreadsheet skills, taught by trained volunteer instructors using a curriculum built with input from the state education board. 92% of participants completed the full course and sat a final skills assessment.",
    category: "Education",
    date: "2026-01-22",
    client: "State Education Board",
    url: "https://example.org/digital-literacy",
    technologies: ["Curriculum design", "Teacher training", "Digital literacy", "Assessment design"],
    status: "draft",
    cover: "https://picsum.photos/seed/gwf-edu1/1200/750",
    photos: [
      "https://picsum.photos/seed/gwf-edu-a/800/800",
      "https://picsum.photos/seed/gwf-edu-b/800/800",
      "https://picsum.photos/seed/gwf-edu-c/800/800",
    ],
    videos: ["https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"],
  },
  {
    id: "p3",
    name: "Women's Tailoring Cooperative",
    description:
      "Seed funding and machine training helped 35 women form a self-sustaining tailoring cooperative.",
    fullDescription:
      "Thirty-five women from a resettlement colony pooled a small foundation grant with their own savings to launch a tailoring cooperative. We funded eight industrial machines, ran a six-week stitching and costing workshop, and connected the group to two local garment wholesalers for its first orders. The cooperative now runs independently and has taken on five new members since closing.",
    category: "Livelihoods",
    date: "2025-11-05",
    client: "Sundarbans Resettlement Trust",
    url: "",
    technologies: ["Skills training", "Micro-grants", "Market linkage", "Bookkeeping"],
    status: "published",
    cover: "https://picsum.photos/seed/gwf-live1/1200/750",
    photos: [
      "https://picsum.photos/seed/gwf-live-a/800/800",
      "https://picsum.photos/seed/gwf-live-b/800/800",
    ],
    videos: [],
  },
  {
    id: "p4",
    name: "Cyclone Relief & Shelter Rebuild",
    description:
      "Emergency relief and shelter materials reached 410 families within 72 hours of the cyclone landfall.",
    fullDescription:
      "Within 72 hours of cyclone landfall, response teams distributed dry rations, tarpaulins and drinking water to 410 affected families. Over the following two months we supported the rebuild of 96 damaged homes with materials and skilled labour, prioritising households with elderly residents or young children. A satisfaction survey conducted at close found 94% of families rated the rebuild quality as good or excellent.",
    category: "Disaster Relief",
    date: "2025-09-30",
    client: "State Disaster Management Authority",
    url: "https://example.org/cyclone-relief",
    technologies: ["Emergency logistics", "Shelter construction", "Needs assessment", "Community liaison"],
    status: "draft",
    cover: "https://picsum.photos/seed/gwf-relief1/1200/750",
    photos: [
      "https://picsum.photos/seed/gwf-relief-a/800/800",
      "https://picsum.photos/seed/gwf-relief-b/800/800",
      "https://picsum.photos/seed/gwf-relief-c/800/800",
    ],
    videos: [],
  },
  {
    id: "p5",
    name: "Village Well Rehabilitation Initiative",
    description:
      "Repaired and chlorinated 18 defunct borewells, restoring safe drinking water access for 6,000 people.",
    fullDescription:
      "Eighteen borewells across four panchayats had fallen into disrepair, forcing residents to walk over an hour for safe water. Our engineering partner repaired the pump mechanisms, installed chlorination units, and trained two local caretakers per site on basic maintenance. Water quality testing three months on shows all eighteen sites within safe potability limits.",
    category: "Water & Sanitation",
    date: "2025-07-18",
    client: "Panchayati Raj Department",
    url: "",
    technologies: ["Borewell repair", "Water testing", "Caretaker training", "Chlorination"],
    status: "published",
    cover: "https://picsum.photos/seed/gwf-water1/1200/750",
    photos: [
      "https://picsum.photos/seed/gwf-water-a/800/800",
      "https://picsum.photos/seed/gwf-water-b/800/800",
      "https://picsum.photos/seed/gwf-water-c/800/800",
      "https://picsum.photos/seed/gwf-water-d/800/800",
      "https://picsum.photos/seed/gwf-water-e/800/800",
    ],
    videos: [],
  },
  {
    id: "p6",
    name: "Assistive Devices & Inclusion Drive",
    description:
      "Distributed wheelchairs, hearing aids and mobility canes to 150 persons with disabilities.",
    fullDescription:
      "Working alongside a district disability rights collective, the foundation ran a two-day assessment camp followed by a distribution drive that reached 150 persons with disabilities across nine villages. Devices were fitted by certified technicians on-site, and every recipient received a follow-up home visit within a month to confirm the fit and usage were correct.",
    category: "Disability Inclusion",
    date: "2026-02-08",
    client: "District Disability Rights Collective",
    url: "https://example.org/assistive-devices",
    technologies: ["Needs assessment", "Device fitting", "Home follow-up", "Community mobilisation"],
    status: "draft",
    cover: "https://picsum.photos/seed/gwf-disab1/1200/750",
    photos: [
      "https://picsum.photos/seed/gwf-disab-a/800/800",
      "https://picsum.photos/seed/gwf-disab-b/800/800",
    ],
    videos: [],
  },
];
