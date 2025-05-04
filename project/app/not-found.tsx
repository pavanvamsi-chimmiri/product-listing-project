import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 text-9xl font-bold text-primary-600">404</h1>
      <h2 className="mb-8 text-3xl font-bold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-600">
        We're sorry, the page you requested could not be found. Please check the URL or go back to the homepage.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
      >
        Go to Homepage
      </Link>
    </div>
  );
}