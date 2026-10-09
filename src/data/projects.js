// Project descriptions and links verified against hello-anil's public repositories.
// Preview images and title covers are local so the gallery does not depend on GitHub at runtime.
export const works = [
  {
    id: "adlock-edge",
    shortTitle: "AdLock",
    repoName: "adlock-edge",
    title: "AdLock — Edge Extension",
    category: "Extensions",
    tag: "JavaScript | Browser Extension",
    status: "Edge Add-ons",
    image: "/assets/projects/adlock-preview.png",
    alt: "Current AdLock red-and-blue extension popup, rendered from the adlock-edge source in demo mode",
    previewNote:
      "Current popup interface rendered from the repository in demo mode; displayed counters are demo data.",
    summary:
      "Privacy-focused ad blocking with protection levels, site controls, and custom filters.",
    description:
      "A Microsoft Edge extension for blocking ads, trackers, unwanted popups, and advertising redirects. Protection settings and blocking data stay on the device.",
    bullets: [
      "Relaxed, Balanced, and Strict protection levels.",
      "Global and per-site pause controls.",
      "Custom filters and settings backup.",
    ],
    repository: "https://github.com/hello-anil/adlock-edge",
    liveUrl:
      "https://microsoftedge.microsoft.com/addons/detail/dknkhicpaggioijaimoapfdmcgggcbkm",
    liveLabel: "View on Edge Add-ons",
    resume: true,
  },
  {
    id: "v-shiksha",
    shortTitle: "V-Shiksha",
    repoName: "V-Shiksha",
    title: "V-Shiksha — Online Education",
    category: "Web development",
    tag: "PHP | MySQL | CSS",
    status: "Source available",
    image: "/assets/projects/v-shiksha.png",
    alt: "V-Shiksha landing page rendered from its repository HTML and CSS",
    previewNote:
      "Static landing-page preview rendered from the repository source.",
    summary:
      "An education platform with student, teacher, and administrator areas.",
    description:
      "A PHP-based online education project with student registration, role-specific dashboards, course management, lessons, enrollment, and payment-related pages. The repository includes a SQL database schema.",
    bullets: [
      "Separate student, teacher, and administrator areas.",
      "Course, lesson, and enrollment workflows.",
      "Student registration and profile pages.",
    ],
    repository: "https://github.com/hello-anil/V-Shiksha",
    resume: true,
  },
  {
    id: "portfolio",
    shortTitle: "Portfolio",
    repoName: "anilprajapati1",
    title: "Anil Prajapati — Portfolio",
    category: "Web development",
    tag: "React | Vite | Tailwind CSS",
    status: "Live website",
    image: "/assets/projects/portfolio.png",
    alt: "Screenshot of Anil Prajapati’s Spider Edition portfolio hero",
    previewNote:
      "Preview of the Spider Edition. The live website may show the published version.",
    summary:
      "My responsive React portfolio with project details, suit presets, and a printable résumé.",
    description:
      "A responsive React portfolio built with Vite, React Router, and Tailwind CSS. This special edition adds classic Spider-Man styling, suit presets, project dialogs, and a printable résumé to the portfolio.",
    bullets: [
      "Responsive portfolio sections and mobile navigation.",
      "Classic and Symbiote suit presets in this edition.",
      "Project details, contact draft preparation, and printable résumé.",
    ],
    repository: "https://github.com/hello-anil/anilprajapati1",
    liveUrl: "https://anilprajapati1.com.np",
    liveLabel: "Visit live website",
    resume: true,
  },
  {
    id: "food-sewa",
    shortTitle: "FOOD-SEWA",
    repoName: "FOOD-SEWA",
    title: "FOOD-SEWA — Food Delivery",
    category: "Web development",
    tag: "PHP | MySQL | Bootstrap",
    status: "Source available",
    image: "/assets/projects/food-sewa.png",
    alt: "FOOD-SEWA customer food catalog from the local application's system-test screenshot",
    previewNote:
      "Actual application screenshot from the local system-test captures; menu items shown are test data.",
    summary:
      "A food delivery application with customer ordering and an administrator dashboard.",
    description:
      "A PHP and MySQL food delivery application with menu browsing, carts, wishlists, checkout, coupons, delivery tracking, and customer accounts. Administrator pages manage menu items, orders, deliveries, payments, and settings. The repository includes the source and a database schema; a public hosted demo is not yet available.",
    bullets: [
      "Customer food browsing, carts, wishlists, and checkout.",
      "Order management, coupons, and delivery tracking.",
      "Administrator dashboard and eSewa, Khalti, and Stripe integration code.",
    ],
    repository: "https://github.com/hello-anil/FOOD-SEWA",
    resume: true,
  },
  {
    id: "air-mouse",
    shortTitle: "Air Mouse",
    repoName: "air-mouse-releases",
    title: "Air Mouse — Android & Windows Remote",
    category: "Desktop & mobile",
    tag: "Android | Windows | Bluetooth",
    status: "Downloads available",
    image: "/assets/projects/air-mouse-preview.png",
    alt: "Air Mouse preview with the Android motion-control screen beside a Windows laptop",
    previewNote:
      "AI-generated device mockup based on an actual Android app capture; the screen shows the receiver offline and motion control paused.",
    summary:
      "Turn an Android phone into a Windows mouse, touchpad, media remote, or game controller.",
    description:
      "Air Mouse connects an Android phone to a Windows PC over Bluetooth for motion-based mouse control, touchpad input, media controls, presentation navigation, and PPSSPP controller input. The release repository provides the Android APK, standalone Windows receiver, and controller profile.",
    bullets: [
      "Bluetooth motion control and touchpad mode for Windows.",
      "Media and presentation remotes, plus PPSSPP controller bindings.",
      "Android APK and standalone Windows receiver downloads.",
    ],
    repository: "https://github.com/hello-anil/air-mouse-releases",
    liveUrl: "https://github.com/hello-anil/air-mouse-releases/releases/latest",
    liveLabel: "Download latest release",
    resume: true,
  },
];

export const projectDetails = Object.fromEntries(
  works.map((project) => [project.id, project]),
);
