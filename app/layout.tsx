import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gridstate.nl"),
  title: {
    default: "Gridstate — Turnkey EPC Batterijopslag Benelux",
    template: "%s | Gridstate",
  },
  description:
    "Gridstate is een turnkey EPC-aannemer gespecialiseerd in grootschalige batterijopslagsystemen en hybride zonnepark+BESS-projecten in de Benelux.",
  keywords: [
    "BESS",
    "batterijopslag",
    "EPC",
    "energieopslag",
    "Benelux",
    "utility-scale",
    "C&I",
    "peakshaving",
    "netcongestie",
    "batterijopslag Benelux",
    "EPC aannemer Nederland",
    "grootschalige energieopslag",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://gridstate.nl",
    siteName: "Gridstate",
    title: "Gridstate — Turnkey EPC Batterijopslag Benelux",
    description:
      "Turnkey EPC-aannemer voor grootschalige BESS en hybride zonnepark+BESS projecten in de Benelux.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gridstate — Turnkey EPC Batterijopslag Benelux",
    description:
      "Turnkey EPC-aannemer voor grootschalige BESS en hybride zonnepark+BESS projecten in de Benelux.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#1a0810] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gridstate",
              url: "https://gridstate.nl",
              logo: "https://gridstate.nl/logo.png",
              description:
                "Turnkey EPC-aannemer gespecialiseerd in grootschalige batterijopslagsystemen en hybride zonnepark+BESS-projecten in de Benelux.",
              areaServed: ["NL", "BE", "LU"],
              knowsAbout: [
                "BESS",
                "batterijopslag",
                "energieopslag",
                "utility-scale zonneparken",
                "EPC",
                "peakshaving",
                "netcongestie",
              ],
            }),
          }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
