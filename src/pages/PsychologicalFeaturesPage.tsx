import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import React from "react";
import { Typography } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import ROUTES from "@/routes/routes";
import FeaturesTable from "@/components/features/FeaturesTable";

const PsychologicalFeaturesPage = () => {
  const { t } = useTranslation();

  const TEXT_LOC = "psychologicalFeaturesPage.";
  const list1 = t(TEXT_LOC + "description.list1", { returnObjects: true }) as string[];
  const list2 = t(TEXT_LOC + "description.list2", { returnObjects: true }) as string[];

  return (
    <Section>
      <Container className='flex flex-col'>
        {/* DESCRIPTION */}
        <Typography variant='h1'>{t(TEXT_LOC + "title")}</Typography>
        <Typography variant='lead' className='mt-8'>
          {t(TEXT_LOC + "description.paragraph1")}
        </Typography>
        <Typography.List className='ml-20 text-lg text-muted-foreground'>
          {list1.map((item, index) => (
            <Typography.ListItem key={index}>{item}</Typography.ListItem>
          ))}
        </Typography.List>
        <Typography variant='lead'>{t(TEXT_LOC + "description.paragraph2")}</Typography>
        <Typography.List className='ml-20 text-lg text-muted-foreground'>
          {list2.map((item, index) => (
            <Typography.ListItem key={index}>{item}</Typography.ListItem>
          ))}
        </Typography.List>
        <Typography variant='lead'>{t(TEXT_LOC + "description.paragraph3")}</Typography>
        {/* TABLES */}
        <Section>
          <Container>
            <FeaturesTable type='general' className='mb-12' />
            <FeaturesTable type='house' className='mb-12' />
            <FeaturesTable type='tree' className='mb-12' />
            <FeaturesTable type='person' />
          </Container>
        </Section>
        {/* CTA */}
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
