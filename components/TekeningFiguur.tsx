"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * One of our own CAD drawings with a caption under it. A technical drawing
 * without a line of explanation is decoration; with one it is evidence.
 *
 * Two things this component exists to get right.
 *
 * The slot is capped at max-w-3xl (768px). The sources are around 900-1000px
 * wide and nothing has been upscaled (see public/fotos/tekeningen/LEESMIJ.md),
 * so a wider slot would stretch them. Both wide files are exactly 3:2 and both
 * portrait files exactly 4:5, so `object-cover` crops nothing either way.
 *
 * Below `md` the wide crop shrinks to about 340px and the cable references
 * stop being readable, so a phone gets the portrait crop instead — same
 * drawing, tighter frame, roughly twice the area. Both crops carry the same
 * alt: only one of the two is ever displayed, and the hidden one is
 * `display: none` and so ignored by assistive tech either way.
 *
 * Both are given an honest `sizes` rather than collapsing the hidden one to
 * 1px. That trick saves a request but makes Chrome pick a candidate far below
 * what the visible slot needs, which showed up as a 240px file in a 340px slot
 * on a phone. A second, correctly sized fetch is the cheaper mistake.
 */
export default function TekeningFiguur({
  srcWide,
  srcPortrait,
  alt,
  caption,
}: {
  srcWide: string;
  srcPortrait: string;
  alt: string;
  caption: string;
}) {
  return (
    <ScrollReveal>
      <figure className="max-w-3xl">
        <div
          className="relative aspect-[4/5] md:aspect-[3/2] w-full rounded-2xl overflow-hidden border border-[#e0d5d0]"
          style={{ boxShadow: "0 8px 40px rgba(71,0,32,0.10), 0 2px 8px rgba(71,0,32,0.06)" }}
        >
          <Image
            src={srcPortrait}
            alt={alt}
            fill
            sizes="100vw"
            quality={90}
            className="object-cover md:hidden"
          />
          <Image
            src={srcWide}
            alt={alt}
            fill
            sizes="768px"
            quality={90}
            className="object-cover hidden md:block"
          />
        </div>
        <figcaption className="mt-3 text-sm text-[#6b4a56] leading-relaxed">{caption}</figcaption>
      </figure>
    </ScrollReveal>
  );
}
