import ServiceDetailPage from "../../components/ServiceDetailPage";

const service = {
  title: "Loading and Unloading",
  description: "Practical loading and unloading assistance to help move your belongings between home, vehicle and destination.",
  heading: "Care at",
  headingAccent: "both ends of the move.",
  intro: "Loading and unloading are important parts of any move. KhushiCargo helps coordinate handling for your household goods, furniture and other items at the pickup and delivery locations.",
  benefitsHeading: "The extra help",
  benefitsAccent: "that makes a difference.",
  benefitsIntro: "Add handling support to your relocation plan, at the pickup location, destination or both.",
  benefits: [
    ["Help at both locations", "Arrange loading at pickup and unloading at your destination."],
    ["Organized handling", "Plan how belongings will be prepared and moved between locations."],
    ["Add support to your move", "Include handling assistance alongside your transportation plan."],
  ],
  ctaTitle: "loading and unloading",
  ctaText: "Let us know where you need assistance and what is being moved.",
};

export const metadata = { title: "Loading and Unloading | KhushiCargo", description: service.description };

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
