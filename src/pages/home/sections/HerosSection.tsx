import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Typography } from "@/components/ui/Typography";
import { placeHolderHouseImg } from "@/utils";
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
    <Section spacing='xl' className='text-center'>
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
    </Section>
  );
}

export default HerosSection;
