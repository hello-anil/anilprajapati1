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
