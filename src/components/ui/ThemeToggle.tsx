import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import type { ThemeMode } from '../../theme/ThemeContext';

const OPTIONS: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
  { mode: 'light', label: 'Light', icon: Sun },
  { mode: 'dark', label: 'Dark', icon: Moon },
  { mode: 'system', label: 'System', icon: Monitor },
];

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { mode, setMode } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={`inline-flex items-center rounded-md border border-border bg-surface p-0.5 ${className}`}
    >
      {OPTIONS.map(({ mode: optionMode, label, icon: Icon }) => {
        const active = mode === optionMode;
        return (
          <button
            key={optionMode}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setMode(optionMode)}
            className={`inline-flex items-center gap-1.5 rounded-[5px] px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 ${
              active
                ? 'bg-surface-elevated text-ink shadow-subtle'
                : 'text-ink-faint hover:text-ink-muted'
            }`}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
