import React, { useRef } from "react";
import { SolutionSectionText } from "../../constants";
import Paper from "../ui/Paper";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function SolutionSection() {
  const headerRef = useRef();
  const cardsRef = useRef();
  const stepsRef = useRef();
  const CTARef = useRef();

  useGSAP(() => {
    const headerItems = gsap.utils.toArray(headerRef.current.children);
    const cards = gsap.utils.toArray(cardsRef.current.children);
    const steps = gsap.utils.toArray(stepsRef.current.children);
    const CTAItems = gsap.utils.toArray(CTARef.current.children);

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

    CTAItems.forEach((cta) => {
      gsap.fromTo(
        cta,
        { opacity: 0, y: 20 }, // Initial state
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 100%",
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
          <h1 className='section-header'>{SolutionSectionText.header}</h1>
          <h3 className='text-gray'>{SolutionSectionText.intro}</h3>
        </div>
      </div>
      {/* Cards */}
      <div className='flex justify-center'>
        <div
          ref={cardsRef}
          className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 w-4/5'
        >
          {SolutionSectionText.benefits.map((benefit, index) => (
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
      <div className='flex flex-col items-center mt-20 mb-8'>
        <h2 className='section-header mb-8'>How It Works</h2>
        <div ref={stepsRef} className='relative flex flex-col gap-10 md:w-3/4 '>
          {SolutionSectionText.solutionActions.map((step, index) => (
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

      {/* Call to Action */}
      <div className='flex justify-center pb-5'>
        <div ref={CTARef} className='text-white text-center px-8 py-5 rounded-lgg'>
          <h2 className='section-header font-bold'>{SolutionSectionText.CTA}</h2>
          <button className='mt-6 btn-primary px-5 py-2 rounded-2xl shadow-md hover:bg-gray-200 transition'>
            Try it Now!
          </button>
        </div>
      </div>
    </main>
  );
}

export default SolutionSection;
