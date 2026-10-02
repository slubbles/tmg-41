export const BRAND = {
  name: "TMG",
  fullName: "Thela Media Group",
  tagline: "Advertising systems connected by intelligence infrastructure",
  phones: ["348-7753434", "888-6021919"],
} as const;

export const NAV: { href: string; label: string }[] = [
  { href: "/blog", label: "Blog" },
  { href: "/insights", label: "Insights" },
  { href: "/industries/education", label: "Education" },
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/platforms/catalyst", label: "Catalyst" },
  { href: "/platforms/genesis", label: "Genesis" },
  { href: "/platforms/oracle", label: "Oracle" },
];

export const PLATFORMS: {
  slug: string;
  num: string;
  name: string;
  blurb: string;
  tags: string[];
}[] = [
  {
    slug: "/platforms/velocity-ai",
    num: "01",
    name: "Velocity",
    blurb:
      "Paid media deployment and optimization support for approved campaign plans: budget movement, bid adjustments, creative rotation, and performance feedback.",
    tags: ["Media Deployment", "Budget Movement", "Performance Feedback"],
  },
  {
    slug: "/platforms/catalyst",
    num: "02",
    name: "Catalyst",
    blurb:
      "End-to-end marketing operations automation, from lead nurturing and customer journey orchestration to content distribution and attribution modeling.",
    tags: ["Ops Automation", "Journey Orchestration", "Attribution"],
  },
  {
    slug: "/platforms/genesis",
    num: "03",
    name: "Genesis",
    blurb:
      "Creative and campaign support layer for turning strategy into structured briefs, tests, variants, reporting, and repeatable execution.",
    tags: ["Creative Ops", "Testing", "Execution"],
  },
  {
    slug: "/platforms/oracle",
    num: "04",
    name: "Oracle",
    blurb:
      "Market and performance intelligence for reading customer behavior, competitive signals, and campaign data before making the next media decision.",
    tags: ["Market Signals", "Forecasting", "Decision Support"],
  },
];

export const QUOTES: {
  slug: string;
  company: string;
  person: string;
  quote: string;
}[] = [
  {
    slug: "medical-trials",
    company: "Medical Trials Company",
    person: "Tony, CEO",
    quote:
      "TMG developed a marketing campaign and a scheduling process for acquiring patients that was so successful, we ended up as the top producing site in the country for our first clinical trial. Many studies later, and not only are their efforts still producing stellar results in an ever changing landscape, but they have the same dedication and focus on results that an equity owner would possess. I can't say enough good things about TMG. Don't miss an opportunity to work with their amazing talent.",
  },
  {
    slug: "flowtex-energy",
    company: "FlowTex Energy",
    person: "Beau, President",
    quote:
      "After launching on September 13, TMG generated over 450 qualified leads within 6 weeks and converted 11 into investing partners, resulting in nearly $1,000,000 in new funding. The total cost was substantially less than our prior agency and delivered an exceptionally higher return on investment.",
  },
  {
    slug: "fintech-startup",
    company: "Fintech Startup",
    person: "Carl, CMO",
    quote:
      "We engaged 5 different digital marketing agencies whom promised a lot, but failed to deliver. By the end of my first meeting with TMG, I was impressed with their depth of knowledge and subject matter expertise. TMG's approach to business can be expressed in 2 words, trusted partnership. We were absolutely delighted with the business results TMG helped us achieve.",
  },
  {
    slug: "the-previvor-foundation",
    company: "The Previvor Foundation",
    person: "Allyn, Founder",
    quote:
      "TMG created an intuitive, professional platform that revolutionized how we serve young women affected by breast cancer. Their work helped increase fundraising, strengthen our professional presence, and expand our reach to support more women who need these resources.",
  },
];

export const CLIENT_LOGOS: { file: string; alt: string }[] = [
  { file: "/logos/forcepoint.png", alt: "Forcepoint" },
  { file: "/logos/jecobra-aviation.png", alt: "JeCobra Aviation" },
  { file: "/logos/auntie-annes.png", alt: "Auntie Anne's" },
  { file: "/logos/qualico.png", alt: "Qualico" },
  { file: "/logos/novak-capital.png", alt: "Novak Capital" },
  { file: "/logos/advanced-medical-trials.png", alt: "Advanced Medical Trials" },
  { file: "/logos/restart.png", alt: "Restart" },
  { file: "/logos/the-previvor.png", alt: "The Previvor" },
  { file: "/logos/thryve-care.svg", alt: "Thryve Care" },
  { file: "/logos/be-resources.png", alt: "BE Resources" },
];

