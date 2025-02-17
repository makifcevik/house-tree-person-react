import React, { useRef } from "react";
import { solutionSectionText } from "../../constants";
import Paper from "../ui/Paper";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function SolutionSection() {
  const headerRef = useRef();
  const cardsRef = useRef();
  const stepsRef = useRef();
  const solutionStepsHeaderRef = useRef();

  useGSAP(() => {
    const headerItems = gsap.utils.toArray(headerRef.current.children);
    const cards = gsap.utils.toArray(cardsRef.current.children);
    const steps = gsap.utils.toArray(stepsRef.current.children);

    // Header section animation
    headerItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 }, // Initial state
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    // Cards animation
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -350, rotation: 15 }, // Initial state
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          delay: 0.25,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    // Steps header animation
    const solHeader = solutionStepsHeaderRef.current;
    gsap.from(solHeader, {
      opacity: 0,
      y: 20,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: solHeader,
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
    <main className='page-default bg-middleground-light dark:bg-middleground-dark flex flex-col'>
      {/* Section header */}
      <div className='flex justify-center mb-10 max-sm:mb-5'>
        <div
          ref={headerRef}
          className='flex flex-col md:w-2/3 text-center px-5 gap-5 mt-20'
        >
          <h1 className='section-header-md'>{solutionSectionText.header}</h1>
          <h3 className='text-gray'>{solutionSectionText.intro}</h3>
        </div>
      </div>
      {/* Cards */}
      <div className='flex justify-center'>
        <div
          ref={cardsRef}
          className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 w-4/5'
        >
          {solutionSectionText.benefits.map((benefit, index) => (
            <Paper
              key={index}
              icon={benefit.icon}
              header={benefit.header}
              text={benefit.text}
              className='animation bg-middleground-light dark:bg-middleground-dark
              text-gray mb-5 max-sm:mb-0'
            />
          ))}
        </div>
      </div>
      {/* Solution Steps */}
      <div className='flex flex-col items-center mt-20 mb-20'>
        <h2 ref={solutionStepsHeaderRef} className='section-header-sm mb-8'>
          {solutionSectionText.solutionSteps.header}
        </h2>
        <div ref={stepsRef} className='relative flex flex-col gap-10 md:w-3/4 '>
          {solutionSectionText.solutionSteps.steps.map((step, index) => (
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
      </div>
    </main>
  );
}

export default SolutionSection;
