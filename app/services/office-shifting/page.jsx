import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Office Shifting",
  description: "Carefully coordinated office relocation for furniture, equipment, files and the people who depend on them.",
  heading: "A smoother",
  headingAccent: "workplace move.",
  intro: "Moving a workplace takes more than a truck. KhushiCargo helps organize your office relocation around your schedule, so your team can get back to work at its new location.",
  benefitsHeading: "Make the move",
  benefitsAccent: "work for you.",
  benefitsIntro: "Keep your workplace move organized around the team, schedule and equipment that keep your business running.",
  benefits: [
    ["Plan around your team", "Organize the move sequence to fit your preferred schedule and business needs."],
    ["Handle office essentials", "Move furniture, boxed files and office equipment with care."],
    ["One point of coordination", "Keep your move organized from the first planning call through delivery."],
  ],
  ctaTitle: "office shifting",
  ctaText: "Share your office locations, moving date and requirements to start planning your relocation.",
};

export const metadata = { title: "Office Shifting | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
