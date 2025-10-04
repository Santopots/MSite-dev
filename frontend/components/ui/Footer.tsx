'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">M&S Cuines</span>
            </div>
            <p className="text-sm mb-4">
              Cuines a mesura i mobiliari per a la llar. Fem d'un espai, casa teva.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enllaços ràpids</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Inici</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Sobre nosaltres</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Serveis</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contacte</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Serveis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Desenvolupament web</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Aplicacions mòbils</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Disseny UX/UI</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Consultoria</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Suport tècnic</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacte</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-sm">Carrer Exemple, 123<br />Barcelona, 08001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+34123456789" className="text-sm hover:text-white transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:info@myapp.com" className="text-sm hover:text-white transition-colors">
                  info@myapp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} MyApp. Tots els drets reservats.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Política de privacitat</a>
              <a href="#" className="hover:text-white transition-colors">Termes i condicions</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}