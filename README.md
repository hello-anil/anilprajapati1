# Anil Prajapati — The Spider Edition

Spider-Man special-edition portfolio built with Vite, React Router, and Tailwind CSS. Classic red-and-blue is the default preset. The suit switch selects a monochrome Symbiote variation and remembers your choice locally. Direct preset links: `/?suit=classic` and `/?suit=symbiote`.

Includes five real GitHub project missions with keyboard-accessible dialogs, services, about, skills, learning history, contact, a printable résumé at `/resume`, and a themed `/thanks` page. The contact form posts directly to FormSubmit, keeps its verification check enabled, and returns successful submissions to `/thanks?submitted=1`.

The recipient is `site.email` in `src/data/siteData.js` (currently `harry7anil@gmail.com`). On first use, FormSubmit emails that address an activation link; the owner must confirm it before submissions can be delivered. After activation, submit a fresh message to verify delivery. The named `email` field supplies the sender’s reply-to address, and `_honey` is a hidden spam trap. No API key or server is needed for the GitHub Pages deployment. See [FormSubmit setup](https://formsubmit.co/) and [documentation](https://formsubmit.co/documentation).

Project content is maintained in `src/data/projects.js` and includes AdLock, V-Shiksha, this portfolio, FOOD-SEWA, and Air Mouse. Repository and live/download links are project-specific. Local previews in `public/assets/projects/` include the current AdLock popup rendered from its source in demo mode, the current portfolio hero, a static V-Shiksha landing-page render from its source, and a FOOD-SEWA application screenshot. Air Mouse uses an AI-generated device mockup based on an actual Android motion-control capture, preserving its offline/paused state, and links to its Android APK and Windows receiver releases. The original captures and generation prompt are in `output/imagegen/`.

The classic Spider-Man PNG is stored locally at `public/assets/img/spiderman-classic.png`, sourced from [ClipartMax](https://www.clipartmax.com/middle/m2i8i8H7H7m2Z5i8_spider-man-clipart-animated-john-romita-spider-man/). Spider-Man is a Marvel character; artwork attribution is also included in the footer. Fonts are loaded from Google Fonts with system fallbacks.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.

The app uses GitHub Pages deployment through `.github/workflows/deploy.yml` and keeps static deploy files in `public/`.
