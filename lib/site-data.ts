import { ASSETS } from "./framer-assets";

export const SITE = {
  name: "Config",
  email: "info@config.info",
  location: "San Francisco, CA, USA and Online",
} as const;

export const HERO = {
  location: "SAN FRANCISCO, CA AND ONLINE",
  title: "Global Digital AI",
  subtitle: "— Summit 2026",
  description: "AI relevant events. In person and online tickets now available",
  cta: "Register Now",
  ctaHref: "/tickets",
  heroImage: ASSETS.heroPortrait,
  previewImages: [
    ASSETS.speakers.carlos,
    ASSETS.speakers.didier,
    ASSETS.speakers.jenna,
    ASSETS.speakers.doug,
  ],
  datePills: [
    { dates: "05-07", month: "July", year: "2026", tone: "lime" as const, rotate: -8 },
    { dates: "05-07", month: "July", year: "2026", tone: "cyan" as const, rotate: 6 },
    { dates: "05-07", month: "July", year: "2026", tone: "pink" as const, rotate: -4 },
    { dates: "05-07", month: "July", year: "2026", tone: "lime" as const, rotate: 3 },
  ],
};

export const ABOUT_STATS = [
  { value: 40, suffix: "+", label: "Company founders speaker", tone: "cyan" as const },
  { value: 5000, suffix: "+", label: "Set are available in online", tone: "lime" as const },
  { value: 25, suffix: "+", label: "Free sessions in days", tone: "white" as const },
];

export const TICKET_STRIP = {
  label: "Ticket",
  dates: "05 - 07",
  month: "July - 26",
  href: "/tickets",
};

export type Speaker = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const SPEAKERS: Speaker[] = [
  {
    id: "carlos-mendoza",
    name: "Carlos Mendoza",
    role: "UX Researcher",
    image: ASSETS.speakers.carlos,
    bio:
      "Carlos Mendoza is a UX Researcher focused on turning complex user behavior into clear, actionable insights. He works closely with product and design teams to uncover real user needs through interviews, usability testing, and data-driven research.",
  },
  {
    id: "didier-hilhorst",
    name: "Didier Hilhorst",
    role: "Vp of Design",
    image: ASSETS.speakers.didier,
    bio:
      "Didier Hilhorst leads design strategy at the intersection of AI and product experience, shaping human-centered intelligent systems.",
  },
  {
    id: "jenna-park",
    name: "Jenna Park",
    role: "Vp of Software",
    image: ASSETS.speakers.jenna,
    bio:
      "Jenna Park architects scalable software platforms and leads engineering teams building AI-first products.",
  },
  {
    id: "doug-gulgowski",
    name: "Doug Gulgowski",
    role: "Vp of AI",
    image: ASSETS.speakers.doug,
    bio:
      "Doug Gulgowski drives applied AI strategy, helping organizations deploy machine learning at enterprise scale.",
  },
  {
    id: "samantha-lee",
    name: "Samantha Lee",
    role: "Software Engineer",
    image: ASSETS.speakers.samantha,
    bio:
      "Samantha Lee builds production ML systems and open-source tools for the global developer community.",
  },
  {
    id: "boyd-volkman",
    name: "Boyd Volkman",
    role: "Marketing Specialist",
    image: ASSETS.speakers.boyd,
    bio:
      "Boyd Volkman crafts go-to-market strategies for AI products and growth-stage technology companies.",
  },
];

export const SESSIONS = [
  {
    id: "01",
    label: "O1 - Session",
    dayNum: "5",
    month: "July",
    weekday: "Sunday",
    time: "09 PM - 01 AM",
    title: "The Future of AI in Everyday Products",
    description:
      "Explore how AI is transforming digital experiences & what it means for product teams",
    bullets: ["Smarter personalisation", "Seamless automation", "Human-centered intelligence"],
  },
  {
    id: "02",
    label: "O2 - Session",
    dayNum: "6",
    month: "July",
    weekday: "Monday",
    time: "09 PM - 02 AM",
    title: "Designing for the AI-First Era",
    description:
      "Learn how AI is reshaping product strategy and user experience across industries",
    bullets: [
      "Integrate AI into product strategy",
      "Enhance UX with intelligent automation",
      "Ensure ethical and transparent AI",
    ],
  },
  {
    id: "03",
    label: "O3 - Session",
    dayNum: "7",
    month: "July",
    weekday: "Wednesday",
    time: "09 PM - 03 AM",
    title: "From Data to Decisions AI in Action",
    description:
      "See how leading teams turn raw data into impactful product decisions",
    bullets: [
      "Turn raw data into actionable insights",
      "Products with real-time analytics",
      "Learn from real-world AI case studies",
    ],
  },
];

