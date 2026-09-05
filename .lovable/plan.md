# Logo-Karussell mit echten deutschen Unternehmenslogos

## Was sich ändert

Das Karussell „Unternehmen, die uns vertrauen“ zeigt aktuell nur erfundene Firmennamen als Text. Es wird durch echte Bildlogos bekannter deutscher Großunternehmen ersetzt – als laufende, dezent graue Logo-Leiste im gleichen pillenförmigen Rahmen wie bisher.

Die Leiste ist ein gemeinsamer Baustein und erscheint automatisch an allen drei Stellen:
- Startseite (unter dem Hero)
- „Alle Leistungen“-Seite
- jede einzelne Leistungsseite

**Geplante Logos (12):** Siemens, SAP, Deutsche Telekom, Volkswagen, BMW, Mercedes-Benz, Bosch, Allianz, Lufthansa, Deutsche Bahn, BASF, adidas.

**Darstellung:** Logos in einheitlicher Höhe (ca. 28–36 px), grau/gedämpft, beim Überfahren mit der Maus in Farbe; Endlos-Lauf wie bisher; jedes Logo mit Alt-Text (Firmenname).

**Wichtiger Hinweis:** Die Logos sind Platzhalter. Echte Kundenlogos dürfen nur mit Einverständnis der jeweiligen Unternehmen gezeigt werden – vor Veröffentlichung durch eigene Referenzen ersetzen.

## Technische Details
- Offizielle Logos (SVG, bevorzugt von Wikimedia Commons) herunterladen, per `lovable-assets` hochladen und als `.asset.json` unter `src/assets/logos/` ablegen.
- `src/data/site.ts`: `clients` von `string[]` auf `{ name, logo }[]` umstellen.
- `src/components/site/Blocks.tsx` → `LogoStrip`: `<span>` durch `<img>` (`h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100`) ersetzen; Marquee-Animation bleibt.
- Kein Logo.dev nötig – statische Assets reichen.
- Memory-Eintrag „Kundenlogos sind Platzhalter“ bleibt gültig.
