"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <section className="pin-section h-dvh relative flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="space-y-8">
            <h2 className="reveal text-5xl md:text-7xl">{t("about.title")}</h2>
            <p className="reveal text-lg md:text-xl opacity-80 max-w-4xl leading-relaxed">
              {t("about.body")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
