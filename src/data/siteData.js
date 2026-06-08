export const site = {
  name: 'Anil Prajapati',
  shortName: 'Anil',
  title: 'Anil Prajapati | Web Developer & IT Support Specialist',
  resumeTitle: 'Anil Prajapati Resume | Web Developer & IT Support Specialist',
  description:
    'Anil Prajapati is a web developer and IT support specialist building responsive websites, support workflows, and security-aware digital projects.',
  resumeDescription:
    'Resume of Anil Prajapati, web developer and IT support specialist focused on responsive websites, troubleshooting, networks, and cybersecurity awareness.',
  domain: 'https://anilprajapati1.com.np',
  email: 'harry7anil@gmail.com',
  image: '/assets/img/pro-re.png',
  icon: '/assets/img/icon-96.png',
};

export const navLinks = [
  { href: '#work', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const socials = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn profile', icon: 'bxl-linkedin' },
  { href: 'https://github.com/hello-anil', label: 'GitHub', icon: 'bxl-github' },
  { href: 'https://www.instagram.com/anil_prz/', label: 'Instagram', icon: 'bxl-instagram' },
];

export const services = [
  {
    icon: 'bx-code-alt',
    title: 'Web Development',
    text: 'Fast responsive pages with clean HTML, CSS, and JavaScript.',
  },
  {
    icon: 'bx-support',
    title: 'IT Support',
    text: 'Setup, troubleshooting, and clear support for everyday users.',
  },
  {
    icon: 'bx-shield-quarter',
    title: 'Security Basics',
    text: 'Safer accounts, browsing habits, and basic hardening.',
  },
];

export const skills = [
  { icon: 'bxl-html5', name: 'HTML5', percent: 95 },
  { icon: 'bxl-css3', name: 'CSS3', percent: 85 },
  { icon: 'bxl-javascript', name: 'JAVASCRIPT', percent: 65 },
  { icon: 'bxs-paint', name: 'UX/UI', percent: 85 },
];

export const works = [
  {
    id: 'portfolio',
    image: '/assets/img/work1.jpg',
    alt: 'Personal portfolio website preview',
    tag: 'HTML | CSS | JavaScript',
    title: 'Personal Portfolio Website',
    summary: 'One-page portfolio with dark mode and project cards.',
  },
  {
    id: 'business',
    image: '/assets/img/work2.jpg',
    alt: 'Responsive business website concept preview',
    tag: 'Responsive UI',
    title: 'Business Website Concept',
    summary: 'Service-led layout for small business presentation.',
  },
  {
    id: 'support',
    image: '/assets/img/work3.jpg',
    alt: 'Development workspace preview',
    tag: 'IT Workflow',
    title: 'Support Dashboard Concept',
    summary: 'Compact layout for support tasks and priorities.',
  },
  {
    id: 'security',
    image: '/assets/img/work4.jpg',
    alt: 'Security website layout preview',
    tag: 'Security Awareness',
    title: 'Cybersecurity Landing Page',
    summary: 'Simple page for safe password and phishing habits.',
  },
  {
    id: 'ui',
    image: '/assets/img/work5.jpg',
    alt: 'Web design layout preview',
    tag: 'UX/UI',
    title: 'Responsive UI Practice',
    summary: 'Spacing, typography, and card layout practice.',
  },
  {
    id: 'contact',
    image: '/assets/img/work6.jpg',
    alt: 'Contact workflow preview',
    tag: 'Forms | UX',
    title: 'Contact Workflow',
    summary: 'Accessible form structure with email fallback.',
  },
];

export const projectDetails = {
  portfolio: {
    tag: 'HTML | CSS | JavaScript',
    title: 'Personal Portfolio Website',
    description:
      'A static portfolio designed for fast hosting, clear content, dark mode, responsive navigation, and project cards.',
    bullets: [
      'Optimized first paint and image loading.',
      'Improved mobile layout and focus states.',
      'Added SEO metadata and concise project cards.',
    ],
  },
  business: {
    tag: 'Responsive UI',
    title: 'Business Website Concept',
    description: 'A small-business website structure built around services, trust, and contact.',
    bullets: ['Quick-scanning service cards.', 'Responsive desktop and mobile grid.', 'Clear call-to-action placement.'],
  },
  support: {
    tag: 'IT Workflow',
    title: 'Support Dashboard Concept',
    description: 'A compact concept for support tasks, diagnostics, and priorities.',
    bullets: ['Support workflow visibility.', 'Status and priority clarity.', 'Ready to expand into a dashboard.'],
  },
  security: {
    tag: 'Security Awareness',
    title: 'Cybersecurity Landing Page',
    description: 'A simple layout for basic security habits.',
    bullets: ['Password safety and phishing awareness.', 'Plain-language content blocks.', 'Expandable into a checklist.'],
  },
  ui: {
    tag: 'UX/UI',
    title: 'Responsive UI Practice',
    description: 'A design practice project focused on spacing, type, cards, and interaction states.',
    bullets: ['Responsive cards and images.', 'Consistent hover and focus styling.', 'Reusable case-study base.'],
  },
  contact: {
    tag: 'Forms | UX',
    title: 'Contact Workflow',
    description: 'An accessible form flow with semantic labels and an email fallback.',
    bullets: ['Accessible labels and live status.', 'Prefilled email draft.', 'Visible direct email fallback.'],
  },
};

export const timeline = [
  {
    label: 'Current',
    title: 'Web Development Practice',
    text: 'Building responsive layouts and publishing static sites.',
  },
  {
    label: 'IT Foundation',
    title: 'Support & Administration',
    text: 'Troubleshooting, setup, and system maintenance basics.',
  },
  {
    label: 'Security',
    title: 'Cybersecurity Awareness',
    text: 'Safer account habits and simple user-focused improvements.',
  },
];

export const learning = [
  'Web development fundamentals',
  'Network administration basics',
  'Cybersecurity awareness',
  'UI/UX design practice',
];

export const resumeSkills = [
  'HTML5, CSS3, responsive layout, JavaScript basics',
  'UI/UX structure, accessibility basics, form design',
  'IT support, system setup, software troubleshooting',
  'Network administration and cybersecurity awareness fundamentals',
];
