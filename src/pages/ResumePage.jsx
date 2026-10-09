import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { useSeo } from "../hooks/useSeo.js";
import { learning, resumeSkills, site, works } from "../data/siteData.js";

export function ResumePage({ theme }) {
  useSeo("resume");

  return (
    <>
      <Header theme={theme} />
      <main
        id="main-content"
        className="document-page mx-auto min-h-screen w-[min(900px,calc(100%-2rem))]"
      >
        <div className="document-actions">
          <Link to="/" className="text-link">
            ← Back to portfolio
          </Link>
          <button className="btn btn-ghost" onClick={() => window.print()}>
            Print / save PDF <i className="bx bx-printer" aria-hidden="true" />
          </button>
        </div>
        <article className="glass rounded-lg p-4 sm:p-6 md:p-10">
          <header className="border-b border-[var(--border)] pb-8 text-center">
            <p className="document-eyebrow">
              THE SPIDER EDITION / DEVELOPER DOSSIER
            </p>
            <h1 className="resume-title display-font font-extrabold">
              {site.name}
            </h1>
            <p className="mt-3 text-base text-[var(--muted)] sm:text-lg">
              {site.role}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 break-words text-sm">
              <a
                href={`mailto:${site.email}`}
                className="font-bold text-[var(--accent)]"
              >
                {site.email}
              </a>
              <a
                href="https://github.com/hello-anil"
                className="font-bold text-[var(--accent)]"
              >
                github.com/hello-anil
              </a>
              <a href={site.domain} className="font-bold text-[var(--accent)]">
                anilprajapati1.com.np
              </a>
            </div>
          </header>

          <ResumeSection title="Profile">
            <p className="leading-7 text-[var(--muted)]">
              {site.profile}
            </p>
          </ResumeSection>

          <ResumeSection title="Core Skills">
            <ul className="space-y-2 text-[var(--muted)]">
              {resumeSkills.map((skill) => (
                <li key={skill} className="flex gap-3">
                  <i
                    className="bx bx-check-circle mt-0.5 text-lg text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="Project Experience">
            <div className="space-y-5">
              {works
                .filter((work) => work.resume)
                .map((work) => (
                  <article key={work.id}>
                    <h3 className="font-bold">{work.title}</h3>
                    <p className="mt-1 text-xs font-bold text-[var(--accent)]">
                      {work.tag}
                    </p>
                    <p className="mt-1 leading-7 text-[var(--muted)]">
                      {work.summary}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--muted)]">
                      {work.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <a
                      className="resume-repo-link"
                      href={work.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/hello-anil/{work.repoName}
                    </a>
                  </article>
                ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Learning Focus">
            <ul className="space-y-2 text-[var(--muted)]">
              {learning.map((item) => (
                <li key={item} className="flex gap-3">
                  <i
                    className="bx bx-certification mt-0.5 text-lg text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ResumeSection>
        </article>
      </main>
      <Footer />
    </>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="border-b border-[var(--border)] py-7 last:border-b-0">
      <h2 className="document-section-title display-font mb-4 text-2xl font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}
