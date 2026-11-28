# Meta Pixel auf neue ID umstellen

## Was sich ändert
Der Meta Pixel läuft auf allen Seiten (inkl. Bewerbung) künftig mit der ID **1154992410623899**. Das „Lead"-Ereignis beim Klick auf „Bewerbung senden" bleibt wie bisher.

## Technische Details
- `src/routes/__root.tsx`: `META_PIXEL_ID` auf `1154992410623899` setzen (gilt für Skript und Fallback-Bild).
- Danach prüfen, dass die alte ID `1115760751336384` nirgends mehr vorkommt.
