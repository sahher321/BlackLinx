import Hero from "@/components/Hero";
import About from "@/components/About";
import Counter from "@/components/Counter";
import CommunitySlider from "@/components/CommunitySlider";
import DiscoverEvents from "@/components/DiscoverEvents";
import BuyAndSell from "@/components/BuyAndSell";
import HowItWorks from "@/components/HowItWorks";
import PopularCities from "@/components/PopularCities";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Counter />
      <CommunitySlider />
      <DiscoverEvents />
      <BuyAndSell />
      <HowItWorks />
      <PopularCities />
    </div>
  );
}
