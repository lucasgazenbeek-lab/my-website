/**
 * Shared scope dataset for the Technical Support partner model.
 *
 * This file holds STRUCTURE ONLY — work-package ids, their role and the block
 * they belong to. Every visible string lives in `lib/translations.ts` under
 * `technicalSupport.scopeBlocks` / `technicalSupport.scopeItems`, keyed by the
 * ids below, so NL and EN always move together (CLAUDE.md).
 *
 * `ScopeMatrix` and `ScopeIntake` both import from here; that is deliberate.
 * The intake result lists work packages by the same ids, so the two components
 * can never drift apart.
 *
 * The division below is the one we propose as a starting point for a
 * balance-of-plant tender — it is our own way of working, not a record of any
 * specific project.
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

export type ScopeRole = "u" | "gridstate" | "samen" | "onderaannemer";

/** Filter state of the matrix: a single role, or everything at full strength. */
export type ScopeFilter = ScopeRole | "alles";

export interface ScopeItem {
  /** Key into translations.technicalSupport.scopeItems */
  id: string;
  role: ScopeRole;
}

export interface ScopeBlock {
  /** Key into translations.technicalSupport.scopeBlocks */
  id: string;
  /** Blocks 0, 1 and 7 open on load; the rest start collapsed. */
  defaultOpen: boolean;
  items: ScopeItem[];
}

export const SCOPE_BLOCKS: ScopeBlock[] = [
  {
    id: "bid",
    defaultOpen: true,
    items: [
      { id: "b0-vragenlijst", role: "gridstate" },
      { id: "b0-clarification", role: "samen" },
      { id: "b0-deviation", role: "samen" },
      { id: "b0-proposal", role: "gridstate" },
      { id: "b0-programma", role: "gridstate" },
      { id: "b0-organogram", role: "samen" },
      { id: "b0-mdr", role: "gridstate" },
      { id: "b0-engineering", role: "gridstate" },
      { id: "b0-cyber", role: "gridstate" },
      { id: "b0-prijsstaat", role: "samen" },
      { id: "b0-eenheidsprijzen", role: "u" },
      { id: "b0-financieel", role: "u" },
    ],
  },
  {
    id: "engineering",
    defaultOpen: true,
    items: [
      { id: "b1-layout", role: "gridstate" },
      { id: "b1-eendraad", role: "gridstate" },
      { id: "b1-kabel", role: "gridstate" },
      { id: "b1-hulpvoeding", role: "gridstate" },
      { id: "b1-aarding", role: "onderaannemer" },
      { id: "b1-bliksem", role: "onderaannemer" },
      { id: "b1-grondonderzoek", role: "onderaannemer" },
      { id: "b1-verlichting", role: "gridstate" },
      { id: "b1-scada", role: "gridstate" },
      { id: "b1-fundering", role: "u" },
      { id: "b1-civiel", role: "u" },
    ],
  },
  {
    id: "civiel",
    defaultOpen: false,
    items: [
      { id: "b2-grondwerk", role: "u" },
      { id: "b2-sleuven", role: "u" },
      { id: "b2-bluswater", role: "onderaannemer" },
      { id: "b2-hekwerk", role: "onderaannemer" },
    ],
  },
  {
    id: "elektro",
    defaultOpen: false,
    items: [
      { id: "b3-kabelleg", role: "u" },
      { id: "b3-aansluiten", role: "u" },
      { id: "b3-beproeving", role: "onderaannemer" },
      { id: "b3-iv", role: "u" },
    ],
  },
  {
    id: "lossen",
    defaultOpen: false,
    items: [
      { id: "b4-hijsplan", role: "onderaannemer" },
      { id: "b4-transport", role: "samen" },
    ],
  },
  {
    id: "itot",
    defaultOpen: false,
    items: [
      { id: "b5-netwerk", role: "onderaannemer" },
      { id: "b5-camera", role: "onderaannemer" },
      { id: "b5-scada-interface", role: "gridstate" },
    ],
  },
  {
    id: "bouwplaats",
    defaultOpen: false,
    items: [
      { id: "b6-projectleiding", role: "u" },
      { id: "b6-voorzieningen", role: "u" },
      { id: "b6-veiligheid", role: "u" },
      { id: "b6-landmeten", role: "onderaannemer" },
    ],
  },
  {
    id: "begeleiding",
    defaultOpen: true,
    items: [
      { id: "b7-pmp", role: "gridstate" },
      { id: "b7-veiligheidsdossier", role: "gridstate" },
      { id: "b7-documentbeheer", role: "gridstate" },
      { id: "b7-rapportage", role: "gridstate" },
      { id: "b7-interface", role: "gridstate" },
      { id: "b7-uitvragen", role: "gridstate" },
      { id: "b7-contracteren", role: "u" },
      { id: "b7-wijzigingen", role: "gridstate" },
      { id: "b7-tests", role: "gridstate" },
      { id: "b7-asbuilt", role: "gridstate" },
    ],
  },
];

export const ALL_SCOPE_ITEMS: ScopeItem[] = SCOPE_BLOCKS.flatMap((b) => b.items);

export const SCOPE_TOTAL = ALL_SCOPE_ITEMS.length;

export function countByRole(role: ScopeRole): number {
  return ALL_SCOPE_ITEMS.filter((i) => i.role === role).length;
}

/** The three engagement shapes offered in the "Drie vormen" section. */
export type OutcomeId = "volledig" | "owner" | "los";

/**
 * Work packages that would sit with us per engagement shape.
 * "volledig" is derived from the roles so it can never fall out of step with
 * the matrix; the two narrower shapes are a curated subset of the same ids.
 */
const OWNER_ITEM_IDS = [
  "b0-deviation",
  "b0-prijsstaat",
  "b1-kabel",
  "b1-hulpvoeding",
  "b7-wijzigingen",
  "b7-tests",
  "b7-asbuilt",
];

const LOS_ITEM_IDS = [
  "b1-layout",
  "b1-eendraad",
  "b1-kabel",
  "b1-hulpvoeding",
  "b1-verlichting",
];

export function itemsForOutcome(outcome: OutcomeId): ScopeItem[] {
  if (outcome === "volledig") {
    return ALL_SCOPE_ITEMS.filter((i) => i.role === "gridstate" || i.role === "samen");
  }
  const ids = outcome === "owner" ? OWNER_ITEM_IDS : LOS_ITEM_IDS;
  // Look the ids up in the dataset rather than duplicating them, so a renamed
  // work package surfaces here instead of silently disappearing.
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
