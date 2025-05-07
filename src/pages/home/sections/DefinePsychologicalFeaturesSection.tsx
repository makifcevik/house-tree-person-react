import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const DefinePsychologicalFeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <Section spacing='xs'>
      <Container>
        <Typography variant='h2'>
          {t("homePage.definePsychologicalFeatures.title")}
        </Typography>
        <Typography variant='blockquote' className='my-5'>
          {t("homePage.definePsychologicalFeatures.description")}
        </Typography>
      </Container>
    </Section>
  );
};

export default DefinePsychologicalFeaturesSection;
