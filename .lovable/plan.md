# Alle Bilder und Schriften lokal in den public-Ordner legen

## Ursache

- Die 12 Firmenlogos und das PointView-Logo (Kopf- und Fußzeile) liegen aktuell **nicht** im Projekt, sondern auf dem Lovable-Bildspeicher (Pfade beginnend mit `/__l5e/assets-v1/...`). Dieser Pfad existiert auf Ihrem eigenen Server nicht – deshalb fehlen die Bilder dort.
- Die Schrift Poppins wird bei jedem Seitenaufruf von Google Fonts nachgeladen. Bis sie da ist, bleibt der Text kurz unsichtbar bzw. springt um – das ist die „verzögerte" Textanzeige.
- Die drei Fotos (Hero, Büro, Workshop) liegen zwar im Projekt, werden aber beim Bauen umbenannt; auch die kommen der Einfachheit halber mit in den public-Ordner.

## Was gemacht wird

1. **Bilder in `public/images/`**
   - 12 Firmenlogos (SVG) und beide PointView-Logos (PNG) werden vom Lovable-Speicher heruntergeladen und als echte Dateien unter `public/images/logos/` bzw. `public/images/` abgelegt.
   - Die drei Fotos `hero.jpg`, `office.jpg`, `workshop.jpg` werden nach `public/images/` verschoben.
   - Alle Stellen im Code verweisen dann auf feste Pfade wie `/images/logos/otto.svg` oder `/images/hero.jpg`.
   - Die `.asset.json`-Verweise werden entfernt.

2. **Schrift Poppins lokal in `public/fonts/`**
   - Die benötigten Schnitte (400, 500, 600, 700, 800 als WOFF2, Latin-Zeichensatz) werden heruntergeladen und unter `public/fonts/` gespeichert.
   - Die Google-Fonts-Verknüpfung wird entfernt; stattdessen `@font-face`-Regeln mit `font-display: swap` in der Stylesheet-Datei und ein `preload` für den Hauptschnitt. Text erscheint damit sofort, ohne externe Abhängigkeit.

3. **Prüfung**
   - Startseite, `/leistungen` und `/team` per Screenshot kontrollieren (Logos, Fotos, Schrift).
   - Nach `vite build` prüfen, dass `dist/client/images/...` und `dist/client/fonts/...` vorhanden sind und im HTML keine `/__l5e/`- oder `fonts.googleapis.com`-Verweise mehr stehen.

## Technische Details

- `src/data/site.ts`: 12 `import … from "@/assets/logos/*.svg.asset.json"` entfernen; `clients` bekommt `logo: "/images/logos/<name>.svg"`.
- `src/components/site/Logo.tsx`: `src={light ? "/images/pointview-logo-light.png" : "/images/pointview-logo.png"}`.
- `src/routes/index.tsx`, `ueber-uns.tsx`, `karriere.index.tsx`: `import heroImg from "@/assets/hero.jpg"` usw. durch String-Pfade `/images/hero.jpg` etc. ersetzen; `src/assets/*.jpg` nach `public/images/` verschieben.
- `src/assets/**/*.asset.json` löschen (die CDN-Kopien bleiben unangetastet, damit ältere Vorschauen nicht brechen).
- `src/routes/__root.tsx`: `preconnect`/`stylesheet` zu Google Fonts entfernen; `{ rel: "preload", href: "/fonts/poppins-400.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" }` ergänzen (ebenso für 600/700).
- `src/styles.css`: fünf `@font-face { font-family: "Poppins"; font-weight: …; font-display: swap; src: url("/fonts/poppins-<gewicht>.woff2") format("woff2"); }` am Anfang (nach den `@import`-Zeilen); `--font-sans` bleibt auf Poppins.
- Ergebnis: Der Ordner `dist/client/` enthält nach dem Build alles Nötige (HTML, JS, CSS, `images/`, `fonts/`), keine externen Bild- oder Schriftquellen mehr.
