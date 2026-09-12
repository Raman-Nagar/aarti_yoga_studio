"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  "aria-label"?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] active:scale-[0.97] shadow-sm hover:shadow-md",
  secondary:
    "bg-[var(--color-surface-2)] text-[var(--color-text)] hover:bg-[var(--color-border-2)] active:scale-[0.97]",
  ghost:
    "bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface)] active:scale-[0.97]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5d] active:scale-[0.97] shadow-sm hover:shadow-md",
  outline:
    "bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/8 hover:border-[var(--color-primary-dark)] hover:text-[var(--color-primary-dark)] active:scale-[0.97]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  disabled,
  type = "button",
  onClick,
  children,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed select-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
