import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-16 bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-purple-200 rounded-full blur-3xl opacity-30 animate-float-delay" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 z-10 text-center">
        <div className="opacity-0 animate-fade-up [animation-delay:200ms]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#1400a0]">
            A return to your inner knowing
          </h1>
        </div>
        
        <div className="opacity-0 animate-fade-up [animation-delay:400ms]">
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your personal quantum leap coach for transformational inner work and practical manifestation in money, love, and breaking limiting beliefs.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-up [animation-delay:600ms]">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              href="#get-started" 
              size="lg" 
              variant="primary"
              className="shadow-elevation-2 hover:shadow-elevation-3 hover:scale-105"
            >
              Start Your 7-Day Free Trial
            </Button>
            <Button 
              href="#how-it-works" 
              size="lg" 
              variant="secondary"
              className="hover:shadow-elevation-1"
            >
              Learn How It Works
            </Button>
          </div>
        </div>
        
        <div className="mt-12 opacity-80 opacity-0 animate-fade-up [animation-delay:800ms]">
          <a 
            href="#problem-solution" 
            className="inline-flex flex-col items-center group"
            aria-label="Scroll to next section"
          >
            <span className="mb-2 text-black group-hover:text-black transition-colors">
              Discover More
            </span>
            <ChevronDown className="animate-bounce w-6 h-6 text-black group-hover:text-black transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;