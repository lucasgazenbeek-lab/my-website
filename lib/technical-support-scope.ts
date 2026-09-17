/**
 * Shared dataset for the Technical Support partner model.
 *
 * This file holds STRUCTURE ONLY — the twelve parts of the division of roles,
 * their role and the group they sit in. Every visible string lives in
 * `lib/translations.ts` under `technicalSupport.rolGroups` /
 * `technicalSupport.rolItems`, keyed by the ids below, so NL and EN always
 * move together (CLAUDE.md).
 *
 * `Rolverdeling` and `ScopeIntake` both import from here; that is deliberate.
 * The intake result lists parts by the same ids, so the two components can
 * never drift apart.
 *
 * The division below is how we split the work as a starting point — our own
 * way of working, not a record of any specific project.
 */

/** Fills {placeholders} in a translated template string. */
export function fillTemplate(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(values[key] ?? "")
  );
}

export type ScopeRole = "u" | "gridstate" | "samen";

export interface ScopeItem {
  /** Key into translations.technicalSupport.rolItems */
  id: string;
  role: ScopeRole;
}

export interface ScopeGroup {
  /** Key into translations.technicalSupport.rolGroups */
  id: string;
  items: ScopeItem[];
}

export const SCOPE_GROUPS: ScopeGroup[] = [
  {
    id: "ontwerp",
    items: [
      { id: "systeemontwerp", role: "gridstate" },
      { id: "berekeningen", role: "gridstate" },
      { id: "civiel", role: "u" },
      { id: "onderzoek", role: "samen" },
    ],
  },
  {
    id: "contract",
    items: [
      { id: "bod", role: "gridstate" },
      { id: "prijs", role: "samen" },
      { id: "documentregister", role: "gridstate" },
      { id: "contractering", role: "u" },
    ],
  },
  {
    id: "uitvoering",
    items: [
      { id: "fysiek", role: "u" },
      { id: "projectleiding", role: "u" },
      { id: "interfaces", role: "gridstate" },
      { id: "tests", role: "samen" },
    ],
  },
];

const ALL_SCOPE_ITEMS: ScopeItem[] = SCOPE_GROUPS.flatMap((g) => g.items);

/** The three engagement shapes offered in the "Drie vormen" section. */
export type OutcomeId = "volledig" | "owner" | "los";

/**
 * Parts that would sit with us per engagement shape.
 * "volledig" is derived from the roles so it can never fall out of step with
 * the division of roles; the two narrower shapes are a curated subset of the
 * same ids.
 */
const OWNER_ITEM_IDS = ["berekeningen", "onderzoek", "documentregister", "tests"];

const LOS_ITEM_IDS = ["systeemontwerp", "berekeningen", "onderzoek"];

export function itemsForOutcome(outcome: OutcomeId): ScopeItem[] {
  if (outcome === "volledig") {
    return ALL_SCOPE_ITEMS.filter((i) => i.role === "gridstate" || i.role === "samen");
  }
  const ids = outcome === "owner" ? OWNER_ITEM_IDS : LOS_ITEM_IDS;
  // Look the ids up in the dataset rather than duplicating them, so a renamed
  // part surfaces here instead of silently disappearing.
  return ids
    .map((id) => ALL_SCOPE_ITEMS.find((i) => i.id === id))
    .filter((i): i is ScopeItem => Boolean(i));
}

/**
 * Intake scoring. Mirrors the decision rules agreed for this page, in
 * precedence order. `defaulted` marks the mixed-picture fallback, where the
 * page adds that the scope gets bounded in the first conversation.
 */
export interface IntakeResult {
  outcome: OutcomeId;
  defaulted: boolean;
}

export function scoreIntake(answers: number[]): IntakeResult {
  const [q1, q2, q3, q4, q5] = answers;

  // Not executing the work themselves, or asking us to assess someone else's
  // design: that is owner's engineering, whatever the rest says.
  if (q2 === 2 || q1 === 3) return { outcome: "owner", defaulted: false };

  // Has engineering capacity and only wants a second pair of eyes.
  if (q3 === 3) return { outcome: "los", defaulted: false };

  // Bounded concerns: light documentation duty plus an engineering department.
  if ((q4 === 1 || q4 === 3) && (q3 === 1 || q3 === 2) && q5 === 3) {
    return { outcome: "los", defaulted: false };
  }

  // Awarded or already building, without an engineering department that can
  // carry the layer above execution.
  if ((q1 === 1 || q1 === 2) && (q3 === 0 || q3 === 1 || q3 === 2)) {
    return { outcome: "volledig", defaulted: false };
  }

  return { outcome: "volledig", defaulted: true };
}
