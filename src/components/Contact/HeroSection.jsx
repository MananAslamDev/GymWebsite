import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20gym%20reception%20area%20with%20sleek%20design%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20reception%20desk%20with%20red%20accent%20lighting%2C%20high-quality%20professional%20photography%2C%20empty%20reception%20ready%20for%20clients&width=1920&height=800&seq=contact1&orientation=landscape"
          alt="Gym reception"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Join the <span className="text-primary">Elite</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Contact us today to start your fitness journey or explore our membership options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;