import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-mint-deep text-white hover:bg-mint-deep/90 dark:bg-mint dark:text-[#08211A] dark:hover:bg-mint/90',
  secondary:
    'bg-transparent text-ink border border-border-strong hover:bg-surface',
  ghost: 'bg-transparent text-ink-muted hover:bg-surface hover:text-ink',
  danger: 'bg-transparent text-danger border border-danger/40 hover:bg-danger/10',
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', icon, iconPosition = 'left', className = '', children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' ? icon : null}
        {children}
        {icon && iconPosition === 'right' ? icon : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
