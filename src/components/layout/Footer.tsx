import { Logo } from '../ui/Logo';

const PRODUCT_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Languages', href: '#languages' },
  { label: 'How it works', href: '#how-it-works' },
];

const ACCOUNT_LINKS = [
  { label: 'Log in', href: '/login' },
  { label: 'Sign up', href: '/signup' },
  { label: 'Dashboard', href: '/dashboard' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface" id="contact">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="flex max-w-xs flex-col gap-3">
          <Logo />
          <p className="text-sm text-ink-faint">
            An interactive platform that helps students visualize, execute, and truly understand
            how their code runs.
          </p>
        </div>

        <div className="flex flex-wrap gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">Product</p>
            {PRODUCT_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-ink-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">Account</p>
            {ACCOUNT_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-ink-muted hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5">
        <p className="mx-auto max-w-6xl text-xs text-ink-faint">
          © {new Date().getFullYear()} CodeFlow. Built for students learning how code really runs.
        </p>
      </div>
    </footer>
  );
}
