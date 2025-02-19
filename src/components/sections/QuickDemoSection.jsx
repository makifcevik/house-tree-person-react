import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { QuickDemoSectionText } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const QuickDemoSection = () => {
  const stepsRef = useRef();
  const headerRef = useRef();

  useGSAP(() => {
    const steps = gsap.utils.toArray(stepsRef.current.children);

    // Steps header animation
    const header = headerRef.current;
    gsap.from(header, {
      opacity: 0,
      y: 20,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        once: true,
      },
    });

    // Steps animation
    steps.forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 90 }, // Initial state
        {
          opacity: 1,
          y: 0,
          delay: 0.25,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 90%",
            once: true,
          },
        }
      );
    });
  }, []);
  return (
    <>
      {/* Solution Steps */}
      <main className='flex flex-col bg-middleground-light dark:bg-middleground-dark items-center pt-10 pb-10'>
        <h2 ref={headerRef} className='section-header-sm mb-8'>
          {QuickDemoSectionText.header}
        </h2>
        <div ref={stepsRef} className='relative flex flex-col gap-10 md:w-3/4 '>
          {QuickDemoSectionText.steps.map((step, index) => (
            <div
              key={index}
              className='flex items-center gap-5 p-5 rounded-lg shadow-xl 
              bg-foreground-light dark:bg-foreground-dark'
            >
              <div className='text-4xl text-theme-color p-4 rounded-full'>
                {index + 1}
              </div>
              <div>
                <h3 className='text-theme-color font-semibold text-lg'>{step.header}</h3>
                <p className='text-gray'>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default QuickDemoSection;
