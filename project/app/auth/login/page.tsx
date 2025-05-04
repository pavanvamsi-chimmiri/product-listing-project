'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      router.push('/products');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-12 max-w-md px-4">
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Sign In</h1>
        
        {error && (
          <div className="mb-4 rounded-md bg-error/10 p-4 text-sm text-error">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
              Forgot password?
            </a>
          </div>
          
          <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
            Sign In
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/register" className="font-medium text-primary-600 hover:text-primary-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}