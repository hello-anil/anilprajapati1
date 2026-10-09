import { projectDetails } from "../data/projects.js";

export function ProjectReferences({ projectIds }) {
  return (
    <ul className="project-references" aria-label="Related projects">
      {projectIds.map((id) => {
        const project = projectDetails[id];
        return (
          <li key={id}>
            <a href={project.repository} target="_blank" rel="noreferrer">
              {project.shortTitle} <span aria-hidden="true">↗</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
