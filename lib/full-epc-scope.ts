/**
 * Shared structure for the Full EPC scope section.
 *
 * STRUCTURE ONLY — the twelve blocks a battery storage project consists of
 * and who carries each one. Every visible string lives in
 * `lib/translations.ts` under `fullEpc.scopeItems`, keyed by the ids below,
 * so NL and EN always move together (CLAUDE.md).
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

export const EPC_BLOCKS: EpcBlock[] = [
  { id: "batterijsysteem", role: "wij" },
  { id: "omvormers", role: "wij" },
  { id: "middenspanning", role: "wij" },
  { id: "netaansluiting", role: "samen" },
  { id: "hulpvoeding", role: "wij" },
  { id: "civiel", role: "wij" },
  { id: "kabelwerk", role: "wij" },
  { id: "besturing", role: "wij" },
  { id: "brandveiligheid", role: "wij" },
  { id: "vergunning", role: "wij" },
  { id: "engineering", role: "wij" },
  { id: "inbedrijfstelling", role: "wij" },
];
