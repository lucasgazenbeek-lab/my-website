# SEO & Kwaliteitsupgrade — gridstate.nl

Datum: 10 juni 2026 · Uitgevoerd in 9 fasen, elk als aparte git commit.

## Architectuur (context)

De site is Next.js 16 (App Router) op Vercel. Alle publieke pagina's waren client components met teksten uit `lib/translations.ts` (client-side NL/EN-toggle, géén aparte EN-routes). Elke route is nu gesplitst in een server `page.tsx` (metadata + JSON-LD) en een `page-client.tsx` (bestaande UI, ongewijzigd).

## Doorgevoerde wijzigingen per fase

### Fase 1 — Centrale siteconfig (`feat(config)`)
- Nieuw: `lib/site-config.ts` — bedrijfsgegevens (naam, adres, KvK, e-mail, telefoons, geo), social en alle definitieve kerncijfers als gestructureerd `stats`-object.
- Alle hardcoded cijfers, adressen, telefoonnummers en e-mailadressen gerefactord naar deze config (footer, BookingCTA, FloatingChips, statsecties op alle pagina's, contactkaarten).
- Conflicterende MW-claims vervangen: "20 MW+" en "30 MW+" → **70+ MWh gerealiseerd** en **50+ MWh in actieve ontwikkeling**. "6+" → **6** actieve & geplande projecten.
- Eén telefoonnotatie overal: `+31 6 XX XX XX XX` (de `(0)`-variant in BookingCTA verwijderd).
- Footer-copyright is dynamisch: `© ${new Date().getFullYear()} Gridstate B.V.`

### Fase 2 — Per-pagina metadata & canonicals (`feat(seo)`)
- Elke publieke route heeft nu een unieke, keyword-gerichte `<title>`, een meta description van 140–160 tekens, een canonical URL en paginaspecifieke `og:title`/`og:description`/`og:url` (via `lib/seo.ts` → `buildMetadata`). De bestaande OG-image (`app/opengraph-image.tsx`) blijft automatisch gelden.
- `meta keywords` verwijderd uit de root layout.
- **hreflang:** bewust NIET toegevoegd. De EN-versie is een puur client-side toggle zonder eigen URL's; hreflang zou naar niet-bestaande URL's verwijzen. Zie aanbevelingen.

### Fase 3 — Sitemap & robots (`feat(seo)`)
- `app/sitemap.ts`: alle 9 publieke routes + `/privacyverklaring`, met `lastModified`, `changeFrequency` en `priority`. `/login`, `/dashboard` en `/api` uitgesloten.
- `app/robots.ts`: alles toegestaan behalve `/login`, `/dashboard`, `/api`; verwijst naar `https://gridstate.nl/sitemap.xml`.

### Fase 4 — Structured data (`feat(seo)`)
- Herbruikbare `JsonLd`-component + builders in `lib/structured-data.ts`, gevoed door de siteconfig.
- Root layout: gecombineerd **Organization + LocalBusiness** schema (adres, geo, KvK, e-mail, telefoon, areaServed NL/BE/LU). Het oude inline Organization-schema is vervangen — geen dubbele schema's.
- **Service**-schema op `/wat-wij-doen` (C&I + utility-scale) en op de drie partnermodel-pagina's, met `provider` als `@id`-referentie naar de Organization.
- **FAQPage** op `/partnermodellen/full-epc`; de 8 vragen staan in `faq-data.ts` — één array, twee renderdoelen (zichtbare FAQ + schema).
- **BreadcrumbList** op de drie partnermodel-subpagina's.
- Geverifieerd: alle JSON-LD blokken parsen als valide JSON in de gerenderde HTML.

### Fase 5 — Crawlbare counters (`fix(seo)`)
- `CountUp` rendert de eindwaarde server-side (crawlers zien nu "70+ MWh" i.p.v. "0"); de count-up-animatie start pas client-side via IntersectionObserver en wordt overgeslagen bij `prefers-reduced-motion`.
- Overige cijferweergaven (wat-wij-doen, projecten, full-epc, over-ons) waren al statische tekst en lezen nu uit de siteconfig.

### Fase 6 — Performance & Core Web Vitals (`perf`)
- ~~Posterframe + client-side video-mount~~ **Teruggedraaid op verzoek (10 juni 2026):** de semi-transparante video (55% opacity) kwam bovenop het eveneens semi-transparante posterframe te liggen, wat een dubbelbeeld/ghosting-effect gaf. De hero is hersteld naar de originele video-only opzet. Het geëxtraheerde posterframe (`public/hero-poster.jpg`) blijft beschikbaar voor een toekomstige, correcte implementatie (poster verbergen zodra de video speelt) — zie TODO's.
- Correcte `sizes` op nav-logo (110px i.p.v. laden op w=640), footer-logo en alle partnerlogo's.
- Duplicaat-logoset in de marquee heeft `aria-hidden="true"` en lege alts.
- Fonts liepen al via `next/font` (Montserrat) — geen wijziging nodig.

### Fase 7 — Tekstcorrecties (`fix(content)`)
- "Één" → "Eén" (4×), "teveel" → "te veel".
- "twee insiders" → "insiders" (NL + EN) conform driekoppig team.
- "TSO/DSO certified" → "Conform TSO/DSO-eisen"; "FCR/aFRR certified" → "Geschikt voor FCR/aFRR-deelname" (EN-equivalenten gespiegeld). "IEC/NEN/PGS compliant" behouden.
- Revenue-stack voorbeeld: "2 MWh utility-scale systeem" → "10 MWh utility-scale systeem" (full-epc én supply-technical, NL + EN). De getoonde percentages (FCR 45 / onbalans 30 / peakshaving 15 / aFRR-mFRR 10) passen bij utility-scale.
- De identieke CTA-regel "Geen verplichtingen — …" varieert nu per pagina via een `trustLine`-prop op BookingCTA.

### Fase 8 — Semantiek & interne links (`fix(a11y)`)
- Elke pagina heeft exact één `<h1>` (gecontroleerd op alle 10 routes).
- Gestylede sectielabels zijn echte headings geworden zonder visuele wijziging (Tailwind-preflight laat headings size/weight erven): stats-, ticker- en why-sectie op home → `h2`; teamnamen op /over-ons → `h3`; FAQ-vragen → `h3`; sr-only `h2` boven het projectgrid.
- Landmarks waren al aanwezig (`header`/`nav`/`main`/`footer`).
- Interne links: de "Technical Partner"-servicekaart op home linkt nu naar `/partnermodellen/supply-technical` i.p.v. `/wat-wij-doen`.

### Fase 9 — Juridisch & vertrouwen (`feat(legal)`)
- Nieuw: `/privacyverklaring` — Nederlandse AVG-verklaring (verwerkingsverantwoordelijke, gegevens, doeleinden, grondslagen, bewaartermijnen, derde partijen Vercel/Resend/Calendly, rechten, AP-klachtrecht), gestyled conform de site en opgenomen in footer, sitemap en metadata.
- Consent-regel met privacylink onder het contactformulier (NL + EN).
- `noindex, nofollow` op `/login`.
- Cookie-inventarisatie: de site plaatst **zelf geen** analytics- of trackingcookies. Alleen de Calendly-iframe plaatst third-party cookies → een cookiebanner is in de huidige opzet niet strikt nodig; zie aanbevelingen.

### Fase 10 — Verificatie
- Productie-build slaagt zonder errors.
- Lokale crawl van alle 11 routes geverifieerd: unieke titles + descriptions, kloppende canonicals, valide JSON-LD, counters met echte waarden in de HTML, sitemap met 10 URL's, correcte robots.txt, noindex op /login.
- Screenshots van home, wat-wij-doen en privacyverklaring gecontroleerd — geen visuele regressies.

---

## Naronde — Eenheidscontrole MW/MWh + pre-deploy smoke test (10 juni 2026)

**Eenheidscontrole:** alle 17 vindplaatsen van kerncijfers met label geïnventariseerd (home-counters, FloatingChips, statcards wat-wij-doen, stats-strip projecten, trackrecord over-ons, trustbars van de drie partnermodel-pagina's, revenue-stack voorbeelden, projectkaarten). Uitkomst: **geen eenheidsfouten** — de labels zijn in de hoofdronde al samen met de waarden omgezet ("BESS-vermogen …" → "Opslagcapaciteit …", EN "power" → "capacity"). Alle resterende MW-vermeldingen (1 MW–50 MW+, 100+ MW, 10 MVA, 100 kW–4/5 MW, 5 MWh platform, 500 kWh–5+ MWh) zijn productspecificaties en correct. NL en EN tonen overal exact dezelfde waarde + eenheid (beide lezen uit `lib/site-config.ts` of identieke literals). Er was dus geen `fix(content)`-commit nodig.

Aandachtspunten (geen fouten, wel ter bevestiging/verbetering):
- **Supply Only** toont "70+ MWh — Opslagcapaciteit geleverd" ("supplied"): zelfde cijfer als "gerealiseerd", maar het label claimt levering. Laten staan; graag bevestiging van Lucas dat 70+ MWh ook als "geleverd" klopt.
- Enkele labels zijn NL-only hardcoded en wisselen niet mee met de EN-toggle (FloatingChips-chips, statcards op /wat-wij-doen, trackrecord-labels op /over-ons). Dit was al zo vóór de upgrade; waarden + eenheden zijn identiek. Aanbeveling: meenemen bij een eventuele EN-routes-migratie.

**Smoke test:** productie-build slaagt zonder errors. Alle 10 publieke routes getest in headless Chrome: NL-content rendert, EN-toggle werkt op elke pagina na de server/client-splitsing, en er verschenen **0 console-errors, -warnings of hydration-meldingen**. De hero-video mount correct client-side op desktop. SSR-HTML van de homepage bevat de echte eindwaarden (70+ MWh, 50+ MWh, 5+, 100%) met de juiste labels; nergens een counter op "0".

## TODO's die handmatige actie vereisen

| # | Actie | Waar |
|---|-------|------|
| 1 | **Sitemap indienen** in Google Search Console (`https://gridstate.nl/sitemap.xml`) + domein verifiëren | Search Console |
| 2 | **Rich Results Test** draaien op `/`, `/wat-wij-doen` en `/partnermodellen/full-epc` na deploy | search.google.com/test/rich-results |
| 3 | **Hero-video comprimeren** (nu 25,8 MB) en WebM-variant maken — ffmpeg was niet beschikbaar in deze omgeving:<br>`ffmpeg -i hero-bg.mp4 -vcodec libx264 -crf 28 -preset slow -vf scale=1920:-2 -an hero-bg-opt.mp4`<br>`ffmpeg -i hero-bg.mp4 -c:v libvpx-vp9 -crf 38 -b:v 0 -vf scale=1920:-2 -an hero-bg.webm`<br>Daarna in `page-client.tsx` een tweede `<source type="video/webm">` boven de mp4 zetten. De poster/LCP-optimalisatie kan dan ook correct terug: poster tonen tot de video speelt en hem daarna verbergen (i.p.v. beide gestapeld op 55% opacity, wat ghosting gaf). | `public/hero-bg.mp4` |
| 4 | **`logos/nedkab.jpeg`** vervangen door PNG/WebP met transparante achtergrond (vereist beeldbewerking; jpeg heeft geen alfakanaal) | `public/logos/` |
| 5 | **Privacyverklaring juridisch laten reviewen** (disclaimer staat als comment in de code) | `app/(website)/privacyverklaring/page.tsx` |
| 6 | **LinkedIn-bedrijfspagina URL** invullen (`social.linkedin`) → komt automatisch in het Organization-schema als `sameAs` | `lib/site-config.ts` |
| 7 | **Geo-coördinaten verifiëren** van Burgemeester Hoffscholteweg 4 (nu benadering, TODO-comment aanwezig) | `lib/site-config.ts` |
| 8 | **`foundingDate`** toevoegen aan het Organization-schema zodra bekend | `lib/structured-data.ts` |
| 9 | **Teamfoto's** toevoegen op /over-ons (nu initialen-avatars) — goed voor vertrouwen én image SEO | `app/(website)/over-ons/` |
| 10 | (Optioneel) **Cookieverklaring/banner** overwegen als er ooit analytics (GA4, Plausible e.d.) wordt toegevoegd; nu niet nodig | — |

## Aanbeveling: EN-versie naar eigen routes

De EN-toggle is client-side; zoekmachines zien alleen NL. Voor internationale vindbaarheid: migreer EN naar eigen routes (bijv. `/en/...`) met `generateStaticParams` per taal, en voeg dan wél `alternates.languages` (nl-NL, en, x-default) toe. De huidige `lib/translations.ts`-structuur leent zich daar goed voor.

## Aanbeveling: contentmarketing via /kennisbank

Een kennisbank is de grootste resterende SEO-kans: long-tail zoekverkeer van precies de B2B-doelgroep (investeerders, ontwikkelaars, industriële eindklanten) die nu nergens op de site landt.

**Voorgestelde URL-structuur:**

```
/kennisbank                          → overzicht (categoriefilters)
/kennisbank/[slug]                   → artikel
bijv. /kennisbank/netcongestie-oplossen-met-batterijopslag
```

Technisch: MDX- of CMS-gedreven artikelen met `generateMetadata` per slug, `Article`-schema, auteur (E-E-A-T: koppel aan teamleden), publicatie-/wijzigingsdatum, en interne links naar de partnermodel-pagina's.

**Eerste vijf artikeltitels:**

1. *Netcongestie oplossen met batterijopslag: zo werkt het (en dit levert het op)* — `/kennisbank/netcongestie-oplossen-met-batterijopslag`
2. *PGS 37-1 uitgelegd: brandveiligheidseisen voor batterijopslag in 2026* — `/kennisbank/pgs-37-1-brandveiligheid-batterijopslag`
3. *De BESS-businesscase: FCR, aFRR en onbalanshandel in één revenue stack* — `/kennisbank/bess-businesscase-fcr-afrr-onbalans`
4. *GOPACS en congestiemanagement: geld verdienen aan een vol stroomnet* — `/kennisbank/gopacs-congestiemanagement-bess`
5. *SDE++ voor batterijopslag en hybride PV+BESS: subsidie slim benutten* — `/kennisbank/sde-plus-plus-batterijopslag`
