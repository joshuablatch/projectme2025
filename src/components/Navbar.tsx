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
        isScrolled ? 'bg-background shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-3 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <Eye className="text-[#1400a0] w-7 h-7" strokeWidth={1.5} />
          <span className="text-xl font-semibold text-[#1400a0]">Project Me</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-[#1400a0] hover:text-[#1400a0]/70 transition-colors">How It Works</a>
          <a href="#features" className="text-[#1400a0] hover:text-[#1400a0]/70 transition-colors">Features</a>
          <a href="#pricing" className="text-[#1400a0] hover:text-[#1400a0]/70 transition-colors">Pricing</a>
          <a 
            href="#get-started" 
            className="bg-[#1400a0] hover:bg-[#1400a0]/90 transition-colors px-5 py-2 rounded-full font-medium text-white"
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
        <div className="md:hidden bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="py-2 text-[#1400a0] hover:text-[#1400a0]/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="py-2 text-[#1400a0] hover:text-[#1400a0]/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="py-2 text-[#1400a0] hover:text-[#1400a0]/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#get-started" 
              className="bg-[#1400a0] hover:bg-[#1400a0]/90 transition-colors px-5 py-3 rounded-full font-medium text-center text-white"
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