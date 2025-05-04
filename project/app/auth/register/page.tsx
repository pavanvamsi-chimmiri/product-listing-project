'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/app/contexts/AuthContext';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const { signup, isLoading } = useAuth();
  const router = useRouter();

  const validateForm = () => {
    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return false;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    try {
      await signup(email, password, name);
      router.push('/products');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-12 max-w-md px-4">
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Create an Account</h1>
        
        {error && (
          <div className="mb-4 rounded-md bg-error/10 p-4 text-sm text-error">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            type="text"
            label="Full Name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          
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
          
          <Input
            id="password-confirm"
            type="password"
            label="Confirm Password"
            placeholder="••••••••"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
          
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Privacy Policy
              </a>
            </label>
          </div>
          
          <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
            Create Account
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}