import { CtaBand, PageHero } from "../components/PageSections";
import ReviewSlider from "../components/ReviewSlider";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { sampleTestimonials, testimonials } from "./testimonial-list";

const reviews = testimonials.length > 0 ? testimonials : process.env.NODE_ENV === "development" ? sampleTestimonials : [];

export const metadata = {
  title: "Testimonials | KhushiCargo",
  description: "Read what customers say about moving with KhushiCargo Packers & Movers.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Testimonials"
          crumb="Testimonials"
          title={<>Kind words from<br /><em>people we’ve moved.</em></>}
          text="Hear from families and businesses who trusted KhushiCargo with their move."
        />

        <section className="service-benefits-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> What customers say</div>
                <h2>Your trust is <em>our identity.</em></h2>
              </div>
              <p lang="hi" className="review-motto">आपका विश्वास ही हमारी पहचान है</p>
            </div>

            {reviews.length > 0 ? (
              <ReviewSlider reviews={reviews} />
            ) : (
              <div className="review-empty">
                <span className="review-empty-mark" aria-hidden="true">“</span>
                <h3>Customer reviews are on their way.</h3>
                <p>Reviews from customers we’ve moved will appear here soon. In the meantime, call <a href="tel:+916262745451">+91 62627 45451</a> to talk to our team.</p>
              </div>
            )}
          </div>
        </section>

        <section className="section-pad">
          <div className="container service-detail-grid">
            <div>
              <div className="eyebrow"><span /> Share your experience</div>
              <h2>Moved with us?<br /><em>Tell us how it went.</em></h2>
            </div>
            <div className="service-detail-copy">
              <p>Your feedback helps us improve and helps other families choose with confidence. Give us a call and share a few words about your move.</p>
              <a className="button button-orange" href="tel:+916262745451">Call +91 62627 45451 <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <CtaBand title="move next" text="Tell us where you’re moving from and to, and we’ll help you plan the right services and timing." />
      </main>
      <SiteFooter />
    </>
  );
}
