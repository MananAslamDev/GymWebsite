import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=Professional%20fitness%20trainers%20team%20in%20a%20modern%20gym%20with%20dark%20atmosphere%2C%20dramatic%20lighting%2C%20trainers%20in%20matching%20black%20outfits%2C%20confident%20poses%2C%20high-quality%20professional%20photography&width=1920&height=800&seq=trainers1&orientation=landscape"
          alt="Trainers team"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet Our <span className="text-primary">Elite Trainers</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Our certified professionals are dedicated to helping you achieve your fitness goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;