"use client";

import { Reveal } from "@/components/motion/reveal";
import { useI18n } from "@/locales/i18n";
// import BaseButton from "@/components/ui/BaseButton";

export default function ContactCTA() {
  const { t } = useI18n();

  return (
    <section id="contact" className="min-h-dvh flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="space-y-12 text-center">
            <h2 className="text-5xl md:text-7xl">{t("contact.title")}</h2>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
              {t("contact.body")}
            </p>
            <a
              href="mailto:cy4309@gmail.com"
              className="block underline hover:opacity-70"
            >
              cy4309@gmail.com
            </a>
            {/* <BaseButton
              href="mailto:cy4309@gmail.com"
              className="text-lg md:text-xl"
            >
              cy4309@gmail.com
            </BaseButton> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
