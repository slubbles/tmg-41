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
  const item = DETAILS[`services/${slug}`];
  if (!item) return {};
  return {
    title: `${item.title} | TMG Services`,
    description: item.lede,
  };
}

export function generateStaticParams() {
  return Object.keys(DETAILS)
    .filter((key) => key.startsWith("services/"))
    .map((key) => ({ slug: key.replace("services/", "") }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const item = DETAILS[`services/${slug}`];
  if (!item) notFound();
  return <DetailPage item={item} />;
}
