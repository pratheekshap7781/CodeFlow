const CODE_LINES = [
  { indent: 0, text: 'void bubbleSort(int arr[], int n) {' },
  { indent: 1, text: 'for (int i = 0; i < n - 1; i++) {' },
  { indent: 2, text: 'for (int j = 0; j < n-i-1; j++) {' },
  { indent: 3, text: 'if (arr[j] > arr[j+1])' },
  { indent: 4, text: 'swap(arr[j], arr[j+1]);' },
  { indent: 2, text: '}' },
  { indent: 1, text: '}' },
  { indent: 0, text: '}' },
];

const BARS = [2, 5, 8, 1, 6, 3];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-0">
        <div className="rounded-lg border border-border bg-surface-elevated shadow-panel">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="ml-2 font-mono text-xs text-ink-faint">bubble_sort.c</span>
          </div>
          <div className="px-4 py-4">
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex gap-3 font-mono text-[13px] leading-6">
                <span className="w-4 shrink-0 select-none text-right text-ink-faint/60">{i + 1}</span>
                <span
                  className={`text-ink-muted ${i === 3 ? 'rounded bg-mint/10 px-1 -mx-1 text-ink' : ''}`}
                  style={{ paddingLeft: `${line.indent * 14}px` }}
                >
                  {line.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden h-px w-10 shrink-0 sm:block">
          <svg viewBox="0 0 40 2" className="h-px w-10 overflow-visible" aria-hidden="true">
            <line x1="0" y1="1" x2="40" y2="1" stroke="rgb(var(--cf-mint))" strokeWidth="1" strokeDasharray="3 4" />
          </svg>
        </div>

        <div className="rounded-lg border border-border bg-surface-elevated shadow-panel">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-mono text-xs text-ink-faint">Array Visualization</span>
            <span className="rounded-full border border-mint/25 bg-mint/10 px-2 py-0.5 font-mono text-[11px] text-mint-deep dark:text-mint">
              step 4 / 15
            </span>
          </div>
          <div className="flex items-end justify-center gap-3 px-6 py-8">
            {BARS.map((value, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`w-7 rounded-t-sm ${
                    i === 1 || i === 2 ? 'bg-mint-deep dark:bg-mint' : 'bg-lavender/50'
                  }`}
                  style={{ height: `${value * 10 + 12}px` }}
                />
                <span className="font-mono text-[11px] text-ink-faint">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
