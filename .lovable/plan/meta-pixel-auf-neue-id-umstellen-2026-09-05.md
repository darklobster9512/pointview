# Meta Pixel auf neue ID umstellen

## Ist-Zustand
Der Meta Pixel ist bereits eingebaut (Skript im Seitenkopf plus unsichtbares Bild als Fallback) und läuft auf allen Seiten – aktuell mit der ID `1055052437112922`. Beim Absenden einer Bewerbung wird zusätzlich das Ereignis „Lead“ gesendet.

## Änderung
- Pixel-ID an der einen zentralen Stelle auf `1041951465362957` ändern. Skript und Fallback-Bild nutzen diese ID automatisch – der eingefügte Code entspricht ansonsten exakt dem, was schon vorhanden ist.
- „Lead“-Ereignis auf der Bewerbungsseite bleibt unverändert.

## Technische Details
- `src/routes/__root.tsx`: Konstante `META_PIXEL_ID` auf `"1041951465362957"` setzen.
- Prüfung: Startseite aufrufen und kontrollieren, dass Skript und `<noscript>`-Bild die neue ID enthalten.
