import React from "react";
import { Card, CardContent } from "./ui/card";
import { Typography } from "./ui/Typography";
import { Progress } from "./ui/progress";
import { useTranslation } from "react-i18next";

const EXTERNALIZATION_COLOR = "bg-red-700";
const INTERNALIZATION_COLOR = "bg-blue-700";
const DEPRESSION_COLOR = "bg-amber-500";

interface Props {
  imageClass: "house" | "tree" | "person" | "processing";
  extValue: number;
  intValue: number;
  depValue: number;
}

const capitalizeFirstLetter = (str?: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const OverallResults = ({ imageClass, extValue, intValue, depValue }: Props) => {
  const { t } = useTranslation();
  // Get the image classes object
  const imageClasses = t("HTPDictionary.imageClasses", { returnObjects: true }) as Record<
    string,
    string
  >;

  // Safely get the class display name
  // const normalizedImageClass = imageClass.toLowerCase();
  const name = imageClasses[imageClass] || "Unknown";
  const classDisplayName = capitalizeFirstLetter(name);

  return (
    <Card className='flex flex-grow'>
      <CardContent className='flex flex-col gap-4 lg:mx-12'>
        <div className='mb-2 mt-4'>
          <Typography variant='h3'>{t("overallEvaluation.title")}</Typography>
          <Typography variant='lead'>{classDisplayName}</Typography>
        </div>
        <div>
          <Typography variant='h3'>
            {t("HTPDictionary.evaluation.externalization")}
          </Typography>
          <div className='flex flex-row align-middle items-center'>
            <Progress value={extValue} indicatorClassName={EXTERNALIZATION_COLOR} />
            <Typography variant='lead' className='ml-8'>
              {extValue}%
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant='h3'>
            {t("HTPDictionary.evaluation.internalization")}
          </Typography>
          <div className='flex flex-row align-middle items-center'>
            <Progress value={intValue} indicatorClassName={INTERNALIZATION_COLOR} />
            <Typography variant='lead' className='ml-8'>
              {intValue}%
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant='h3'>{t("HTPDictionary.evaluation.depression")}</Typography>
          <div className='flex flex-row align-middle items-center'>
            <Progress value={depValue} indicatorClassName={DEPRESSION_COLOR} />
            <Typography variant='lead' className='ml-8'>
              {depValue}%
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverallResults;
