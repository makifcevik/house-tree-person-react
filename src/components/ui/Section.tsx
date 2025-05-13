import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "./Container";

interface Props {
  children: ReactNode;
  className?: string;
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Section({ children, className, spacing = "md" }: Props) {
  const spacingClasses = {
    xs: "py-4",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-20",
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      <Container>{children}</Container>
    </section>
  );
}
