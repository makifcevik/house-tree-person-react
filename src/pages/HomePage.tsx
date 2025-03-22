import ProblemSection from "../components/sections/ProblemSection";
import HerosSection from "../components/sections/HerosSection";
import Wave from "../components/Wave";
import SolutionSection from "../components/sections/SolutionSection";
import FeatureSection from "../components/sections/FeatureSection";
import ApplicationsSection from "../components/sections/ApplicationsSection";
import TeamSection from "../components/sections/TeamSection";
import CallToActionSection from "../components/sections/CallToActionSection";
import QuickDemoSection from "../components/sections/QuickDemoSection";

export const HomePage = () => {
  return (
    <div>
      <section className='relative page-default page-default-colors'>
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
