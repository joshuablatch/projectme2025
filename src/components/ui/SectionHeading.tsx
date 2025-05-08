import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  titleColor?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, titleColor = "text-black" }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-black/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;