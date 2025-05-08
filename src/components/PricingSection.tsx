import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Start Your Journey"
          subtitle="Choose the plan that's right for you"
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const isPopular = plan.name === 'Pro';

            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden relative ${
                  isPopular ? 'md:-mt-4 md:mb-4' : ''
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-black text-background px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div 
                  className={`bg-background h-full border ${
                    isPopular ? 'border-black' : 'border-black/10'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
                    <p className="text-black/80 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      {plan.price === 0 ? (
                        <div>
                          <span className="text-4xl font-bold text-black">Free</span>
                          <span className="text-black/80"> for 7 days</span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-4xl font-bold text-black">${plan.price}</span>
                          <span className="text-black/80">/month</span>
                        </div>
                      )}
                    </div>

                    <Button 
                      href="#get-started" 
                      size="lg" 
                      variant={isPopular ? 'primary' : 'secondary'}
                      className="w-full mb-8"
                    >
                      Start Free Trial
                    </Button>

                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-black flex-shrink-0 mt-1">
                            <Check size={18} />
                          </span>
                          <span className="text-black/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-black/80">
            All plans include a 7-day free trial. No credit card required to start. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

const plans = [
  {
    name: "Basic",
    description: "Essential features for your journey",
    price: 0,
    features: [
      "Personal profile integration",
      "AI coach conversations",
      "4 custom transformation rituals per month",
      "Daily personalized guidance",
      "Focus area sessions (2 areas)"
    ]
  },
  {
    name: "Pro",
    description: "Unlock your full potential",
    price: 9.99,
    features: [
      "Everything in Basic",
      "Priority AI coach response",
      "Unlimited transformation rituals",
      "Advanced shadow work",
      "All focus areas unlocked"
    ]
  }
];

export default PricingSection;