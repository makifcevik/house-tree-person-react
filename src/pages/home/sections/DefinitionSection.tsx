import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const DefinitionSection = () => {
  const { t } = useTranslation();
  const TEXT_LOC = "homePage.definitionSection.";
  const PARAGRAPHS = t(TEXT_LOC + "psychologicalFeatures.descriptionParagraphs", {
    returnObjects: true,
  }) as string[];
  return (
    <Section spacing='xs'>
      <Container>
        {/* Define HTP Test */}
        <Typography variant='h2'>{t(TEXT_LOC + "HTPTest.title")}</Typography>
        <Typography variant='lead' className='my-5'>
          {t(TEXT_LOC + "HTPTest.description")}
        </Typography>
        {/* Define Psychological Features */}
        <Typography variant='h2'>
          {t(TEXT_LOC + "psychologicalFeatures.title")}
        </Typography>
        {PARAGRAPHS.map((paragraph, index) => (
          <Typography key={index} variant='lead' className='my-5'>
            {paragraph}
          </Typography>
        ))}
      </Container>
    </Section>
  );
};

export default DefinitionSection;
