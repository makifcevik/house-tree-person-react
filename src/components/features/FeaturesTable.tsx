import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useTranslation } from "react-i18next";

interface Features {
  name: string;
  range: string;
  description: string;
}

interface FeatureValue {
  name: string;
  value: number;
}

interface Props {
  type: "general" | "house" | "tree" | "person";
  featureValues?: FeatureValue[];
  className?: string;
}

const FeaturesTable = ({ type, featureValues, className }: Props) => {
  const { t } = useTranslation();
  const TEXT_LOC = `featuresTable.${type}.`;

  const features = t(TEXT_LOC + `features`, {
    returnObjects: true,
  }) as Features[];

  return (
    <section className={className}>
      <Typography variant='h2'>{t(TEXT_LOC + `title`)}</Typography>
      <Typography variant='blockquote' className='mt-5 mb-10'>
        {t(TEXT_LOC + `description`)}
      </Typography>
      <Table>
        <TableCaption>{t(TEXT_LOC + `caption`)}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>{t("featuresTable.columnNames.name")}</TableHead>
            {featureValues && (
              <TableHead>{t("featuresTable.columnNames.value")}</TableHead>
            )}
            <TableHead>{t("featuresTable.columnNames.range")}</TableHead>
            <TableHead>{t("featuresTable.columnNames.description")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell>{feature.name}</TableCell>
              {featureValues && (
                <TableCell>
                  {featureValues.find((value) => value.name === feature.name)?.value ??
                    "N/A"}
                </TableCell>
              )}
              <TableCell>{feature.range}</TableCell>
              <TableCell>{feature.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default FeaturesTable;
