# Seitentitel, Beschreibungen, neues Favicon und Platzhalter-Hinweise entfernen

## Ist-Zustand
- Jede Seite hat bereits einen Titel und eine Beschreibung; das Schema ist aber uneinheitlich (mal „–“, mal „|“, teils ohne „Hamburg“), und nur die Karriere-Seiten haben eine kanonische Adresse (`canonical`/`og:url`). Eine Sitemap gibt es noch nicht.
- Das Favicon ist noch das alte, aus der Wortmarke erzeugte `public/favicon.png` (64 px). Es gibt kein Apple-Touch-Icon und keine Web-Manifest-Datei.
- Sichtbare Platzhalter-Hinweise für Besucher gibt es an zwei Stellen: der blaue „Hinweis: Dieser Text ist ein Platzhalter …“-Kasten auf der Datenschutzseite und „[wird nachgereicht]“ bei der USt-ID im Impressum. Alle anderen „Platzhalter“-Vermerke sind nur interne Code-Kommentare (nicht sichtbar).

## Was gemacht wird

### 1. Seitentitel & Beschreibungen (alle Seiten)
Einheitliches Muster `Thema | PointView GmbH Hamburg`, max. 60 Zeichen; Beschreibungen 120–155 Zeichen mit Suchbegriffen (IT-Beratung, Prozessanalyse, Prozessoptimierung, Hamburg):

| Seite | Titel |
|---|---|
| Start | PointView GmbH – IT-Beratung & Prozessoptimierung Hamburg |
| Leistungen | Leistungen: IT-Beratung & Prozessanalyse \| PointView |
| Leistung (Detail) | {Leistung} Hamburg \| PointView GmbH |
| Über uns | Über uns – IT-Beratung aus Hamburg seit 2003 \| PointView |
| Team | Team – Berater für IT & Prozesse \| PointView GmbH |
| Karriere | Karriere & Jobs in der IT-Beratung Hamburg \| PointView |
| Stelle (Detail) | {Stelle} – Job bei PointView Hamburg |
| Bewerbung | Jetzt bewerben \| PointView GmbH |
| Kontakt | Kontakt – PointView GmbH, Elbchaussee Hamburg |
| Impressum / Datenschutz | Impressum bzw. Datenschutzerklärung \| PointView GmbH |

Jede Seite bekommt zusätzlich eine kanonische Adresse und `og:url` (relativ, z. B. `/leistungen/prozessanalyse`), damit Google die richtige Adresse indexiert.

### 2. Favicon aus dem hochgeladenen „P“-Icon
- Ersetzt `public/favicon.png` durch das hochgeladene Icon (64 px, PNG).
- Zusätzlich: `favicon.ico` (16/32/48 px), `apple-touch-icon.png` (180 px, aus dem Icon hochskaliert) und eine kleine `site.webmanifest` mit 192/512-px-Varianten – so übernimmt Google das Icon zuverlässig in den Suchergebnissen (Anforderung: quadratisch, ≥ 48 px, unter der Stammadresse erreichbar, per `<link rel="icon">` verlinkt).
- Verlinkung im Seitenkopf (`__root.tsx`): `icon` (PNG + ICO), `apple-touch-icon`, `manifest`, plus `theme-color` #01B0F1.
- Hinweis: Da die Vorlage nur 64 px hat, werden die größeren Varianten hochgerechnet; wenn eine größere Datei (≥ 512 px) vorliegt, kann sie später 1:1 ausgetauscht werden.

### 3. Sitemap & Robots
- Neue `sitemap.xml` (dynamisch erzeugt, alle öffentlichen Seiten inkl. 5 Leistungen und 6 Stellen) und Eintrag `Sitemap:` in `robots.txt` – erst mit der endgültigen Domain befüllt; bis dahin relative Pfade.

### 4. Platzhalter-Hinweise entfernen
- Datenschutz: blauen Hinweis-Kasten entfernen.
- Impressum: „[wird nachgereicht]“ entfernen – die USt-ID-Zeile wird komplett ausgeblendet, bis die Nummer vorliegt (leeres Feld in den Firmendaten; sobald eingetragen, erscheint sie automatisch).
- Interne Code-Kommentare mit „Platzhalter“ bleiben (nicht sichtbar) – nur als Erinnerung, dass Kennzahlen, Logos, Team und Stellen noch bestätigt werden müssen.

## Technische Details
- `src/lib/seo.ts`: `pageMeta` immer mit `path` (canonical + og:url), Titelsuffix nur anhängen, wenn „PointView“ fehlt; neuer optionaler `ogType`.
- Alle `head()`-Aufrufe in `src/routes/*.tsx` anpassen; `leistungen.$slug` und `karriere.$slug` bauen den Pfad aus dem Slug.
- Favicon-Dateien mit `magick` aus `/mnt/user-uploads/pointview_icon.png` in `public/` erzeugen (echte Dateien, kein CDN-Pointer). Root-`head().links` erweitern.
- `src/routes/sitemap[.]xml.tsx` als Server-Route, Daten aus `services` und `jobs`.
- `company.vatId` in `src/data/site.ts` (leer), Impressum rendert die Zeile nur bei Wert.
- Abschluss: Typcheck, Aufruf jeder Seite und Kontrolle von `<title>`, `canonical` und Favicon-Links.
