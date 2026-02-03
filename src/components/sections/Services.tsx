"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="min-h-dvh flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl">{t("services.title")}</h2>
            <ul className="space-y-6 text-lg md:text-xl opacity-80">
              <li>{t("services.item1")}</li>
              <li>{t("services.item2")}</li>
              <li>{t("services.item3")}</li>
              <li>{t("services.item4")}</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
