import React from 'react';
import { Star, MessageCircle, MoonStar, Calendar, Zap, Sparkles } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background section-transition relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[-5%] w-[30%] h-[30%] bg-purple-100 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/3 right-[-5%] w-[25%] h-[25%] bg-purple-200 rounded-full blur-3xl opacity-20 animate-float-delay" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="opacity-0 animate-fade-up">
          <SectionHeading
            title="Core Features"
            subtitle="Powerful tools for your transformation journey"
            titleColor="text-[#1400a0]"
          />
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 border border-black/10
                      shadow-elevation-1 card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 text-[#1400a0] transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1400a0]">{feature.title}</h3>
              <p className="text-black/80 mb-5">{feature.description}</p>
              
              {feature.bullets && (
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-black/80">
                      <span className="text-[#1400a0] mt-1 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Personalized Profile Integration",
    description: "Your unique blueprint combining astrology, human design, and gene keys",
    icon: <Star size={32} strokeWidth={1.5} />,
    bullets: [
      "Natal chart analysis and life path insights",
      "Human Design type and authority guidance",
      "Gene Keys profile with shadow-to-gift transformation",
      "Integrated recommendations based on your unique combination"
    ]
  },
  {
    title: "Emotional Pattern Recognition",
    description: "AI-driven analysis identifies recurring emotional themes and patterns",
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    bullets: [
      "Identify underlying emotional patterns in relationships",
      "Recognize triggers and shadow aspects",
      "Track emotional evolution over time",
      "Personalized suggestions for emotional integration"
    ]
  },
  {
    title: "Custom Transformation Rituals",
    description: "Tailored practices designed to break unhelpful patterns",
    icon: <MoonStar size={32} strokeWidth={1.5} />,
    bullets: [
      "Personalized rituals based on your astrological transits",
      "Shadow work exercises for integration",
      "Manifestation practices aligned with your Human Design",
      "Energy clearing techniques specific to your profile"
    ]
  },
  {
    title: "Daily Guidance",
    description: "Opt-in personalized daily insights based on your unique profile",
    icon: <Calendar size={32} strokeWidth={1.5} />,
    bullets: [
      "Daily astrological transit interpretations for your chart",
      "Personalized affirmations aligned with your current energy",
      "Focus area suggestions for the day",
      "Gentle reminders of your transformation journey"
    ]
  },
  {
    title: "Focus Area Sessions",
    description: "Targeted guidance for specific life areas to create quantum leaps",
    icon: <Zap size={32} strokeWidth={1.5} />,
    bullets: [
      "Break limiting beliefs in money, career, and abundance",
      "Transform relationship patterns and attract aligned connections",
      "Find direction in life and clarify purpose",
      "Process emotions and identify shadow aspects"
    ]
  },
  {
    title: "AI Quantum Leap Coach",
    description: "Your personal coach that challenges thinking and reveals new paths",
    icon: <MessageCircle size={32} strokeWidth={1.5} />,
    bullets: [
      "Compassionate yet challenging conversations",
      "Integration of your full personal profile",
      "Practical action steps for manifestation",
      "Ongoing support for your transformation journey"
    ]
  }
];

export default FeatureShowcase;