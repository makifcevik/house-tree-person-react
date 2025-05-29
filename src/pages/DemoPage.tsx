import React, { useState } from "react";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";
import OverallResults from "@/components/OverallResults";
import {
  Img_House_AA_0016_112019,
  Img_House_CEO_0088_152019,
  Img_Person_F_AST_0033_122018,
  Img_Tree_EY_0001_102016,
  Img_Tree_SD_0174_201803,
} from "@/utils";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

const EXTERNALIZATION_VALUE = 33;
const INTERNALIZATION_VALUE = 63;
const DEPRESSION_VALUE = 13;
const IMAGE_CLASS = "House";

const images = [
  { src: Img_House_AA_0016_112019, alt: "House Image" },
  { src: Img_Tree_SD_0174_201803, alt: "Tree Image" },
  { src: Img_Person_F_AST_0033_122018, alt: "Female Person Image" },
  { src: Img_House_CEO_0088_152019, alt: "House Image" },
  { src: Img_Tree_EY_0001_102016, alt: "Tree Image" },
];

const DemoPage = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelection = (selected: any) => {
    console.log("Selected:", selected);
  };

  return (
    <Section>
      <Container>
        <Typography variant='h1'>{t("demoPage.title")}</Typography>
        <Typography variant='blockquote' className='mt-5 mb-10'>
          {t("demoPage.description")}
        </Typography>
        <div className='flex md:flex-row flex-col gap-5'>
          <ImageCarousel
            images={images}
            onSelect={handleSelection}
            selectedImage={selectedImage}
            imageSize='w-80 h-80'
            thumbnailSize='w-12 h-12'
          />

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
