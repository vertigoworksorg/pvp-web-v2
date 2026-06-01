/**
 * Dummy blog content for the v2 prototype.
 * Posts are authored by team members defined in lib/content.ts (leaders array).
 *
 * To replace dummy posts with real ones later, just edit this array — the
 * blog index page, detail pages, and related-posts strip all read from here.
 */

export type BlogCategory =
  | "Technology"
  | "Industry"
  | "Operations"
  | "Strategy"
  | "Investors"
  | "Consultancy";

export type Author = {
  name: string;
  role: string;
  imageSrc: string;
  initials: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readMinutes: number;
  publishedAt: string; // ISO date
  author: Author;
  /** background colour pair used to render the cover-art placeholder gradient */
  cover: { from: string; to: string };
  body: {
    lead: string;
    sections: { heading?: string; paragraphs: string[]; pullQuote?: string; bullets?: string[] }[];
  };
};

const tahir: Author = {
  name: "Tahir Hasnain",
  role: "Chief Executive Officer",
  imageSrc: "/images/team/tahir.jpg",
  initials: "TH",
};
const shahan: Author = {
  name: "Shahan Ali Naqvi",
  role: "Chief Operating Officer",
  imageSrc: "/images/team/shahan.jpg",
  initials: "SH",
};
const arslan: Author = {
  name: "Arslan Ali Naqvi",
  role: "Chief Financial Officer",
  imageSrc: "/images/team/arslan.jpg",
  initials: "AR",
};
const salman: Author = {
  name: "Salman Ali Naqvi",
  role: "Chief Marketing Officer",
  imageSrc: "/images/team/salman.jpg",
  initials: "SA",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-first-products-in-emerging-markets",
    title: "Building AI-First Products in Emerging Markets",
    excerpt:
      "Most AI products are still designed for the US and EU. Here's the playbook we use at PVP to ship AI-first software that actually fits the constraints — and the strengths — of an emerging-market customer.",
    category: "Technology",
    readMinutes: 7,
    publishedAt: "2026-05-22",
    author: shahan,
    cover: { from: "#1A5B64", to: "#2A8A92" },
    body: {
      lead:
        "When you build an AI-first product for the United States, you assume reliable connectivity, GPT-tier infra budgets, and a customer who has already accepted that 'AI' is a normal part of the workflow. None of those assumptions hold in Karachi, Lahore, Nairobi, or Dhaka.",
      sections: [
        {
          heading: "Design for connectivity, not capability",
          paragraphs: [
            "The first hard constraint isn't model size — it's bandwidth. A consultant in a tier-2 Pakistani city can pull 8 Mbps on a good day and 0.5 Mbps on a bad one. Your product has to degrade gracefully, not crash gracefully. We build every PVP AI surface with an offline-first scaffold: cached prompts, local-first state, async sync to the cloud model when bandwidth permits.",
            "That single architectural decision determines whether the product feels magical or broken. Get it right and your customer trusts the AI; get it wrong and they revert to spreadsheets within a week.",
          ],
        },
        {
          heading: "Inference cost is your gross margin",
          paragraphs: [
            "A $20 SaaS subscription in Pakistan converts to roughly PKR 5,600 — and that has to cover not only your inference but localisation, sales support, and platform fees. We route 70% of our model calls to smaller, fine-tuned open-source models hosted regionally, and only escalate to frontier models for the genuinely hard tasks.",
            "The customer doesn't see the routing — they see consistent quality at a price they can afford. The economics see a 4x improvement in gross margin.",
          ],
          pullQuote:
            "The customer doesn't see the routing — they see consistent quality at a price they can afford.",
        },
        {
          heading: "Local context is a moat, not a feature",
          paragraphs: [
            "Frontier models are trained on web data that is overwhelmingly North American. They know American tax codes, American business norms, American writing conventions. They don't know the difference between a Pakistani SECP filing and an SRO notice, and they confuse Urdu transliteration with Hindi half the time.",
            "Every PVP AI surface ships with a domain-tuned overlay — a small retrieval-augmented layer trained on the specific regulatory, linguistic, and operational context the customer actually works in. That overlay is the product. The frontier model is a substrate.",
          ],
          bullets: [
            "Local regulatory corpus retrieval",
            "Code-mixed Urdu / English handling",
            "Region-specific financial calendars and norms",
            "Cultural-context-aware tone modeling",
          ],
        },
        {
          heading: "The bet",
          paragraphs: [
            "AI products built for emerging markets won't look like Western products with a translation layer bolted on. They'll be architecturally different — offline-first, inference-tiered, domain-tuned — and the firms that figure this out early will own the next decade of regional software.",
            "That's the thesis we're operating on at PVP. We'd rather build it than watch it.",
          ],
        },
      ],
    },
  },
  {
    slug: "why-pakistan-is-the-next-tech-frontier",
    title: "Why Pakistan is the Next Tech Frontier",
    excerpt:
      "A youth-heavy population, a strong English-language tradition, and a wave of returning operator-founders are converging into something the rest of the world hasn't priced in yet.",
    category: "Industry",
    readMinutes: 6,
    publishedAt: "2026-05-15",
    author: tahir,
    cover: { from: "#E97724", to: "#F58A3D" },
    body: {
      lead:
        "Pakistan has 240 million people, a median age of 22, and roughly 100 million smartphone users. The next decade of regional software will be shaped here whether the global venture industry is paying attention or not.",
      sections: [
        {
          heading: "The demographic dividend is real",
          paragraphs: [
            "Half the country is under 25 years old. The university system graduates around 75,000 engineers a year, most of them working in English from day one. The labour cost of a senior full-stack engineer is roughly a fifth of the same role in Western Europe — and the gap is closing, but slowly.",
            "That arbitrage funded the first wave of outsourcing. The next wave will be different: instead of services exports, it'll be products built locally and sold globally.",
          ],
        },
        {
          heading: "The returning-founder wave",
          paragraphs: [
            "Something interesting is happening in 2025–2026: a generation of Pakistani operators who spent a decade at Western tech companies are coming home. They have FAANG-level engineering chops, founder-level resilience, and — crucially — local context. That's the bundle every successful market needs and almost no one had before.",
            "We see this in our own deal flow at PVP. The startup founders we meet today are dramatically more polished than the founders we met three years ago.",
          ],
          pullQuote:
            "FAANG-level engineering chops, founder-level resilience, and — crucially — local context.",
        },
        {
          heading: "What's still missing",
          paragraphs: [
            "The capital stack is the bottleneck. Pakistan has angel money and it has growth-stage money. What it doesn't have, in any volume, is the seed-to-Series-A bridge that lets a real product company graduate from 'three founders in a coworking space' to 'fifteen people shipping every week.'",
            "Part of why PVP exists is to plug that exact gap — not as a fund, but as an operator-led venture platform that can build, back, and co-found alongside founders who would otherwise stall out at the awkward middle.",
          ],
          bullets: [
            "Seed-to-Series-A bridge capital",
            "Operator-led venture support",
            "Regional GTM infrastructure",
            "Founder-experienced advisors",
          ],
        },
        {
          heading: "Pricing it in",
          paragraphs: [
            "International capital is starting to notice — the cheques are flowing, slowly, into the more obvious sectors like e-commerce and fintech. But the deeper opportunities, the AI tooling and B2B SaaS plays, are still mispriced.",
            "That mispricing won't last. Get involved early or wait and pay 5x more in three years. Those are the only two options.",
          ],
        },
      ],
    },
  },
  {
    slug: "the-new-freelancing-playbook-for-smes",
    title: "The New Freelancing Playbook for SMEs",
    excerpt:
      "Marketplaces are noisy and unreliable. In-house headcount is expensive and rigid. The bench model — vetted talent, fixed monthly hours — is where serious SMEs are landing.",
    category: "Operations",
    readMinutes: 5,
    publishedAt: "2026-05-08",
    author: salman,
    cover: { from: "#0F766E", to: "#14B8A6" },
    body: {
      lead:
        "If you're running a 10–50 person business and you need design, content, ops, or technical work done well, you have three options. Two of them are bad. Here's why most of our SME clients land on the third.",
      sections: [
        {
          heading: "Option 1: Marketplaces",
          paragraphs: [
            "Upwork, Fiverr, and their regional equivalents are useful for one-off tasks. They're a disaster for ongoing work. The talent churn is brutal, quality varies wildly between deliverables, and someone on your team has to spend hours every week filtering, briefing, and managing rework.",
            "The hidden cost is your most expensive person's time. By the time you've factored in that overhead, the cheap freelancer wasn't cheap.",
          ],
        },
        {
          heading: "Option 2: In-house headcount",
          paragraphs: [
            "Hiring a full-time designer or content writer at a 20-person company is overcommitting. The role exists 30% of the month — the other 70% you're paying salary, benefits, and management attention for capacity you don't need. Worse, you've signed up for the firing decision when business slows.",
            "In-house is right when the work is daily and central. For everything else, it's the wrong shape.",
          ],
          pullQuote: "The hidden cost is your most expensive person's time.",
        },
        {
          heading: "Option 3: The bench",
          paragraphs: [
            "What modern SMEs are landing on instead is the bench model: a small number of pre-vetted contributors retained for a fixed monthly hour budget, managed by an accountable lead at the supplier. You pay one invoice, you brief one person, and the talent on the other end is already up to speed on your brand, your tone, and your context.",
            "It looks like outsourcing on paper. It feels like having a small in-house team, because the people don't churn and the institutional knowledge accumulates.",
          ],
          bullets: [
            "Pre-vetted, persistent contributors",
            "One accountable lead at the supplier",
            "Fixed monthly hours, flex within them",
            "Institutional knowledge that compounds",
          ],
        },
        {
          heading: "How to make it work",
          paragraphs: [
            "The bench model only works if the supplier takes accountability seriously. Look for the suppliers who put a named lead on the relationship, who write a monthly summary of what was delivered, and who tell you no when you're scoping something badly. That's what separates a real bench from a fancy marketplace.",
            "PVP's freelancing practice is built around exactly this model — and we'll say no when the brief is wrong. Most of our clients tell us that's the part they value most.",
          ],
        },
      ],
    },
  },
  {
    slug: "from-idea-to-mvp-90-days-with-pvp",
    title: "From Idea to MVP: 90 Days With PVP",
    excerpt:
      "The 90-day engagement structure we use to take a founder from 'I have an idea' to 'I have something I can put in front of paying customers' — broken down week by week.",
    category: "Strategy",
    readMinutes: 8,
    publishedAt: "2026-04-30",
    author: shahan,
    cover: { from: "#103E44", to: "#1F7077" },
    body: {
      lead:
        "Most early-stage product builds either ship late or ship wrong. The 90-day MVP framework we use at PVP is designed to avoid both outcomes. Here's how it breaks down.",
      sections: [
        {
          heading: "Weeks 1–2: Define what done looks like",
          paragraphs: [
            "Almost every bad MVP comes from skipping this step. Before any code is written, we agree in writing on three things: the single user journey we're shipping, the customer who will validate it, and the measurable signal that tells us it worked.",
            "If we can't agree on those three things in two weeks, the project doesn't proceed. It's not the right time to build.",
          ],
        },
        {
          heading: "Weeks 3–6: Architecture and core build",
          paragraphs: [
            "Most teams over-engineer at this stage. We deliberately under-engineer: smallest schema that supports the user journey, cheapest hosting that meets the SLA, no admin tooling beyond what the team needs to operate. Anything more is wasted effort because the MVP's job is to be killed and replaced.",
            "By the end of week 6, the core user journey works end-to-end on a real (not seeded) database. Nothing else is built.",
          ],
          pullQuote: "The MVP's job is to be killed and replaced.",
        },
        {
          heading: "Weeks 7–9: Real users, fast iteration",
          paragraphs: [
            "This is where most founder energy gets misallocated. The temptation is to add features. The actual job is to put the MVP in front of five to ten paying or paying-intent customers and watch what they do.",
            "We run a weekly user session, write up what we learned, and ship the highest-priority change before the next session. Three cycles of this is usually enough to tell us whether we're on to something or whether we should pivot.",
          ],
          bullets: [
            "5–10 paying or paying-intent users",
            "Weekly customer sessions",
            "Highest-priority change shipped each week",
            "Decision point: continue / pivot / kill",
          ],
        },
        {
          heading: "Weeks 10–12: Handover and decision",
          paragraphs: [
            "By week 10 we know enough to write a real strategy doc — what we learned, what to build next, what to drop, what budget is needed for the next 90 days. We hand the founder a fully documented codebase, the analytics dashboard, the customer call recordings, and a written next-quarter plan.",
            "From that point the founder can either continue with PVP, take it in-house, or move to a different supplier. We've engineered the handover deliberately to make any of those three viable.",
          ],
        },
      ],
    },
  },
  {
    slug: "safe-notes-explained-modern-capital-for-modern-ventures",
    title: "SAFE Notes Explained: Modern Capital for Modern Ventures",
    excerpt:
      "Why we structure the PVP micro-investor initiative as SAFE-based participation, what that means for early backers, and how it compares to the older equity instruments most local investors are still familiar with.",
    category: "Investors",
    readMinutes: 6,
    publishedAt: "2026-04-22",
    author: arslan,
    cover: { from: "#1A5B64", to: "#0F766E" },
    body: {
      lead:
        "Simple Agreements for Future Equity (SAFEs) have quietly become the global default for early-stage venture capital. The structure makes sense for both founders and investors — once you understand what it actually does.",
      sections: [
        {
          heading: "What a SAFE is, plainly",
          paragraphs: [
            "A SAFE is a contract between an investor and a company that says: 'I'm giving you money now. In exchange, when the company next raises a priced equity round, my money converts into shares — at the price the next investors pay, possibly discounted, possibly capped.'",
            "It defers the hard valuation question to a later round when more information is available. That's almost always better than guessing the valuation at the earliest stage when there's nothing real to value.",
          ],
        },
        {
          heading: "Why founders like it",
          paragraphs: [
            "SAFEs are fast to close. There's no extended negotiation of share class rights, no board seat allocation, no liquidation waterfall to argue about. You agree on the cheque size, the cap, and the discount — and you sign.",
            "The trade is that the founder gives up a small amount of valuation flexibility in exchange for not burning months on documentation and legal fees.",
          ],
          pullQuote:
            "It defers the hard valuation question to a later round when more information is available.",
        },
        {
          heading: "Why investors like it",
          paragraphs: [
            "Sophisticated early-stage investors prefer SAFEs because the economics actually compound in their favour: a low cap means a low effective entry price, and the discount applies on top. If the company succeeds, the SAFE-stage investor captures most of the appreciation between the SAFE close and the priced round.",
            "The risk is real, of course. SAFEs don't have the protective rights of equity. If things go sideways, SAFE holders are usually behind everyone else. The compensation for that risk is the entry price.",
          ],
          bullets: [
            "Low effective entry price (cap + discount)",
            "Fast close, low legal cost",
            "No protective rights pre-conversion",
            "Investor risk is real — diligence accordingly",
          ],
        },
        {
          heading: "PVP's structure",
          paragraphs: [
            "The PVP Micro-Investor Participation Initiative is structured as a SAFE-based pool — selected early participants gain exposure to multiple ventures developed under the PVP umbrella, with conversion economics defined at the umbrella level rather than per-venture.",
            "We're happy to walk any prospective participant through the structure in detail. Request the investor information pack and we'll set up a call.",
          ],
        },
      ],
    },
  },
  {
    slug: "designing-consultancy-engagements-that-actually-deliver",
    title: "Designing Consultancy Engagements That Actually Deliver",
    excerpt:
      "Most consultancy engagements end in a slide deck no one reads. Here's the engagement structure we've adopted at PVP that forces real outcomes — and why our retainers are scoped per cycle, not open-ended.",
    category: "Consultancy",
    readMinutes: 5,
    publishedAt: "2026-04-14",
    author: tahir,
    cover: { from: "#E97724", to: "#C95F12" },
    body: {
      lead:
        "If your only consultancy outputs are decks and meetings, you're paying for activity, not outcomes. The structure of the engagement determines which you get.",
      sections: [
        {
          heading: "The deliverable trap",
          paragraphs: [
            "Traditional consultancy engagements bill against activity: hours, days, workshops, slides. The incentive is to produce more activity, not better outcomes. The client ends up with a beautiful 60-page strategy document and nothing changes on the ground.",
            "We deliberately structure PVP consultancy engagements against measurable outputs instead — implemented systems, signed-off policies, trained staff, mobilised funding. The deck is a by-product of the work, not the deliverable.",
          ],
        },
        {
          heading: "Sprint engagements: four to eight weeks, one question",
          paragraphs: [
            "Most of our consultancy engagements run as time-boxed sprints. Four to eight weeks, one well-defined question, a written recommendation at the end. The question has to be specific enough that the client can actually act on the answer.",
            "Vague briefs get turned into specific briefs before we sign. 'Help us grow' becomes 'Should we open a Karachi office before March, and what does the first 90 days look like if we do?' That second brief is something we can answer.",
          ],
          pullQuote: "The deck is a by-product of the work, not the deliverable.",
        },
        {
          heading: "Retainers: scoped per cycle",
          paragraphs: [
            "When ongoing consultancy is the right fit, we use a retainer — but every retainer cycle has its own scope and its own deliverable. The retainer isn't a licence to bill; it's a continuing commitment to ship something concrete every month.",
            "If we get to the end of a cycle and haven't shipped, the next cycle doesn't start until we agree why. Most consultancy relationships die slow deaths because no one asks that question.",
          ],
          bullets: [
            "Per-cycle deliverable, signed off in advance",
            "Monthly check-in: did we ship?",
            "No automatic renewal without sign-off",
            "Honest 'this isn't working' conversations",
          ],
        },
        {
          heading: "What this looks like for clients",
          paragraphs: [
            "Clients who work with us this way tell us the same thing: it doesn't feel like a consultancy engagement, it feels like having a senior operator on call. That's deliberate. The structure produces the feeling.",
            "Bring us a brief — vague or specific — and we'll turn it into something we can both commit to. That conversation is free.",
          ],
        },
      ],
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return blogPosts.slice(0, count);
  const rest = blogPosts.filter((_, i) => i !== idx);
  return rest.slice(0, count);
}
