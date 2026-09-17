/**
 * Scoring for the investor route picker on /voor-investeerders.
 *
 * STRUCTURE ONLY — the questions and the copy live in `lib/translations.ts`
 * under `investors.quizQuestions` and `investors.entries`, so NL and EN always
 * move together (CLAUDE.md).
 *
 * The three outcomes are the three entry points the page already offers, by
 * index into `investors.entries`, so the picker can never point at something
 * the page does not describe.
 */

import { siteConfig } from "@/lib/site-config";

export type RouteId = "participatie" | "acquisitie" | "validatie";

/**
 * Placeholders in `investors.entries[].desc`. The figure stays in
 * `site-config.ts` so it can never drift from the rest of the site, and the
 * sentence around it stays translatable.
 */
export const ENTRY_VALUES = {
  mwh: `${siteConfig.stats.mwhInDevelopment.value} ${siteConfig.stats.mwhInDevelopment.unit}`,
};

/** Index into translations.investors.entries. */
export const ROUTE_ENTRY_INDEX: Record<RouteId, number> = {
  participatie: 0,
  acquisitie: 1,
  validatie: 2,
};

export interface RouteResult {
  route: RouteId;
  /** True when the answers gave a mixed picture and we fell back. */
  defaulted: boolean;
}

/**
 * Decision rules in precedence order. Validation is the fallback because it is
 * the smallest first step: it commits the reader to nothing beyond one case.
 *
 * The three rules cover every combination the current five questions can
 * produce, so `defaulted` only turns true once someone adds an answer option
 * in `translations.ts` without extending the rules here — which is exactly the
 * case worth guarding, since the copy and the logic live in separate files.
 */
export function scoreRoute(answers: number[]): RouteResult {
  const [q1, , , q4] = answers;

  // A model they are unsure about, or they only want a second opinion.
  if (q1 === 1 || q4 === 3) return { route: "validatie", defaulted: false };

  // Something concrete they are considering buying.
  if (q1 === 0) return { route: "acquisitie", defaulted: false };

  // Orienting, or holding positions, without the capacity to carry it alone.
  if ((q1 === 2 || q1 === 3) && (q4 === 0 || q4 === 1 || q4 === 2)) {
    return { route: "participatie", defaulted: false };
  }

  return { route: "validatie", defaulted: true };
}
