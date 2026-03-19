'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
