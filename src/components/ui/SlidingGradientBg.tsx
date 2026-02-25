"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface SlidingGradientBgProps {
  /** 開始滑入的延遲（秒） */
  delaySec: number;
  /** 滑入動畫時長（秒） */
  durationSec: number;
  /** 漸層樣式，預設為導航用由左到右灰階 */
  className?: string;
  /** 滑入方向：從左側展開或從右側展開 */
  slideOrigin?: "left" | "right";
}

const defaultGradient =
  "bg-gradient-to-r from-transparent via-primary/30 to-primary/60";

export default function SlidingGradientBg({
  delaySec,
  durationSec,
  className = defaultGradient,
  slideOrigin = "left",
}: SlidingGradientBgProps) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ transformOrigin: slideOrigin }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        delay: delaySec,
        duration: durationSec,
        ease: EASE,
      }}
    />
  );
}
