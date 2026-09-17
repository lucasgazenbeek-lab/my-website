/**
 * Shared structure for the Supply Only offer-check section.
 *
 * STRUCTURE ONLY — the fourteen questions we run through before taking a
 * manufacturer's bid seriously, grouped the way we read an offer. Every
 * visible string lives in `lib/translations.ts` under
 * `supplyOnly.checkGroups` and `supplyOnly.checkItems`, keyed by the ids
 * below, so NL and EN always move together (CLAUDE.md).
 *
 * The questions are ours; no supplier, manufacturer or product names appear
 * here or in the copy these ids point at, and no amounts or warranty figures.
 */

export interface CheckGroup {
  /** Key into translations.supplyOnly.checkGroups */
  id: string;
  /** Keys into translations.supplyOnly.checkItems, in reading order */
  items: string[];
}

export const CHECK_GROUPS: CheckGroup[] = [
  {
    id: "krijgt",
    items: ["commissioning", "garantie", "gebruiksvoorwaarden", "eenheidsprijzen", "uitsluitingen"],
  },
  {
    id: "voorwaarden",
    items: ["levertijd", "startmoment", "prijsvastheid", "leveringsconditie", "transportrisico", "eigendom"],
  },
  {
    id: "ontwerp",
    items: ["brandtestniveau", "configuratiedekking", "hulpvoeding"],
  },
];

/** Running number across the groups, so the list reads 1 to 14. */
export const CHECK_NUMBERS: Record<string, number> = Object.fromEntries(
  CHECK_GROUPS.flatMap((g) => g.items).map((id, i) => [id, i + 1])
);

export const CHECK_TOTAL = Object.keys(CHECK_NUMBERS).length;
