import React from 'react';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#333333] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-[#FFD700]" />
              <span className="ml-2 text-white font-bold text-lg">Silent Logic AI</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Empowering businesses with intelligent automation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-[#008080]">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#008080]">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#008080]">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#008080]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/demos" className="text-gray-300 hover:text-[#008080]">Demos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#008080]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/legal/terms" className="text-gray-300 hover:text-[#008080]">Terms of Service</Link></li>
              <li><Link to="/legal/privacy" className="text-gray-300 hover:text-[#008080]">Privacy Policy</Link></li>
              <li><Link to="/legal/cookies" className="text-gray-300 hover:text-[#008080]">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Silent Logic AI Labs. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="mailto:info@silentlogicai.com" className="text-gray-400 hover:text-[#008080]">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+61481942597" className="text-gray-400 hover:text-[#008080]">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://goo.gl/maps" className="text-gray-400 hover:text-[#008080]">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}