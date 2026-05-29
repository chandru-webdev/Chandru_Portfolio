# Chandru_Portfolio

A cinematic, monochrome, Apple-inspired portfolio homepage built with **React + Vite**, **Framer Motion**, and **React Icons**.

## Stack

- React 18
- Vite 5
- Framer Motion (animations)
- React Icons (Feather set)
- CSS3 (custom — no UI library)

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the local dev server with HMR   |
| `npm run build`   | Build the production bundle           |
| `npm run preview` | Preview the production build locally  |

## Project Structure

```
portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   └─ components/
      ├─ Home.jsx
      └─ Home.css
```

## Replacing the portrait placeholder

In `src/components/Home.jsx`, the portrait is rendered as:

```jsx
<div className="profile-placeholder" />
```

Swap it for an `<img>` whenever ready:

```jsx
<img src="/me.jpg" alt="Chandru" className="profile-placeholder" />
```

Drop `me.jpg` into the `public/` folder.
