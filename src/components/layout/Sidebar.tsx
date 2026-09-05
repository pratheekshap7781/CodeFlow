import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FolderCode,
  BookOpen,
  Database,
  Bookmark,
  Settings as SettingsIcon,
  LogOut,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', href: '/dashboard', icon: Home },
  { label: 'My Programs', href: '/dashboard#my-programs', icon: FolderCode },
  { label: 'Examples', href: '/dashboard#examples', icon: BookOpen },
  { label: 'Data Structures', href: '/dashboard#examples', icon: Database },
  { label: 'Saved', href: '/dashboard#saved', icon: Bookmark },
];

export function Sidebar() {
  const location = useLocation();

  const isActive = (href: string) => {
    const [path] = href.split('#');
    return location.pathname === path && !href.includes('#');
  };

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-border bg-surface">
      <div className="flex h-16 items-center border-b border-border px-5">
        <Logo size="sm" />
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4" aria-label="Primary">
        {PRIMARY_NAV.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={label}
              to={href}
              className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                active
                  ? 'bg-surface-elevated text-ink shadow-subtle'
                  : 'text-ink-muted hover:bg-surface-elevated/60 hover:text-ink'
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-0.5 border-t border-border px-3 py-4">
        <Link
          to="/settings"
          className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
            isActive('/settings')
              ? 'bg-surface-elevated text-ink shadow-subtle'
              : 'text-ink-muted hover:bg-surface-elevated/60 hover:text-ink'
          }`}
        >
          <SettingsIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          Settings
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-150 hover:bg-surface-elevated/60 hover:text-ink"
        >
          <LogOut className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
