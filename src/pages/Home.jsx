import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import ProgramSlider from '../components/ui/ProgramSlider';
import TrainerCard from '../components/ui/TrainerCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import { programs, trainers, testimonials } from '../utils/constants';
import { Button } from '../components/common/Button';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection
        title="Transform Your Body."
        highlightedText="Transform Your Life."
        description="EliteX Fitness offers premium training experiences with state-of-the-art equipment and expert coaches to help you achieve your fitness goals."
        image="https://readdy.ai/api/search-image?query=A%20dynamic%20fitness%20gym%20environment%20with%20modern%20equipment%2C%20dark%20atmosphere%20with%20dramatic%20lighting%2C%20energetic%20people%20working%20out%2C%20high-quality%20professional%20photography%20with%20shallow%20depth%20of%20field%2C%20motivational%20fitness%20atmosphere%2C%20cinematic%20lighting%20with%20red%20and%20blue%20accent%20lights&width=1920&height=1080&seq=hero1&orientation=landscape"
        imageAlt="Gym atmosphere"
        buttons={[
          { label: 'Join Now', className: 'bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer' },
          { label: 'Book a Trial', className: 'bg-[#00F0FF] hover:bg-[#00F0FF]/80 text-black px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer' },
        ]}
        height="h-screen"
      />
      <section className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="text-white cursor-pointer"
        >
          <i className="fas fa-chevron-down text-3xl"></i>
        </button>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Elite Programs</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our specialized fitness programs designed to transform your body and elevate your performance.
            </p>
          </div>
          <ProgramSlider programs={programs} />
        </div>
      </section>

      <section className="py-20 bg-[#222]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Elite Trainers</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our certified professionals are dedicated to helping you achieve your fitness goals with personalized training.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how EliteX Fitness has transformed the lives of our members.
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Dramatic%20fitness%20motivation%20scene%20with%20silhouettes%20of%20people%20working%20out%20against%20a%20dark%20background%20with%20red%20and%20blue%20lighting%2C%20inspirational%20gym%20environment%2C%20cinematic%20lighting%2C%20professional%20fitness%20photography%20with%20dramatic%20shadows&width=1920&height=800&seq=cta1&orientation=landscape"
            alt="Motivational gym scene"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              "The only bad workout is the one that didn't happen."
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-10">
              Start your fitness journey today and become the best version of yourself.
            </p>
            <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white px-10 py-7 text-xl animate-pulse !rounded-button whitespace-nowrap cursor-pointer">
              Join EliteX Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;