import React, { useState } from 'react';
import Button from './ui/Button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const BirthDataSection: React.FC = () => {
  const [formStep, setFormStep] = useState(1);
  
  const goToNextStep = () => {
    setFormStep(2);
  };

  return (
    <section id="get-started" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black">
            Start Your Transformation
          </h2>
          <p className="text-xl text-black/80 text-center max-w-2xl mx-auto mb-12">
            Your birth details unlock personalized guidance for your quantum leap
          </p>
          
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-black/10">
            {formStep === 1 ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">Create Your Account</h3>
                  <p className="mb-6 text-black/80">First, let's set up your account so you can start your free 7-day trial</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-black/20 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-black/20 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Choose a secure password"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-black/20 text-black focus:ring-black"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-black/80">
                        I agree to the <a href="#" className="text-black hover:underline">Terms</a> and <a href="#" className="text-black hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button onClick={goToNextStep} variant="primary" size="lg" className="w-full">
                      Continue to Birth Details
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-black/80 text-sm">
                      Or sign up with
                    </p>
                    <button className="mt-2 px-5 py-3 bg-background text-black rounded-lg font-medium flex items-center justify-center gap-2 w-full border border-black/10 hover:bg-black/5 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" x2="22" y1="12" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">Your Birth Details</h3>
                  <p className="mb-6 text-black/80">
                    This information allows us to generate your personalized astrological profile, Human Design chart, and Gene Keys
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullname" className="block text-sm font-medium text-black mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-black/20 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="birthdate" className="block text-sm font-medium text-black mb-1">
                        Birth Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="birthdate"
                          className="w-full px-4 py-3 bg-background rounded-lg border border-black/20 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        />
                        <Calendar className="absolute right-3 top-3 text-black/60" size={20} />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="birthtime" className="block text-sm font-medium text-black mb-1">
                        Birth Time (if known)
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          id="birthtime"
                          className="w-full px-4 py-3 bg-background rounded-lg border border-black/20 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        />
                        <Clock className="absolute right-3 top-3 text-black/60" size={20} />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="birthplace" className="block text-sm font-medium text-black mb-1">
                        Birth Location
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="birthplace"
                          className="w-full px-4 py-3 bg-background rounded-lg border border-black/20 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                          placeholder="City, Country"
                        />
                        <MapPin className="absolute right-3 top-3 text-black/60" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button href="#" variant="primary" size="lg" className="w-full">
                      Start Your Free 7-Day Trial
                    </Button>
                    <p className="text-sm text-black/80 text-center mt-3">
                      No credit card required. Cancel anytime.
                    </p>
                  </div>
                </div>
                
                <div className="bg-black/5 rounded-xl p-4 border border-black/10">
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    Why we need this information
                  </h4>
                  <p className="text-sm text-black/80">
                    Your exact birth details allow us to generate accurate astrological calculations, Human Design chart, and Gene Keys profile. This creates the foundation for your personalized transformation journey. We take your privacy seriously and your data is securely encrypted.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthDataSection;