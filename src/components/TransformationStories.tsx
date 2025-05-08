import React from 'react';
import SectionHeading from './ui/SectionHeading';

const TransformationStories: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Your Journey To Self Awaits"
          subtitle="Built for personalized transformations specific to your blueprint"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-xl p-6 border border-black/10">
            <h3 className="text-xl font-semibold mb-6 text-black">
              Money Transformation Journey
            </h3>
            
            <div className="space-y-6">
              {conversation.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.isUser 
                        ? 'bg-highlight rounded-tr-none text-black' 
                        : 'bg-black/5 rounded-tl-none text-black'
                    }`}
                  >
                    <p className="text-sm opacity-80 mb-1">
                      {message.isUser ? 'You' : 'Project Me Coach'}
                    </p>
                    <div className="space-y-2">
                      {message.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const conversation = [
  {
    isUser: true,
    content: ["I feel like I'm always struggling with money. No matter how hard I work, I never seem to have enough."]
  },
  {
    isUser: false,
    content: [
      "I see that pattern in your energy. Looking at your chart, Venus in your 2nd house suggests you have natural abundance potential, but it's being blocked.",
      "Your Human Design shows you're a Projector with a 5/1 profile – you're designed to manage energy and resources efficiently, not chase after them.",
      "What limiting belief about money was taught to you growing up that might still be operating under the surface?"
    ]
  },
  {
    isUser: true,
    content: ["I guess I was always taught that money doesn't come easy, that you have to struggle and sacrifice to earn it."]
  },
  {
    isUser: false,
    content: [
      "That's exactly what's creating the energetic misalignment. Your Gene Keys profile shows Gift 54 – Aspiration, which transforms scarcity into abundance through alignment rather than struggle.",
      "I'm creating a custom ritual for you to help release this pattern. It will involve visualizing your relationship with money as a partnership rather than a struggle, aligned with your Human Design as a Projector.",
      "Are you ready to examine how this belief has been shaping your reality, and try a new approach that's aligned with your energetic blueprint?"
    ]
  }
];

export default TransformationStories;