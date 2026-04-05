import dynamic from "next/dynamic";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import TravidCore from "../components/sections/TravidCore";
import WhyUs from "../components/sections/WhyUs";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import SectionSkeleton from "../components/ui/SectionSkeleton";

const TechStack = dynamic(() => import("../components/sections/TechStack"), {
  loading: () => <SectionSkeleton />,
});

const Testimonials = dynamic(() => import("../components/sections/Testimonials"), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <TravidCore />
      <TechStack />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
