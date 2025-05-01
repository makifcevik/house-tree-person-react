import { Section } from "@/components/ui/Section";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { Typography } from "@/components/ui/Typography";
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
      ease: "power2.out",
    });
  }, []);

  return (
    <Section className='text-center'>
      <Typography variant='h1' className='anim mb-5 text-primary'>
        {t("homePage.title")}
      </Typography>
      <Typography variant='lead'>
        <TypewriterText text={t("homePage.oneLiner")} />
      </Typography>
    </Section>
  );
}

export default HerosSection;
