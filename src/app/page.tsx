"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";

export default function Home() {
  return (
    <>
      <div className="min-h-dvh flex flex-col bg-black text-white">
        <Navigation />

        <main className="flex-1 flex justify-center items-center px-8">
          <div className="text-center space-y-8 max-w-4xl">
            <Reveal y={40} duration={1}>
              <h1 className="text-6xl md:text-8xl tracking-wider">
                CYC STUDIO
              </h1>
            </Reveal>

            <Reveal delay={0.4} className="space-y-6">
              <p className="md:text-lg tracking-wide opacity-85 max-w-2xl mx-auto">
                CYC Studio 是一間專注於創意互動與視覺體驗的網頁工作室，
                從前端視覺設計、互動開發，到資料串接與系統建置，
                打造兼具美感與功能性的數位作品。
              </p>

              <p className="md:text-lg tracking-wide opacity-60 max-w-2xl mx-auto">
                CYC Studio is a creative web studio crafting interactive and
                visual digital experiences — from frontend design and
                motion-driven interfaces to data integration and system
                implementation.
              </p>
            </Reveal>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
