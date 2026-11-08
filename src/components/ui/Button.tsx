import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-[family-name:var(--font-outfit)] rounded-lg transition-all duration-300 ease-out cursor-pointer select-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-hover)] active:scale-[0.98]",
    secondary:
      "bg-[var(--color-light-beige)] text-[var(--color-dark-text)] hover:bg-[var(--color-border)] active:scale-[0.98]",
    outline:
      "bg-transparent text-[var(--color-dark-text)] border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] active:scale-[0.98]",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
