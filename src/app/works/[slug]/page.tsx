import { notFound } from "next/navigation";
import { getWorkBySlug, works } from "@/data/works";
import WorkDetailClient from "./WorkDetailClient";

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  return <WorkDetailClient work={work} />;
}
