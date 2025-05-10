import FeaturesTable from "@/components/features/FeaturesTable";
import OverallResults from "@/components/OverallResults";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { placeHolderHouseImg } from "@/utils";
import React from "react";

const EXTERNALIZATION_VALUE = 92;
const INTERNALIZATION_VALUE = 27;
const DEPRESSION_VALUE = 55;
const IMAGE_CLASS = "Person";

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

const SampleDataPage = () => {
  return (
    <Section>
      <Container>
        <Typography variant='h1'>Sample Data</Typography>
        <Typography variant='blockquote' className='mt-5 mb-10'>
          Results of the evaluation of the sample data image will be shown on this page.
        </Typography>
        <div className='flex md:flex-row flex-col gap-5'>
          <img src={placeHolderHouseImg} className='max-h-[350px] w-auto rounded-3xl' />
          <OverallResults
            imageClass={IMAGE_CLASS}
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
