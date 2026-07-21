import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerStrip from "@/components/PartnerStrip";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Outcomes from "@/components/Outcomes";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PartnerStrip />
      <Programs />
      <HowItWorks />
      <Outcomes />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
