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
          <Typography variant='lead'>House</Typography>
        </div>
        <div>
          <Typography variant='h3' className='mb-3'>
            {t("overallEvaluation.externalization")}
          </Typography>
          <Progress value={extValue} indicatorClassName={EXTERNALIZATION_COLOR} />
        </div>
        <div>
          <Typography variant='h3' className='mb-3'>
            {t("overallEvaluation.internalization")}
          </Typography>
          <Progress value={intValue} indicatorClassName={INTERNALIZATION_COLOR} />
        </div>
        <div>
          <Typography variant='h3' className='mb-3'>
            {t("overallEvaluation.depression")}
          </Typography>
          <Progress value={depValue} indicatorClassName={DEPRESSION_COLOR} />
        </div>
      </CardContent>
    </Card>
  );
};

export default OverallResults;
