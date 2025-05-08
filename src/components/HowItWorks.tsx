import React from 'react';
import { Calendar, Sparkles, Zap, MessageCircle, Check, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#1400a0]">
            How Project Me Works
          </h2>
          <p className="text-xl text-black/80 text-center max-w-3xl mx-auto mb-16">
            Your journey to transformation in four simple steps
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-background rounded-xl p-6 h-full border border-black/10
                              transition-all duration-300 group-hover:-translate-y-1">
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#1400a0] flex items-center justify-center text-xl font-bold text-background">
                    {index + 1}
                  </div>
                  <div className="mb-5 mt-3 text-[#1400a0]">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1400a0]">{step.title}</h3>
                  <p className="text-black/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-background rounded-xl p-8 border border-black/10">
              <h3 className="text-2xl font-semibold mb-6 text-[#1400a0]">What You'll Need</h3>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-[#1400a0] flex-shrink-0 mt-1" size={20} />
                    <span className="text-black/80">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 border border-black/10">
              <h3 className="text-2xl font-semibold mb-6 text-[#1400a0]">Your Transformation</h3>
              <div className="space-y-4">
                {transformations.map((transform, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="text-[#1400a0] flex-shrink-0 mt-1" size={20} />
                    <span className="text-black/80">{transform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Enter Your Birth Details",
    description: "Provide your date, time, and location of birth to create your unique energetic blueprint.",
    icon: <Calendar size={32} strokeWidth={1.5} />
  },
  {
    title: "Get Your Analysis",
    description: "Receive your personalized astrological, Human Design, and Gene Keys analysis.",
    icon: <Sparkles size={32} strokeWidth={1.5} />
  },
  {
    title: "Choose Leap Areas",
    description: "Select transformation focus areas for money, relationships, or breaking limiting beliefs.",
    icon: <Zap size={32} strokeWidth={1.5} />
  },
  {
    title: "Start Conversations",
    description: "Begin your transformation journey with your AI quantum leap coach and receive personalized rituals.",
    icon: <MessageCircle size={32} strokeWidth={1.5} />
  }
];

const requirements = [
  "Your birth date, time, and location for astrological insights",
  "Openness to exploring your patterns and beliefs",
  "Commitment to your transformation journey",
  "Willingness to engage with personalized rituals"
];

const transformations = [
  "Break through limiting beliefs about yourself and your potential",
  "Find clarity in relationships and understand energy dynamics",
  "Process emotions and transcend recurring patterns",
  "Discover alignment with your authentic self and purpose"
];

export default HowItWorks;