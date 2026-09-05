import type { LanguageDef } from '../../lib/languages';

interface LanguageIconProps {
  language: Pick<LanguageDef, 'monogram' | 'accent'>;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-12 w-12 text-sm',
  lg: 'h-14 w-14 text-base',
} as const;

export function LanguageIcon({ language, size = 'md' }: LanguageIconProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg border font-mono font-medium ${SIZE_MAP[size]}`}
      style={{
        backgroundColor: `${language.accent}14`,
        borderColor: `${language.accent}33`,
        color: language.accent,
      }}
      aria-hidden="true"
    >
      {language.monogram}
    </span>
  );
}
