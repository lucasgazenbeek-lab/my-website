---
name: frontend-design
description: Het bestaande designsysteem van gridstate.nl, afgeleid uit de code zelf. Gebruik dit bij elke pagina of sectie die je bouwt of wijzigt, zodat nieuw werk niet van de bestaande site afwijkt. Lezen vóórdat je CSS of JSX schrijft.
---

# Gridstate frontend

**Dit systeem is niet bedacht maar uitgelezen uit de bestaande site.** De site is
goed zoals hij is. Wij voegen toe; wij gooien niet om. Wijkt iets wat je bouwt af
van wat hieronder staat, dan is dat wat je bouwt fout — niet de site.

Lees bij twijfel `app/(website)/page-client.tsx` op `main`. Dat is de
referentie-implementatie van vrijwel alles hieronder.

## Het ritme

De site is licht, met donkere ankers. In deze volgorde op de homepage:

| sectie | achtergrond |
|---|---|
| hero | `#1a0810` met video eroverheen |
| kaartensectie | `bg-white` |
| ticker | `bg-[#f9f6f4]` met randen boven en onder |
| services | `bg-white`, met **donkere** kaarten erin |
| cijfers | `bg-[#470020]` massief |
| waarom | `bg-[#f9f6f4]`, met witte kaarten |
| afsluitende CTA | `bg-[#470020]` met `HeroParticles` |

Wissel wit en `#f9f6f4` af tussen leessecties, en zet ongeveer elke drie
secties een scharlaken anker neer. Twee lichte secties van dezelfde kleur
achter elkaar is een fout.

Donkere secties krijgen altijd een vervagende band van 24 px boven en onder:

```jsx
<div className="absolute inset-x-0 top-0 h-24 pointer-events-none"
     style={{ background: "linear-gradient(to bottom, rgba(20,0,10,0.5), transparent)" }} />
```

## Maten

- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Lichte sectie: `py-24 lg:py-32`
- Donker anker: `py-28 lg:py-40`, CTA `py-32 lg:py-40`
- Kaartenraster: `gap-5` tot `gap-6 lg:gap-8`

## Typografie — Montserrat, zwaar en strak

Eén letter, `font-black` (900) voor alles wat kop is. Negatieve tracking op
grote koppen; dat is het handschrift van deze site.

| rol | klassen en stijl |
|---|---|
| h1 hero | `clamp(2.6rem, 6vw, 5.5rem)`, weight 700, `letter-spacing:-0.03em`, `leading-[0.9]` |
| h2 sectie | `text-4xl lg:text-5xl font-black text-[#1a0810]`, `letter-spacing:-0.03em` |
| h3 kaart | `text-xl` tot `text-2xl font-black`, `letter-spacing:-0.02em` |
| eyebrow | `text-xs font-black tracking-widest uppercase` — `text-[#470020]` op licht, `text-white/35` op donker |
| lopende tekst | `text-[#6b4a56] leading-relaxed`, op donker `text-white/55` |
| groot cijfer | `clamp(2.8rem, 5vw, 5rem)` font-black, `letter-spacing:-0.04em`, `line-height:1` |

## Kleur

| token | hex | gebruik |
|---|---|---|
| scarlet | `#470020` | merkkleur, ankersecties, koppen van eyebrows, icoontegels |
| scarlet-hover | `#5c0029` | hover |
| scarlet-dark | `#2d0015` | diepe verlopen |
| text | `#1a0810` | koppen op licht |
| text-muted | `#6b4a56` | lopende tekst |
| warm-white | `#f9f6f4` | afwisselende sectieachtergrond en kaartvulling |
| warm-gray | `#f2edea` | hover op een witte knop |
| border | `#e0d5d0` | randen |
| taupe | `#C7B3AC` | labels op donker |

Staat in `app/globals.css` onder `@theme inline`. Voeg daar toe, niet inline.

## Kaarten

**Licht, op wit** — de partnermodellen-variant:
```
p-8 lg:p-10 bg-[#f9f6f4] border-2 border-transparent rounded-2xl
hover:border-[#470020]/20 hover:bg-white hover:shadow-xl
transition-all duration-300
```
De rand is transparant en kleurt pas bij hover; de vulling gaat van warm naar
wit. Dat is de beweging, niet een schaduw die uit het niets verschijnt.

**Licht, op `#f9f6f4`** — de waarom-variant:
```
p-6 sm:p-10 lg:p-12 bg-white border border-[#e0d5d0] rounded-2xl
hover:shadow-lg hover:border-[#470020]/20 transition-all duration-300
```

