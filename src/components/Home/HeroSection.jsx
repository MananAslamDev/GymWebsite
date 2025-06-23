import React from 'react';
import { Button } from '../common/Button';

const HeroSection = ({
  title,
  highlightedText,
  description,
  image,
  imageAlt,
  buttons,
  height = 'h-[60vh]',
}) => {
  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover object-top" />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title} <span className="text-[#FF3A3A]">{highlightedText}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10">{description}</p>
          {buttons && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Button key={index} className={button.className}>
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;