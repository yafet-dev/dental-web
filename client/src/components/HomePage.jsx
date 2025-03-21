import Header from "./Header";
import Ads from "./Ads";
import Hero from "./Hero";
import CTA from "./CTA";
import MoreAbout from "./MoreAbout";
import ServicesSection from "./ServicesSection";
import VisitUs from "./VisitUs";
import Testimonials from "./Testimonials";
import HealthcareCTA from "./HealthcareCTA";
import Footer from "./Footer";
export default function DentalClinicPage() {
  return (
    <div>
      <Ads />
      <Header />
      <Hero />
      <CTA />
      <MoreAbout />
      <ServicesSection />
      <VisitUs />
      <Testimonials />
      <HealthcareCTA />
      <Footer />
    </div>
  );
}
