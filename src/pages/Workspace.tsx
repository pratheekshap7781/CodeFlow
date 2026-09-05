import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Code2,
  BarChart3,
  Waypoints,
  MessageSquareText,
  Gauge,
  Save,
  Play,
  Variable,
  TerminalSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { EmptyState } from '../components/ui/EmptyState';
import { CodeEditor } from '../components/workspace/CodeEditor';
import { ExecutionControls } from '../components/workspace/ExecutionControls';
import { LANGUAGES, type LanguageDef } from '../lib/languages';

type WorkspaceTab = 'editor' | 'visualization' | 'flow' | 'explanation' | 'complexity';

const TABS: { id: WorkspaceTab; label: string; icon: LucideIcon }[] = [
  { id: 'editor', label: 'Editor', icon: Code2 },
  { id: 'visualization', label: 'Visualization', icon: BarChart3 },
  { id: 'flow', label: 'Flow', icon: Waypoints },
  { id: 'explanation', label: 'Explanation', icon: MessageSquareText },
  { id: 'complexity', label: 'Complexity', icon: Gauge },
];

export function Workspace() {
  const [searchParams] = useSearchParams();
  const initialLangId = searchParams.get('lang');

  const [languageId, setLanguageId] = useState<LanguageDef['id']>(
    LANGUAGES.some((l) => l.id === initialLangId) ? (initialLangId as LanguageDef['id']) : 'cpp'
  );
  const [programName, setProgramName] = useState('Untitled Program');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('editor');

  const language = useMemo(
    () => LANGUAGES.find((l) => l.id === languageId) ?? LANGUAGES[1],
    [languageId]
  );

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-bg">
      {/* Top bar */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            to="/dashboard"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
          <div className="hidden sm:block">
            <Logo size="sm" />
          </div>
          <div className="h-6 w-px bg-border" aria-hidden="true" />
          <input
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            aria-label="Program name"
            className="min-w-0 truncate rounded-md bg-transparent px-2 py-1 text-sm font-medium text-ink outline-none hover:bg-surface focus-visible:bg-surface"
          />
          <select
            value={languageId}
            onChange={(e) => setLanguageId(e.target.value as LanguageDef['id'])}
            aria-label="Language"
            className="rounded-md border border-border bg-surface px-2.5 py-1.5 font-mono text-xs text-ink-muted outline-none focus-visible:outline-2 focus-visible:outline-mint"
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            icon={<Save className="h-3.5 w-3.5" />}
            disabled
            title="Saving requires an account — coming in a later stage"
          >
            Save
          </Button>
          <Button
            size="sm"
            icon={<Play className="h-3.5 w-3.5" />}
            disabled
            title="Code execution isn't implemented yet"
          >
            Run
          </Button>
          <div className="ml-1 hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Tab rail */}
        <nav
          className="flex w-16 shrink-0 flex-col items-center gap-1 border-r border-border bg-surface py-4"
          aria-label="Workspace panels"
        >
          {TABS.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                aria-current={active}
                title={label}
                className={`flex w-12 flex-col items-center gap-1 rounded-md py-2 text-[10px] font-medium transition-colors duration-150 ${
                  active
                    ? 'bg-surface-elevated text-mint-deep shadow-subtle dark:text-mint'
                    : 'text-ink-faint hover:bg-surface-elevated/60 hover:text-ink-muted'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Panel content */}
        <div className="min-w-0 flex-1 overflow-hidden">
          {activeTab === 'editor' ? (
            <EditorPanel
              code={code}
              onCodeChange={setCode}
              input={input}
              onInputChange={setInput}
              extension={language.extension}
            />
          ) : null}
          {activeTab === 'visualization' ? <VisualizationPanel /> : null}
          {activeTab === 'flow' ? <FlowPanel /> : null}
          {activeTab === 'explanation' ? <ExplanationPanel /> : null}
          {activeTab === 'complexity' ? <ComplexityPanel /> : null}
        </div>
      </div>
    </div>
  );
}

function EditorPanel({
  code,
  onCodeChange,
  input,
  onInputChange,
  extension,
}: {
  code: string;
  onCodeChange: (v: string) => void;
  input: string;
  onInputChange: (v: string) => void;
  extension: string;
}) {
  return (
    <div className="flex h-full min-h-0">
      <div className="flex min-w-0 flex-1 flex-col border-r border-border">
        <div className="flex h-10 shrink-0 items-center border-b border-border px-4">
          <span className="font-mono text-xs text-ink-faint">program{extension}</span>
        </div>
        <div className="min-h-0 flex-1">
          <CodeEditor
            value={code}
            onChange={onCodeChange}
            placeholder="Start typing your program..."
            aria-label="Source code"
          />
        </div>
        <ExecutionControls />
      </div>

      <div className="flex w-full max-w-sm shrink-0 flex-col divide-y divide-border">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-10 shrink-0 items-center gap-2 border-b border-border px-4">
            <TerminalSquare className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
            <span className="text-xs font-medium text-ink-muted">Input</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Program input, if any..."
            spellCheck={false}
            aria-label="Program input"
            className="min-h-[96px] flex-1 resize-none bg-transparent p-4 font-mono text-[13px] leading-6 text-ink outline-none placeholder:text-ink-faint"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-10 shrink-0 items-center gap-2 border-b border-border px-4">
            <TerminalSquare className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
            <span className="text-xs font-medium text-ink-muted">Output</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <p className="font-mono text-[13px] leading-6 text-ink-faint">
              Run your program to see output here.
            </p>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-10 shrink-0 items-center gap-2 border-b border-border px-4">
            <Variable className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
            <span className="text-xs font-medium text-ink-muted">Variables</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <p className="font-mono text-[13px] leading-6 text-ink-faint">
              Variable values will appear here during execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualizationPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-4">
        <span className="text-xs font-medium text-ink-muted">Array Visualization</span>
        <span className="font-mono text-[11px] text-ink-faint">Step 0 / 0</span>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <EmptyState
          icon={BarChart3}
          title="No visualization yet"
          description="Run your program from the Editor tab to see its data structures visualized here."
        />
      </div>
      <ExecutionControls />
    </div>
  );
}

function FlowPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-10 shrink-0 items-center border-b border-border px-4">
        <span className="text-xs font-medium text-ink-muted">Execution Flow</span>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <EmptyState
          icon={Waypoints}
          title="No execution flow yet"
          description="Once your program runs, each executed step will appear here as a timeline."
        />
      </div>
    </div>
  );
}

function ExplanationPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-10 shrink-0 items-center border-b border-border px-4">
        <span className="text-xs font-medium text-ink-muted">Explanation</span>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <EmptyState
          icon={MessageSquareText}
          title="No explanation available yet"
          description="Line-by-line explanations will appear here once you run a program."
        />
      </div>
    </div>
  );
}

function ComplexityPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-10 shrink-0 items-center border-b border-border px-4">
        <span className="text-xs font-medium text-ink-muted">Complexity Analysis</span>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <EmptyState
          icon={Gauge}
          title="No complexity analysis yet"
          description="Time and space complexity will be calculated after your program runs."
        />
      </div>
    </div>
  );
}
