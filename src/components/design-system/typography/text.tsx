
import React from "react";
import { cn } from "@/lib/utils";

export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'htmlFor'> {
  /** The size of the text */
  size?: TextSize;
  /** Optional custom weight override */
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  /** Optional alignment */
  align?: "left" | "center" | "right";
  /** Whether the text should be muted */
  muted?: boolean;
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  /** Whether the paragraph needs to preserve line breaks */
  preserveBreaks?: boolean;
  /** Whether this text is a label */
  as?: "p" | "span" | "label" | "caption" | "helper";
  /** For when Text is used as a label */
  htmlFor?: string;
}

const textSizes: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const fontWeights = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

// Default configurations for semantic text variants
const textVariants = {
  p: {
    size: "base" as TextSize,
    className: "leading-7 [&:not(:first-child)]:mt-6",
  },
  span: {
    size: "base" as TextSize,
    className: "",
  },
  label: {
    size: "sm" as TextSize,
    className: "font-medium",
  },
  caption: {
    size: "xs" as TextSize,
    className: "",
  },
  helper: {
    size: "xs" as TextSize,
    className: "italic",
  },
};

/**
 * A text component for rendering paragraphs, labels, captions, and helper text with consistent styling.
 * 
 * @example
 * ```tsx
 * <Text>Standard paragraph text</Text>
 * <Text size="sm" muted>Smaller muted text</Text>
 * <Text as="label" htmlFor="input-id">Form Field Label</Text>
 * <Text as="caption">Figure 1.0: Caption text</Text>
 * <Text as="helper" muted>Helper text providing additional context</Text>
 * ```
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(({
  size,
  weight,
  align = "left",
  muted = false,
  truncate = false,
  preserveBreaks = false,
  as = "p",
  className,
  children,
  htmlFor,
  ...props
}, ref) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  
  const variant = textVariants[as];
  const finalSize = size || variant.size;
  
  const commonClassNames = cn(
    textSizes[finalSize],
    weight ? fontWeights[weight] : "",
    alignmentClass[align],
    muted && "text-muted-foreground",
    truncate && "truncate",
    preserveBreaks && "whitespace-pre-line",
    variant.className,
    className
  );

  // Handle different element types with their appropriate props
  if (as === "label") {
    return (
      <label
        ref={ref as React.Ref<HTMLLabelElement>}
        className={commonClassNames}
        htmlFor={htmlFor}
        {...(props as React.LabelHTMLAttributes<HTMLLabelElement>)}
      >
        {children}
      </label>
    );
  }
  
  // Handle paragraph and span elements
  if (as === "p" || as === "caption" || as === "helper") {
    return (
      <p
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={commonClassNames}
        {...(props as React.HTMLAttributes<HTMLParagraphElement>)}
      >
        {children}
      </p>
    );
  }
  
  // Handle span element
  return (
    <span
      ref={ref as React.Ref<HTMLSpanElement>}
      className={commonClassNames}
      {...(props as React.HTMLAttributes<HTMLSpanElement>)}
    >
      {children}
    </span>
  );
});

Text.displayName = "Text";
