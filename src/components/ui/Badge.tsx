import type { ReactNode } from 'react';

type Tone = 'neutral' | 'mint' | 'lavender';

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const TONE_CLASSES: Record<Tone, string> = {
  neutral: 'bg-surface text-ink-muted border-border',
  mint: 'bg-mint/10 text-mint-deep dark:text-mint border-mint/20',
  lavender: 'bg-lavender/10 text-lavender border-lavender/25',
};

export function Badge({ children, tone = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
