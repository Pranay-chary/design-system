
import React from "react";
import { cn } from "@/lib/utils";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** The heading level (1-6) */
  level: HeadingLevel;
  /** Optional custom weight override */
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  /** Optional alignment */
  align?: "left" | "center" | "right";
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
}

const headingSizes: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-5xl font-bold tracking-tight",
  2: "text-3xl md:text-4xl font-bold tracking-tight",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg md:text-xl font-medium",
  6: "text-base md:text-lg font-medium",
};

const fontWeights = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

/**
 * A heading component that renders h1-h6 elements with consistent styling.
 * 
 * @example
 * ```tsx
 * <Heading level={1}>Page Title</Heading>
 * <Heading level={2} weight="medium" align="center">Section Title</Heading>
 * ```
 */
export const Heading: React.FC<HeadingProps> = ({
  level,
  weight,
  align = "left",
  truncate = false,
  className,
  children,
  ...props
}) => {
  const HeadingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <HeadingTag
      className={cn(
        headingSizes[level],
        weight && fontWeights[weight],
        alignmentClass[align],
        truncate && "truncate",
        "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </HeadingTag>
  );
};
