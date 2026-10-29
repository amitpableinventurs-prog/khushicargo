import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Warehousing Services",
  description: "Flexible storage arrangements for belongings that need a safe place between moves or during a transition.",
  heading: "Room to pause",
  headingAccent: "between moves.",
  intro: "Sometimes your move-in date and move-out date do not line up. KhushiCargo can help arrange storage for household or commercial goods while you plan the next step.",
  benefitsHeading: "Storage that",
  benefitsAccent: "fits your plans.",
  benefitsIntro: "Tell us what you need to store and for how long, and we can discuss suitable arrangements.",
  benefits: [
    ["Short- or longer-term needs", "Discuss the storage duration that suits your move."],
    ["Household and business goods", "Tell us what you need to store so we can understand your requirements."],
    ["Storage with your move", "Coordinate warehousing alongside packing and transportation."],
  ],
  ctaTitle: "storage solutions",
  ctaText: "Share what you need to store and your expected timeline so we can discuss options.",
};

export const metadata = { title: "Warehousing Services | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
