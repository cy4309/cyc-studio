"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/locales/i18n";
import BaseButton from "@/components/ui/BaseButton";

export default function Navigation() {
  const { lang, setLang, t } = useI18n();

  const toggleLanguage = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-medium tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <Image
            src="/images/cyc-logo.png"
            alt="CYC Studio"
            width={24}
            height={24}
          />
          CYC STUDIO
        </Link>

        <div className="flex justify-center items-center text-lg tracking-wide">
          <BaseButton
            onClick={toggleLanguage}
            className="text-sm opacity-60 border-0 underline"
          >
            {lang === "zh" ? "EN" : "中文"}
          </BaseButton>
          <BaseButton href="/works" className="text-sm border-0 underline">
            {t("nav.works")}
          </BaseButton>
        </div>
      </div>
    </nav>
  );
}
