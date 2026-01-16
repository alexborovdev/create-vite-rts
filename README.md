# create-vite-rts

A custom `npm create` wrapper around **Vite** that scaffolds a **React + TypeScript** project with a production-ready setup and a clean FSD-based architecture.

This tool keeps the full **Vite interactive CLI experience**, but when **React + TypeScript** is selected, it automatically applies an extended template with opinionated defaults that save time on every new project.

---

## Why create-vite-rts?

Default `npm create vite` gives you a minimal React setup.  
**create-vite-rts** goes further and gives you a **ready-to-build frontend foundation** instead of a demo project.

### What problem it solves

- No repeated manual setup after every Vite project
- No reconfiguring aliases, SVG handling, routing, styles, or structure
- No messy migrations from “Vite demo” to a real project

You scaffold once - and start building features immediately.

---

## How it works

1. Runs the **Official Vite CLI**
2. Lets you choose:
    - project name
    - framework
    - variant (JS / TS)
    - package manager install (handled by Vite itself)
3. Detects the created project
4. **If React + TypeScript is selected**, it:
    - replaces the default Vite scaffold with a custom template
    - merges additional dependencies
    - keeps Vite defaults where possible
5. For all other project types - behaves exactly like plain Vite

---

## What you get (React + TypeScript only)

### ⚛️ React & Routing
- React
- **react-router-dom** preinstalled
- Basic routing setup
- **Configured 404 (Not Found) page**

---

### 🎨 Styling
- **Sass** preinstalled
- Normalize styles included
- Global styles entry point
- Custom SCSS:
    - variables
    - mixins
    - media-mixins
- Clean separation between global styles and feature styles

---

### 🧱 Architecture (FSD-inspired)

A scalable folder structure inspired by Feature-Sliced Design:
- src/
    - app/
        - layouts/
        - routing/
        - styles/
        - vite-default/ `Vite demo files`
        - App.tsx
    - pages/
        - home-page/
        - not-found-page/
    - widgets/
        - header/
        - footer/
        - vite-default/ `Vite demo files`
    - features/
    - entities/
    - shared/
        - assets/
        - tools/
    - main.tsx


- Default Vite demo components are **isolated**
- Easy to delete demo code without touching real app logic
- Clear growth path for large applications

---

### 🧩 SVG handling

- **vite-plugin-svgr** preconfigured
- Import SVGs as React components:

```ts
import Icon from '@/shared/assets/icon.svg?react'
```

---

### 🔧 Vite configuration

Aliases configured:
- `'@' → src`

Dev server exposed to network:
```ts
server: {
  host: true
}
```

---

### 🧠 TypeScript

- Strict TypeScript configuration
- Path aliases configured in `tsconfig`
- Global SVG typings included (`global.d.ts`)
- Clean separation of app, node, and build configs

---

### 📦 Dependencies

- Extra dependencies are merged, not overwritten
- No forced package manager - Vite stays in control

---

### 🚀 Installation & Usage

```bash
npm create vite-rts
```

Then follow the standard Vite prompts.

When asked:
- **Framework → React**
- **Variant → TypeScript**

That’s it.

---

### 📝 Commands (after scaffold)

```bash
npm install  
npm run dev  
npm run build  
npm run preview
```

Exactly the same as a standard Vite project.

---

### 📄 License

MIT