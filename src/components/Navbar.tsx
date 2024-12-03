import React from 'react';
import { Brain, Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="bg-[#003366] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-[#FFD700]" />
              <span className="ml-2 text-white font-bold text-xl hidden sm:block">Silent Logic AI</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${
                      isActive(item.path) ? 'text-white' : 'text-gray-300'
                    } hover:text-[#008080] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-gray-300 hover:text-[#008080] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/onboarding"
              className="bg-[#FFD700] text-[#003366] hover:bg-yellow-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Get Started
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                className="text-white hover:text-[#008080] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center text-white hover:text-[#008080] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                <LogIn className="h-4 w-4 mr-1" />
                Sign In
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#008080] focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path) ? 'text-white' : 'text-gray-300'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-gray-300 hover:text-[#008080] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to="/onboarding"
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#FFD700] text-[#003366] hover:bg-yellow-400 transition-colors duration-300"
            >
              Get Started
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#008080] transition-colors duration-300"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#008080] transition-colors duration-300"
              >
                <LogIn className="h-5 w-5 mr-2" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}