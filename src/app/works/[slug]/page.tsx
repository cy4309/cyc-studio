import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getWorkBySlug, works } from "@/data/works";
import Image from "next/image";
import BaseButton from "@/components/ui/BaseButton";
import Text from "@/locales/Text";

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

  if (!work) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-dvh pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <BaseButton href="/works" className="text-sm opacity-60 mb-8">
            <Text path="works.back" />
          </BaseButton>

          <article className="space-y-12">
            <header className="space-y-8">
              <h1 className="text-5xl md:text-7xl tracking-wider">
                <Text path={work.titleKey} />
              </h1>
              <Image src={work.image} alt="" width={1080} height={1080} />
            </header>

            <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-white/20">
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  <Text path="works.focus" />
                </h3>
                <p className="text-lg">
                  <Text path={work.focusKey} />
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  <Text path="works.technology" />
                </h3>
                <p className="text-lg">{work.tech}</p>
              </div>
            </div>

            <div>
              <BaseButton href={work.link} target="_blank" className="w-full">
                <Text path="works.viewProject" />
              </BaseButton>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
