import CitiesDirectory from "../components/CitiesDirectory";
import { CtaBand, PageHero } from "../components/PageSections";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { regions } from "./city-list";

const stateCount = regions.filter((region) => region.type === "State").length;
const territoryCount = regions.length - stateCount;
const cityCount = regions.reduce((sum, region) => sum + region.cities.length, 0);

export const metadata = {
  title: "Cities We Serve | KhushiCargo",
  description: "KhushiCargo packers and movers help with home, office and vehicle moves to and from cities across every Indian state and union territory.",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Cities we serve"
          crumb="Cities"
          title={<>Moving you across<br /><em>all of India.</em></>}
          text="From our base in Indore, KhushiCargo helps families and businesses move to and from cities in every state and union territory."
        >
          <div className="city-hero-stats">
            <div><strong>{stateCount}</strong><small>states</small></div>
            <div><strong>{territoryCount}</strong><small>union territories</small></div>
            <div><strong>{Math.floor(cityCount / 50) * 50}+</strong><small>cities &amp; towns</small></div>
          </div>
        </PageHero>

        <CitiesDirectory />

        <CtaBand title="next city move" text="Tell us where you’re moving from and to, and we’ll help you plan the route, timing and services." />
      </main>
      <SiteFooter />
    </>
  );
}
