import React from "react";
import LoginForm from "../components/forms/LoginForm";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Card, CardContent } from "@/components/ui/card";

function LoginPage() {
  return (
    <Section spacing='xl'>
      <Container className='max-w-[400px]'>
        <Card>
          <CardContent>
            <Typography variant='h1' className='mt-2 mb-16'>
              Login
            </Typography>
            <LoginForm />
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

export default LoginPage;
