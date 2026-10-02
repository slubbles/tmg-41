export type DetailSection = {
  heading: string;
  body: string;
};

export type DetailItem = {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  sections: DetailSection[];
  caseStudy?: {
    company: string;
    sector?: string;
    challenge?: string;
    solution?: string;
    result?: string;
    metrics?: { value: string; label: string }[];
    quote?: { text: string; person: string };
  };
  proof?: { value: string; label: string }[];
  relatedHeading?: string;
  related: { href: string; label: string }[];
};

const CS = {
  energy: {
    company: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge:
      "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon paid media entirely.",
    solution:
      "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, handling onboarding, design, marketing materials, and ongoing campaign management.",
    result:
      "Within 6 weeks of the initial campaign launch, TMG generated over 450 qualified leads and helped drive over $1MM in initial raise.",
    metrics: [
      { value: "110+", label: "New Partners" },
      { value: "$15MM+", label: "New Raise" },
      { value: "86%", label: "Cost Reduction" },
      { value: "33x", label: "ROAS" },
    ],
  },
  dpc: {
    company: "Direct Primary Care Clinic",
    sector: "Healthcare / Direct Primary Care",
    challenge:
      "A brand new direct primary care clinic needed to launch in the competitive Colorado Springs market with zero brand recognition.",
    solution:
      "TMG developed the complete brand identity, go-to-market strategy, and market positioning from the ground up.",
    result:
      "The clinic grew at more than twice the national average for direct primary care, with sustained month-over-month growth.",
    metrics: [
      { value: "2.2x", label: "National Growth Avg" },
      { value: "MOM", label: "Sustained Growth" },
      { value: "Year 1", label: "Results Timeline" },
    ],
  },
  trials: {
    company: "Medical Trials Company",
    sector: "Healthcare / Clinical Trials",
    challenge:
      "A clinical trials company needed to acquire patients for their studies efficiently and at scale.",
    solution:
      "TMG developed a comprehensive marketing campaign paired with a scheduling process specifically designed for patient acquisition.",
    result:
      "The campaign became the #1 producing site in the country for their first clinical trial, with continued success across later studies.",
    metrics: [
      { value: "#1", label: "National Ranking" },
      { value: "Multi-Study", label: "Success" },
      { value: "Ongoing", label: "Results" },
    ],
  },
  fintech: {
    company: "B2C Fintech Startup",
    sector: "Financial Technology",
    challenge:
      "A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit after 5 failed agency engagements.",
    solution:
      "TMG took a practical, transparent approach, spending hours with the team to explain what would be done, why, and what to expect.",
    result:
      "The startup found a trusted partner and reached product-market fit with cost-savings guidance throughout the engagement.",
    metrics: [
      { value: "5", label: "Prior Failed Agencies" },
      { value: "PMF", label: "Product-Market Fit" },
    ],
  },
  previvor: {
    company: "Non-Profit Health Foundation",
    sector: "Non-Profit / Women's Health",
    challenge:
      "A digital women's health platform needed to transform their online presence to better serve young women affected by breast cancer.",
    solution:
      "TMG translated the foundation's design vision into reality while adding sophisticated functionality that streamlined operations.",
    result:
      "Increased fundraising success, an enhanced professional presence, and expanded reach to support more young women who need these resources.",
    quote: {
      text:
        "TMG created an intuitive, professional platform that revolutionized how we serve young women affected by breast cancer.",
      person: "Allyn, Founder · The Previvor Foundation",
    },
    metrics: [
      { value: "↑", label: "Fundraising" },
      { value: "↑", label: "Reach" },
    ],
  },
};

