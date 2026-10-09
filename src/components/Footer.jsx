import { socials } from "../data/siteData.js";
import { SpiderMark } from "./SpiderMark.jsx";
export function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <a className="brand" href="/#home">
          <SpiderMark />
          <span>
            ANIL<span className="red-text">.</span>
            <small>THE SPIDER EDITION</small>
          </span>
        </a>
        <p>A little code can make a big difference.</p>
        <div className="footer-socials">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              className="icon-btn"
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`bx ${social.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anil Prajapati. Crafted with care.</p>
        <p>
          A Spider-Man fan edition. Character © Marvel.
          <br />
          <a
            href="https://www.clipartmax.com/middle/m2i8i8H7H7m2Z5i8_spider-man-clipart-animated-john-romita-spider-man/"
            target="_blank"
            rel="noreferrer"
          >
            Classic artwork source ↗
          </a>
        </p>
        <a href="/#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
