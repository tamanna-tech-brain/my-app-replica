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
  heroImage:
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=720&h=900&auto=format&fit=crop",
  previewImages: [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&auto=format&fit=crop",
  ],
  datePills: [
    { dates: "05-07", month: "July", year: "2026", tone: "lime" as const, rotate: -8 },
    { dates: "05-07", month: "July", year: "2026", tone: "cyan" as const, rotate: 6 },
    { dates: "05-07", month: "July", year: "2026", tone: "pink" as const, rotate: -4 },
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
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=480&h=600&auto=format&fit=crop",
    bio:
      "Carlos Mendoza is a UX Researcher focused on turning complex user behavior into clear, actionable insights. He works closely with product and design teams to uncover real user needs through interviews, usability testing, and data-driven research.",
  },
  {
    id: "didier-hilhorst",
    name: "Didier Hilhorst",
    role: "Vp of Design",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&h=600&auto=format&fit=crop",
    bio:
      "Didier Hilhorst leads design strategy at the intersection of AI and product experience, shaping human-centered intelligent systems.",
  },
  {
    id: "jenna-park",
    name: "Jenna Park",
    role: "Vp of Software",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=480&h=600&auto=format&fit=crop",
    bio:
      "Jenna Park architects scalable software platforms and leads engineering teams building AI-first products.",
  },
  {
    id: "doug-gulgowski",
    name: "Doug Gulgowski",
    role: "Vp of AI",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=600&auto=format&fit=crop",
    bio:
      "Doug Gulgowski drives applied AI strategy, helping organizations deploy machine learning at enterprise scale.",
  },
  {
    id: "samantha-lee",
    name: "Samantha Lee",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=480&h=600&auto=format&fit=crop",
    bio:
      "Samantha Lee builds production ML systems and open-source tools for the global developer community.",
  },
  {
    id: "boyd-volkman",
    name: "Boyd Volkman",
    role: "Marketing Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&h=600&auto=format&fit=crop",
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
    price: "$0",
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
    price: "$0",
    features: [
      "Live session streaming",
      "Virtual workshops",
      "Digital resources",
      "Session recordings access",
    ],
    featured: false,
  },
];

export const SPONSOR_NAMES = [
  "Logoipsum",
  "TechNova",
  "LightAI",
  "Kanba",
  "NeuralNet",
  "CloudScale",
  "DataFlow",
  "CreativeAI",
  "SynthAI",
  "DataPulse",
  "NeuralCore",
  "VisionAI",
  "CloudNine",
  "DeepLearn",
  "AutoML",
  "SmartSys",
  "CodeAI",
  "NextGen",
  "OpenMind",
  "FutureStack",
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&h=800&auto=format&fit=crop",
    alt: "Conference keynote",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=640&h=800&auto=format&fit=crop",
    alt: "Panel discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494112-071dcb849766?w=640&h=800&auto=format&fit=crop",
    alt: "Workshop session",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=640&h=800&auto=format&fit=crop",
    alt: "Networking lounge",
  },
];

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
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&auto=format&fit=crop",
    excerpt:
      "Artificial Intelligence is no longer a distant concept — it's actively shaping how we work, design, and innovate.",
  },
  {
    id: "from-vision-to-bold-creative-solutions",
    title: "From Vision to Bold Creative Solutions",
    category: "Product Strategy",
    readTime: "6 Min read",
    author: "Dean O'Hara",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&auto=format&fit=crop",
    excerpt: "Learn how to integrate AI into your product strategy and create seamless user experiences.",
  },
  {
    id: "building-human-centered-ai",
    title: "Building Human Centered AI",
    category: "AI Ethics",
    readTime: "7 Min read",
    author: "Dean O'Hara",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&auto=format&fit=crop",
    excerpt: "Discover best practices for building ethical, human-centered AI products.",
  },
  {
    id: "the-age-of-autonomous-tech",
    title: "The Age of Autonomous Tech",
    category: "Product Strategy",
    readTime: "8 Min read",
    author: "Dean O'Hara",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&auto=format&fit=crop",
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
