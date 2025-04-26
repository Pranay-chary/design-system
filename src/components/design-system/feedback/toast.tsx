
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export type ToastVariant = "info" | "success" | "warning" | "error";
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";

export interface ToastProps {
  /** Unique identifier for the toast */
  id: string;
  /** The content of the toast */
  message: string;
  /** The title of the toast (optional) */
  title?: string;
  /** The variant of the toast */
  variant?: ToastVariant;
  /** How long the toast should be displayed (in milliseconds) */
  duration?: number;
  /** Whether the toast should have a close button */
  closable?: boolean;
  /** Position of the toast on the screen */
  position?: ToastPosition;
  /** Action button text */
  actionText?: string;
  /** Action button callback */
  onAction?: () => void;
  /** Callback when the toast is closed */
  onClose?: () => void;
}

const variants = {
  info: {
    bgClass: "bg-info text-info-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  success: {
    bgClass: "bg-success text-success-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
  warning: {
    bgClass: "bg-warning text-warning-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  error: {
    bgClass: "bg-destructive text-destructive-foreground",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
  },
};

/**
 * A toast component for displaying notifications.
 * 
 * @example
 * ```tsx
 * <Toast
 *   id="success-toast"
 *   title="Success"
 *   message="Your changes have been saved!"
 *   variant="success"
 *   position="top-right"
 *   duration={5000}
 * />
 * ```
 */
export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  title,
  variant = "info",
  duration = 5000,
  closable = true,
  position = "top-right",
  actionText,
  onAction,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  
  // Close the toast after the duration
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration]);
  
  const handleClose = () => {
    setIsExiting(true);
    
    // Wait for animation to complete
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300); // Match animation duration
  };
  
  // Positions
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };
  
  if (!isVisible) {
    return null;
  }
  
  return createPortal(
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "fixed z-50 max-w-sm shadow-lg rounded-lg",
        positionClasses[position],
        isExiting ? "animate-toast-slide-out" : "animate-toast-slide-in"
      )}
      id={id}
    >
      <div
        className={cn(
          "p-4 rounded-lg shadow-md flex gap-3 items-start",
          variants[variant].bgClass
        )}
      >
        <div className="flex-shrink-0 pt-0.5">{variants[variant].icon}</div>
        <div className="flex-1 overflow-hidden">
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm">{message}</div>
          
          {actionText && onAction && (
            <button
              className="mt-2 inline-flex items-center text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
              onClick={(e) => {
                e.stopPropagation();
                onAction();
                handleClose();
              }}
            >
              {actionText}
            </button>
          )}
        </div>
        
        {closable && (
          <button
            type="button"
            aria-label="Close notification"
            onClick={handleClose}
            className="flex-shrink-0 rounded-full p-1 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

// Toast container for managing multiple toasts
export const ToastContainer: React.FC<{ position?: ToastPosition, children?: React.ReactNode }> = ({ position = "top-right", children }) => {
  return createPortal(
    <div
      className={cn(
        "fixed z-50 flex flex-col gap-2 max-w-sm w-full p-4",
        position.startsWith("top") ? "top-0" : "bottom-0",
        position.endsWith("left") ? "left-0" : position.endsWith("right") ? "right-0" : "left-1/2 -translate-x-1/2"
      )}
    >
      {children}
    </div>,
    document.body
  );
};

// Toast manager singleton for imperative toast creation
type ToastOptions = Omit<ToastProps, "id">;

interface ToastManagerState {
  toasts: ToastProps[];
  add: (options: ToastOptions) => string;
  remove: (id: string) => void;
  removeAll: () => void;
}

let toastManager: ToastManagerState | null = null;

export const useToast = (): ToastManagerState => {
  if (!toastManager) {
    toastManager = createToastManager();
  }
  
  return toastManager;
};

function createToastManager(): ToastManagerState {
  let toasts: ToastProps[] = [];
  let listeners: (() => void)[] = [];
  
  const subscribe = (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  
  const notify = () => {
    listeners.forEach(listener => listener());
  };
  
  return {
    get toasts() {
      return toasts;
    },
    add(options: ToastOptions) {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const toast = { 
        id, 
        ...options,
        onClose: () => {
          toastManager?.remove(id);
          options.onClose?.();
        }
      };
      
      toasts = [...toasts, toast];
      notify();
      
      return id;
    },
    remove(id: string) {
      toasts = toasts.filter(t => t.id !== id);
      notify();
    },
    removeAll() {
      toasts = [];
      notify();
    }
  };
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toast = useToast();
  const [, setToasts] = useState<ToastProps[]>(toast.toasts);
  
  useEffect(() => {
    // Subscribe to toast manager updates
    const unsubscribe = subscribe(() => {
      setToasts([...toast.toasts]);
    });
    
    return unsubscribe;
  }, []);
  
  function subscribe(callback: () => void) {
    const interval = setInterval(callback, 100);
    return () => clearInterval(interval);
  }
  
  return (
    <>
      {children}
      {toast.toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
        />
      ))}
    </>
  );
};
