import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CinematicEffects } from "../components/CinematicEffects.jsx";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { ProjectModal } from "../components/ProjectModal.jsx";
import { ProjectReferences } from "../components/ProjectReferences.jsx";
import { SocialLinks } from "../components/SocialLinks.jsx";
import { SpiderMark } from "../components/SpiderMark.jsx";
import { useSeo } from "../hooks/useSeo.js";
import {
  learning,
  services,
  site,
  skills,
  skillTags,
  timeline,
  works,
} from "../data/siteData.js";

function SectionTitle({ number, eyebrow, children, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </p>
        <h2>{children}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Home() {
  return (
    <section id="home" className="hero-section shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">
            HEY, I'M ANIL PRAJAPATI <span>↗</span>
          </p>
          <h1>
            YOUR FRIENDLY
            <br />
            NEIGHBORHOOD
            <br />
            <span className="red-text">WEB</span> DEVELOPER
            <span className="red-text">.</span>
          </h1>
          <p className="hero-description">
            Turning ideas into amazing digital experiences.
            <br className="desktop-break" /> A little creativity. A lot of code.
            Great responsibility.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn">
              Explore my work{" "}
              <i className="bx bx-right-arrow-alt" aria-hidden="true" />
            </a>
            <a href="#contact" className="text-link">
              Let's talk <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <SocialLinks />
            <span>
              WEB APPLICATIONS
              <br />
              <b>& BROWSER EXTENSIONS</b>
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-topline">
            <SpiderMark />
            <span>
              THE AMAZING
              <br />
              <strong>SPIDER EDITION</strong>
            </span>
            <span className="art-issue">#01</span>
          </div>
          <div className="art-orbit" />
          <div className="art-halftone" />
          <svg
            className="hero-web"
            viewBox="0 0 500 600"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="currentColor" strokeWidth="1">
              <path d="M480 0 0 600M480 0 0 300M480 0 230 600M480 0 0 100M480 0 410 600M480 0 500 600" />
              <path d="M405 47Q432 69 450 78Q469 70 483 72M330 94Q380 138 420 156Q460 140 487 144M255 141Q330 206 390 234Q450 210 490 216M180 188Q280 275 360 312Q440 280 493 288M105 235Q230 344 330 390Q430 350 496 360M30 282Q180 413 300 468Q420 420 499 432" />
            </g>
          </svg>
          <img
            className="classic-spider"
            src="/assets/img/spiderman-classic.png"
            alt="Classic Spider-Man in his red-and-blue suit swinging into action"
            width="840"
            height="1051"
            fetchPriority="high"
          />
          <div className="comic-sticker">
            WITH GREAT CODE
            <br />
            <strong>
              COMES GREAT
              <br />
              RESPONSIBILITY.
            </strong>
          </div>
          <div className="art-caption">
            <span>CREATIVE BY DAY. CODER BY NIGHT.</span>
            <span>✦</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#work">
          <span className="scroll-icon">↓</span> SCROLL TO DISCOVER
        </a>
        <span>BUILT WITH PURPOSE. INSPIRED BY A HERO.</span>
      </div>
    </section>
  );
}

function Work({ onDetails }) {
  const [filter, setFilter] = useState("All missions");
  const categories = [
    "All missions",
    ...new Set(works.map((work) => work.category)),
  ];
  const visibleWorks = works.filter(
    (work) => filter === "All missions" || work.category === filter,
  );
  return (
    <section className="section-shell" id="work">
      <SectionTitle
        number="01"
        eyebrow="THE MISSION ARCHIVE"
        description="Real projects from my GitHub. Explore the code, interfaces, and ideas behind each mission."
      >
        SELECTED <span className="outline-text">MISSIONS.</span>
      </SectionTitle>
      <div className="project-filters" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={filter === category ? "active" : ""}
          >
            {category}
            {category === "All missions" && (
              <span>{String(works.length).padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <div className="work-grid">
        {visibleWorks.map((work) => (
          <article key={work.id} className="project-card">
            <button
              className={`project-image project-image-${work.id}`}
              onClick={() => onDetails(work.id)}
              aria-label={`View ${work.title}`}
            >
              {work.image ? (
                <img
                  src={work.image}
                  alt={work.alt}
                  width="640"
                  height="426"
                  loading="lazy"
                />
              ) : (
                <div className={`repo-cover repo-cover-${work.id}`}>
                  <i className={`bx ${work.icon}`} aria-hidden="true" />
                  <strong>{work.coverTitle}</strong>
                  <span>{work.coverSubtitle}</span>
                </div>
              )}
              <span className="project-number">
                MISSION / 0{works.indexOf(work) + 1}
              </span>
              <span className="project-image-arrow">↗</span>
              <span className="project-status">{work.status}</span>
            </button>
            <div className="project-info">
              <p className="eyebrow">{work.tag}</p>
              <div>
                <h3>
                  <button onClick={() => onDetails(work.id)}>
                    {work.title}
                  </button>
                </h3>
                <button
                  className="project-open"
                  aria-label={`Details for ${work.title}`}
                  onClick={() => onDetails(work.id)}
                >
                  ↗
                </button>
              </div>
              <p className="project-summary">{work.summary}</p>
              <div className="project-links">
                <a
                  href={work.repository}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${work.repoName} repository`}
                >
                  View code <span aria-hidden="true">↗</span>
                </a>
                {work.liveUrl && (
                  <a href={work.liveUrl} target="_blank" rel="noreferrer">
                    {work.liveLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        className="text-link archive-link"
        href="https://github.com/hello-anil?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        Explore all my GitHub repositories <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-shell about-grid">
        <div className="portrait-panel">
          <img
            src="/assets/img/anil-spider-portrait.png"
            alt="Anil Prajapati in a Spider-Man suit holding the mask"
            width="1024"
            height="1001"
            loading="lazy"
          />
          <span className="portrait-label">THE PERSON BEHIND THE MASK</span>
          <span className="portrait-stamp">
            ANIL
            <br />
            PRAJAPATI ↗
          </span>
        </div>
        <div>
          <SectionTitle number="02" eyebrow="THE ORIGIN STORY">
            A DEVELOPER.
            <br />A PROBLEM SOLVER.
            <br />
            <span className="red-text">YOUR TECH ALLY.</span>
          </SectionTitle>
          <p className="body-copy">
            I'm Anil Prajapati. I build responsive portfolios, PHP/MySQL
            applications, and browser extensions. From AdLock's local protection
            controls to FOOD-SEWA's ordering workflows and V-Shiksha's education
            platform, my projects combine interface design with application logic.
          </p>
          <p className="body-copy">
            Like my favorite neighborhood hero, I believe the small things
            matter: a faster page, a clearer interface, or simply helping
            someone get back on track.
          </p>
          <div className="about-values">
            <span>
              <i className="bx bx-check-circle" aria-hidden="true" /> Responsive
              by design
            </span>
            <span>
              <i className="bx bx-check-circle" aria-hidden="true" /> Built with
              care
            </span>
            <span>
              <i className="bx bx-check-circle" aria-hidden="true" /> Always
              learning
            </span>
          </div>
          <Link to="/resume" className="text-link">
            Get to know me <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-shell" id="services">
      <SectionTitle
        number="03"
        eyebrow="YOUR FRIENDLY NEIGHBORHOOD SERVICES"
        description="Practical development experience from AdLock, V-Shiksha, FOOD-SEWA, and this portfolio."
      >
        MY <span className="outline-text">SUPERPOWERS.</span>
      </SectionTitle>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-top">
              <i className={`bx ${service.icon}`} aria-hidden="true" />
              <span>0{index + 1}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ProjectReferences projectIds={service.projectIds} />
            <a href="#contact" className="text-link">
              Let's make it happen <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell skills-section" id="skills">
      <div>
        <SectionTitle number="04" eyebrow="THE UTILITY BELT">
          TOOLS OF
          <br />
          <span className="red-text">THE TRADE.</span>
        </SectionTitle>
        <p className="body-copy">
          The tools I've used to build these projects: React and Vite for this
          portfolio, PHP and MySQL for application workflows, and JavaScript
          browser APIs for AdLock.
        </p>
        <div className="skill-tags">
          {skillTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <div className="skill-heading">
              <i className={`bx ${skill.icon}`} aria-hidden="true" />
              <span>{skill.name}</span>
            </div>
            <p className="skill-description">{skill.detail}</p>
            <ProjectReferences projectIds={skill.projectIds} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumePreview() {
  return (
    <section className="section-shell" id="resume">
      <SectionTitle
        number="05"
        eyebrow="CHARACTER DEVELOPMENT"
        description="Experience built through real projects. Each mission adds a new tool to the belt."
      >
        ALWAYS <span className="outline-text">LEVELING UP.</span>
      </SectionTitle>
      <div className="resume-grid">
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title}>
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="timeline-description">{item.text}</p>
              <ProjectReferences projectIds={item.projectIds} />
            </article>
          ))}
        </div>
        <div className="learning-panel">
          <SpiderMark />
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h3>Learning never stops.</h3>
          <ul>
            {learning.map((item) => (
              <li key={item}>
                <span>↗</span>
                {item}
              </li>
            ))}
          </ul>
          <Link className="btn btn-ghost" to="/resume">
            Read the full résumé <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const resetSubmission = () => {
      setIsSubmitting(false);
      setStatus("");
    };
    window.addEventListener("pageshow", resetSubmission);
    return () => window.removeEventListener("pageshow", resetSubmission);
  }, []);

  const onSubmit = (event) => {
    if (isSubmitting) {
      event.preventDefault();
      return;
    }

    const form = event.currentTarget;
    for (const fieldName of ["name", "email", "message"]) {
      const field = form.elements.namedItem(fieldName);
      field.value = field.value.trim();
    }
    if (!form.reportValidity()) {
      event.preventDefault();
      setStatus("Please complete your name, email, and message before sending.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Opening verification. Complete the check to send your message.");
    // Let the browser POST to FormSubmit so its verification and error pages work.
  };
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div>
          <p className="eyebrow">
            <span>06 /</span> SEND A SIGNAL
          </p>
          <h2>
            GOT AN IDEA?
            <br />
            <span>
              LET'S MAKE
              <br />
              IT AMAZING.
            </span>
          </h2>
          <p>
            Have a project in mind or need a hand with tech?
            <br />
            My inbox is your friendly neighborhood away.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email} ↗
          </a>
          <p className="contact-note">
            <span className="live-dot" /> OPEN TO PROJECTS & COLLABORATIONS
          </p>
        </div>
        <form
          className="contact-form"
          action={`https://formsubmit.co/${site.email}`}
          method="POST"
          onSubmit={onSubmit}
          onInput={() => setStatus("")}
          aria-busy={isSubmitting}
        >
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/thanks?submitted=1`}
          />
          <input
            type="hidden"
            name="_subject"
            value="New portfolio contact — Anil Prajapati"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="_honey"
            className="contact-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="form-row">
            <label htmlFor="name">
              Your name
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Peter Parker"
                required
                maxLength="120"
              />
            </label>
            <label htmlFor="email">
              Your email
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="peter@example.com"
                required
              />
            </label>
          </div>
          <label htmlFor="message">
            What's the mission?
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              maxLength="5000"
            />
          </label>
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send a signal"}{" "}
            <i className="bx bx-right-arrow-alt" aria-hidden="true" />
          </button>
          <p className="form-note">
            Complete the verification check to send your message.
          </p>
          <p role="status" className="form-status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

export function HomePage({ theme }) {
  const [activeProject, setActiveProject] = useState(null);
  const closeProject = useCallback(() => setActiveProject(null), []);
  const location = useLocation();
  useSeo("home");
  useEffect(() => {
    if (location.hash)
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, [location.hash]);
  return (
    <>
      <CinematicEffects />
      <Header theme={theme} />
      <main id="main-content">
        <Home />
        <div className="edition-band-shell" aria-hidden="true">
          <div className="edition-band">
            <div>
              CREATIVITY <SpiderMark /> CODE <SpiderMark /> GREAT RESPONSIBILITY{" "}
              <SpiderMark /> CREATIVITY <SpiderMark /> CODE <SpiderMark /> GREAT
              RESPONSIBILITY <SpiderMark />
            </div>
          </div>
        </div>
        <Work onDetails={setActiveProject} />
        <About />
        <Services />
        <Skills />
        <ResumePreview />
        <Contact />
      </main>
      <ProjectModal projectId={activeProject} onClose={closeProject} />
      <Footer />
    </>
  );
}
