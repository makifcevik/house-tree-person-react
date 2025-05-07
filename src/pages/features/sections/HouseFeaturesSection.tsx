import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

interface HouseFeatures {
  name: string;
  description: string;
}

const HouseFeaturesSection = () => {
  const { t } = useTranslation();
  const textLoc = "psychologicalFeaturesPage.types.houseFeatures";
  const features = t(textLoc + ".features", {
    returnObjects: true,
  }) as HouseFeatures[];

  return (
    <Section spacing='sm'>
      <Container>
        <Typography variant='h2'>{t(textLoc + ".title")}</Typography>
        <Typography variant='blockquote' className='mt-5 mb-10'>
          {t(textLoc + ".description")}
        </Typography>
        <Table>
          <TableCaption>{t(textLoc + ".caption")}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index}>
                <TableCell>{feature.name}</TableCell>
                <TableCell>{feature.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Section>
  );
};

export default HouseFeaturesSection;
