import { Link } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center">
      <Logo size="lg" />
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-mint-deep dark:text-mint">404</p>
        <h1 className="font-display text-2xl font-semibold text-ink">Page not found</h1>
        <p className="text-sm text-ink-muted">The page you're looking for doesn't exist.</p>
      </div>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
