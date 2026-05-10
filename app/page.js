import Image from "next/image";
import styles from "./page.module.css";
import HeroBanner from "./components/Homepage/homepagebanner";
import Offers from "./components/Homepage/Offers";
import TrendingHero from "./components/Homepage/TrendingHero";
import HeroSection from "./components/Homepage/HeroSection";
import Testimonial from "./components/Homepage/Testimonial";
import ServiceSlider from "./components/Homepage/ServiceSlider";
import Banneroffer from "./components/Homepage/Banneroffer";
import WhyChooseUs from "./components/Homepage/WhyChooseUs";
import KnowaboutSection from "./components/Homepage/knowabout";

export default function Home() {
  return (
  <>
<HeroBanner />
<Offers />
<KnowaboutSection />
<TrendingHero />
<ServiceSlider />
<Banneroffer />
<WhyChooseUs />
<HeroSection />

<Testimonial />





  </>
  );
}
