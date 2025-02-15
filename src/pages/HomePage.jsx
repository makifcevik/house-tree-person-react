import ProblemSection from "../components/sections/ProblemSection";
import HerosSection from "../components/sections/HerosSection";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative page-default page-default-colors'>
        <Navbar />
        <HerosSection />
        <Wave />
      </div>
      <ProblemSection />
    </div>
  );
};
