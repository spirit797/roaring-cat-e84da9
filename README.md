# Kistler-IT — Website (Astro)

Professionelle Website für Kistler-IT (IT-Support, Uster CH) — Schwarz/Rot, EDV/Engineering-Design.

## Lokal starten

```bash
npm install
npm run dev      # → http://localhost:4321
```

## Bauen & Deployen

```bash
npm run build    # Ausgabe in dist/
```

Deployt über Netlify (Build from repo): `npm run build`, Publish-Directory `dist`.

## Inhalte pflegen

Alle Texte, Preise und Kontaktdaten stehen zentral in **`src/data/site.ts`**.
Abwesenheits-Banner: `absence.active` auf `true` setzen + Text anpassen.

## Struktur

- `src/pages/` — Startseite, Impressum, Datenschutz, Fernwartungszeiten
- `src/components/` — Header, Footer
- `src/layouts/` — Basis-Layout (inkl. Abwesenheits-Banner)
- `src/data/site.ts` — alle Inhalte
- `src/styles/global.css` — Design-System
