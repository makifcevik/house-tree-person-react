import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const paragraphs = t("aboutPage.paragraphs", { returnObjects: true }) as string[];

  useGSAP(() => {
    gsap.from(".anim", {
      scrollTrigger: ".anim",
      opacity: 0,
      y: 30,
      delay: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from(".anim2", {
      scrollTrigger: ".anim2",
      opacity: 0,
      delay: 0.5,
      duration: 4,
      stagger: 0.4,
      ease: "power2.out",
    });
  }, []);

  return (
    <Section spacing='lg'>
      <div className='anim'>
        <Typography variant='h1' className='text-center mb-5 text-primary'>
          {t("aboutPage.title")}
        </Typography>
      </div>
      {paragraphs.map((paragraph, id) => (
        <div key={id} className='anim2'>
          <Typography variant='lead' className='mb-4'>
            {paragraph}
          </Typography>
        </div>
      ))}
    </Section>
  );
};

export default AboutPage;