**Donker, als beeldkaart** — de services-variant. Vier lagen over elkaar:
```jsx
// 1 basis: per kaart een eigen verloop
style={{ background: "linear-gradient(145deg, #3a0018 0%, #1a0810 60%, #0e0008 100%)",
         boxShadow: "0 8px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)" }}
// 2 gloed van onderaf
background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${accent} 0%, transparent 70%)`
// 3 korrel: feTurbulence fractalNoise baseFrequency .7 numOctaves 3, saturate 0, opacity .06
// 4 glimlijn bovenaan: h-px bg-white/0 group-hover:bg-white/10
```
Verhouding `aspect-[3/2] sm:aspect-[4/5]`, `rounded-2xl`, inhoud onderin met
`absolute inset-0 p-8 flex flex-col justify-end`, en `group-hover:scale-[1.02]`.

## Iconen — die zijn er wel

Inline SVG, `viewBox="0 0 24 24"`, `fill="none"`, `stroke`, `strokeWidth` 1.8
of 2, `strokeLinecap="round"`, `strokeLinejoin="round"`. Lijniconen in de stijl
van Feather. Geen icoonbibliotheek als dependency, geen emoji.

Twee tegels:
- op wit: `w-12 h-12 rounded-xl bg-[#470020]`, icoon in wit, `group-hover:scale-110`
- op `#f9f6f4`: `w-14 h-14 rounded-2xl bg-[#f9f6f4] border border-[#e0d5d0]`, icoon in `#470020`

## Knoppen en links

Primair, op donker: `px-8 py-4 bg-white text-[#470020] font-black text-base rounded hover:bg-[#f2edea] active:scale-[0.98] transition-colors duration-200`

Secundair, op donker: `px-8 py-4 border-2 border-white/25 text-white font-bold rounded hover:border-white/50 hover:bg-white/8 active:scale-[0.98]`

Pijl-link: `inline-flex items-center gap-2 text-sm font-bold` met een pijl van
14 px en `group-hover:gap-3`. De pijl schuift, de tekst onderstreept niet.

`rounded`, niet `rounded-lg`. Kaarten `rounded-2xl`. Icoontegels `rounded-xl`
of `rounded-2xl`.

## Beweging

- `ScrollReveal` om elk blok, met `delay={i * 100}` per item in een raster en
  `direction` afwisselend links en rechts waar dat past
- `ScrollZoom` om hele secties
- `ScrollProgress` bovenaan de pagina
- `CountUp` voor elk groot cijfer
- Hero: `hero-enter-1` tot `hero-enter-4` voor de vier elementen na elkaar, plus
  een scrollhandler die de inhoud laat wegfaden en 56 px omhoog schuift
- Alleen `transform` en `opacity` animeren, `duration-200` tot `duration-500`.
  Nooit `transition-all` op iets zwaars

Sfeercomponenten die er al zijn en gebruikt horen te worden: `AuroraBg` (drie
blobs plus korrel op 0.045), `HeroParticles` (three.js-raster achter donkere
secties), `FloatingChips`, `PartnerTicker`.

## Hero van een pagina

Volledige hoogte met `min-h-screen` alleen op de homepage; binnenpagina's
krijgen een compactere variant. Vaste onderdelen: video of donker verloop, een
pil-badge met pulserende stip, h1, één alinea van maximaal `max-w-lg`, en twee
knoppen.

## De structuur van een pagina

`page.tsx` doet alleen `buildMetadata()` uit `lib/seo.ts` en rendert de client.
`page-client.tsx` is `"use client"` en bevat de opmaak. Alle zichtbare tekst
komt uit `lib/translations.ts` via `useLang()`, in NL en EN. Cijfers komen uit
`lib/site-config.ts`. Een nieuwe route hoort ook in `app/sitemap.ts`.

## Schrijven

Conclusie eerst, dan het cijfer. Korte tot middellange zinnen, actief, lezer met
u. Elk getal met zijn grondslag. Zwakte zelf benoemen en pareren. Geen
superlatieven en geen zin die elke concurrent ook kan schrijven. Nederlandse
notatie: punt als duizendtal, komma als decimaal.

## Werkwijze — kijken, vergelijken, corrigeren

1. `npm run dev` draait op `:3000`. Draait hij al, start geen tweede.
2. Bouw.
3. `node screenshot.mjs http://localhost:3000/<route> <label>`
4. **Lees die PNG met de Read tool en kijk er zelf naar.**
5. Vergelijk met een bestaande pagina en wees specifiek: "de sectie heeft
   py-16 maar de rest van de site heeft py-24 lg:py-32", "de kaart mist de
   border-2 border-transparent". Constateren dat het "goed oogt" is geen
   vergelijking.
6. Corrigeer en screenshot opnieuw. Minimaal twee rondes.

Screenshot nooit een `file:///`-URL.

## Voordat je klaar bent

1. `npm run build` en `npm run lint` slagen.
2. Twee screenshot-rondes gedaan, beelden zelf bekeken.
3. Naast een bestaande pagina gelegd: zelfde containerbreedte, zelfde
   sectiepadding, zelfde koptypografie, zelfde kaartstijl.
4. Wisselen de achtergronden af, en staat er een scharlaken anker in?
5. Zit er `ScrollReveal` om de blokken en `CountUp` op de cijfers?
6. Heeft elk klikbaar element hover, focus-visible en active?
7. Staat alle tekst in `translations.ts` in beide talen, en elk cijfer in
   `site-config.ts`?

## Wat hier níet geldt

Dit is een Next.js-app met Tailwind 4 en de tokens in `globals.css`. Uit oudere
werkafspraken die je elders kunt tegenkomen gelden hier niet: één `index.html`
met alles inline, Tailwind via een CDN-script, `placehold.co` als beeld, en
`node serve.mjs`. Wij draaien `npm run dev`.
