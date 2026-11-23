# Neues Design nach Vorbild bpc.ag

Ziel: seriöser, klassischer Beratungs-Look wie bei bpc.ag – ruhig, klar, viel Weißraum, großflächige Fotos, kräftige blaue Farbflächen. Inhalte, Seiten, Formulare, Bewerbung und Meta Pixel bleiben unverändert; nur das Aussehen ändert sich.

## Was bei bpc.ag den seriösen Eindruck macht
- Weiße, schlichte Kopfzeile: Logo links, Menüpunkte mit kleinem Pfeil, rechts ein Button.
- Vollbild-Foto im Hero mit dunkler Abdunklung, zentrierte große, dünne Überschrift (ein Wort in Markenblau), Untertitel, ein Button.
- Direkt darunter ein durchgehendes, vollflächig blaues Band mit weißer Überschrift.
- Karten-Slider mit Fotos und Titel darunter (bei bpc: Branchen).
- Leichte, elegante Schrift (Avenir-Stil), keine fetten Überschriften, kaum Effekte, keine Verläufe, keine Schaltkreis-Muster.

## Änderungen
- **Schrift:** Poppins wird ersetzt durch „Nunito Sans" (frei, Avenir-ähnlich), lokal im public-Ordner. Überschriften in normaler/halbfetter Stärke statt fett.
- **Farben:** Markenblau #01B0F1 als Flächen- und Akzentfarbe (wie bpc), Navy #002B83 für Texte/Logo, Weiß. Der grüne „Jobs"-Button von bpc wird nicht übernommen – stattdessen Navy (kein Grün).
- **Formen:** Buttons bleiben abgerundet (wie bpc), Karten aber mit kleinem Radius statt stark rund; keine Schatten-Pillen, keine Logo-Pille.
- **Kopfzeile:** weiß, schlanke Trennlinie, Menü mit Pfeil-Symbolen, rechts Button „Karriere" in Navy.
- **Startseite:** Hero als Vollbild-Foto mit Abdunklung und zentriertem Text („Prozesse, die *funktionieren*." o. ä. mit einem blauen Wort), danach blaues Band mit Kernaussage, danach Leistungen als Foto-Karten-Slider, ruhige Text-/Bild-Abschnitte, Kennzahlen schlicht.
- **Unterseiten-Hero:** Foto-Banner mit Abdunklung und weißem Titel statt weißer Fläche mit Farbklecks.
- **CTA-Banner:** vollflächiges blaues Band statt runder Verlaufsbox.
- **Footer:** Navy-Hintergrund, klar gegliederte Spalten.
- **Handy-Ansicht:** bleibt optimiert (Vollbild-Menü, volle Button-Breite, feste Bewerben-Leiste).

## Technische Details
- `src/styles.css`: neue Tokens (Radius 0.5rem, Schrift, Verlauf/Pill-Schatten entfernen), `@font-face` für Nunito Sans (400/600/700) unter `public/fonts/`.
- `Blocks.tsx`: `btn`, `PageHero` (Foto-Hintergrund mit Overlay), `CtaBanner` (Full-Bleed-Band), `Section`, `H2` (font-semibold), `LogoStrip` ohne Pille, `NumberedCard` mit Bild optional; `CircuitPattern`/`SoftBlob` entfernt.
- `Header.tsx`, `Footer.tsx`, `src/routes/index.tsx` neu gestaltet; übrige Routen nur über die gemeinsamen Bausteine angepasst.
- Vorhandene Fotos (`hero.jpg`, `office.jpg`, `workshop.jpg`) werden genutzt; keine Personenfotos.
- Memory aktualisieren: Stilvorbild jetzt bpc.ag statt scalosoft.
- Abschluss: Screenshots Desktop und 390 px, Build-Log prüfen.
