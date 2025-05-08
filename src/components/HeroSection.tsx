import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-16 bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#1400a0]">
          A return to your inner knowing
        </h1>
        <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Your personal quantum leap coach for transformational inner work and practical manifestation in money, love, and breaking limiting beliefs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href="#get-started" size="lg" variant="primary">
            Start Your 7-Day Free Trial
          </Button>
          <Button href="#how-it-works" size="lg" variant="secondary">
            Learn How It Works
          </Button>
        </div>
        
        <div className="mt-12 opacity-80">
          <a 
            href="#problem-solution" 
            className="inline-flex flex-col items-center group"
            aria-label="Scroll to next section"
          >
            <span className="mb-2 text-black group-hover:text-black transition-colors">Discover More</span>
            <ChevronDown className="animate-bounce w-6 h-6 text-black group-hover:text-black transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;