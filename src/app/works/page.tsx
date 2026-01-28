import Link from "next/link";
import Navigation from "@/components/navigation";
import { works } from "@/data/works";

export default function WorksPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-16">
            Works
          </h1> */}

          <div className="space-y-16">
            {works.map((work) => (
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className="block group"
              >
                <article className="border-b border-white/20 pb-12 group-hover:border-white/40 transition-colors">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4 group-hover:opacity-70 transition-opacity">
                    {work.title}
                  </h2>
                  <p className="text-lg md:text-xl opacity-80 mb-6 max-w-3xl">
                    {work.description}
                  </p>
                  <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-sm opacity-60">
                    <span>Focus: {work.focus}</span>
                    <span>Tech: {work.tech}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

// import Link from "next/link";
// import Navigation from "@/components/navigation";
// import { works } from "@/data/works";

// export default function WorksPage() {
//   return (
//     <>
//       <Navigation />
//       <main className="min-h-screen pt-32 pb-16 px-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-24">
//             Works
//           </h1>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
//             {works.map((work) => (
//               <Link
//                 key={work.slug}
//                 href={`/works/${work.slug}`}
//                 className="block group"
//               >
//                 <article className="space-y-8">
//                   {/* Visual placeholder area */}
//                   <div className="aspect-[4/3] bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
//                     <div className="w-full h-full flex items-center justify-center">
//                       <div className="w-16 h-16 border border-white/20 rotate-45"></div>
//                     </div>
//                   </div>

//                   {/* Text content - reduced prominence */}
//                   <div className="space-y-4">
//                     <h2 className="text-2xl md:text-3xl font-light tracking-wide group-hover:opacity-70 transition-opacity">
//                       {work.title}
//                     </h2>
//                     <p className="text-sm md:text-base opacity-60 leading-relaxed">
//                       {work.description}
//                     </p>
//                     <div className="flex space-x-6 text-xs opacity-40 uppercase tracking-wider">
//                       <span>{work.focus.split(",")[0]}</span>
//                       <span>{work.tech.split(",")[0]}</span>
//                     </div>
//                   </div>
//                 </article>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
