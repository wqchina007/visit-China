'use client';

import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <Link 
    href={href}
    className={clsx(
      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
      'text-white/80 hover:text-white hover:bg-white/10',
      'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-600',
      className
    )}
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-800 via-slate-900 to-black shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-slate-900 font-bold text-lg">🇨🇳</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Visit China
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/cities/beijing">Beijing</NavLink>
            <NavLink href="/cities/shanghai">Shanghai</NavLink>
            <NavLink href="/cities/xian">Xi&apos;an</NavLink>
            <NavLink href="/cities/hongkong">Hong Kong</NavLink>
          </div>

          {/* Search */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-white/60" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 
                         focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent 
                         transition-all duration-200 sm:text-sm"
                placeholder="Search destinations..."
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}