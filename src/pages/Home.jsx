import HeroSection from "../components/home/HeroSection";
import MarketTracker from "../components/home/MarketTracker";
import ServicesSection from "../components/home/ServicesSection";
import NewsSection from "../components/home/NewsSection";
import HowItWorks from "../components/home/HowItWorks"
import StatsSection from "../components/home/StatsSection";
import CTABanner from "../components/home/CTABanner";



function Home() {
  return (
    <div>
      <HeroSection />
       <MarketTracker/>
      <ServicesSection />
        <NewsSection/>
      <HowItWorks/>
      <StatsSection/>
        <CTABanner/>
      
       
    </div>
  );
}
export default Home;