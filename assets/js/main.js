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

/*===== CINEMATIC MOTION SYSTEM =====*/
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const canUseFinePointer = window.matchMedia('(pointer: fine)');
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function splitTextWords(element) {
  if (!element || element.dataset.split === 'true') return;

  const words = element.textContent.trim().split(/\s+/);
  element.textContent = '';

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'split-word';
    span.style.setProperty('--word-index', index);
    span.textContent = word;
    element.appendChild(span);

    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '));
    }
  });

  element.dataset.split = 'true';
}

function initCinematicMotion() {
  if (reduceMotion.matches) {
    document.body.classList.add('is-ready');
    return;
  }

  const heroDescription = document.querySelector('.home__description');
  splitTextWords(heroDescription);

  const revealTargets = document.querySelectorAll(
    '.section-title, .about__container, .service__card, .skills__container, .work__card, .resume__panel, .contact__form, .footer'
  );

  revealTargets.forEach((target, index) => {
    target.classList.add('reveal-item');
    target.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
  );

  revealTargets.forEach((target) => sectionObserver.observe(target));

  window.requestAnimationFrame(() => {
    document.body.classList.add('is-ready');
    heroDescription?.classList.add('is-visible');
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });
}

function initParallaxLayers() {
  if (reduceMotion.matches) return;

  const layers = document.querySelectorAll('[data-depth]');
  const heroData = document.querySelector('.home__data');
  let latestScroll = window.scrollY;
  let latestVelocity = 0;
  let lastScroll = latestScroll;
  let tickingMotion = false;

  function updateMotion() {
    latestScroll = window.scrollY;
    latestVelocity += (latestScroll - lastScroll - latestVelocity) * 0.18;
    lastScroll = latestScroll;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0.2);
      const y = latestScroll * depth;
      const blur = clamp(Math.abs(latestVelocity) * 0.025, 0, 5);
      layer.style.transform = `translate3d(0, ${y}px, 0)`;
      layer.style.filter = `blur(${36 + blur}px)`;
    });

    if (heroData) {
      const heroLift = clamp(latestScroll * -0.035, -28, 0);
      heroData.style.transform = `translate3d(0, ${heroLift}px, 0)`;
    }

    tickingMotion = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!tickingMotion) {
        window.requestAnimationFrame(updateMotion);
        tickingMotion = true;
      }
    },
    { passive: true }
  );

  updateMotion();
}

function initMagneticInteractions() {
  if (reduceMotion.matches || !canUseFinePointer.matches) return;

  const magneticTargets = document.querySelectorAll('.button, .nav__link, .home__social-icon, .dark-mode-toggle, .work__details');

  magneticTargets.forEach((target) => {
    target.classList.add('magnetic');

    target.addEventListener('mousemove', (event) => {
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      target.style.transform = `translate3d(${x * 0.16}px, ${y * 0.16}px, 0)`;
    });

    target.addEventListener('mouseleave', () => {
      target.style.transform = '';
    });
  });
}

function initCursorFollower() {
  if (reduceMotion.matches || !canUseFinePointer.matches) return;

  const cursor = document.querySelector('.cursor-follower');
  if (!cursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('pointermove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.classList.add('is-active');
  });

  document.querySelectorAll('a, button, input, textarea').forEach((target) => {
    target.addEventListener('pointerenter', () => cursor.classList.add('is-hovering'));
    target.addEventListener('pointerleave', () => cursor.classList.remove('is-hovering'));
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.16;
    cursorY += (mouseY - cursorY) * 0.16;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    window.requestAnimationFrame(renderCursor);
  }

  renderCursor();
}

function initPageTransitions() {
  if (reduceMotion.matches) return;

  document.querySelectorAll('a[href]:not([href^="#"]):not([target])').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('mailto:')) return;

      event.preventDefault();
      document.body.classList.add('is-transitioning');

      window.setTimeout(() => {
        window.location.href = href;
      }, 260);
    });
  });
}

initCinematicMotion();
initSmoothAnchors();
initParallaxLayers();
initMagneticInteractions();
initCursorFollower();
initPageTransitions();

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
let lastFocusedElement = null;

function openProjectModal(projectId, trigger) {
  const project = projectDetails[projectId];
  if (!project || !modal || !modalTag || !modalTitle || !modalDescription || !modalList) return;

  lastFocusedElement = trigger || document.activeElement;

  modalTag.textContent = project.tag;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalList.innerHTML = project.bullets.map((bullet) => `<li>${bullet}</li>`).join('');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // Focus trap management
  const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  setTimeout(() => {
    firstFocusable?.focus();
  }, 10);

  const handleFocusTrap = (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    }
  };

  modal.addEventListener('keydown', handleFocusTrap);
  modal._handleFocusTrap = handleFocusTrap;
}

function closeProjectModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (modal._handleFocusTrap) {
    modal.removeEventListener('keydown', modal._handleFocusTrap);
    delete modal._handleFocusTrap;
  }

  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

modalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent double trigger when card click is active
    openProjectModal(button.dataset.project, button);
  });
});

// UX: Make the entire project card clickable and accessible
const workCards = document.querySelectorAll('.work__card');
workCards.forEach((card) => {
  const triggerModal = () => {
    const btn = card.querySelector('.work__details');
    if (btn) {
      openProjectModal(btn.dataset.project, card);
    }
  };

  card.addEventListener('click', triggerModal);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerModal();
    }
  });
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
