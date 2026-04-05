# GEMINI context for `my-profile`

This project is a personal profile website built using Next.js 16 (App Router), React 19, and Tailwind CSS 4.

## ⚠️ CRITICAL AGENT INSTRUCTIONS (Next.js 16)
**Heed the instructions in `AGENTS.md` and `CLAUDE.md`:**
This version of Next.js (16.2.2) contains **breaking changes** compared to standard training data. APIs, conventions, and file structure may differ.
- Always check `node_modules/next/dist/docs/` for relevant documentation before implementation.
- Pay close attention to deprecation notices.

## Project Overview
- **Framework:** Next.js 16.2.2 (App Router)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.x (using `@tailwindcss/postcss` and `postcss.config.mjs`)
- **Language:** TypeScript 5.x
- **Package Manager:** pnpm (configured with `pnpm-workspace.yaml`)

## Key Directories and Files
- `app/`: Contains the application routes and layout using the App Router.
  - `layout.tsx`: Root layout with Geist fonts and global styles.
  - `page.tsx`: The main landing page.
- `public/`: Static assets like SVG icons and logos.
- `next.config.ts`: Next.js configuration.
- `tsconfig.json`: TypeScript configuration.
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS.
- `AGENTS.md`: Specific rules for AI agents working on this project.

## Building and Running
The following commands are defined in `package.json`:

- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Production Start:** `pnpm start`
- **Linting:** `pnpm lint`

## Development Conventions
- **Routing:** Use the Next.js App Router (`app/` directory).
- **Styling:** Use Tailwind CSS utility classes. The project uses Geist Sans and Geist Mono fonts.
- **Type Safety:** The project is strictly typed with TypeScript.
- **Workspaces:** The project is set up as a pnpm workspace (though currently it seems focused on the root package).
