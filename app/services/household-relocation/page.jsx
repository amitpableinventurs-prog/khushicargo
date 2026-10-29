import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Household Relocation",
  description: "Home shifting support for furniture, appliances, everyday essentials and the things that make a house yours.",
  heading: "A fresh start",
  headingAccent: "for your home.",
  intro: "Whether you are moving across Indore or to another city, KhushiCargo helps make your household move feel more manageable, from preparing your belongings to settling them at your new address.",
  benefitsHeading: "Home shifting,",
  benefitsAccent: "thoughtfully handled.",
  benefitsIntro: "We help you organize the details of your household relocation, from packing day to delivery.",
  benefits: [
    ["Room-by-room planning", "Organize packing and loading around the contents of your home."],
    ["Care for everyday items", "Give furniture, appliances and fragile belongings thoughtful handling."],
    ["Moves near and far", "Plan local and long-distance household relocation from one place."],
  ],
  ctaTitle: "household relocation",
  ctaText: "Tell us about your home, destination and moving date so we can help you get started.",
};

export const metadata = { title: "Household Relocation | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
