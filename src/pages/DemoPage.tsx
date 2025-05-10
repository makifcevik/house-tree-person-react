import React from "react";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";
import OverallResults from "@/components/OverallResults";

const EXTERNALIZATION_VALUE = 33;
const INTERNALIZATION_VALUE = 63;
const DEPRESSION_VALUE = 13;
const IMAGE_CLASS = "House";

const DemoPage = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <Typography variant='h1'>{t("demoPage.title")}</Typography>
        <Typography variant='blockquote' className='mt-5 mb-10'>
          {t("demoPage.description")}
        </Typography>
        <div className='flex md:flex-row flex-col gap-5'>
          <ImageUpload onFileAccepted={() => true} />
          <OverallResults
            imageClass={IMAGE_CLASS}
            extValue={EXTERNALIZATION_VALUE}
            intValue={INTERNALIZATION_VALUE}
            depValue={DEPRESSION_VALUE}
          />
        </div>
      </Container>
    </Section>
  );
};

export default DemoPage;
