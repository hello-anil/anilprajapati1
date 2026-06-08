import { Link } from 'react-router-dom';
import { SocialLinks } from '../components/SocialLinks.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { resumeSkills, site, timeline } from '../data/siteData.js';

export function ResumePage({ theme }) {
  useSeo('resume');

  return (
    <main className="mx-auto min-h-screen w-[min(900px,calc(100%-2rem))] py-5 sm:py-8">
      <SocialLinks theme={theme} className="mb-6 justify-start sm:mb-8 sm:justify-end" />
      <article className="glass rounded-lg p-4 sm:p-6 md:p-10">
        <header className="border-b border-[var(--border)] pb-8 text-center">
          <Link to="/" className="mb-6 inline-flex text-sm font-bold text-[var(--accent)] no-underline">
            Back to Portfolio
          </Link>
          <h1 className="resume-title display-font font-extrabold">{site.name}</h1>
          <p className="mt-3 text-base text-[var(--muted)] sm:text-lg">Web Developer & IT Support Specialist</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 break-words text-sm">
            <a href={`mailto:${site.email}`} className="font-bold text-[var(--accent)]">
              {site.email}
            </a>
            <a href="https://github.com/hello-anil" className="font-bold text-[var(--accent)]">
              github.com/hello-anil
            </a>
            <a href={site.domain} className="font-bold text-[var(--accent)]">
              anilprajapati1.com.np
            </a>
          </div>
        </header>

        <ResumeSection title="Profile">
          <p className="leading-7 text-[var(--muted)]">
            Practical web and IT learner focused on responsive websites, troubleshooting, network basics, and cybersecurity awareness.
          </p>
        </ResumeSection>

        <ResumeSection title="Core Skills">
          <ul className="space-y-2 text-[var(--muted)]">
            {resumeSkills.map((skill) => (
              <li key={skill} className="flex gap-3">
                <i className="bx bx-check-circle mt-0.5 text-lg text-[var(--accent)]" aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Project Experience">
          <div className="space-y-5">
            <article>
              <h3 className="font-bold">Personal Portfolio Website</h3>
              <p className="mt-1 leading-7 text-[var(--muted)]">
                Built and deployed a responsive portfolio with dark mode, mobile navigation, SEO metadata, and project cards.
              </p>
            </article>
            <article>
              <h3 className="font-bold">Responsive UI Practice</h3>
              <p className="mt-1 leading-7 text-[var(--muted)]">
                Designed card layouts, service sections, and accessible content structures for mobile and desktop.
              </p>
            </article>
          </div>
        </ResumeSection>

        <ResumeSection title="Learning Focus">
          <ul className="space-y-2 text-[var(--muted)]">
            {timeline.map((item) => (
              <li key={item.title} className="flex gap-3">
                <i className="bx bx-certification mt-0.5 text-lg text-[var(--accent)]" aria-hidden="true" />
                <span>{item.title}</span>
              </li>
            ))}
            <li className="flex gap-3">
              <i className="bx bx-certification mt-0.5 text-lg text-[var(--accent)]" aria-hidden="true" />
              <span>Professional support communication</span>
            </li>
          </ul>
        </ResumeSection>
      </article>
    </main>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="border-b border-[var(--border)] py-7 last:border-b-0">
      <h2 className="display-font mb-4 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
