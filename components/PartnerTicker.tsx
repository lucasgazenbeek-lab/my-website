"use client";

import Image from "next/image";

const LOGOS = [
  { src: "/logos/stedin.webp", alt: "Stedin", h: 44 },
  { src: "/logos/enexis.png", alt: "Enexis", h: 44 },
  { src: "/logos/liander.png", alt: "Liander", h: 38 },
  { src: "/logos/tennet.webp", alt: "TenneT", h: 44 },
  { src: "/logos/rvo.png", alt: "RVO", h: 48 },
  { src: "/logos/sinexcel.png", alt: "Sinexcel", h: 40 },
  { src: "/logos/eddygrid.png", alt: "EddyGrid", h: 38 },
  { src: "/logos/kiwatt.webp", alt: "Kiwatt", h: 44 },
  { src: "/logos/efs.png", alt: "EFS", h: 40 },
  { src: "/logos/tibo.png", alt: "Tibo", h: 38 },
  { src: "/logos/kuyvenhoven.png", alt: "Kuyvenhoven", h: 44 },
  { src: "/logos/nedkab.jpeg", alt: "Nedkab", h: 38 },
  { src: "/logos/eps.png", alt: "EPS", h: 40 },
  { src: "/logos/wtg.png", alt: "WTG", h: 38 },
  { src: "/logos/de-kock.png", alt: "De Kock", h: 40 },
  { src: "/logos/eenovance.png", alt: "Eenovance", h: 38 },
];

export default function PartnerTicker() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <div className="overflow-hidden w-full py-2 relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #f2edea, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f2edea, transparent)" }} />

      <div className="ticker-track flex items-center gap-16 w-max">
        {doubled.map((logo, i) => (
          <div key={i} className="shrink-0 flex items-center justify-center opacity-40 hover:opacity-90 transition-opacity duration-300"
            style={{ height: 72, minWidth: 100 }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={logo.h}
              className="object-contain"
              style={{ maxHeight: logo.h, width: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
