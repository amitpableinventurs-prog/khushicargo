import { asset } from "../asset-path";

// Each service owns one KCS photo in public/images/services/, named after its slug; see serviceImage().
// `heroPosition` optionally overrides the banner crop when the default would cut through the photo's logo.
export const services = [
  { slug: "packing-and-moving", number: "01", title: "Packing and Moving", icon: "▧", shortDescription: "Professional packing and moving solutions using quality materials and expert handling for safer transportation." },
  { slug: "office-shifting", number: "02", title: "Office Shifting", icon: "▤", shortDescription: "Carefully coordinated office relocation for furniture, equipment, files and the people who depend on them." },
  { slug: "household-relocation", number: "03", title: "Household Relocation", icon: "⌂", shortDescription: "Home shifting support for furniture, appliances, everyday essentials and the things that make a house yours." },
  { slug: "vehicle-shifting", number: "04", title: "Vehicle Shifting", icon: "↗", shortDescription: "Convenient car and two-wheeler transportation arranged around your route and moving plans." },
  { slug: "warehousing-services", number: "05", title: "Warehousing Services", icon: "▦", shortDescription: "Flexible storage arrangements for belongings that need a safe place between moves or during a transition." },
  { slug: "industrial-shifting", number: "06", title: "Industrial Shifting", icon: "✳", shortDescription: "Coordinated relocation for machinery, plant equipment and commercial or industrial goods." },
  { slug: "loading-and-unloading", number: "07", title: "Loading and Unloading", icon: "⇵", heroPosition: "center 15%", shortDescription: "Practical loading and unloading assistance to help move your belongings between home, vehicle and destination." },
  { slug: "insurance-services", number: "08", title: "Insurance Services", icon: "◇", shortDescription: "Ask about transit insurance options for additional protection for your goods during relocation." },
];

// "card" is a 720x480 crop for listings; the default is the full-size photo used in page banners.
export function serviceImage(service, size) {
  return asset(`/images/services/${service.slug}${size === "card" ? "-card" : ""}.jpg`);
}
