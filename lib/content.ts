/**
 * Single source of marketing copy used across sections.
 * Edit here, not in components.
 *
 * Wording is drawn — as close to verbatim as readable web copy allows — from:
 *   - Concept Paper, Pak Venture Point
 *   - Concept Paper, PVP Consultancy Services (BCS)
 *   - Web-content brief, PVP Consultancy Services
 */

export const practices = [
  {
    slug: "software-development",
    number: "01",
    title: "Software Development",
    oneLine:
      "Smart, scalable, AI-enabled digital systems tailored for startups, enterprises, NGOs, and institutions.",
    capabilities: [
      "Web Development & SaaS Platforms",
      "Mobile Applications & ERP Systems",
      "AI & Automation Tools",
    ],
    icon: "Code2",
  },
  {
    slug: "digital-freelancing",
    number: "02",
    title: "Freelancing Services",
    oneLine:
      "A structured remote workforce connecting businesses with skilled digital talent and outsourced operations.",
    capabilities: [
      "Remote Development & Technical Support",
      "Digital Marketing & Graphic Design",
      "Content Development & Proposal Writing",
    ],
    icon: "Users",
  },
  {
    slug: "consultancy",
    number: "03",
    title: "Consultancy & Advisory",
    oneLine:
      "Practical consultancy for organizations, startups, government institutions, NGOs, and SMEs.",
    capabilities: [
      "Strategic Planning & Organizational Development",
      "M&E, Policy & Research",
      "Startup Advisory & Capacity Building",
    ],
    icon: "Compass",
  },
  {
    slug: "innovative-startups",
    number: "04",
    title: "Startup & Venture Development",
    oneLine:
      "A venture platform for startup incubation, investor networking, product commercialization, and scalable digital ventures.",
    capabilities: [
      "Startup Incubation & Venture Building",
      "Product Development & Innovation Management",
      "Investor Engagement & Business Acceleration",
    ],
    icon: "Sparkles",
  },
] as const;

export type Practice = (typeof practices)[number];

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    body: "A scoping conversation to understand the brief, the people, and the constraints.",
  },
  {
    n: "02",
    title: "Needs Assessment",
    body: "We map current systems, goals, and gaps — and agree on a definition of done.",
  },
  {
    n: "03",
    title: "Strategic Planning",
    body: "A written proposal: outcomes, timeline, milestones, and fixed pricing.",
  },
  {
    n: "04",
    title: "Implementation & Follow-up",
    body: "Delivery with weekly cadence, milestone reviews, handover, and ongoing support.",
  },
] as const;

/**
 * Pillars on the homepage = four of the ten official Core Values from the concept paper.
 * Full list (Innovation, Professionalism, Integrity, Accountability, Entrepreneurship,
 * Sustainability, Creativity, Collaboration, Client Satisfaction, Excellence) is shown
 * on the About page.
 */
export const pillars = [
  {
    title: "Innovation",
    body: "Creative thinking, modern approaches, and technology-integrated solutions.",
    icon: "Sparkles",
  },
  {
    title: "Integrity",
    body: "Honesty, ethical practice, and trust-based professional relationships.",
    icon: "ShieldCheck",
  },
  {
    title: "Accountability",
    body: "Named owner, measurable outputs, and continuous improvement.",
    icon: "Anchor",
  },
  {
    title: "Sustainability",
    body: "Long-term impact, scalable systems, and lasting institutional growth.",
    icon: "Leaf",
  },
] as const;

/**
 * The full ten official Core Values, surfaced on the About page.
 * Icon names map to lucide-react icons in `app/(marketing)/about/page.tsx`.
 */
