import React, { useState, useEffect } from 'react';
import { Eye, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-elevation-1' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-3 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <Eye className="text-[#1400a0] w-7 h-7 transition-transform group-hover:scale-110" strokeWidth={1.5} />
          <span className="text-xl font-semibold text-[#1400a0]">Project Me</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a 
            href="#get-started" 
            className="bg-[#1400a0] hover:bg-[#1400a0]/90 transition-all duration-300 px-5 py-2 rounded-full font-medium text-white hover:shadow-elevation-1 hover:transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1400a0] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="py-2 text-[#1400a0] hover:text-[#1400a0]/70 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="py-2 text-[#1400a0] hover:text-[#1400a0]/70 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="py-2 text-[#1400a0] hover:text-[#1400a0]/70 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#get-started" 
              className="bg-[#1400a0] hover:bg-[#1400a0]/90 transition-all duration-300 px-5 py-3 rounded-full font-medium text-center text-white hover:shadow-elevation-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;