import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { DETAILS } from "@/lib/details";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = DETAILS[`platforms/${slug}`];
  if (!item) return {};
  return {
    title: `${item.title} | TMG Capabilities`,
    description: item.lede,
  };
}

export function generateStaticParams() {
  return Object.keys(DETAILS)
    .filter((key) => key.startsWith("platforms/"))
    .map((key) => ({ slug: key.replace("platforms/", "") }));
}

export default async function CapabilityDetail({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const item = DETAILS[`platforms/${slug}`];
  if (!item) notFound();
  return <DetailPage item={item} />;
}
