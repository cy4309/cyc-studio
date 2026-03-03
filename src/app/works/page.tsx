"use client";

import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { works } from "@/data/works";
import { useI18n } from "@/locales/i18n";
import { Reveal } from "@/components/motion/reveal";

export default function WorksPage() {
  const { t } = useI18n();

  return (
    <div className="h-dvh max-h-dvh flex flex-col">
      <Navigation />
      <main className="flex-1 min-h-0 overflow-y-auto pt-32 px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <Reveal stagger={0.24} className="space-y-16">
            {works.map((work) => (
              <Reveal key={work.slug}>
                <Link href={`/works/${work.slug}`} className="block group">
                  <article className="border-b border-white/20 pb-12">
                    <h2 className="text-3xl md:text-4xl mb-4 text-primary font-bold">
                      {t(work.titleKey)}
                    </h2>
                    <p className="opacity-80">{t(work.descriptionKey)}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </main>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}
