import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Languages', href: '#languages' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
];

export function MarketingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link to="/login" className="text-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink">
            Log in
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Primary mobile">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium text-ink-muted">Theme</span>
              <ThemeToggle />
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button variant="secondary" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
