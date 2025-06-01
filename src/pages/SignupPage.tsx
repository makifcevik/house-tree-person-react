import React from "react";
import Navbar from "../components/Navbar";
import { SignupForm } from "@/components/forms/SignupForm";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Section";
import { useTranslation } from "react-i18next";

function SignupPage() {
  const { t } = useTranslation();
  return (
    <Section className='sm'>
      <Container className='max-w-[400px]'>
        <Card>
          <CardContent>
            <Typography variant='h1' className='mb-5'>
              {t("formPages.signup")}
            </Typography>
            <SignupForm />
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

export default SignupPage;
