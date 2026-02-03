"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollSections() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".pin-section");

    sections.forEach((section) => {
      const reveals = section.querySelectorAll(".reveal");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });

      tl.from(reveals, {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);
}
