"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="text-center space-y-8 max-w-4xl">
        <Reveal y={40} duration={1}>
          <h1 className="text-6xl md:text-8xl tracking-wider font-bold">
            {t("home.heroTitle")}
          </h1>
        </Reveal>

        <Reveal delay={0.4} className="space-y-6">
          <p className="md:text-lg tracking-wide opacity-85 max-w-2xl mx-auto">
            {t("home.heroSubtitle")}
          </p>

          <p className="md:text-lg tracking-wide opacity-60 max-w-2xl mx-auto">
            {t("home.heroSubtitleSecondary")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
