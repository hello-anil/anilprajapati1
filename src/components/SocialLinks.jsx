import { socials } from "../data/siteData.js";

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          className="icon-btn"
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
        >
          <i className={`bx ${social.icon} text-xl`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
