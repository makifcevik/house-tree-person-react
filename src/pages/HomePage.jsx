import Heros from "../components/Heros";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";

export const HomePage = () => {
  return (
    <div className='relative page-default'>
      <Navbar />
      <Heros />
      <Wave />
    </div>
  );
};
