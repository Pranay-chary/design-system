
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Text } from "../typography/text";

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text for the input */
  label?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Error message to display below the input */
  error?: string;
  /** Whether the input has an error */
  hasError?: boolean;
  /** Size of the input */
  size?: "sm" | "md" | "lg";
  /** Leading icon to display */
  leadingIcon?: React.ReactNode;
  /** Trailing icon to display */
  trailingIcon?: React.ReactNode;
  /** Whether to make the input full width */
  fullWidth?: boolean;
}

/**
 * A text input component with support for labels, helper text, error states, and icons.
 * 
 * @example
 * ```tsx
 * <TextInput
 *   label="Email Address"
 *   helperText="We'll never share your email with anyone else"
 *   placeholder="name@example.com"
 *   type="email"
 *   required
 * />
 * 
 * <TextInput
 *   label="Password"
 *   type="password"
 *   hasError={true}
 *   error="Password must be at least 8 characters"
 * />
 * ```
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      error,
      hasError = false,
      size = "md",
      leadingIcon,
      trailingIcon,
      fullWidth = false,
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if none is provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Size-specific styles
    const sizeStyles = {
      sm: "h-8 px-3 py-1 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-5 py-2.5 text-lg",
    };

    return (
      <div className={cn("flex flex-col space-y-1.5", fullWidth && "w-full", className)}>
        {label && (
          <Text as="label" htmlFor={inputId} weight="medium">
            {label}
          </Text>
        )}
        <div className="relative">
          {leadingIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leadingIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "flex w-full rounded-md border border-input bg-background ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              sizeStyles[size],
              leadingIcon && "pl-10",
              trailingIcon && "pr-10",
              hasError && "border-destructive focus-visible:ring-destructive",
              fullWidth && "w-full"
            )}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-description`
                : undefined
            }
            {...props}
          />
          {trailingIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {trailingIcon}
            </div>
          )}
        </div>
        {helperText && !error && (
          <Text
            as="helper"
            muted
            id={`${inputId}-description`}
          >
            {helperText}
          </Text>
        )}
        {error && (
          <Text
            as="helper"
            id={`${inputId}-error`}
            className="text-destructive"
          >
            {error}
          </Text>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
