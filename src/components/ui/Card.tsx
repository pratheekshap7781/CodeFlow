import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ interactive = false, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface-elevated shadow-subtle ${
        interactive ? 'transition-colors duration-150 hover:border-border-strong' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
