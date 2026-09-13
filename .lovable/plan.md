# Meta Pixel: neue ID und Lead-Event direkt beim Klick

## Änderungen

**Neue Pixel-ID**
- Die Pixel-ID wird auf `1569261430732720` umgestellt. Sie ist an einer zentralen Stelle hinterlegt und gilt damit für alle Seiten inklusive `/karriere/bewerbung` (Seitenaufruf und Fallback-Bild).

**Lead-Event beim Klick**
- Bisher wird „Lead" erst gesendet, nachdem die Pflichtfelder geprüft wurden. Künftig löst schon der Klick auf „Bewerbung senden" das Ereignis aus – unabhängig davon, ob die Felder vollständig sind oder die Übermittlung gelingt (wie im Referenzprojekt).

Alles andere am Formular bleibt unverändert.

## Technische Details
- `src/routes/__root.tsx`: `META_PIXEL_ID = "1569261430732720"`.
- `src/routes/karriere.bewerbung.tsx`: `fbq('track','Lead')` aus dem Submit-Handler heraus in einen `onClick`-Handler des Submit-Buttons verschieben, sodass es vor Browser-Validierung und Pflichtfeldprüfung feuert; Aufruf weiter defensiv über `(window as Window & { fbq?: ... }).fbq?.(...)`.
