import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import ROUTES from "@/routes/routes";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Section spacing='xl'>
      <Container className='flex flex-col items-center'>
        <Typography variant='h1' className='mb-2'>
          Unkown Page
        </Typography>
        <Typography variant='lead' className='mb-6'>
          The page you requested was not found.
        </Typography>
        <Button variant='default' asChild>
          <Link to={ROUTES.HOME}>Home</Link>
        </Button>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
