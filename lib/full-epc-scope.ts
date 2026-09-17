/**
 * Shared structure for the Full EPC scope section.
 *
 * STRUCTURE ONLY — the twelve blocks a battery storage project consists of,
 * grouped into the three phases they fall in (four blocks each, so the
 * panels stay the same height), and who carries each one. Every
 * visible string lives in `lib/translations.ts` under `fullEpc.scopePhases`
 * and `fullEpc.scopeItems`, keyed by the ids below, so NL and EN always move
 * together (CLAUDE.md).
 *
 * This is how we divide a turnkey assignment as standard; it is our own way
 * of working, not a record of any project. No supplier, manufacturer or
 * product names appear here or in the copy these ids point at.
 */

export type EpcRole = "wij" | "samen" | "u";

export interface EpcBlock {
  /** Key into translations.fullEpc.scopeItems */
  id: string;
  role: EpcRole;
}

export interface EpcPhase {
  /** Key into translations.fullEpc.scopePhases and .scopeExamples */
  id: string;
  blocks: EpcBlock[];
}

export const EPC_PHASES: EpcPhase[] = [
  {
    id: "ontwerp",
    blocks: [
      { id: "engineering", role: "wij" },
      { id: "vergunning", role: "wij" },
      { id: "brandveiligheid", role: "wij" },
      { id: "netaansluiting", role: "samen" },
    ],
  },
  {
    id: "inkoop",
    blocks: [
      { id: "batterijsysteem", role: "wij" },
      { id: "omvormers", role: "wij" },
      { id: "middenspanning", role: "wij" },
      { id: "hulpvoeding", role: "wij" },
    ],
  },
  {
    id: "bouw",
    blocks: [
      { id: "civiel", role: "wij" },
      { id: "kabelwerk", role: "wij" },
      { id: "besturing", role: "wij" },
      { id: "inbedrijfstelling", role: "wij" },
    ],
  },
];
