import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import FeatureShowcase from './components/FeatureShowcase';
import TransformationStories from './components/TransformationStories';
import PricingSection from './components/PricingSection';
import BirthDataSection from './components/BirthDataSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-indigo">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolution />
        <HowItWorks />
        <FeatureShowcase />
        <TransformationStories />
        <PricingSection />
        <BirthDataSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;