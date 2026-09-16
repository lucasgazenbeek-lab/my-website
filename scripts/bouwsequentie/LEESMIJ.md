# Bouwsequentie — generator

De tekeningen op `/hoe-wij-bouwen` worden hier gegenereerd. De app leest de
uitkomst uit `lib/bouwsequentie/`; die JSON staat in git, dus **voor een normale
build hoef je hier niets te draaien**. Alleen als de tekening zelf verandert.

## Regenereren

Vereist python3.

```
cd scripts/bouwsequentie
python3 gen5.py      # tekent de drie scenes        -> scenes.json
python3 copy.py      # fasenteksten HS en CO        -> copy.json
python3 page.py      # svg, css, specs en data      -> parts.json
python3 bundle.py    # schrijft naar lib/bouwsequentie/
```

## Waar wat staat

`gen5.py` is de isometrische tekenengine. Onderaan staan de drie configuraties
`MS`, `HS` en `CO`.

- Projectie, alles in meters: `x' = (x-y)*0.866*S + TX` en
  `y' = (x+y)*0.5*S - z*S + TY`. `T=(TX,TY,S)` per variant.
- `GROUPS=[(kolommen, skid_x), ...]` — clusterkolommen per veld plus de x van
  het conversiestation.
- `FLIP=[1]` spiegelt veld 2, zodat deuren en conversiestations naar de
  middencorridor wijzen.
- `RESERVE`, `HVCAB`, `BUSY`, `BUSEND`, `ROADS`, `MASTS`, `FENCE`, `PLOT`,
  `GND` — terreinelementen.
- `hs_extra` en `co_extra` tekenen het eigen HS-station respectievelijk het
  bestaande inkoopstation.

`copy.py` bevat de fasenteksten voor HS en CO. `phases.json` bevat die van MS,
met de hand geschreven.

`page.py` bevat per variant de zichtbare lagen per fase (`vis`), de oplichtende
lagen per fase (`act`), de specs en de meelopende cijfers (`data`).

## Rekenregels

Eén blok is twee clusters van vier containers van 20 voet (8 × 5 MWh = 40 MWh)
plus één conversiestation van 40 voet (10 MVA). Dus 10 MW / 40 MWh per blok.

| variant | blokken | containers | skids | vermogen | opslag |
|---|---|---|---|---|---|
| Standalone MS | 4 | 32 | 4 | 40 MW | 160 MWh |
| Standalone HS | 10 | 80 | 10 | 100 MW | 400 MWh |
| Co-located | 1 | 4 | 1 | 5 MW | 20 MWh |
