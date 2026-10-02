export type CaseStudy = {
  slug: string;
  company: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  quote?: { text: string; person: string };
  metrics: { value: string; label: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "energy-investment-company",
    company: "Energy & Investment Company",
    sector: "Energy / Oil & Gas",
    challenge:
      "After spending over $100,000 with a larger Dallas-based agency over six months with little return on investment, this energy company was disillusioned and nearly ready to abandon paid media entirely.",
    solution:
      "TMG built a transparent, results-driven social media marketing and advertising system from the ground up, handling onboarding, design, marketing materials, and ongoing campaign management.",
    result:
      "Within 6 weeks of the initial campaign launch, TMG generated over 450 qualified leads and helped drive over $1MM in initial raise. The relationship has continued to compound since.",
    quote: {
      text:
        "After incurring exorbitant fees totaling over $100,000 with a larger firm, we saw little return. TMG has guided us through each step with remarkable transparency.",
      person: "Beau, President · Energy Company",
    },
    metrics: [
      { value: "110+", label: "New Partners" },
      { value: "$15MM+", label: "New Raise" },
      { value: "86%", label: "Cost Reduction" },
      { value: "33x", label: "ROAS" },
    ],
  },
  {
    slug: "direct-primary-care-clinic",
    company: "Direct Primary Care Clinic",
    sector: "Healthcare / Direct Primary Care",
    challenge:
      "A brand new direct primary care clinic needed to launch in the competitive Colorado Springs market with zero brand recognition. DPC is a growing but still unfamiliar model of care.",
    solution:
      "TMG developed the complete brand identity, go-to-market strategy, and market positioning from the ground up. The team built full-scale advertising infrastructure from search to scheduling.",
    result:
      "The clinic grew at more than twice the national average for direct primary care and sustained month-over-month growth through its first year.",
    metrics: [
      { value: "2.2x", label: "National Growth Avg" },
      { value: "MOM", label: "Sustained Growth" },
      { value: "Year 1", label: "Results Timeline" },
    ],
  },
  {
    slug: "medical-trials-company",
    company: "Medical Trials Company",
    sector: "Healthcare / Clinical Trials",
    challenge:
      "A clinical trials company needed to acquire patients for their studies efficiently and at scale. Patient recruitment is one of the most difficult challenges in clinical research.",
    solution:
      "TMG developed a comprehensive marketing campaign paired with a scheduling process specifically designed for patient acquisition, combining targeted digital outreach with disciplined follow-up.",
    result:
      "The campaign was so successful that the company became the #1 producing site in the country for their first clinical trial. Many studies later, TMG's efforts continue to produce.",
    quote: {
      text:
        "We engaged 5 different digital marketing agencies who promised a lot, but failed to deliver. TMG's approach to business can be expressed in 2 words, trusted partnership.",
      person: "Carl, CMO · Fintech Startup",
    },
    metrics: [
      { value: "#1", label: "National Ranking" },
      { value: "Multi-Study", label: "Success" },
      { value: "Ongoing", label: "Results" },
    ],
  },
  {
    slug: "b2c-fintech-startup",
    company: "B2C Fintech Startup",
    sector: "Financial Technology",
    challenge:
      "A B2C fintech startup needed to acquire customers fast to demonstrate product-market fit. After engaging 5 different digital marketing agencies, all of whom promised a lot and failed to deliver, the team was skeptical.",
    solution:
      "TMG took a practical, transparent approach, spending hours with the team to explain what would be done, why specific strategies were proposed, and what to expect.",
    result:
      "The startup found a trusted partner and reached product-market fit with cost-savings guidance throughout the engagement.",
    metrics: [
      { value: "5", label: "Prior Failed Agencies" },
      { value: "PMF", label: "Product-Market Fit" },
      { value: "Cost", label: "Savings Guidance" },
    ],
  },
  {
    slug: "non-profit-health-foundation",
    company: "Non-Profit Health Foundation",
    sector: "Non-Profit / Women's Health",
    challenge:
      "A digital women's health platform needed to transform their online presence to better serve young women affected by breast cancer. Their existing platform lacked the functionality and professionalism their mission demanded.",
    solution:
      "TMG went beyond simple website development, translating the foundation's unique design vision into reality while adding sophisticated functionality that streamlined how women access resources.",
    result:
      "The impact has been transformative: increased fundraising success, an enhanced professional presence, and expanded reach to support more young women who need these resources.",
    quote: {
      text:
        "TMG created an intuitive, professional platform that revolutionized how we serve young women affected by breast cancer.",
      person: "Allyn, Founder · The Previvor Foundation",
    },
    metrics: [
      { value: "↑", label: "Fundraising" },
      { value: "↑", label: "Professional Presence" },
      { value: "↑", label: "Reach" },
    ],
  },
];
