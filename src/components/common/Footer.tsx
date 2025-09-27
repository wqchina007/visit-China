'use client';

import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit China</h3>
            <p className="text-gray-300 text-sm">
              Your comprehensive guide to exploring the most beautiful cities in China. 
              Discover ancient wonders, modern marvels, and authentic local experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cities" className="text-gray-300 hover:text-white transition-colors">
                  All Cities
                </Link>
              </li>
              <li>
                <Link href="/cities/beijing" className="text-gray-300 hover:text-white transition-colors">
                  Beijing Guide
                </Link>
              </li>
              <li>
                <Link href="/cities/shanghai" className="text-gray-300 hover:text-white transition-colors">
                  Shanghai Guide
                </Link>
              </li>
              <li>
                <Link href="/cities/xian" className="text-gray-300 hover:text-white transition-colors">
                  Xi&apos;an Guide
                </Link>
              </li>
              <li>
                <Link href="/cities/hongkong" className="text-gray-300 hover:text-white transition-colors">
                  Hong Kong Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <a 
                  href="mailto:wqpod2g@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  wqpod2g@gmail.com
                </a>
              </div>
              <p className="text-gray-300 text-sm">
                Have questions or suggestions? We&apos;d love to hear from you!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Visit China. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Built with ❤️ for travelers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}