import Link from "next/link";
import { serviceImage, services } from "../services/service-list";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export default function ServiceDetailPage({ service }) {
  const listing = services.find((item) => item.title === service.title);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="service-hero">
          <div className="service-hero-photo" style={listing ? { backgroundImage: `url(${serviceImage(listing)})`, backgroundPosition: listing.heroPosition } : undefined} />
          <div className="service-hero-shade" />
          <div className="container service-hero-content">
            <div className="eyebrow eyebrow-light"><span /> KhushiCargo services</div>
            <div className="service-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.title}</span></div>
            <h1>{service.title}<br /><em>made easier.</em></h1>
            <p>{service.description}</p>
            <Link className="button button-orange" href="/#quote">Ask for a quote <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="service-detail-section section-pad">
          <div className="container service-detail-grid">
            <div>
              <div className="eyebrow"><span /> A little more about the service</div>
              <h2>{service.heading}<br /><em>{service.headingAccent}</em></h2>
            </div>
            <div className="service-detail-copy">
              <p>{service.intro}</p>
              <Link className="text-link" href="/#quote">Talk to our moving team <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="service-benefits-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> How we can help</div>
                <h2>{service.benefitsHeading} <em>{service.benefitsAccent}</em></h2>
              </div>
              <p>{service.benefitsIntro}</p>
            </div>
            <div className="service-benefit-grid">
              {service.benefits.map(([title, text], index) => (
                <article className="service-benefit-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta-section">
          <div className="container service-cta-inner">
            <div>
              <div className="eyebrow eyebrow-light"><span /> Ready when you are</div>
              <h2>Let’s plan your<br /><em>{service.ctaTitle}.</em></h2>
            </div>
            <div className="service-cta-actions">
              <p>{service.ctaText}</p>
              <Link className="button button-orange" href="/#quote">Get a free quote <span aria-hidden="true">→</span></Link>
              <a className="service-phone-link" href="tel:+916262745451">Or call +91 62627 45451</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
