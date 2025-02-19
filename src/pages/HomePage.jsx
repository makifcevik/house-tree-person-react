import ProblemSection from "../components/sections/ProblemSection";
import HerosSection from "../components/sections/HerosSection";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import SolutionSection from "../components/sections/SolutionSection";
import FeatureSection from "../components/sections/FeatureSection";
import ApplicationsSection from "../components/sections/ApplicationsSection";
import TeamSection from "../components/sections/TeamSection";
import CallToActionSection from "../components/sections/CallToActionSection";
import QuickDemoSection from "../components/sections/QuickDemoSection";

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <section className='relative page-default page-default-colors'>
        <Navbar />
        <HerosSection />
        <Wave />
      </section>
      <ProblemSection />
      <SolutionSection />
      <QuickDemoSection />
      <FeatureSection />
      <ApplicationsSection />
      <TeamSection />
      <CallToActionSection />
    </div>
  );
};
