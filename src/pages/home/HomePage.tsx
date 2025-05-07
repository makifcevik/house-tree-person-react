import DefineHTPSection from "./sections/DefineHTPSection";
import DefinePsychologicalFeaturesSection from "./sections/DefinePsychologicalFeaturesSection";
import HerosSection from "./sections/HerosSection";

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <HerosSection />
      <DefineHTPSection />
      <DefinePsychologicalFeaturesSection />
    </div>
  );
};
