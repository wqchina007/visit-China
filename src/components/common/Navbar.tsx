'use client';

import Link from 'next/link';
import { MagnifyingGlassIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import SearchBox from './SearchBox';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false);
  const citiesDropdownRef = useRef<HTMLDivElement>(null);
  const citiesButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        citiesDropdownRef.current &&
        !citiesDropdownRef.current.contains(event.target as Node) &&
        citiesButtonRef.current &&
        !citiesButtonRef.current.contains(event.target as Node)
      ) {
        setIsCitiesDropdownOpen(false);
      }
    };

    if (isCitiesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCitiesDropdownOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/visa-free', label: 'Visa-Free Guide' },
  ];

  const cities = [
    { href: '/cities/beijing', label: 'Beijing' },
    { href: '/cities/shanghai', label: 'Shanghai' },
    { href: '/cities/xian', label: 'Xi\'an' },
    { href: '/cities/hongkong', label: 'Hong Kong' },
    { href: '/cities/chengdu', label: 'Chengdu' },
    { href: '/cities/hangzhou', label: 'Hangzhou' },
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
            
            {/* Cities Dropdown */}
            <div className="relative">
              <button
                ref={citiesButtonRef}
                onClick={() => setIsCitiesDropdownOpen(!isCitiesDropdownOpen)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center"
              >
                Cities
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isCitiesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCitiesDropdownOpen && (
                <div ref={citiesDropdownRef} className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {cities.map((city) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsCitiesDropdownOpen(false)}
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            
            {/* Cities in Mobile Menu */}
            <div className="px-3 py-2">
              <div className="text-white/80 text-sm font-medium mb-2">Cities</div>
              <div className="ml-4 space-y-1">
                {cities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="block px-3 py-1 text-white/70 hover:text-white hover:bg-white/5 rounded text-sm transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="px-3 py-2">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}