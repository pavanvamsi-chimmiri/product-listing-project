import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/app/contexts/AuthContext';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopHub | Premium Product Listings',
  description: 'Browse our extensive collection of premium products with fast shipping and excellent customer service.',
  keywords: 'e-commerce, products, online shopping, premium products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}