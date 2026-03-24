import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gridstate — Turnkey EPC Batterijopslag Benelux",
  description:
    "Gridstate is een turnkey EPC-aannemer gespecialiseerd in grootschalige batterijopslagsystemen en hybride zonnepark+BESS-projecten in de Benelux.",
  keywords:
    "BESS, batterijopslag, EPC, energieopslag, Benelux, utility-scale, C&I, peakshaving, netcongestie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1a0810] antialiased">
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
