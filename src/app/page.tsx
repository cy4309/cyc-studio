"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <div className="min-h-dvh flex flex-col bg-black text-white">
        <Navigation />

        <main className="flex-1 px-8">
          <Hero />
          <Services />
          <Process />
          <About />
          <ContactCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
