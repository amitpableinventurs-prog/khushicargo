import Link from "next/link";
import { CtaBand, PageHero } from "../components/PageSections";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { serviceImage, services } from "./service-list";

export const metadata = {
  title: "Our Services | KhushiCargo",
  description: "Packing and moving, household and office relocation, vehicle shifting, warehousing and more from KhushiCargo Packers & Movers.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="What we can do for you"
          crumb="Services"
          title={<>Every kind of move,<br /><em>one team.</em></>}
          text="From a few boxes to a whole office, choose the services that fit your move. We’ll help you plan the rest."
        />

        <section className="services-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> Our services</div>
                <h2>Good people. <em>Careful moves.</em></h2>
              </div>
              <p>Wherever life is taking you, we have the people and practical know-how to help you get there.</p>
            </div>
            <div className="service-photo-grid">
              {services.map((service) => (
                <Link className="service-photo-card" href={`/services/${service.slug}`} key={service.slug}>
                  <div className="service-photo">
                    <img src={serviceImage(service, "card")} alt="" width="720" height="480" loading="lazy" />
                    <span>{service.number}</span>
                  </div>
                  <div className="service-photo-body">
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                    <span className="service-photo-link">Learn more <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="move, your way" text="Not sure which services you need? Tell us about your move and we’ll help you choose." />
      </main>
      <SiteFooter />
    </>
  );
}
