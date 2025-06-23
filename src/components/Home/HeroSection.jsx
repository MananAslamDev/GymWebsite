import React from 'react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=A%20dynamic%20fitness%20gym%20environment%20with%20modern%20equipment%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20energetic%20people%20working%20out%2C%20high-quality%20professional%20photography%20with%20shallow%20depth%20of%20field%2C%20motivational%20fitness%20atmosphere%2C%20cinematic%20lighting%20with%20red%20and%20blue%20accent%20lights&width=1920&height=1080&seq=hero1&orientation=landscape"
          alt="Gym atmosphere"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Body. <br />
            <span className="text-primary">Transform Your Life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            EliteX Fitness offers premium training experiences with state-of-the-art equipment and expert coaches to help you achieve your fitness goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg">
              Join Now
            </Button>
            <Button className="bg-secondary hover:bg-secondary/80 text-black px-8 py-6 text-lg">
              Book a Trial
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="text-white cursor-pointer"
        >
          <i className="fas fa-chevron-down text-3xl"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;