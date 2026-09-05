import { useRef } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  'aria-label'?: string;
}

export function CodeEditor({ value, onChange, placeholder, ...aria }: CodeEditorProps) {
  const gutterRef = useRef<HTMLDivElement>(null);
  const lineCount = value.split('\n').length;

  function handleScroll(e: React.UIEvent<HTMLTextAreaElement>) {
    if (gutterRef.current) {
      gutterRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  }

  return (
    <div className="flex h-full min-h-0 overflow-hidden bg-surface-elevated">
      <div
        ref={gutterRef}
        className="select-none overflow-hidden px-3 py-4 text-right font-mono text-[13px] leading-6 text-ink-faint/70"
        aria-hidden="true"
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        placeholder={placeholder}
        spellCheck={false}
        className="h-full min-h-0 flex-1 resize-none bg-transparent py-4 pr-4 font-mono text-[13px] leading-6 text-ink outline-none placeholder:text-ink-faint"
        {...aria}
      />
    </div>
  );
}