export const PRICING_PLANS = [
  {
    name: "In-Person Pass",
    price: "$299",
    features: [
      "Full conference access",
      "All keynotes & sessions",
      "Networking events",
      "Workshop entry",
    ],
    featured: true,
  },
  {
    name: "Online Pass",
    price: "$999",
    features: [
      "Live session streaming",
      "Virtual workshops",
      "Digital resources",
      "Session recordings access",
    ],
    featured: false,
  },
];

export const SPONSOR_LOGOS = ASSETS.sponsorLogos;

export const GALLERY_IMAGES = ASSETS.gallery.map((src, i) => ({
  src,
  alt: `Event gallery image ${i + 1}`,
}));

export const FAQ_ITEMS = [
  {
    q: "What is AI Global Summit 2026?",
    a: "AI Global Summit 2026 is the premier gathering for builders, founders, and technology leaders exploring the future of artificial intelligence.",
  },
  {
    q: "When and Where is it Happening?",
    a: "The summit will be held in 2026 at a premier global venue location to be announced, with both in-person and virtual attendance options available.",
  },
  {
    q: "Who Should Attend?",
    a: "Founders, engineers, designers, product leaders, and anyone building in the AI-first era.",
  },
  {
    q: "Are Online Tickets Available?",
    a: "Yes. Online passes include live streaming, virtual workshops, digital resources, and session recordings.",
  },
  {
    q: "Will Recordings be Available?",
    a: "Yes. Session recordings are included with ticket access for on-demand viewing after the event.",
  },
];

export const TICKETS_FAQ = [
  {
    q: "What's included in my ticket?",
    a: "Tickets include access to keynotes, sessions, networking events, and digital resources depending on your pass type.",
  },
  {
    q: "Are there different ticket types?",
    a: "Yes. We offer in-person and virtual passes, each with tailored access and benefits.",
  },
  {
    q: "Can I upgrade my ticket later?",
    a: "Yes. Contact support to upgrade from online to in-person before the event begins.",
  },
  {
    q: "Do you offer group discounts?",
    a: "Yes. Groups of 5 or more receive discounted rates. Email info@config.info for details.",
  },
  {
    q: "Is my ticket refundable?",
    a: "Refunds are available within 30 days of purchase. See our refund policy for details.",
  },
];

export const ABOUT_PAGE = {
  badge: "About Event",
  title: "Redefining What's possible with AI",
  location: "San Francisco, CA and Online",
  date: "Monday, March 16, 2024",
  time: "09:00 AM - 05:00 PM PST",
  description:
    "This is more than a conference it's a launchpad for the next generation of AI builders. Learn from industry pioneers, gain practical insights, and collaborate with makers driving the intelligent revolution.",
  bullets: [
    "Curated Professional Networking Sessions",
    "Invite-Only Strategic Professional Insights",
  ],
  scheduleTitle: "Global AI agenda",
  teamMembers: [
    { name: "Viola Stracke", role: "Vp of AI", image: ASSETS.about.team[0] },
    { name: "Silvia Kozey", role: "Our Sponsors", image: ASSETS.about.team[1] },
    { name: "Lula Hettinger", role: "Head of AI enginner", image: ASSETS.about.team[2] },
    { name: "Boyd Volkman", role: "Vp of design", image: ASSETS.about.team[3] },
  ],
};

