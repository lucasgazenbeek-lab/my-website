# Tekeningen · LEESMIJ

> Dit bestand stond eerst in `public/fotos/tekeningen/`. Alles onder `public/`
> wordt door Next rechtstreeks geserveerd, dus het was op te vragen via
> `/fotos/tekeningen/LEESMIJ.md` — inclusief het interne mappad en de regel over
> het niet-beoordeelde beeld met een herkenbare klantlocatie. Daarom staat het
> hier. De beelden zelf staan nog wel in `public/fotos/tekeningen/`.

Bewerkt uit schermafbeeldingen van Shane, 18-09-2026. CAD-interface eraf,
bijgesneden, contrast licht bijgetrokken, unsharp mask erover.

| Bestand | Formaat | Verhouding |
|---|---|---|
| `eendraadschema-portret.png` | 510 x 638 | 4:5 |
| `eendraadschema-breed.png` | 1002 x 668 | 3:2 |
| `situatietekening-portret.jpg` | 472 x 590 | 4:5 |
| `situatietekening-breed.jpg` | 885 x 590 | 3:2 |

## Lees dit voor je kiest

**Gebruik bij voorkeur de brede versies.** De bron is een schermafbeelding van
ongeveer 1570 px breed. Een portretuitsnede van 4:5 gebruikt daar maar een
derde van, dus die komt niet hoger dan circa 500 px breed. In een kaartslot van
450 css-pixels is dat scherp op een gewoon scherm en net iets zacht op een
retina-scherm. De brede versies gebruiken bijna de volle bronbreedte en zijn
overal scherp.

Alles staat op ware grootte. Er is bewust **niet** opgeschaald: een uitsnede
van 500 px uitrekken naar 900 maakt hem alleen maar waziger.

Wil je het echt scherp op alle schermen, dan is er maar een oplossing: opnieuw
exporteren vanuit CAD op 2400 px brede zijde, zonder interface. Dan kan het
portret ook ruim genoeg bemeten worden.

## Eén aanpassing aan de inhoud

In het eendraadschema stond onder `33/0.69 kV` de regel `5140 kVA`. Dat is een
typeaanduiding die naar een specifieke leverancier wijst, en de staande
werkafspraak is leveranciersneutraal in klantstukken. Die regel is weg;
`33/0.69 kV` en `Dy11` staan er nog.

De blokaanduidingen (SK01, SK02, SK15) en de aderaanduidingen (LV-W001,
DA-W001, AX-W040) zijn blijven staan. Dat is een generieke
naamgevingsconventie en verraadt geen project.

## Waarom het eendraadschema een PNG is

Lijnwerk op een vlakke achtergrond heeft weinig kleuren. Als palet-PNG blijft
het scherp en is het kleiner dan JPG; als JPG krijg je vieze randen om elke
lijn. De situatietekening heeft een gerenderde achtergrond met kleurverlopen en
is daarom wel JPG.

## Nog te beoordelen

Twee andere beelden staan bewust niet in `public/`, want alles daar is publiek
zodra er gedeployed wordt. Ze staan in
`Commercieel/documentfabriek/output/beeldmateriaal-nog-te-beoordelen/`:

- **stationsdetail** · tekening van de leverancier met gewichten erbij, geen
  eigen werk.
- **locatieontwerp** · luchtfoto met ontwerp erover, herkenbare klantlocatie.
