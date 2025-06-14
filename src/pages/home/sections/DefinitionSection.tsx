import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Typography } from "@/components/ui/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const DefinitionSection = () => {
  const { t } = useTranslation();
  const TEXT_LOC = "homePage.definitionSection.";
  const PARAGRAPHS = t(TEXT_LOC + "psychologicalFeatures.descriptionParagraphs", {
    returnObjects: true,
  }) as string[];

  useGSAP(() => {
    gsap.from(".ani", {
      scrollTrigger: ".ani",
      opacity: 0,
      x: -20,
      delay: 0.3,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from(".ani2", {
      scrollTrigger: ".ani2",
      opacity: 0,
      delay: 0.5,
      duration: 4,
      stagger: 0.8,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from(".ani3", {
      scrollTrigger: ".ani3",
      opacity: 0,
      x: -20,
      delay: 0.3,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from(".ani4", {
      scrollTrigger: ".ani4",
      opacity: 0,
      delay: 0.5,
      duration: 4,
      stagger: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <Section spacing='xs'>
      <Container>
        {/* Define HTP Test */}
        <div className='ani'>
          <Typography variant='h2'>{t(TEXT_LOC + "HTPTest.title")}</Typography>
        </div>
        <div className='ani2'>
          <Typography variant='lead' className='my-5'>
            {t(TEXT_LOC + "HTPTest.description")}
          </Typography>
        </div>
        {/* Define Psychological Features */}
        <div className='ani3'>
          <Typography variant='h2'>
            {t(TEXT_LOC + "psychologicalFeatures.title")}
          </Typography>
        </div>
        {PARAGRAPHS.map((paragraph, index) => (
          <div key={index} className='ani4'>
            <Typography variant='lead' className='my-5'>
              {paragraph}
            </Typography>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default DefinitionSection;
