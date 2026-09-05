import { Link } from 'react-router-dom';
import { PlayCircle, Waypoints, Eye, Layers, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MarketingNavbar } from '../components/layout/MarketingNavbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FlowDiagram } from '../components/ui/FlowDiagram';
import { HeroVisual } from '../components/marketing/HeroVisual';
import { LanguageIcon } from '../components/ui/LanguageIcon';
import { LANGUAGES } from '../lib/languages';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: PlayCircle,
    title: 'Step-by-step execution',
    description: 'Run real programs one instruction at a time and watch state change as it happens.',
  },
  {
    icon: Waypoints,
    title: 'Execution tracing',
    description: 'Every line, variable, and function call is captured as a structured, replayable trace.',
  },
  {
    icon: Eye,
    title: 'Visual explanations',
    description: 'Arrays, stacks, trees, and graphs rendered as your algorithm actually runs.',
  },
  {
    icon: Layers,
    title: 'Multi-language support',
    description: 'C, C++, Python, and Java — one consistent way to learn how programs execute.',
  },
];

const FLOW_STEPS = [
  { title: 'Code', description: 'Write real, compilable programs in the editor.' },
  { title: 'Execute', description: 'Run it and produce genuine program output.' },
  { title: 'Trace', description: 'Capture each step of execution in order.' },
  { title: 'Visualize', description: 'Render data structures as they change.' },
  { title: 'Understand', description: 'See explanations tied to every step.' },
];

export function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <MarketingNavbar />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                See the Code.
                <br />
                <span className="text-mint-deep dark:text-mint">Understand the Flow.</span>
              </h1>
              <p className="max-w-md text-base leading-relaxed text-ink-muted">
                CodeFlow is an interactive platform that helps you visualize, execute, and truly
                understand your code — step by step.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/signup">
                  <Button size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                    Get Started
                  </Button>
                </Link>
                <Link to="/languages">
                  <Button size="lg" variant="secondary">
                    Explore Languages
                  </Button>
                </Link>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        {/* Flow explanation */}
        <section id="how-it-works" className="border-t border-border bg-surface/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-wide text-mint-deep dark:text-mint">
                How it works
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                From source code to real understanding
              </h2>
            </div>

            <FlowDiagram className="mb-10" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {FLOW_STEPS.map((step) => (
                <div key={step.title} className="flex flex-col gap-1.5">
                  <p className="font-display text-sm font-semibold text-ink">{step.title}</p>
                  <p className="text-sm leading-relaxed text-ink-faint">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-wide text-mint-deep dark:text-mint">
                Features
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Built for genuinely understanding code
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="flex flex-col gap-3 p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-mint/10 text-mint-deep dark:text-mint">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="text-sm leading-relaxed text-ink-faint">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported languages */}
        <section id="languages" className="border-t border-border bg-surface/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mb-10 flex flex-col gap-2">
              <p className="font-mono text-xs uppercase tracking-wide text-mint-deep dark:text-mint">
                Languages
              </p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Supported languages
              </h2>
              <p className="max-w-xl text-sm text-ink-muted">
                CodeFlow focuses on the languages most used for learning programming fundamentals
                and data structures &amp; algorithms.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LANGUAGES.map((language) => (
                <Card key={language.id} className="flex flex-col gap-4 p-5">
                  <LanguageIcon language={language} />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-ink">{language.name}</p>
                    <p className="text-sm leading-relaxed text-ink-faint">{language.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/languages">
                <Button variant="secondary" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Choose a language
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wide text-mint-deep dark:text-mint">
                About
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Why CodeFlow exists
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Most students can write code that produces the right output without ever seeing
                what actually happens in between. CodeFlow closes that gap — pairing real program
                execution with a clear, visual trace of every step, so the logic behind an
                algorithm stops being a guess and starts being something you can see.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
