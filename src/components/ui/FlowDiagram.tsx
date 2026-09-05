const STEPS = ['Code', 'Execute', 'Trace', 'Visualize', 'Understand'];

export function FlowDiagram({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center">
        {STEPS.map((step, i) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2.5">
              <div
                className={`flex h-2.5 w-2.5 items-center justify-center rounded-full ${
                  i === STEPS.length - 1 ? 'bg-mint-deep dark:bg-mint' : 'bg-lavender'
                }`}
              />
              <span className="whitespace-nowrap font-mono text-xs text-ink-muted">{step}</span>
            </div>
            {i < STEPS.length - 1 ? (
              <div className="mx-2 mb-6 h-px flex-1 bg-gradient-to-r from-lavender/50 via-border-strong to-border sm:mx-3" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
