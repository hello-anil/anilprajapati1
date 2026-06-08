import { Link } from 'react-router-dom';
import { SocialLinks } from '../components/SocialLinks.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { site } from '../data/siteData.js';

export function ThanksPage({ theme }) {
  useSeo('thanks');

  return (
    <main className="flex min-h-screen flex-col px-4 py-5 sm:py-8">
      <SocialLinks theme={theme} className="mb-8 justify-start sm:justify-end" />
      <section className="glass mx-auto grid w-full max-w-lg flex-1 place-content-center rounded-lg p-5 text-center sm:p-8">
        <img src={site.icon} alt="" width="64" height="64" className="mx-auto rounded-lg" />
        <h1 className="display-font mt-6 text-3xl font-extrabold sm:text-4xl">Message Sent</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Thank you for reaching out. I will review your message and reply as soon as possible.
        </p>
        <Link to="/" className="btn mt-6">
          Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
