import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { AuthLayout } from '../components/layout/AuthLayout';
import { TextField } from '../components/ui/TextField';
import { Button } from '../components/ui/Button';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = 'Name is required.';
    if (!email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Enter a valid email address.';
    if (!password) nextErrors.password = 'Password is required.';
    else if (password.length < 8) nextErrors.password = 'Password must be at least 8 characters.';
    if (!confirmPassword) nextErrors.confirmPassword = 'Please confirm your password.';
    else if (confirmPassword !== password) nextErrors.confirmPassword = 'Passwords do not match.';

    setErrors(nextErrors);
    // Account creation is not implemented in this stage.
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <AuthLayout
      title="Create your account"
      description="Start visualizing how your code really runs."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-mint-deep hover:underline dark:text-mint">
            Log in
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
          label="Name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
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
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          hint={errors.password ? undefined : 'At least 8 characters.'}
        />
        <TextField
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />

        <Button type="submit" className="mt-2 w-full">
          Create Account
        </Button>
      </form>
    </AuthLayout>
  );
}