export const AGENDA_DAYS = [
  {
    id: "day-1",
    title: "The Future of Applied AI",
    date: "Sunday - 26 July 2026",
    items: [
      "9:30 AM - 10:00 AM, Registration Open",
      "10:00 AM - 10:45 AM, Cloude AI Opening Keynote",
      "10:45 AM - 11:45 PM, Cloude AI Opening Keynote",
      "11:45 AM - 12:15 PM, Lunch",
      "3:00 PM - 3:45 PM, AutoIndustry.Keynote Address",
      "5:30 PM - 7:30 PM, Opening Night Reception in the Lobby",
    ],
    duration: "09:00 AM – 09:45 AM",
    durationLabel: "45 Minutes",
  },
  {
    id: "day-2",
    title: "Building with Generative AI",
    date: "Monday - 27 July 2026",
    items: [
      "9:30 AM - 10:00 AM, Register, Dine & Go Live",
      "10:00 AM - 10:45 AM, Main Stage Welcome, Keynote and Panels",
      "10:45 AM - 11:45 PM, Exhibit Hall Open",
      "11:45 AM - 12:15 PM, Pitch Tank Prelims, Podcast Stage",
      "3:00 PM - 3:45 PM, Main Stage Panels and Keynotes",
      "5:30 PM - 7:30 PM, Night 1 Happy Hour",
    ],
    duration: "09:00 AM – 09:45 AM",
    durationLabel: "45 Minutes",
  },
  {
    id: "day-3",
    title: "AI Startups That Scaled Fast",
    date: "Sunday - 26 July 2026",
    items: [
      "9:30 AM - 10:00 AM, Register, Dine & Go Live",
      "10:00 AM - 10:45 AM, Main Stage Mini Greenfield",
      "10:45 AM - 11:45 PM, Exhibit Hall Open",
      "11:45 AM - 12:15 PM, Breakout Sessions",
      "3:00 PM - 3:45 PM, Breakout Sessions",
      "5:30 PM - 7:30 PM, Giveaway & Keynote",
    ],
    duration: "09:00 AM – 09:45 AM",
    durationLabel: "45 Minutes",
  },
];

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "the-future-of-ai-starts-now",
    title: "The Future of AI Starts Now",
    category: "AI Trends",
    readTime: "5 Min read",
    author: "Dean O'Hara",
    image: ASSETS.blog.future,
    excerpt:
      "Artificial Intelligence is no longer a distant concept — it's actively shaping how we work, design, and innovate.",
  },
  {
    id: "from-vision-to-bold-creative-solutions",
    title: "From Vision to Bold Creative Solutions",
    category: "Product Strategy",
    readTime: "6 Min read",
    author: "Dean O'Hara",
    image: ASSETS.blog.vision,
    excerpt: "Learn how to integrate AI into your product strategy and create seamless user experiences.",
  },
  {
    id: "building-human-centered-ai",
    title: "Building Human Centered AI",
    category: "AI Ethics",
    readTime: "7 Min read",
    author: "Dean O'Hara",
    image: ASSETS.blog.human,
    excerpt: "Discover best practices for building ethical, human-centered AI products.",
  },
  {
    id: "the-age-of-autonomous-tech",
    title: "The Age of Autonomous Tech",
    category: "Product Strategy",
    readTime: "8 Min read",
    author: "Dean O'Hara",
    image: ASSETS.blog.autonomous,
    excerpt: "Explore how autonomous technology is reshaping industries worldwide.",
  },
];

export const BLOG_CONTENT: Record<string, string> = {
  "the-future-of-ai-starts-now": `
    <h2>Introduction</h2>
    <p>Artificial Intelligence is no longer a distant concept — it's actively shaping how we work, design, and innovate. From automation to decision intelligence, AI is redefining digital transformation across industries.</p>
    <h2>AI Is Moving from Hype to Impact</h2>
    <p>Over the past decade, AI has evolved from experimental technology to mission-critical infrastructure. Organizations are integrating AI into product development, customer experience, and operational strategy to unlock measurable results.</p>
    <h2>Human-Centered AI Design</h2>
    <p>As AI capabilities grow, so does the need for responsible and human-centered design. Successful AI products prioritize usability, transparency, and trust.</p>
    <h2>What's Next?</h2>
    <p>The future of AI is not approaching. It's already here and it's just getting started.</p>
  `,
};

export function getSpeakerById(id: string) {
  return SPEAKERS.find((s) => s.id === id);
}

export function getBlogPostById(id: string) {
  return BLOG_POSTS.find((p) => p.id === id);
}
