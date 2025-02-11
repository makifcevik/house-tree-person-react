import { useGSAP } from "@gsap/react";
import BtnPrimary from "./BtnPrimary";
import gsap from "gsap";

function Heros() {
  useGSAP(() => {
    gsap.to(".anim-items", {
      opacity: 1,
      y: 20,
      delay: 0.5,
      duration: 2,
      stagger: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className='flex flex-center'>
      <div className='flex flex-col flex-center w-1/3 max-lg:w-1/2 max-md:w-2/3 max-sm:w-3/4 gap-5 mt-12 max-md:mt-40'>
        <h1 className='anim-items text-theme-color text-2xl font-black'>
          House Tree Person
        </h1>
        <p className='anim-items text-paragraph mb-10'>
          Some text will be put here to briefly talk about the project and maybe describe
          some aspects of it. Vision of the project can be stated here.
        </p>
        <BtnPrimary text={"Login"} className='anim-items' />
      </div>
    </main>
  );
}

export default Heros;
