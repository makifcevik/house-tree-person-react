import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import React from "react";

const SampleDataPage = () => {
  return (
    <Section>
      <Container>
        <Typography variant='h1'>Sample Data</Typography>
        <Typography variant='blockquote' className='mt-5'>
          Will be implemented soon inşallah 😉.
        </Typography>
      </Container>
    </Section>
  );
};

export default SampleDataPage;
