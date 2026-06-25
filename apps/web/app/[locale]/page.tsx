import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/home/HeroSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import CoursesSection from "../../components/home/CoursesSection";
import PricingSection from "../../components/home/PricingSection";
import FAQSection from "../../components/home/FAQSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
