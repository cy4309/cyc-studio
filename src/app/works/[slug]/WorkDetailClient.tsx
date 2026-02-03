"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import BaseButton from "@/components/ui/BaseButton";
import { useI18n } from "@/locales/i18n";
import { Work } from "@/data/works";

export default function WorkDetailClient({ work }: { work: Work }) {
  const { t } = useI18n();

  return (
    <>
      <Navigation />

      <main className="min-h-dvh pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <BaseButton href="/works" className="text-sm opacity-60 mb-8">
            {t("works.back")}
          </BaseButton>

          <article className="space-y-12">
            <header className="space-y-8">
              <h1 className="text-5xl md:text-7xl tracking-wider">
                {t(work.titleKey)}
              </h1>
              <Image src={work.image} alt="" width={1080} height={1080} />
            </header>

            <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-white/20">
              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  {t("works.focus")}
                </h3>
                <p className="text-lg">{t(work.focusKey)}</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  {t("works.technology")}
                </h3>
                <p className="text-lg">{work.tech}</p>
              </div>
            </div>

            <BaseButton href={work.link} target="_blank" className="w-full">
              {t("works.viewProject")}
            </BaseButton>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
