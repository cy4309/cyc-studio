"use client";

import SlidingGradientBg from "@/components/ui/SlidingGradientBg";
import {
  FOOTER_BG_SLIDE_DELAY_SEC,
  FOOTER_BG_SLIDE_DURATION_SEC,
} from "@/constants/timing";

const Footer = () => {
  return (
    <footer className="relative w-full z-50 overflow-hidden p-6">
      <SlidingGradientBg
        delaySec={FOOTER_BG_SLIDE_DELAY_SEC}
        durationSec={FOOTER_BG_SLIDE_DURATION_SEC}
        className="bg-gradient-to-l from-transparent via-primary/30 to-primary/60"
        slideOrigin="right"
      />
      <div className="relative z-10 container mx-auto space-y-1">
        <p className="text-center text-sm tracking-wide opacity-70">
          Eason Chu
          <span className="mx-2 opacity-40">—</span>
          <a
            href="mailto:cy4309@gmail.com"
            className="underline hover:opacity-70"
          >
            cy4309@gmail.com
          </a>
          <span className="mx-2 opacity-40">/</span>
          <span className="opacity-80">+886&nbsp;916&nbsp;530&nbsp;519</span>
        </p>

        <p className="text-center text-xs tracking-wide opacity-50">
          © 2026 CYC Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
