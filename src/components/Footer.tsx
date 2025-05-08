import React from 'react';
import { Eye, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-black/10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <Eye className="text-black w-6 h-6" strokeWidth={1.5} />
              <span className="text-xl font-semibold text-black">Project Me</span>
            </a>
            <p className="text-black/80 mb-6 max-w-md">
              Your personal quantum leap coach for transformational inner work and practical manifestation. A return to your inner knowing.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Astrology Basics</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Human Design</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Gene Keys</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-black/80 hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-black/10 mt-12 pt-8 text-center text-black/80 text-sm">
          <p className="mb-2">© 2025 Project Me. All rights reserved.</p>
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-black" size={14} /> for your transformation journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;