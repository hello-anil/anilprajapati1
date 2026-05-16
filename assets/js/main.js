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
const themeParam = new URLSearchParams(window.location.search).get('theme');

function setTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#020403' : '#edf8f8');

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

const initialTheme = themeParam === 'light' || themeParam === 'dark'
  ? themeParam
  : savedTheme || (prefersDark.matches ? 'dark' : 'light');

setTheme(initialTheme);

darkModeToggle?.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', nextTheme);
  setTheme(nextTheme);
});

/*===== PROJECT DETAILS MODAL =====*/
const projectDetails = {
  portfolio: {
    tag: 'HTML | CSS | JavaScript',
    title: 'Personal Portfolio Website',
    description: 'A static portfolio designed for fast hosting, clear content, dark mode, responsive navigation, and project cards.',
    bullets: [
      'Optimized first paint and image loading.',
      'Improved mobile layout and focus states.',
      'Added SEO metadata and concise project cards.'
    ]
  },
  business: {
    tag: 'Responsive UI',
    title: 'Business Website Concept',
    description: 'A small-business website structure built around services, trust, and contact.',
    bullets: [
      'Quick-scanning service cards.',
      'Responsive desktop and mobile grid.',
      'Clear call-to-action placement.'
    ]
  },
  support: {
    tag: 'IT Workflow',
    title: 'Support Dashboard Concept',
    description: 'A compact concept for support tasks, diagnostics, and priorities.',
    bullets: [
      'Support workflow visibility.',
      'Status and priority clarity.',
      'Ready to expand into a dashboard.'
    ]
  },
  security: {
    tag: 'Security Awareness',
    title: 'Cybersecurity Landing Page',
    description: 'A simple layout for basic security habits.',
    bullets: [
      'Password safety and phishing awareness.',
      'Plain-language content blocks.',
      'Expandable into a checklist.'
    ]
  },
  ui: {
    tag: 'UX/UI',
    title: 'Responsive UI Practice',
    description: 'A design practice project focused on spacing, type, cards, and interaction states.',
    bullets: [
      'Responsive cards and images.',
      'Consistent hover and focus styling.',
      'Reusable case-study base.'
    ]
  },
  contact: {
    tag: 'Forms | UX',
    title: 'Contact Workflow',
    description: 'An accessible form flow with semantic labels and an email fallback.',
    bullets: [
      'Accessible labels and live status.',
      'Prefilled email draft.',
      'Visible direct email fallback.'
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

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const formData = new FormData(contactForm);
  const recipient = contactForm.dataset.recipient || 'harry7anil@gmail.com';
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  if (contactStatus) {
    contactStatus.textContent = 'Opening your email app. You can also use the direct email link.';
  }

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
