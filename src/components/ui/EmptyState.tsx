import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
  compact?: boolean;
}

export function EmptyState({ icon: Icon, title, description, action, compact = false }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-border text-center ${
        compact ? 'gap-2 px-6 py-8' : 'gap-3 px-6 py-16'
      }`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface text-ink-faint">
        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-ink">{title}</p>
        <p className="max-w-sm text-sm text-ink-faint">{description}</p>
      </div>
      {action}
    </div>
  );
}
