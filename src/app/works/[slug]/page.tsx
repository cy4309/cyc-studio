import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getWorkBySlug, works } from "@/data/works";
import Image from "next/image";

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
      <main className="min-h-dvh pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/works"
            className="inline-block text-sm opacity-60 hover:opacity-100 transition-opacity mb-8"
          >
            <span>←</span>
            <span className="ml-2">Back to Works</span>
          </Link>

          <article className="space-y-12">
            <header className="space-y-8">
              <h1 className="text-5xl md:text-7xl tracking-wider">
                {work.title}
              </h1>
              {/* <p className="text-xl md:text-2xl opacity-80 max-w-3xl">
                {work.description}
              </p> */}
              <Image
                src={work.image}
                alt={work.title}
                width={1080}
                height={1080}
              />
            </header>

            <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-white/20">
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  Focus
                </h3>
                <p className="text-lg">{work.focus}</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  Technology
                </h3>
                <p className="text-lg">{work.tech}</p>
              </div>
            </div>

            <div>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-block text-lg tracking-wide border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-colors"
              >
                View Project →
              </a>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
