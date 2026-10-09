import { useEffect, useRef } from "react";
import { projectDetails } from "../data/siteData.js";

export function ProjectModal({ projectId, onClose }) {
  const project = projectId ? projectDetails[projectId] : null;
  const dialogRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(project));

    const dialog = dialogRef.current;
    if (project && dialog && !dialog.open) dialog.showModal();
    return () => {
      if (dialog?.open) dialog.close();
      document.body.classList.remove("modal-open");
    };
  }, [project]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article className="glass relative w-full max-w-xl rounded-lg p-6">
        <button
          className="icon-btn absolute right-4 top-4"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
        >
          <i className="bx bx-x text-2xl" aria-hidden="true" />
        </button>
        <p className="pr-12 text-sm font-bold uppercase tracking-[.18em] text-[var(--accent)]">
          {project.tag}
        </p>
        <h2
          id="project-modal-title"
          className="display-font mt-3 text-3xl font-bold"
        >
          {project.title}
        </h2>
        <p className="mt-4 text-[var(--muted)]">{project.description}</p>
        <ul className="mt-5 space-y-3">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-[var(--muted)]">
              <i
                className="bx bx-check-circle mt-0.5 text-lg text-[var(--accent)]"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repository}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View repository
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              {project.liveLabel}
            </a>
          )}
          <a href="#contact" className="btn btn-ghost" onClick={onClose}>
            Discuss Project
          </a>
        </div>
        {project.previewNote && (
          <p className="project-preview-note">{project.previewNote}</p>
        )}
      </article>
    </dialog>
  );
}
