import Heros from "../components/Heros";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";

export const HomePage = () => {
  return (
    <div className='relative w-screen h-screen bg-background-light dark:bg-background-dark'>
      <Navbar />
      <Heros />
      <Wave />
    </div>
  );
};
