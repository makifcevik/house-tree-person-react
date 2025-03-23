import ProblemSection from "./sections/ProblemSection";
import HerosSection from "./sections/HerosSection";
import Wave from "../../components/Wave";
import SolutionSection from "./sections/SolutionSection";
import FeatureSection from "./sections/FeatureSection";
import ApplicationsSection from "./sections/ApplicationsSection";
import TeamSection from "./sections/TeamSection";
import CallToActionSection from "./sections/CallToActionSection";
import QuickDemoSection from "./sections/QuickDemoSection";

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
