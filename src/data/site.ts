export type ProjectKind = "Client" | "Personal project" | "Concept";

export type Project = {
  name: string;
  url: string;
  outcome: string;
  kind: ProjectKind;
  tags: string[];
  image: { src: string; alt: string };
};

export type Service = {
  title: string;
  summary: string;
  specifics: string[];
};

export type Tier = {
  name: string;
  price: string;
  cadence?: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

export type Step = {
  title: string;
  detail: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type SectionId = "work" | "services" | "pricing" | "process" | "faq";

export type SectionCopy = {
  id: SectionId;
  number: string;
  label: string;
  title: string;
  intro?: string;
  inNav: boolean;
};

export const sections: Record<SectionId, SectionCopy> = {
  work: {
    id: "work",
    number: "01",
    label: "Work",
    title: "Selected work.",
    intro: "A few things I've built.",
    inNav: true,
  },
  services: {
    id: "services",
    number: "02",
    label: "Services",
    title: "What I do.",
    intro: "Everything a local business needs to get found and booked.",
    inNav: true,
  },
  pricing: {
    id: "pricing",
    number: "03",
    label: "Pricing",
    title: "Simple pricing.",
    intro: "Fixed prices. No surprises.",
    inNav: true,
  },
  process: {
    id: "process",
    number: "04",
    label: "Process",
    title: "How it works.",
    intro: "Three steps. No long meetings.",
    inNav: true,
  },
  faq: {
    id: "faq",
    number: "05",
    label: "FAQ",
    title: "Questions.",
    inNav: false,
  },
};

export const navItems = Object.values(sections).filter((s) => s.inNav);

export const site = {
  // TODO: confirm brand name. Taken from the project folder name.
  name: "Armstrong Design Agency",
  positioning: "Fast, good-looking websites that bring in customers.",
  // TODO: replace with your real Cal.com link.
  bookingUrl: "https://cal.com/TODO/15min",
  // TODO: replace with your real contact email.
  email: "TODO@example.com",
  // TODO: replace with your production domain.
  url: "https://example.com",
  promise: "Preview in 48 hours. Live in 7 days.",
};

// TODO: replace every project below with your real work (4-6 entries).
// Label anything that isn't paid client work "Personal project" or "Concept".
export const projects: Project[] = [
  {
    name: "TODO: Project one",
    url: "https://example.com",
    outcome: "TODO: One line on the outcome or problem solved.",
    kind: "Concept",
    tags: ["Next.js", "Booking", "SEO"],
    image: { src: "/work/project-1.svg", alt: "TODO: Homepage of project one" },
  },
  {
    name: "TODO: Project two",
    url: "https://example.com",
    outcome: "TODO: One line on the outcome or problem solved.",
    kind: "Concept",
    tags: ["Next.js", "SEO"],
    image: { src: "/work/project-2.svg", alt: "TODO: Homepage of project two" },
  },
  {
    name: "TODO: Project three",
    url: "https://example.com",
    outcome: "TODO: One line on the outcome or problem solved.",
    kind: "Concept",
    tags: ["Next.js", "Booking"],
    image: {
      src: "/work/project-3.svg",
      alt: "TODO: Homepage of project three",
    },
  },
  {
    name: "TODO: Project four",
    url: "https://example.com",
    outcome: "TODO: One line on the outcome or problem solved.",
    kind: "Concept",
    tags: ["Next.js", "Lead capture"],
    image: { src: "/work/project-4.svg", alt: "TODO: Homepage of project four" },
  },
  {
    name: "TODO: Project five",
    url: "https://example.com",
    outcome: "TODO: One line on the outcome or problem solved.",
    kind: "Concept",
    tags: ["Next.js", "SEO"],
    image: { src: "/work/project-5.svg", alt: "TODO: Homepage of project five" },
  },
];

// TODO: confirm each specific matches what you actually deliver.
export const services: Service[] = [
  {
    title: "Design",
    summary: "A site that looks like you mean business.",
    specifics: [
      "Custom layout, no templates",
      "Mobile first",
      "Copy help included",
    ],
  },
  {
    title: "Development",
    summary: "Built to load fast and stay up.",
    specifics: [
      "Hand-built in Next.js",
      "Hosted on Vercel",
      "You own the code",
    ],
  },
  {
    title: "Booking & lead capture",
    summary: "Turn visitors into calls and appointments.",
    specifics: [
      "Cal.com or your booking tool",
      "Contact forms to your inbox",
      "Click-to-call on mobile",
    ],
  },
  {
    title: "SEO & speed",
    summary: "Show up on Google. Load before they leave.",
    specifics: [
      "Google Business setup",
      "Meta tags and sitemap",
      "90+ Lighthouse scores",
    ],
  },
];

export const builtWith = ["Next.js", "Vercel", "Tailwind"];

// TODO: confirm inclusions. "Up to 5 pages" is a placeholder limit.
export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$1,500",
    summary: "One page that does the job. Live in 5 days.",
    includes: [
      "One custom page",
      "Mobile and desktop layouts",
      "Contact form or booking link",
      "Basic SEO setup",
      "Domain and hosting setup",
      "5-day turnaround",
    ],
  },
  {
    name: "Standard",
    price: "$2,500",
    summary: "A full site for a business that books clients.",
    includes: [
      "Up to 5 custom pages",
      "Mobile and desktop layouts",
      "Booking integration",
      "SEO setup and Google Business",
      "Analytics",
      "Domain and hosting setup",
      "Live in 7 days",
    ],
    featured: true,
  },
];

export const carePlan: Tier = {
  name: "Care plan",
  price: "$150",
  cadence: "/mo",
  summary: "Optional. I keep it running so you don't have to.",
  includes: ["Hosting", "Content edits", "Updates", "Uptime monitoring"],
};

export const steps: Step[] = [
  {
    title: "Call",
    detail: "15 minutes. We agree on scope and price.",
  },
  {
    title: "Preview",
    detail: "You get a live link to review in 48 hours.",
  },
  {
    title: "Launch",
    detail: "Live in 7 days. I handle domain and hosting.",
  },
];

// TODO: review each answer. They describe your policies.
export const faqs: Faq[] = [
  {
    question: "How long does it take?",
    answer:
      "You see a live preview in 48 hours. Most sites go live in 7 days. Starter sites take 5.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Your logo, a few photos, and the basics about your business. I can help write the copy.",
  },
  {
    question: "Who owns the site?",
    answer:
      "You do. The domain, the content, and the code are yours from day one.",
  },
  {
    question: "What does the care plan cover?",
    answer:
      "Hosting, small content edits, updates, and uptime monitoring. It's $150 a month. Cancel anytime.",
  },
  {
    // TODO: confirm your e-commerce policy.
    question: "Do you do e-commerce?",
    answer:
      "For a small catalog, yes. For large stores, I'll point you to a better fit.",
  },
  {
    // TODO: confirm your revision and refund policy.
    question: "What if I don't like the preview?",
    answer:
      "Tell me what's off and I'll revise it. You don't pay the balance until you're happy.",
  },
];
