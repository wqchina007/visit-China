'use client';

import Link from 'next/link';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';
import SearchBox from './SearchBox';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/cities/beijing', label: 'Beijing' },
    { href: '/cities/shanghai', label: 'Shanghai' },
    { href: '/cities/xian', label: 'Xi\'an' },
    { href: '/cities/hongkong', label: 'Hong Kong' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-800 via-slate-900 to-black shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-slate-900 font-bold text-lg">🇨🇳</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Visit China
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <SearchBox />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={clsx(
          'lg:hidden transition-all duration-200 ease-in-out',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}>
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}