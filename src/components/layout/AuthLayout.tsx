import type { ReactNode } from 'react';
import { Logo } from '../ui/Logo';

interface AuthLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
}

export function AuthLayout({ title, description, children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 py-12">
      <Logo size="lg" className="mb-8" />

      <div className="w-full max-w-sm rounded-lg border border-border bg-surface-elevated p-7 shadow-panel">
        <div className="mb-6 flex flex-col gap-1.5 text-center">
          <h1 className="font-display text-xl font-semibold tracking-tight text-ink">{title}</h1>
          <p className="text-sm text-ink-muted">{description}</p>
        </div>

        {children}
      </div>

      <p className="mt-6 text-sm text-ink-muted">{footer}</p>
    </div>
  );
}
