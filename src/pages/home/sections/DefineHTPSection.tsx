import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const DefineHTPSection = () => {
  const { t } = useTranslation();
  return (
    <Section spacing='xs'>
      <Container>
        <Typography variant='h2'>{t("homePage.defineHTP.title")}</Typography>
        <Typography variant='lead' className='my-5'>
          {t("homePage.defineHTP.description")}
        </Typography>
      </Container>
    </Section>
  );
};

export default DefineHTPSection;