export const coreValues = [
  { name: "Innovation", icon: "Lightbulb", body: "Creative thinking and modern approaches to real-world challenges." },
  { name: "Professionalism", icon: "Briefcase", body: "The highest standards of quality and conduct in every engagement." },
  { name: "Integrity", icon: "ShieldCheck", body: "Honesty, ethical practice, and trust-based relationships." },
  { name: "Accountability", icon: "Anchor", body: "Named owner, measurable outputs, and standing behind the work." },
  { name: "Entrepreneurship", icon: "Rocket", body: "Initiative, calculated risk-taking, and the drive to build." },
  { name: "Sustainability", icon: "Leaf", body: "Long-term impact, scalable systems, and lasting institutional growth." },
  { name: "Creativity", icon: "Palette", body: "Turning ideas into intelligent, practical, and scalable solutions." },
  { name: "Collaboration", icon: "Handshake", body: "Teamwork, partnership, and stakeholder engagement for stronger outcomes." },
  { name: "Client Satisfaction", icon: "Smile", body: "Our clients are at the heart of every decision. Their success is ours." },
  { name: "Excellence", icon: "Award", body: "Continuous improvement, technical depth, and pride in craft." },
] as const;

export const visionStatement =
  "To become a leading innovation and technology-driven enterprise providing integrated digital, consultancy, startup, and business solutions for sustainable growth and global competitiveness.";

export const missionStatement =
  "To empower businesses, startups, organizations, and professionals through innovative technology, strategic consultancy, digital entrepreneurship, freelancing, and venture development services.";

/* ============================================================
   Hero + trust copy (homepage)
   ============================================================ */

export const heroSubhead =
  "Pak Venture Point (PVP) is an AI-first innovation ecosystem delivering software solutions, strategic consultancy, freelancing operations, and startup development services designed for sustainable growth and digital transformation.";

export const trustStatement =
  "Empowering startups, businesses, organizations, entrepreneurs, and investors with scalable digital solutions and innovation-driven systems.";

/* ============================================================
   Why Choose PVP — 5 reasons
   ============================================================ */

export const whyChoose = [
  {
    title: "AI-First Approach",
    body: "We design systems with AI and automation at the core — not as an afterthought.",
    icon: "Brain",
  },
  {
    title: "Integrated Ecosystem",
    body: "Technology, consultancy, freelancing, and venture development under one platform.",
    icon: "Layers",
  },
  {
    title: "Innovation-Driven Execution",
    body: "We focus on scalable, practical, and market-oriented solutions.",
    icon: "Rocket",
  },
  {
    title: "Startup Mindset",
    body: "Lean, fast-moving, adaptable, and growth-focused operations.",
    icon: "Zap",
  },
  {
    title: "Multi-Sector Expertise",
    body: "Serving startups, SMEs, NGOs, institutions, and international clients.",
    icon: "Globe2",
  },
] as const;

/* ============================================================
   Ventures & Initiatives
   ============================================================ */

export const ventures = [
  {
    name: "ZipZo",
    tagline: "Creator intelligence, AI-native.",
    body: "AI-powered creator intelligence and ideation infrastructure designed for emerging-market content creators.",
    status: "In development",
    accent: "orange",
  },
  {
    name: "VertigoWorks",
    tagline: "Automation for the real economy.",
    body: "Automation and digital operations infrastructure for businesses and SMEs.",
    status: "Live",
    accent: "teal",
  },
] as const;

export const upcomingVenturesNote =
  "PVP is actively developing future-focused digital products, AI systems, SaaS platforms, and innovation-driven startup ventures.";

/* ============================================================
   Micro-Investor Initiative
   ============================================================ */

export const microInvestor = {
  eyebrow: "Invest in Innovation",
  title: "A SAFE-based participation in the next wave of AI-first ventures.",
  body: "PVP is developing a SAFE-based Micro-Investor Participation Initiative designed to support AI-first startups and emerging digital ventures within the PVP ecosystem — enabling selected early participants to gain exposure to multiple innovation-driven ventures under the PVP umbrella.",
  ctaPrimary: { label: "Become a Strategic Partner", href: "/contact?topic=partner" },
  ctaSecondary: { label: "Request Investor Information", href: "/contact?topic=investor" },
} as const;

/* ============================================================
   Final CTA
   ============================================================ */

