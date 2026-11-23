# Mehr Bildvielfalt auf der Website

Bisher zeigen alle Unterseiten oben dasselbe Foto. Künftig bekommt jede Seite ein eigenes, passendes Foto – ohne erkennbare Gesichter (keine Personenfotos), seriöser Business-Stil, ohne Grüntöne.

## Neue Fotos (je eins pro Seite)
- Leistungen (Übersicht): Whiteboard mit Prozessdiagramm
- Jede der 5 Leistungsseiten ein eigenes Motiv: Prozessanalyse (Haftnotizen/Prozesslandkarte), Prozessoptimierung (Laptop mit Kennzahlen), IT-Beratung (Serverraum/Technik), Digitalisierung (Tablet/Dokumente), Softwareauswahl (Bildschirm mit Vergleich)
- Über uns: Hamburger Elbe/Hafen-Skyline
- Team: heller Besprechungsraum
- Karriere + Stellenseiten: moderner Arbeitsplatz
- Bewerbung: Schreibtisch mit Notizbuch und Laptop
- Kontakt: Hamburger Speicherstadt
- Impressum/Datenschutz: ruhige Büro-Architektur

## Technische Details
- Bilder per Bildgenerierung erzeugen, als JPG (ca. 1920x1080) unter `public/images/` ablegen (bleibt VPS-tauglich).
- `PageHero` erhält optionale Prop `image` (Standard `hero.jpg`); jede Route übergibt ihr Bild, Leistungsbilder über `slug` in `src/data/site.ts`.
- Karriere-Seite: Workshop-Foto im Inhalt durch anderes Motiv ersetzen, damit es sich nicht mit Startseite doppelt.
- Abschluss: Screenshots einiger Seiten prüfen.
