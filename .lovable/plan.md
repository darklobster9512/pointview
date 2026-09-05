# Alle Seiten für die mobile Ansicht optimieren

Aktueller Stand (geprüft bei 390 px Breite): Kein Inhalt läuft seitlich über, die Grundstruktur funktioniert. Aber vieles ist noch schlicht die geschrumpfte Desktop-Version: sehr große Überschriften, viel Innenabstand in Karten, Buttons nebeneinander statt untereinander, kleine Tipp-Flächen und ein Menü, das nur „aufklappt“ statt sich als sauberes Handy-Menü zu öffnen.

## Was sich ändert

### Kopfzeile & Menü
- Kopfzeile auf dem Handy etwas flacher (64 statt 80 px), Logo entsprechend kleiner.
- Handy-Menü als Vollbild-Overlay unter der Kopfzeile (scrollbar, Hintergrund gesperrt), größere Tipp-Flächen (mind. 44 px), Trennlinien zwischen den Einträgen, Leistungen-Untermenü mit den fünf Leistungen + „Alle Leistungen“.
- Menü schließt automatisch beim Seitenwechsel und mit Escape.

### Gemeinsame Bausteine (wirken auf alle Seiten)
- Überschriften: H1 auf dem Handy 2,25 rem statt 2,5 rem, H2 1,75 rem; längere Wörter dürfen umbrechen (`hyphens-auto`, `text-balance`).
- Buttons: auf dem Handy volle Breite und untereinander (Hero, Unterseiten-Hero, CTA-Banner, Formulare), ab Tablet wie bisher nebeneinander.
- Abstände: Sections 3,5 rem statt 5 rem oben/unten; Karten-Innenabstand 1,5 rem statt 2 rem; Container-Rand 1,25 rem.
- CTA-Banner: kleinerer Radius und Innenabstand auf dem Handy, Schaltkreis-Muster ausgeblendet, damit Text lesbar bleibt.
- Logo-Leiste: auf dem Handy kein Pill-Rand mehr, sondern randlos über die volle Breite laufend, Logos etwas kleiner, kleinerer Abstand.
- Kennzahlen: 2 Spalten mit kleinerer Zahl; Prozess-Schritte und Vorteile eine Spalte mit engerem Abstand.
- Breadcrumb: einzeilig, lange Titel werden gekürzt (…).

### Einzelne Seiten
- **Startseite:** Hero-Höhe reduziert, Bildausschnitt auf Handy mittig; „seit 2003“-Badge unter dem Bild statt versteckt; Zitat kleiner; „Warum“-Liste enger.
- **Leistungen (Übersicht + Detail):** Erstgespräch-Box stapelt sauber; „Weitere Leistungen“ als horizontale Wischleiste; Kontaktformular-Karte mit weniger Innenabstand.
- **Über uns:** Zeitleiste mit kleinerem Einzug; Standort-Karte kompakter.
- **Team:** Karten eine Spalte, Schwerpunkt-Pills umbrechen sauber.
- **Karriere:** Stellenkarten kompakter (Titel 1,25 rem, Eckdaten untereinander, „Details ansehen“ als Pfeil rechts oben); Bild oberhalb des Textes mit 4:3.
- **Karriere-Detail:** Eckdaten-Box auf dem Handy **über** dem Text (nicht unten), „Jetzt bewerben“ zusätzlich als fixierte Leiste am unteren Rand.
- **Bewerbung & Kontakt:** Formularfelder eine Spalte, 16 px Schriftgröße in Feldern (verhindert iOS-Zoom), Absenden-Button volle Breite; Karte auf der Kontaktseite oberhalb des Formulars kompakter, Kartenhöhe 14 rem.
- **Impressum / Datenschutz:** Textbreite und Zeilenabstand für Handy prüfen, Tabellen/lange E-Mails umbrechen (`break-words`).
- Footer: Spalten untereinander mit Trennlinien, Copyright-Zeile zweizeilig.

## Technische Details
- Betroffene Dateien: `src/components/site/Header.tsx`, `Blocks.tsx`, `Footer.tsx`, `ContactForm.tsx`, `src/styles.css` (`container-site`-Padding), alle Routen unter `src/routes/`.
- Nur Tailwind-Klassen mit Breakpoints (`sm:`, `md:`, `lg:`), keine neuen Abhängigkeiten. Textcontainer erhalten `min-w-0`, Icons `shrink-0`, Kopfzeilen-Reihen als `grid-cols-[minmax(0,1fr)_auto]`.
- Header: Body-Scroll-Lock über `useEffect`, Menü schließen via `useRouterState`-Pfadänderung; `Logo` bekommt eine `className`-Prop für die Größe.
- Karriere-Detail: mobile Sticky-Bottom-Bar mit `fixed inset-x-0 bottom-0 lg:hidden` und `pb-24` am Seitenende, damit nichts verdeckt wird.
- Abschluss: Screenshots aller Seiten bei 390 px und 768 px, Prüfung auf horizontales Scrollen, Typcheck.
