import Link from "next/link";

export function PageHero({ eyebrow, crumb, title, text, children }) {
  return (
    <section className="service-hero">
      <div className="service-hero-photo brand-banner" />
      <div className="service-hero-shade" />
      <div className="container service-hero-content">
        <div className="eyebrow eyebrow-light"><span /> {eyebrow}</div>
        <div className="service-breadcrumb"><Link href="/">Home</Link><span>/</span><span>{crumb}</span></div>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}

export function CtaBand({ title, text }) {
  return (
    <section className="service-cta-section">
      <div className="container service-cta-inner">
        <div>
          <div className="eyebrow eyebrow-light"><span /> Ready when you are</div>
          <h2>Let’s plan your<br /><em>{title}.</em></h2>
        </div>
        <div className="service-cta-actions">
          <p>{text}</p>
          <Link className="button button-orange" href="/contact">Get a free quote <span aria-hidden="true">→</span></Link>
          <a className="service-phone-link" href="tel:+916262745451">Or call +91 62627 45451</a>
        </div>
      </div>
    </section>
  );
}