export const finalCta = {
  title: "Let's build the future together.",
  body: "Whether you are a startup, business, organization, entrepreneur, investor, or institution — PVP is ready to help you innovate, scale, and grow through technology and strategic collaboration.",
  buttons: [
    { label: "Contact Us", href: "/contact", variant: "primary" as const },
    { label: "Schedule Consultation", href: "/contact?topic=consultation", variant: "secondary" as const },
    { label: "Partner With PVP", href: "/contact?topic=partner", variant: "secondary" as const },
  ],
} as const;

// To add a real headshot, drop the file into `public/images/team/`
// (e.g. tahir.jpg) and uncomment the matching `imageSrc` line below.
export const leaders = [
  {
    initials: "TH",
    name: "Tahir Hasnain",
    role: "Chief Executive Officer",
    credentials: "Leads overall management, consultancy, and non-IT ventures.",
    tags: ["Strategy", "Consultancy"],
    imageSrc: "/images/team/tahir.jpg",
  },
  {
    initials: "SH",
    name: "Shahan Ali Naqvi",
    role: "Chief Technology Officer",
    credentials: "Owns software delivery, freelancing, and technical operations.",
    tags: ["Engineering", "Technical Ops"],
    imageSrc: "/images/team/shahan.jpg",
  },
  {
    initials: "AR",
    name: "Arslan Ali Naqvi",
    role: "Chief Financial Officer",
    credentials: "Runs financial planning, bank coordination, and back-office finance.",
    tags: ["Finance", "Operations"],
    imageSrc: "/images/team/arslan.jpg",
  },
  {
    initials: "SA",
    name: "Salman Ali Naqvi",
    role: "Chief Marketing Officer",
    credentials: "Leads marketing, client acquisition, and project tracking systems.",
    tags: ["Marketing", "Systems"],
    imageSrc: "/images/team/salman.jpg",
  },
] as const;

export const faqs = [
  {
    q: "How do you price engagements?",
    a: "Fixed pricing against a written scope, sized to the milestone. Retainers are available for ongoing work, but every retainer has a defined deliverable per cycle. No open-ended hourly billing.",
  },
  {
    q: "What does a typical timeline look like?",
    a: "From first call to signed scope: about a week. From signed scope to first delivery: typically 3 to 6 weeks depending on size. We optimize for shipping early and iterating, not for a long pre-build phase.",
  },
  {
    q: "Where is the team based, and do you work with international clients?",
    a: "We are headquartered in Islamabad, Pakistan. We work with clients across the region and beyond — Europe, the GCC, North America. Async-first delivery, with synchronous weekly reviews in the client's timezone.",
  },
  {
    q: "How do you handle IP and confidentiality?",
    a: "You own all deliverables outright on payment. An NDA is signed before any sensitive briefing. Source code, designs, and documentation are handed over at the end of each engagement — no platform lock-in.",
  },
  {
    q: "Can you scale beyond a single project?",
    a: "Yes. Many engagements start as a single scoped project and grow into ongoing delivery — additional features, a second product line, or staff augmentation. We size the team to the work, not the other way around.",
  },
  {
    q: "What if we just want a conversation, not a commitment?",
    a: "That is exactly the right place to start. The 30-minute discovery call is no-cost and no-obligation. You walk away with a written scope summary within 48 hours, whether or not we end up working together.",
  },
] as const;

export const thesisParagraphs = [
  "The global economy is shifting toward technology, digital services, remote work, AI, startup ecosystems, and innovation-driven entrepreneurship. Pakistan — with its growing youth population and expanding digital connectivity — sits at the heart of that opportunity.",
  "Pak Venture Point was established to respond to that opportunity by integrating technology, consultancy, freelancing, and venture development into one accountable platform. A client can start with a single project and grow into a long-term relationship without ever being passed between vendors.",
  "Our thesis is straightforward: every engagement has a named owner, a written scope, and a defined definition of done. That is how reputations are built — and how the next generation of Pakistani firms earns international trust.",
] as const;
