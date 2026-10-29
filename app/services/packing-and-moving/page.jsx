import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Packing and Moving",
  description: "Professional packing and moving solutions using quality materials and expert handling for safer transportation.",
  heading: "Pack with care.",
  headingAccent: "Move with confidence.",
  intro: "A smooth move starts with careful preparation. KhushiCargo helps pack, organize and transport your belongings with a plan made around your home, timeline and destination.",
  benefitsHeading: "Care in every",
  benefitsAccent: "box.",
  benefitsIntro: "Choose the packing and moving support that fits your belongings, schedule and destination.",
  benefits: [
    ["Thoughtful packing", "Choose packing support for your whole home or just the items that need extra care."],
    ["Protected belongings", "Boxes and household goods are organized for careful handling throughout the move."],
    ["A coordinated move", "Keep packing, loading and delivery on one clear, easy-to-follow plan."],
  ],
  ctaTitle: "packing and moving",
  ctaText: "Tell us what you are moving and where it needs to go. We’ll help you plan the next steps.",
};

export const metadata = { title: "Packing and Moving | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
