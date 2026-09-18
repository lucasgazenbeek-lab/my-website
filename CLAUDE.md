@AGENTS.md

# Gridstate — website

Marketingsite plus een afgeschermd dashboard voor Gridstate B.V. (ontwikkeling,
EPC en consultancy voor batterijopslag in de Benelux). Nederlands is de
voertaal van de site; Engels is een client-side toggle.

## Stack

Next.js 16.2 (App Router) · React 19 · TypeScript · Tailwind 4 · Framer Motion ·
three.js met react-three-fiber · Supabase (login en dashboard) · Resend
(contactformulier).

Tailwind 4 werkt CSS-first: de tokens staan in `@theme inline` in
`app/globals.css`, niet in een `tailwind.config`. Nieuwe kleuren of maten voeg je
daar toe, niet als losse utility of inline style.

## Architectuur

**Pagina's** liggen onder `app/(website)/` en bestaan uit twee bestanden:

- `page.tsx` — server component. Doet alleen `buildMetadata(...)` uit
  `lib/seo.ts` en rendert de client.
- `page-client.tsx` — `"use client"`, alle opmaak en interactie.

Houd die splitsing aan. Metadata hoort nooit in de client, interactie nooit in
de server component.

**Teksten** staan in `lib/translations.ts` onder `nl` en `en`, en worden
opgehaald met `useLang()` uit `components/LanguageProvider.tsx`. Schrijf nooit
zichtbare tekst hard in een component: beide talen moeten meebewegen.

**Bedrijfsgegevens en kerncijfers** staan in `lib/site-config.ts` en dat is de
enige bron van waarheid. Adres, KvK, telefoonnummers, MWh gerealiseerd, aantal
projecten — altijd importeren, nooit overtypen. Dat bestand bestaat juist omdat
die getallen eerder tussen pagina's uit elkaar liepen.

**SEO** loopt via `lib/seo.ts` (`buildMetadata`), `lib/structured-data.ts` en
`components/JsonLd.tsx`. `app/sitemap.ts` en `app/robots.ts` zijn gegenereerd;
een nieuwe pagina moet je daar toevoegen.

**Dashboard** (`app/dashboard/`) zit achter Supabase-auth en staat op
`noindex`. Publieke pagina's en dashboardpagina's nooit door elkaar halen.

## Designtokens

Gedefinieerd in `app/globals.css` onder `@theme inline`, te gebruiken als
Tailwind-klasse (`bg-scarlet`, `text-text-muted`, `border-border`):

| token | hex | gebruik |
|---|---|---|
| `scarlet` | `#470020` | merkkleur, knoppen, accenten |
| `scarlet-hover` | `#5c0029` | hover op merkkleur |
| `scarlet-dark` | `#2d0015` | diepe achtergronden |
| `taupe` | `#C7B3AC` | secundair accent |
| `warm-white` | `#f9f6f4` | zachte sectieachtergrond |
| `warm-gray` | `#f2edea` | gescheiden sectieachtergrond |
| `border` | `#e0d5d0` | randen en scheidingslijnen |
| `text` | `#1a0810` | lopende tekst |
| `text-muted` | `#6b4a56` | bijschriften, secundaire tekst |

Typografie is Montserrat via `next/font` (`--font-montserrat`), gewichten 300
t/m 900. Laad geen lettertypes via een `<link>`; `next/font` doet dat zelf en
voorkomt layout shift.

Bestaande animatieklassen in `globals.css`: `.reveal` / `.reveal.visible`,
`.ticker-track`, `.aurora-blob-1..3`, `.hero-enter-1..4`, `chipBob`. Hergebruik
die in plaats van nieuwe varianten toe te voegen.

## Commando's

```
npm run dev                      # dev-server op :3000
npm run build                    # productiebuild, moet slagen voor een PR
npm run lint                     # eslint
node screenshot.mjs <url> <naam> # screenshot naar "temporary screenshots/"
```

Draai `npm run build` en `npm run lint` voordat je een branch pusht. De build
vangt fouten die de dev-server verzwijgt.

## Vaste regels

- Nooit rechtstreeks committen op `main`. Branch per onderwerp, dan een PR.
- `.env.local` niet lezen, niet tonen, niet committen. Sleutels blijven lokaal.
- Geen zware media in de repo. `public/hero-bg.mp4` is nu al 25 MB; vervang hem
  door een gecomprimeerde versie in plaats van er een tweede naast te zetten.
- Geen nieuwe dependency zonder dat je zegt waarom het niet zonder kan.
- Codecommentaar in het Engels, zichtbare teksten in `translations.ts` in NL en EN.
- Lees `node_modules/next/dist/docs/` voordat je een Next.js-API gebruikt die je
  niet uit dit project kent. Deze versie wijkt af van oudere conventies.
- De PDF's in `public/downloads/` worden niet in deze repo gemaakt. De bron
  staat in de documentfabriek; hier staat alleen een kopie.

## Bekende aandachtspunten

- De NL/EN-wissel is puur client-side; er zijn geen `/en`-routes. De Engelse
  teksten zijn daardoor onzichtbaar voor Google. `lib/seo.ts` zet daarom
  bewust geen hreflang. Als Engels moet scoren zijn echte routes nodig.
- `supply-technical`, `supply-only`, `full-epc` en `wat-wij-doen` zijn
  page-clients van 440 tot 713 regels die hun eigen opmaak meedragen. Elke
  visuele wijziging moet daar nu vier keer gemaakt worden.
- `lib/translations.ts` is 735 regels en groeit mee met elke pagina.

## Designsysteem

Voor alles aan de voorkant geldt de skill `frontend-design` in
`.claude/skills/frontend-design/`. Die legt het palet, de drie lettertypes, de
gouddiscipline, het sectieritme en de componentkeuze vast. Lees en volg hem
voordat je CSS of JSX schrijft, niet erna.

## Vertrouwelijkheid — geldt voor elke tekst op deze site

Bij het schrijven van websitecontent komt er materiaal uit de project- en
klantdossiers. Het volgende gaat nooit naar buiten, ook niet indirect:

- klant-, tegenpartij- en persoonsnamen uit projectdossiers, ook niet via de
  combinatie van locatie en omvang wanneer die herleidbaar is;
- leveranciers- en merknamen en typeaanduidingen, ook in technische teksten;
- prijzen, fees, marges, capex-targets, uurtarieven en trajectbudgetten;
- lopende onderhandelingen, fondsvorming, leasetrajecten, targetlijsten en
  wachtrijposities;
- klantnummers, EAN-codes, vergunningskenmerken en aanbiedingsnummers.

Ingetrokken claims die nergens meer mogen opduiken: "100% eigen engineering",
netbeheerders of RVO als partner, een revenue stack met vaste percentages, en
eigen kansschattingen in procenten.

Generieke technische specificaties mogen wél: containermaten, celchemie,
spanningen, rendementen, degradatie, geluidsniveaus en normen (PGS 37-1,
IEC 62933-5-2, IEC 62619, NEN 1010, RfG). Die staan in elke vakpublicatie en
zijn niet tot een leverancier herleidbaar.

Bij twijfel weglaten en een TODO plaatsen. Zie `REDESIGN.md` sectie 9 voor de
volledige uitwerking.
