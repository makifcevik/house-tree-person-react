import React from "react";
import { ImageUpload } from "@/components/ui/ImageUpload";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Progress } from "@/components/ui/progress";

const EXTERNALIZATION_COLOR = "bg-red-700";
const INTERNALIZATION_COLOR = "bg-blue-700";
const DEPRESSION_COLOR = "bg-amber-500";

const EXTERNALIZATION_VALUE = 33;
const INTERNALIZATION_VALUE = 63;
const DEPRESSION_VALUE = 13;

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
          <Card className='flex flex-grow'>
            <CardContent className='flex flex-col gap-4 lg:mx-12'>
              <div className='mb-2 mt-4'>
                <Typography variant='h3'>{t("demoPage.evaluation.title")}</Typography>
                <Typography variant='lead'>House</Typography>
              </div>
              <div>
                <Typography variant='h3' className='mb-3'>
                  {t("demoPage.evaluation.externalization")}
                </Typography>
                <Progress
                  value={EXTERNALIZATION_VALUE}
                  indicatorClassName={EXTERNALIZATION_COLOR}
                />
              </div>
              <div>
                <Typography variant='h3' className='mb-3'>
                  {t("demoPage.evaluation.internalization")}
                </Typography>
                <Progress
                  value={INTERNALIZATION_VALUE}
                  indicatorClassName={INTERNALIZATION_COLOR}
                />
              </div>
              <div>
                <Typography variant='h3' className='mb-3'>
                  {t("demoPage.evaluation.depression")}
                </Typography>
                <Progress
                  value={DEPRESSION_VALUE}
                  indicatorClassName={DEPRESSION_COLOR}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default DemoPage;
