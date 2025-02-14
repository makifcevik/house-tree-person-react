import About from "../components/About";
import Heros from "../components/Heros";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";

export const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative page-default page-default-colors'>
        <Navbar />
        <Heros />
        <Wave />
      </div>
      <About />
    </div>
  );
};
