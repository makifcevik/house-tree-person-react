import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import React from "react";
import GeneralFeaturesSection from "./sections/GeneralFeaturesSection";
import HouseFeaturesSection from "./sections/HouseFeaturesSection";
import TreeFeaturesSection from "./sections/TreeFeaturesSection";
import PersonFeaturesSection from "./sections/PersonFeaturesSection";
import { Typography } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import ROUTES from "@/routes/routes";

const PsychologicalFeaturesPage = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container className='flex flex-col'>
        <Typography variant='h1'>{t("psychologicalFeaturesPage.title")}</Typography>
        <Typography variant='blockquote' className='mt-5'>
          {t("psychologicalFeaturesPage.description")}
        </Typography>
        <GeneralFeaturesSection />
        <HouseFeaturesSection />
        <TreeFeaturesSection />
        <PersonFeaturesSection />
        <div className='flex flex-col gap-5 text-center items-center justify-center mt-5 mb-20'>
          <Typography variant='h3'>{t("psychologicalFeaturesPage.CTA.text")}</Typography>
          <Button>
            <Link to={ROUTES.SAMPLE_DATA}>
              {t("psychologicalFeaturesPage.CTA.buttonText")}
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default PsychologicalFeaturesPage;
