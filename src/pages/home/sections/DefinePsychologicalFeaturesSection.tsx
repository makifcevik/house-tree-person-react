import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const DefinePsychologicalFeaturesSection = () => {
  const { t } = useTranslation();
  const TEXT_LOC = "homePage.definePsychologicalFeatures.";
  const PARAGRAPHS = t(TEXT_LOC + "descriptionParagraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <Section spacing='xs'>
      <Container>
        <Typography variant='h2'>{t(TEXT_LOC + "title")}</Typography>
        {PARAGRAPHS.map((paragraph, index) => (
          <Typography key={index} variant='lead' className='my-5'>
            {paragraph}
          </Typography>
        ))}
      </Container>
    </Section>
  );
};

export default DefinePsychologicalFeaturesSection;
