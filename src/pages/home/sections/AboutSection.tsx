import { ImageUpload } from "@/components/ui/ImageUpload";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const paragraphs = t("homePage.about", { returnObjects: true }) as string[];

  return (
    <Section spacing='sm'>
      <Typography variant='h2' className='text-center mb-5 text-primary'>
        About HTP
      </Typography>
      {paragraphs.map((paragraph, id) => (
        <Typography key={id} variant='lead' className='mb-4'>
          {paragraph}
        </Typography>
      ))}
      <div className='mx-auto max-w-md'>
        <ImageUpload onFileAccepted={() => true} />
      </div>
    </Section>
  );
};

export default AboutSection;
