
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        iconSm: "h-8 w-8",
      },
      withIcon: {
        true: "gap-2",
      },
      isDropdown: {
        true: "gap-1",
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed bg-gray-200 text-gray-900 hover:bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isDropdown?: boolean;
  isDisabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      withIcon,
      leftIcon,
      rightIcon,
      isDropdown = false,
      isDisabled = false,
      children,
      ...props
    },
    ref
  ) => {
    // Don't show dropdown or icons for danger buttons
    const isDanger = variant === "danger";
    const finalLeftIcon = isDanger ? null : leftIcon;
    const finalRightIcon = isDanger ? null : rightIcon;
    const finalIsDropdown = isDanger ? false : isDropdown;

    const dropdownIcon = finalIsDropdown ? <ChevronDown className="h-4 w-4" /> : null;

    // If button has any icon, set withIcon to true for proper spacing
    const hasIcon = !!(finalLeftIcon || finalRightIcon || finalIsDropdown);

    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            withIcon: hasIcon,
            isDropdown: finalIsDropdown,
            isDisabled,
          }),
          className
        )}
        ref={ref}
        disabled={isDisabled || props.disabled}
        {...props}
      >
        {finalLeftIcon && finalLeftIcon}
        {children}
        {finalRightIcon && finalRightIcon}
        {finalIsDropdown && dropdownIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
