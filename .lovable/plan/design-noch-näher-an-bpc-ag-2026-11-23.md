# Design noch näher an bpc.ag

Analyse bpc.ag (Startseite komplett, Farben direkt ausgelesen):
- Markenblau #009FE3 für große Flächen, Überschriften und Buttons (bei uns bleibt #01B0F1 – fast identisch).
- Sehr dunkles Nachtblau **#011E40** für Footer, Leistungs-Band und Event-Karten (aktuell nutzen wir ein helleres Navy).
- Hellgrau **#F5F6F8** für ruhige Abschnitte (Über uns, Logos, Insights-Karten).
- Abwechselnde Vollflächen-Bänder: Weiß → Blau → Hellgrau → (Türkis) → Nachtblau → Weiß → Hellgrau → Blau → Weiß → Nachtblau-Footer.
- Das türkise Karriere-Band von bpc übernehmen wir **nicht** (Grün-Ton ist bei Ihnen ausgeschlossen) – stattdessen Markenblau.

## Änderungen

**Farben**
- Neues Nachtblau #011E40 als Haupt-Dunkelfarbe (Footer, dunkle Bänder, Textüberschriften bleiben Navy).
- Hellgrau #F5F6F8 für alle grauen Abschnitte.
- Überschriften in hellen Abschnitten in Markenblau (wie „Warum best practice consulting AG?").

**Startseite – neue Reihenfolge wie bpc**
1. Vollbild-Foto-Hero, zentriert, „Prozesse, die *funktionieren*." mit blinkendem Cursor nach dem blauen Wort, Button „Jetzt beraten lassen".
2. Blaues Band: Kernaussage + weißer Pill-Button, darunter Foto-Karten-Slider der Leistungen mit Pfeilen und Punkten.
3. Hellgrau: „Warum PointView?" Text links, Foto rechts; darunter Kennzahlen mit Linien-Icons und großen blauen Zahlen.
4. Blaues Band Karriere: zwei Fotos links, Text rechts, Buttons „Jetzt bewerben" (weiß) und „Zur Karriereseite" (Umriss).
5. Nachtblaues Band „Unsere Leistungen für Sie": Text links, 2×2 hellgraue Kacheln mit Icon rechts.
6. Hellgrau: „Erfolgsgeschichten mit unseren Kunden" – Logos in weißen Kästchen als Laufband, zwei Buttons darunter.
7. Blaue Newsletter-/Kontakt-Box (Icon links, Text, weißer Button rechts).

**Footer wie bpc**
- Nachtblau, oben zwei große Zeilen mit Pfeil: „Kontakt aufnehmen" und „Offene Stellen ansehen", rechts eine Deutschlandkarte aus Punkten mit Markierung Hamburg.
- Darunter drei Spalten „Unternehmen / Unser Angebot / Rechtliches", unten helles Logo.

**Kopfzeile**
- Weiß, kleinere Menüschrift, Lupe weglassen, rechts Pill-Button „Karriere" in Markenblau (statt Grün bei bpc).

**Unterseiten**
- Gleiche Bänderlogik: Leistungsübersicht als Kachel-Raster auf Nachtblau, Abschnitte abwechselnd Weiß/Hellgrau, CTA immer als blaues Band; Karriere-Einstieg als blaues Band.

## Technische Details
- `src/styles.css`: `--dark` → oklch von #011E40, `--muted`/`--secondary` → #F5F6F8, neue Utility für Cursor-Blinken.
- `Blocks.tsx`: `Section` mit Varianten `white | muted | primary | dark`, neue `IconTile`, `SplitFeature`, `ServiceSlider`, `NewsletterBox`; `LogoStrip` mit weißen Logo-Kacheln; `StatsRow` mit lucide-Icons.
- `Footer.tsx` neu (Link-Zeilen + SVG-Punktkarte), `Header.tsx` angepasst, `src/routes/index.tsx` neu sortiert, `leistungen.index.tsx`/`karriere.index.tsx` auf neue Bänder.
- Keine Personenfotos (bpc zeigt Team-Fotos – wir nutzen Büro-/Raumfotos).
- Abschluss: Screenshots Desktop und Handy, Build-Log prüfen.
