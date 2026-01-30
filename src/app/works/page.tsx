"use client";

import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { works } from "@/data/works";
import { Reveal } from "@/components/motion/reveal";

export default function WorksPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-dvh pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Container reveal with stagger */}
          <Reveal stagger={0.24} className="space-y-16">
            {works.map((work) => (
              <Reveal key={work.slug}>
                <Link href={`/works/${work.slug}`} className="block group">
                  <article className="border-b border-white/20 pb-12">
                    <h2 className="text-3xl md:text-4xl mb-4">{work.title}</h2>
                    <p className="opacity-80 mb-2">{work.descriptionZh}</p>
                    <p className="opacity-80">{work.description}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
