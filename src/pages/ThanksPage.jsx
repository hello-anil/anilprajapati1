import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { SpiderMark } from "../components/SpiderMark.jsx";
import { useSeo } from "../hooks/useSeo.js";

export function ThanksPage({ theme }) {
  useSeo("thanks");

  return (
    <>
      <Header theme={theme} />
      <main id="main-content" className="document-page shell flex flex-col">
        <section className="thanks-card glass mx-auto grid w-full max-w-lg place-content-center p-5 text-center sm:p-8">
          <SpiderMark className="thanks-mark" />
          <h1 className="display-font mt-6 text-4xl font-extrabold sm:text-5xl">
            THANKS FOR THE SIGNAL.
          </h1>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Your next great mission starts with a conversation. If you used the
            contact form, send the draft from your email app to complete your
            message.
          </p>
          <Link to="/" className="btn mt-6">
            Back to Portfolio
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
