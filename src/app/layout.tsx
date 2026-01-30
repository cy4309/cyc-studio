import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/assets/styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
