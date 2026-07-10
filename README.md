# BTImpl — Personal Site (Angular)

Personal site for **Bódis Tamás**, refactored from a single `btimpl.html` into a
standalone-component Angular 17 application, styled to the **BTImpl Brand Kit v1.0**.

## Run

```bash
npm install
npm start        # ng serve → http://localhost:4200
```

Build for production:

```bash
npm run build    # outputs to dist/btimpl-web
```

> Requires Node 18.13+ / 20.9+ (Angular 17).

## Structure

```
src/
  index.html              App shell + fonts + favicon
  main.ts                 Bootstraps AppComponent (standalone)
  styles.css              Global theme — brand tokens + shared primitives
  favicon.svg             BTImpl app icon
  assets/                 Logo marks, icons, social images
  app/
    app.component.ts      Page layout (hero → profile → experience → skills → footer)
    data/resume.data.ts   All content (profile, jobs, skills, education)
    components/
      logo.component.ts        The BTImpl mark (scoped SVG gradients)
      hero.component.ts        Brand lockup, name, role, contact buttons
      profile.component.ts     Profile summary
      experience.component.ts  Work history cards
      skills.component.ts      Core competencies + education
      footer.component.ts      Footer with mark + copyright
```

## Branding

All colors, typography, and the logo come from the BTImpl Brand Kit:

- **Fonts** — Poppins (display), IBM Plex Sans (body), JetBrains Mono (labels/code)
- **Brand colors** — Indigo `#5A6CF7`, Royal Blue `#4577F0`, Azure `#3D93E8`, Cyan `#58CBFB`
- **Neutrals** — Ink `#0A1228`, Deep `#060C1B`, Surface `#0D1530`, Mist `#9AA6C9`, White `#F4F7FF`

Tokens live as CSS custom properties in `src/styles.css`.

## Notes

- `preview.html` (repo root) is a static, single-file mirror of the rendered app —
  open it directly in a browser to see the result without running the dev server.
  It is not part of the Angular build.
- Content is centralized in `src/app/data/resume.data.ts`; edit there to update text.
