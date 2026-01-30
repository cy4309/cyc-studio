export interface Work {
  slug: string;
  title: string;
  descriptionZh: string;
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
    descriptionZh: "結合 LINE 行銷推播的藝文活動平台",
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
    descriptionZh: "結合臉部追蹤與 3D 渲染的 WebAR 互動體驗",
    description: "Web-based AR experience using face tracking and 3D rendering",
    focus: "WebAR, real-time interaction",
    tech: "MediaPipe, Three.js",
    link: "https://webar-huye-next.vercel.app",
  },
  {
    slug: "funkai",
    title: "FunkAI",
    image: "/images/funk-ai.png",
    descriptionZh: "整合多種 AI API 的生成式內容平台",
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
