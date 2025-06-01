import DefinitionSection from "./sections/DefinitionSection";
import HerosSection from "./sections/HerosSection";

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <HerosSection />
      <DefinitionSection />
    </div>
  );
};
