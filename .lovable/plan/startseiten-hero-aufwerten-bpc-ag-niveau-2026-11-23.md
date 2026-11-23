# Startseiten-Hero aufwerten (bpc.ag-Niveau)

## Änderungen
- **Bildwirkung:** neues, hochwertiges KI-Foto ohne Personen (Hamburger Büro mit Blick auf Hafen/Elbe, Abendlicht, kühle Blautöne), Breitformat. Sanfter Zoom-Effekt beim Laden (Ken-Burns, sehr langsam).
- **Abdunklung:** statt flacher Fläche eine Abdunklung von unten nach oben in Nachtblau, damit Foto oben lebendiger wirkt und Text gut lesbar bleibt.
- **Typo:** kleine Zeile über der Überschrift „IT- & Prozessberatung · Hamburg · seit 2003", große dünne Überschrift „Prozesse, die *funktionieren*." mit sicher sichtbarem blinkenden Cursor, Untertitel in 1–2 Zeilen.
- **Buttons:** „Jetzt beraten lassen" (blau) + „Unsere Leistungen" (weißer Umriss).
- **Vertrauensleiste unten im Hero:** schmale halbtransparente Leiste mit 3 Kennzahlen (z. B. seit 2003 · Projekte · herstellerneutral) – Werte aus den vorhandenen Platzhalter-Kennzahlen.
- **Scroll-Hinweis:** kleiner Pfeil nach unten, zentriert.
- **Höhe:** fast Vollbild (ca. 90 % Bildschirmhöhe), auf dem Handy kompakt, Buttons volle Breite.
- Texte erscheinen beim Laden dezent nacheinander (Einblenden von unten).

## Technische Details
- Neues Bild `public/images/hero-home.jpg` (1920x1080) über Bildgenerierung.
- Nur `src/routes/index.tsx` (Hero-Block) und `src/styles.css` (Keyframes `hero-zoom`, `fade-up`; reduzierte Bewegung respektiert).
- Abschluss: Screenshots Desktop und 390 px.
