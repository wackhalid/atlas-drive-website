# Atlas Drive — Website

Vite + React + Tailwind. Same stack as your other projects.

## Run locally
```
npm install
npm run dev
```

## Build for Netlify
```
npm run build
```
Then drag the `dist` folder into Netlify, or connect this repo for CI/CD (same flow as your other sites).
Publish directory: `dist` — Build command: `npm run build`

## Use in Bolt
Zip this whole folder (or push to GitHub) and import it into Bolt as an existing project — it will detect the Vite config automatically. Do not paste files one-by-one; import the project so `package.json`, `tailwind.config.js` and `vite.config.js` stay linked.

## What's inside
- 4 languages: EN / FR / ES / DE — switch in the header, all content in `src/data/translations.js`
- Real TripAdvisor reviews in `src/data/reviews.js`
- Logo is a pure SVG component (`src/components/Logo.jsx`) — no image file, so it will never break or fail to load
- WhatsApp number wired throughout: +212 619 404 377
- Contact info: 123 Avenue Mohammed V, Marrakech 40000 · kyourdrive@gmail.com
- TripAdvisor listing linked in the hero trust badge and the reviews section

## To edit later
- Prices/routes: none are hardcoded yet — add them to the Services or Multi-Day sections when ready
- Swap in real photos: replace the icon/illustration sections with `<img>` tags once you have professional photos of your car and drivers
