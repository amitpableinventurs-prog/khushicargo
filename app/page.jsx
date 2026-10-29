import Link from "next/link";
import QuoteForm from "./components/QuoteForm";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { services } from "./services/service-list";
import { asset } from "./asset-path";

const steps = [
  ["01", "Tell us about your move", "Share your locations, moving date and what you need moved."],
  ["02", "Get a clear plan", "Our team will help map out a timeline and the right services."],
  ["03", "Settle in with ease", "We take care of the details so you can focus on what comes next."],
];

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span /> Your move, in good hands</div>
            <h1>A fresh start<br />starts <em>here.</em></h1>
            <p>From a few treasured things to a whole new home, we make moving feel simple, considered and stress-free.</p>
            <div className="hero-actions">
              <a className="button button-orange" href="#quote">Plan your move <ArrowIcon /></a>
              <a className="text-link light-link" href="#services">Explore our services <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-note"><span className="note-check">✓</span> Proudly moving Indore and beyond</div>
          </div>
          <div className="hero-stamp" aria-label="Careful moves across India">
            <span>Moving you</span><strong>with care</strong><small>INDORE · INDIA</small>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div className="intro-visual">
            <div className="intro-image" role="img" aria-label="Moving boxes carefully prepared for a relocation" />
            <div className="image-caption"><span className="caption-dot" /> Every detail, handled with care</div>
            <div className="years-badge"><strong>K<span>C</span></strong><small>care in<br />every move</small></div>
          </div>
          <div className="intro-copy">
            <div className="eyebrow"><span /> A little about us</div>
            <h2>Moving is more than getting from <em>A to B.</em></h2>
            <p className="lead">It’s the beginning of something new. We’re here to make sure the journey there feels just as good.</p>
            <p>KhushiCargo brings careful planning and dependable service together for moves in Indore and across India. From the first conversation to the last box, we treat your belongings with the care they deserve.</p>
            <Link className="text-link" href="/about">Get to know our team <ArrowIcon diagonal /></Link>
            <div className="trust-row">
              <div><strong>Home</strong><small>relocation</small></div>
              <div><strong>Office</strong><small>shifting</small></div>
              <div><strong>All India</strong><small>transportation</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> What we can do for you</div>
              <h2>Good people. <em>Careful moves.</em></h2>
            </div>
            <p>Wherever life is taking you, we have the people and practical know-how to help you get there.</p>
          </div>
          <div className="service-tile-grid">
            {services.map((service) => (
              <Link className="service-tile" href={`/services/${service.slug}`} key={service.slug}>
                <img src={asset(`/images/home-services/${service.slug}.jpg`)} alt={service.title} width="372" height="479" loading="lazy" />
                <span className="service-tile-body">
                  <span>{service.shortDescription}</span>
                  <b>Learn more <ArrowIcon /></b>
                </span>
              </Link>
            ))}
          </div>
          <div className="service-footnote"><span>Not sure what you need?</span><a href="#quote">Tell us a little about your move <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="process-section section-pad" id="process">
        <div className="container">
          <div className="process-heading">
            <div className="eyebrow eyebrow-light"><span /> A move that makes sense</div>
            <h2>Three steps.<br /><em>One less thing to worry about.</em></h2>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <div className="step-rule" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="process-more"><Link className="text-link light-link" href="/how-it-works">See the full process <ArrowIcon diagonal /></Link></div>
        </div>
      </section>

      <section className="quote-section section-pad" id="quote">
        <div className="container quote-grid">
          <div className="quote-copy">
            <div className="eyebrow"><span /> Let’s get you moving</div>
            <h2>Your next chapter<br />is calling.</h2>
            <p>Tell us a bit about your plans. We’ll be in touch to help you figure out the next step — no pressure, just a helpful conversation.</p>
            <div className="quote-contact">
              <span className="phone-icon">☎</span>
              <div><small>Rather talk it through?</small><a href="tel:+916262745451">+91 62627 45451</a></div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <SiteFooter />
      <a className="mobile-call" href="tel:+916262745451" aria-label="Call KhushiCargo">☎ <span>Call us</span></a>
    </main>
  );
}
