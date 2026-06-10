/**
 * Central site configuration — single source of truth for company data,
 * contact details and key figures. All pages and components must read
 * from this file instead of hardcoding values, so numbers can never
 * drift apart between pages again.
 */

export const siteConfig = {
  siteUrl: "https://gridstate.nl",

  company: {
    legalName: "Gridstate B.V.",
    name: "Gridstate",
    email: "info@gridstate.nl",
    kvk: "99572621",
    address: {
      street: "Burgemeester Hoffscholteweg 4",
      postalCode: "1431 DN",
      city: "Aalsmeer",
      country: "NL",
      full: "Burgemeester Hoffscholteweg 4, 1431 DN Aalsmeer",
    },
    // TODO(Lucas): verify exact coordinates of Burgemeester Hoffscholteweg 4, Aalsmeer
    geo: {
      latitude: 52.2659,
      longitude: 4.7478,
    },
  },

  contacts: {
    emiel: {
      name: "Emiel Verlee",
      email: "e.verlee@gridstate.nl",
      // Single phone notation everywhere: +31 6 XX XX XX XX (no "(0)")
      phoneDisplay: "+31 6 25 40 43 50",
      phoneHref: "+31625404350",
    },
    lucas: {
      name: "Lucas Gazenbeek",
      email: "l.gazenbeek@gridstate.nl",
      phoneDisplay: "+31 6 52 35 03 18",
      phoneHref: "+31652350318",
    },
  },

  social: {
    // TODO(Lucas): add the LinkedIn company page URL once confirmed
    linkedin: "",
  },

  /**
   * Definitive key figures (source of truth). Capacity is expressed in MWh;
   * use MW only where actual power is meant.
   */
  stats: {
    mwhRealized: { value: 70, suffix: "+", unit: "MWh", display: "70+ MWh" },
    mwhInDevelopment: { value: 50, suffix: "+", unit: "MWh", display: "50+ MWh" },
    activeProjects: { value: 6, suffix: "", unit: "", display: "6" },
    manufacturerRelations: { value: 5, suffix: "+", unit: "", display: "5+" },
    combinedRevenue: { value: 7, prefix: "€", suffix: "M+", unit: "", display: "€7M+" },
    combinedExperienceYears: { value: 12, suffix: "+", unit: "jaar", display: "12+" },
    inHouseEngineering: { value: 100, suffix: "%", unit: "", display: "100%" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
