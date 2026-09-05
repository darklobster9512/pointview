# Logo-Leiste: farbig und mit bekannten Mittelständlern

## Was sich ändert

1. **Logos in Farbe** – Die graue Darstellung wird entfernt. Die Logos erscheinen dauerhaft in ihren Originalfarben und voller Deckkraft (kein Grau-Effekt, kein Aufhellen).
2. **Neue Firmenauswahl** – Die DAX-Riesen werden durch bekannte, aber „leichtere" deutsche Unternehmen ersetzt (12 Stück, mit Hamburg-Bezug wo möglich):

   Otto, Tchibo, Fielmann, Beiersdorf (Nivea), Sixt, Rossmann, dm-drogerie markt, Miele, Haribo, Hornbach, DATEV, Fressnapf

   Kriterium: eigenständige Farb-Logos, die nebeneinander harmonieren; keine Konzerne, die als Referenz unglaubwürdig wirken.
3. **Überall gleich** – Startseite, „Alle Leistungen" und jede Leistungs-Detailseite nutzen dieselbe Leiste, deshalb greift die Änderung automatisch an allen Stellen.

## Hinweis
Auch diese Logos sind Platzhalter und dürfen vor Veröffentlichung nur mit Einverständnis der Firmen bleiben. Wenn Sie andere Unternehmen möchten, nennen Sie mir gern die Liste.

## Technische Details
- `src/components/site/Blocks.tsx` (`LogoStrip`): Klassen `opacity-60 grayscale hover:opacity-100 hover:grayscale-0` entfernen; Logos mit `h-8 sm:h-9 max-w-[140px]` in Originalfarbe.
- Neue Farb-SVGs (offizielle Wortmarken, z. B. aus Wikimedia Commons) herunterladen, per `lovable-assets` hochladen und als `src/assets/logos/*.svg.asset.json` ablegen; alte Pointer (Siemens, SAP, Telekom, VW, BMW, Mercedes, Bosch, Allianz, Lufthansa, DB, BASF, adidas) per `lovable-assets delete` entfernen.
- `src/data/site.ts`: `clients`-Array mit den 12 neuen Einträgen und Imports aktualisieren.
- Sichtprüfung per Screenshot der Startseite und `/leistungen`.
