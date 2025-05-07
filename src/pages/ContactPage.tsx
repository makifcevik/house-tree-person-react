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

interface ContactItem {
  role: string;
  name: string;
  email: string;
}

const ContactPage = () => {
  const { t } = useTranslation();
  const items = t("contactPage.contactList", { returnObjects: true }) as ContactItem[];

  return (
    <Section>
      <Container>
        <Typography variant='h1'>{t("contactPage.title")}</Typography>
        <Typography variant='blockquote' className='my-5'>
          {t("contactPage.contactInfo")}
        </Typography>
        <Table className='mt-15'>
          <TableCaption>List of contacts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Section>
  );
};

export default ContactPage;
