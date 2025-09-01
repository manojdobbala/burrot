import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-black hover:text-accent-500 transition-colors">
              Burrot<span className="text-accent-500">.</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-accent-500 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-accent-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-accent-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-accent-500 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex">
            <a href="#services" className="bg-accent-500 text-black px-6 py-2 rounded-lg hover:bg-accent-400 transition-colors font-medium">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-accent-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-accent-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-accent-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-accent-500 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-accent-500 transition-colors">Contact</a>
              <a href="#services" className="bg-accent-500 text-black px-6 py-2 rounded-lg hover:bg-accent-400 transition-colors w-fit font-medium">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;