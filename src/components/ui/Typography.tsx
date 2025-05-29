import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

interface Props {
  variant: "h1" | "h2" | "h3" | "p" | "blockquote" | "lead" | "muted";
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Typography({ variant, children, className, as: Component = "p" }: Props) {
  const variantClasses = {
    h1: "text-4xl font-bold tracking-tight",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
    blockquote: "border-l-2 pl-6 italic",
    lead: "text-xl text-muted-foreground",
    muted: "text-sm text-muted-foreground",
  };

  // Type assertion for Component since we know it will be a valid HTML element
  const Element = Component as ElementType;

  return <Element className={cn(variantClasses[variant], className)}>{children}</Element>;
}

// List components
interface ListProps {
  children: ReactNode;
  className?: string;
  ordered?: boolean;
}

export function List({ children, className, ordered = false }: ListProps) {
  const Component = ordered ? "ol" : "ul";
  return (
    <Component
      className={cn(
        "my-6 ml-6 [&>li]:mt-2",
        ordered ? "list-decimal" : "list-disc",
        className
      )}
    >
      {children}
    </Component>
  );
}

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

export function ListItem({ children, className }: ListItemProps) {
  return <li className={cn("leading-relaxed", className)}>{children}</li>;
}

// Attach list components to Typography for convenient access
Typography.List = List;
Typography.ListItem = ListItem;
