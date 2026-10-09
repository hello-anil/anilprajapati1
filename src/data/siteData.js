import { works } from "./projects.js";

export const site = {
  name: "Anil Prajapati",
  shortName: "Anil",
  role: "Web Developer & Extension Builder",
  title: "Anil Prajapati | The Spider Edition — Web Developer & Extension Builder",
  resumeTitle: "Anil Prajapati Resume | Web Developer & Extension Builder",
  description:
    "Anil Prajapati builds React portfolios, PHP/MySQL web applications, and JavaScript browser extensions. Explore AdLock, V-Shiksha, and FOOD-SEWA.",
  resumeDescription:
    "Project-based résumé of Anil Prajapati: React and Vite, PHP and MySQL, browser extensions, authentication, and payment integration code.",
  profile:
    "Web developer building React portfolios, PHP/MySQL applications, and JavaScript browser extensions. My work includes AdLock, V-Shiksha, and FOOD-SEWA, covering responsive interfaces, role-based accounts, and payment integration code.",
  domain: "https://anilprajapati1.com.np",
  email: "harry7anil@gmail.com",
  image: "/assets/img/pro-re.png",
  icon: "/assets/img/icon-96.png",
};

export const navLinks = [
  { href: "#work", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn profile",
    icon: "bxl-linkedin",
  },
  {
    href: "https://github.com/hello-anil",
    label: "GitHub",
    icon: "bxl-github",
  },
  {
    href: "https://www.instagram.com/anil_prz/",
    label: "Instagram",
    icon: "bxl-instagram",
  },
];

export const services = [
  {
    icon: "bx-code-alt",
    title: "Web Development",
    text: "Responsive React portfolios and PHP/MySQL applications, with storefronts, course pages, and administrator dashboards.",
    projectIds: ["portfolio", "v-shiksha", "food-sewa"],
  },
  {
    icon: "bxl-edge",
    title: "Browser Extensions",
    text: "JavaScript extension interfaces and browser APIs, with AdLock's protection levels, per-site controls, custom filters, and local settings.",
    projectIds: ["adlock-edge"],
  },
  {
    icon: "bx-data",
    title: "Backends & Integrations",
    text: "PHP/MySQL account and ordering workflows, plus eSewa, Khalti, and Stripe integration code for FOOD-SEWA checkout.",
    projectIds: ["food-sewa", "v-shiksha"],
  },
];

export const skills = [
  {
    icon: "bxl-html5",
    name: "HTML & CSS",
    detail: "Responsive pages, forms, storefronts, and dashboard layouts.",
    projectIds: ["portfolio", "v-shiksha", "food-sewa"],
  },
  {
    icon: "bxl-javascript",
    name: "JavaScript & Browser APIs",
    detail: "Extension popup controls, local storage, and network filtering rules.",
    projectIds: ["adlock-edge"],
  },
  {
    icon: "bxl-react",
    name: "React & Vite",
    detail: "Reusable components, routing, theme presets, and project dialogs.",
    projectIds: ["portfolio"],
  },
  {
    icon: "bxl-php",
    name: "PHP & MySQL",
    detail: "Role-based accounts, relational data, and application dashboards.",
    projectIds: ["v-shiksha", "food-sewa"],
  },
  {
    icon: "bxl-css3",
    name: "Tailwind CSS & Bootstrap",
    detail: "Responsive component styling for the portfolio and food delivery app.",
    projectIds: ["portfolio", "food-sewa"],
  },
  {
    icon: "bx-shield-quarter",
    name: "Authentication & Payment APIs",
    detail: "Password hashing, CSRF checks, and payment callback and webhook code.",
    projectIds: ["food-sewa"],
  },
];

export const skillTags = [
  "Responsive interfaces",
  "Browser extensions",
  "Database workflows",
  "Authentication",
  "Payment integrations",
  "Accessibility",
];

export { works, projectDetails } from "./projects.js";

export const timeline = works.map((project) => ({
  label: project.tag,
  title: project.title,
  text: project.summary,
  projectIds: [project.id],
}));

export const learning = [
  "Accessible React interfaces and reusable components",
  "PHP/MySQL testing and reliable database workflows",
  "Payment verification and application security",
  "Browser extension compatibility and release testing",
];

export const resumeSkills = skills.map(
  (skill) => `${skill.name} — ${skill.detail}`,
);
