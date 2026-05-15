/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (!toggle || !nav) return;

  toggle.setAttribute('role', 'button');
  toggle.setAttribute('aria-controls', navId);
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
};

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

function closeMobileMenu() {
  if (!navMenu) return;
  navMenu.classList.remove('show');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open menu');
}

navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
let ticking = false;

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

    if (!navLink) return;

    navLink.classList.toggle(
      'active',
      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
    );
  });

  ticking = false;
}

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      window.requestAnimationFrame(scrollActive);
      ticking = true;
    }
  },
  { passive: true }
);

scrollActive();

/*===== DARK MODE =====*/
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);

  if (darkModeToggle) {
    darkModeToggle.setAttribute('aria-pressed', String(isDark));
    darkModeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    const icon = darkModeToggle.querySelector('i');
    const label = darkModeToggle.querySelector('span');

    icon?.classList.toggle('bx-moon', !isDark);
    icon?.classList.toggle('bx-sun', isDark);
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
  }
}

setTheme(savedTheme || (prefersDark.matches ? 'dark' : 'light'));

darkModeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', nextTheme);
  setTheme(nextTheme);
});

/*===== PROJECT DETAILS MODAL =====*/
const projectDetails = {
  portfolio: {
    tag: 'HTML • CSS • JavaScript',
    title: 'Personal Portfolio Website',
    description: 'A static portfolio designed for fast hosting, clear content, dark mode, responsive navigation, project cards, and a hosted contact flow.',
    bullets: [
      'Optimized first paint by removing unnecessary third-party animation loading.',
      'Improved mobile layout, focus states, and image loading behavior.',
      'Added SEO metadata and a richer project presentation structure.'
    ]
  },
  business: {
    tag: 'Responsive UI',
    title: 'Business Website Concept',
    description: 'A practical small-business website structure built around service discovery, trust signals, and a direct contact path.',
    bullets: [
      'Service cards built for quick scanning.',
      'Responsive grid structure for desktop and mobile.',
      'Clear call-to-action placement for lead generation.'
    ]
  },
  support: {
    tag: 'IT Workflow',
    title: 'Support Dashboard Concept',
    description: 'A concept for organizing support tasks, diagnostics, and priority information in a compact interface.',
    bullets: [
      'Focused on practical support workflow visibility.',
      'Designed around status, priority, and task clarity.',
      'Suitable direction for a future JavaScript dashboard project.'
    ]
  },
  security: {
    tag: 'Security Awareness',
    title: 'Cybersecurity Landing Page',
    description: 'A layout idea for teaching basic security habits in a simple, readable format for everyday users.',
    bullets: [
      'Highlights password safety and phishing awareness.',
      'Uses direct plain-language content blocks.',
      'Can be expanded into a security checklist or training page.'
    ]
  },
  ui: {
    tag: 'UX/UI',
    title: 'Responsive UI Practice',
    description: 'A design practice project focused on rhythm, spacing, readable typography, card layout, and consistent interaction states.',
    bullets: [
      'Responsive cards and image presentation.',
      'Consistent button, hover, and focus styling.',
      'Useful base for future portfolio case studies.'
    ]
  },
  contact: {
    tag: 'Forms • UX',
    title: 'Contact Workflow',
    description: 'An accessible form flow with semantic labels, required fields, spam-reduction fields, and a dedicated success page.',
    bullets: [
      'Uses accessible hidden labels and live status messaging.',
      'Redirects to a branded thank-you page after submission.',
      'Includes a honeypot field and disabled FormSubmit CAPTCHA.'
    ]
  }
};

const modal = document.getElementById('project-modal');
const modalTag = document.getElementById('project-modal-tag');
const modalTitle = document.getElementById('project-modal-title');
const modalDescription = document.getElementById('project-modal-description');
const modalList = document.getElementById('project-modal-list');
const modalButtons = document.querySelectorAll('[data-project]');
const modalCloseButtons = document.querySelectorAll('[data-close-modal]');

function openProjectModal(projectId) {
  const project = projectDetails[projectId];
  if (!project || !modal || !modalTag || !modalTitle || !modalDescription || !modalList) return;

  modalTag.textContent = project.tag;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalList.innerHTML = project.bullets.map((bullet) => `<li>${bullet}</li>`).join('');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.project-modal__close')?.focus();
}

function closeProjectModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

modalButtons.forEach((button) => {
  button.addEventListener('click', () => openProjectModal(button.dataset.project));
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', closeProjectModal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeProjectModal();
});

/*===== CONTACT STATUS =====*/
const contactForm = document.querySelector('.contact__form');
const contactStatus = document.querySelector('.contact__status');

contactForm?.addEventListener('submit', () => {
  if (!contactStatus) return;
  contactStatus.textContent = 'Sending your message securely...';
});
