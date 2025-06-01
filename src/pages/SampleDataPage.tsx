import FeaturesTable from "@/components/features/FeaturesTable";
import OverallResults from "@/components/OverallResults";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Img_Person_M_BMY_0051_132018 } from "@/utils";
import React from "react";
import { useTranslation } from "react-i18next";

const EXTERNALIZATION_VALUE = 92;
const INTERNALIZATION_VALUE = 27;
const DEPRESSION_VALUE = 55;

interface featureValues {
  name: string;
  value: number;
}

const placeHolderFeatureValues: featureValues[] = [
  { name: "feature1", value: 5 },
  { name: "feature2", value: 3 },
  { name: "feature3", value: 2 },
  { name: "feature4", value: 4 },
  { name: "feature5", value: 0 },
];

const TEXT_LOC = "sampleDataPage.";

const SampleDataPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Typography variant='h1'>{t(TEXT_LOC + "title")}</Typography>
        <Typography variant='blockquote' className='mt-5 mb-10'>
          {t(TEXT_LOC + "description")}
        </Typography>
        <div className='flex md:flex-row flex-col gap-5'>
          <img
            src={Img_Person_M_BMY_0051_132018}
            className='max-h-[360px] w-auto rounded-3xl'
          />
          <OverallResults
            imageClass='person'
            extValue={EXTERNALIZATION_VALUE}
            intValue={INTERNALIZATION_VALUE}
            depValue={DEPRESSION_VALUE}
          />
        </div>
        <Section spacing='md'>
          <FeaturesTable type='general' featureValues={placeHolderFeatureValues} />
          <FeaturesTable
            type='person'
            featureValues={placeHolderFeatureValues}
            className='my-8'
          />
        </Section>
      </Container>
    </Section>
  );
};

export default SampleDataPage;
