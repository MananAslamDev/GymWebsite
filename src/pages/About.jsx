import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import CoreValues from '../components/About/CoreValues';
import Timeline from '../components/About/Timeline';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection
        title="About"
        highlightedText="EliteX Fitness"
        description="The premier destination for those who demand excellence in their fitness journey."
        image="https://readdy.ai/api/search-image?query=Modern%20premium%20gym%20interior%20with%20state-of-the-art%20equipment%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20wide%20angle%20view%20showing%20spacious%20layout%2C%20high-quality%20professional%20photography%2C%20empty%20gym%20ready%20for%20workout&width=1920&height=800&seq=about1&orientation=landscape"
        imageAlt="Gym interior"
      />

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-white/80 mb-6">
                Founded in 2015 by former Olympic athlete Michael Reynolds, EliteX Fitness was born from a vision to create a fitness environment that combines cutting-edge equipment, expert coaching, and a supportive community.
              </p>
              <p className="text-lg text-white/80 mb-6">
                What started as a small training studio has grown into a nationwide brand with over 25 locations, each maintaining our core commitment to excellence and personalized fitness experiences.
              </p>
              <p className="text-lg text-white/80">
                Our philosophy is simple: we believe that everyone has the potential for greatness. Our mission is to provide the tools, knowledge, and support to help you unlock that potential.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Founder%20of%20a%20premium%20fitness%20gym%2C%20athletic%20male%20in%20professional%20attire%2C%20confident%20pose%20in%20modern%20gym%20environment%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20professional%20business%20portrait%20photography&width=800&height=600&seq=about2&orientation=landscape"
                alt="Gym founder"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      <CoreValues />

      <section className="py-20 bg-[#222] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience EliteX</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art facilities and see what makes us different.
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative aspect-video">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[#FF3A3A] flex items-center justify-center">
                <i className="fas fa-play text-2xl text-white"></i>
              </div>
            </div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20premium%20gym%20interior%20with%20people%20working%20out%2C%20dark%20atmosphere%20with%20dramatic%20red%20and%20blue%20lighting%2C%20wide%20angle%20view%20showing%20spacious%20layout%2C%20high-quality%20professional%20photography%2C%20cinematic%20fitness%20environment&width=1280&height=720&seq=about3&orientation=landscape"
              alt="Gym video thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;