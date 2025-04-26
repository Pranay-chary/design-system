
import React from "react";
import { cn } from "@/lib/utils";
import { Text } from "../typography/text";
import { Heading } from "../typography/heading";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The variant of the alert */
  variant?: AlertVariant;
  /** The title of the alert */
  title?: string;
  /** Whether the alert should fill its container width */
  fullWidth?: boolean;
  /** Whether the alert should be dismissible */
  dismissible?: boolean;
  /** Callback when the alert is dismissed */
  onDismiss?: () => void;
  /** Optional action button text */
  actionText?: string;
  /** Optional action button callback */
  onAction?: () => void;
}

const variants = {
  info: {
    containerClass: "bg-info/10 border-info text-info-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-info">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    title: "Information",
  },
  success: {
    containerClass: "bg-success/10 border-success text-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-success">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
    title: "Success",
  },
  warning: {
    containerClass: "bg-warning/10 border-warning text-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-warning">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    title: "Warning",
  },
  error: {
    containerClass: "bg-destructive/10 border-destructive text-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-destructive">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    title: "Error",
  },
};

/**
 * An alert banner component for displaying important information, success messages, warnings, or errors.
 * 
 * @example
 * ```tsx
 * <Alert 
 *   variant="success" 
 *   title="Profile Updated!"
 * >
 *   Your profile information has been successfully updated.
 * </Alert>
 * 
 * <Alert 
 *   variant="error" 
 *   title="Connection Error" 
 *   dismissible 
 *   onDismiss={() => console.log("Alert dismissed")}
 *   actionText="Retry"
 *   onAction={() => console.log("Retrying...")}
 * >
 *   We couldn't connect to the server. Please check your internet connection.
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  fullWidth = false,
  dismissible = false,
  onDismiss,
  actionText,
  onAction,
  className,
  ...props
}) => {
  const variantConfig = variants[variant];
  
  return (
    <div
      role="alert"
      className={cn(
        "flex gap-3 border rounded-lg p-4 animate-fade-in",
        variantConfig.containerClass,
        fullWidth ? "w-full" : "max-w-md",
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 pt-0.5">{variantConfig.icon}</div>
      <div className="flex-1">
        {title && (
          <Heading level={6} className="mb-1">
            {title}
          </Heading>
        )}
        <div className="text-sm">
          {typeof children === "string" ? (
            <Text size="sm">{children}</Text>
          ) : (
            children
          )}
        </div>
        {actionText && onAction && (
          <button
            className="mt-2 text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={(e) => {
              e.stopPropagation();
              onAction();
            }}
          >
            {actionText}
          </button>
        )}
      </div>
      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="flex-shrink-0 rounded-full p-1 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};
