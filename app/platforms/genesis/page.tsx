import type { Metadata } from "next";
import { PlatformPage } from "@/components/PlatformPage";
import { PLATFORMS } from "@/lib/content";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "TMG Genesis | Creative & Campaign Support",
  description:
    "Creative and campaign support layer for turning strategy into structured briefs, tests, variants, reporting, and repeatable execution.",
};

const platform = PLATFORMS.find((p) => p.slug === "/platforms/genesis")!;

export default function GenesisPage() {
  return (
    <PlatformPage
      platform={platform}
      eyebrow="Tool / 0.3"
      lede="TMG Genesis supports TMG's creative and campaign work by turning strategy into structured briefs, tests, variants, reporting, and repeatable execution."
      boldLead="TMG Genesis is not a replacement for advertisers."
      boldRest="It is the execution layer behind our team that keeps briefs, variants, tests, reports, and follow-up work organized."
      pillars={[
        {
          step: "01",
          title: "Structured Briefs",
          body:
            "TMG Genesis turns strategy, offer context, audience notes, and channel constraints into clear briefs our team can use to build faster without losing the thread.",
          tags: ["Strategy input", "Offer context", "Channel constraints"],
        },
        {
          step: "02",
          title: "Campaign Variants",
          body:
            "The system helps generate structured ad angles, audience-specific variants, landing-page notes, and testing plans for human review and deployment.",
          tags: ["Ad angles", "Variant maps", "Testing plans"],
        },
        {
          step: "03",
          title: "Brand Guardrails",
          body:
            "TMG Genesis keeps messaging aligned to approved positioning, claims, voice, and compliance requirements so campaign work stays consistent across channels.",
          tags: ["Positioning", "Voice", "Compliance"],
        },
        {
          step: "04",
          title: "Reporting Workflow",
          body:
            "TMG Genesis helps turn performance data into readable summaries, follow-up questions, and next-step recommendations for the team managing the account.",
          tags: ["Summaries", "Next steps", "Account review"],
        },
      ]}
      caseStudy={CASE_STUDIES.find(
        (c) => c.slug === "non-profit-health-foundation",
      )}
      related={[
        { slug: "/services/creative-development", name: "Creative Development" },
        { slug: "/platforms/ab-testing-platform", name: "A/B Testing Platform" },
      ]}
      cta="Strategy becomes execution when the work stays organized."
    />
  );
}
