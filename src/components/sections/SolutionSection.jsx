import React, { useRef } from "react";
import Paper from "../ui/Paper";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function SolutionSection() {
  const { t } = useTranslation();
  const headerRef = useRef();
  const cardsRef = useRef();

  useGSAP(() => {
    const headerItems = gsap.utils.toArray(headerRef.current.children);
    const cards = gsap.utils.toArray(cardsRef.current.children);

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
  }, []);

  return (
    <main className='page-default bg-middleground-light dark:bg-middleground-dark flex flex-col flex-center'>
      {/* Section header */}
      <div className='flex justify-center mb-10 max-sm:mb-5'>
        <div
          ref={headerRef}
          className='flex flex-col md:w-2/3 text-center px-5 gap-5 mt-20'
        >
          <h1 className='section-header-md'>{t("solutionSectionText.header")}</h1>
          <h3 className='text-gray'>{t("solutionSectionText.intro")}</h3>
        </div>
      </div>
      {/* Cards */}
      <div className='flex justify-center'>
        <div
          ref={cardsRef}
          className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 w-4/5'
        >
          {t("solutionSectionText.benefits", { returnObjects: true }).map(
            (benefit, index) => (
              <Paper
                key={index}
                icon={benefit.icon}
                header={benefit.header}
                text={benefit.text}
                className='animation bg-middleground-light dark:bg-middleground-dark
              text-gray max-lg:mb-10'
              />
            )
          )}
        </div>
      </div>
    </main>
  );
}

export default SolutionSection;
