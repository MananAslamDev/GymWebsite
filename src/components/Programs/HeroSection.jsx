import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Group%20fitness%20class%2C%20modern%20gym%2C%20dynamic%20movements%2C%20dark%20atmosphere%2C%20high-quality%20photography&width=1920&height=800&seq=programs1"
          alt="Group fitness"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-primary">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Tailored fitness programs to suit every goal and lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;