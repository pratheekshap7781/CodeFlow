import type { ReactNode } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface AppTopBarProps {
  left?: ReactNode;
  right?: ReactNode;
}

export function AppTopBar({ left, right }: AppTopBarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-bg px-6">
      <div className="min-w-0">{left}</div>
      <div className="flex items-center gap-3">
        {right}
        <ThemeToggle />
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-xs font-medium text-ink-muted"
          title="Pratheeksha"
          aria-hidden="true"
        >
          P
        </div>
      </div>
    </header>
  );
}
