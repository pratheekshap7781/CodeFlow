import { useNavigate } from 'react-router-dom';
import { Plus, FolderCode, Bookmark, ArrowRight } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';
import { AppTopBar } from '../components/layout/AppTopBar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Badge } from '../components/ui/Badge';
import { EXAMPLES, EXAMPLE_CATEGORY_ICONS } from '../lib/examples';

export function Dashboard() {
  const navigate = useNavigate();

  const categories = Array.from(new Set(EXAMPLES.map((e) => e.category)));

  return (
    <AppShell>
      <AppTopBar left={<p className="text-sm font-medium text-ink">Home</p>} />

      <main className="flex-1 overflow-y-auto px-8 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          {/* Welcome / greeting */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1.5">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Welcome back, Pratheeksha
              </h1>
              <p className="text-sm text-ink-muted">What do you want to code today?</p>
            </div>
            <Button
              icon={<Plus className="h-4 w-4" />}
              onClick={() => navigate('/workspace')}
            >
              New Program
            </Button>
          </div>

          {/* My Programs */}
          <section id="my-programs" className="flex scroll-mt-8 flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">My Programs</h2>
            </div>
            <EmptyState
              icon={FolderCode}
              title="No programs yet"
              description="Programs you create in the workspace will show up here."
              action={
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-1"
                  icon={<Plus className="h-3.5 w-3.5" />}
                  onClick={() => navigate('/workspace')}
                >
                  New Program
                </Button>
              }
            />
          </section>

          {/* Saved */}
          <section id="saved" className="flex scroll-mt-8 flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">Saved</h2>
            </div>
            <EmptyState
              icon={Bookmark}
              title="Nothing saved yet"
              description="Save a program from the workspace to find it here later."
            />
          </section>

          {/* CodeFlow Examples */}
          <section id="examples" className="flex scroll-mt-8 flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="font-display text-lg font-semibold text-ink">CodeFlow Examples</h2>
                <p className="text-sm text-ink-faint">
                  Ready-made programs to explore how CodeFlow visualizes execution.
                </p>
              </div>
            </div>

            {categories.map((category) => {
              const CategoryIcon = EXAMPLE_CATEGORY_ICONS[category];
              return (
                <div key={category} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="h-4 w-4 text-ink-faint" strokeWidth={1.75} aria-hidden="true" />
                    <h3 className="text-sm font-medium text-ink-muted">{category}</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {EXAMPLES.filter((e) => e.category === category).map((example) => (
                      <Card
                        key={example.id}
                        interactive
                        role="button"
                        tabIndex={0}
                        className="group flex cursor-pointer flex-col gap-3 p-5"
                        onClick={() => navigate(`/workspace?example=${example.id}`)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate(`/workspace?example=${example.id}`);
                          }
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <Badge tone="mint">Example</Badge>
                          <ArrowRight className="h-4 w-4 text-ink-faint opacity-0 transition-opacity duration-150 group-hover:opacity-100" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-semibold text-ink">{example.title}</p>
                          <p className="text-sm leading-relaxed text-ink-faint">{example.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </AppShell>
  );
}
