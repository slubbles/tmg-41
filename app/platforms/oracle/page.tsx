import type { Metadata } from "next";
import { PlatformPage } from "@/components/PlatformPage";
import { PLATFORMS } from "@/lib/content";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "TMG Oracle | Market & Performance Intelligence",
  description:
    "Market and performance intelligence for reading customer behavior, competitive signals, and campaign data before making the next media decision.",
};

const platform = PLATFORMS.find((p) => p.slug === "/platforms/oracle")!;

export default function OraclePage() {
  return (
    <PlatformPage
      platform={platform}
      eyebrow="Tool / 0.4"
      lede="TMG Oracle supports TMG's media decisions with market and performance intelligence for reading customer behavior, competitive signals, and campaign data before the next campaign move."
      boldLead="TMG Oracle is not a promise that the future is knowable."
      boldRest="It is the intelligence layer that helps TMG read the market before briefs are written, media is adjusted, or nurture paths are changed."
      pillars={[
        {
          step: "01",
          title: "Customer Signals",
          body:
            "Reads search demand, site behavior, CRM notes, and campaign response so the team can understand what customers are showing interest in now — search trends, social sentiment, purchase patterns, economic indicators.",
          tags: ["Search trends", "Social sentiment", "Purchase patterns"],
        },
        {
          step: "02",
          title: "Competitive Intelligence",
          body:
            "Monitors visible competitive activity across channels so media, creative, and offer decisions are made with better context — offer changes, campaign launches, messaging shifts, product updates.",
          tags: ["Offer changes", "Campaign launches", "Messaging shifts"],
        },
        {
          step: "03",
          title: "Market Shift Analysis",
          body:
            "Separates useful signal from short-term noise so the team can decide what should change in targeting, messaging, or budget direction — consumer values, technology adoption, behavior changes, industry patterns.",
          tags: ["Forecasting", "Decision support", "Signal vs noise"],
        },
      ]}
      caseStudy={CASE_STUDIES.find((c) => c.slug === "b2c-fintech-startup")}
      related={[
        { slug: "/services/marketing-intelligence", name: "Marketing Intelligence" },
        { slug: "/platforms/predictive-analytics", name: "Predictive Analytics" },
      ]}
      cta="Read the market before the next media decision."
    />
  );
}
