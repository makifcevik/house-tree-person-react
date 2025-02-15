import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BtnGetStarted from "../buttons/BtnGetStarted";
import { herosText } from "../../constants";

function HerosSection() {
  useGSAP(() => {
    gsap.to(".anim-items-bottom", {
      opacity: 1,
      y: 20,
      delay: 0.3,
      duration: 1.5,
      stagger: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className='flex flex-center'>
      <div className='flex flex-col flex-center section-highlights gap-5 mt-12 max-md:mt-40'>
        <h1 className='anim-items-bottom section-header'>House Tree Person</h1>
        <h3 className='anim-items-bottom text-gray mb-10'>{herosText}</h3>
        <BtnGetStarted className='anim-items-bottom' />
      </div>
    </main>
  );
}

export default HerosSection;
