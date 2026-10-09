# Anil Prajapati — The Spider Edition

Spider-Man special-edition portfolio built with Vite, React Router, and Tailwind CSS. Classic red-and-blue is the default preset. The suit switch selects a monochrome Symbiote variation and remembers your choice locally. Direct preset links: `/?suit=classic` and `/?suit=symbiote`.

Includes five real GitHub project missions with keyboard-accessible dialogs, services, about, skills, learning history, contact, a printable résumé at `/resume`, and a themed `/thanks` page. The contact form opens a prefilled email draft; the visitor sends it from their email application.

Project content is maintained in `src/data/projects.js` and includes AdLock, V-Shiksha, this portfolio, AdLock privacy documentation, and FOOD-SEWA (explicitly marked as early stage). Repository and live links are project-specific. Local previews in `public/assets/projects/` include the current AdLock popup rendered from its source in demo mode, the current portfolio hero, and a static V-Shiksha landing-page render from its source. Documentation and README-stage projects use titled covers rather than fabricated application screenshots.

The classic Spider-Man PNG is stored locally at `public/assets/img/spiderman-classic.png`, sourced from [ClipartMax](https://www.clipartmax.com/middle/m2i8i8H7H7m2Z5i8_spider-man-clipart-animated-john-romita-spider-man/). Spider-Man is a Marvel character; artwork attribution is also included in the footer. Fonts are loaded from Google Fonts with system fallbacks.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.

The app uses GitHub Pages deployment through `.github/workflows/deploy.yml` and keeps static deploy files in `public/`.
