'use client';

import { useState } from 'react';
import { Menu, X, Home, Info, Mail, Settings } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Inici', icon: Home },
    { href: '#about', label: 'Sobre nosaltres', icon: Info },
    { href: '#services', label: 'Productes', icon: Settings },
    { href: '#contact', label: 'Contacte', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
  
            <span className="text-xl font-bold text-gray-800">M&S Cuines</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            
          </div>
        )}
      </div>
    </nav>
  );
}