# Nutritional Daily Value Calculator
When calculating nutrition intake, labels often only show the percentage of the recommended daily value rather than the actual measurement. If you want to track intake, you need that amount. Using data that applies to canadian food labels, this calculator takes a percentage and produces the calculated amount as per that serving.

It's a simple calculation:
**percentage** x **daily recommended value** = **amount per serving**

This calculator is meant as a tool of convenience, not a source of dietary recommendations. It was designed for personal use but may be forked and adapted if anyone finds it helpful.

<img width="980" alt="image" src="https://user-images.githubusercontent.com/17771229/209730443-d741022f-394e-4d45-a667-15d85d7282bd.png">


## Architecture
This is a simple frontend web application developed using [SvelteKit](https://kit.svelte.dev) and styled with [SimpleCSS](https://simplecss.org). It makes the calculations in Javascript on the endpoint with no data shared to the server or stored. It can be deployed on Netlify (as it is now), Vercel, or any number of services.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
