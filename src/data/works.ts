export interface Work {
  slug: string;
  title: string;
  description: string;
  image: string;
  focus: string;
  tech: string;
  link: string;
}

export const works: Work[] = [
  {
    slug: "cyc-zine",
    title: "CYC Zine",
    image: "/images/cyc-zine.png",
    description:
      "Arts & culture event platform integrated with LINE campaign messaging",
    focus: "Platform, interaction, system integration",
    tech: "React, LINE LIFF",
    link: "https://cyc-zine.vercel.app",
  },
  {
    slug: "webar-huye",
    title: "WebAR Huye",
    image: "/images/webar-huye.png",
    description: "Web-based AR experience using face tracking and 3D rendering",
    focus: "WebAR, real-time interaction",
    tech: "MediaPipe, Three.js",
    link: "https://webar-huye-next.vercel.app",
  },
  {
    slug: "funkai",
    title: "FunkAI",
    image: "/images/funk-ai.png",
    description:
      "Generative AI platform integrating AI APIs for content generation",
    focus: "AI integration, product interaction",
    tech: "AI APIs, Web platform",
    link: "https://funkai.ai",
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
