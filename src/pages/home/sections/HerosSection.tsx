import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Typography } from "@/components/ui/Typography";
import {
  Img_House_TO_0021_122016,
  Img_Person_M_TO_0022_122016,
  Img_Tree_TO_0019_122016,
} from "@/utils";
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
          src={Img_House_TO_0021_122016}
          alt='house image'
          className='anim h-[360px] w-[360px] rounded-lg dark:brightness-90'
        />
        <img
          src={Img_Tree_TO_0019_122016}
          alt='tree image'
          className='anim h-[360px] w-[360px] rounded-lg dark:brightness-90'
        />
        <img
          src={Img_Person_M_TO_0022_122016}
          alt='person image'
          className='anim h-[360px] w-[360px] rounded-lg dark:brightness-90'
        />
      </Container>
      <Typography variant='muted' className='max-md:hidden mt-3'>
        {t("homePage.noiseWarning")}
      </Typography>
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
