import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const paragraphs = t("aboutPage.paragraphs", { returnObjects: true }) as string[];

  return (
    <Section spacing='lg'>
      <Typography variant='h2' className='text-center mb-5 text-primary'>
        {t("aboutPage.title")}
      </Typography>
      {paragraphs.map((paragraph, id) => (
        <Typography key={id} variant='lead' className='mb-4'>
          {paragraph}
        </Typography>
      ))}
    </Section>
  );
};

export default AboutPage;
