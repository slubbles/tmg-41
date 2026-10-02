import type { Metadata } from "next";
import { PlatformPage } from "@/components/PlatformPage";
import { PLATFORMS } from "@/lib/content";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "TMG Velocity | Paid Media Deployment",
  description:
    "Paid media deployment and optimization support for approved campaign plans: budget movement, bid adjustments, creative rotation, and performance feedback.",
};

const platform = PLATFORMS.find((p) => p.slug === "/platforms/velocity-ai")!;

export default function VelocityPage() {
  return (
    <PlatformPage
      platform={platform}
      eyebrow="Tool / 0.1"
      lede="TMG Velocity supports TMG's paid media work by helping deploy approved campaigns, move budget, adjust bids, rotate creative, and return performance feedback to the team."
      boldLead="TMG Velocity does not replace media strategy."
      boldRest="It supports paid media deployment and optimization after the campaign plan has been built, reviewed, and approved by TMG."
      pillars={[
        {
          step: "01",
          title: "Media Deployment",
          body:
            "TMG Velocity receives approved campaign plans, audience notes, creative variants, and channel direction from the team, then supports deployment across paid media channels.",
          tags: ["Campaign launch", "Channel setup", "Variant mapping"],
        },
        {
          step: "02",
          title: "Budget Movement",
          body:
            "The system helps identify where budget should be protected, reduced, or moved based on campaign performance, audience response, and direction from the advertising team.",
          tags: ["Budget pacing", "Spend controls", "Performance review"],
        },
        {
          step: "03",
          title: "Creative Rotation",
          body:
            "TMG Velocity tracks which approved variants are gaining traction, supports rotation decisions, and sends useful performance feedback back to TMG Genesis for the next round of work.",
          tags: ["Approved variants", "Testing feedback", "TMG Genesis handoff"],
        },
      ]}
      caseStudy={CASE_STUDIES.find((c) => c.slug === "energy-investment-company")}
      related={[
        { slug: "/platforms/real-time-optimization", name: "Real-Time Optimization" },
        { slug: "/services/performance-media", name: "Performance Media" },
      ]}
      cta="Performance at scale starts with disciplined deployment."
    />
  );
}