export const SERVICES: {
  slug: string;
  name: string;
  blurb: string;
}[] = [
  {
    slug: "/services/ai-powered-strategy",
    name: "AI-Powered Strategy",
    blurb:
      "Advertising strategy built on judgment, data, and discipline — models and media plans that compound.",
  },
  {
    slug: "/services/marketing-intelligence",
    name: "Marketing Intelligence",
    blurb:
      "Reading customer behavior, competitive signals, and campaign data before the next media decision.",
  },
  {
    slug: "/services/creative-development",
    name: "Creative Development",
    blurb:
      "Structured briefs, tests, variants, and reporting that turn strategy into repeatable execution.",
  },
  {
    slug: "/services/brand-architecture",
    name: "Brand Architecture",
    blurb:
      "Positioning and brand systems that hold up across paid, owned, and earned channels.",
  },
  {
    slug: "/services/performance-media",
    name: "Performance Media",
    blurb:
      "Budget movement, bid adjustments, creative rotation, and performance feedback on approved campaign plans.",
  },
  {
    slug: "/services/marketing-attribution",
    name: "Marketing Attribution",
    blurb:
      "Attribution modeling that ties spend to qualified pipeline, not vanity metrics.",
  },
  {
    slug: "/services/digital-transformation",
    name: "Digital Transformation",
    blurb:
      "Modernizing how marketing teams capture, organize, and act on their own data.",
  },
  {
    slug: "/services/content-strategy",
    name: "Content Strategy",
    blurb:
      "Content distribution and message architecture built for measurable demand.",
  },
  {
    slug: "/services/customer-analytics",
    name: "Customer Analytics",
    blurb:
      "Customer behavior and cohort analysis that sharpens targeting and retention.",
  },
  {
    slug: "/services/marketing-automation",
    name: "Marketing Automation",
    blurb:
      "Lead nurturing, journey orchestration, and content distribution as one system.",
  },
  {
    slug: "/services/fractional-cmo-services",
    name: "Fractional CMO Services",
    blurb:
      "Senior marketing leadership embedded in the business, accountable to growth.",
  },
];

export const INDUSTRIES: {
  slug: string;
  name: string;
  blurb: string;
}[] = [
  {
    slug: "/industries/healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    blurb:
      "Patient acquisition and clinical-trial growth programs with compliance in mind.",
  },
  {
    slug: "/industries/financial-services",
    name: "Financial Services",
    blurb:
      "Demand generation for fintech, capital, and professional finance brands.",
  },
  {
    slug: "/industries/technology-saas",
    name: "Technology & SaaS",
    blurb:
      "Pipeline systems for software companies selling to demanding buyers.",
  },
  {
    slug: "/industries/real-estate",
    name: "Real Estate",
    blurb:
      "Lead generation and market intelligence for developers and brokerages.",
  },
  {
    slug: "/industries/energy-utilities",
    name: "Energy & Utilities",
    blurb:
      "Investor and customer acquisition for energy brands entering new markets.",
  },
  {
    slug: "/industries/retail-ecommerce",
    name: "Retail & E-Commerce",
    blurb:
      "Full-funnel media and creative testing that moves revenue, not just clicks.",
  },
  {
    slug: "/industries/manufacturing",
    name: "Manufacturing",
    blurb:
      "Qualified pipeline for industrial brands with long, considered sales cycles.",
  },
  {
    slug: "/industries/professional-services",
    name: "Professional Services",
    blurb:
      "Trusted-partnership marketing for firms that sell expertise.",
  },
  {
    slug: "/industries/education",
    name: "Education",
    blurb:
      "Enrollment and outreach programs for education brands and foundations.",
  },
  {
    slug: "/industries/non-profit",
    name: "Non-Profit",
    blurb:
      "Mission-driven fundraising and reach expansion with measurable return.",
  },
];

export const CAPABILITIES: {
  slug: string;
  name: string;
  blurb: string;
}[] = [
  {
    slug: "/platforms/artificial-intelligence",
    name: "AI Infrastructure",
    blurb:
      "The AI backbone that connects TMG's platforms and media systems.",
  },
  {
    slug: "/platforms/machine-learning-models",
    name: "Machine Learning Models",
    blurb:
      "Models trained on campaign data to sharpen bidding and targeting.",
  },
  {
    slug: "/platforms/predictive-analytics",
    name: "Predictive Analytics",
    blurb:
      "Forecasting customer behavior and campaign outcomes before spend moves.",
  },
  {
    slug: "/platforms/data-science",
    name: "Data Science",
    blurb:
      "Analysis that turns raw marketing data into media decisions.",
  },
  {
    slug: "/platforms/crm-integration",
    name: "CRM Integration",
    blurb:
      "Connecting media to the CRM so attribution reflects real pipeline.",
  },
  {
    slug: "/platforms/api-development",
    name: "API Development",
    blurb:
      "APIs that move data between platforms, media, and reporting.",
  },
  {
    slug: "/platforms/real-time-optimization",
    name: "Real-Time Optimization",
    blurb:
      "Budget movement and bid adjustments as performance signals arrive.",
  },
  {
    slug: "/platforms/ab-testing-platform",
    name: "A/B Testing Platform",
    blurb:
      "Structured tests and variants that compound creative and media learnings.",
  },
];

export const FOOTER_LINKS: {
  heading: string;
  links: { href: string; label: string }[];
}[] = [
  {
    heading: "Services",
    links: SERVICES.map((s) => ({ href: s.slug, label: s.name })),
  },
  {
    heading: "Industries",
    links: INDUSTRIES.map((s) => ({ href: s.slug, label: s.name })),
  },
  {
    heading: "Capabilities",
    links: CAPABILITIES.map((s) => ({ href: s.slug, label: s.name })),
  },
  {
    heading: "Resources",
    links: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/insights", label: "Industry Insights" },
      { href: "/growth-framework", label: "Growth Framework" },
      { href: "/blog", label: "Marketing Blog" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];
