## Purpose

This file gives concise, repository-specific guidance for AI coding agents working on this Vite + React project so they can be productive immediately.

## Quick facts

- Framework: React (JSX), Vite. Entry HTML: `index.html` -> loads `/src/main.jsx`.
- Scripts (see `package.json`): `dev` (vite), `build` (vite build), `preview` (vite preview), `lint` (eslint .).
- Main files: `src/main.jsx` (app bootstrap), `src/App.jsx` (root component example using `useState`).
- ESLint config: `eslint.config.js` present in repo root.

## What to do first (developer workflows)

1. Install deps and run dev server. The dev server uses Vite and provides HMR so incremental UI changes are visible immediately.
2. Use `npm run lint` to run ESLint before opening a PR.
3. There are no tests in this repo; validate behavior manually in the browser served by Vite.

## Project-specific patterns and conventions

- Files use the `.jsx` extension for React components and `createRoot` / `StrictMode` in `src/main.jsx`.
- Components use default exports (see `src/App.jsx`). Keep exports consistent.
- Simple state examples live in `src/App.jsx` (functions named `Arttir` and `azalt` demonstrate local `useState` usage).
- This is a frontend-only app — there are no backend APIs or service workers in the repository.

## Integration points and dependencies

- `vite` (dev server, build): configured in `vite.config.js` with `@vitejs/plugin-react`.
- `eslint` and related react plugins enforce code style; run lint during PR checks.
- Dev dependencies include `@types/react` and `@types/react-dom` but the codebase itself is JavaScript (not TypeScript).

## Helpful examples for code edits

- Editing app entry: modify `src/main.jsx` to change bootstrap behavior.
- Adding a page/component: add `src/components/YourComponent.jsx` and import from `src/App.jsx`.
- Adjust build behavior: edit `vite.config.js` (plugins are registered there).

## Pull request checklist for agents

- Ensure `npm run dev` works locally and HMR reflects UI changes.
- Run `npm run lint` and fix any new lint issues.
- Keep changes within `src/` unless intentionally changing build or config files (`vite.config.js`, `package.json`, `eslint.config.js`).

## When unsure

- If a requested change touches TypeScript or testing infra, note that this repo is JS-first and explicitly document any TypeScript additions (update `package.json` and README).

---
If any section is unclear or you'd like more examples (tests, CI, or TypeScript migration notes), tell me which part to expand.
