"use client"

import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainWrapperProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen grid gap-y-1 md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr]">
      {/* Header */}
      <div className="sticky  top-0 z-10 w-full" id="header">
        <Header onOpen={toggleMobileMenu} />
      </div>

      {/* Sidebar (Desktop) */}
      <aside
        className="hidden md:block h-full transition-width duration-300 ease-in-out hover:md:w-64"
        style={{ width: '4px' }} // Initial narrow width
        id="desktop-nav"
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main
        className={`lg:w-screen bg-white max-md:w-full overflow-x-scroll max-md:mt-12  p-2 transition-margin duration-300 ease-in-out z-20  ${
          isMobileMenuOpen ? '' : ''
        }`}
        id="main"
      >
        {children}
      </main>

      {/* Mobile Drawer */}
      <div
        className={`fixed left-0 top-0 h-full bg-black bg-opacity-75  w-48 max-md:w-48  shadow-md z-20 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <Sidebar />
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 text-white right-2 p-2 rounded-md hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainWrapper;