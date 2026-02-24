"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";

export default function Services() {
  const { t } = useI18n();

  return (
    <section className="pin-section h-dvh relative flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="space-y-8">
            <h2 className="reveal text-4xl md:text-6xl">
              {t("services.title")}
            </h2>
            <ul className="space-y-6 text-lg md:text-xl opacity-80">
              <li className="reveal">{t("services.item1")}</li>
              <li className="reveal">{t("services.item2")}</li>
              <li className="reveal">{t("services.item3")}</li>
              <li className="reveal">{t("services.item4")}</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