export const DETAILS: Record<string, DetailItem> = {
  // ─────────────────── SERVICES ───────────────────
  "services/ai-powered-strategy": {
    slug: "services/ai-powered-strategy",
    eyebrow: "Strategic Services",
    title: "AI-Powered Strategy That Sees Around Corners",
    lede:
      "Stop reacting to market changes. Start predicting them. Our AI strategy process analyzes market, customer, and competitive signals to identify opportunities and threats before your competitors do.",
    sections: [
      {
        heading: "Predictive Market Intelligence",
        body:
          "AI-assisted market intelligence monitors signals across your market to identify trends, threats, and opportunities before they become obvious. Search volume shifts, competitive moves, and audience intent surface in time to act — not in next quarter's retrospective. Threat assessment, trend forecasting across search, social, news, and industry data sources, and market opportunity scoring come standard.",
      },
      {
        heading: "Audience Strategy Optimization",
        body:
          "Strategy is only as good as the audience model behind it. We model who is actually buying, what they respond to, and where the next dollar should go — then translate that model into channel plans, creative angles, and offer strategy the team can execute.",
      },
      {
        heading: "Resource Allocation Modeling",
        body:
          "Budget allocation is modeled against expected return instead of debated on instinct. Scenarios show what happens when spend moves between channels, audiences, and offers, so decisions are made with evidence on the table.",
      },
      {
        heading: "Scenario Modeling & Monitoring",
        body:
          "Strategic intelligence runs continuously: market signals, cross-channel data, scenario modeling, case-backed proof, 24/7 monitoring, human review, and monthly briefs as a decision-support cadence.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More services",
    related: [
      { href: "/services/marketing-intelligence", label: "Marketing Intelligence" },
      { href: "/services/performance-media", label: "Performance Media" },
      { href: "/growth-framework", label: "The Growth Framework" },
    ],
  },
  "services/marketing-intelligence": {
    slug: "services/marketing-intelligence",
    eyebrow: "Intelligence Services",
    title: "Marketing Intelligence That Turns Data Into Decisions",
    lede:
      "Stop drowning in dashboards. Start driving results. Our intelligence platform transforms fragmented data across all your marketing channels into unified, actionable insights.",
    sections: [
      {
        heading: "Unified Intelligence Platform",
        body:
          "Your marketing data is scattered across platforms that do not talk to each other. Our intelligence layer consolidates every channel into a single view, so decisions are made on one picture of performance instead of five.",
      },
      {
        heading: "Cross-Channel Attribution",
        body:
          "Understand the true impact of every marketing touchpoint. Our intelligence layer traces conversions back through the full path, revealing what actually moves revenue.",
      },
      {
        heading: "Predictive Performance",
        body:
          "Forward-looking models forecast campaign performance and customer value before spend is committed, so budgets move toward expected return rather than habit.",
      },
      {
        heading: "Competitive Intelligence",
        body:
          "Monitor visible competitive activity across channels so media, creative, and offer decisions are made with better context — offer changes, campaign launches, and messaging shifts.",
      },
      {
        heading: "Automated Reporting",
        body:
          "Readable summaries, follow-up questions, and next-step recommendations replace dashboard archaeology. Reports arrive with the decision they support attached.",
      },
      {
        heading: "Intelligence Implementation Process",
        body:
          "Data integration: we connect to all your marketing platforms, analytics tools, CRM systems, and data warehouses. Data harmonization: raw data uses different naming conventions, metrics, and formats — we normalize everything into one schema. Intelligence configuration: custom dashboards, reports, and predictive models specific to your business. Insight activation: real-time data sync, automated reporting, and predictive recommendations go live with the team trained to use them.",
      },
    ],
    caseStudy: { ...CS.fintech },
    relatedHeading: "More services",
    related: [
      { href: "/services/customer-analytics", label: "Customer Analytics" },
      { href: "/services/marketing-attribution", label: "Marketing Attribution" },
      { href: "/platforms/oracle", label: "TMG Oracle" },
    ],
  },
  "services/creative-development": {
    slug: "services/creative-development",
    eyebrow: "Creative Services",
    title: "Creative That Converts, Not Just Captivates",
    lede:
      "Beautiful creative that fails to convert is expensive art. We combine creative excellence with data science to produce campaigns, design, and content that are built to perform.",
    sections: [
      {
        heading: "Structured Briefs",
        body:
          "Every campaign starts with a brief that carries strategy, offer context, audience notes, and channel constraints — so the work that follows is aimed, not improvised.",
      },
      {
        heading: "Campaign Variants",
        body:
          "Structured ad angles, audience-specific variants, landing-page notes, and testing plans are generated for human review, then deployed through TMG Velocity.",
      },
      {
        heading: "Brand Guardrails",
        body:
          "Messaging stays aligned to approved positioning, claims, voice, and compliance requirements so campaign work remains consistent across every channel.",
      },
      {
        heading: "Testing & Reporting Workflow",
        body:
          "Variant results return as readable summaries and next-step recommendations, so each round of creative compounds the learning of the last one.",
      },
    ],
    caseStudy: { ...CS.previvor },
    relatedHeading: "More services",
    related: [
      { href: "/services/brand-architecture", label: "Brand Architecture" },
      { href: "/services/content-strategy", label: "Content Strategy" },
      { href: "/platforms/genesis", label: "TMG Genesis" },
    ],
  },
  "services/brand-architecture": {
    slug: "services/brand-architecture",
    eyebrow: "Brand Strategy",
    title: "Brand Architecture That Builds Equity, Not Confusion",
    lede:
      "Disjointed brands waste marketing dollars and confuse customers. We architect cohesive brand systems that clarify positioning, establish hierarchy, and create freedom within a framework.",
    sections: [
      {
        heading: "Positioning & Differentiation",
        body:
          "Define what makes your company unique and why customers should choose you over competitors. Identify your ideal positioning against the market, then build the message architecture that carries it consistently.",
      },
      {
        heading: "Brand Systems",
        body:
          "Logo systems, voice, claims, and compliance requirements are organized into one governed system, so campaign work stays consistent as it scales across channels and teams.",
      },
      {
        heading: "Messaging Hierarchy",
        body:
          "Every audience gets the right message at the right level of the funnel. We structure the hierarchy from brand promise to campaign message to ad variant, so nothing contradicts anything.",
      },
      {
        heading: "Go-to-Market Positioning",
        body:
          "For launches and new markets, we build the complete brand identity and go-to-market strategy from the ground up — the same discipline we brought to a direct primary care clinic that grew at more than twice the national average.",
      },
    ],
    caseStudy: { ...CS.dpc },
    relatedHeading: "More services",
    related: [
      { href: "/services/creative-development", label: "Creative Development" },
      { href: "/services/content-strategy", label: "Content Strategy" },
    ],
  },
  "services/performance-media": {
    slug: "services/performance-media",
    eyebrow: "Media Services",
    title: "Performance Media That Actually Performs",
    lede:
      "Your competitors are making campaign decisions on guesswork. You will invest strategically with TMG Velocity, which predicts winners, eliminates waste, and scales what works.",
    sections: [
      {
        heading: "Deployment on Approved Plans",
        body:
          "Campaigns launch from approved plans — audience notes, creative variants, and channel direction carried through exactly as the team built them.",
      },
      {
        heading: "Budget Movement",
        body:
          "Spend is protected, reduced, or moved based on performance, audience response, and account priorities. Budget pacing and spend controls are reviewed continuously.",
      },
      {
        heading: "Bid Adjustments",
        body:
          "Bid and campaign settings adjust when performance, competition, or inventory changes — not on a quarterly retrospective schedule.",
      },
      {
        heading: "Creative Rotation & Feedback",
        body:
          "Approved variants are tracked for traction, rotated deliberately, and their results fed back into the next round of briefs and tests.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More services",
    related: [
      { href: "/platforms/velocity-ai", label: "TMG Velocity" },
      { href: "/platforms/real-time-optimization", label: "Real-Time Optimization" },
      { href: "/services/marketing-attribution", label: "Marketing Attribution" },
    ],
  },
  "services/marketing-attribution": {
    slug: "services/marketing-attribution",
    eyebrow: "Attribution Services",
    title: "Know What Actually Drives Revenue",
    lede:
      "Last-click attribution lies. First-click oversimplifies. Platform reporting is self-serving. Our custom attribution models reveal the truth about which marketing investments deserve credit.",
    sections: [
      {
        heading: "Multi-Touch Attribution",
        body:
          "Understand how every touchpoint contributes to conversion. First-click and last-click views are replaced with models that trace the full path across channels.",
      },
      {
        heading: "Source and Touchpoint Clarity",
        body:
          "Campaign sources, nurture touchpoints, and CRM outcomes are connected so reporting shows which channels and follow-up paths move the account forward.",
      },
      {
        heading: "Finance-Ready Measurement",
        body:
          "Attribution, experiments, modeling, and business context are blended into one measurement agenda that can defend spend to a board, not just a marketing meeting.",
      },
      {
        heading: "Incrementality Thinking",
        body:
          "Channel reports are not enough. We combine attribution with testing and business context so the question — did this campaign cause the result? — gets a defensible answer.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More services",
    related: [
      { href: "/services/marketing-intelligence", label: "Marketing Intelligence" },
      { href: "/platforms/catalyst", label: "TMG Catalyst" },
      { href: "/platforms/crm-integration", label: "CRM Integration" },
    ],
  },
  "services/digital-transformation": {
    slug: "services/digital-transformation",
    eyebrow: "Transformation Services",
    title: "Marketing Transformation That Actually Transforms",
    lede:
      "Rip out the legacy systems holding you back. Build integrated, intelligent marketing infrastructure that enables growth, not just maintains operations.",
    sections: [
      {
        heading: "Infrastructure Assessment",
        body:
          "We map the systems you run today — what is connected, what is duplicated, what is dead — and define the target operating picture before anything is rebuilt.",
      },
      {
        heading: "Data Foundation",
        body:
          "Identity, source, lifecycle, and customer value data are established as the foundation every downstream tool depends on. Clean definitions come before new platforms.",
      },
      {
        heading: "Systems Integration",
        body:
          "Marketing platforms, CRMs, analytics tools, and data warehouses are connected into one flow, with automated quality validation and anomaly detection.",
      },
      {
        heading: "Operating Model Change",
        body:
          "Transformation is a management discipline before it is a technology project. We establish the workflows, review cadences, and ownership that make the new infrastructure stick.",
      },
    ],
    caseStudy: { ...CS.previvor },
    relatedHeading: "More services",
    related: [
      { href: "/platforms/crm-integration", label: "CRM Integration" },
      { href: "/platforms/api-development", label: "API Development" },
      { href: "/services/marketing-automation", label: "Marketing Automation" },
    ],
  },
  "services/content-strategy": {
    slug: "services/content-strategy",
    eyebrow: "Content Services",
    title: "Content Strategy That Drives Real Business Results",
    lede:
      "Most content gets published and ignored. We create content strategies built on search data, audience intelligence, and competitive analysis — then use TMG Genesis to keep execution structured.",
    sections: [
      {
        heading: "Search-Led Planning",
        body:
          "Content decisions start from search demand, audience intelligence, and competitive analysis — not from an editorial calendar built on guesses.",
      },
      {
        heading: "AI-Answerable Structure",
        body:
          "Content must be clear, structured, and credible enough to be understood by buyers, sales teams, search engines, and AI answer systems at the same time.",
      },
      {
        heading: "Distribution Systems",
        body:
          "Approved content is distributed through orchestrated journeys and owned channels, so each asset reaches the audiences it was built for.",
      },
      {
        heading: "Measurement",
        body:
          "Content performance is judged by the customers it creates — pipeline influenced, questions answered, and demand captured — not by vanity engagement.",
      },
    ],
    caseStudy: { ...CS.previvor },
    relatedHeading: "More services",
    related: [
      { href: "/services/creative-development", label: "Creative Development" },
      { href: "/services/brand-architecture", label: "Brand Architecture" },
    ],
  },
  "services/customer-analytics": {
    slug: "services/customer-analytics",
    eyebrow: "Analytics Services",
    title: "Know Your Customers Better Than They Know Themselves",
    lede:
      "You have customer data. We have AI models that predict who will buy, when they will churn, and how much they will spend. Turn behavioral data into strategic intelligence.",
    sections: [
      {
        heading: "Behavior Pattern Review",
        body:
          "Search demand, site behavior, CRM notes, and campaign response are read together so the team understands what customers are showing interest in now.",
      },
      {
        heading: "Cohort Analysis",
        body:
          "Campaign performance is judged by the customers it creates — cohorts by source, value, and retention — not only by the conversions it records.",
      },
      {
        heading: "Churn Risk Forecasting",
        body:
          "Models flag which customers are likely to churn while there is still time to act, connecting retention data to acquisition decisions.",
      },
      {
        heading: "Customer Value Prediction",
        body:
          "Lifetime value models sharpen acquisition: budgets flow toward the audiences that produce durable customers, not one-time converters.",
      },
    ],
    caseStudy: { ...CS.fintech },
    relatedHeading: "More services",
    related: [
      { href: "/services/marketing-intelligence", label: "Marketing Intelligence" },
      { href: "/platforms/predictive-analytics", label: "Predictive Analytics" },
      { href: "/platforms/data-science", label: "Data Science" },
    ],
  },
  "services/marketing-automation": {
    slug: "services/marketing-automation",
    eyebrow: "Automation Services",
    title: "Marketing Automation That Thinks, Not Just Sends",
    lede:
      "Generic email blasts and rigid workflows do not convert modern buyers. We build intelligent automation systems that respond to behavior, predict intent, and deliver the right message at the right time.",
    sections: [
      {
        heading: "Lead Nurturing",
        body:
          "Nurture programs are organized around prospect behavior, engagement patterns, and buying signals — so follow-up is delivered through the right channel at the right time.",
      },
      {
        heading: "Journey Orchestration",
        body:
          "Capture, qualify, score, nurture, convert, retain, expand — the full lifecycle is orchestrated with clear next steps for every audience segment.",
      },
      {
        heading: "Content Distribution",
        body:
          "Approved assets are distributed in the right places at the right times, connected to the journeys they support.",
      },
      {
        heading: "Attribution Modeling",
        body:
          "Automation reports back: campaign sources, nurture touchpoints, and CRM outcomes are connected so attribution reflects the whole journey.",
      },
    ],
    caseStudy: { ...CS.trials },
    relatedHeading: "More services",
    related: [
      { href: "/platforms/catalyst", label: "TMG Catalyst" },
      { href: "/services/marketing-attribution", label: "Marketing Attribution" },
      { href: "/services/customer-analytics", label: "Customer Analytics" },
    ],
  },
  "services/fractional-cmo-services": {
    slug: "services/fractional-cmo-services",
    eyebrow: "Leadership Services",
    title: "Strategic Marketing Leadership When You Need It",
    lede:
      "Get senior marketing leadership without enterprise-level overhead. TMG matches the engagement to your stage, goals, and internal team so strategy, execution, and accountability stay connected.",
    sections: [
      {
        heading: "Strategy & Planning",
        body:
          "Marketing strategy built on judgment, data, and discipline — plans that name the audience, the offer, the channel, and the expected return before spend moves.",
      },
      {
        heading: "Team & Vendor Leadership",
        body:
          "Internal teams and vendors are led from one accountable seat: briefs, reviews, and performance reviews aligned to the same goals.",
      },
      {
        heading: "Measurement Accountability",
        body:
          "Leadership that reports in business terms — pipeline, customers, return — and explains what is working, what is not, and where the next dollar should go.",
      },
      {
        heading: "Board-Level Communication",
        body:
          "Marketing must explain itself to the people funding growth. We prepare the narrative, the numbers, and the next asks.",
      },
    ],
    caseStudy: { ...CS.fintech },
    relatedHeading: "More services",
    related: [
      { href: "/services/ai-powered-strategy", label: "AI-Powered Strategy" },
      { href: "/services/marketing-intelligence", label: "Marketing Intelligence" },
      { href: "/growth-framework", label: "The Growth Framework" },
    ],
  },

  // ─────────────────── INDUSTRIES ───────────────────
  "industries/healthcare-life-sciences": {
    slug: "industries/healthcare-life-sciences",
    eyebrow: "Industry Expertise",
    title: "Healthcare Marketing That Heals Your Growth Challenges",
    lede:
      "Drive patient acquisition, engagement, and retention with AI-powered marketing strategies designed specifically for healthcare providers, medical device manufacturers, and life sciences companies.",
    sections: [
      {
        heading: "The Healthcare Marketing Landscape",
        body:
          "Between strict regulations, patient privacy concerns, and rising acquisition costs, healthcare marketers face unique challenges that traditional approaches cannot solve: HIPAA compliance constraints, high patient acquisition costs, fragmented patient journeys, and trust gaps that most healthcare brands struggle to close at scale.",
      },
      {
        heading: "HIPAA-Compliant Marketing Automation",
        body:
          "Deploy sophisticated patient nurture campaigns, appointment reminders, and educational content workflows that maintain full HIPAA compliance, with BAA-backed vendor controls.",
      },
      {
        heading: "Patient Acquisition Intelligence",
        body:
          "AI models predict patient lifetime value, identify high-intent prospects, and optimize acquisition spend across search, social, and programmatic channels.",
      },
      {
        heading: "Clinical Content & Reputation",
        body:
          "Authoritative, evidence-based content educates patients and builds provider credibility, while reputation management keeps review signals authentic and compliant.",
      },
    ],
    caseStudy: { ...CS.trials },
    proof: [
      { value: "#1", label: "National Trial Site" },
      { value: "2.2x", label: "DPC Growth" },
      { value: "MOM", label: "Sustained Growth" },
      { value: "Year 1", label: "Timeline" },
    ],
    relatedHeading: "More industries",
    related: [
      { href: "/industries/financial-services", label: "Financial Services" },
      { href: "/industries/technology-saas", label: "Technology & SaaS" },
      { href: "/industries/real-estate", label: "Real Estate" },
    ],
  },
  "industries/financial-services": {
    slug: "industries/financial-services",
    eyebrow: "Financial Expertise",
    title: "Financial Services Marketing Built for Precision and Growth",
    lede:
      "Acquire high-net-worth clients, grow assets under management, and expand market share with AI-driven marketing strategies designed for banks, wealth management firms, and fintech companies.",
    sections: [
      {
        heading: "Wealth & Asset Growth",
        body:
          "Demand generation built for considered, high-trust purchases — investor and client acquisition programs that respect both regulation and the length of the decision.",
      },
      {
        heading: "Fintech Growth",
        body:
          "For B2C fintech, speed matters: product-market fit campaigns, cost-savings guidance, and attribution that shows which channels actually create customers.",
      },
      {
        heading: "Compliance-Aware Systems",
        body:
          "Claims, disclosures, and approvals are engineered into the campaign workflow so velocity never costs compliance.",
      },
      {
        heading: "Trusted Partnership",
        body:
          "After five failed agencies, one fintech CMO described TMG's approach in two words: trusted partnership. That is the standard we bring to every financial engagement.",
      },
    ],
    caseStudy: { ...CS.fintech },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/technology-saas", label: "Technology & SaaS" },
      { href: "/industries/professional-services", label: "Professional Services" },
      { href: "/industries/real-estate", label: "Real Estate" },
    ],
  },
  "industries/technology-saas": {
    slug: "industries/technology-saas",
    eyebrow: "Technology Growth",
    title: "SaaS Marketing That Scales With Your Ambitions",
    lede:
      "Drive explosive user acquisition, optimize conversion funnels, and accelerate ARR growth with AI-powered growth marketing built specifically for technology companies.",
    sections: [
      {
        heading: "Pipeline Systems for Demanding Buyers",
        body:
          "Software companies sell to buyers who research hard and compare relentlessly. We build pipeline systems that meet them with the right message at every research step.",
      },
      {
        heading: "Funnel Optimization",
        body:
          "Conversion funnels are instrumented end to end — trial starts, activation, expansion — so optimization targets the step that actually limits growth.",
      },
      {
        heading: "ARR Acceleration",
        body:
          "Acquisition is judged by the revenue it creates: cohort quality, expansion signals, and payback periods — not sign-up volume.",
      },
      {
        heading: "Intelligence Infrastructure",
        body:
          "Product, CRM, and campaign data are unified so growth decisions run on one picture instead of competing dashboards.",
      },
    ],
    caseStudy: { ...CS.fintech },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/financial-services", label: "Financial Services" },
      { href: "/industries/retail-ecommerce", label: "Retail & E-Commerce" },
      { href: "/industries/professional-services", label: "Professional Services" },
    ],
  },
  "industries/real-estate": {
    slug: "industries/real-estate",
    eyebrow: "Real Estate Expertise",
    title: "Real Estate Marketing That Fills Your Pipeline",
    lede:
      "Drive high-quality buyer and seller leads, increase listing appointments, and accelerate property sales with advertising strategy and marketing intelligence designed for real estate.",
    sections: [
      {
        heading: "Buyer & Seller Lead Generation",
        body:
          "Targeted campaigns produce qualified buyer and seller leads for agents, brokerages, and developers — with follow-up orchestrated so leads are worked, not lost.",
      },
      {
        heading: "Market Intelligence",
        body:
          "Neighborhood-level demand signals, competitive listing activity, and pricing trends inform where media goes next.",
      },
      {
        heading: "Developer & Investment Programs",
        body:
          "For developers and investment groups, we build the full system: positioning, creative, media, and the investor and buyer follow-through that converts interest into commitments.",
      },
      {
        heading: "Attribution to Close",
        body:
          "Leads are traced from first click to listing appointment to close, so budget follows the channels that produce transactions.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/financial-services", label: "Financial Services" },
      { href: "/industries/manufacturing", label: "Manufacturing" },
      { href: "/industries/professional-services", label: "Professional Services" },
    ],
  },
  "industries/energy-utilities": {
    slug: "industries/energy-utilities",
    eyebrow: "Energy & Utilities",
    title: "Energy Marketing for a Transforming Industry",
    lede:
      "Navigate market deregulation, drive customer acquisition, reduce churn, and promote clean energy adoption with marketing strategies built for traditional utilities and energy innovators.",
    sections: [
      {
        heading: "Customer Acquisition",
        body:
          "Targeted campaigns acquire customers and investment partners in regulated and deregulated markets alike, with honest reporting on cost and return.",
      },
      {
        heading: "Investor Programs",
        body:
          "For investment-driven energy companies, we run the systems that convert interest into commitments — transparent, results-driven, and documented.",
      },
      {
        heading: "Retention & Churn",
        body:
          "Lifecycle programs reduce churn with behavior-based nurture and service signals, not just rate promotions.",
      },
      {
        heading: "Clean Energy Adoption",
        body:
          "Educational and demand campaigns move markets toward adoption, with measurement that shows which messages move which audiences.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/real-estate", label: "Real Estate" },
      { href: "/industries/manufacturing", label: "Manufacturing" },
      { href: "/platforms/oracle", label: "TMG Oracle" },
    ],
  },
  "industries/retail-ecommerce": {
    slug: "industries/retail-ecommerce",
    eyebrow: "Retail & E-Commerce",
    title: "E-Commerce Marketing That Scales Revenue",
    lede:
      "Drive profitable customer acquisition, maximize lifetime value, and scale e-commerce revenue with TMG Velocity performance marketing. From DTC startups to enterprise retail.",
    sections: [
      {
        heading: "Profitable Acquisition",
        body:
          "Acquisition is managed against contribution margin, not platform-reported ROAS. Budget moves toward the channels and audiences that produce profitable orders.",
      },
      {
        heading: "Creative Testing at Scale",
        body:
          "Structured briefs, variants, and rotation plans keep creative fresh and learning — the creative that wins gets budget, the rest is retired.",
      },
      {
        heading: "Lifetime Value Growth",
        body:
          "Retention, replenishment, and expansion journeys raise customer lifetime value, so acquisition pays for itself over more than one order.",
      },
      {
        heading: "Full-Funnel Measurement",
        body:
          "Attribution connects media to revenue with incrementality checks, so scale decisions survive contact with finance.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/technology-saas", label: "Technology & SaaS" },
      { href: "/industries/education", label: "Education" },
      { href: "/services/performance-media", label: "Performance Media" },
    ],
  },
  "industries/manufacturing": {
    slug: "industries/manufacturing",
    eyebrow: "Manufacturing Excellence",
    title: "Manufacturing Marketing That Fills Your Sales Pipeline",
    lede:
      "Generate qualified leads, accelerate sales cycles, and expand market share with marketing strategies built for industrial manufacturers, component suppliers, and contract manufacturers.",
    sections: [
      {
        heading: "Technical Lead Generation",
        body:
          "Manufacturing sales take 6-18 months with multiple stakeholders. We generate qualified leads from engineering, procurement, and operations decision-makers actively researching suppliers.",
      },
      {
        heading: "Account-Based Marketing",
        body:
          "Sophisticated ABM campaigns engage entire buying committees with personalized content and multi-channel touchpoints — not just procurement contacts.",
      },
      {
        heading: "Technical Content & Authority",
        body:
          "White papers, technical guides, case studies, and specifications educate buyers and demonstrate expertise, with SEO-optimized distribution.",
      },
      {
        heading: "Trade Show Amplification",
        body:
          "Maximize trade show ROI through pre-show promotion, booth traffic generation, and systematic post-show follow-up through automated workflows.",
      },
    ],
    relatedHeading: "More industries",
    related: [
      { href: "/industries/professional-services", label: "Professional Services" },
      { href: "/industries/energy-utilities", label: "Energy & Utilities" },
      { href: "/services/marketing-automation", label: "Marketing Automation" },
    ],
  },
  "industries/professional-services": {
    slug: "industries/professional-services",
    eyebrow: "Professional Services",
    title: "Professional Services Marketing Built on Expertise and Trust",
    lede:
      "Attract high-value clients, establish thought leadership, and grow your practice with marketing strategies designed for law firms, consulting practices, accounting firms, and agencies.",
    sections: [
      {
        heading: "Positioning & Differentiation",
        body:
          "Define what makes your firm unique and why clients should choose you over competitors. Identify your ideal clients and build the message architecture that reaches them.",
      },
      {
        heading: "Thought Leadership Development",
        body:
          "Build partner visibility and credibility through strategic content, speaking, and media. Demonstrate expertise before the first meeting.",
      },
      {
        heading: "Client Acquisition Engine",
        body:
          "Generate qualified leads through digital presence, ABM campaigns, strategic partnerships, and referral systems that respect the trust-based sale.",
      },
      {
        heading: "Client Development & Growth",
        body:
          "Maximize client relationships through expansion, cross-sell, and referral generation. Build lasting partnerships, not one-off engagements.",
      },
    ],
    relatedHeading: "More industries",
    related: [
      { href: "/industries/financial-services", label: "Financial Services" },
      { href: "/industries/education", label: "Education" },
      { href: "/services/fractional-cmo-services", label: "Fractional CMO Services" },
    ],
  },
  "industries/education": {
    slug: "industries/education",
    eyebrow: "Education Sector",
    title: "Education Marketing That Fills Classrooms and Drives Enrollment",
    lede:
      "Attract qualified students, increase enrollment, improve yield rates, and build institutional reputation with marketing strategies designed for higher education, EdTech, and training organizations.",
    sections: [
      {
        heading: "Student Recruitment",
        body:
          "Recruitment campaigns reach qualified prospects with programs and messages matched to their stage — inquiry, application, yield, and melt.",
      },
      {
        heading: "Enrollment Growth",
        body:
          "Enrollment funnels are instrumented from first touch to deposit, so optimization targets the step that limits class size.",
      },
      {
        heading: "Institutional Reputation",
        body:
          "Content, search visibility, and digital presence strengthen how institutions are found and trusted by students, families, and partners.",
      },
      {
        heading: "Mission-Driven Programs",
        body:
          "For foundations and training organizations, we build outreach systems that expand reach with measurable return — the same discipline we brought to a women's health foundation.",
      },
    ],
    caseStudy: { ...CS.previvor },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/non-profit", label: "Non-Profit" },
      { href: "/industries/technology-saas", label: "Technology & SaaS" },
      { href: "/services/content-strategy", label: "Content Strategy" },
    ],
  },
  "industries/non-profit": {
    slug: "industries/non-profit",
    eyebrow: "Non-Profit Sector",
    title: "Non-Profit Marketing That Amplifies Your Mission and Impact",
    lede:
      "Increase donations, acquire new donors, improve retention rates, and expand your mission reach with marketing strategies designed for non-profit organizations, foundations, and associations.",
    sections: [
      {
        heading: "Donor Acquisition",
        body:
          "Campaigns that find and convert new donors with messages matched to mission — measured by donors acquired and funds raised, not impressions.",
      },
      {
        heading: "Donor Retention",
        body:
          "Lifecycle programs keep donors engaged between asks, improving retention and lifetime value of every relationship.",
      },
      {
        heading: "Mission Reach",
        body:
          "Expand the audience your mission serves with structured content, search visibility, and partnerships that compound.",
      },
      {
        heading: "Platform & Presence",
        body:
          "Intuitive, professional platforms strengthen how foundations serve their communities — increased fundraising, stronger professional presence, expanded reach.",
      },
    ],
    caseStudy: { ...CS.previvor },
    relatedHeading: "More industries",
    related: [
      { href: "/industries/education", label: "Education" },
      { href: "/industries/healthcare-life-sciences", label: "Healthcare & Life Sciences" },
      { href: "/platforms/genesis", label: "TMG Genesis" },
    ],
  },

  // ─────────────────── CAPABILITIES ───────────────────
  "platforms/artificial-intelligence": {
    slug: "platforms/artificial-intelligence",
    eyebrow: "AI Infrastructure",
    title: "Intelligence That Learns, Adapts, and Drives Growth",
    lede:
      "Deploy AI infrastructure that connects strategy, media, creative, analytics, and automation into one operating layer. Our models learn from your business context and improve with every campaign.",
    sections: [
      {
        heading: "TMG AI Backbones",
        body:
          "TMG AI Backbones connect services across strategy, media, creative, analytics, and automation. Where privacy, latency, or control matter, the backbone keeps intelligence close to the systems doing the work.",
      },
      {
        heading: "Governed Workflows",
        body:
          "AI adoption works as an operating model, not a tool rollout: governed workflows for planning, content, analysis, and service — with human review at the steps that need judgment.",
      },
      {
        heading: "Connected to Everything",
        body:
          "The infrastructure layer connects to CRMs, marketing platforms, and data warehouses, so every model reads the same data and every insight lands in the system that acts on it.",
      },
      {
        heading: "Feedback That Compounds",
        body:
          "Campaign results flow back into the models continuously, so predictions sharpen and the whole operating layer gets smarter every quarter.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/machine-learning-models", label: "Machine Learning Models" },
      { href: "/platforms/predictive-analytics", label: "Predictive Analytics" },
      { href: "/platforms/data-science", label: "Data Science" },
    ],
  },
  "platforms/machine-learning-models": {
    slug: "platforms/machine-learning-models",
    eyebrow: "ML Models",
    title: "Custom Models That Understand Your Business",
    lede:
      "Deploy purpose-built machine learning models trained specifically on your data, industry dynamics, and business objectives. We train, deploy, monitor, and connect models to the systems that use them.",
    sections: [
      {
        heading: "Purpose-Built Training",
        body:
          "Generic models make generic predictions. We train on your campaign data, customer behavior, and industry dynamics so outputs reflect your market.",
      },
      {
        heading: "Deployment & Monitoring",
        body:
          "Models ship with monitoring for drift, data quality, and performance — retraining is scheduled, not reactive.",
      },
      {
        heading: "Connected to Execution",
        body:
          "Model outputs land where they are used: budget pacing, bid adjustments, audience scoring, and creative testing decisions.",
      },
      {
        heading: "Human Review Built In",
        body:
          "Models inform decisions; the team makes them. Every model runs inside a workflow with clear review and override paths.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/artificial-intelligence", label: "AI Infrastructure" },
      { href: "/platforms/predictive-analytics", label: "Predictive Analytics" },
      { href: "/platforms/data-science", label: "Data Science" },
    ],
  },
  "platforms/predictive-analytics": {
    slug: "platforms/predictive-analytics",
    eyebrow: "Predictive Analytics",
    title: "See Tomorrow's Results Today",
    lede:
      "Deploy predictive analytics that forecast campaign performance, customer lifetime value, and market trends before they materialize. Transform uncertainty into competitive advantage.",
    sections: [
      {
        heading: "Campaign Performance Forecasting",
        body:
          "Models forecast campaign performance before spend is committed, so media plans carry their own expectations and variances are caught early.",
      },
      {
        heading: "Customer Lifetime Value Prediction",
        body:
          "Predict who will buy, how much they will spend, and how long they will stay — then let that prediction guide acquisition budgets.",
      },
      {
        heading: "Churn Risk Forecasting",
        body:
          "Churn risk is flagged while there is still time to act, connecting retention data to acquisition decisions.",
      },
      {
        heading: "Market Trend Prediction",
        body:
          "Search demand, competitive moves, and market signals are read together to forecast shifts before they show up in your own results.",
      },
    ],
    caseStudy: { ...CS.energy },
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/data-science", label: "Data Science" },
      { href: "/platforms/machine-learning-models", label: "Machine Learning Models" },
      { href: "/platforms/real-time-optimization", label: "Real-Time Optimization" },
    ],
  },
  "platforms/data-science": {
    slug: "platforms/data-science",
    eyebrow: "Data Science",
    title: "Transform Data into Strategic Advantage",
    lede:
      "Partner with a team that trains custom models, builds internal tools, and creates client-specific implementations for marketing intelligence, attribution, forecasting, and optimization.",
    sections: [
      {
        heading: "Exploratory Data Analysis",
        body:
          "Discovery: deep statistical analysis that uncovers patterns, correlations, and opportunities hidden in your marketing data — the patterns that survive scrutiny become strategy inputs.",
      },
      {
        heading: "From Analysis to Tools",
        body:
          "Insights that stay in a slide deck die there. We build the internal tools and client-specific implementations that put analysis into daily use.",
      },
      {
        heading: "Models That Serve Decisions",
        body:
          "Every model is built backward from a decision the team has to make — budget movement, audience selection, creative testing — not from data that happens to be available.",
      },
      {
        heading: "Attribution & Forecasting",
        body:
          "Custom attribution models and forecasting implementations turn marketing data into defensible, finance-ready measurement.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/predictive-analytics", label: "Predictive Analytics" },
      { href: "/platforms/machine-learning-models", label: "Machine Learning Models" },
      { href: "/services/marketing-intelligence", label: "Marketing Intelligence" },
    ],
  },
  "platforms/crm-integration": {
    slug: "platforms/crm-integration",
    eyebrow: "CRM Integration",
    title: "Unite Marketing and Sales Data",
    lede:
      "Deploy enterprise-grade CRM integrations that create seamless data flow between marketing platforms and sales systems. Enable true closed-loop reporting, automated lead routing, and unified customer views.",
    sections: [
      {
        heading: "Closed-Loop Reporting",
        body:
          "Connect media to CRM outcomes so attribution reflects real pipeline — spend, touches, and revenue in one traceable path.",
      },
      {
        heading: "Automated Lead Routing",
        body:
          "Qualified leads route to the right owner with the right context, so follow-up starts while intent is still warm.",
      },
      {
        heading: "Unified Customer View",
        body:
          "Identity resolution across devices and touchpoints gives marketing and sales one picture of each customer.",
      },
      {
        heading: "Salesforce, HubSpot, Dynamics",
        body:
          "Integrations across major CRM and marketing platforms — Marketo, Pardot, Eloqua, Google Analytics, Mixpanel — as one unified automation layer.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/api-development", label: "API Development" },
      { href: "/platforms/catalyst", label: "TMG Catalyst" },
      { href: "/services/marketing-attribution", label: "Marketing Attribution" },
    ],
  },
  "platforms/api-development": {
    slug: "platforms/api-development",
    eyebrow: "API Development",
    title: "Connect Anything to Everything",
    lede:
      "Build production-grade APIs that enable seamless data exchange between marketing platforms, create custom integrations, and power real-time automation workflows.",
    sections: [
      {
        heading: "Custom Integrations",
        body:
          "When off-the-shelf connectors do not exist, we build them: production-grade APIs that move campaign, CRM, and analytics data where it needs to go.",
      },
      {
        heading: "Real-Time Automation",
        body:
          "APIs power real-time workflows — audience sync, budget signals, lead routing — so systems act in minutes, not batch cycles.",
      },
      {
        heading: "Data Quality Gates",
        body:
          "Validation and anomaly detection run at the boundary, so bad data never reaches the systems making decisions.",
      },
      {
        heading: "Documented & Owned",
        body:
          "Every integration ships documented and owned, so your team can operate and extend it without us in the room.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/crm-integration", label: "CRM Integration" },
      { href: "/platforms/real-time-optimization", label: "Real-Time Optimization" },
      { href: "/services/digital-transformation", label: "Digital Transformation" },
    ],
  },
  "platforms/real-time-optimization": {
    slug: "platforms/real-time-optimization",
    eyebrow: "Real-Time Optimization",
    title: "Never Wait for Performance Reports Again",
    lede:
      "Deploy always-on optimization systems that monitor campaign performance continuously and make adjustments as signals arrive. Stop reacting to yesterday's data and start optimizing in the moment.",
    sections: [
      {
        heading: "Performance Monitoring",
        body:
          "Campaign data, channel pacing, audience response, and cost signals are reviewed in one operating layer, continuously.",
      },
      {
        heading: "Bid Adjustments",
        body:
          "Bid and campaign settings adjust when performance, competition, or inventory changes — as signals arrive, not in weekly reviews.",
      },
      {
        heading: "Budget Review",
        body:
          "Spend is protected, reduced, or moved based on account priorities and observed performance, with pacing controls enforced automatically.",
      },
      {
        heading: "Creative Feedback Loops",
        body:
          "Variant results return to the creative layer so the next round of briefs and tests is structured by what just happened.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/velocity-ai", label: "TMG Velocity" },
      { href: "/platforms/ab-testing-platform", label: "A/B Testing Platform" },
      { href: "/services/performance-media", label: "Performance Media" },
    ],
  },
  "platforms/ab-testing-platform": {
    slug: "platforms/ab-testing-platform",
    eyebrow: "A/B Testing Platform",
    title: "Make Decisions Based on Evidence, Not Opinions",
    lede:
      "Deploy an enterprise experimentation platform that brings scientific rigor to marketing decisions. Test hypotheses with proper statistical methodology, reach conclusions, and scale what wins.",
    sections: [
      {
        heading: "Hypothesis-Driven Testing",
        body:
          "Tests start from a business question, not curiosity: what change, for which audience, with what expected effect — documented before launch.",
      },
      {
        heading: "Statistical Rigor",
        body:
          "Proper methodology, adequate power, and honest readouts: experiments resolve real questions instead of cataloging cosmetic preferences.",
      },
      {
        heading: "Creative & Landing Systems",
        body:
          "Structured ad angles, audience-specific variants, and landing-page notes flow through the testing plan — winners become the new control.",
      },
      {
        heading: "Compounding Learning",
        body:
          "Results feed the next brief. Testing programs compound instead of restarting, so the organization gets sharper every quarter.",
      },
    ],
    relatedHeading: "More capabilities",
    related: [
      { href: "/platforms/genesis", label: "TMG Genesis" },
      { href: "/platforms/real-time-optimization", label: "Real-Time Optimization" },
      { href: "/services/creative-development", label: "Creative Development" },
    ],
  },
};
