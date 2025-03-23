import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";
import PricingSection from "./components/PricingSections";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <Header />
      <HeroSection />
      <LogosSection />
      <PricingSection />
      <StatsSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
