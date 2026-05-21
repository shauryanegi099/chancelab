import type { Metadata } from "next";
import { Bodoni_Moda, UnifrakturCook, EB_Garamond, Special_Elite } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import Grain from "@/components/Grain";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const display = Bodoni_Moda({
  subsets: ["latin"], weight: ["400", "500", "700", "800", "900"], style: ["normal", "italic"],
  variable: "--font-display", display: "swap",
});
const black = UnifrakturCook({ subsets: ["latin"], weight: "700", variable: "--font-black", display: "swap" });
const garamond = EB_Garamond({
  subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"],
  variable: "--font-body", display: "swap",
});
const typewriter = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--font-type", display: "swap" });

export const metadata: Metadata = {
  title: "THE CHANCE LAB — Codex of Fate",
  description: "A cursed grimoire of probability & statistics. Alea iacta est — the die is cast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${black.variable} ${garamond.variable} ${typewriter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Grain />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
