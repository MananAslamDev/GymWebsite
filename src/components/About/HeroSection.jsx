import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20premium%20gym%20interior%20with%20state-of-the-art%20equipment%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20wide%20angle%20view%20showing%20spacious%20layout%2C%20high-quality%20professional%20photography%2C%20empty%20gym%20ready%20for%20workout&width=1920&height=800&seq=about1&orientation=landscape"
          alt="Gym interior"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-primary">EliteX Fitness</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            The premier destination for those who demand excellence in their fitness journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;