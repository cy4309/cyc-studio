import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/assets/styles/globals.css";
import { I18nProvider } from "@/locales/i18n";
import ScrollSectionsProvider from "@/components/ScrollSectionsProvider";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "CYC Studio",
  description:
    "Creative frontend studio showcasing interactive and visual web projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`bg-black text-white antialiased ${nunito.variable} font-nunito`}
        className={`bg-black text-white antialiased ${nunito.variable}`}
      >
        <I18nProvider>
          <ScrollSectionsProvider />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
