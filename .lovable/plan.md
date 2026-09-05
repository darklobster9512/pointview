# Portrait des Geschäftsführers entfernen, Team-Karten ohne Initialen

## Was sich ändert

**Startseite (`/`)**
- Zitat-Abschnitt: das Portraitbild entfällt. Das Zitat wird einspaltig, zentriert und etwas größer dargestellt, darunter Name und Funktion wie bisher.

**Über uns (`/ueber-uns`)**
- Abschnitt „Geschäftsführung“: Bild entfällt. Text, Zitat und der Button „Unser Team kennenlernen“ laufen über die volle Breite (max. Lesebreite).

**Team (`/team`)**
- Keine Fotos und keine Initialen mehr. Die Karten starten direkt mit Name, Rolle, Kurztext und Schwerpunkt-Pillen. Als dezenter Akzent bekommt jede Karte oben einen schmalen Farbbalken in der Markenfarbe, damit die Karten nicht kahl wirken.
- Der Geschäftsführer bleibt an erster Stelle, wird aber wie alle anderen dargestellt.

**Aufräumen**
- Die Bilddatei `portrait.jpg` wird gelöscht, da sie nirgends mehr verwendet wird.
- Die Memory-Notiz „Portrait ist Platzhalter“ wird entsprechend aktualisiert.

## Technische Details
- `src/routes/index.tsx`: Grid im Zitat-Abschnitt durch `max-w-3xl mx-auto text-center` ersetzen, `portraitImg`-Import entfernen.
- `src/routes/ueber-uns.tsx`: Grid im Abschnitt „Geschäftsführung“ durch `max-w-3xl` ersetzen, Import entfernen.
- `src/routes/team.tsx`: `initials`-Helfer, Bild-/Fallback-Block und Import entfernen; Karte mit `border-t-4 border-primary` als Akzent.
- `src/data/site.ts`: Feld `photo` aus `TeamMember` und dem CEO-Eintrag entfernen.
- `rm src/assets/portrait.jpg`.
