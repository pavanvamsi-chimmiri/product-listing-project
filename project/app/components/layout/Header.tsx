'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/app/contexts/AuthContext';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center text-2xl font-bold text-primary-600"
          >
            <span>ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === '/' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === '/products' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Products
            </Link>
            <Link 
              href="/categories" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === '/categories' ? 'text-primary-600' : 'text-gray-700'
              }`}
            >
              Categories
            </Link>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <button 
              onClick={toggleSearch}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Search"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link 
              href="/cart" 
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Cart"
            >
              <FiShoppingCart className="h-5 w-5" />
            </Link>

            {/* Account */}
            {user ? (
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 rounded-full p-2 text-gray-700 hover:bg-gray-100"
                  aria-label="Account"
                >
                  <FiUser className="h-5 w-5" />
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 hidden">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                href="/auth/login" 
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
              >
                Sign in
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="rounded-full p-2 text-gray-700 hover:bg-gray-100 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar (expandable) */}
        <div 
          className={`pb-4 ${
            isSearchOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="input"
            />
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-500 hover:text-gray-700"
              aria-label="Submit search"
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`pb-4 md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === '/' ? 'text-primary-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === '/products' ? 'text-primary-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/categories" 
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === '/categories' ? 'text-primary-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}