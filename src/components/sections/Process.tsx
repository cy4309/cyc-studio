"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";

export default function Process() {
  const { t } = useI18n();

  return (
    <section className="min-h-dvh flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl">{t("process.title")}</h2>
            <ol className="space-y-6 text-lg md:text-xl opacity-80">
              <li>1. {t("process.step1")}</li>
              <li>2. {t("process.step2")}</li>
              <li>3. {t("process.step3")}</li>
              <li>4. {t("process.step4")}</li>
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
