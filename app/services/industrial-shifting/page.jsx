import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Industrial Shifting",
  description: "Coordinated relocation for machinery, plant equipment and commercial or industrial goods.",
  heading: "Plan the move",
  headingAccent: "around your operation.",
  intro: "Industrial moves need careful preparation and coordination. Share the equipment, locations and schedule with KhushiCargo so we can discuss a suitable shifting plan.",
  benefitsHeading: "A plan built",
  benefitsAccent: "around your site.",
  benefitsIntro: "Start with the details that matter for your industrial relocation and build a plan around them.",
  benefits: [
    ["Understand the scope", "Review the equipment and site details before planning the move."],
    ["Coordinate the schedule", "Plan around access, timing and your operational requirements."],
    ["Move with a clear plan", "Keep collection, transportation and delivery details organized."],
  ],
  ctaTitle: "industrial shifting",
  ctaText: "Tell us about your equipment, locations and schedule to discuss your move.",
};

export const metadata = { title: "Industrial Shifting | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
