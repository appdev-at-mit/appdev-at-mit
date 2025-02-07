"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-8xl md:mx-8 mx-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo-2.svg"
                  alt="Logo"
                  width={75}
                  height={75}
                  className="h-120 w-120"
                />
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link
                href="/team"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium hover:border-dark-blue transition duration-300"
                onClick={() => handleLinkClick()}>
                  Team
              </Link>
              <Link
                href="/products"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium hover:border-dark-blue transition duration-300"
                onClick={() => handleLinkClick()}>
                  Products
              </Link>
              <Link
                href="/support"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium hover:border-dark-blue transition duration-300"
                onClick={() => handleLinkClick()}>
                  Sponsor
              </Link>
              <Link
                href="/apply"
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium hover:border-dark-blue transition duration-300"
                onClick={() => handleLinkClick()}>
                  Apply
              </Link>
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-4 z-50 top-20">
            <button
              onClick={toggleSidebar}
              className="text-gray-900 focus:outline-none mb-4"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Link
              href="/team"
              className="block text-gray-900 px-4 py-2"
              onClick={() => handleLinkClick()}
              >
                Team
            </Link>
            <Link
              href="/products"
              className="block text-gray-900 px-4 py-2"
              onClick={() => handleLinkClick()}>
                Projects
            </Link>
            <Link
            href="/support"
              className="block text-gray-900 px-4 py-2"
              onClick={() => handleLinkClick()}>
                Sponsor
            </Link>
            <Link
              href="/apply"
              className="block text-gray-900 px-4 py-2"
              onClick={() => handleLinkClick()}>
                Apply
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
