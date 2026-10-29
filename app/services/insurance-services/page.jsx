import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Insurance Services",
  description: "Ask about transit insurance options for additional protection for your goods during relocation.",
  heading: "Move with",
  headingAccent: "added peace of mind.",
  intro: "For added peace of mind during transit, ask KhushiCargo about insurance options for your move. We can discuss the available arrangements and what details are needed for a quote.",
  benefitsHeading: "Understand your",
  benefitsAccent: "available options.",
  benefitsIntro: "Insurance requirements can vary. Discuss the applicable details with our team before your move.",
  benefits: [
    ["Discuss your requirements", "Tell us what is being moved and where it is going."],
    ["Understand available options", "Ask about applicable cover, terms and documentation before your move."],
    ["Include it in your planning", "Discuss insurance along with your packing and transportation quote."],
  ],
  ctaTitle: "insurance options",
  ctaText: "Contact us to discuss available transit insurance arrangements for your move.",
};

export const metadata = { title: "Insurance Services | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
