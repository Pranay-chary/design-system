
import React, { forwardRef, useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Text } from "../typography/text";

export interface DropdownOption {
  /** The value of the option */
  value: string;
  /** The label of the option */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Label text for the dropdown */
  label?: string;
  /** Options to display in the dropdown */
  options: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Helper text to display below the dropdown */
  helperText?: string;
  /** Error message to display below the dropdown */
  error?: string;
  /** Whether the dropdown has an error */
  hasError?: boolean;
  /** Size of the dropdown */
  size?: "sm" | "md" | "lg";
  /** Leading icon to display */
  leadingIcon?: React.ReactNode;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
  /** Whether to make the dropdown full width */
  fullWidth?: boolean;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
}

/**
 * A dropdown/select menu component with support for labels, helper text, and error states.
 * 
 * @example
 * ```tsx
 * const options = [
 *   { value: 'apple', label: 'Apple' },
 *   { value: 'banana', label: 'Banana' },
 *   { value: 'orange', label: 'Orange' },
 * ];
 * 
 * const [selectedFruit, setSelectedFruit] = useState('');
 * 
 * <Dropdown
 *   label="Select a Fruit"
 *   options={options}
 *   value={selectedFruit}
 *   onChange={setSelectedFruit}
 *   placeholder="Choose a fruit..."
 * />
 * ```
 */
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      label,
      options,
      value,
      placeholder = "Select an option...",
      helperText,
      error,
      hasError = false,
      size = "md",
      leadingIcon,
      disabled = false,
      fullWidth = false,
      className,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const uniqueId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    
    // Update internal state when external value changes
    useEffect(() => {
      setSelectedValue(value);
    }, [value]);
    
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);
    
    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
        case "Enter":
        case " ":
          if (!isOpen) {
            setIsOpen(true);
            event.preventDefault();
          }
          break;
        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
            event.preventDefault();
          }
          break;
      }
    };
    
    const handleSelect = (option: DropdownOption) => {
      if (option.disabled) return;
      
      setSelectedValue(option.value);
      onChange?.(option.value);
      setIsOpen(false);
    };
    
    const selectedOption = options.find(option => option.value === selectedValue);
    
    // Size-specific styles
    const sizeStyles = {
      sm: "h-8 px-3 py-1 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-5 py-2.5 text-lg",
    };

    return (
      <div
        ref={mergeRefs(ref, dropdownRef)}
        className={cn("relative flex flex-col space-y-1.5", fullWidth && "w-full", className)}
        {...props}
      >
        {label && (
          <Text as="label" htmlFor={uniqueId} weight="medium">
            {label}
          </Text>
        )}
        
        <button
          id={uniqueId}
          type="button"
          className={cn(
            "flex items-center justify-between rounded-md border border-input bg-background text-left",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            sizeStyles[size],
            hasError && "border-destructive focus-visible:ring-destructive",
            fullWidth && "w-full"
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? uniqueId : undefined}
          aria-invalid={hasError}
          aria-describedby={
            error
              ? `${uniqueId}-error`
              : helperText
              ? `${uniqueId}-description`
              : undefined
          }
        >
          <div className="flex items-center gap-2 flex-1 overflow-hidden">
            {leadingIcon && (
              <span className="flex-shrink-0 text-muted-foreground">{leadingIcon}</span>
            )}
            <span className={cn("block truncate", !selectedValue && "text-muted-foreground")}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
          <span className="pointer-events-none flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-transform", isOpen && "rotate-180")}>
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </span>
        </button>
        
        {isOpen && (
          <div 
            className="absolute z-50 mt-1 w-full rounded-md border border-input bg-popover shadow-md"
            style={{ top: "100%" }}
          >
            <ul 
              className="max-h-60 overflow-auto py-1 text-base sm:text-sm"
              role="listbox"
              aria-labelledby={uniqueId}
              tabIndex={-1}
            >
              {options.map((option) => (
                <li
                  key={option.value}
                  className={cn(
                    "relative cursor-default select-none px-3 py-2",
                    option.value === selectedValue
                      ? "bg-primary text-primary-foreground"
                      : "text-popover-foreground hover:bg-muted",
                    option.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
                  )}
                  role="option"
                  aria-selected={option.value === selectedValue}
                  aria-disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))}
              {options.length === 0 && (
                <li className="relative cursor-default select-none px-3 py-2 text-muted-foreground">
                  No options available
                </li>
              )}
            </ul>
          </div>
        )}
        
        {helperText && !error && (
          <Text
            as="helper"
            muted
            id={`${uniqueId}-description`}
          >
            {helperText}
          </Text>
        )}
        {error && (
          <Text
            as="helper"
            id={`${uniqueId}-error`}
            className="text-destructive"
          >
            {error}
          </Text>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

// Helper function to merge refs
function mergeRefs<T = any>(...refs: React.Ref<T>[]) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
