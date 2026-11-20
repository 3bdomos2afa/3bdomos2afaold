# Old Portfolio

![Next.js](https://img.shields.io/badge/Next.js-111111?style=flat) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

The first version of my personal portfolio, built with Next.js. Kept here for reference. My current portfolio lives at [3bdomos2afa.github.io](https://3bdomos2afa.github.io).

## Tech stack

- Next.js, React, TypeScript
- Tailwind CSS
- Three.js (react-three-fiber + drei) for 3D scenes
- GSAP animations

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build check

```bash
npm ci --ignore-scripts
npm run build
```

A GitHub Actions build workflow is included. The production build was checked locally with Node.js 22.
