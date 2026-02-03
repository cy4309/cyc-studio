export interface Work {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  focusKey: string;
  image: string;
  tech: string;
  link: string;
}

export const works: Work[] = [
  {
    slug: "cyc-zine",
    titleKey: "works.cycZine.title",
    descriptionKey: "works.cycZine.description",
    focusKey: "works.cycZine.focus",
    image: "/images/cyc-zine.png",
    tech: "React, LINE LIFF",
    link: "https://cyc-zine.vercel.app",
  },
  {
    slug: "webar-huye",
    titleKey: "works.webarHuye.title",
    descriptionKey: "works.webarHuye.description",
    focusKey: "works.webarHuye.focus",
    image: "/images/webar-huye.png",
    tech: "MediaPipe, Three.js",
    link: "https://webar-huye-next.vercel.app",
  },
  {
    slug: "funkai",
    titleKey: "works.funkai.title",
    descriptionKey: "works.funkai.description",
    focusKey: "works.funkai.focus",
    image: "/images/funk-ai.png",
    tech: "AI APIs, Web platform",
    link: "https://funkai.ai",
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
