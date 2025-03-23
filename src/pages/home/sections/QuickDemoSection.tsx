import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import DragDropUploader from "../../../components/utils/DragDropUploader";
import Step from "../../../components/ui/Step";
import ImageScan from "../../../components/ui/ImageScan";
import { useTranslation } from "react-i18next";
import DemoResultsSection from "./DemoResultsSection";

gsap.registerPlugin(ScrollTrigger);

const QuickDemoSection = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);

  const stepsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const steps = stepsRef.current ? gsap.utils.toArray(stepsRef.current.children) : [];

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
    steps.forEach((step: any) => {
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
          {t("QuickDemoSectionText.header")}
        </h2>
        {/* Steps */}
        <div ref={stepsRef} className='relative flex flex-col gap-10 md:w-3/4 '>
          {/* Step 1: Upload */}
          <Step
            index={1}
            header={t("QuickDemoSectionText.steps.step1.header")}
            text={t("QuickDemoSectionText.steps.step1.text")}
            children={<DragDropUploader image={image} setImage={setImage} />}
          />

          {/* Step 2: HTP Image Classifier */}
          <Step
            index={2}
            header={t("QuickDemoSectionText.steps.step2.header")}
            text={t("QuickDemoSectionText.steps.step2.text")}
            children={<ImageScan image={image} />}
          />

          {/* Step 3: Feature Extraction */}
          <Step
            index={3}
            header={t("QuickDemoSectionText.steps.step3.header")}
            text={t("QuickDemoSectionText.steps.step3.text")}
            children={<ImageScan image={image} />}
          />

          {/* Step 4: Final Decision */}
          <Step
            index={4}
            header={t("QuickDemoSectionText.steps.step4.header")}
            text={t("QuickDemoSectionText.steps.step4.text")}
            children={<DemoResultsSection />}
          />
        </div>
      </main>
    </>
  );
};

export default QuickDemoSection;
