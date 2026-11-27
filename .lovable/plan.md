# Team-Fotos: Bildausschnitt so setzen, dass Köpfe nicht abgeschnitten werden

## Was sich ändert
- Jedes Foto auf der Team-Seite bekommt einen eigenen Bildausschnitt im Kreis, sodass Gesicht und Kopf vollständig sichtbar sind.
- Standard: der Ausschnitt richtet sich am oberen Bildteil aus statt an der Mitte.
- Sven (Ganzkörperfoto): der Ausschnitt wird zusätzlich auf Kopf und Oberkörper vergrößert, damit das Gesicht nicht winzig ist.
- Danach prüfe ich alle fünf Fotos auf Computer und Handy und korrigiere einzelne Ausschnitte bei Bedarf.

## Technische Details
- `src/data/site.ts`: `TeamMember` um optionales `photoPosition?: string` (z. B. `"50% 20%"`) und `photoZoom?: number` erweitern.
- `src/routes/team.tsx`: `img` mit `style={{ objectPosition: m.photoPosition ?? "50% 15%", transform: m.photoZoom ? \`scale(${m.photoZoom})\` : undefined, transformOrigin: m.photoPosition }}` in einem `overflow-hidden rounded-full`-Container.
- Werte je Person anhand der Screenshots feinjustieren.
