import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "p" | "blockquote" | "lead" | "muted";
  children: ReactNode;
  className?: string;
}

export function Typography({ variant, children, className }: Props) {
  const variantClasses = {
    h1: "text-4xl font-bold tracking-tight",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
    blockquote: "border-l-2 pl-6 italic",
    lead: "text-xl text-muted-foreground",
    muted: "text-sm text-muted-foreground",
  };

  const Component =
    variant === "lead" || variant === "muted" ? "p" : variant === "p" ? "p" : variant;

  return (
    <Component className={cn(variantClasses[variant], className)}>{children}</Component>
  );
}
