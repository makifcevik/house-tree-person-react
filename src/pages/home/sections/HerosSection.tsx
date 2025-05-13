import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Typography } from "@/components/ui/Typography";
import { placeHolderHouseImg } from "@/utils";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

function HerosSection() {
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from(".anim", {
      opacity: 0,
      y: 20,
      delay: 0.3,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <Section spacing='sm' className='text-center mt-5'>
      <Typography variant='h1' className='anim mb-5 text-primary'>
        {t("homePage.title")}
      </Typography>
      <Typography variant='lead'>
        <TypewriterText text={t("homePage.oneLiner")} />
      </Typography>
      <Container className='grid grid-cols-3 max-md:hidden gap-5 mt-10'>
        <img
          src={placeHolderHouseImg}
          alt='house image'
          className='anim h-full w-full rounded-lg dark:brightness-90'
        />
        <img
          src={placeHolderHouseImg}
          alt='house image'
          className='anim h-full w-full rounded-lg dark:brightness-90'
        />
        <img
          src={placeHolderHouseImg}
          alt='house image'
          className='anim h-full w-full rounded-lg dark:brightness-90'
        />
      </Container>
      {/*
      <FontAwesomeIcon
        icon={faChevronDown}
        className='text-3xl font-bold mt-7 text-primary'
      />
      */}
    </Section>
  );
}

export default HerosSection;
