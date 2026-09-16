# Shopify Polaris Component Demo

A small, self-contained single-page React + Vite app that wires up
[Shopify Polaris](https://polaris.shopify.com/) and exercises a wide range of its
components (buttons, form controls, tabs, modal, popover/action list, collapsible,
data table, index table, banners, top bar, navigation, etc.) inside clearly labeled,
card-based sections.

It exists as a UI-testing target: a page with real, semantic Polaris/ARIA markup
(not placeholder junk) for exercising an automated resolver/tracker tool.

## Local development

```bash
npm install
npm run dev
```

This starts the Vite dev server (default: http://localhost:5173).

## Build

```bash
npm run build
```

Outputs a static production build to `dist/`. `vite.config.js` sets `base: './'`
so the build works when served from a GitHub Pages project subpath
(e.g. `https://<user>.github.io/<repo>/`).

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds the app and publishes `dist/`
via `actions/upload-pages-artifact` + `actions/deploy-pages` on every push to `main`.

To enable it:

1. Push this repository to GitHub.
2. In the repo, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually) and the site will publish
   automatically.

## What's included

- `AppProvider` (with English i18n translations) wrapping the whole app, importing
  Polaris's base stylesheet from `@shopify/polaris/build/esm/styles.css`.
- `Frame` + `TopBar` (search field, user menu) + `Navigation` (sidebar with icons
  and a badge).
- `Page` / `Layout` / `Card` composition with clearly labeled sections.
- Form controls: `TextField`, `Select`, `Checkbox` (including one styled/used as a
  settings toggle), `RadioButton` group.
- Actions: `Button` variants (primary, destructive, plain, disabled), `ButtonGroup`,
  `Popover` + `ActionList` (menu), `Modal` (confirmation dialog).
- `Tabs` with multiple panels.
- `Collapsible` disclosure sections (FAQ-style accordion).
- `DataTable` (with totals row) and `IndexTable` (with row selection).
- `Banner` alerts across info/success/warning/critical tones.

## Notes on Polaris versions

Polaris's required CSS import path has changed across major versions in the past.
This project pins `@shopify/polaris` and confirms the stylesheet lives at
`@shopify/polaris/build/esm/styles.css` for the installed version. If you upgrade
Polaris and the app fails to pick up styles, check
`node_modules/@shopify/polaris/build/esm/` for the current file name and update the
import in `src/main.jsx` accordingly.
