import { RotateCcw, ChevronLeft, Play, ChevronRight } from 'lucide-react';

export function ExecutionControls() {
  return (
    <div
      className="flex items-center justify-between gap-4 border-t border-border bg-surface px-5 py-3"
      title="Execution controls become active after running a program"
    >
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-faint disabled:cursor-not-allowed"
          aria-label="Reset"
        >
          <RotateCcw className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-faint disabled:cursor-not-allowed"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mint/10 text-mint-deep disabled:cursor-not-allowed dark:text-mint"
          aria-label="Play"
        >
          <Play className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-faint disabled:cursor-not-allowed"
          aria-label="Next step"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-ink-faint">Step 0 / 0</span>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-xs text-ink-faint">Speed</span>
          <input
            type="range"
            disabled
            className="h-1 w-24 accent-mint-deep disabled:cursor-not-allowed dark:accent-mint"
          />
        </div>
      </div>
    </div>
  );
}
