import Link from "next/link";
import { CtaBand, PageHero } from "../components/PageSections";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const steps = [
  {
    title: "Tell us about your move",
    text: "Call us or fill in the quote form. A short conversation is all it takes to get started.",
    you: ["Share your pickup and drop locations", "Pick a moving date or timeframe", "Tell us what needs to be moved"],
    we: ["Listen and ask the right questions", "Suggest the services that fit your move", "Answer anything you’re unsure about"],
  },
  {
    title: "Get a clear plan",
    text: "We map out how your move will come together, so you know what to expect before moving day.",
    you: ["Review the plan and quote", "Confirm your moving date", "Ask about storage or transit insurance if you need it"],
    we: ["Plan the packing, vehicle and timeline", "Arrange any warehousing or vehicle shifting", "Keep you updated as the date gets closer"],
  },
  {
    title: "Settle in with ease",
    text: "On moving day we take care of the heavy lifting, so you can focus on what comes next.",
    you: ["Keep documents and valuables with you", "Point out fragile or high-value items", "Check your belongings at the new place"],
    we: ["Pack with quality materials", "Load, transport and unload with care", "Place items where you want them"],
  },
];

const checklist = [
  ["Two weeks before", ["Confirm your moving date with us", "Sort what to keep, sell or donate", "Start packing things you rarely use", "Use up frozen food and perishables"]],
  ["A few days before", ["Pack a bag of daily essentials", "Keep documents and jewellery separate", "Defrost and dry the refrigerator", "Note your electricity and water meter readings"]],
  ["On moving day", ["Keep your phone charged and reachable", "Walk through each room with our team", "Point out fragile items before loading", "Check every room and cupboard before leaving"]],
];

const faqs = [
  ["How do I get a quote for my move?", <>Call <a href="tel:+916262745451">+91 62627 45451</a> or fill in the form on our <Link href="/contact">contact page</Link> with your locations, moving date and what you need moved. We’ll get back to you to talk through the details.</>],
  ["Which cities do you move to and from?", <>We’re based in Indore and help with moves across India. See the full list on our <Link href="/cities">cities page</Link>. If your town isn’t listed, give us a call.</>],
  ["Can you move my car or bike too?", <>Yes. Our <Link href="/services/vehicle-shifting">vehicle shifting</Link> service covers car and two-wheeler transportation, arranged around your route and moving plans.</>],
  ["What if I need to store some things?", <>Our <Link href="/services/warehousing-services">warehousing services</Link> offer flexible storage for belongings that need a safe place between moves or during a transition.</>],
  ["Is transit insurance available?", <>Ask us about <Link href="/services/insurance-services">transit insurance options</Link> while planning your move for additional protection for your goods.</>],
  ["Do you shift offices and industrial equipment?", <>Yes. We handle <Link href="/services/office-shifting">office shifting</Link> as well as <Link href="/services/industrial-shifting">industrial shifting</Link> for machinery and commercial goods.</>],
];

export const metadata = {
  title: "How It Works | KhushiCargo",
  description: "See how a KhushiCargo move comes together, from the first call to settling into your new place.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="A move that makes sense"
          crumb="How it works"
          title={<>Three steps.<br /><em>One less worry.</em></>}
          text="Here’s exactly how your move comes together, what you’ll do and what we’ll take care of at every stage."
        />

        <section className="section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> Step by step</div>
                <h2>Your move, <em>start to finish.</em></h2>
              </div>
              <p>Every move is a little different, but the way we work stays the same: clear, careful and easy to follow.</p>
            </div>
            <ol className="journey">
              {steps.map((step, index) => (
                <li className="journey-step" key={step.title}>
                  <div className="journey-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="journey-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <div className="journey-split">
                      <div>
                        <h4>What you do</h4>
                        <ul>{step.you.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                      <div className="journey-we">
                        <h4>What we do</h4>
                        <ul>{step.we.map((item) => <li key={item}>{item}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-benefits-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow"><span /> Get ready</div>
                <h2>A simple <em>moving checklist.</em></h2>
              </div>
              <p>A few small steps before the big day make everything go more smoothly.</p>
            </div>
            <div className="checklist-grid">
              {checklist.map(([title, items]) => (
                <article className="checklist-card" key={title}>
                  <h3>{title}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container faq-grid">
            <div className="faq-intro">
              <div className="eyebrow"><span /> Good to know</div>
              <h2>Questions, <em>answered.</em></h2>
              <p>Can’t find what you’re looking for? Call <a href="tel:+916262745451">+91 62627 45451</a> and we’ll be happy to help.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="move, step by step" text="Share your locations, moving date and requirements, and we’ll take it from there." />
      </main>
      <SiteFooter />
    </>
  );
}
