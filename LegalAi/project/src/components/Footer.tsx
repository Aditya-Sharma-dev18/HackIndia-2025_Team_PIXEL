import React from 'react';
import { Github as GitHub, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { locales } from '../locales';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentLocale = locales[language];

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl font-semibold">LegalAI</span>
              <span className="text-blue-300">India</span>
            </div>
            <p className="text-blue-200 max-w-md">
              {currentLocale.footerTagline || "Making Indian legal knowledge accessible and understandable for everyone through AI technology."}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:space-x-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <GitHub size={20} className="mr-2" />
              GitHub
            </a>
            <a 
              href="mailto:contact@legalai.example.com" 
              className="flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <Mail size={20} className="mr-2" />
              Contact
            </a>
            <a 
              href="#" 
              className="flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <Globe size={20} className="mr-2" />
              Privacy
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} LegalAI. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm mt-2 md:mt-0">
            Made with 💡 at HackIndia 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;