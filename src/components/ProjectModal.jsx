import { useEffect } from 'react';
import { projectDetails } from '../data/siteData.js';

export function ProjectModal({ projectId, onClose }) {
  const project = projectId ? projectDetails[projectId] : null;

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(project));

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center px-4" aria-hidden="false">
      <button className="absolute inset-0 bg-black/65" type="button" aria-label="Close project details" onClick={onClose} />
      <article
        className="glass relative w-full max-w-xl rounded-lg p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button className="icon-btn absolute right-4 top-4" type="button" aria-label="Close project details" onClick={onClose}>
          <i className="bx bx-x text-2xl" aria-hidden="true" />
        </button>
        <p className="pr-12 text-sm font-bold uppercase tracking-[.18em] text-[var(--accent)]">{project.tag}</p>
        <h2 id="project-modal-title" className="display-font mt-3 text-3xl font-bold">
          {project.title}
        </h2>
        <p className="mt-4 text-[var(--muted)]">{project.description}</p>
        <ul className="mt-5 space-y-3">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-[var(--muted)]">
              <i className="bx bx-check-circle mt-0.5 text-lg text-[var(--accent)]" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://github.com/hello-anil" className="btn" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#contact" className="btn btn-ghost" onClick={onClose}>
            Discuss Project
          </a>
        </div>
      </article>
    </div>
  );
}
