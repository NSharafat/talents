import Hero from "./_components/Hero";
import TrustedBy from "./_components/TrustedBy";
import Cards from "./_components/Cards";
import ExpertiseSection from "./_components/ExpertiseSection";
import TopProfiles from "./_components/TopProfiles";
import WhyUS from "./_components/WhyUS";
import FAQ from "./_components/FAQ";
import Intro from "./_components/Intro";
import Testimonials from "./_components/Testimonials";
import TopPicks from "./_components/TopPicks";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="relative  min-h-180">
        <Hero />
      </div>
      <div className="relative z-9999 w-full">
        <TrustedBy />
      </div>
      <div className="relative z-9999 flex flex-col w-full h-full ">
        <Cards />
      </div>
      <div className="relative w-full h-full flex flex-col ">
        <ExpertiseSection />
      </div>
      <div className="mt-20">
        <TopProfiles />
      </div>

      <div className="relative w-full h-full flex flex-col">
        <WhyUS />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <FAQ />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <Intro />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <Testimonials />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <TopPicks />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <Footer />
      </div>
    </div>
  );
}
