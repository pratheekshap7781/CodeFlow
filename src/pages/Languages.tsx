import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LanguageIcon } from '../components/ui/LanguageIcon';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { LANGUAGES } from '../lib/languages';

export function Languages() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <header className="flex h-16 items-center justify-between border-b border-border px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-6 py-16">
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Choose your language
          </h1>
          <p className="text-sm text-ink-muted">Select a programming language to get started</p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2">
          {LANGUAGES.map((language) => (
            <Card key={language.id} className="flex flex-col gap-4 p-6">
              <LanguageIcon language={language} size="lg" />
              <div className="flex flex-col gap-1">
                <p className="font-display text-base font-semibold text-ink">{language.name}</p>
                <p className="text-sm leading-relaxed text-ink-faint">{language.description}</p>
              </div>
              <Button
                variant="secondary"
                className="mt-1 self-start"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
                onClick={() => navigate(`/workspace?lang=${language.id}`)}
              >
                Continue
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-xs text-ink-faint">
          We support C, C++, Python, and Java.
        </p>
      </main>
    </div>
  );
}
