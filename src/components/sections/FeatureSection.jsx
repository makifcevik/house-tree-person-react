import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { graphIncreaseImg } from "../../utils";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function FeatureSection({ className }) {
  const { t } = useTranslation();
  const headerRef = useRef();
  const featuresSectionRef = useRef();
  const imgRef = useRef();
  const CTARef = useRef();

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
        once: true,
      },
    });

    // Graph animation
    gsap.from(imgRef.current, {
      x: 500,
      opacity: 0,
      delay: 1,
      duration: 2,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Features animation (stagger)
    const featuresStaggerAnim = gsap.from(".anim-features", {
      x: -500,
      opacity: 0,
      delay: 0.5,
      duration: 1.2,
      stagger: 0.3,
      ease: "circ.inOut",
      paused: true,
    });

    ScrollTrigger.create({
      trigger: featuresSectionRef.current,
      start: "top 75%",
      onEnter: () => featuresStaggerAnim.play(),
    });

    // CTA animation
    const CTAItems = gsap.utils.toArray(CTARef.current.children);
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
    <main>
      <div className='flex justify-center gap-20 text-left my-20 overflow-hidden'>
        {/* Text Section */}
        <div
          className={`${className} flex flex-col w-1/2 max-lg:w-4/5 max-lg:mb-20 gap-10`}
        >
          <div ref={headerRef} className='flex'>
            <h1 className='section-header-lg font-bold ml-2'>
              {t("featureSectionText.header")}
            </h1>
          </div>
          <ul ref={featuresSectionRef} className='flex flex-col gap-6'>
            {t("featureSectionText.features", { returnObjects: true }).map(
              (feature, index) => (
                <li key={index} className='anim-features text-gray flex align-middle'>
                  <div>
                    <h2 className='text-theme-color mb-2'>{feature.header}</h2>
                    <p className='text-gray'>{feature.text}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        {/* Image section */}
        <img ref={imgRef} src={graphIncreaseImg} className='max-lg:hidden' />
      </div>

      {/* Call to Action */}
      <div className='flex justify-center pb-5 mb-10'>
        <div ref={CTARef} className='text-white text-center px-8 py-5 rounded-lgg'>
          <h2 className='section-header-sm font-bold'>{t("featureSectionText.CTA")}</h2>
          <button className='mt-6 btn-primary px-5 py-2 rounded-2xl shadow-md hover:bg-gray-200 transition'>
            Try it Now!
          </button>
        </div>
      </div>
    </main>
  );
}

export default FeatureSection;
