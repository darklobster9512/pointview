# Branding-ID der Bewerbungsübermittlung ändern

## Was sich ändert

Bewerbungen aus dem Formular unter `/karriere/bewerbung` werden künftig mit der Kennung **8b44e927-dac5-41ca-99aa-1ce4e8530eb3** statt `56aa260c-f3bc-44d3-a37b-ceb3ba01d2d9` übermittelt. Alles andere (Endpunkt, Felder, Meta-Pixel) bleibt gleich.

## Technische Details
- `src/routes/karriere.bewerbung.tsx`, Zeile 11: `BRANDING_ID` auf den neuen Wert setzen. Einzige Fundstelle im Projekt.
