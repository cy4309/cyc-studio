import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="min-h-dvh flex flex-col bg-black text-white">
        <Navigation />

        <main className="flex-1 flex justify-center items-center px-8">
          <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-6xl md:text-8xl tracking-wider">CYC STUDIO</h1>
            <p className="text-xl md:text-2xl tracking-wide opacity-80 max-w-2xl mx-auto">
              Creative frontend studio showcasing interactive and visual web
              projects
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
