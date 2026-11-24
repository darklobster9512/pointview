# Header-Logo austauschen

## Was sich ändert
Im Header (oben auf allen Seiten) erscheint das neue blaue „POINTVIEW"-Logo. Die helle Variante im Footer bleibt unverändert.

## Technische Details
- Hochgeladenes Bild hat viel weißen Rand; es wird auf die Schrift zugeschnitten (transparenter Hintergrund) und als `public/images/pointview-logo-header.png` abgelegt (lokal im public-Ordner, wie für den VPS gewünscht).
- `src/components/site/Logo.tsx`: dunkle Variante nutzt die neue Datei, Breite/Höhe an neues Seitenverhältnis anpassen; Höhe im Header ggf. leicht nachjustieren.
- Danach Header auf Computer und Handy per Screenshot prüfen.
