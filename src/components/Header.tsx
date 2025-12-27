import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Elegant gradient text */}
        <Link 
          to="/" 
          className="text-2xl font-light tracking-tight text-white group hover:text-amber-400 transition-colors duration-300"
        >
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            TechFix
          </span>{' '}
          <span className="text-slate-300">Service Center</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-amber-400 transition-colors duration-300 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-slate-700 backdrop-blur-md animate-fadeIn">
          <ul className="container mx-auto px-6 py-4 space-y-4">
            <li>
              <Link 
                to="/" 
                className="block text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 py-2 border-b border-slate-700/50 hover:border-amber-400/30"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 py-2 border-b border-slate-700/50 hover:border-amber-400/30"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="block text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 py-2 border-b border-slate-700/50 hover:border-amber-400/30"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-slate-300 hover:text-amber-400 font-medium transition-all duration-300 py-2 hover:border-amber-400/30"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;