import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#1400a0]">
                The Challenges
              </h3>
              
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 border border-black/10">
                    <p className="text-lg text-black">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#1400a0]">
                The Solution
              </h3>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 border border-black/10">
                    <p className="text-lg text-black">{solution}</p>
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

const challenges = [
  "Feeling stuck in limiting beliefs around money and abundance",
  "Experiencing unclear energy dynamics in relationships",
  "Not knowing how to identify and work through emotional patterns"
];

const solutions = [
  "Your quantum leap coach that challenges your thinking and reveals new paths forward",
  "Integration of astrology, Human Design, and Gene Keys into actionable guidance",
  "Personalized transformation rituals to break unhelpful patterns"
];

export default ProblemSolution;