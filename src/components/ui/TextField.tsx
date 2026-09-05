import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-ink">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId ?? hintId}
          className={`h-11 rounded-md border bg-surface-elevated px-3.5 text-sm text-ink transition-colors duration-150 placeholder:text-ink-faint focus-visible:outline-2 focus-visible:outline-mint ${
            error ? 'border-danger' : 'border-border-strong'
          } ${className}`}
          {...props}
        />
        {hint && !error ? (
          <p id={hintId} className="text-xs text-ink-faint">
            {hint}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} role="alert" className="text-xs text-danger">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
