import React, { useState, useEffect } from 'react';
import { Menu, X, AlignJustify as LawJustice } from 'lucide-react';
import LanguageToggle from './ui/LanguageToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LawJustice size={28} className="text-blue-700" />
          <span className="text-xl font-semibold text-blue-900">LegalAI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#chat" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Chat
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-700 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#laws" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Supported Laws
                </a>
              </li>
            </ul>
          </nav>
          <LanguageToggle />
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 hover:text-blue-700 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden">
          <div className="container mx-auto px-4 py-6">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <a 
                    href="#chat" 
                    className="block py-2 text-gray-700 hover:text-blue-700 transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Chat
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works" 
                    className="block py-2 text-gray-700 hover:text-blue-700 transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#laws" 
                    className="block py-2 text-gray-700 hover:text-blue-700 transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Supported Laws
                  </a>
                </li>
                <li className="pt-4">
                  <div className="py-2">
                    <LanguageToggle />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;