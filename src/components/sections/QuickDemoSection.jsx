import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { QuickDemoSectionText } from "../../constants";
import DragDropUploader from "../utils/DragDropUploader";
import Step from "../ui/Step";
import ImageScan from "../ui/ImageScan";

gsap.registerPlugin(ScrollTrigger);

const QuickDemoSection = () => {
  const [image, setImage] = useState(null);

  const steps = QuickDemoSectionText.steps;

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
        {/* Steps */}
        <div ref={stepsRef} className='relative flex flex-col gap-10 md:w-3/4 '>
          {/* Upload Section*/}
          <Step
            index={1}
            header={steps[0].header}
            text={steps[0].text}
            children={<DragDropUploader image={image} setImage={setImage} />}
          />
          {/* HTP Image Classifier Section */}
          <Step
            index={2}
            header={steps[1].header}
            text={steps[1].text}
            children={<ImageScan image={image} />}
          />
        </div>
      </main>
    </>
  );
};

export default QuickDemoSection;
