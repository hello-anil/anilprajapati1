import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/siteData.js";
import { SpiderMark } from "./SpiderMark.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";

export function Header({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
      let next = "";
      navLinks.forEach(({ href }) => {
        const section = document.getElementById(href.slice(1));
        if (section && section.getBoundingClientRect().top <= 160)
          next = href.slice(1);
      });
      setActiveId(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const scrollTo = (event, href) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate(`/${href}`);
    }
  };
  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className="shell header-nav" aria-label="Main navigation">
        <a
          href={location.pathname === "/" ? "#home" : "/#home"}
          onClick={(event) => scrollTo(event, "#home")}
          className="brand"
          aria-label="Anil Prajapati portfolio home"
        >
          <SpiderMark />
          <span>
            ANIL<span className="red-text">.</span>
            <small>THE SPIDER EDITION</small>
          </span>
        </a>
        <div className={`nav-menu ${isOpen ? "is-open" : ""}`} id="nav-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={location.pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(event) => scrollTo(event, link.href)}
                  aria-current={
                    activeId === link.href.slice(1) ? "location" : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-actions">
          <ThemeToggle theme={theme} />
          <a
            href={location.pathname === "/" ? "#contact" : "/#contact"}
            className="header-contact"
            onClick={(event) => scrollTo(event, "#contact")}
          >
            Let's talk <span>↗</span>
          </a>
          <button
            className="icon-btn nav-toggle"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="nav-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <i
              className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
