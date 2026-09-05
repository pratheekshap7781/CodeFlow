import type { ReactNode } from 'react';

/**
 * Placeholder for future Supabase-backed route protection.
 * Currently a passthrough — no auth check is implemented in Stage 1.
 */
export function RequireAuth({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
