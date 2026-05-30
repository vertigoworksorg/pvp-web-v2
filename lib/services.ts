/**
 * Long-form content for the 4 service detail pages.
 * Wording sourced — verbatim where possible — from:
 *   - Concept Paper, Pak Venture Point
 *   - Concept Paper, PVP Consultancy Services (BCS)
 *   - Web-content brief, PVP Consultancy Services
 */

export type ServiceTheme = "warm" | "ocean" | "earth" | "spark";

export type ServiceDetail = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  hero: string;
  theme: ServiceTheme;
  icon: "Users" | "Code2" | "Compass" | "Sparkles";
  deliverables: { title: string; body: string }[];
  audience: string[];
  engagement: { name: string; body: string; suited: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "digital-freelancing": {
    slug: "digital-freelancing",
    number: "01",
    title: "Freelancing Services",
    tagline: "A structured freelancing ecosystem for sustainable income streams.",
    theme: "warm",
    icon: "Users",
    hero:
      "PVP is building a structured freelancing ecosystem capable of generating sustainable local and international income streams. We engage internal team members, associated freelancers, remote professionals, and technical collaborators to deliver well-defined work — on time, against scope.",
    deliverables: [
      {
        title: "Remote software & web development",
        body: "Web development, technical assignments, and outsourced engineering delivered by vetted remote professionals.",
      },
      {
        title: "Digital marketing & graphic design",
        body: "Digital marketing, graphic design, content writing, and brand support — sized to the brief.",
      },
      {
        title: "Technical support & operations",
        body: "Technical support, operations, and proposal writing support for ongoing or one-off needs.",
      },
      {
        title: "Talent shortlists & placement",
        body: "Curated 3-person shortlists with sample work and rates. You choose, we run payroll.",
      },
    ],
    audience: [
      "Early-stage founders without a full design or content function",
      "SMEs needing a reliable freelance bench, not a gig-marketplace lottery",
      "Agencies subcontracting overflow work with a real accountability layer",
    ],
    engagement: [
      {
        name: "Project-based",
        body: "Fixed scope, fixed price, one-off engagement with a single accountable lead.",
        suited: "Defined deliverables, clear deadline.",
      },
      {
        name: "Fractional bench",
        body: "Pre-vetted talent on a recurring monthly retainer — fixed hours per practice area.",
        suited: "Ongoing needs without full-time hire.",
      },
      {
        name: "Talent placement",
        body: "We source, vet, and place. You contract directly. Fee on placement.",
        suited: "You want the relationship to be direct.",
      },
    ],
  },

  "software-development": {
    slug: "software-development",
    number: "02",
    title: "Software Development",
    tagline: "Modern, scalable digital solutions — written to be maintained.",
    theme: "ocean",
    icon: "Code2",
    hero:
      "PVP's Software Development practice delivers modern and scalable digital solutions — websites, mobile applications, ERP systems, SaaS platforms, AI and automation tools, UI/UX design, and cloud-based systems — for businesses, startups, NGOs, educational institutions, and international clients.",
    deliverables: [
      {
        title: "Website & web applications",
        body: "Marketing sites, dashboards, and product web apps built with modern stacks — TypeScript end-to-end where it fits.",
      },
      {
        title: "Mobile applications",
        body: "Native-equivalent builds for iOS and Android, sharing business logic where it makes sense.",
      },
      {
        title: "ERP, SaaS & cloud platforms",
        body: "ERP systems, SaaS platforms, and cloud-based systems — designed for the actual scale of the business.",
      },
      {
        title: "AI & automation tools",
        body: "AI and automation tools, including internal LLM-powered workflows that compress operational hours.",
      },
      {
        title: "UI/UX design",
        body: "Brand systems, product UI work, and the design language that makes the build feel finished.",
      },
      {
        title: "Technical support & maintenance",
        body: "Post-launch maintenance, monitoring, and a 30-day support window included with every build.",
      },
    ],
    audience: [
      "Businesses commissioning their first serious digital product",
      "Startups building v1 of a web or mobile application",
      "NGOs, educational institutions, and international clients replacing legacy tools",
      "Entrepreneurs needing a senior technical partner, not a body-shop",
    ],
    engagement: [
      {
        name: "Fixed-scope build",
        body: "Scoped MVPs and v1 releases. Fixed deliverable, fixed price, 6–16 weeks typical.",
        suited: "You know what you want shipped.",
      },
      {
        name: "Iterative delivery",
        body: "Quarterly roadmap, fortnightly releases, monthly invoicing. Same team across cycles.",
        suited: "Live products needing ongoing build.",
      },
      {
        name: "Embedded team",
        body: "Engineers embedded into your team and processes, reporting into your leadership.",
        suited: "You need capacity, not direction.",
      },
    ],
  },

  consultancy: {
    slug: "consultancy",
    number: "03",
    title: "Consultancy & Advisory",
    tagline:
      "Transforming ideas into impact — professional consultancy for development and business excellence.",
    theme: "earth",
    icon: "Compass",
    hero:
      "PVP Consultancy Services — also operating under the Beacon Consulting (BCS) sub-brand — is the professional advisory and business support wing of Pak Venture Point. It combines strategic thinking, technical expertise, research-based planning, and market-oriented solutions to help clients improve performance, strengthen systems, secure funding, develop projects, and achieve sustainable growth.",
    deliverables: [
      {
        title: "Organizational development",
        body: "Organizational structuring, policy development, strategic planning, operational systems, HR and administrative systems, and institutional strengthening.",
      },
      {
        title: "Proposal writing & resource mobilization",
        body: "Proposal development, grant writing, concept notes, fundraising strategies, donor mapping, business pitches, and investor presentations.",
      },
      {
        title: "Research, policy & planning",
        body: "Research studies, feasibility assessments, baseline and situational analysis, policy reviews, business planning, market research, and development planning.",
      },
      {
        title: "Monitoring & evaluation (M&E)",
        body: "M&E frameworks, results-based management, KPI systems, progress tracking tools, performance evaluation, and data analysis and reporting.",
      },
      {
        title: "Training & capacity building",
        body: "Professional trainings, technical workshops, capacity building programs, leadership development sessions, entrepreneurship training, and freelancing and digital skills training.",
      },
      {
        title: "Business & startup consultancy",
        body: "Business model development, startup strategy, revenue generation planning, digital transformation support, investment readiness, and operational planning.",
      },
      {
        title: "Development sector consultancy",
        body: "Consultancy across climate change, disaster risk reduction (DRR), education, governance, human rights, gender & inclusion, livelihoods, community development, youth development, and social protection.",
      },
    ],
    audience: [
      "NGOs and INGOs",
      "Startups and entrepreneurs",
      "Government institutions",
      "Development agencies",
      "Small and medium enterprises (SMEs)",
      "Educational institutions",
      "Social enterprises",
      "Private companies",
      "Freelancers and professionals",
    ],
    engagement: [
      {
        name: "Sprint engagement",
        body: "4 to 8 weeks of focused consultancy on a specific question, ending in a written recommendation.",
        suited: "A defined question to answer.",
      },
      {
        name: "Embedded advisor",
        body: "Fractional consultancy presence, 1 to 2 days per week, for 3 to 6 months.",
        suited: "Execution capacity, not just advice.",
      },
      {
        name: "Advisory retainer",
        body: "Monthly working sessions plus async access to the consultancy team.",
        suited: "Ongoing perspective on the journey.",
      },
    ],
  },

  "innovative-startups": {
    slug: "innovative-startups",
    number: "04",
    title: "Innovative Startups",
    tagline: "Startup incubation, digital product development, and venture building.",
    theme: "spark",
    icon: "Sparkles",
    hero:
      "PVP's Innovative Startups & Venture Development practice functions as a platform for startup incubation, digital product development, venture building, investor networking, innovation management, and business acceleration. We develop scalable digital products, engage micro-investors and strategic partners, and launch innovative ventures in technology and digital services.",
    deliverables: [
      {
        title: "Startup incubation",
        body: "End-to-end incubation: business model, MVP, early customers, and the operating cadence needed to keep momentum.",
      },
      {
        title: "Digital product & venture building",
        body: "Scalable digital products and mobile applications built inside PVP and spun out as standalone ventures when the time is right.",
      },
      {
        title: "Investor & partnership networking",
        body: "Engagement with micro-investors, strategic partners, and the right network for the venture's stage.",
      },
      {
        title: "Innovation management & acceleration",
        body: "Innovation-driven business models, market-oriented startups, and the support to take them from idea to launch.",
      },
    ],
    audience: [
      "Operators with sector experience and a thesis they want to build",
      "Family offices seeking venture exposure with operator alignment",
      "Existing PVP clients with a venture-shaped opportunity inside their business",
      "Youth entrepreneurs pursuing scalable, market-oriented startups",
    ],
    engagement: [
      {
        name: "Co-founded JV",
        body: "Equity shared with an operator-founder. PVP holds an active operating seat.",
        suited: "Operator + venture-class opportunity.",
      },
      {
        name: "Spin-out incubation",
        body: "Built inside PVP. Spun out with founding team identified.",
        suited: "Adjacent to existing practice work.",
      },
      {
        name: "Strategic backer",
        body: "Capital plus an operating partner. Not passive money.",
        suited: "Existing teams needing the right kind of capital.",
      },
    ],
  },
};

export const serviceOrder = [
  "digital-freelancing",
  "software-development",
  "consultancy",
  "innovative-startups",
] as const;
