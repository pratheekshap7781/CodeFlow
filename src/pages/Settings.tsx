import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';
import { AppTopBar } from '../components/layout/AppTopBar';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button';
import { ThemeToggle } from '../components/ui/ThemeToggle';

function SettingsSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-6 border-b border-border pb-10 last:border-b-0 md:grid-cols-[220px_1fr]">
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold text-ink">{title}</h2>
        <p className="text-sm text-ink-faint">{description}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}

export function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState('Pratheeksha');
  const [email, setEmail] = useState('pratheeksha@example.com');

  return (
    <AppShell>
      <AppTopBar left={<p className="text-sm font-medium text-ink">Settings</p>} />

      <main className="flex-1 overflow-y-auto px-8 py-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <PageHeader
            title="Settings"
            description="Manage your profile, appearance, and account preferences."
          />

          <SettingsSection title="Profile" description="Your basic account information.">
            <Card className="flex flex-col gap-5 p-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/10 font-display text-lg font-semibold text-mint-deep dark:text-mint"
                  aria-hidden="true"
                >
                  {name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{name}</p>
                  <p className="text-sm text-ink-faint">{email}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Button variant="secondary" size="sm" disabled title="Account sync isn't implemented yet">
                  Save Changes
                </Button>
              </div>
            </Card>
          </SettingsSection>

          <SettingsSection title="Appearance" description="Choose how CodeFlow looks on your device.">
            <Card className="flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-ink">Theme</p>
                <p className="text-sm text-ink-faint">
                  Select Light, Dark, or follow your system setting automatically.
                </p>
              </div>
              <ThemeToggle />
            </Card>
          </SettingsSection>

          <SettingsSection title="Account" description="Session and account-level actions.">
            <Card className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ink">Sign out</p>
                  <p className="text-sm text-ink-faint">End your current CodeFlow session.</p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<LogOut className="h-3.5 w-3.5" />}
                  onClick={() => navigate('/')}
                >
                  Sign out
                </Button>
              </div>
            </Card>
          </SettingsSection>
        </div>
      </main>
    </AppShell>
  );
}
