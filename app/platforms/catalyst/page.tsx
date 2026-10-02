import type { Metadata } from "next";
import { PlatformPage } from "@/components/PlatformPage";
import { PLATFORMS } from "@/lib/content";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "TMG Catalyst | Marketing Ops Automation",
  description:
    "End-to-end marketing operations automation, from lead nurturing and customer journey orchestration to content distribution and attribution modeling.",
};

const platform = PLATFORMS.find((p) => p.slug === "/platforms/catalyst")!;

export default function CatalystPage() {
  return (
    <PlatformPage
      platform={platform}
      eyebrow="Tool / 0.2"
      lede="TMG Catalyst supports TMG's advertising systems after attention turns into action: lead nurturing, customer journey orchestration, content distribution, and attribution modeling — connected so nothing is dropped after the click."
      boldLead="TMG Catalyst is the lifecycle layer."
      boldRest="It keeps follow-up, routing, and attribution connected after TMG Velocity sends qualified traffic into the funnel."
      pillars={[
        {
          step: "01",
          title: "Intelligent Lead Nurturing",
          body:
            "TMG Catalyst helps organize lead nurturing around prospect behavior, engagement patterns, and buying signals so the team can deliver the right follow-up through the right channel at the right time.",
          tags: ["Route prospects", "Right path", "Behavior signals"],
        },
        {
          step: "02",
          title: "Journey Orchestration",
          body:
            "Customer journeys are orchestrated end to end — from first touch to conversion and expansion — with clear next steps for every audience segment.",
          tags: ["Qualify", "Score", "Convert", "Retain"],
        },
        {
          step: "03",
          title: "Multi-Touch Attribution",
          body:
            "TMG Catalyst connects campaign sources, nurture touchpoints, and CRM outcomes so reporting can show which channels and follow-up paths are moving the account forward.",
          tags: ["Source clarity", "Touchpoint visibility", "CRM outcomes"],
        },
      ]}
      caseStudy={CASE_STUDIES.find((c) => c.slug === "medical-trials-company")}
      related={[
        { slug: "/services/marketing-automation", name: "Marketing Automation" },
        { slug: "/services/marketing-attribution", name: "Marketing Attribution" },
        { slug: "/platforms/crm-integration", name: "CRM Integration" },
      ]}
      cta="The follow-through is the system. Keep it connected."
    />
  );
}
