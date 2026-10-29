import Link from "next/link";
import { PageHero } from "../components/PageSections";
import QuoteForm from "../components/QuoteForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { phones } from "../contact-info";

const address = "Plot No. 29 EA, Scheme No. 94, Indore, Madhya Pradesh 452010";
const mapQuery = encodeURIComponent(address);

const serviceStates = [
  ["MP", "Madhya Pradesh", "Indore · Bhopal · Jabalpur · Gwalior · Ujjain", "Head office · Indore"],
  ["CG", "Chhattisgarh", "Raipur · Bhilai · Durg · Bilaspur · Korba"],
  ["OD", "Odisha", "Bhubaneswar · Cuttack · Rourkela · Sambalpur · Puri"],
  ["AP", "Andhra Pradesh", "Visakhapatnam · Vijayawada · Guntur · Tirupati · Nellore"],
  ["TG", "Telangana", "Hyderabad · Secunderabad · Warangal · Karimnagar · Nizamabad"],
  ["KA", "Karnataka", "Bengaluru · Mysuru · Hubballi · Mangaluru · Belagavi"],
];

export const metadata = {
  title: "Contact Us | KhushiCargo",
  description: "Call KhushiCargo on +91 62627 45451 or send your move details to plan a home, office or vehicle move from Indore and across India.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Get in touch"
          crumb="Contact"
          title={<>Let’s talk about<br /><em>your move.</em></>}
          text="Tell us a bit about your plans. We’ll help you figure out the next step, no pressure, just a helpful conversation."
        />

        <section className="section-pad" id="quote">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="eyebrow"><span /> Reach us directly</div>
              <h2>We’re just a<br /><em>call away.</em></h2>
              <p>Prefer to talk it through? Call us, visit our Indore office, or send your move details using the form.</p>
              <div className="contact-cards">
                <div className="contact-card contact-phones">
                  <span className="contact-icon" aria-hidden="true">☎</span>
                  <span>
                    <small>Call us</small>
                    {phones.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`}>
                        <strong>{phone.display}</strong>{phone.label && <em>{phone.label}</em>}
                      </a>
                    ))}
                  </span>
                </div>
                <a className="contact-card" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon" aria-hidden="true">⌂</span>
                  <span><small>Visit our office</small><strong>Plot No. 29 EA, Scheme No. 94<br />Indore, Madhya Pradesh 452010</strong></span>
                  <i aria-hidden="true">↗</i>
                </a>
                <a className="contact-card" href="#service-area">
                  <span className="contact-icon" aria-hidden="true">◎</span>
                  <span><small>Service area</small><strong>6 states &amp; All India</strong></span>
                  <i aria-hidden="true">↓</i>
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="services-section section-pad" id="service-area">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> Service area</div>
                <h2>Six states. <em>All of India.</em></h2>
              </div>
              <p>From our head office in Indore, we plan home, office and vehicle moves across these states and anywhere else in India.</p>
            </div>
            <div className="area-grid">
              {serviceStates.map(([code, state, cities, tag]) => (
                <Link className="area-card" href="/cities" key={code}>
                  <span className="area-code" aria-hidden="true">{code}</span>
                  <h3>{state}</h3>
                  <p>{cities}</p>
                  {tag && <small>{tag}</small>}
                </Link>
              ))}
              <Link className="area-card all-india" href="/cities">
                <span className="area-code" aria-hidden="true">IN</span>
                <h3>All India</h3>
                <p>Moving somewhere else? We help with moves to and from every state and union territory.</p>
                <b>See all cities we serve <span aria-hidden="true">→</span></b>
              </Link>
            </div>
          </div>
        </section>

        <section className="contact-map">
          <iframe
            title="KhushiCargo office location on Google Maps"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
