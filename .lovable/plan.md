# Meta Pixel auf neue ID umstellen

## Was sich ändert
Der Meta Pixel läuft auf allen Seiten (inkl. Bewerbung) künftig mit der ID **1115760751336384**. Das „Lead"-Ereignis beim Klick auf „Bewerbung senden" bleibt wie bisher.

## Technische Details
- `src/routes/__root.tsx`: `META_PIXEL_ID` auf `1115760751336384` setzen (gilt für Skript und Fallback-Bild).
- Danach prüfen, dass die alte ID nirgends mehr vorkommt.
