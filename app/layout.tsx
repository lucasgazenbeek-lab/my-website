import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/site-config";
import { organizationSchema } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Gridstate — Turnkey EPC Batterijopslag Benelux",
    template: "%s | Gridstate",
  },
  description:
    "Gridstate is een turnkey EPC-aannemer gespecialiseerd in grootschalige batterijopslagsystemen en hybride zonnepark+BESS-projecten in de Benelux.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.siteUrl,
    siteName: siteConfig.company.name,
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
        <JsonLd data={organizationSchema()} />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
