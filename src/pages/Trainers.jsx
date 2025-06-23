import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import TrainerCard from '../components/ui/TrainerCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import { Button } from '../components/common/Button';
import { trainers, trainerTestimonials } from '../utils/constants';

const Trainers = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection
        title="Meet Our"
        highlightedText="Elite Trainers"
        description="Our certified professionals are dedicated to helping you achieve your fitness goals."
        image="https://readdy.ai/api/search-image?query=Professional%20fitness%20trainers%20team%20in%20a%20modern%20gym%20with%20dark%20atmosphere%2C%20dramatic%20lighting%2C%20trainers%20in%20matching%20black%20outfits%2C%20confident%20poses%2C%20high-quality%20professional%20photography&width=1920&height=800&seq=trainers1&orientation=landscape"
        imageAlt="Trainers team"
      />

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6 md:mb-0">Our Trainers</h2>
            <div className="flex flex-wrap gap-4">
              {[
                'All Trainers',
                'Strength & Conditioning',
                'Cardio & HIIT',
                'Yoga & Flexibility',
                'Nutrition',
              ].map((filter) => (
                <Button
                  key={filter}
                  className={`${
                    filter === 'All Trainers'
                      ? 'bg-[#FF3A3A] hover:bg-[#FF3A3A]/80'
                      : 'bg-[#222] hover:bg-[#333]'
                  } text-white !rounded-button whitespace-nowrap cursor-pointer`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#222]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trainer Spotlight</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Get to know our featured trainer of the month and their unique approach to fitness.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20male%20fitness%20trainer%20in%20action%2C%20demonstrating%20exercise%20technique%20with%20a%20client%2C%20in%20a%20modern%20gym%20environment%20with%20dark%20atmosphere%20and%20dramatic%20lighting%20with%20red%20accents%2C%20professional%20fitness%20photography&width=800&height=600&seq=trainers2&orientation=landscape"
                alt="Trainer spotlight"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-2">Alex Morgan</h3>
              <p className="text-[#00F0FF] text-xl mb-6">Strength & Conditioning Specialist</p>
              <div className="space-y-6 text-white/80">
                <p>
                  "My approach to fitness is holistic. I believe that true strength comes from building a solid foundation of functional movement patterns before progressing to more specialized training."
                </p>
                <p>
                  "What I love most about being a trainer at EliteX is seeing the transformation in my clients - not just physically, but in their confidence and overall approach to life's challenges."
                </p>
                <p>
                  "If I could give one piece of advice to someone starting their fitness journey, it would be to focus on consistency over intensity. Small, sustainable habits lead to remarkable long-term results."
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/80 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  Book with Alex
                </Button>
                <Button className="bg-transparent border border-white hover:bg-white/10 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  View Training Philosophy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Hear what our clients have to say about their experiences with our trainers.
            </p>
          </div>
          <TestimonialSlider testimonials={trainerTestimonials} />
        </div>
      </section>
    </div>
  );
};

export default Trainers;