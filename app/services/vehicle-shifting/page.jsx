import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Vehicle Shifting",
  description: "Convenient car and two-wheeler transportation arranged around your route and moving plans.",
  heading: "Your vehicle,",
  headingAccent: "on its way.",
  intro: "Taking your vehicle to a new city? KhushiCargo can help coordinate vehicle transportation as part of your relocation, so your car or two-wheeler has a plan of its own.",
  benefitsHeading: "A move for",
  benefitsAccent: "your vehicle.",
  benefitsIntro: "Share a few details about your vehicle and route to discuss a suitable transportation arrangement.",
  benefits: [
    ["Car and two-wheeler moves", "Tell us what you are transporting so we can discuss the right arrangements."],
    ["Route-specific planning", "Share your pickup and delivery cities to plan the journey."],
    ["Coordinated communication", "Know who to contact as your vehicle move is arranged."],
  ],
  ctaTitle: "vehicle shifting",
  ctaText: "Let us know your vehicle type, pickup location and destination to get started.",
};

export const metadata = { title: "Vehicle Shifting | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
