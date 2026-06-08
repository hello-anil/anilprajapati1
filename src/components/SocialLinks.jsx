import { socials } from '../data/siteData.js';
import { ThemeToggle } from './ThemeToggle.jsx';

export function SocialLinks({ theme, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <a key={social.href} href={social.href} className="icon-btn" aria-label={social.label}>
          <i className={`bx ${social.icon} text-xl`} aria-hidden="true" />
        </a>
      ))}
      <ThemeToggle theme={theme} />
    </div>
  );
}
