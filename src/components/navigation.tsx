"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/locales/i18n";
import BaseButton from "@/components/ui/BaseButton";
import SlidingGradientBg from "@/components/ui/SlidingGradientBg";
import {
  NAV_BG_SLIDE_DELAY_AFTER_NAV_SEC,
  NAV_BG_SLIDE_DELAY_NO_HERO_SEC,
  NAV_BG_SLIDE_DURATION_SEC,
  NAV_FADE_DURATION_SEC,
} from "@/constants/timing";

interface NavigationProps {
  /** 首頁用：標題消失後再出現的延遲（毫秒），不傳則直接顯示 */
  appearAfterDelay?: number;
}

export default function Navigation({ appearAfterDelay }: NavigationProps = {}) {
  const { lang, setLang, t } = useI18n();

  const toggleLanguage = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  const navDelaySec =
    appearAfterDelay != null ? appearAfterDelay / 1000 : 0;
  const bgSlideDelaySec =
    appearAfterDelay != null
      ? navDelaySec + NAV_BG_SLIDE_DELAY_AFTER_NAV_SEC
      : NAV_BG_SLIDE_DELAY_NO_HERO_SEC;

  const NavContent = (
    <div className="relative z-10 flex justify-between items-center p-8">
      <Link
        href="/"
        className="text-xs font-medium tracking-wide hover:opacity-70 transition-opacity flex items-center gap-2 px-4 py-3"
      >
        <Image
          src="/images/cyc-logo.png"
          alt="CYC Studio"
          width={24}
          height={24}
        />
        {/* CYC STUDIO */}
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
  );

  const gradientLayer = (
    <SlidingGradientBg
      delaySec={bgSlideDelaySec}
      durationSec={NAV_BG_SLIDE_DURATION_SEC}
    />
  );

  if (appearAfterDelay != null) {
    return (
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: navDelaySec,
          duration: NAV_FADE_DURATION_SEC,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {gradientLayer}
        {NavContent}
      </motion.nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {gradientLayer}
      {NavContent}
    </nav>
  );
}
