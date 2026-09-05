import { Link } from 'react-router-dom';

interface LogoProps {
  to?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZE_MAP = {
  sm: { box: 'h-6 w-6', text: 'text-base', glyph: 'text-[11px]' },
  md: { box: 'h-8 w-8', text: 'text-lg', glyph: 'text-xs' },
  lg: { box: 'h-10 w-10', text: 'text-2xl', glyph: 'text-sm' },
} as const;

export function Logo({ to = '/', size = 'md', className = '' }: LogoProps) {
  const s = SIZE_MAP[size];

  const content = (
    <span className="inline-flex items-center gap-2">
      <span
        className={`${s.box} inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-surface text-mint-deep dark:text-mint`}
        aria-hidden="true"
      >
        <span className={`font-mono font-medium ${s.glyph}`}>{'</>'}</span>
      </span>
      <span className={`font-display font-semibold tracking-tight text-ink ${s.text}`}>
        Code<span className="text-mint-deep dark:text-mint">Flow</span>
      </span>
    </span>
  );

  if (!to) return <span className={`inline-flex items-center ${className}`}>{content}</span>;

  return (
    <Link
      to={to}
      className={`inline-flex items-center rounded-sm focus-visible:outline-offset-4 ${className}`}
    >
      {content}
    </Link>
  );
}
