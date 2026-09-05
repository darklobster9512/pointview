# Domain pointview.gmbh in der Vite-Konfiguration erlauben

## Was sich ändert

Der Entwicklungsserver akzeptiert Aufrufe über `pointview.gmbh` und `www.pointview.gmbh`. Für die veröffentlichte Seite ist das nicht nötig (dort greift diese Einstellung nicht); die Domain selbst wird unter Projekteinstellungen → Domains verbunden.

## Technische Details
- `vite.config.ts`: `vite.server.allowedHosts: ["pointview.gmbh", "www.pointview.gmbh"]` ergänzen (bestehende Sandbox-Host-Erkennung bleibt erhalten, nur zusätzliche Hosts).
