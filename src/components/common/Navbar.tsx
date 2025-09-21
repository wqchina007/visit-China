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
      'text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium',
      className
    )}
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Visit China</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/cities">Cities</NavLink>
              <NavLink href="/attractions">Attractions</NavLink>
              <NavLink href="/travel-tips">Travel Tips</NavLink>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search cities or attractions..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}