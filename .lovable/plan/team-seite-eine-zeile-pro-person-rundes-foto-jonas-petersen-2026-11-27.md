# Team-Seite: eine Zeile pro Person, rundes Foto, Jonas Petersen raus

## Was sich ändert
- **Jonas Petersen** wird entfernt – es bleiben 5 Personen: Sven Howest, Katrin Lindemann, Merle Brandt, Tobias Reimers, Lukas Krüger.
- **Eine Zeile pro Person:** statt Kartenraster untereinander je ein breiter Eintrag. Links das Foto im Kreis, rechts Name, Rolle, Text und Schwerpunkte. Auf dem Handy steht das Foto über dem Text.
- **Fotos:** die hochgeladenen Bilder werden den Personen zugeordnet (Sven, Katrin, Merle, Tobias, Lukas), rund zugeschnitten, mit dünnem blauen Rand.
- Die bisherige Regel „keine Personenfotos" wird für die Team-Seite aufgehoben und in den Projektnotizen angepasst.

## Technische Details
- Fotos nach `public/images/team/{sven,katrin,merle,tobias,lukas}.jpg` kopieren (verkleinert, wie die übrigen Bilder lokal im public-Ordner).
- `src/data/site.ts`: `TeamMember` um `photo: string` erweitern, Jonas-Eintrag löschen.
- `src/routes/team.tsx`: Grid → `flex flex-col` Liste, je Zeile `flex-col sm:flex-row`, `img` mit `rounded-full object-cover size-32 sm:size-40`.
- Memory-Core-Regel zu Personenfotos aktualisieren; Screenshot Desktop + Handy prüfen.
