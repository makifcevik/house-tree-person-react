import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Typography } from "./ui/Typography";
import { Progress } from "./ui/progress";
import { useTranslation } from "react-i18next";

const EXTERNALIZATION_COLOR = "bg-red-700";
const INTERNALIZATION_COLOR = "bg-blue-700";
const DEPRESSION_COLOR = "bg-amber-500";

interface Props {
  imageClass: string;
  extValue: number;
  intValue: number;
  depValue: number;
}

const OverallResults = ({ imageClass, extValue, intValue, depValue }: Props) => {
  const { t } = useTranslation();
  return (
    <Card className='flex flex-grow'>
      <CardContent className='flex flex-col gap-4 lg:mx-12'>
        <div className='mb-2 mt-4'>
          <Typography variant='h3'>{t("overallEvaluation.title")}</Typography>
          <Typography variant='lead'>{imageClass}</Typography>
        </div>
        <div>
          <Typography variant='h3'>{t("overallEvaluation.externalization")}</Typography>
          <div className='flex flex-row align-middle items-center'>
            <Progress value={extValue} indicatorClassName={EXTERNALIZATION_COLOR} />
            <Typography variant='lead' className='ml-8'>
              {extValue}%
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant='h3'>{t("overallEvaluation.internalization")}</Typography>
          <div className='flex flex-row align-middle items-center'>
            <Progress value={intValue} indicatorClassName={INTERNALIZATION_COLOR} />
            <Typography variant='lead' className='ml-8'>
              {intValue}%
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant='h3'>{t("overallEvaluation.depression")}</Typography>
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
