import React, { useRef } from "react";
import Paper from "../../../components/ui/Paper";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

type Problem = {
  icon: string;
  header: string;
  text: string;
};

function ProblemSection() {
  const { t } = useTranslation();
  const cardsRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const problems = t("problemSectionText.problems", { returnObjects: true }) as Problem[];

  useGSAP(() => {
    const papers = cardsRef.current ? gsap.utils.toArray(cardsRef.current.children) : [];
    const headerItems = headerRef.current
      ? gsap.utils.toArray(headerRef.current.children)
      : [];
    papers.forEach((paper: any) => {
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
      headerItems.forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 }, // Initial state
          {
            opacity: 1,
            y: 0,
            delay: 0.1,
            duration: 1,
            stagger: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    });
  });

  return (
    <main className='page-default bg-foreground-light dark:bg-foreground-dark flex flex-col'>
      {/* Section header */}
      <div className='flex justify-center mb-10 max-sm:mb-5'>
        <div
          ref={headerRef}
          className='flex flex-col md:w-2/3 text-center px-5 gap-5 mt-20'
        >
          <h1 className='section-header-md'>{t("problemSectionText.header")}</h1>
          <h3 className='text-gray'>{t("problemSectionText.oneLiner")}</h3>
        </div>
      </div>

      {/* Cols */}
      <div className='flex justify-center'>
        {/* Bullet points */}
        <ul ref={cardsRef} className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-4/5'>
          {problems.map((problem, index) => (
            <Paper
              key={index}
              icon={problem.icon}
              header={problem.header}
              text={problem.text}
              className='bg-foreground-light dark:bg-foreground-dark
              text-gray mb-5 max-sm:mb-0'
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ProblemSection;
