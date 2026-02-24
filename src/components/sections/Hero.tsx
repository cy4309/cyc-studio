"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/locales/i18n";
import {
  CONTENT_APPEAR_DELAY_SEC,
  TITLE_TIMES,
  TOTAL_TITLE_DURATION_SEC,
} from "@/constants/timing";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero-section h-dvh relative flex justify-center items-center overflow-hidden">
      {/* 內文：初始隱藏，在標題 blur 時淡入帶出（與 Navigation 同步） */}
      <motion.div
        className="reveal text-center max-w-4xl space-y-6"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: CONTENT_APPEAR_DELAY_SEC,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="md:text-lg tracking-wide opacity-85 max-w-2xl mx-auto">
          {t("home.heroSubtitle")}
        </p>
        <p className="md:text-lg tracking-wide opacity-60 max-w-2xl mx-auto">
          {t("home.heroSubtitleSecondary")}
        </p>
      </motion.div>

      {/* 標題覆蓋整屏：先出現 → 停留 → blur + 淡出，帶出內文 */}
      <motion.h1
        className="absolute inset-0 flex justify-center items-center text-4xl md:text-6xl tracking-wider font-bold pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          filter: ["blur(0px)", "blur(0px)", "blur(0px)", "blur(20px)"],
        }}
        transition={{
          duration: TOTAL_TITLE_DURATION_SEC,
          times: [...TITLE_TIMES],
          ease: "easeInOut",
        }}
      >
        {t("home.heroTitle")}
      </motion.h1>
    </section>
  );
}
