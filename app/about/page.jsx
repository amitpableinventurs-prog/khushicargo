import Link from "next/link";
import { CtaBand, PageHero } from "../components/PageSections";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { services } from "../services/service-list";
import { asset } from "../asset-path";

const values = [
  ["Careful handling", "Your belongings are packed and moved with the attention we’d want for our own home."],
  ["Clear planning", "We talk through locations, dates and services first, so moving day has no surprises."],
  ["Easy to reach", "One phone call connects you with the team planning your move, from first question to last box."],
];

export const metadata = {
  title: "About Us | KhushiCargo",
  description: "KhushiCargo is an Indore-based packers and movers company helping with home, office and vehicle moves across India.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About KhushiCargo"
          crumb="About us"
          title={<>Moving is more<br />than <em>A to B.</em></>}
          text="It’s the beginning of something new. We’re here to make sure the journey there feels just as good."
        />

        <section className="section-pad">
          <div className="container intro-grid">
            <div className="intro-visual">
              <div className="intro-image intro-logo"><img src={asset("/images/kcs-logo.jpg")} alt="KCS Transport, Packers and Movers logo" width="640" height="640" /></div>
              <div className="image-caption"><span className="caption-dot" /> Every detail, handled with care</div>
              <div className="years-badge"><strong>K<span>C</span></strong><small>care in<br />every move</small></div>
            </div>
            <div className="intro-copy">
              <div className="eyebrow"><span /> Our story</div>
              <h2>Good people. <em>Careful moves.</em></h2>
              <p className="lead">KhushiCargo Packers &amp; Movers is based in Indore, Madhya Pradesh, and helps families and businesses move across India.</p>
              <p>From a single room to a whole office, we bring careful packing, dependable transport and practical planning together. Whether you’re shifting within Indore or to another state, we treat your belongings with the care they deserve.</p>
              <div className="trust-row">
                <div><strong>Home</strong><small>relocation</small></div>
                <div><strong>Office</strong><small>shifting</small></div>
                <div><strong>All India</strong><small>transportation</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="motto-band">
          <div className="container motto-inner">
            <span className="motto-mark" aria-hidden="true">“</span>
            <p className="motto-hindi" lang="hi">आपका विश्वास ही हमारी पहचान है</p>
            <p className="motto-english">Your trust is our identity.</p>
          </div>
        </section>

        <section className="service-benefits-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> What we stand for</div>
                <h2>The way we <em>like to move.</em></h2>
              </div>
              <p>A few simple promises guide every move we plan, big or small.</p>
            </div>
            <div className="service-benefit-grid">
              {values.map(([title, text], index) => (
                <article className="service-benefit-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> What we can do for you</div>
                <h2>Every kind of move, <em>one team.</em></h2>
              </div>
              <p>Moving to another city? See the <Link className="inline-link" href="/cities">cities we serve</Link> across India.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-number">{service.number}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} aria-label={`Learn about ${service.title}`}><span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="move together" text="Tell us where you’re moving from and to, and we’ll help you plan the right services and timing." />
      </main>
      <SiteFooter />
    </>
  );
}
