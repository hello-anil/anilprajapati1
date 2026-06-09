import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navLinks, site } from '../data/siteData.js';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('work');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      let next = activeId;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 120;
        if (scrollY >= top && scrollY <= top + section.offsetHeight) next = id;
      });

      setActiveId(next);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeId]);

  const scrollTo = (event, href) => {
    event.preventDefault();
    const id = href.slice(1);
    setIsOpen(false);

    const runScroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(runScroll, 80);
    } else {
      runScroll();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-[min(1120px,calc(100%-2rem))] items-center justify-between">
        <a
          href="#home"
          onClick={(event) => scrollTo(event, '#home')}
          className="display-font flex items-center gap-3 text-lg font-bold text-[var(--text)] no-underline"
          aria-label="Anil portfolio home"
        >
          <span
            className="brand-mark inline-flex h-11 w-11 items-center justify-center rounded-lg text-base font-extrabold"
            aria-hidden="true"
          >
            A
          </span>
          <span>{site.shortName}</span>
        </a>

        <div
          className={`fixed left-4 right-4 top-24 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4 shadow-2xl backdrop-blur-xl transition md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="nav-menu"
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => scrollTo(event, link.href)}
                    className={`block rounded-md px-4 py-2 text-sm font-bold no-underline transition hover:bg-[var(--surface-muted)] hover:text-[var(--accent)] ${
                      activeId === id ? 'bg-[var(--surface-muted)] text-[var(--accent)]' : 'text-[var(--muted)]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="icon-btn nav-toggle"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-controls="nav-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'} text-2xl`} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
