"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";

export default function Process() {
  const { t } = useI18n();

  return (
    <section className="pin-section h-dvh relative flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="space-y-8">
            <h2 className="reveal text-4xl md:text-6xl text-primary font-bold">
              {t("process.title")}
            </h2>
            <ol className="space-y-6 text-lg md:text-xl opacity-80">
              <li className="reveal">1. {t("process.step1")}</li>
              <li className="reveal">2. {t("process.step2")}</li>
              <li className="reveal">3. {t("process.step3")}</li>
              <li className="reveal">4. {t("process.step4")}</li>
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
