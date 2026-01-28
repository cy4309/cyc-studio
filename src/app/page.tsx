import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col justify-center items-center px-8">
        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider">
            CYC STUDIO
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide opacity-80 max-w-2xl">
            Creative frontend studio showcasing interactive and visual web
            projects
          </p>
        </div>
      </main>
    </>
  );
}
