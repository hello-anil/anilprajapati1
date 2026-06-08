import { site, socials } from '../data/siteData.js';

export function Footer() {
  return (
    <footer className="reveal-item border-t border-[var(--border)] px-4 py-12 text-center">
      <p className="display-font text-2xl font-bold">{site.name}</p>
      <div className="mt-5 flex justify-center gap-3">
        {socials.map((social) => (
          <a key={social.href} href={social.href} className="icon-btn" aria-label={social.label}>
            <i className={`bx ${social.icon} text-xl`} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-[var(--muted)]">&copy; Anil pvt. All rights reserved</p>
    </footer>
  );
}
