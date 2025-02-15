import React, { useRef } from "react";
import { ProblemSectionText } from "../../constants";
import Paper from "../ui/Paper";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function ProblemSection() {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const papers = gsap.utils.toArray(scrollRef.current.children);
      papers.forEach((paper) => {
        gsap.fromTo(
          paper,
          { opacity: 0, x: 350, rotation: -15 }, // Initial state
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            delay: 0.25,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paper,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    },
    { scope: scrollRef }
  );

  return (
    <main className='page-default bg-foreground-light dark:bg-foreground-dark flex flex-col'>
      {/* Section header */}
      <div className='flex justify-center mb-10 max-sm:mb-5'>
        <div className='flex flex-col text-center px-5 gap-5 mt-20'>
          <h1 className='section-header'>{ProblemSectionText.header}</h1>
          <h3 className='text-gray'>{ProblemSectionText.oneLiner}</h3>
        </div>
      </div>

      {/* 2 item col */}
      <div className='flex justify-center'>
        {/* Bullet points */}
        <ul ref={scrollRef} className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-4/5'>
          {ProblemSectionText.problems.map((problem, index) => (
            <Paper
              key={index}
              icon={problem.icon}
              header={problem.header}
              text={problem.text}
              className='animation bg-foreground-light dark:bg-foreground-dark
              text-gray mb-5 max-sm:mb-0'
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ProblemSection;
