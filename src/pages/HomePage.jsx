import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CinematicEffects } from '../components/CinematicEffects.jsx';
import { Footer } from '../components/Footer.jsx';
import { Header } from '../components/Header.jsx';
import { ProjectModal } from '../components/ProjectModal.jsx';
import { SocialLinks } from '../components/SocialLinks.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { learning, services, site, skills, timeline, works } from '../data/siteData.js';

function SectionTitle({ children }) {
  return <h2 className="section-title reveal-item">{children}</h2>;
}

function Home({ theme }) {
  const scrollToContact = (event) => {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#contact');
  };

  return (
    <section id="home" className="hero-section mx-auto grid w-[min(1120px,calc(100%-2rem))] items-center gap-8 pt-28 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)_auto]">
      <div className="reveal-item max-w-4xl">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[.2em] text-[var(--accent)] sm:mb-5 sm:text-sm sm:tracking-[.24em]">Web development & IT support</p>
        <h1 className="hero-title hero-name display-font font-extrabold leading-[.9] tracking-normal sm:leading-[.88]">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:mt-8 sm:text-lg sm:leading-8">
          I build responsive websites and provide practical IT support for setup, troubleshooting, maintenance, and security-aware workflows.
        </p>
        <div className="hero-actions mt-7 flex flex-wrap gap-3 sm:mt-8">
          <a href="#contact" onClick={scrollToContact} className="btn">
            <i className="bx bx-send" aria-hidden="true" />
            Start a project
          </a>
          <Link to="/resume" className="btn btn-ghost">
            <i className="bx bx-file" aria-hidden="true" />
            View Resume
          </Link>
        </div>
      </div>
      <div className="reveal-item glass mx-auto w-full max-w-xs overflow-hidden rounded-lg p-3 sm:max-w-sm lg:max-w-none">
        <img
          src={site.image}
          alt="Anil Prajapati"
          width="499"
          height="499"
          decoding="async"
          fetchPriority="high"
          className="aspect-square w-full rounded-md object-cover"
        />
      </div>
      <SocialLinks theme={theme} className="hero-social reveal-item lg:flex-col lg:items-stretch" />
    </section>
  );
}

function About() {
  return (
    <section className="section-shell" id="about">
      <SectionTitle>About</SectionTitle>
      <div className="about-copy reveal-item mx-auto max-w-3xl text-center">
        <h2 className="display-font text-3xl font-bold sm:text-4xl">I am Anil Prajapati</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            I build clean interfaces, troubleshoot technical issues, and apply security basics to everyday digital work.
        </p>
        <ul className="about-list mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
          {['Responsive web layouts', 'Clear IT troubleshooting', 'Security-aware decisions'].map((item) => (
            <li key={item} className="glass flex min-h-24 items-center justify-center gap-3 rounded-lg px-4 py-5 text-center font-semibold">
              <i className="bx bx-check-circle text-xl text-[var(--accent)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-shell" id="services">
      <SectionTitle>Services</SectionTitle>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="reveal-item glass rounded-lg p-6">
            <i className={`bx ${service.icon} text-4xl text-[var(--accent)]`} aria-hidden="true" />
            <h3 className="display-font mt-5 text-xl font-bold">{service.title}</h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
        <div className="reveal-item">
          <h2 className="display-font text-3xl font-bold">Professional Skills</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">Focused on practical front-end, support, and security fundamentals.</p>
          <div className="mt-6 space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="glass rounded-lg p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 font-bold">
                    <i className={`bx ${skill.icon} text-2xl text-[var(--accent)]`} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-[var(--muted)]">{skill.percent}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
                  <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/assets/img/work3.jpg"
          alt="Laptop workspace with development tools"
          width="640"
          height="426"
          loading="lazy"
          decoding="async"
          className="reveal-item glass aspect-[3/2] w-full rounded-lg object-cover p-2"
        />
      </div>
    </section>
  );
}

function Work({ onDetails }) {
  return (
    <section className="section-shell" id="work">
      <SectionTitle>Work</SectionTitle>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <article key={work.id} className="reveal-item glass group overflow-hidden rounded-lg">
            <img src={work.image} alt={work.alt} width="640" height="426" loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="p-4 sm:p-5">
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[var(--accent)]">{work.tag}</p>
              <h3 className="display-font mt-3 text-xl font-bold">{work.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:min-h-12">{work.summary}</p>
              <button type="button" className="btn btn-ghost mt-5 px-4 py-2 text-sm" onClick={() => onDetails(work.id)}>
                Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResumePreview() {
  return (
    <section className="section-shell" id="resume">
      <SectionTitle>Resume</SectionTitle>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="reveal-item glass rounded-lg p-6">
          <h3 className="display-font text-2xl font-bold">Experience Focus</h3>
          <div className="mt-6 space-y-5">
            {timeline.map((item) => (
              <article key={item.title} className="border-l-2 border-[var(--accent)] pl-4">
                <span className="text-xs font-extrabold uppercase tracking-[.18em] text-[var(--accent)]">{item.label}</span>
                <h4 className="mt-1 font-bold">{item.title}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="reveal-item glass rounded-lg p-6">
          <h3 className="display-font text-2xl font-bold">Certifications & Learning</h3>
          <ul className="mt-6 space-y-3">
            {learning.map((item) => (
              <li key={item} className="flex gap-3 text-[var(--muted)]">
                <i className="bx bx-certification mt-0.5 text-xl text-[var(--accent)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/resume" className="btn mt-6">
            Open Full Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    setStatus('Opening your email app. You can also use the direct email link.');
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-shell" id="contact">
      <SectionTitle>Contact</SectionTitle>
      <form className="reveal-item glass mx-auto grid max-w-2xl gap-4 rounded-lg p-5" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input id="name" type="text" name="name" placeholder="Name" autoComplete="name" required className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--accent)]" />
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input id="email" type="email" name="email" placeholder="Email" autoComplete="email" required className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--accent)]" />
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows="8" placeholder="Message" required className="resize-y rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--accent)]" />
        <button type="submit" className="btn justify-self-start">
          <i className="bx bx-envelope" aria-hidden="true" />
          Email Me
        </button>
        <p className="text-sm text-[var(--muted)]">
          Direct email:{' '}
          <a href={`mailto:${site.email}`} className="font-bold text-[var(--accent)]">
            {site.email}
          </a>
        </p>
        <p className="min-h-6 text-sm text-[var(--muted)]" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}

export function HomePage({ theme }) {
  const [activeProject, setActiveProject] = useState(null);
  useSeo('home');

  return (
    <>
      <CinematicEffects />
      <Header />
      <main>
        <Home theme={theme} />
        <About />
        <Services />
        <Skills />
        <Work onDetails={setActiveProject} />
        <ResumePreview />
        <Contact />
      </main>
      <ProjectModal projectId={activeProject} onClose={() => setActiveProject(null)} />
      <Footer />
    </>
  );
}
