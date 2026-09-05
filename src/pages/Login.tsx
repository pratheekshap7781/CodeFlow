import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { AuthLayout } from '../components/layout/AuthLayout';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button';

interface FormErrors {
  email?: string;
  password?: string;
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email address.';
    if (!password) nextErrors.password = 'Password is required.';

    setErrors(nextErrors);
    // Authentication is not implemented in this stage.
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <AuthLayout
      title="Log in to CodeFlow"
      description="Welcome back. Enter your details to continue."
      footer={
        <>
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-mint-deep hover:underline dark:text-mint">
            Sign up
          </Link>
        </>
      }
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        {hasErrors ? (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-md border border-danger/30 bg-danger/10 px-3 py-2.5 text-sm text-danger"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Please fix the highlighted fields below.</span>
          </div>
        ) : null}

        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <Button type="submit" className="mt-2 w-full">
          Log in
        </Button>
      </form>
    </AuthLayout>
  );
}
